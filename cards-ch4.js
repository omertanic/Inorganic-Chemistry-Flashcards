window.LABELS = {
  // d-block overview
  'd-overview':   'd-Block Overview',
  'd-config':     'EC & Series',
  // General properties
  'd-radii':      'Atomic Radii',
  'd-mp':         'MP & Density',
  'd-ie':         'Ionisation Enthalpy',
  'd-os':         'Oxidation States',
  'd-srp':        'SRP Values',
  'd-magnetic':   'Magnetic Props',
  'd-colour':     'Coloured Ions',
  // Catalytic / Interstitial / Alloy
  'd-catalytic':  'Catalytic Props',
  'd-interstitial':'Interstitial Cmpds',
  'd-alloy':      'Alloy Formation',
  // Important compounds
  'd-kmno4':      'KMnO₄',
  'd-k2cr2o7':    'K₂Cr₂O₇',
  // f-block
  'f-overview':   'f-Block Overview',
  'f-lanthanides':'Lanthanides',
  'f-actinoids':  'Actinoids',
};

window.FILTER_GROUPS = [
  { label:'d-Block Overview', cats:['d-overview','d-config'] },
  { label:'Gen Properties',   cats:['d-radii','d-mp','d-ie','d-os','d-srp','d-magnetic','d-colour'] },
  { label:'Catalytic/Alloy',  cats:['d-catalytic','d-interstitial','d-alloy'] },
  { label:'KMnO₄ & K₂Cr₂O₇', cats:['d-kmno4','d-k2cr2o7'] },
  { label:'f-Block',          cats:['f-overview','f-lanthanides','f-actinoids'] },
];

window.CARDS = [

  // ══════════════════════════════════════════
  // d-BLOCK OVERVIEW
  // ══════════════════════════════════════════
  { cat:'d-overview', cl:'c-db-ov',
    f:'d-block elements — definition of transition elements?', fs:'V.Imp',
    b:'All d-block elements are metals\nTransition elements = those which show incomplete d-orbitals in ground state OR in any common oxidation state\nException: Zn, Cd, Hg are NOT transition elements (completely filled d¹⁰ in ground state AND common OS)',
    bs:'Most common OS of d-block = +2', n:'Coinage metals: Cu, Ag, Au\nVolatile metals (low MP): Zn, Cd, Hg\nNoble metals: Cu, Ag, Hg, Au, Pt' , imp:true },

  { cat:'d-overview', cl:'c-db-ov',
    f:'4 d-block series — elements and group numbers?', fs:'3d, 4d, 5d, 6d',
    b:'3d series (Gr 3–12): Sc Ti V Cr Mn Fe Co Ni Cu Zn\n4d series: Y Zr Nb Mo Tc Ru Rh Pd Ag Cd\n5d series: La* Hf Ta W Re Os Ir Pt Au Pt [*La = 57]\n6d series: Ac* (incomplete) [*Ac = 89]',
    bs:'Group no. 3 to 12; general outer EC: (n-1)d¹⁻¹⁰ ns¹⁻²', n:'Exception: Pd → 4d¹⁰5s⁰ (no s electrons)\nM²⁺ ions have EC: (n-1)d¹⁻¹⁰ ns⁰' },

  { cat:'d-config', cl:'c-db-ov',
    f:'Electronic configurations of Cr and Cu — why exceptions?', fs:'3d series',
    b:'Cr (Z=24): 3d⁵4s¹ (half-filled d — extra stable)\nCu (Z=29): 3d¹⁰4s¹ (fully-filled d — extra stable)\nBoth have unusually high IE₂ because removing 2nd e⁻ breaks stable d⁵ or d¹⁰ config',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // ATOMIC RADII
  // ══════════════════════════════════════════
  { cat:'d-radii', cl:'c-db-prop',
    f:'Atomic radii trend across 3d series (Sc → Zn)?', fs:'',
    b:'Size first decreases (Sc→Cr): nuclear charge increases, d-electrons poor shielding\nBecomes nearly constant in the middle (Cr→Ni)\nSlightly increases at end (Cu, Zn): fully filled d¹⁰ → more e⁻ repulsion',
    bs:'', n:'' },

  { cat:'d-radii', cl:'c-db-prop',
    f:'Lanthanide contraction — cause and consequence on 4d vs 5d radii?', fs:'Imp',
    b:'Cause: poor shielding of f-electrons → Zeff increases steadily across lanthanides → size contracts\nConsequence on atomic radii:\nSc < Y < La\nTi < Zr ≅ Hf\nV < Nb ≅ Ta\nNi < Pd ≅ Pt\nCu < Ag ≅ Au',
    bs:'4d and 5d elements of same group have nearly identical radii', n:'14 f-electrons filled across Ce→Lu; 4f & 5f series = 14+14 = 28 elements; all have group no. = 3' , imp:true },

  // ══════════════════════════════════════════
  // MP & DENSITY
  // ══════════════════════════════════════════
  { cat:'d-mp', cl:'c-db-prop',
    f:'Why do d-block metals have much higher MP than s-block metals?', fs:'',
    b:'Unpaired d-electrons participate in metallic bonding → stronger metallic bonds → higher MP, BP and ΔHatom\nGeneral MP order: 3d < 4d < 5d (in general)',
    bs:'', n:'MP exceptions (Imp):\n(MP)Cr > (MP)Mn < (MP)Fe\n(MP)Mo > (MP)Tc < (MP)Ru\nMn has 3d⁵4s² — paired electrons → weaker metallic bond than Cr (3d⁵4s¹)' },

  { cat:'d-mp', cl:'c-db-prop',
    f:'Density trend in d-block — lowest, highest, and dZn vs dCu?', fs:'',
    b:'Density increases L→R in a period (atomic volume ↓, molar mass ↑)\nLowest density of d-block → Sc\nHighest density of d-block → Os (22.51 g/cc) and Ir (22.61 g/cc)\nd(Zn) < d(Cu) — Imp',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // IONISATION ENTHALPY
  // ══════════════════════════════════════════
  { cat:'d-ie', cl:'c-db-prop',
    f:'IE trend across 3d series and key comparisons for Cr/Mn?', fs:'',
    b:'IE generally increases L→R with irregular trends\n(IE₁)Cr < (IE₁)Mn — Mn has 3d⁵4s², Cr has 3d⁵4s¹\n(IE₂)Cr > (IE₂)Mn — removing 2nd e⁻ from Cr destroys stable 3d⁵ → high IE₂\nBoth Cr and Cu have unusually high IE₂ (3d⁵4s¹ and 3d¹⁰4s¹)',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // OXIDATION STATES
  // ══════════════════════════════════════════
  { cat:'d-os', cl:'c-db-prop',
    f:'Which 3 d-block elements do NOT show variable oxidation states?', fs:'V.Imp',
    b:'Sc: only +3\nZn, Cd: only +2\n(Remember these 3)\nAll others show variable OS differing by 1 — due to small differences in successive IEs',
    bs:'Most common OS of d-block = +2', n:'MnO (+2) is ionic; Mn₂O₇ (+7) is covalent\nHigher OS → more covalent character\nMn(OH)₃ more covalent than Mn(OH)₂' , imp:true },

  { cat:'d-os', cl:'c-db-prop',
    f:'Oxidation states of 3d series elements — highest OS rule?', fs:'',
    b:'Max OS = total valence electrons (up to Mn then falls)\nSc: +3 | Ti: +2,3,4 | V: +2,3,4,5 | Cr: +2,3,4,5,6 | Mn: +2,3,4,6,7\nFe: +2,3,4,6 | Co: +2,3,4 | Ni: +2,3,4 | Cu: +1,+2 | Zn: +2',
    bs:'', n:'FeO₄²⁻ (Fe in +6) is also known' , imp:true },

  { cat:'d-os', cl:'c-db-prop',
    f:'Stability of high OS in d-block vs p-block — key differences?', fs:'',
    b:'p-block: stability of LOWER OS increases T→B (inert pair effect)\nd-block: stability of HIGHER OS increases T→B\ne.g. Cr⁶⁺ (unstable in 3d → powerful O.A. as Cr₂O₇²⁻)\nW⁶⁺ (stable in 5d → WO₃ has no oxidising nature)\nIF₇ exists; ICl₇ does not — F & O stabilise high OS (F & O form strong bonds; O forms double bonds)',
    bs:'', n:'CuF & VF₂ do not exist — F is O.A., stabilises higher OS\nCu + F₂ → CuF₂ (+2, not +1)' },

  { cat:'d-os', cl:'c-db-prop',
    f:'Why is Mn³⁺ a powerful O.A. whereas Cr²⁺ is a powerful R.A.?', fs:'NCERT classic Q',
    b:'Mn³⁺: 3d⁴4s⁰; gains e⁻ → Mn²⁺ (3d⁵4s⁰, half-filled, highly stable) → powerful O.A.\nCr²⁺: 3d⁴4s⁰ (stable OS); loses e⁻ → Cr³⁺ (3d³4s⁰, t₂g³eg⁰, stable due to high CFSE released) → powerful R.A.',
    bs:'', n:'Cr²⁺, V²⁺, Ti²⁺ are good R.A. → liberate H₂ from dil HCl\nVF₅ stable at room temp; other pentahalides hydrolyse → VOX₃ → VO³⁺ (oxycation)' , imp:true },

  { cat:'d-os', cl:'c-db-prop',
    f:'CuI₂, FeI₃ — do they exist? Why?', fs:'',
    b:'CuI₂ does NOT exist: Cu²⁺ (O.A.) + I⁻ (R.A.) → redox reaction\n2Cu²⁺ + I⁻ → CuI↓ + I₃⁻ (aq)\nFeI₃ does NOT exist: Fe³⁺ (O.A.) + I⁻ (R.A.) → Fe³⁺ + I⁻ → Fe²⁺ + I₃⁻\nCuCl₂ and FeCl₃ DO exist (Cl⁻ is not a strong enough R.A.)',
    bs:'', n:'Many Cu⁺ compounds in aq medium disproportionate:\n2Cu⁺(aq) → Cu(s) + Cu²⁺(aq)\nCu²⁺(aq) is more stable than Cu⁺(aq)' , imp:true },

  // ══════════════════════════════════════════
  // SRP VALUES
  // ══════════════════════════════════════════
  { cat:'d-srp', cl:'c-db-prop',
    f:'SRP values: M³⁺/M²⁺ for Mn and Co — significance?', fs:'Standard reduction potential',
    b:'More –ve SRP → more stable cation in that OS\nMn (M³⁺/M²⁺) = +1.57V → Mn³⁺ highly unstable (Mn²⁺ = 3d⁵, half-filled, very stable)\nCo (M³⁺/M²⁺) = +1.97V → Co³⁺ highly unstable in aq. medium\nCu (M²⁺/M(s)) = +0.34V → +ve SRP, Cu has less tendency to form Cu²⁺',
    bs:'SRP depends on ΔHsub, ΔH_IE, ΔH_HE', n:'Co³⁺ highly unstable in aq medium (SRP M³⁺/M²⁺/Pt = 1.97V)\nIn aq medium, Co is more stable in +2 OS\nCu(s) + dil HCl → no dissolution (no H₂ liberated) — +ve SRP' , imp:true },

  { cat:'d-srp', cl:'c-db-prop',
    f:'Extra stability of Mn²⁺ — explain via SRP?', fs:'',
    b:'Mn²⁺: 3d⁵4s⁰ (half-filled, extra stable)\nMn³⁺ → Mn²⁺ is highly favourable → Mn³⁺ is powerful O.A.\nSRP (Mn³⁺/Mn²⁺) = +1.57V (highly +ve → Mn³⁺ reduced easily)',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // MAGNETIC PROPERTIES
  // ══════════════════════════════════════════
  { cat:'d-magnetic', cl:'c-db-prop',
    f:'Diamagnetic vs paramagnetic — definition, formula, examples?', fs:'',
    b:'Diamagnetic: zero unpaired e⁻; spin mag moment = 0\nExamples: Zn²⁺, Cd²⁺, Sc³⁺\nParamagnetic: one or more unpaired e⁻; spin mag moment ≠ 0\nFormula: μ = √(x(x+2)) BM where x = no. of unpaired e⁻\nExamples: Fe²⁺, Fe³⁺, Co²⁺, Co³⁺, Cu²⁺',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // COLOURED IONS
  // ══════════════════════════════════════════
  { cat:'d-colour', cl:'c-db-prop',
    f:'Colours of d-block ions — complete list?', fs:'Colour due to d-d transition (Imp)',
    b:'Sc³⁺: colourless | Ti⁴⁺: colourless | Ti³⁺: purple (Imp)\nV⁴⁺: blue | V³⁺: green | V²⁺: violet\nCr³⁺: violet (pure) / green (impure)\nMn²⁺: pink (circled Imp) | Fe²⁺: green | Fe³⁺: yellow\nCo²⁺: pink (Imp) | Co³⁺: blue\nNi²⁺: green | Cu²⁺: blue | Zn²⁺: colourless',
    bs:'Colour due to d-d transition', n:'Colourless ions have d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺) config → no d-d transition possible' , imp:true },

  // ══════════════════════════════════════════
  // CATALYTIC PROPERTIES
  // ══════════════════════════════════════════
  { cat:'d-catalytic', cl:'c-db-cat',
    f:'Why are transition metals good catalysts? Key industrial examples?', fs:'',
    b:'They adopt variable OS in compounds → act as intermediate oxidant/reductant\nFe³⁺ catalyses oxidation of I⁻ by S₂O₈²⁻:\n2I⁻ + 2Fe³⁺ → I₂ + 2Fe²⁺\n2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻\nNet: 2I⁻ + S₂O₈²⁻ → I₂ + 2SO₄²⁻',
    bs:'', n:'Contact process (H₂SO₄) → V₂O₅\nHaber\'s process (NH₃) → Fe\nHydrogenation of oils → Ni(s)\nOstwald\'s process (HNO₃) → Pt' , imp:true },

  // ══════════════════════════════════════════
  // INTERSTITIAL COMPOUNDS
  // ══════════════════════════════════════════
  { cat:'d-interstitial', cl:'c-db-cat',
    f:'Interstitial compounds — definition, examples, properties?', fs:'',
    b:'Small atoms (H, B, C, N) occupy voids (interstices) in metal crystal lattice\nNon-stoichiometric (neither covalent nor ionic)\nExamples: TiC, MnₓN, Fe₃H, VH₀.₅₆, carbon steel (C in Fe crystal)\nProperties: Higher MP than pure metal, chemically inert, retain metallic conductivity, very hard (some borides match diamond hardness)',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // ALLOY FORMATION
  // ══════════════════════════════════════════
  { cat:'d-alloy', cl:'c-db-cat',
    f:'Alloy formation condition and key alloys with compositions?', fs:'',
    b:'Formed between metals of similar size (size difference < 15%)\nBrass: Cu (60–80%) + Zn (20–40%)\nBronze: Cu (90%) + Sn (10%)\nGun metal: Cu (87%) + Sn (10%) + Zn (3%)\nBell metal: Cu (80%) + Sn (20%)\nGerman silver: Cu (50%) + Zn (25%) + Ni (25%)\nStainless steel: Fe + Cr + Ni [18/8: 18% Cr, 8% Ni, rest Fe]\nDuralumin: Al alloy (used in aircraft body)\nSolder: Pb + Sn',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // KMnO₄
  // ══════════════════════════════════════════
  { cat:'d-kmno4', cl:'c-db-cmpd',
    f:'KMnO₄ preparation — commercial (from pyrolusite) and lab methods?', fs:'V.Imp',
    b:'Commercial (from MnO₂ ore):\nMnO₂ + KOH/K₂CO₃ + O₂/KNO₃ →(fusion)→ K₂MnO₄(green, +6) + H₂O\nThen oxidise K₂MnO₄:\nK₂MnO₄ + Cl₂/O₃ (O.A.) → KMnO₄ (+7, purple) + KCl/O₂\nOr electrolytic oxidation in basic medium:\nAnode: K₂MnO₄ → KMnO₄\nCathode: H₂↑\nLab: Mn²⁺ + S₂O₈²⁻ + H₂O → MnO₄⁻ + SO₄²⁻',
    bs:'', n:'K₂MnO₄ stable only in strongly basic medium\nIn neutral/weakly basic: K₂MnO₄ → KMnO₄ + MnO₂↓\nIn acidic: KMnO₄ + MnO₂↓ (disproportionation)' , imp:true },

  { cat:'d-kmno4', cl:'c-db-cmpd',
    f:'KMnO₄ properties — thermal decomp, reaction with H₂SO₄, oxidising nature in 3 media?', fs:'',
    b:'Thermal decomp: 2KMnO₄(s) →(513K,Δ)→ K₂MnO₄ + MnO₂(s) + O₂↑ (purple solid)\nWith excess conc H₂SO₄: KMnO₄ + conc H₂SO₄ → Mn₂O₇ + KHSO₄ + H₂O (explosive Mn₂O₇)\nOxidising nature:\nAcidic (H⁺): MnO₄⁻ → Mn²⁺ (pink to colourless)\nWeakly basic/neutral: MnO₄⁻ → MnO₂↓\nStrongly basic: MnO₄⁻ → MnO₄²⁻',
    bs:'', n:'Substrates oxidised: C₂O₄²⁻, H₂S, S²⁻, NO₂⁻, I⁻, Fe²⁺, H₂O₂\nVIP: I⁻ + KMnO₄ + OH⁻ → IO₃⁻ + MnO₂↓ (basic medium)\nMn²⁺ + KMnO₄ + H₂O →(ZnO/ZnSO₄ catalyst)→ MnO₂↓' , imp:true },

  // ══════════════════════════════════════════
  // K₂Cr₂O₇
  // ══════════════════════════════════════════
  { cat:'d-k2cr2o7', cl:'c-db-cmpd',
    f:'K₂Cr₂O₇ preparation from chromite ore — full steps?', fs:'Orange-red solid',
    b:'Step 1: Roasting chromite ore:\n4FeCr₂O₄(s) + 8Na₂CO₃(s) + 7O₂(g) → 8Na₂CrO₄(yellow) + 2Fe₂O₃(s) + 8CO₂↑\nStep 2: Na₂CrO₄ + H₂SO₄(aq) → Na₂Cr₂O₇ (orange)\nStep 3: Na₂Cr₂O₇ + KCl(aq) → K₂Cr₂O₇(orange-red crystals) + NaCl',
    bs:'', n:'Cr₂O₇²⁻(orange-red) ⇌ CrO₄²⁻(yellow) with OH⁻/H⁺\nBoth ions are tetrahedral\nHeating: K₂Cr₂O₇(s) → K₂CrO₄(s) + Cr₂O₃(s) + O₂↑' , imp:true },

  { cat:'d-k2cr2o7', cl:'c-db-cmpd',
    f:'K₂Cr₂O₇ oxidising nature — substrates and products?', fs:'Used in acidic medium',
    b:'K₂Cr₂O₇ + H⁺ (O.A.) oxidises:\nFe²⁺ → Fe³⁺\nH₂O₂ → O₂\nAsO₃³⁻ → AsO₄³⁻\nI⁻ → I₂\nSO₃²⁻ → SO₄²⁻\nCr goes from +6 to +3',
    bs:'Uses: primary titrant (volumetric analysis), good O.A., making chrome alum (K₂SO₄·Cr₂(SO₄)₃·24H₂O), leather industry, azo compounds', n:'' , imp:true },

  // ══════════════════════════════════════════
  // f-BLOCK OVERVIEW
  // ══════════════════════════════════════════
  { cat:'f-overview', cl:'c-fb-ov',
    f:'f-block classification, series, elements, group number?', fs:'',
    b:'4f series (Lanthanides): ₅₈Ce to ₇₁Lu — 14 elements\n5f series (Actinoids): ₉₀Th to ₁₀₃Lr — 14 elements\nGeneral outer EC: (n-2)f¹⁻¹⁴ (n-1)d⁰⁻¹ ns²\nAll f-block elements have group no. = 3',
    bs:'4f + 5f = 28 elements', n:'' },

  // ══════════════════════════════════════════
  // LANTHANIDES
  // ══════════════════════════════════════════
  { cat:'f-lanthanides', cl:'c-fb-ln',
    f:'Lanthanide electronic configs — 3 elements with 5d electrons?', fs:'',
    b:'La (57): 5d¹6s² → Ln³⁺: 4f⁰\nCe (58): 4f¹5d¹6s² → Ce³⁺: 4f¹\nGd (64): 4f⁷5d¹6s² → Gd³⁺: 4f⁷ (half-filled)\nLu (71): 4f¹⁴5d¹6s² → Lu³⁺: 4f¹⁴\nNote: Ce, Gd, Lu (3 elements) have e⁻ in 5d orbitals',
    bs:'', n:'Eu (63): 4f⁷6s²; Yb (70): 4f¹⁴6s²\nAll other Ln: 4fⁿ6s² (no 5d electron)' },

  { cat:'f-lanthanides', cl:'c-fb-ln',
    f:'Lanthanide oxidation states — most common, and exceptions?', fs:'',
    b:'Most common OS = +3\nLn³⁺ EC: 4fⁿ (n = 1 to 14)\nAlso show +2 and +4:\nCe⁴⁺ is a powerful O.A. (Ce(SO₄)₂ used in analytical chemistry)\nEu²⁺: 4f⁷ (half-filled) — V.Imp: though Eu²⁺ has stable half-filled EC, it is a good R.A. and converts to Eu³⁺',
    bs:'', n:'' , imp:true },

  { cat:'f-lanthanides', cl:'c-fb-ln',
    f:'Lanthanoid contraction — cause, effect on atomic/ionic radii?', fs:'',
    b:'Cause: imperfect shielding of one 4f-electron by another in same f-subshell → Zeff increases → size decreases\nAtomic radius decreases L→R irregularly\nException (V.Imp): Eu has LARGEST atomic radius among all 4f series elements\nLn³⁺ size decreases regularly from Ce³⁺ to Lu³⁺\n4f orbitals more buried/contracted than 5f',
    bs:'', n:'IE₁ and IE₂ of most 4f series elements match Ca\nEarly members reactivity matches Ca; heavier members match Al' , imp:true },

  { cat:'f-lanthanides', cl:'c-fb-ln',
    f:'General properties of lanthanides?', fs:'',
    b:'Silvery white, soft, tarnish rapidly in air\nSm is very hard and has highest MP in 4f series\nMost Ln³⁺ ions are coloured\nLa³⁺ (4f⁰) and Lu³⁺ (4f¹⁴) are colourless (no unpaired e⁻)\nIE₁ & IE₂ of most 4f elements match Ca',
    bs:'', n:'Reactions: Ln + O₂(air) → Ln₂O₃\nLn + X₂ → LnX₃\nLn + H₂O(hot/steam) → H₂↑ + Ln(OH)₃\nLn + H₂ → LnHₓ\nLn + C(2500°C) → LnC₂\nLn + N₂ → LnN\nLn + S → Ln₂S₃' },

  { cat:'f-lanthanides', cl:'c-fb-ln',
    f:'Uses of lanthanides — Mischmetal?', fs:'JEE Main',
    b:'Mischmetal: Ln (95%) + Fe (5%) + traces of C, S, Ca, Al\nUsed in bullets, shells & lighter flints\nMixed oxides of lanthanides → catalysts in petroleum cracking\nAlloy steels for plates and pipes',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // ACTINOIDS
  // ══════════════════════════════════════════
  { cat:'f-actinoids', cl:'c-fb-ac',
    f:'Actinoid EC — key elements (Ac, Th, Pa, U, Pu)?', fs:'5f series Th to Lr',
    b:'Ac (89): 5f⁰6d¹7s² → M³⁺: 5f⁰\nTh (90): 5f⁰6d²7s² → M³⁺: 5f¹\nPa (91): 5f²6d¹7s² → M³⁺: 5f²\nU (92): 5f³6d¹7s² → M³⁺: 5f³\nNp (93): 5f⁴6d¹7s² → M³⁺: 5f⁴\nPu (94): 5f⁶7s² → M³⁺: 5f⁵\nLr (103): 4f¹⁴6d¹7s² → M³⁺: 5f¹⁴',
    bs:'', n:'' },

  { cat:'f-actinoids', cl:'c-fb-ac',
    f:'Actinoids vs lanthanoids — 4 key differences?', fs:'',
    b:'1. Actinoids show more variety of OS (+3,+4,+5,+6,+7) vs Ln (+3 mainly)\n2. Actinoid contraction > Lanthanoid contraction (5f orbitals less buried → less shielding)\n3. All actinoids are radioactive; Ln only Pm is radioactive\n4. Ln³⁺ form coloured ions; actinoid ions also coloured\nActinoids show more variety due to small energy gap between 5f, 6d, 7s orbitals',
    bs:'', n:'4f orbitals in lanthanoids are more buried (poor shielding of one f-electron into another in 4f subshell)' , imp:true },

  { cat:'f-actinoids', cl:'c-fb-ac',
    f:'General properties of actinoids?', fs:'',
    b:'All silvery metals, highly active particularly when powdered\nM + H₂O(hot/steam) → M(OH)₃ + H₂↑\nM + H₂(g) → MHₓ\nReact with halogens: Ln + X₂ → LnX₃\nNo effect of alkalis (NaOH etc.) on them\nMost compounds are paramagnetic',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // APPLICATIONS (V.IMP)
  // ══════════════════════════════════════════
  { cat:'f-actinoids', cl:'c-fb-ac',
    f:'Key applications of d & f block elements (V.Imp)?', fs:'',
    b:'TiO: pigment industry\nMnO₂: dry cells\nNi/Cd: batteries\nUK copper coin: copper-coated steel\nSilver UK coin: Cu/Ni alloy\nZiegler\'s catalyst: TiCl₄ + Al(CH₃)₃ → polymerisation of polythene\nFe → Haber\'s process (NH₃)\nV₂O₅ → Contact process (H₂SO₄)\nPt → Ostwald\'s process (HNO₃)\nAgBr → photography',
    bs:'', n:'' },

  // ── NEW FROM NOTES (Image 5 — d-block and f-block) ──

  { cat:'d-srp', cl:'c-df',
    f:'Cu²⁺ + I⁻ → ? (why CuI₂ doesn\'t exist but CuI does)', fs:'Cu redox with I⁻',
    b:'2Cu²⁺ + 4I⁻ → 2CuI↓ + I₂\nCuI₂ doesn\'t exist because Cu²⁺ oxidises I⁻ to I₂ spontaneously\nCuI (Cu⁺) is more stable with I⁻ (soft-soft interaction)', bs:'', n:'' , imp:true },

  { cat:'d-srp', cl:'c-df',
    f:'Cu⁺(aq) → Cu²⁺(aq) + Cu(s) — why does Cu⁺ disproportionate in water?', fs:'',
    b:'Cu⁺(aq) → Cu²⁺(aq) + Cu(s)\nSRP: Cu²⁺/Cu⁺ = +0.15V; Cu⁺/Cu = +0.52V\nSince E°(Cu⁺/Cu) > E°(Cu²⁺/Cu⁺), disproportionation is spontaneous', bs:'', n:'' , imp:true },

  { cat:'d-os', cl:'c-df',
    f:'Fe³⁺ + I⁻ → ? / I⁻ + S₂O₈²⁻ → ? / Fe²⁺ + S₂O₈²⁻ → ?', fs:'Redox reactions involving I⁻ and S₂O₈²⁻',
    b:'2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂ (Fe³⁺ oxidises I⁻)\nI⁻ + S₂O₈²⁻ → I₂ + SO₄²⁻\nFe²⁺ + S₂O₈²⁻ → Fe³⁺ + SO₄²⁻ (peroxydisulphate OA)', bs:'', n:'' , imp:true },

  { cat:'d-k2cr2o7', cl:'c-df',
    f:'FeCl₂O₄ + Na₂CO₃ + O₂ →(fusion) ? (Chromite ore → dichromate)', fs:'K₂Cr₂O₇ industrial prep from ore',
    b:'4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂\nNa₂CrO₄ + H⁺ → Na₂Cr₂O₇ + H₂O\nNa₂Cr₂O₇ + KCl → K₂Cr₂O₇↓ + NaCl', bs:'', n:'' , imp:true },

  { cat:'d-k2cr2o7', cl:'c-df',
    f:'Na₂CrO₄ + H⁺ ⇌ Na₂Cr₂O₇ + OH⁻ / CrO₄²⁻(yellow) ⇌ Cr₂O₇²⁻(orange)', fs:'Chromate-dichromate equilibrium',
    b:'2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O\nIn acid → dichromate (orange-red); in base → chromate (yellow)\nThis is the basis of the colour change test', bs:'', n:'' , imp:true },

  { cat:'d-kmno4', cl:'c-df',
    f:'MnO₂ + KOH + O₂ →(fusion) K₂MnO₄ / K₂MnO₄ →(electrolysis, alk) KMnO₄', fs:'KMnO₄ from pyrolusite',
    b:'MnO₂ + KOH + O₂ → K₂MnO₄ + H₂O (fusion)\nK₂MnO₄ + H⁺ → KMnO₄ + MnO₂ + H₂O (disproportionation)\nOR electrolytic oxidation in alkaline medium → KMnO₄\nMnO₄²⁻ →(electro, alk) MnO₄⁻', bs:'', n:'' , imp:true },

  { cat:'d-kmno4', cl:'c-df',
    f:'MnO₄²⁻ + H⁺ → MnO₄⁻ + MnO₂ + H₂O / MnO₄²⁻ →(electro, alk) MnO₄⁻', fs:'Manganate to permanganate',
    b:'3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂↓ + 2H₂O (disproportionation)\nMnO₄²⁻ → MnO₄⁻ (electrolytic oxidation in alk medium)', bs:'', n:'' , imp:true },

  { cat:'d-kmno4', cl:'c-df',
    f:'MnO₄⁻ + I⁻ →(acid) ? / MnO₄⁻ + Fe²⁺ →(acid) ? / KMnO₄ ANB values?', fs:'KMnO₄ equivalent weights',
    b:'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (acidic, n=5, ANB=31.6)\nMnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O (neutral, n=3)\nMnO₄⁻ + e⁻ → MnO₄²⁻ (basic, n=1, ANB=158)\nMnO₄⁻ + I⁻ (acid) → I₂ + Mn²⁺\nMnO₄⁻ + Fe²⁺ → Fe³⁺ + Mn²⁺', bs:'Acidic n=5; Neutral n=3; Basic n=1', n:'' , imp:true },

  { cat:'d-kmno4', cl:'c-df',
    f:'MnO₄⁻ + SO₃²⁻ → SO₄²⁻ + Mn²⁺ / MnO₄⁻ + SO₂ → SO₄²⁻ + Mn²⁺', fs:'KMnO₄ + sulphite/sulphur dioxide',
    b:'2KMnO₄ + 3H₂SO₄ + 5H₂SO₃ → 2MnSO₄ + K₂SO₄ + 8H₂O\nMnO₄⁻ + SO₃²⁻ → Mn²⁺ + SO₄²⁻ (acidic)\nMnO₄⁻ + SO₂ → Mn²⁺ + SO₄²⁻', bs:'', n:'' , imp:true },

  { cat:'d-kmno4', cl:'c-df',
    f:'MnO₄⁻ + C₂O₄²⁻ + H⁺ → Mn²⁺ + CO₂ / MnO₄⁻ + I⁻ →(basic) MnO₂ + IO₃⁻', fs:'',
    b:'2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O (acidic)\nIn basic: MnO₄⁻ + I⁻ → MnO₂ + IO₃⁻\nMnO₄⁻ + S₂O₃²⁻ →(basic) → MnO₂ + SO₄²⁻', bs:'', n:'' , imp:true },

  { cat:'d-kmno4', cl:'c-df',
    f:'MnO₄⁻ + Mn²⁺ →(Znsey) MnO₂ / KMnO₄ →(Δ) K₂MnO₄ + MnO₂ + O₂', fs:'',
    b:'2MnO₄⁻ + 3Mn²⁺ + 2H₂O → 5MnO₂↓ + 4H⁺ (Mn²⁺ as R.A.)\n2KMnO₄ →(Δ) → K₂MnO₄ + MnO₂ + O₂↑ (thermal decomp)', bs:'', n:'' , imp:true },

  { cat:'d-k2cr2o7', cl:'c-df',
    f:'Cr₂O₇²⁻ + I⁻ / Fe²⁺ / Sn²⁺ → ? in acid medium?', fs:'K₂Cr₂O₇ as OA',
    b:'Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O (n=6 in acid)\nCr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O\nCr₂O₇²⁻ + 6I⁻ + 14H⁺ → 2Cr³⁺ + 3I₂ + 7H₂O\nCr₂O₇²⁻ + 3Sn²⁺ → 2Cr³⁺ + 3Sn⁴⁺', bs:'Cr³⁺ is green', n:'' , imp:true },

  { cat:'d-k2cr2o7', cl:'c-df',
    f:'MnO₄⁻ + CrO₄²⁻ → ? (MnO₄⁻ oxidises Cr³⁺ to CrO₄²⁻ or vice versa?)', fs:'',
    b:'MnO₄⁻ + Cr₂O₄²⁻ → CrO₄²⁻ (MnO₄⁻ + chromite)\nMnO₄⁻ + CrO₄²⁻ → CO₂ + Mn²⁺ (MnO₄ oxidises Cr(III) oxalate intermediate)\nNOTE: MnO₄⁻ + CrO₄²⁻ → Co₂ + Mn²⁺ (in acidic medium, chromate = Cr³⁺ pathway)', bs:'', n:'' },

  // F-block (Image 5)
  { cat:'f-lanthanides', cl:'c-df',
    f:'General reactions of Lanthanides (Ln) with O₂, S, N₂, H₂O, X₂, H?', fs:'Ln reactivity',
    b:'Ln + O₂ →(Δ) Ln₂O₃\nLn + S →(Δ) Ln₂S₃\nLn + N₂ →(Δ) LnN\nLn + hX →(HX) LnX₃ (X = halogen)\nLn + H₂O → Ln(OH)₃ + H₂↑\nLn + H₂ → LnH₂ or LnH₃', bs:'', n:'' },

  { cat:'f-lanthanides', cl:'c-df',
    f:'Ln + C →(2700K) LnC₂ / General OS of lanthanides?', fs:'',
    b:'Ln + 2C →(2700K) → LnC₂ (dicarbide)\nOS: most common = +3\nExceptions: Ce⁴⁺, Tb⁴⁺ (extra stability of f⁰); Sm²⁺, Eu²⁺, Yb²⁺ (f⁷ or f¹⁴)\nLa: [Xe] 5d¹ 6s²; Ce: [Xe] 4f¹ 5d¹ 6s²; Gd: [Xe] 4f⁷ 5d¹ 6s²', bs:'', n:'' },

];
