// ── SHARED FLASHCARD ENGINE ──
// Include this script after defining: window.CARDS and window.LABELS

let filtered = [], cur = 0, got = 0, nope = 0, flipped = false;

function buildFilters() {
  const fr = document.getElementById('filters');
  if (!fr) return;
  fr.innerHTML = '';
  const cats = [...new Set(window.CARDS.map(c => c.cat))];
  const makeBtn = (label, val) => {
    const b = document.createElement('button');
    b.className = 'fb' + (val === 'all' ? ' active' : '');
    b.textContent = label;
    b.onclick = () => setFilter(val, b);
    fr.appendChild(b);
  };
  makeBtn('All', 'all');
  cats.forEach(c => makeBtn((window.LABELS[c] || c), c));
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
  if (g) got++; else nope++;
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
}

function restart() {
  cur = 0; got = 0; nope = 0; flipped = false;
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
