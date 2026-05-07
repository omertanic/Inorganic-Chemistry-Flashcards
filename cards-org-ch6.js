window.LABELS = {
  'ald-prep':   'Aldehyde/Ketone Prep',
  'ald-rxn':    'Aldehyde/Ketone Rxns',
  'named-rxn':  'Named Reactions',
  'cooh-prep':  'COOH Prep',
  'cooh-rxn':   'COOH Rxns',
  'derivatives':'Acid Derivatives',
};

window.FILTER_GROUPS = [
  { label: 'Prep',        cats: ['ald-prep', 'cooh-prep'] },
  { label: 'Rxns',        cats: ['ald-rxn', 'cooh-rxn'] },
  { label: 'Named',       cats: ['named-rxn'] },
  { label: 'Derivatives', cats: ['derivatives'] },
];

window.CARDS = [

  // ══ ALDEHYDE / KETONE PREPARATION ══

  { cat:'ald-prep', cl:'c-org-a',
    f:'Preparation of aldehyde from:\n1) Primary alcohol  2) Alkyne  3) gem-dihalide  4) Toluene',
    fs:'',
    b:'1) 1° R-OH + PCC → R-CHO\n2) R-C≡CH + H₂SO₄/HgSO₄/H₂O → R-CO-CH₃ (ketone via Markovnikov); hydroboration-oxidation → R-CH₂-CHO (aldehyde)\n3) R-CHCl₂ + aq. KOH → R-CHO\n4) Ph-CH₃ + Cl₂/hν → Ph-CHCl₂ + H₂O → Ph-CHO (benzaldehyde)',
    bs:'',
    n:'' },

  { cat:'ald-prep', cl:'c-org-a',
    f:'Rosenmund\'s reduction:\nR-COCl + H₂ → ?\nConditions?',
    fs:'',
    b:'R-COCl + H₂/Pd-BaSO₄ → R-CHO (aldehyde)\nCatalyst poisoned to prevent over-reduction to alcohol',
    bs:'',
    n:'Poisoned Pd (BaSO₄ + quinoline) = selective. Only acid chloride → aldehyde.' },

  { cat:'ald-prep', cl:'c-org-a',
    f:'Etard reaction:\nAr-CH₃ → Ar-CHO. Reagent?',
    fs:'',
    b:'Ar-CH₃ + CrO₂Cl₂ (chromyl chloride) → Ar-CHO\nCS₂ or CCl₄ as solvent',
    bs:'',
    n:'Chromyl chloride oxidises side-chain methyl to aldehyde without touching the ring.' },

  { cat:'ald-prep', cl:'c-org-a',
    f:'Gattermann–Koch reaction:\nBenzene → benzaldehyde. Reagent?',
    fs:'Carbonylation',
    b:'Benzene + CO + HCl + AlCl₃/CuCl (high pressure) → Benzaldehyde',
    bs:'',
    n:'CO + HCl → formyl chloride (HCOCl) in situ → FC acylation gives aldehyde.' },

  { cat:'ald-prep', cl:'c-org-a',
    f:'Preparation of ketone from:\n1) 2° alcohol  2) Alkyne  3) Fatty acids  4) Cadmium reagent',
    fs:'',
    b:'1) 2° R-OH + K₂Cr₂O₇/H⁺ or PCC → Ketone\n2) R-C≡C-R′ + H₂SO₄/HgSO₄ → ketone (Markovnikov)\n3) 2R-COOH vapour + MnO/300°C → R-CO-R + CO₂ + H₂O\n4) R-COCl + R′₂Cd → R-CO-R′ (ketone, no over-reduction)',
    bs:'',
    n:'Cadmium reagent (R′₂Cd) stops at ketone — does not add again (unlike Grignard).' },

  // ══ ALDEHYDE / KETONE REACTIONS ══

  { cat:'ald-rxn', cl:'c-org-a',
    f:'Nucleophilic addition to C=O — general:\nWhich is more reactive, aldehyde or ketone?',
    fs:'',
    b:'Aldehyde > Ketone (RCHO > RCOR′)\nElectrophilicity: HCHO > RCHO > ArCHO; RCHO > RCOR > ArCOR\nMore steric hindrance on ketone → slower\nMore +I from R groups → less electrophilic',
    bs:'',
    n:'' },

  { cat:'ald-rxn', cl:'c-org-a',
    f:'Addition of alcohol to aldehyde:\nR-CHO + R′OH → ? (1 equiv) then + R′OH → ?',
    fs:'',
    b:'1 equiv R′OH + H⁺ → Hemiacetal (R-CH(OH)(OR′))\n2 equiv R′OH + H⁺/dry HCl → Acetal (R-CH(OR′)₂) + H₂O\nAcetal formation is reversible; dil. HCl/H₃O⁺ restores aldehyde',
    bs:'',
    n:'Acetals used to protect aldehyde group during reactions. Stable to base, cleaved by acid.' },

  { cat:'ald-rxn', cl:'c-org-a',
    f:'Addition of NH₃ derivatives (H₂N-Z) to C=O:\nProduct and conditions?',
    fs:'',
    b:'C=O + H₂N-Z → C=N-Z + H₂O (condensation, pH 4–6)\nZ = OH → Oxime (C=N-OH)\nZ = NH₂ → Hydrazone (C=N-NH₂)\nZ = NHPh → Phenylhydrazone\nZ = NHCONH₂ → Semicarbazone (Z = semicarbazide)\nZ = NHC₆H₃(NO₂)₂ → 2,4-DNP (orange ppt — test for C=O)',
    bs:'',
    n:'2,4-DNP test: orange/yellow precipitate = confirms aldehyde or ketone.' },

  { cat:'ald-rxn', cl:'c-org-a',
    f:'Formaldehyde specific reactions:\n1) Kept at RT for long → ?\n2) + NH₃ → ?\n3) + conc. H₂SO₄ → ?',
    fs:'',
    b:'1) Polymerises → Trioxane (metaformaldehyde, cyclic trimer (CH₂O)₃)\n2) + NH₃ → Hexamethylenetetramine (urotropine)\n3) + conc. H₂SO₄ → Cyclotrimethylene (paradehyde? No — for CH₃CHO)',
    bs:'',
    n:'Urotropine = antiseptic. Trioxane = used as fuel tablets.' },

  { cat:'ald-rxn', cl:'c-org-a',
    f:'Acetaldehyde (CH₃CHO) specific:\n+ conc. H₂SO₄ (few drops) → ?\n+ NH₃ → ?',
    fs:'',
    b:'+ conc. H₂SO₄ → Paraldehyde (cyclic trimer, 2,4,6-trimethyl-1,3,5-trioxane) — hypnotic\n+ NH₃ → Acetaldehyde-ammonia (cyclic trimer with N, 3H₂O eliminated)',
    bs:'',
    n:'Paraldehyde is used as a hypnotic/sedative.' },

  { cat:'ald-rxn', cl:'c-org-a',
    f:'Haloform reaction:\nCH₃COR or CH₃CHO + X₂/NaOH → ?',
    fs:'',
    b:'CH₃COR + X₂ + NaOH → R-COO⁻Na⁺ + CHX₃ (haloform)\nX = Cl → CHCl₃ (chloroform)\nX = Br → CHBr₃ (bromoform)\nX = I → CHI₃ (iodoform, yellow ppt, characteristic smell)',
    bs:'Positive haloform/iodoform test: CH₃CHO, CH₃COR, CH₃CH(OH)R, ethanol (CH₃CH₂OH)',
    n:'Iodoform test (I₂/NaOH): yellow ppt + antiseptic smell = positive. Used to detect CH₃CO- or CH₃CH(OH)- group.' },

  // ══ NAMED REACTIONS ══

  { cat:'named-rxn', cl:'c-org-b',
    f:'Aldol condensation:\nReactant, conditions, product?',
    fs:'',
    b:'Carbonyl compound WITH α-H + base (OH⁻) or acid → Aldol (β-hydroxy aldehyde/ketone)\nCH₃CHO + OH⁻ → CH₃-CH(OH)-CH₂-CHO (aldol)\n+ Δ → CH₃-CH=CH-CHO (aldol condensation, α,β-unsaturated carbonyl)',
    bs:'Mixed aldol (cross aldol): use one component without α-H (e.g. HCHO, ArCHO)',
    n:'α-H is essential. No α-H = no aldol. Dehydration gives extended conjugated system.' },

  { cat:'named-rxn', cl:'c-org-b',
    f:'Cannizzaro reaction:\nCondition: NO α-H + OH⁻ → ?\nWhich aldehydes?',
    fs:'Disproportionation of aldehyde',
    b:'2 RCHO (no α-H) + OH⁻ → R-COOH + R-CH₂OH\nOne molecule oxidised → acid; other reduced → alcohol\nExamples: HCHO, PhCHO, ClCHO, (CH₃)₃C-CHO',
    bs:'Cross-Cannizzaro: HCHO + Ar-CHO → HCOOH + Ar-CH₂OH (HCHO always oxidised)',
    n:'No α-H required. Hydride transfer mechanism. HCHO is always the reducing agent in cross-Cannizzaro.' },

  { cat:'named-rxn', cl:'c-org-b',
    f:'Perkin reaction:\nAromatic aldehyde (no α-H) + anhydride → ?',
    fs:'',
    b:'Ar-CHO + (CH₃CO)₂O + CH₃COONa (base, salt of anhydride) + prolonged 400°C\n→ Ar-CH=CH-COOH (α,β-unsaturated acid, e.g. cinnamic acid from benzaldehyde)',
    bs:'',
    n:'Named for William Henry Perkin. Cross-condensation between aromatic aldehyde and anhydride.' },

  { cat:'named-rxn', cl:'c-org-b',
    f:'Knoevenagel reaction:\nAromatic aldehyde + malonic ester + pyridine → ?',
    fs:'',
    b:'Ar-CHO + CH₂(COOEt)₂ (malonic ester) + pyridine → Ar-CH=CH-COOH (after decarboxylation) + CO₂ + EtOH',
    bs:'',
    n:'Similar to Perkin but uses active methylene compound (malonic ester). Pyridine = base.' },

  { cat:'named-rxn', cl:'c-org-b',
    f:'Reformatsky reaction:\nC=O + α-halogenated ester + Zn/Δ → ?',
    fs:'',
    b:'R-CO-R′ + Br-CH₂-COOEt + Zn/Δ → R-C(R′)(OH)-CH₂-COOEt (β-hydroxy ester)\n(Similar to Grignard but uses Zn organometallic)',
    bs:'',
    n:'Zinc forms organozinc intermediate (like Grignard but gentler). Gives β-hydroxy esters.' },

  { cat:'named-rxn', cl:'c-org-b',
    f:'Gattermann formylation of phenol:\nPhenol + Zn(CN)₂/HCl → ?',
    fs:'Modified Gattermann',
    b:'Phenol + Zn(CN)₂/HCl + H₂O/Δ → o-Hydroxybenzaldehyde (major) + p-isomer (minor)',
    bs:'',
    n:'Modified version works with phenol/naphthol. Standard Gattermann-Koch uses benzene.' },

  { cat:'named-rxn', cl:'c-org-b',
    f:'Wittig reaction:\nC=O + Ph₃P=CHR (ylide) → ?',
    fs:'',
    b:'R-CHO + Ph₃P=CHR′ → R-CH=CH-R′ (alkene) + Ph₃P=O\nConverts C=O to C=C specifically',
    bs:'',
    n:'Wittig = C=O → C=C. Ylide (phosphorus ylide) acts as carbanion equivalent. Highly specific.' },

  // ══ CARBOXYLIC ACID PREPARATION ══

  { cat:'cooh-prep', cl:'c-org-c',
    f:'Preparation of RCOOH — 5 methods',
    fs:'',
    b:'1) Oxidation of 1° alcohol with KMnO₄ → RCOOH\n2) Oxidation of aldehyde with KMnO₄/K₂Cr₂O₇ or Tollens\n3) Grignard + CO₂ → RCOOH (after H₃O⁺)\n4) Hydrolysis of nitrile (RCN) + H₂O → RCOOH\n5) Hydrolysis of ester (RCOOR′) + H₂O → RCOOH + R′OH',
    bs:'',
    n:'' },

  { cat:'cooh-prep', cl:'c-org-c',
    f:'Kolbe\'s electrolysis:\n2R-COO⁻ → ? (industrial)',
    fs:'',
    b:'2RCOOK + 2HOH + electrolysis → R-R + H₂ + 2CO₂ + 2KOH\nAnode: RCOO⁻ → RCOO• → R• → R-R',
    bs:'',
    n:'Gives symmetric alkane. Decarboxylation + radical coupling.' },

  // ══ CARBOXYLIC ACID REACTIONS ══

  { cat:'cooh-rxn', cl:'c-org-c',
    f:'RCOOH + PCl₅ → ?\nRCOOH + PCl₃ → ?\nRCOOH + SOCl₂ → ?',
    fs:'Making acid chlorides',
    b:'RCOOH + PCl₅ → R-COCl + POCl₃ + HCl\nRCOOH + PCl₃ → R-COCl + H₃PO₃\nRCOOH + SOCl₂ → R-COCl + SO₂ + HCl (best method)',
    bs:'',
    n:'SOCl₂ = cleanest (gaseous byproducts SO₂ and HCl escape). Most used in synthesis.' },

  { cat:'cooh-rxn', cl:'c-org-c',
    f:'Acidity of carboxylic acids:\nEffect of α-substituents?',
    fs:'',
    b:'EWG (Cl, NO₂, CN) at α → increases acidity (stabilise RCOO⁻)\nEDG (CH₃, OH) → decreases acidity\nOrder: CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > CH₃COOH\nAromatic: electron-withdrawing groups increase acidity; EDG decrease',
    bs:'',
    n:'' },

  { cat:'cooh-rxn', cl:'c-org-c',
    f:'Heating effects of carboxylic acids:\nMonocarboxylic → ?\nDicarboxylic acid (depending on chain length) → ?',
    fs:'',
    b:'Monocarboxylic: RCOOH + Ca(OH)₂ → RCOOCa → Δ → RCOCH₃ (ketone) for higher acids; if soda-lime → R-H\nDicarboxylic:\n• Malonic acid → acetic acid + CO₂ (decarboxylation)\n• Succinic/Glutaric → cyclic anhydride\n• Phthalic → phthalic anhydride\n• Adipic/Pimelic → cyclic ketone (Dieckmann/intramolecular)\n• Oxalic/Malonic → HCOOH → CO₂ + H₂O',
    bs:'',
    n:'Short-chain diacids (oxalic, malonic) decarboxylate easily. Mid-chain → anhydride. Long → cyclic ketone.' },

  // ══ ACID DERIVATIVES ══

  { cat:'derivatives', cl:'c-org-d',
    f:'Reactivity order of acid derivatives toward nucleophilic acyl substitution?',
    fs:'',
    b:'Acid chloride > Anhydride > Ester > Amide\n(Most reactive → least reactive)\nAll involve: Nu attacks C=O → tetrahedral intermediate → leaving group leaves',
    bs:'',
    n:'Acid chloride = most reactive (Cl⁻ = good leaving group). Amide = least (NH₂⁻ = poor LG).' },

  { cat:'derivatives', cl:'c-org-d',
    f:'Hofmann bromamide degradation:\nR-CO-NH₂ + Br₂ + KOH → ?\nCarbon count change?',
    fs:'',
    b:'R-CO-NH₂ + Br₂ + 2KOH → R-NH₂ + KBr + K₂CO₃ + H₂O\nProduct has ONE LESS carbon than reactant amide',
    bs:'Mechanism: -CO-NH₂ → -CO-NHBr → isocyanate (R-N=C=O) → H₂O → amine',
    n:'Key rearrangement: acyl nitrene → isocyanate → amine. Carbon lost as CO₂/K₂CO₃.' },

  { cat:'derivatives', cl:'c-org-d',
    f:'Schmidt reaction:\nRCOOH + HN₃ → ?\nR-CO-R′ + HN₃ → ?',
    fs:'',
    b:'RCOOH + HN₃/H₂SO₄ → R-NH₂ + CO₂ + N₂ (like Hofmann but uses hydrazoic acid)\nR-CO-R′ + HN₃ → R-CO-NHR′ (amide via Beckmann-like rearrangement)',
    bs:'',
    n:'Larger group migrates in Schmidt rearrangement of ketone. RCOOH → R-NH₂ (1 carbon lost).' },

  { cat:'derivatives', cl:'c-org-d',
    f:'Beckmann rearrangement:\nOxime + H₂SO₄ → ?\nWhich group migrates?',
    fs:'',
    b:'Ketone oxime (R-C(=NOH)-R′) + H₂SO₄ → amide (R-CO-NHR′)\nThe group anti to OH migrates (trans to -OH)\nCyclohexanone oxime → caprolactam (used for Nylon-6)',
    bs:'',
    n:'Stereospecific — anti group migrates. Caprolactam from cyclohexanone oxime = industrial importance.' },

];
