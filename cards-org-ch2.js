// ── ORGANIC CH2: Alcohols, Ethers & Phenols ──
window.DECK_ID = 'org-ch2-aep';

window.LABELS = {
  // Alcohol Preparation
  'prep-hydrolysis':    'Hydrolysis of R-X',
  'prep-hydration':     'Hydration of Alkenes',
  'prep-oxymercuration':'Oxymercuration-Demercuration',
  'prep-hydroboration': 'Hydroboration-Oxidation',
  'prep-reduction':     'Reduction of Carbonyl',
  'prep-grignard':      'Grignard Reagent',
  'prep-ester-hydrol':  'Ester Hydrolysis',
  'prep-amine':         'From Primary Amines',
  // Alcohol Reactions
  'rxn-hx':            'Reaction with HX',
  'rxn-px':            'Reaction with PX₃/PX₅',
  'rxn-socl2':         'Reaction with SOCl₂',
  'rxn-esterify':      'Esterification',
  'rxn-acid-halide':   'Acid Halide/Anhydride',
  'rxn-williamson':    'Williamson Ether Synthesis',
  'rxn-dehydration':   'Dehydration of Alcohols',
  'rxn-pinacol':       'Pinacol-Pinacolone',
  'rxn-oxidation':     'Oxidation of Alcohols',
  'rxn-reduction-al':  'Reduction of Alcohols',
  'rxn-tests':         'Tests for Alcohols',
  // Phenol Preparation
  'ph-prep':           'Formation of Phenol',
  // Phenol Reactions
  'ph-rxn':            'Reactions of Phenol',
  'ph-named':          'Named Rxns of Phenol',
  // Ether Preparation
  'eth-prep':          'Formation of Ethers',
  // Ether Reactions
  'eth-rxn':           'Reactions of Ethers',
};

window.FILTER_GROUPS = [
  {
    label: '🍷 Alcohols — Prep',
    cats: ['prep-hydrolysis','prep-hydration','prep-oxymercuration','prep-hydroboration','prep-reduction','prep-grignard','prep-ester-hydrol','prep-amine'],
  },
  {
    label: '⚗️ Alcohols — Rxns',
    cats: ['rxn-hx','rxn-px','rxn-socl2','rxn-esterify','rxn-acid-halide','rxn-williamson','rxn-dehydration','rxn-pinacol','rxn-oxidation','rxn-reduction-al','rxn-tests'],
  },
  {
    label: '🌿 Phenol',
    cats: ['ph-prep','ph-rxn','ph-named'],
  },
  {
    label: '🔗 Ethers',
    cats: ['eth-prep','eth-rxn'],
  },
];

window.CARDS = [

  // ── ALCOHOL PREPARATION ──

  { cat:'prep-hydrolysis', cl:'c-org-prep',
    f:'R–X + H₂O → ? (SN1/SN2)',
    fs:'Reactivity order: R–I > R–Br > R–Cl ≫ R–F. R–F = No Rxn.',
    b:'R–OH + X⁻',
    bs:'3° uses H₂O/Δ via SN1. 1° uses KOH+H₂O via SN2. AgNO₃(aq) can also hydrolyse.',
    n:'Me shift or ring expansion can occur with 2°/3° carbocations in SN1.' },

  { cat:'prep-hydration', cl:'c-org-prep',
    f:'Alkene + H₂O + H⁺ → ? (Markovnikov)',
    fs:'Electrophilic addition mechanism.',
    b:'Markovnikov product (major) = alcohol on more substituted carbon.',
    bs:'CH₂=CH₂ + H₂O/H⁺ → CH₃-CH₂-OH; Ph-CH=CH₂ → Ph-CH(OH)-CH₃ via resonance-stabilised cation.',
    n:'Ring expansion possible when cyclopentyl vinyl system undergoes SN1 with H⁺/H₂O.' },

  { cat:'prep-hydration', cl:'c-org-prep',
    f:'Alkene + D₂O + D⁺ → ? How many stereocentres?',
    fs:'Both H and D add to the double bond carbons.',
    b:'2 new stereocentres (n=2) → 2² = 4 stereoisomers (2 pairs of enantiomers).',
    bs:'D adds to one carbon, OD on the other via carbocation intermediate.' },

  { cat:'prep-oxymercuration', cl:'c-org-prep',
    f:'Alkene + Hg(OAc)₂ + H₂O → ? then NaBH₄ → ?',
    fs:'Overall: Markovnikov addition, no rearrangement.',
    b:'Step 1: Oxymercuration → adds OH at more substituted C + Hg–OAc at other.\nStep 2: NaBH₄ (demercuration) → replaces Hg with H → Markovnikov alcohol.',
    bs:'e.g. CH₃–CH=CH₂ → CH₃–CH(OH)–CH₃ (2-propanol)',
    n:'Proceeds via cyclic mercurinium ion → electrophilic addition. No carbocation → no rearrangement. M.P. = major product.' },

  { cat:'prep-oxymercuration', cl:'c-org-prep',
    f:'Alkene + MeOH + Hg(OAc)₂ → ? then NaBH₄ → ?',
    fs:'Alkoxymercuration-demercuration.',
    b:'Markovnikov ether is formed (OMe on more substituted C).',
    bs:'e.g. isobutylene → tert-butyl methyl ether' },

  { cat:'prep-hydroboration', cl:'c-org-prep',
    f:'Alkene + ½B₂H₆ (THF) → ? then H₂O₂/OH⁻ → ?',
    fs:'Syn addition. Boron adds to less hindered (less crowded) carbon.',
    b:'Anti-Markovnikov alcohol via syn addition.',
    bs:'BH₂ and H add syn to the same face. Oxidation replaces B with OH.',
    n:'Gives the alcohol NOT formed by acid-catalysed hydration. AMP = major (anti-Markovnikov).' },

  { cat:'prep-hydroboration', cl:'c-org-prep',
    f:'Cyclohexene derivative (H and Me cis) + (i) B₂H₆ (ii) H₂O₂/OH⁻ → ?',
    fs:'Syn addition → OH and H add from same face.',
    b:'Mixture of enantiomers (racemic mix) because the π face is not differentiated.',
    bs:'Contrast with oxymercuration which also gives syn addition product.' },

  { cat:'prep-reduction', cl:'c-org-prep',
    f:'Which reagents reduce R–CHO (aldehyde) to 1° alcohol?',
    fs:'Choose from: H₂+Ni, LiAlH₄, NaBH₄, B₂H₆',
    b:'All four: H₂+Ni/Pt/Pd ✓, LiAlH₄ ✓, NaBH₄ ✓, B₂H₆ ✓',
    bs:'Aldehyde → R–CH₂–OH (primary alcohol).' },

  { cat:'prep-reduction', cl:'c-org-prep',
    f:'Which reagents reduce R–COCl (acid chloride) to 1° alcohol?',
    fs:'B₂H₆ vs LiAlH₄ vs NaBH₄ vs H₂+Metal?',
    b:'H₂+Metal ✓, LiAlH₄ ✓, NaBH₄ ✓ — but B₂H₆ ✗ (cannot reduce acid chlorides).',
    bs:'B₂H₆ reduces: aldehydes, ketones, carboxylic acids, esters, amides, alkenes — but NOT acid chlorides.' },

  { cat:'prep-reduction', cl:'c-org-prep',
    f:'Which reagents can reduce R–COOH (carboxylic acid) to 1° alcohol?',
    fs:'',
    b:'LiAlH₄ ✓ and B₂H₆ ✓ only. NaBH₄ ✗, H₂+Metal ✗',
    bs:'LiAlH₄ is the most powerful — reduces everything. B₂H₆ is selective.' },

  { cat:'prep-reduction', cl:'c-org-prep',
    f:'Which reagents reduce R–COOR\' (ester) to give R–CH₂–OH + R\'OH?',
    fs:'',
    b:'LiAlH₄ ✓ only. NaBH₄ ✗, H₂+Metal ✗, B₂H₆ ✗',
    bs:'Exception: BBR (Bouveault-Blanc Reduction): ester + Na + EtOH → R–CH₂–OH + HO–R\'' },

  { cat:'prep-reduction', cl:'c-org-prep',
    f:'Meerwein-Ponndorf-Verley (MPV) Reduction: what reagent and what does it do?',
    fs:'',
    b:'Aluminium isopropoxide Al(–O–CH(Me)₂)₃ reduces aldehydes/ketones to alcohols.',
    bs:'R–CHO → R–CH₂–OH; R₂C=O → R₂CH–OH. Selective: does NOT reduce C=C.' },

  { cat:'prep-grignard', cl:'c-org-prep',
    f:'RMgX + O₂ → ? then H₂O/H⁺ → ?',
    fs:'Grignard with oxygen.',
    b:'RMgX + O₂ → R–O–O–MgX →(+RMgX)→ 2 R–O–MgX →(H₃O⁺)→ 2 R–OH',
    bs:'e.g. Ph–Br → Ph–MgBr →(i) O₂ (ii) H₃O⁺ → Ph–OH (phenol)',
    n:'Cyclic ethers (oxetane etc.) with high ring strain CANNOT be used as solvent for Grignard.' },

  { cat:'prep-grignard', cl:'c-org-prep',
    f:'RMgX + ethylene oxide (symmetric) → (ii) H₃O⁺ → ?',
    fs:'Grignard + epoxide, SN2 at less hindered carbon.',
    b:'R–CH₂–CH₂–OH (1° alcohol with 2 extra carbons)',
    bs:'Attack occurs at less crowded carbon of epoxide via SN2.' },

  { cat:'prep-grignard', cl:'c-org-prep',
    f:'RMgX + CH₂=O (formaldehyde) → (ii) H₃O⁺ → ?',
    fs:'Grignard + aldehyde/ketone: nucleophilic addition.',
    b:'R–CH₂–OH (1° alcohol)',
    bs:'With RCHO → 2° alcohol. With R₂C=O → 3° alcohol. MeMgBr + acetone → t-butanol.' },

  { cat:'prep-grignard', cl:'c-org-prep',
    f:'Acid chloride R–C(=O)–Cl + 1 mole R\'MgX → ? + 2 moles R\'MgX → ?',
    fs:'Grignard + acid derivative.',
    b:'1 mole → ketone R–C(=O)–R\'. 2 moles → tertiary alcohol R–C(OH)(R\')₂ (after H₃O⁺).',
    bs:'Ester R–C(=O)–OR\' with excess RMgX → tertiary alcohol (same two R groups on same C).' },

  { cat:'prep-ester-hydrol', cl:'c-org-prep',
    f:'Ester hydrolysis: acidic vs basic conditions → products?',
    fs:'',
    b:'Acid (H₂O/H⁺ ⇌): R–COOH + HO–R\' (reversible = esterification). Base (H₂O/OH⁻ →): R–COONa + R\'–OH (saponification, irreversible).',
    bs:'O-18 labelling shows C–O bond of acyl group breaks (not the O–C of alkyl).' },

  { cat:'prep-amine', cl:'c-org-prep',
    f:'Aliphatic 1° amine R–NH₂ + HNO₂ (or KNO₂/HCl) → ?',
    fs:'Reaction via diazonium salt.',
    b:'R–OH (generally major) + R–O–R (major when R=Me) + alkene, via unstable diazonium R–N₂⁺.',
    bs:'e.g. neopentylamine → rearranged alcohol (Me shift) as major product.',
    n:'Amide R–C(=O)–NH₂ + HNO₂ → R–COOH (−N₂↑)' },

  // ── ALCOHOL REACTIONS ──

  { cat:'rxn-hx', cl:'c-org-rxn',
    f:'Alcohol + conc. HX → ? SN mechanism?',
    fs:'HI > HBr > HCl ≫ HF (reactivity). HF = No reaction directly.',
    b:'R–OH + HX → R–X + H₂O',
    bs:'3°, 2°, Benzylic, Allylic alcohols → SN1. 1° alcohol → SN2.',
    n:'Conc. HCl alone does NOT react with 1° or 2° alcohols. Needs anhydrous ZnCl₂ (= Lucas reagent).' },

  { cat:'rxn-hx', cl:'c-org-rxn',
    f:'2° alcohol + conc. HBr → product via SN1. What stereochemistry?',
    fs:'Carbocation intermediate (planar).',
    b:'Both retention + inversion products (racemic mix). e.g. Et(Me)(Ph)C–OH → Et(Me)(Ph)C–Br as retention + inversion.',
    bs:'SN1 gives racemisation. SN2 gives pure inversion.' },

  { cat:'rxn-px', cl:'c-org-rxn',
    f:'3 R–OH + PCl₃ → ?',
    fs:'SN2 mechanism, gives retention? or inversion?',
    b:'3 R–Cl + H₃PO₃ (phosphorous acid)',
    bs:'R–OH + PCl₅ (SN2) → R–Cl + HCl + POCl₃. PX₃ = PCl₃, PBr₃, PI₃. PX₅ = PCl₅, PBr₅. P+I₂ → PI₃.' },

  { cat:'rxn-socl2', cl:'c-org-rxn',
    f:'R–OH + SOCl₂ → ? in ether solvent. Mechanism and stereochemistry?',
    fs:'Darzen\'s Process.',
    b:'R–Cl + HCl↑ + SO₂↑ via SNi (internal nucleophilic substitution) → RETENTION of configuration.',
    bs:'Contrast: conc. HBr → SN1 (racemisation). PCl₅ → SN2 (inversion). SOCl₂+ether → SNi (retention).' },

  { cat:'rxn-esterify', cl:'c-org-rxn',
    f:'R–COOH + HO–R\' + conc. H₂SO₄, Δ → ?',
    fs:'O-18 labelling: which bond breaks?',
    b:'R–C(=O)–O–R\' (ester) + H₂O. The O–H of the alcohol oxygen is displaced (C–O of acid breaks).',
    bs:'e.g. CH₃–COOH + MeOH → CH₃–C(=O)–OMe (methyl acetate).' },

  { cat:'rxn-acid-halide', cl:'c-org-rxn',
    f:'Phenol + CH₃–C(=O)–Cl + Py → ?',
    fs:'O-Acylation (Schotten-Baumann reaction).',
    b:'Ph–O–C(=O)–CH₃ (phenyl acetate)',
    bs:'Anhydride (Ac₂O + Py) also works. e.g. MeOH + Ph–C(=O)–Cl + Py → Ph–C(=O)–OMe.',
    n:'Same reaction with amine = N-acylation. Nucleophilicity: CH₃⁻ > NH₂⁻ > OH⁻ > F⁻' },

  { cat:'rxn-williamson', cl:'c-org-rxn',
    f:'Williamson Ether Synthesis: R–OH → R–O–R\' — how?',
    fs:'Two-step: base then alkyl halide (SN2).',
    b:'R–OH + base → R–O⁻ (alkoxide, strong Nu) + R\'–X (1°>2°, SN2) → R–O–R\' (ether)',
    bs:'e.g. Ph–OH + base + CH₃Br → Ph–O–CH₃ (anisole). Only 1° or 2° halides work (SN2).',
    n:'3° halides give elimination instead. Retention of config at alkoxide carbon.' },

  { cat:'rxn-dehydration', cl:'c-org-rxn',
    f:'Dehydrating agents for alcohol dehydration — list and their products.',
    fs:'',
    b:'Conc. H₂SO₄/Δ and H₃PO₄/Δ → E1, carbocation, rearrangement possible, Saytzeff major.\nAl₂O₃/Δ and P₂O₅/Δ → no rearrangement, Saytzeff major.\nThO₂/Δ → no rearrangement, Hofmann major.',
    bs:'Trans > cis in alkene product from dehydration.' },

  { cat:'rxn-dehydration', cl:'c-org-rxn',
    f:'2-methylbutan-2-ol + conc. H₂SO₄/Δ → major product?',
    fs:'E1: form carbocation, lose H⁺ from β-carbon (Saytzeff).',
    b:'2-methylbut-2-ene (Saytzeff product, more substituted = more stable).',
    bs:'Mechanism: OH protonated → OH₂⁺ (l.g.) → 3° carbocation → −H⁺ → alkene.' },

  { cat:'rxn-dehydration', cl:'c-org-rxn',
    f:'Pinacol (Me₂C(OH)–C(OH)Me₂) + conc. H₂SO₄ → ?',
    fs:'Pinacol-Pinacolone rearrangement.',
    b:'Pinacolone (3,3-dimethylbutan-2-one) — a ketone.',
    bs:'Mechanism: OH protonated → +OH₂ leaves → 3° carbocation → Me shift to give more stable cation → −H⁺ → ketone.',
    n:'Migration aptitude: Ph > H > Alkyl. Stability II > I determines which OH leaves first.' },

  { cat:'rxn-oxidation', cl:'c-org-rxn',
    f:'Oxidation of 1° alcohol vs 2° alcohol vs 3° alcohol — summary',
    fs:'With SOA (strong oxidising agents: KMnO₄/H⁺/Δ, K₂Cr₂O₇/H⁺, CrO₃/H⁺)',
    b:'1° R–CH₂–OH → R–COOH (carboxylic acid). 2° R–CH(OH)–R → R–C(=O)–R (ketone). 3° R₃C–OH → X (no reaction with SOA/WOA). 3° + Cu/300°C → dehydration to alkene.',
    bs:'Exception: formic acid H–COOH → CO₂+H₂O with SOA.' },

  { cat:'rxn-oxidation', cl:'c-org-rxn',
    f:'Weak oxidising agents PCC, PDC, Collins, Oppenauer — what do they oxidise?',
    fs:'PCC = pyridinium chlorochromate. Jones = CrO₃+acetone+H₂O.',
    b:'1° R–CH₂–OH → aldehyde R–CHO (stops here, no over-oxidation).\n2° R–CH(OH)–R → ketone. 3° → no reaction.',
    bs:'PCC = Py·CrO₃·Cl⁻. PDC = 2Py·H₂Cr₂O₇. Collins = Py+CrO₃+CH₂Cl₂.',
    n:'Oppenauer oxidation: Al(O-tBu)₃ + acetone → oxidises 2° to ketone (reverse of MPV).' },

  { cat:'rxn-oxidation', cl:'c-org-rxn',
    f:'MnO₂/Δ oxidises which alcohols only?',
    fs:'',
    b:'Only allylic and benzylic alcohols — to their corresponding aldehydes/ketones.',
    bs:'e.g. Ph–CH₂–OH → Ph–CHO (benzaldehyde). Allylic: CH₂=CH–CH₂–OH → CH₂=CH–CHO.' },

  { cat:'rxn-reduction-al', cl:'c-org-rxn',
    f:'R–OH reduction — which reagents work?',
    fs:'',
    b:'HI + Red P → R–H + H₂O + I₂. LiAlH₄, NaBH₄, H₂+Ni → all FAIL (X) to reduce alcohols.',
    bs:'Reduction of alcohols is difficult. Only HI+Red P is effective.' },

  { cat:'rxn-tests', cl:'c-org-rxn',
    f:'Lucas Test — reagent and results for 1°, 2°, 3° alcohols?',
    fs:'Lucas Reagent = conc. HCl + anhydrous ZnCl₂',
    b:'3° (or benzylic/allylic) → instant white turbidity (R–Cl insoluble).\n2° → turbidity after 5–10 min.\n1° → turbidity after 30 min or on Δ.',
    bs:'Reactivity of R–OH: 3° > 2° > 1°. Product R–Cl is insoluble → cloudiness.' },

  { cat:'rxn-tests', cl:'c-org-rxn',
    f:'CAN test for alcohols — reagent and result?',
    fs:'CAN = Ceric Ammonium Nitrate',
    b:'R–OH (1°, 2°, 3°) + (NH₄)₂[Ce(NO₃)₆] → Red-Pink colour solution.',
    bs:'Distinguishes alcohols from non-alcohols.' },

  { cat:'rxn-tests', cl:'c-org-rxn',
    f:'Victor Meyer Test — how to distinguish 1°, 2°, 3° alcohols?',
    fs:'Steps: R–OH → R–I (P+I₂) → R–CH₂–NO₂/etc (AgNO₂) → HNO₂ → +KOH.',
    b:'1° → Red (R–CH₂–NO₂ → nitrolic acid, red with KOH).\n2° → Blue (pseudo nitrolic acid).\n3° → Colourless (no reaction with HNO₂) = RBC.',
    bs:'RBC = Red, Blue, Colourless for 1°, 2°, 3° respectively.' },

  // ── PHENOL FORMATION ──

  { cat:'ph-prep', cl:'c-org-ph',
    f:'Formation of phenol from benzene (direct oxidation)?',
    fs:'Two reagents possible.',
    b:'V₂O₅/300°C → phenol (major). FeSO₄+H₂O₂ (Fenton\'s Reagent) → phenol.',
    bs:'Imp: V₂O₅/500°C → maleic anhydride/succinic anhydride (ring opens).' },

  { cat:'ph-prep', cl:'c-org-ph',
    f:'Dow\'s Process (chlorobenzene route to phenol)?',
    fs:'Important named process.',
    b:'Ph–Cl + conc. NaOH → 320°C, 300 atm → Ph–O⁻Na⁺ → H⁺ → Ph–OH (phenol)',
    bs:'Chlorobenzene with EWG (NO₂) reacts easier: p-nitrochlorobenzene + conc. NaOH/150°C → p-nitrophenol.' },

  { cat:'ph-prep', cl:'c-org-ph',
    f:'Cumene process (industrial) for phenol?',
    fs:'Imp ★ — JEE high yield.',
    b:'Benzene + propene (Friedel-Crafts) → Cumene (Ph–CH(CH₃)₂) → O₂/hν → cumene hydroperoxide → H₂SO₄/Δ → phenol + acetone.',
    bs:'Migration aptitude: H > Ph > Alkyl; {3°>2°>1°}. p-cresol from p-cymene gives p-cresol + acetophenone.',
    n:'Also: Ph–MgBr + O₂ → Ph–OH (phenol) via Grignard.' },

  { cat:'ph-prep', cl:'c-org-ph',
    f:'Benzene diazonium salt → phenol: how?',
    fs:'',
    b:'Ph–N₂⁺Cl⁻ + H₂O/Δ → Ph–OH + HCl + N₂↑',
    bs:'Benzene diazonium salt is stable only up to 5°C.' },

  { cat:'ph-prep', cl:'c-org-ph',
    f:'Phenol from benzene sulphonic acid?',
    fs:'',
    b:'Ph–SO₃H + 2NaOH(fused)/Δ → Ph–O⁻Na⁺ (–Na₂SO₃) → H⁺ → Ph–OH',
    bs:'Alternatively: Ph–SO₃H + H₂O/H⁺/Δ → benzene + H₂SO₄ (desulphonation only).' },

  { cat:'ph-prep', cl:'c-org-ph',
    f:'Salicylic acid (o-hydroxybenzoic acid) + soda lime/Δ → ?',
    fs:'Decarboxylation of salicylic acid.',
    b:'Phenol + CO₂',
    bs:'NaOH+CaO = soda lime. Both COOH groups removed from resorcinol precursor.' },

  // ── PHENOL REACTIONS ──

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Phenol acidic strength order vs common acids?',
    fs:'Does phenol react with NaHCO₃?',
    b:'Picric acid (2,4,6-trinitrophenol) > CH₃COOH > H₂CO₃ > phenol > NaHCO₃',
    bs:'Phenol reacts with Na, NaOH, NaNH₂, Na₂CO₃ (→ NaHCO₃). Does NOT react with NaHCO₃.',
    n:'+M effect of OH makes phenol ortho/para activating and ring electron-rich.' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Phenol reactions with bases — list products.',
    fs:'With Na, NaOH, NaNH₂, NaHCO₃, Na₂CO₃, MeMgBr, NaOEt?',
    b:'Na → Ph–ONa + ½H₂↑. NaOH → Ph–ONa + H₂O. NaNH₂ → Ph–ONa + NH₃. NaHCO₃ → X (no rxn). Na₂CO₃ → Ph–ONa + NaHCO₃. MeMgBr → Ph–OMgBr + CH₄. NaOEt → Ph–ONa + EtOH.',
    bs:'Nucleophilicity: CH₃⁻ > NH₂⁻ > OH⁻ > F⁻' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Ether from phenol — Williamson synthesis?',
    fs:'',
    b:'Ph–OH + base → Ph–O⁻ + R–X (1°, SN2) → Ph–O–R (aryl alkyl ether)',
    bs:'e.g. Ph–OH + base + CH₃Cl → Ph–O–CH₃ (anisole). Also: Ph–OH + CH₂N₂ (diazomethane) → anisole + N₂↑.',
    n:'Ph–OH + Me₂SO₄ + Py → Ph–O–CH₃ (anisole)' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'O-Acetylation of phenol with CH₃–C(=O)–Cl/Py → ?',
    fs:'Also called Schotten-Baumann reaction.',
    b:'Ph–O–C(=O)–CH₃ (phenyl acetate) — O-acetylation.',
    bs:'Ph–C(=O)–Cl/Py → Ph–O–C(=O)–Ph (O-benzoylation). With amine = N-acylation; Ph–NH₂ + CH₃COCl → acetanilide.',
    n:'p-aminophenol + CH₃COCl (1 mole) → Paracetamol (analgesic) — selective N-acylation.' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Phenol oxidation: CrO₂Cl₂/CrO₃+H⁺/Δ → ? K₂S₂O₈/Δ → ?',
    fs:'',
    b:'CrO₂Cl₂ or CrO₃+H⁺/O₂(long) → benzoquinone (pink).\nK₂S₂O₈/Δ → catechol (ortho-diol) + hydroquinone (para-diol).',
    bs:'Benzoquinone is the oxidised form of hydroquinone.' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Coupling reaction of phenol with benzene diazonium chloride?',
    fs:'Conditions: 0–5°C, NaOH.',
    b:'Ph–N₂⁺Cl⁻ + phenol → para-hydroxyazobenzene (orange dye) — only para product.',
    bs:'β-Naphthol + Ph–N₂⁺Cl⁻ → azo dye (scarlet red). Electrophile attacks electron-rich ring at para position.',
    n:'Azo coupling = S_E (electrophilic aromatic substitution).' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Phenol + Zn/Δ → ? Phenol + NH₃/Cu₂O/Δ → ?',
    fs:'',
    b:'Zn/Δ → benzene (−ZnO). NH₃/Cu₂O/Δ → aniline.',
    bs:'Ph–O–Ph (diphenyl ether) + Zn/Δ → biphenyl + ZnO.' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Phenol + PCl₅ → ? (yield?)',
    fs:'',
    b:'Ph–Cl (chlorobenzene) — poor yield! Also forms Ph–O–POCl₂, Ph–O–PO(OPh)₂ (triphenyl phosphate) as side products.',
    bs:'Not a good method for making chlorobenzene from phenol.' },

  { cat:'ph-rxn', cl:'c-org-ph',
    f:'Phenol + phthalic anhydride + conc. H₂SO₄/Δ → ?',
    fs:'Important ★',
    b:'Phenolphthalein indicator (used in acid-base titrations)',
    bs:'2 moles phenol + 1 mole phthalic anhydride → phenolphthalein.' },

  // ── PHENOL NAMED REACTIONS ──

  { cat:'ph-named', cl:'c-org-ph',
    f:'Kolbe-Schmidt Reaction?',
    fs:'Phenol + CO₂: reagents and major product.',
    b:'Ph–ONa + CO₂ → (i) NaOH (ii) H⁺ → salicylic acid (o-hydroxy benzoic acid, major) + p-hydroxybenzoic acid (minor).',
    bs:'Salicylic acid (intra-H-bond) is more acidic and has higher m.p. p-isomer has higher B.P./M.P./solubility (inter-H-bond).',
    n:'Salicylic acid → Aspirin (antipyretic/analgesic/blood thinner), methyl salicylate (oil of wintergreen), Sabol (antiseptic).' },

  { cat:'ph-named', cl:'c-org-ph',
    f:'Reimer-Tiemann Reaction (RT Formylation)?',
    fs:'Phenol + CHCl₃ + NaOH → ?',
    b:'Phenol + CHCl₃ + 3NaOH → salicylaldehyde (o-hydroxybenzaldehyde, major) + para isomer (minor)',
    bs:'Mechanism: CHCl₃ + OH⁻ → –H₂O → CCl₃⁻ → –Cl⁻ → :CCl₂ (dichlorocarbene, electrophile) → attacks electron-rich ring → after hydrolysis → CHO group ortho.',
    n:'S_E (electrophilic aromatic substitution) via carbene.' },

  { cat:'ph-named', cl:'c-org-ph',
    f:'Reimer-Tiemann Carboxylation (RT variant)?',
    fs:'Phenol + CCl₄ + NaOH → ?',
    b:'Phenol + CCl₄ + NaOH → salicylic acid (via :CCl₂ then hydrolysis of –CCl₂ adduct to –COOH)',
    bs:'Carbene intermediate :CCl₂ attacks phenoxide ring ortho, then hydrolysis of CHCl group → COOH.' },

  { cat:'ph-named', cl:'c-org-ph',
    f:'Fries Rearrangement?',
    fs:'Phenyl ester + AlCl₃ → ?',
    b:'Ph–O–C(=O)–R + AlCl₃ → ortho-hydroxy ketone (major at 100–125°C) + para-hydroxy ketone (major at 25°C)',
    bs:'Temperature controls regio: low T → para product; high T → ortho product.',
    n:'S_E mechanism.' },

  { cat:'ph-named', cl:'c-org-ph',
    f:'Lederer-Mannasse Reaction (phenol + formaldehyde)?',
    fs:'',
    b:'Phenol + CH₂=O + NaOH → ortho-hydroxybenzyl alcohol + para-hydroxybenzyl alcohol (S_E).',
    bs:'Products useful for polymer formation → Novolac/Bakelite. Phenoxide (−OH) increases ArS_E reactivity; protonated amine decreases it.' },

  // ── ETHER FORMATION ──

  { cat:'eth-prep', cl:'c-org-eth',
    f:'Four methods to form ethers — list them.',
    fs:'',
    b:'(1) Williamson Ether Synthesis: R–O⁻ + R\'–X (1°>2°, SN2).\n(2) Grignard: R–MgCl + Cl–O–R\' → R–O–R\' + MgCl₂.\n(3) Dehydration: C₂H₅OH + conc. H₂SO₄ at 140°C → Et–O–Et.\n(4) Alkoxymercuration-demercuration: alkene + R\'OH + Hg(OAc)₂ → ether.',
    bs:'(5) Diazomethane: R–OH + CH₂N₂ → R–O–CH₃ + N₂↑. (6) R–Cl + Ag₂O(dry) → R–O–R + AgCl.' },

  { cat:'eth-prep', cl:'c-org-eth',
    f:'Dehydration temperature control: C₂H₅OH + conc. H₂SO₄?',
    fs:'',
    b:'140°C → diethyl ether (Et–O–Et). 180°C → ethylene (CH₂=CH₂).',
    bs:'Lower T: SN2 substitution. Higher T: E2 elimination.' },

  { cat:'eth-prep', cl:'c-org-eth',
    f:'R–Cl + Ag₂O(dry) → ? vs R–Cl + Ag₂O(moist) → ?',
    fs:'',
    b:'Dry Ag₂O → R–O–R (ether). Moist Ag₂O → R–OH (alcohol).',
    bs:'e.g. EtCl + Ag₂O(dry) → Et–O–Et (diethyl ether).' },

  // ── ETHER REACTIONS ──

  { cat:'eth-rxn', cl:'c-org-eth',
    f:'R–O–R + conc. HX (1 mole) → ? + conc. HX (2 moles) → ?',
    fs:'Reactivity of HX: HI > HBr > HCl. Anhydrous HI → SN2.',
    b:'1 mole: R–OH + R–X. 2 moles (excess): 2R–X + H₂O.',
    bs:'If any R group is 3° or benzylic → SN1 (attack at 3° or benzylic C). Otherwise → SN2.',
    n:'e.g. Ph–O–CH₃ + 1 mole HBr → Ph–OH + CH₃–Br (SN2 at less hindered Me). Excess → Ph–OH + CH₃–Br still (Ar–O bond very strong).' },

  { cat:'eth-rxn', cl:'c-org-eth',
    f:'Hydrolysis of ether R–O–R + H₂O/H⁺ → ?',
    fs:'Basic or acidic medium?',
    b:'Only in acidic medium (SN1): R–O–R + H₂O/H⁺ → 2 R–OH.',
    bs:'e.g. acetal CH₃CH(OMe)₂ + H₃O⁺ → CH₃–CHO (aldehyde) + 2 MeOH (via unstable geminal diol).',
    n:'Ketal hydrolysis gives ketone.' },

  { cat:'eth-rxn', cl:'c-org-eth',
    f:'R–O–R + PCl₅ → ?',
    fs:'',
    b:'2 R–Cl + POCl₃',
    bs:'e.g. tetrahydrofuran (cyclic ether) + PCl₅ → 1,4-dichlorobutane + POCl₃.' },

  { cat:'eth-rxn', cl:'c-org-eth',
    f:'Ether halogenation: CH₃–O–CH₃ + Cl₂/hν → ?',
    fs:'Where does halogenation occur?',
    b:'CH₃–O–CH₂Cl (chloromethyl methyl ether) — α-carbon to oxygen is most reactive.',
    bs:'Et–O–Et + Cl₂/hν → Et–O–CHCl–CH₃ (α-carbon halogenated).' },

  { cat:'eth-rxn', cl:'c-org-eth',
    f:'Aryl alkyl ether Ph–O–CH₃ + excess conc. HBr → products?',
    fs:'Which C–O bond breaks?',
    b:'Ph–OH + CH₃–Br. The alkyl–O bond breaks (SN2 on less hindered CH₃). Aryl–O bond is very strong and does NOT break.',
    bs:'Ph–O–CH₃ + 1 mole HBr → Ph–OH + CH₃Br. Excess → same (no further reaction of phenol with HBr without ZnCl₂).' },

];
