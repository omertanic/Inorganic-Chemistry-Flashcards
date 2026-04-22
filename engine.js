// ── SHARED FLASHCARD ENGINE ──
// Requires window.CARDS, window.LABELS
// Optional: window.FILTER_GROUPS for two-level filter

let filtered = [], cur = 0, got = 0, nope = 0, flipped = false;
let missed = [];
let activeGroup = null;

function buildFilters() {
  const fr = document.getElementById('filters');
  if (!fr) return;
  fr.innerHTML = '';
  if (window.FILTER_GROUPS) {
    buildTwoLevelFilters(fr);
  } else {
    buildFlatFilters(fr);
  }
}

function buildFlatFilters(fr) {
  const cats = [...new Set(window.CARDS.map(c => c.cat))];
  const makeBtn = (label, val) => {
    const b = document.createElement('button');
    b.className = 'fb' + (val === 'all' ? ' active' : '');
    b.textContent = label;
    b.onclick = () => setFilter(val, b);
    fr.appendChild(b);
  };
  makeBtn('All', 'all');
  cats.forEach(c => makeBtn(window.LABELS[c] || c, c));
}

function buildTwoLevelFilters(fr) {
  const row1 = document.createElement('div');
  row1.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;justify-content:center;width:100%;';

  const allBtn = document.createElement('button');
  allBtn.className = 'fb active';
  allBtn.textContent = 'All';
  allBtn.onclick = () => {
    activeGroup = null;
    document.querySelectorAll('.fb-group').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderSubFilters(null);
    filtered = [...window.CARDS];
    restart();
  };
  row1.appendChild(allBtn);

  window.FILTER_GROUPS.forEach(grp => {
    const b = document.createElement('button');
    b.className = 'fb fb-group';
    b.textContent = grp.label;
    b.onclick = () => {
      activeGroup = grp;
      document.querySelectorAll('.fb-group, .fb').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderSubFilters(grp);
      filtered = window.CARDS.filter(c => grp.cats.includes(c.cat));
      restart();
    };
    row1.appendChild(b);
  });
  fr.appendChild(row1);

  const row2 = document.createElement('div');
  row2.id = 'sub-filters';
  row2.style.cssText = 'display:flex;gap:5px;flex-wrap:wrap;justify-content:center;width:100%;margin-top:5px;min-height:28px;';
  fr.appendChild(row2);
}

function renderSubFilters(grp) {
  const row2 = document.getElementById('sub-filters');
  if (!row2) return;
  row2.innerHTML = '';
  if (!grp) return;
  grp.cats.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'fb fb-sub';
    b.style.fontSize = '10px';
    b.textContent = window.LABELS[cat] || cat;
    b.onclick = () => {
      document.querySelectorAll('.fb-sub').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      filtered = window.CARDS.filter(c => c.cat === cat);
      restart();
    };
    row2.appendChild(b);
  });
}

function setFilter(val, btn) {
  document.querySelectorAll('.fb').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filtered = val === 'all' ? [...window.CARDS] : window.CARDS.filter(c => c.cat === val);
  restart();
}

function render() {
  if (cur >= filtered.length) { showDone(); return; }
  const c = filtered[cur];
  const fc = document.getElementById('f-cat');
  fc.textContent = (window.LABELS[c.cat] || c.cat).replace(/-/g, ' ');
  fc.className = 'cat-badge ' + c.cl;
  document.getElementById('f-main').textContent = c.f;
  document.getElementById('f-sub').textContent  = c.fs || '';
  document.getElementById('b-main').textContent = c.b;
  document.getElementById('b-sub').textContent  = c.bs || '';
  const note = document.getElementById('b-note');
  note.textContent = c.n || '';
  note.style.display = c.n ? 'block' : 'none';
  document.getElementById('card-inner').classList.remove('flipped');
  document.getElementById('btn-row').style.display  = 'none';
  document.getElementById('flip-btn').style.display = 'block';
  document.getElementById('done').style.display     = 'none';
  document.querySelector('.card-area').style.display = 'block';
  updateStats();
  flipped = false;
}

function flip() {
  if (flipped) return;
  flipped = true;
  document.getElementById('card-inner').classList.add('flipped');
  document.getElementById('btn-row').style.display  = 'flex';
  document.getElementById('flip-btn').style.display = 'none';
}

function next(g) {
  if (g) got++;
  else { nope++; missed.push(filtered[cur]); }
  cur++; render();
}

function updateStats() {
  const left = filtered.length - cur;
  document.getElementById('s-got').textContent  = 'Got: '      + got;
  document.getElementById('s-nope').textContent = 'Practice: ' + nope;
  document.getElementById('s-left').textContent = 'Left: '     + left;
  const pct = filtered.length > 0 ? Math.round((cur / filtered.length) * 100) : 0;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-text').textContent =
    Math.min(cur + 1, filtered.length) + ' / ' + filtered.length;
}

function showDone() {
  document.querySelector('.card-area').style.display = 'none';
  document.getElementById('btn-row').style.display   = 'none';
  document.getElementById('flip-btn').style.display  = 'none';
  document.getElementById('done').style.display      = 'block';
  document.getElementById('prog-fill').style.width   = '100%';
  document.getElementById('prog-text').textContent   = filtered.length + ' / ' + filtered.length;
  const pct = filtered.length > 0 ? Math.round((got / filtered.length) * 100) : 0;
  document.getElementById('done-title').textContent =
    pct >= 80 ? 'Solid! ' + got + '/' + filtered.length + ' correct'
              : 'Keep grinding — ' + got + '/' + filtered.length;
  document.getElementById('done-sub').textContent =
    pct >= 80 ? 'Great retention. Move to the next category.'
              : 'Review the ones you missed and run the deck again.';

  const practiceBtn = document.getElementById('practice-missed');
  if (practiceBtn) {
    if (missed.length > 0) {
      practiceBtn.style.display = 'inline-block';
      practiceBtn.textContent = '🔁 Practice missed (' + missed.length + ')';
    } else {
      practiceBtn.style.display = 'none';
    }
  }
}

function practiceMissed() {
  filtered = [...missed];
  missed = [];
  cur = 0; got = 0; nope = 0; flipped = false;
  document.getElementById('done').style.display = 'none';
  document.querySelector('.card-area').style.display = 'block';
  render();
}

function restart() {
  cur = 0; got = 0; nope = 0; flipped = false; missed = [];
  document.getElementById('done').style.display = 'none';
  document.querySelector('.card-area').style.display = 'block';
  render();
}

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('dark-btn').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark ? '1' : '0');
}

function initDark() {
  if (localStorage.getItem('darkMode') === '1') {
    document.body.classList.add('dark');
    const btn = document.getElementById('dark-btn');
    if (btn) btn.textContent = '☀️';
  }
}

function initDeck() {
  initDark();
  filtered = [...window.CARDS];
  buildFilters();
  render();
}
