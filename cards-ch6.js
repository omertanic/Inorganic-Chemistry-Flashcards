window.LABELS = {
  'h2-prep':      'H₂ Preparation',
  'h2-rxns':      'H₂ Reactions',
  'h2o2-prep':    'H₂O₂ Prep',
  'h2o2-rxns':    'H₂O₂ Reactions',
  'h2o2-props':   'H₂O₂ Properties',
  'op-order':     'O.P. Order',
  's1-oxides':    'Alkali Oxides',
  's1-ammonia':   'Metal + NH₃',
  's1-nitrates':  'Alkali Nitrates',
  's1-carbonate': 'Na₂CO₃ / NaHCO₃',
  's1-hydroxide': 'NaOH',
  's1-misc':      'Alkali Misc',
  's2-be':        'Be Compounds',
  's2-mg':        'Mg Compounds',
  's2-ca':        'Ca Compounds',
  's2-misc':      'S-Block Misc',
  'water':        'Water Reactions',
  'syngas':       'Syngas / Industrial',
};

window.FILTER_GROUPS = [
  { label: 'Hydrogen',   cats: ['h2-prep','h2-rxns','water','syngas'] },
  { label: 'H₂O₂',      cats: ['h2o2-prep','h2o2-rxns','h2o2-props'] },
  { label: 'O.P. Order', cats: ['op-order'] },
  { label: 'S-Block: 1', cats: ['s1-oxides','s1-ammonia','s1-nitrates','s1-carbonate','s1-hydroxide','s1-misc'] },
  { label: 'S-Block: 2', cats: ['s2-be','s2-mg','s2-ca','s2-misc'] },
];

window.CARDS = [

  // ── OXIDISING POWER ORDER ──
  { cat:'op-order', cl:'c-sb-op',
    f:'Write the overall oxidising power (O.P.) order for common OAs?', fs:'Image 1 — top line',
    b:'F₂ > O₃ > CaOCl₂ > S₂O₈²⁻ > Bi⁺⁵ > Pb⁺⁴ > MnO₄⁻, H⁺ > H₂O₂ > Cr₂O₇²⁻, H⁺\nCl₂ > HNO₃ > H₂SO₄ > Br₂ > HNO₂ >\nI₂ > H₂O₂ / on⁻',
    bs:'F₂ is the strongest, on⁻ (hypochlorite) weakest in this list', n:'' },

  // ── H₂ PREPARATION ──
  { cat:'h2-prep', cl:'c-sb-h2',
    f:'Zn + HCl → ? / Zn + NaOH → ?', fs:'Lab prep of H₂',
    b:'Zn + 2HCl → ZnCl₂ + H₂↑\nZn + 2NaOH → Na₂ZnO₂ + H₂↑',
    bs:'Amphoteric Zn reacts with both acid and base', n:'' },

  { cat:'h2-prep', cl:'c-sb-h2',
    f:'H₂O →(electrolysis, H⁺ catalyst) ? — Anode and cathode products?', fs:'Electrolysis of water',
    b:'Anode: OH⁻ → O₂↑\nCathode: H⁺ → H₂↑\nNet: 2H₂O → 2H₂↑ + O₂↑',
    bs:'Acidified water used for conductivity', n:'' },

  { cat:'h2-prep', cl:'c-sb-h2',
    f:'NaCl(brine) →(electrolysis) ? — products at C (cathode) and A (anode)?', fs:'Chlor-alkali / Brine electrolysis',
    b:'Cathode (C): H⁺ → H₂↑\nAnode (A): Cl⁻ → Cl₂↑\nNaOH formed in solution\nNet: 2NaCl + 2H₂O → Cl₂ + H₂ + 2NaOH',
    bs:'', n:'' },

  // ── SYNGAS / INDUSTRIAL H₂ ──
  { cat:'syngas', cl:'c-sb-syn',
    f:'CH₄ + H₂O →(1270K, Ni) ? [Steam reforming]', fs:'Syngas preparation',
    b:'CH₄ + H₂O → CO + 3H₂ (syngas / water gas)',
    bs:'Used industrially to produce H₂', n:'' },

  { cat:'syngas', cl:'c-sb-syn',
    f:'C(s) + H₂O →(1270K) ? [Coal gasification]', fs:'',
    b:'C + H₂O → CO + H₂ (water gas)\nC + O₂ → CO₂; CO₂ + C → 2CO (producer gas)',
    bs:'Producer gas = CO + N₂; Water gas = CO + H₂', n:'' },

  { cat:'syngas', cl:'c-sb-syn',
    f:'CO(g) + H₂O(g) →(673K) ? [Water gas shift reaction]', fs:'',
    b:'CO + H₂O → CO₂ + H₂↑\nUsed to increase H₂ yield and remove CO',
    bs:'Catalyst: Fe₂O₃/Cr₂O₃', n:'' },

  { cat:'syngas', cl:'c-sb-syn',
    f:'3H₂ + N₂ →(Fe, 673K, 200 atm) ? [Haber\'s process]', fs:'',
    b:'N₂ + 3H₂ →(Fe, 400–500°C, 200 atm) → 2NH₃(g), ΔH = −ve\nFe is catalyst; Al₂O₃ is promoter',
    bs:'High P favours product; compromise T = 450°C', n:'' },

  { cat:'syngas', cl:'c-sb-syn',
    f:'CO + H₂ + R−CH=CH₂ →(Co catalyst) ? [Hydroformylation / Oxo process]', fs:'',
    b:'R−CH=CH₂ + CO + H₂ →(Co) → R−CH₂−CH₂−CHO (aldehyde)',
    bs:'Adds −CHO across C=C double bond', n:'' },

  { cat:'syngas', cl:'c-sb-syn',
    f:'CO + H₂ →(Co catalyst) CH₃OH / CO + 2H₂ → CH₄ [Methanation]', fs:'Syngas uses',
    b:'CO + 2H₂ →(Co/ZnO) → CH₃OH (methanol synthesis)\nCO + 3H₂ →(Ni) → CH₄ + H₂O (methanation)',
    bs:'', n:'' },

  // ── H₂ REACTIONS ──
  { cat:'h2-rxns', cl:'c-sb-h2',
    f:'Na + H₂ → ? / NaH + H₂O → ?', fs:'Metal hydrides',
    b:'2Na + H₂ → 2NaH (sodium hydride)\nNaH + H₂O → NaOH + H₂↑',
    bs:'Ionic hydrides react vigorously with water', n:'' },

  { cat:'h2-rxns', cl:'c-sb-h2',
    f:'LiH + AlCl₃ → ? / LiH + B₂H₆ → ?', fs:'Complex hydride formation',
    b:'4LiH + AlCl₃ → LiAlH₄ + 3LiCl (lithium aluminium hydride)\n2LiH + B₂H₆ → 2LiBH₄ (lithium borohydride)',
    bs:'LiAlH₄ and LiBH₄ are powerful reducing agents', n:'' },

  { cat:'h2-rxns', cl:'c-sb-h2',
    f:'CO + H₂ →(Co) → CH₃OH  /  NaH + CO + H₂ → NaH(CO)…  /  13) NaH + H₂O → NaOH + H₂', fs:'',
    b:'CO + H₂ →(Co) → CH₃OH\nNaH + H₂O → NaOH + H₂↑\nCH₄ + H₂O →(Ni, Δ) → CO + 3H₂ (reverse — steam reforming)',
    bs:'', n:'' },

  // ── WATER REACTIONS ──
  { cat:'water', cl:'c-sb-h2o',
    f:'Na + H₂O → ? / F₂ + H₂O → ?', fs:'Metal and halogen with water',
    b:'2Na + 2H₂O → 2NaOH + H₂↑\nF₂ + H₂O → HF + O₂ (+ O₃ trace)\nCl₂ + H₂O ⇌ HCl + HClO',
    bs:'F₂ oxidises water; alkali metals reduce it', n:'' },

  { cat:'water', cl:'c-sb-h2o',
    f:'6CO₂ + 12H₂O →(hν, chlorophyll) ? [Photosynthesis]', fs:'',
    b:'6CO₂ + 12H₂O →(hν) → C₆H₁₂O₆ + 6H₂O + 6O₂↑',
    bs:'Light energy stored as glucose', n:'' },

  { cat:'water', cl:'c-sb-h2o',
    f:'P₄O₁₀ + H₂O → ? / Py₄O₁₀ + H₂O(less) → ? / Al₄C₃ + D₂O → ?', fs:'Oxide and carbide with water',
    b:'P₄O₁₀ + 6H₂O → 4H₃PO₄\nP₄O₆ + 6H₂O(cold) → 4H₃PO₃\nAl₄C₃ + 12D₂O → 4Al(OD)₃ + 3CD₄↑\nCaC₂ + D₂O → Ca(OD)₂ + C₂D₂',
    bs:'Deuterated compounds from D₂O', n:'' },

  { cat:'water', cl:'c-sb-h2o',
    f:'SiCl₄ + H₂O → ? / N³⁻ + H₂O → ? / Na + H₂O → NaOH + H₂', fs:'Hydrolysis reactions',
    b:'SiCl₄ + 2H₂O → SiO₂ + 4HCl\nN³⁻ + 3H₂O → NH₃ + 3OH⁻\nNa + H₂O → NaOH + ½H₂↑',
    bs:'', n:'' },

  { cat:'water', cl:'c-sb-h2o',
    f:'C₁₇H₃₅COO⁻Na⁺ (soap) + Ca²⁺/Mg²⁺ → ? [Scum]', fs:'Hard water + soap',
    b:'2C₁₇H₃₅COO⁻Na⁺ + Ca²⁺/Mg²⁺ → (C₁₇H₃₅COO)₂Ca/Mg↓ + 2Na⁺\nInsoluble calcium/magnesium stearate = scum',
    bs:'Permanent hardness — removed by washing soda or ion exchange', n:'' },

  { cat:'water', cl:'c-sb-h2o',
    f:'Mg(HCO₃)₂ →(Δ) ? [Temporary hardness removal by boiling]', fs:'',
    b:'Mg(HCO₃)₂ →(Δ) → Mg(OH)₂↓ + H₂O + CO₂↑\nCa(HCO₃)₂ →(Δ) → CaCO₃↓ + H₂O + CO₂↑ (Clark\'s process)',
    bs:'Temporary hardness only removed by boiling', n:'' },

  // ── H₂O₂ PREPARATION ──
  { cat:'h2o2-prep', cl:'c-sb-h2o2',
    f:'BaO₂·8H₂O + H₂SO₄ → ? [Lab prep of H₂O₂]', fs:'',
    b:'BaO₂·8H₂O + H₂SO₄ → BaSO₄↓ + H₂O₂ + H₂O\nBaSO₄ filtered off → pure H₂O₂',
    bs:'', n:'' },

  { cat:'h2o2-prep', cl:'c-sb-h2o2',
    f:'Industrial prep of H₂O₂ — 2-ethylanthraquinol method?', fs:'Anthraquinone / Riedl-Pfleiderer process',
    b:'2-Ethylanthraquinol + O₂ → H₂O₂ + 2-ethylanthraquinone\nMost industrial H₂O₂ made this way',
    bs:'Anthraquinone is regenerated and recycled', n:'' },

  { cat:'h2o2-prep', cl:'c-sb-h2o2',
    f:'K₂S₂O₈ + D₂O → ? / Electrolysis of H₂SO₄ → K₂S₂O₈ → H₂O₂', fs:'',
    b:'K₂S₂O₈ + D₂O → D₂O₂ + K₂SO₄ (deuterium peroxide)\nElectrolysis: 2H₂SO₄ → H₂S₂O₈ →(hydrolysis) → H₂O₂',
    bs:'', n:'' },

  // ── H₂O₂ PROPERTIES ──
  { cat:'h2o2-props', cl:'c-sb-h2o2',
    f:'H₂O₂ structure — bond angle, bond length, shape?', fs:'',
    b:'H−O−O−H\nO−O bond length = 148 pm (longer than O₂ = 121 pm)\nH−O−O angle ≈ 96.8° (open book shape)\nNon-planar (dihedral angle 111° in gas, 90° in solid)',
    bs:'Weakly acidic; Ka ~ 10⁻¹²', n:'' },

  { cat:'h2o2-props', cl:'c-sb-h2o2',
    f:'H₂O₂ → ? (decomposition) / What stabilises H₂O₂?', fs:'',
    b:'2H₂O₂ → 2H₂O + O₂↑ (disproportionation)\nCatalysed by: MnO₂, Fe³⁺, dust, light, base\nStabilised by: glycerol, acetanilide, phosphoric acid (slightly acidic)\nStored in wax-lined containers away from light',
    bs:'Pure H₂O₂ is pale blue oily liquid, bp 150°C', n:'' },

  { cat:'h2o2-props', cl:'c-sb-h2o2',
    f:'H₂O₂ acts as oxidising bleach or reducing bleach?', fs:'',
    b:'Primary action = oxidation → oxidising bleach\nBleaches hair, silk, feathers, ivory\nNa₂S₂O₃ = reducing bleach (primary action = reduction)',
    bs:'H₂O₂ can act as both OA and RA', n:'' },

  // ── H₂O₂ REACTIONS ──
  { cat:'h2o2-rxns', cl:'c-sb-h2o2',
    f:'H₂O₂ as OA (acidic medium) — 3 reactions?', fs:'H₂O₂ oxidising',
    b:'Fe²⁺ + H₂O₂ + H⁺ → Fe³⁺ + H₂O (Fenton\'s reagent)\nPbS + H₂O₂ → PbSO₄ + H₂O (restores paintings — PbS blackens, H₂O₂ whitens)\nI⁻ + H₂O₂ + H⁺ → I₂ + H₂O',
    bs:'', n:'' },

  { cat:'h2o2-rxns', cl:'c-sb-h2o2',
    f:'H₂O₂ as RA (acidic medium) — 3 reactions?', fs:'H₂O₂ reducing',
    b:'MnO₄⁻ + H₂O₂ + H⁺ → Mn²⁺ + O₂↑ + H₂O\nMnO₂ + H₂O₂ + H⁺ → Mn²⁺ + O₂↑ + H₂O\nCl₂ + H₂O₂ → 2HCl + O₂↑',
    bs:'Powerful OA like MnO₄⁻ oxidise H₂O₂ to O₂', n:'' },

  { cat:'h2o2-rxns', cl:'c-sb-h2o2',
    f:'H₂O₂ as RA (basic medium) — 2 reactions?', fs:'',
    b:'MnO₄⁻ + H₂O₂ + OH⁻ → MnO₂↓ + O₂↑ + H₂O\nI₂ + H₂O₂ + OH⁻ → I⁻ + O₂↑ + H₂O',
    bs:'', n:'' },

  { cat:'h2o2-rxns', cl:'c-sb-h2o2',
    f:'H₂O₂ + MnSO₄ + NH₃ → ? / H₂O₂ as OA in basic medium?', fs:'',
    b:'MnSO₄ + H₂O₂ + NH₃ → MnO(OH)↓ (brown ppt) + (NH₄)₂SO₄\nH₂O₂ oxidises Mn²⁺ → MnO(OH) in basic medium\nAlso: H₂O₂ + Mn⁴⁺ → Mn²⁺ + O₂ (OA)\nH₂O₂ + Mn⁷⁺ + H⁺ → Mn²⁺ + O₂ (RA)',
    bs:'', n:'' },

  // ── ALKALI METAL OXIDES (S-Block 1) ──
  { cat:'s1-oxides', cl:'c-sb-s1',
    f:'Li + O₂ → ? / Na + O₂ → ? / K,Rb,Cs + O₂ → ?', fs:'Alkali metals + O₂',
    b:'4Li + O₂ → 2Li₂O (normal oxide)\n2Na + O₂ → Na₂O₂ (peroxide, O₂²⁻)\nK/Rb/Cs + O₂ → KO₂/RbO₂/CsO₂ (superoxide, O₂⁻)',
    bs:'Li=oxide; Na=peroxide; K,Rb,Cs=superoxide', n:'' },

  { cat:'s1-oxides', cl:'c-sb-s1',
    f:'Na₂O₂ + H₂O → ? / Na₂O₂ + CO₂ → ? / KO₂ + H₂O → ?', fs:'Peroxide and superoxide reactions',
    b:'2Na₂O₂ + 2H₂O → 4NaOH + O₂↑\n2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂↑ (used in submarines — absorbs CO₂, releases O₂)\n4KO₂ + 2H₂O → 4KOH + 3O₂↑\n4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂↑',
    bs:'Superoxide releases more O₂ per mole', n:'' },

  { cat:'s1-oxides', cl:'c-sb-s1',
    f:'K/Rb/Cs also form carbonates — K + CO₂ → ? / Rb + CO₂ → ?', fs:'',
    b:'Rb₂CO₃ and CsCO₃ form directly from metal + CO₂ + O₂\nK + CO₂ → KO₂ + K₂CO₃ (mixed)',
    bs:'', n:'' },

  // ── ALKALI METAL + AMMONIA ──
  { cat:'s1-ammonia', cl:'c-sb-s1',
    f:'Alkali metal + liquid NH₃ → ? What colours? Diamagnetic or paramagnetic?', fs:'Solvated electron solutions',
    b:'M + (n+y)NH₃ → [M(NH₃)ₙ]⁺ + [e(NH₃)ᵧ]⁻\nDilute solution: Blue (paramagnetic — unpaired e⁻)\nConcentrated solution: Bronze/copper coloured (diamagnetic — e⁻ pairs)',
    bs:'Blue → bronze with increasing concentration', n:'' },

  { cat:'s1-ammonia', cl:'c-sb-s1',
    f:'M⁺(ammonia) + e⁻(solvated) → slow decomp → ?', fs:'Decomposition of metal-ammonia solution',
    b:'M + NH₃ (slow) → MNH₂ + ½H₂↑\n(Metal amide formed; catalysed by transition metals)',
    bs:'Solvated electrons are reducing agents (strongest known RA)', n:'' },

  // ── ALKALI NITRATES ──
  { cat:'s1-nitrates', cl:'c-sb-s1',
    f:'LiNO₃ →(Δ) ? / NaNO₃ →(<500°C) ? / KNO₃/RbNO₃/CsNO₃ →(Δ) ?', fs:'Alkali metal nitrate decomposition',
    b:'LiNO₃ → Li₂O + NO₂↑ + O₂↑ (like Mg — diagonal)\nNaNO₃ (<500°C) → NaNO₂ + O₂↑\nNaNO₃ (>500°C) → Na₂O + N₂ + O₂\nKNO₃/RbNO₃/CsNO₃ → MNO₂ + O₂↑',
    bs:'Li = oxide (diagonal with Mg); others = nitrite', n:'' },

  { cat:'s1-nitrates', cl:'c-sb-s1',
    f:'NH₄HCO₃ + NaCl → NaHCO₃↓ + NH₄Cl [Solvay] / NaHCO₃ →(Δ) ?', fs:'Solvay process',
    b:'NH₃ + H₂O + CO₂ → (NH₄)₂CO₃ → NH₄HCO₃\nNH₄HCO₃ + NaCl → NaHCO₃↓ + NH₄Cl (NaHCO₃ precipitates)\n2NaHCO₃ →(Δ) → Na₂CO₃ + CO₂ + H₂O (calcination)\nNH₄Cl + Ca(OH)₂ → CaCl₂ + NH₃↑ (NH₃ recovered)',
    bs:'', n:'' },

  { cat:'s1-nitrates', cl:'c-sb-s1',
    f:'NH₄NO₃ → NaHCO₃ / NaHCO₃ + NaCl reaction — what precipitates?', fs:'',
    b:'NH₄NO₃ + NaCl → NaHCO₃↓ in Solvay (note: NH₄HCO₃ + NaCl)\nNaHCO₃ less soluble than Na₂CO₃ and NH₄Cl → precipitates out',
    bs:'', n:'' },

  // ── Na₂CO₃ / NaHCO₃ ──
  { cat:'s1-carbonate', cl:'c-sb-s1',
    f:'Na₂CO₃·10H₂O →(Δ) ? / Na₂CO₃·H₂O →(>373K) ?', fs:'Efflorescence of washing soda',
    b:'Na₂CO₃·10H₂O →(Δ) → Na₂CO₃·H₂O + 9H₂O (effloresces in air)\nNa₂CO₃·H₂O →(>100°C) → anhydrous Na₂CO₃\nNaHCO₃ →(>373K) → Na₂CO₃ + H₂O + CO₂ (soda ash — white solid)',
    bs:'', n:'' },

  { cat:'s1-carbonate', cl:'c-sb-s1',
    f:'NaHCO₃ + NaOH → ? / Na₂CO₃ + CO₂ + H₂O → ?', fs:'Carbonate reactions',
    b:'NaHCO₃ + NaOH → Na₂CO₃ + H₂O\nNa₂CO₃ + CO₂ + H₂O → 2NaHCO₃\nNa₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂↑',
    bs:'', n:'' },

  { cat:'s1-carbonate', cl:'c-sb-s1',
    f:'NH₄NO₃ + NaCl + CO₂ + H₂O → NaHCO₃ + NH₄Cl [Solvay] / NH₄HCO₃ + NaCl → ?', fs:'',
    b:'NH₄HCO₃ + NaCl → NaHCO₃↓ + NH₄Cl\nNaHCO₃ ← precipitates because least soluble\n2NaHCO₃ →(Δ) → Na₂CO₃ + H₂O + CO₂',
    bs:'', n:'' },

  // ── NaOH ──
  { cat:'s1-hydroxide', cl:'c-sb-s1',
    f:'NaOH + SO₂ → Na₂SO₃ / NaOH + CO₂ → Na₂CO₃ / NaOH + conc H₂SO₄ → ?', fs:'NaOH reactions',
    b:'2NaOH + SO₂ → Na₂SO₃ + H₂O\n2NaOH + CO₂ → Na₂CO₃ + H₂O\nNaOH + H₂SO₄ → Na₂SO₄ + H₂O',
    bs:'', n:'' },

  // ── ALKALI MISC ──
  { cat:'s1-misc', cl:'c-sb-s1',
    f:'Na₂SO₄ + BaO₂ → ? / CaCl₂(aq) + Na₂CO₃ → ? / BaSO₄(aq) + Na₂CO₃ → ?', fs:'Double decomposition / metathesis',
    b:'CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl\nBaSO₄ + Na₂CO₃ → BaCO₃↓ + Na₂SO₄\nMgSO₄ + Na₂CO₃ → MgCO₃↓ + Na₂SO₄',
    bs:'Used in water softening and preparation of insoluble salts', n:'' },

  { cat:'s1-misc', cl:'c-sb-s1',
    f:'Calgon (Na₆P₆O₁₈) — structure, ionisation, and how it removes hardness?', fs:'',
    b:'Na₆P₆O₁₈ → 2Na⁺ + Na₄P₆O₁₈²⁻\nNa₄P₆O₁₈²⁻ + Ca²⁺ → [Na₂Ca(P₆O₁₈)]²⁻ (soluble complex)\nForms soluble complex with Ca²⁺/Mg²⁺ → removes permanent hardness',
    bs:'Na₆P₆O₁₈ = sodium hexametaphosphate (Calgon)', n:'' },

  // ── BERYLLIUM COMPOUNDS ──
  { cat:'s2-be', cl:'c-sb-s2',
    f:'BeO + C + Cl₂ → ? / (NH₄)₂BeF₄ →(Δ) ? / BeCl₂ + LiAlH₄ → ?', fs:'Be compound prep',
    b:'BeO + C + Cl₂ → BeCl₂ + CO\n(NH₄)₂BeF₄ →(Δ) → BeF₂ + 2NH₄F → BeF₂ + 2NH₃ + 2HF\nBeCl₂ + LiAlH₄ → BeH₂ + LiCl + AlCl₃',
    bs:'', n:'' },

  { cat:'s2-be', cl:'c-sb-s2',
    f:'Be(NO₃)₂ →(Δ) ? [Anomalous behaviour of Be]', fs:'',
    b:'Be(NO₃)₂ →(Δ) → Be(MgO or) → BeO + NO₂↑ + O₂↑\nSimilar to Mg(NO₃)₂ → MgO + NO₂ + O₂',
    bs:'Be shows diagonal relationship with Al; Li with Mg', n:'' },

  { cat:'s2-be', cl:'c-sb-s2',
    f:'BeCH₄ structure? / BeH₂ + NMe₃ → ? / BeCH₄ in organic vs ionic?', fs:'',
    b:'BeCH₄ is covalent (small Be, high charge density)\nBeH₂ + 2NMe₃ → Me₃N→BeH₂←NMe₃ (Lewis acid-base adduct)\nBe polymeric: bridged Be−H−Be chain structure (similar to diborane)',
    bs:'', n:'' },

  // ── MAGNESIUM COMPOUNDS ──
  { cat:'s2-mg', cl:'c-sb-s2',
    f:'Mg + N₂ → ? / Mg + O₂ → ? / Mg burning in CO₂ → ?', fs:'Mg reactions',
    b:'3Mg + N₂ → Mg₃N₂ (magnesium nitride)\n2Mg + O₂ → 2MgO\n2Mg + CO₂ → 2MgO + C (Mg burns in CO₂)',
    bs:'Mg burns in CO₂ — don\'t use CO₂ extinguisher on Mg fire!', n:'' },

  { cat:'s2-mg', cl:'c-sb-s2',
    f:'Mg(HCO₃)₂ →(Δ) ? / MgCO₃ →(Δ) ? / MgO + H₂O → ?', fs:'',
    b:'Mg(HCO₃)₂ →(Δ) → Mg(OH)₂↓ + CO₂ + H₂O\nMgCO₃ →(Δ) → MgO + CO₂\nMgO + H₂O → Mg(OH)₂ (milk of magnesia)',
    bs:'', n:'' },

  { cat:'s2-mg', cl:'c-sb-s2',
    f:'NH₃ + H₂O + CO₂ + MgCl₂ → ? [Milk of Magnesia / Mg salts]', fs:'',
    b:'MgCl₂ + 2NH₃ + 2H₂O → Mg(OH)₂↓ + 2NH₄Cl\nMg(OH)₂ = milk of magnesia (antacid)\nMg(OH)₂ + 2HCl → MgCl₂ + 2H₂O',
    bs:'', n:'' },

  // ── CALCIUM COMPOUNDS ──
  { cat:'s2-ca', cl:'c-sb-s2',
    f:'CaO →(+H₂O) ? / CaO →(+CO₂) ? / CaO →(+SiO₂) ? / CaO →(+P₄O₁₀) ?', fs:'Quicklime (CaO) reactions',
    b:'CaO + H₂O → Ca(OH)₂ (slaked lime, strong exothermic)\nCaO + CO₂ → CaCO₃\nCaO + SiO₂ → CaSiO₃ (slag — used in metallurgy)\nCaO + P₄O₁₀ → Ca₃(PO₄)₂',
    bs:'', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'CaCO₃ →(Δ, >840°C) ? / CaCO₃ + CO₂ + H₂O → ? / CaCO₃ + 2HCl → ?', fs:'Limestone reactions',
    b:'CaCO₃ →(Δ) → CaO + CO₂↑ (calcination)\nCaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂ (soluble — limestone caves)\nCaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑',
    bs:'', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'Ca(OH)₂ + Cl₂ → ? [Bleaching powder] / Bleaching powder + H₂O → ? + CO₂ → ?', fs:'',
    b:'Ca(OH)₂ + Cl₂ → CaCl₂·Ca(OCl)₂·Ca(OH)₂ (bleaching powder)\nBleaching powder: Ca(OCl)Cl (bleaching agent = OCl⁻)\n+ CO₂+H₂O → CaCO₃ + HClO (active bleach = HClO)\n+ dil H₂SO₄ → Cl₂↑ (disinfection)',
    bs:'Milk of lime (Ca(OH)₂) + excess Cl₂ → bleaching powder', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O [Lime water test] / excess CO₂ → ?', fs:'',
    b:'Ca(OH)₂ + CO₂ → CaCO₃↓ (white, milky) + H₂O\nCaCO₃ + CO₂(excess) + H₂O → Ca(HCO₃)₂(aq) → milkiness disappears\n(SO₂ also gives milkiness — use K₂Cr₂O₇ paper to distinguish)',
    bs:'', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'CaSO₄·2H₂O →(120°C) ? [P.O.P.] / P.O.P. + H₂O → ? [Setting]', fs:'Gypsum and Plaster of Paris',
    b:'CaSO₄·2H₂O →(120°C) → CaSO₄·½H₂O (plaster of Paris) + 1½H₂O\nCaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O (hardens/sets)\nDead burnt plaster: heated >393K → CaSO₄ (anhydrous, no longer sets)',
    bs:'P.O.P. expands on setting — good for casts', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'CaD₂ + D₂O → Ca(OD)₂ + C₂D₂ / Ca(HCO₃)₂ →(Δ) ? / CaCl₂(aq) + Na₂CO₃ → ?', fs:'',
    b:'CaC₂ + D₂O → Ca(OD)₂ + C₂D₂↑ (deutero acetylene)\nCa(HCO₃)₂ →(Δ) → CaCO₃↓ + CO₂ + H₂O\nCaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl',
    bs:'', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'Cement: composition and what forms on setting?', fs:'Portland cement',
    b:'CaO > SiO₂ > Al₂O₃ (in ratio ~4:1:1)\n→ Aluminosilicate of calcium\nSetting: hydration + hydrolysis of calcium silicate/aluminate gels\n→ interlocking crystal network',
    bs:'', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'CaC₂ + N₂ →(1100°C) ? [Calcium cyanamide] / Li + N-C≡C-N → ?', fs:'Calcium carbide reactions',
    b:'CaC₂ + N₂ →(>1100°C) → CaCN₂ (calcium cyanamide, nitrolim) + C\nCaCN₂ + H₂O → CaCO₃ + NH₃ (used as fertiliser — releases NH₃)\nLi + N≡C−C≡N →(Δ) → X (high IE — not relevant)',
    bs:'Nitrolim = nitrogenous fertiliser', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'CaCl₂(aq) + Na₂CO₃ → ? / MgSO₄ + Na₂CO₃ → ? / BaSO₄ + Na₂CO₃ → ?', fs:'Double decomposition — removing hardness',
    b:'CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl\nMgSO₄ + Na₂CO₃ → MgCO₃↓ + Na₂SO₄\nBaSO₄ + Na₂CO₃ → BaCO₃↓ + Na₂SO₄\n(Washing soda removes permanent hardness)',
    bs:'Na₂CO₃ = washing soda', n:'' },

  { cat:'s2-ca', cl:'c-sb-s2',
    f:'Ca(HCO₃)₂ + Ca(OH)₂ → ? / Mg(HCO₃)₂ + Ca(OH)₂ → ? [Clark\'s process]', fs:'',
    b:'Ca(HCO₃)₂ + Ca(OH)₂ → 2CaCO₃↓ + 2H₂O\nMg(HCO₃)₂ + 2Ca(OH)₂ → 2CaCO₃↓ + Mg(OH)₂↓ + 2H₂O\n(Clark\'s process — removes temporary hardness with slaked lime)',
    bs:'', n:'' },

  // ── S-BLOCK MISC ──
  { cat:'s2-misc', cl:'c-sb-s2',
    f:'Ba + O₂ → BaO₂ / BaO₂ + H₂SO₄ → H₂O₂ + BaSO₄ / Ba + H₂O → ?', fs:'Barium reactions',
    b:'2Ba + O₂ → 2BaO (or BaO₂ with excess O₂)\nBaO₂·8H₂O + H₂SO₄ → H₂O₂ + BaSO₄↓ + H₂O\nBa + 2H₂O → Ba(OH)₂ + H₂↑\nBa(OH)₂ is most soluble alkaline earth hydroxide',
    bs:'', n:'' },

  { cat:'s2-misc', cl:'c-sb-s2',
    f:'BaO₂ + D₂O → ? / MgSO₄·7H₂O (Epsom salt) → uses?', fs:'',
    b:'BaO₂ + D₂O → D₂O₂ + BaO (deuterium peroxide via exchange)\nMgSO₄·7H₂O = Epsom salt (laxative, bath salts)\nCaSO₄·2H₂O = gypsum; CaSO₄·½H₂O = P.O.P.',
    bs:'', n:'' },

  { cat:'s2-misc', cl:'c-sb-s2',
    f:'Mg(NO₃)₂ →(Δ) ? / Ba(N₃)₂ →(Δ) ? / Na₂SO₄·10H₂O (Glauber\'s salt) →(Δ) ?', fs:'Heating s-block salts',
    b:'Mg(NO₃)₂ →(Δ) → MgO + NO₂↑ + O₂↑\nBa(N₃)₂ →(Δ) → Ba + N₂↑\nNa₂SO₄·10H₂O →(Δ) → Na₂SO₄ + 10H₂O (effloresces)',
    bs:'', n:'' },

  { cat:'s2-misc', cl:'c-sb-s2',
    f:'Be²⁺/Mg²⁺/Ca²⁺/Sr²⁺/Ba²⁺ flame colours?', fs:'',
    b:'Be²⁺: No colour (too small, high IE)\nMg²⁺: No colour\nCa²⁺: Brick red\nSr²⁺: Crimson red\nBa²⁺: Apple green\nAll group 1: Li=crimson, Na=golden yellow, K=lilac/violet, Rb=red, Cs=blue',
    bs:'', n:'' },

];
