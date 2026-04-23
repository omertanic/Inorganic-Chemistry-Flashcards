window.LABELS = {
  'overview':    'Overview',
  'dil-h2so4':   'Dil. H₂SO₄ Group',
  'co3-tests':   'CO₃²⁻ Tests',
  's2-tests':    'S²⁻ Tests',
  'no2-tests':   'NO₂⁻ Tests',
  'conc-h2so4':  'Conc. H₂SO₄ Group',
  'cl-tests':    'Cl⁻ Tests',
  'br-tests':    'Br⁻ Tests',
  'i-tests':     'I⁻ Tests',
  'no3-tests':   'NO₃⁻ Tests',
  'c2o4-tests':  'C₂O₄²⁻ Tests',
  'so4-tests':   'SO₄²⁻ Tests (Class B)',
  'solubility':  'Solubility Rules',
  'soda-ext':    'Soda Extract',
};

window.FILTER_GROUPS = [
  { label: 'Overview & S.E.',  cats: ['overview', 'soda-ext', 'solubility'] },
  { label: 'Dil. H₂SO₄ Grp',  cats: ['dil-h2so4', 'co3-tests', 's2-tests', 'no2-tests'] },
  { label: 'Conc. H₂SO₄ Grp', cats: ['conc-h2so4', 'cl-tests', 'br-tests', 'i-tests', 'no3-tests', 'c2o4-tests'] },
  { label: 'Class B (SO₄²⁻)',  cats: ['so4-tests'] },
];

window.CARDS = [

  // ── OVERVIEW ──
  { cat:'overview', cl:'c-an-ov',
    f:'What are the two broad classes of anions tested in Qualitative Analysis?',
    fs:'Based on reaction with H₂SO₄',
    b:'Class A: Anions that evolve a gas with dil. or conc. H₂SO₄\nClass B: Anions that do NOT evolve any gas with dil. or conc. H₂SO₄\nClass B example: SO₄²⁻',
    bs:'', n:'' },

  { cat:'overview', cl:'c-an-ov',
    f:'Which anions belong to the Dilute H₂SO₄ group (Class A — dil. acid)?',
    fs:'React with dil. H₂SO₄',
    b:'CO₃²⁻, S²⁻, NO₂⁻\n(evolve CO₂, H₂S, NO/NO₂ respectively)',
    bs:'Dil H₂SO₄ group', n:'' },

  { cat:'overview', cl:'c-an-ov',
    f:'Which anions belong to the Conc. H₂SO₄ group (Class A — conc. acid)?',
    fs:'React with conc. H₂SO₄',
    b:'Cl⁻, Br⁻, I⁻, NO₃⁻, C₂O₄²⁻\n(evolve HCl, Br₂/SO₂, I₂/SO₂, NO₂, CO+CO₂ respectively)',
    bs:'Conc H₂SO₄ group', n:'' },

  { cat:'overview', cl:'c-an-ov',
    f:'Which is the only Class B anion tested at JEE Main level?',
    fs:'Does not evolve gas with H₂SO₄',
    b:'SO₄²⁻ (sulphate)\nTested by precipitation with BaCl₂ → BaSO₄↓ (white, insoluble in dil. HCl or HNO₃)',
    bs:'Class B', n:'' },

  // ── SODA EXTRACT ──
  { cat:'soda-ext', cl:'c-an-se',
    f:'What is the Sodium Carbonate Extract (S.E.) and why is it prepared?',
    fs:'Soda extract procedure',
    b:'Given salt (~1g) + Na₂CO₃(s) (~3g) boiled in 10–15 mL distilled water for 10–15 min\n→ Soda Extract (Na₂SO₄(aq)) + BaCO₃↓ (white, filtered out)\nConverts insoluble anion salts into soluble sodium salts for testing',
    bs:'e.g. BaSO₄(s) → Na₂SO₄(aq)', n:'' },

  { cat:'soda-ext', cl:'c-an-se',
    f:'What is the Water Extract (W.E.)?',
    fs:'',
    b:'A clear solution of the given salt in water\nPrepared only when the given salt is directly soluble in water\nUsed instead of S.E. for water-soluble salts',
    bs:'', n:'' },

  // ── SOLUBILITY RULES ──
  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of CO₃²⁻ salts — which are soluble?',
    fs:'Carbonates',
    b:'All CO₃²⁻ salts are INSOLUBLE except those of Na⁺, K⁺, Rb⁺, Cs⁺, NH₄⁺\nNote: ALL bicarbonates (HCO₃⁻) are water soluble',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of SO₃²⁻ salts — which are soluble?',
    fs:'Sulphites',
    b:'All SO₃²⁻ salts are INSOLUBLE except those of Na⁺, K⁺, Rb⁺, Cs⁺, NH₄⁺\nNote: ALL bisulphites (HSO₃⁻) are water soluble',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of S²⁻ salts — which are soluble?',
    fs:'Sulphides',
    b:'All S²⁻ salts are INSOLUBLE except alkali metals, alkaline earth metals, and NH₄⁺\nNote: HS⁻ (bisulphide) and Sₙ²⁻ (polysulphides e.g. S₂²⁻, S₃²⁻) are all water soluble',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of NO₂⁻, NO₃⁻, CH₃COO⁻ — exceptions?',
    fs:'Nitrites, nitrates, acetates',
    b:'Almost ALL are water SOLUBLE except:\nCH₃COOAg, AgNO₂, BiONO₃, (CH₃COO)₂Hg → water insoluble\n★ Almost all nitrates are water soluble',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of Cl⁻ salts — which are insoluble?',
    fs:'Chlorides',
    b:'All Cl⁻ salts are SOLUBLE except:\nAg⁺, Hg₂²⁺, Cu⁺, BiO⁺, SbO⁺, Hg₂²⁺, Pb²⁺ (circled — important)\nPbCl₂: insoluble in cold water, soluble in hot/boiling water',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of Br⁻ salts — which are insoluble?',
    fs:'Bromides',
    b:'All Br⁻ salts are SOLUBLE except:\nAg⁺, Hg₂²⁺, Cu⁺, Pb²⁺ (important)\nPbBr₂: insoluble in cold water, soluble in boiling water',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of I⁻ salts — which are insoluble?',
    fs:'Iodides',
    b:'All I⁻ salts are SOLUBLE except:\nAg⁺, Hg₂²⁺, Hg²⁺, Cu⁺, Pb²⁺ (important), Bi³⁺\nPbI₂: insoluble in cold water, soluble in boiling water',
    bs:'PbCl₂, PbBr₂, PbI₂ all dissolve in hot water', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of SO₄²⁻ salts — which are insoluble/sparingly soluble?',
    fs:'Sulphates',
    b:'All SO₄²⁻ salts are SOLUBLE except:\nPb²⁺, Ba²⁺ (insoluble), Sr²⁺, Ca²⁺, Hg₂²⁺, Ag⁺ (partially/sparingly soluble)',
    bs:'', n:'' },

  { cat:'solubility', cl:'c-an-sol',
    f:'Solubility of PO₄³⁻ salts — which are soluble?',
    fs:'Phosphates',
    b:'All PO₄³⁻ salts are INSOLUBLE except Na⁺, K⁺, Rb⁺, Cs⁺',
    bs:'', n:'' },

  // ── DIL H₂SO₄ GROUP OVERVIEW ──
  { cat:'dil-h2so4', cl:'c-an-dil',
    f:'What are the 3 anions in the Dil. H₂SO₄ group and what gas does each produce?',
    fs:'Class A — dil. acid',
    b:'CO₃²⁻ → CO₂↑ (colourless, odourless — lime water test)\nS²⁻ → H₂S↑ (colourless, rotten egg smell)\nNO₂⁻ → NO↑ (colourless) → NO₂↑ (reddish brown, on air contact)',
    bs:'', n:'' },

  // ── CO₃²⁻ TESTS ──
  { cat:'co3-tests', cl:'c-an-co3',
    f:'CO₃²⁻ + dil. H₂SO₄ → ? What is observed?',
    fs:'Test (i) — Dil. H₂SO₄',
    b:'CO₃²⁻ + dil. H₂SO₄ → CO₂↑ + HSO₄⁻ + H₂O\nObservation: Colourless, odourless gas with brisk effervescence',
    bs:'', n:'' },

  { cat:'co3-tests', cl:'c-an-co3',
    f:'Lime water test for CO₂ — reaction and what happens with excess CO₂?',
    fs:'Test (ii) — V.Imp',
    b:'Ca(OH)₂(aq) + CO₂(g) → CaCO₃↓ (white) + H₂O\nMilkiness appears\nWith excess CO₂: CaCO₃(s) + H₂O + CO₂(excess) → Ca(HCO₃)₂(aq) → milkiness disappears',
    bs:'CaCO₃ dissolves due to soluble Ca(HCO₃)₂', n:'' },

  { cat:'co3-tests', cl:'c-an-co3',
    f:'How do you distinguish CO₂ from SO₂ using acidified K₂Cr₂O₇?',
    fs:'Distinction test',
    b:'Filter paper moistened with acidified K₂Cr₂O₇ near the gas:\nCO₂ + Cr₂O₇²⁻ (+H⁺) → No reaction (O.A. insufficient)\nSO₂ + Cr₂O₇²⁻(aq) (+H⁺) → SO₄²⁻(aq) + Cr³⁺(aq, green)\nSO₂: orange-red paper turns green; CO₂: no change',
    bs:'Note: SO₂ also gives lime water test (milky)', n:'' },

  { cat:'co3-tests', cl:'c-an-co3',
    f:'Phenolphthalein (HPh) test — CO₃²⁻ vs HCO₃⁻?',
    fs:'Test (ii) — Distinction test',
    b:'CO₃²⁻(aq) + HPh (few drops) → Pink colour\nHCO₃⁻(aq) + HPh → Colourless\nThis is the distinction test between CO₃²⁻ and HCO₃⁻',
    bs:'CO₃²⁻ is alkaline enough to turn HPh pink; HCO₃⁻ is not', n:'' },

  // ── S²⁻ TESTS ──
  { cat:'s2-tests', cl:'c-an-s2',
    f:'S²⁻ + dil. H₂SO₄ → ? Observation?',
    fs:'Test (i)',
    b:'S²⁻(aq) + H₂SO₄(aq) → H₂S↑\nObservation: Colourless gas with rotten egg smell',
    bs:'', n:'' },

  { cat:'s2-tests', cl:'c-an-s2',
    f:'S²⁻ + Pb(CH₃COO)₂ → ? What colour is the ppt?',
    fs:'Test (ii) — Imp',
    b:'Pb²⁺(aq) + H₂S(g) → PbS↓ + H⁺\nBlack precipitate',
    bs:'Lead acetate paper turns black in H₂S', n:'' },

  { cat:'s2-tests', cl:'c-an-s2',
    f:'S²⁻ + CdCl₂ → ? What colour is the ppt?',
    fs:'Test (iii)',
    b:'Cd²⁺(aq) + H₂S(g) → CdS↓ + H⁺\nYellow precipitate',
    bs:'', n:'' },

  { cat:'s2-tests', cl:'c-an-s2',
    f:'S²⁻ + sodium nitroprusside Na₂[Fe(CN)₅(NO⁺)] → ? (V.Imp)',
    fs:'Test (iv) — Very Important',
    b:'S²⁻(aq) + Na₂[Fe(CN)₅(NO⁺)] → Na₄[Fe(CN)₅(NOS⁻)]\nPurple/violet solution\nNote: NOS⁻ = thionitrite ion\nImportant: H₂S(g) + sodium nitroprusside → No reaction\nMust have alkaline (NaOH) medium for H₂S to give purple colour',
    bs:'S²⁻ gives purple directly; H₂S needs NaOH first', n:'' },

  // ── NO₂⁻ TESTS ──
  { cat:'no2-tests', cl:'c-an-no2',
    f:'NO₂⁻ + dil. H₂SO₄ → ? On warming, what is observed?',
    fs:'Test (i)',
    b:'NO₂⁻(aq) + dil. H₂SO₄ →(Δ) HNO₂(aq) + HSO₄⁻\nHNO₂ → HNO₃ + NO↑ (colourless)\n2NO + O₂(g) → 2NO₂(g) (reddish brown acidic gas)\nObservation: Reddish brown gas on warming',
    bs:'', n:'' },

  { cat:'no2-tests', cl:'c-an-no2',
    f:'Starch-iodide test for NO₂⁻ — reaction and observation?',
    fs:'Test (ii) — Imp',
    b:'I⁻(aq) is a good reducing agent\nI⁻(aq) + NO₂ (+H⁺) → I₂ + NO\nStarch-iodide paper brought near gas → turns blue/blue-black\n(Starch gives blue colour with I₂)',
    bs:'I⁻ reduces NO₂; I₂ formed turns starch blue', n:'' },

  { cat:'no2-tests', cl:'c-an-no2',
    f:'Griess-Ilosway test for NO₂⁻ — what reagents and what is formed?',
    fs:'Test (iii)',
    b:'Nitrite solution acidified with acetic acid + sulphanilic acid + 1-naphthylamine (reagent)\nNO₂⁻ + CH₃COOH → HNO₂ + CH₃COO⁻\nHNO₂ diazotises sulphanilic acid → couples with 1-naphthylamine → Red azo dye',
    bs:'Red azo dye formation = positive test for NO₂⁻', n:'' },

  // ── CONC H₂SO₄ GROUP ──
  { cat:'conc-h2so4', cl:'c-an-conc',
    f:'Why does conc. H₂SO₄ oxidize Br⁻ and I⁻ but only displaces Cl⁻?',
    fs:'Oxidizing power comparison',
    b:'Cl₂ > conc. H₂SO₄ (Cl₂ is more powerful O.A.)\nSo conc. H₂SO₄ cannot oxidize Cl⁻ → only displaces as HCl↑\nBr⁻/I⁻: conc. H₂SO₄ acts as O.A. → Br₂↑/I₂↑ produced',
    bs:'Cl⁻ → HCl only; Br⁻ → Br₂; I⁻ → I₂', n:'' },

  // ── Cl⁻ TESTS ──
  { cat:'cl-tests', cl:'c-an-cl',
    f:'Cl⁻ + conc. H₂SO₄ → ? Observation?',
    fs:'Test (i)',
    b:'Cl⁻(aq) + conc. H₂SO₄ → HCl↑ + HSO₄⁻\nObservation: Colourless, pungent-smelling gas (HCl)\nNote: Br⁻/I⁻ + conc. H₂SO₄ → Br₂↑/I₂↑ (coloured gases)',
    bs:'', n:'' },

  { cat:'cl-tests', cl:'c-an-cl',
    f:'HCl gas — two confirmatory tests?',
    fs:'Tests for HCl gas',
    b:'(1) Evolved HCl turns blue litmus red\n(2) Glass rod dipped in aq. NH₃ brought near gas → white dense fumes\n    NH₃(g) + HCl(g) → NH₄Cl (white fumes)',
    bs:'', n:'' },

  { cat:'cl-tests', cl:'c-an-cl',
    f:'Cl⁻ + MnO₂ + conc. H₂SO₄ → ? (Imp)',
    fs:'Test (ii) — Oxidative',
    b:'Cl⁻(aq) + MnO₂(s) + conc. H₂SO₄ → Cl₂↑ + Mn²⁺(aq)\nObservation: Greenish-yellow gas (Cl₂)\nNote: HCl has strong affinity for moisture → forms white cloud/fumes with moisture',
    bs:'MnO₂ is O.A.; Cl⁻ is R.A.', n:'' },

  { cat:'cl-tests', cl:'c-an-cl',
    f:'Cl⁻ + AgNO₃(aq) → ? Solubility in different reagents?',
    fs:'Test (iii) — AgNO₃ test',
    b:'Ag⁺(aq) + Cl⁻(aq) → AgCl↓ (white ppt)\nSolubility:\n• dil. aq. NH₃ → dissolves ✓\n• conc. aq. NH₃ → dissolves ✓\n• aq. KCN → dissolves ✓\n• aq. hypo (Na₂S₂O₃) → dissolves ✓\n[AgCl dissolves in all four reagents]',
    bs:'AgCl + aq.NH₃ → [Ag(NH₃)₂]Cl(aq) soluble complex', n:'' },

  { cat:'cl-tests', cl:'c-an-cl',
    f:'Chromyl chloride test for Cl⁻ — reagents, reaction, observation? (V.Imp)',
    fs:'Test (iv) — Chromyl Chloride Test',
    b:'NaCl(s) + K₂Cr₂O₇(s) + conc. H₂SO₄ → CrO₂Cl₂↑ (deep red fumes = chromyl chloride)\nCrO₂Cl₂ + NaOH(aq) → Na₂CrO₄(aq) (yellow solution)\nConformation:\n• + BaCl₂ → BaCrO₄↓ (yellow ppt)\n• + AgNO₃ → Ag₂CrO₄↓ (brick red)\n• + Pb(NO₃)₂ → PbCrO₄↓ (yellow)',
    bs:'Note: AgCl, PbCl₂, SnCl₂ do NOT give chromyl chloride test', n:'' },

  { cat:'cl-tests', cl:'c-an-cl',
    f:'CrO₅ — structure, colour, and what medium is it stable in?',
    fs:'From chromyl chloride test (amyl alcohol step)',
    b:'CrO₅ = Blue liquid\nStable in organic medium (amyl alcohol)\nUnstable in aqueous medium → decomposes:\nCrO₅ + H₂O(aq) → Cr³⁺ + O₂↑\n★ AIEEE: Na₂CrO₄(+6, yellow) ⇌ Na₂Cr₂O₇(+6, orange-red) by H⁺/OH⁻',
    bs:'Acidify → dichromate (orange); alkalify → chromate (yellow)', n:'' },

  // ── Br⁻ TESTS ──
  { cat:'br-tests', cl:'c-an-br',
    f:'Br⁻ + conc. H₂SO₄ → ? Observation?',
    fs:'Test (i)',
    b:'Br⁻(aq) + conc. H₂SO₄ → Br₂↑ + SO₂↑ + H₂O\nObservation: Reddish-brown fumes (Br₂)\nBr₂ bleaches litmus paper\nBr₂ turns starch-iodide paper blue/blue-black (but slowly)\nNO₂ (reddish brown) turns starch-iodide paper blue very quickly — imp. distinction',
    bs:'', n:'' },

  { cat:'br-tests', cl:'c-an-br',
    f:'Br⁻ + AgNO₃(aq) → ? Solubility in different reagents?',
    fs:'Test (ii)',
    b:'Ag⁺(aq) + Br⁻(aq) → AgBr↓ (pale yellow ppt)\nSolubility:\n• dil. aq. NH₃ → does NOT dissolve ✗\n• conc. aq. NH₃ → dissolves ✓\n• aq. KCN → dissolves ✓\n• aq. hypo (Na₂S₂O₃) → dissolves ✓',
    bs:'AgBr insoluble in dil. NH₃; AgCl soluble', n:'' },

  { cat:'br-tests', cl:'c-an-br',
    f:'Layer test for Br⁻ — using Cl₂ water and chloroform?',
    fs:'Test (iii) — Imp Layer Test',
    b:'Br⁻(aq) + Cl₂ water (limited) → Br₂ + Cl⁻ (orange-red aq. solution)\n+ add 1–2 mL CHCl₃ → two layers form:\n• Upper: clear aqueous layer\n• Lower: brown organic layer containing Br₂\nNote: Do NOT add Cl₂ in excess → Br₂ + Cl₂(excess) → 2BrCl (yellow solution)',
    bs:'F₂ > Cl₂ > Br₂ > I₂ (decreasing oxidising power)', n:'' },

  // ── I⁻ TESTS ──
  { cat:'i-tests', cl:'c-an-i',
    f:'I⁻ + conc. H₂SO₄ → ? Observation?',
    fs:'Test (i)',
    b:'I⁻ + conc. H₂SO₄ (O.A.) → I₂↑ (violet vapours)\nWith starch → turns blue or blue-black\nAlso: I⁻ + MnO₂ + H₂SO₄ (O.A.) → I₂↑ + Mn²⁺',
    bs:'', n:'' },

  { cat:'i-tests', cl:'c-an-i',
    f:'I⁻ + AgNO₃(aq) → ? Solubility in different reagents?',
    fs:'Test (iii)',
    b:'Ag⁺ + I⁻(aq) → AgI↓ (bright/lemon yellow ppt)\nSolubility:\n• dil. aq. NH₃ → does NOT dissolve ✗\n• conc. aq. NH₃ → does NOT dissolve ✗\n• aq. KCN → dissolves ✓ → [Ag(CN)₂]⁻(aq)\n• aq. hypo (Na₂S₂O₃) → dissolves ✓',
    bs:'AgI only dissolves in KCN and hypo — most insoluble of AgX', n:'' },

  { cat:'i-tests', cl:'c-an-i',
    f:'Layer test for I⁻ — using Cl₂ water and chloroform?',
    fs:'Test (iv) — Layer Test',
    b:'I⁻(aq) + Cl₂ water (limited) → I₂ + Cl⁻ (brown aqueous solution)\n+ add 1–2 mL CHCl₃ → two layers:\n• Upper: clear aqueous layer\n• Lower: violet organic layer containing I₂',
    bs:'Br layer = brown; I layer = violet — key distinction', n:'' },

  { cat:'i-tests', cl:'c-an-i',
    f:'AgCl vs AgBr vs AgI — colour of ppt and solubility comparison table?',
    fs:'Summary comparison — Imp',
    b:'AgCl (white): dil.NH₃ ✓ | conc.NH₃ ✓ | KCN ✓ | hypo ✓\nAgBr (pale yellow): dil.NH₃ ✗ | conc.NH₃ ✓ | KCN ✓ | hypo ✓\nAgI (bright yellow): dil.NH₃ ✗ | conc.NH₃ ✗ | KCN ✓ | hypo ✓\ne.g. AgI + 2KCN(aq) → [Ag(CN)₂]⁻(aq)',
    bs:'AgCl easiest to dissolve; AgI hardest', n:'' },

  // ── NO₃⁻ TESTS ──
  { cat:'no3-tests', cl:'c-an-no3',
    f:'NO₃⁻ + conc. H₂SO₄ → ? On heating, observation?',
    fs:'Test (i)',
    b:'NO₃⁻ + conc. H₂SO₄ → HNO₃ + HSO₄⁻\nHNO₃ →(Δ) NO₂↑ + O₂↑ + H₂O (reddish brown fumes)\nNO₂ quickly turns starch-iodide paper blue/blue-black\nI⁻ + NO₂ (O.A.) → I₂ + NO↑ (I₂ gives blue with starch)',
    bs:'', n:'' },

  { cat:'no3-tests', cl:'c-an-no3',
    f:'Brown Ring Test for NO₃⁻ — procedure, reaction, observation? (V.Imp)',
    fs:'Test (ii) — Very Important',
    b:'Reagents: FeSO₄ + H₂SO₄ (added slowly)\nNO₃⁻ + Fe²⁺ + H⁺ → NO + Fe³⁺\nNO + Fe²⁺(aq) + H₂O + SO₄²⁻ → [Fe(H₂O)₅(NO⁺)]SO₄\n→ Brown ring complex (paramagnetic) at junction of two liquids\nFe is +1 in the complex (NOSyl complex)',
    bs:'Brown ring at interface = positive test for NO₃⁻', n:'' },

  { cat:'no3-tests', cl:'c-an-no3',
    f:'NO₃⁻ + Cu turnings + conc. H₂SO₄ → ?',
    fs:'Test (iii)',
    b:'NO₃⁻ (O.A.) + Cu(s) (R.A.) + conc. H₂SO₄ → Cu²⁺(aq) + NO↑\nNO + O₂(g) → NO₂↑ (reddish brown gas)\nAlso: C (paper pellets) + NO₃⁻(aq) + H₂SO₄ → NO₂↑ + CO₂ or H₂CO₃',
    bs:'', n:'' },

  // ── C₂O₄²⁻ TESTS ──
  { cat:'c2o4-tests', cl:'c-an-ox',
    f:'C₂O₄²⁻ + conc. H₂SO₄ → ? Two gases formed?',
    fs:'Test (i)',
    b:'C₂O₄²⁻(aq) + conc. H₂SO₄ (powerful dehydrating agent) → CO↑ + CO₂↑\nCO₂ turns lime water milky\nNote (Imp): HCOOH + conc. H₂SO₄ → CO↑ only (CO does NOT turn lime water milky)',
    bs:'C₂O₄²⁻ gives both CO and CO₂; formate gives only CO', n:'' },

  { cat:'c2o4-tests', cl:'c-an-ox',
    f:'C₂O₄²⁻ + CaCl₂ → ? Properties of the precipitate?',
    fs:'Test (ii) — Imp',
    b:'Ca²⁺(aq) + C₂O₄²⁻(aq) → CaC₂O₄↓ (white ppt)\nInsoluble in acetic acid, oxalic acid, excess ammonium oxalate\nDoes dissolve in dil. HCl: CaC₂O₄ + 2HCl → C₂O₄²⁻(aq) + CaCl₂(aq)',
    bs:'', n:'' },

  { cat:'c2o4-tests', cl:'c-an-ox',
    f:'C₂O₄²⁻ + KMnO₄ + dil. H₂SO₄ → ? What is observed?',
    fs:'Test (iii) — Imp',
    b:'C₂O₄²⁻(aq) (R.A.) + MnO₄⁻(aq) (+H⁺) → Mn²⁺(aq) + CO₂↑ + H₂O\nObservation: Purple colour of KMnO₄ is discharged (decolourised) by oxalate solution',
    bs:'Oxalate reduces permanganate — classic redox', n:'' },

  // ── SO₄²⁻ TESTS (Class B) ──
  { cat:'so4-tests', cl:'c-an-so4',
    f:'SO₄²⁻ + BaCl₂(aq) → ? Can this ppt be dissolved?',
    fs:'Test (i) — Class B anion',
    b:'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄↓ (white ppt)\nInsoluble in dil. HCl or dil. HNO₃\nWith excess conc. H₂SO₄ → Ba(HSO₄)₂(aq) (soluble)',
    bs:'Insoluble in dil. acids = confirms SO₄²⁻', n:'' },

  { cat:'so4-tests', cl:'c-an-so4',
    f:'SO₄²⁻ + Pb(CH₃COO)₂(aq) → ? What dissolves the ppt?',
    fs:'Test (ii) — Imp',
    b:'Pb²⁺(aq) + SO₄²⁻(aq) → PbSO₄↓ (white ppt)\nWith excess conc. H₂SO₄ → Pb(HSO₄)₂(aq) (soluble)\nWith excess NaOH → [Pb(OH)₄]²⁻(aq) (C.N. = 4)\nWith excess ammonium acetate (CH₃COONH₄) → [Pb(CH₃COO)₄]²⁻(aq)',
    bs:'', n:'' },

  { cat:'so4-tests', cl:'c-an-so4',
    f:'Why is BaSO₄ used as a confirmatory test for SO₄²⁻ and not BaCO₃?',
    fs:'Selectivity of BaCl₂ test',
    b:'BaSO₄ is insoluble in dil. HCl and dil. HNO₃\nBaCO₃, BaSO₃ etc. dissolve in dil. HCl\nSo: add excess dil. HCl to dissolve interfering ppts — only BaSO₄ remains',
    bs:'Acid wash confirms SO₄²⁻ by eliminating CO₃²⁻, SO₃²⁻ etc.', n:'' },

];
