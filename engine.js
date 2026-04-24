// ── SHARED FLASHCARD ENGINE ──
// Requires window.CARDS, window.LABELS
// Optional: window.FILTER_GROUPS for two-level filter

let filtered = [], cur = 0, got = 0, nope = 0, flipped = false;
let missed = [];
let activeGroup = null;
let cardStatuses = {}; // track status per index in current filtered set

// ── STORAGE KEY — unique per page ──
function storageKey() {
  return 'fc_progress_' + (window.DECK_ID || location.pathname);
}

// ── SAVE: store result for a card (keyed by question text) ──
function saveResult(card, result) {
  try {
    const raw = localStorage.getItem(storageKey());
    const data = raw ? JSON.parse(raw) : {};
    data[card.f] = result;
    localStorage.setItem(storageKey(), JSON.stringify(data));
  } catch(e) {}
}

// ── LOAD: get all saved results ──
function loadResults() {
  try {
    const raw = localStorage.getItem(storageKey());
    return raw ? JSON.parse(raw) : {};
  } catch(e) { return {}; }
}

// ── CLEAR saved progress ──
function clearProgress() {
  try { localStorage.removeItem(storageKey()); } catch(e) {}
}

// ── GET saved status for a single card ──
function getStatus(card) {
  const data = loadResults();
  return data[card.f] || null;
}

// ── COUNT saved results across current filtered set ──
function countSaved() {
  const data = loadResults();
  let g = 0, n = 0;
  filtered.forEach(c => {
    if (data[c.f] === 'got') g++;
    else if (data[c.f] === 'nope') n++;
  });
  return { got: g, nope: n };
}

// ── BUILD FILTERS ──
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

// ── GRID NAVIGATOR ──
function buildGridNav() {
  // Inject overlay + panel if not yet present
  if (!document.getElementById('grid-overlay')) {
    // overlay backdrop
    const overlay = document.createElement('div');
    overlay.id = 'grid-overlay';
    overlay.onclick = closeGrid;
    document.body.appendChild(overlay);

    // side panel
    const panel = document.createElement('div');
    panel.id = 'grid-panel';
    panel.innerHTML = `
      <div class="grid-header">
        <span id="grid-title">Cards</span>
        <button class="grid-close-btn" onclick="closeGrid()">✕</button>
      </div>
      <div class="grid-legend">
        <span class="gl-dot gl-unseen"></span>Unseen
        <span class="gl-dot gl-got"></span>Got it
        <span class="gl-dot gl-nope"></span>Practice
        <span class="gl-dot gl-cur"></span>Current
      </div>
      <div id="grid-dots"></div>
    `;
    document.body.appendChild(panel);
  }

  renderGridDots();
}

function renderGridDots() {
  const container = document.getElementById('grid-dots');
  const title     = document.getElementById('grid-title');
  if (!container) return;
  title.textContent = filtered.length + ' Cards';
  container.innerHTML = '';
  const data = loadResults();

  filtered.forEach((card, i) => {
    const btn = document.createElement('button');
    btn.className = 'grid-dot';
    btn.textContent = i + 1;

    // determine state
    const saved = data[card.f];
    if (i === cur) {
      btn.classList.add('gd-cur');
    } else if (cardStatuses[i] === 'got' || saved === 'got') {
      btn.classList.add('gd-got');
    } else if (cardStatuses[i] === 'nope' || saved === 'nope') {
      btn.classList.add('gd-nope');
    }

    btn.onclick = () => {
      jumpTo(i);
      closeGrid();
    };
    container.appendChild(btn);
  });
}

function openGrid() {
  buildGridNav();
  document.getElementById('grid-overlay').classList.add('active');
  document.getElementById('grid-panel').classList.add('active');
}

function closeGrid() {
  const o = document.getElementById('grid-overlay');
  const p = document.getElementById('grid-panel');
  if (o) o.classList.remove('active');
  if (p) p.classList.remove('active');
}

function jumpTo(index) {
  if (index < 0 || index >= filtered.length) return;
  cur = index;
  flipped = false;
  render();
}

// ── RENDER CARD ──
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

  // show saved status badge on front face
  const hint = document.querySelector('.face-hint');
  const status = getStatus(c);
  if (hint) {
    if (status === 'got')  hint.textContent = '✅ Previously got it — tap to review';
    else if (status === 'nope') hint.textContent = '🔁 Previously flagged — tap to review';
    else hint.textContent = 'Tap to reveal →';
  }

  document.getElementById('card-inner').classList.remove('flipped');
  document.getElementById('btn-row').style.display  = 'none';
  document.getElementById('flip-btn').style.display = 'block';
  document.getElementById('done').style.display     = 'none';
  document.querySelector('.card-area').style.display = 'block';

  // prev/next buttons
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = (cur === 0);
  if (nextBtn) nextBtn.disabled = (cur >= filtered.length - 1);

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
  const card = filtered[cur];
  if (g) {
    got++;
    cardStatuses[cur] = 'got';
    saveResult(card, 'got');
  } else {
    nope++;
    missed.push(card);
    cardStatuses[cur] = 'nope';
    saveResult(card, 'nope');
  }
  cur++; render();
}

// go to previous card (no scoring change)
function prevCard() {
  if (cur <= 0) return;
  cur--;
  flipped = false;
  render();
}

// go to next card without scoring
function nextCard() {
  if (cur >= filtered.length - 1) return;
  cur++;
  flipped = false;
  render();
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

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = true;
  if (nextBtn) nextBtn.disabled = true;

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

  const saved = countSaved();
  const totalSeen = saved.got + saved.nope;
  const subEl = document.getElementById('done-saved');
  if (subEl) {
    subEl.textContent = totalSeen > 0
      ? '💾 Saved: ' + saved.got + ' known · ' + saved.nope + ' to review — across all sessions'
      : '';
  }
}

function practiceMissed() {
  filtered = [...missed];
  missed = [];
  cardStatuses = {};
  cur = 0; got = 0; nope = 0; flipped = false;
  document.getElementById('done').style.display = 'none';
  document.querySelector('.card-area').style.display = 'block';
  render();
}

function restart() {
  cur = 0; got = 0; nope = 0; flipped = false; missed = [];
  cardStatuses = {};
  document.getElementById('done').style.display = 'none';
  document.querySelector('.card-area').style.display = 'block';
  render();
}

function clearAndRestart() {
  if (!confirm('Clear all saved progress for this deck?')) return;
  clearProgress();
  restart();
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

// ── INJECT NAV BAR (prev / grid / next) into the page ──
function injectNavBar() {
  // Insert after .card-area or before .btn-flip
  const flipBtn = document.getElementById('flip-btn');
  if (!flipBtn) return;

  const nav = document.createElement('div');
  nav.id = 'card-nav';
  nav.innerHTML = `
    <button class="nav-btn" id="prev-btn" onclick="prevCard()" title="Previous card">‹ Prev</button>
    <button class="nav-grid-btn" onclick="openGrid()" title="Jump to card">⊞ All cards</button>
    <button class="nav-btn" id="next-btn" onclick="nextCard()" title="Next card">Next ›</button>
  `;
  flipBtn.parentNode.insertBefore(nav, flipBtn);
}

function initDeck() {
  initDark();
  filtered = [...window.CARDS];
  buildFilters();
  injectNavBar();
  render();
}
