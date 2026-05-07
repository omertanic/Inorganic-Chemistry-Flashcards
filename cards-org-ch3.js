window.LABELS = {
  'alc-prep':  'Alcohol Prep',
  'alc-rxn':   'Alcohol Rxns',
  'ether-prep':'Ether Prep',
  'ether-rxn': 'Ether Rxns',
  'gr-prep':   'Grignard Prep',
  'gr-rxn':    'Grignard Rxns',
};

window.FILTER_GROUPS = [
  { label: 'Alcohols', cats: ['alc-prep', 'alc-rxn'] },
  { label: 'Ethers',   cats: ['ether-prep', 'ether-rxn'] },
  { label: 'Grignard', cats: ['gr-prep', 'gr-rxn'] },
];

window.CARDS = [

  // ══ ALCOHOL PREPARATION ══

  { cat:'alc-prep', cl:'c-org-b',
    f:'NaBH₄ reduction:\nAldehyde → ?\nKetone → ?',
    fs:'Metal hydride — mild, selective',
    b:'R-CHO → 1° Alcohol (R-CH₂-OH)\nR-CO-R′ → 2° Alcohol\nAcid Chloride → 1° Alcohol\nDoes NOT reduce COOH, ester, amide',
    bs:'Solvent: ether or EtOH',
    n:'NaBH₄ = mild, selective. Does not touch acid/ester/amide. Safe with water.' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'LiAlH₄ (LAH) reduction — what does it reduce to what?',
    fs:'Powerful reducing agent',
    b:'Aldehyde → 1° Alcohol\nKetone → 2° Alcohol\nCarboxylic acid (excess) → 1° Alcohol\nAcid anhydride → 1° Alcohol\nAcid chloride → 1° Alcohol\nEster → 1° Alcohol\nCyanide → 1° Amine\nAmide → 1° Amine\nIsocyanide → 2° Amine\nNitro → 1° Amine',
    bs:'Does NOT reduce alkene, alkyne or benzene ring (except in cinnamic systems)',
    n:'Solvent: dry ether or THF. Reacts violently with H₂O — must keep dry.' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'DIBAL-H reduction:\nEster (warm) → ?\nEster (cold) → ?\nCyanide → ?',
    fs:'Diisobutylaluminium hydride',
    b:'Ester (warm/excess) → 1° Alcohol + R′OH\nEster (cold/–78°C) → Aldehyde + R′OH\nCyanide → Aldehyde',
    bs:'Inert solvent (toluene, hexane)',
    n:'DIBAL-H at cold temperature stops at aldehyde stage (partial reduction of ester/nitrile).' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'Bouveault–Blanc reduction:\nAldehyde → ?\nKetone → ?\nReagents?',
    fs:'Metal/proton reduction',
    b:'R-CHO → 1° Alcohol\nR-CO-R′ → 2° Alcohol\nReagent: Na in EtOH',
    bs:'Also: ester → 1° alcohol; acid chloride → 1° alcohol',
    n:'Old method; now largely replaced by LiAlH₄/NaBH₄.' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'Hydroboration-oxidation of alkene → alcohol:\nRegiochemistry and stereochemistry?',
    fs:'',
    b:'R-CH=CH₂ + BH₃/THF → then H₂O₂/NaOH → R-CH₂-CH₂-OH\nAnti-Markovnikov addition (OH on less substituted C)\nSyn addition → retention of configuration',
    bs:'',
    n:'Compare with acid-catalysed hydration: Markovnikov = OH on more substituted C.' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'Oxymercuration-demercuration:\nProduct? Markovnikov or anti-Markov?',
    fs:'',
    b:'R-CH=CH₂ + Hg(OAc)₂/THF/H₂O → then NaBH₄/H₃O⁺ → R-CH(OH)-CH₃\nMarkovnikov, NO rearrangement',
    bs:'Reagents: i) Hg(OAc)₂/THF/ROH  ii) NaBH₄/H₃O⁺',
    n:'Advantage over acid-H₂O: no carbocation rearrangement. Alcohol is Markovnikov product.' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'Reduction of R-NH₂ with HNO₂ (nitrous acid) → ?',
    fs:'Aliphatic primary amines only',
    b:'R-NH₂ + HNO₂ → R-OH + N₂ + H₂O',
    bs:'',
    n:'Unstable diazonium salt immediately hydrolyses to alcohol. HNO₂ = NaNO₂ + HCl.' },

  { cat:'alc-prep', cl:'c-org-b',
    f:'Pinacol–Pinacolone rearrangement:\nReactant → Product? Conditions?',
    fs:'Acid-catalysed elimination of vicinal diol',
    b:'Pinacol (vic-diol): (CH₃)₂C(OH)-C(OH)(CH₃)₂ + H⁺ →\nPinacolone: (CH₃)₃C-CO-CH₃ (3,3-dimethylbutan-2-one)',
    bs:'Mechanism: protonation → loss of H₂O → 3° carbocation → 1,2-Me shift → more stable C⁺ → loss of H⁺',
    n:'Key JEE rearrangement. 1,2-methyl shift converts carbocation to ketone.' },

  // ══ ALCOHOL REACTIONS ══

  { cat:'alc-rxn', cl:'c-org-b',
    f:'R-OH + HX → R-X\nReactivity of HX and mechanism for 1°/2°/3°?',
    fs:'',
    b:'Reactivity: HI > HBr > HCl\n3° → SN1; unbranched 1°/2° → SN2',
    bs:'',
    n:'' },

  { cat:'alc-rxn', cl:'c-org-b',
    f:'Oxidation of 1° alcohol with PCC → ?\nWith KMnO₄ → ?',
    fs:'PCC = Pyridinium chlorochromate',
    b:'1° R-CH₂-OH + PCC → Aldehyde (R-CHO)\n1° R-CH₂-OH + KMnO₄ → Carboxylic acid (R-COOH)',
    bs:'2° R-CH(OH)-R′ + K₂Cr₂O₇ or CrO₃/H⁺ → Ketone (R-CO-R′)',
    n:'PCC stops at aldehyde. KMnO₄ goes all the way to RCOOH. 3° alcohols resist oxidation.' },

  { cat:'alc-rxn', cl:'c-org-b',
    f:'R-OH + Na → ?\nAcidity order of alcohols?',
    fs:'Reaction with metals',
    b:'R-OH + Na → RONa⁺ + ½ H₂↑\nAcidity: CH₃OH > 1° > 2° > 3° (opposite to carbocation stability)',
    bs:'',
    n:'More branched = more electron density on O via +I effect → harder to release H⁺ → less acidic.' },

  { cat:'alc-rxn', cl:'c-org-b',
    f:'R-COOH + R′-OH ⇌ Ester (Fischer esterification). Reagents and equilibrium?',
    fs:'',
    b:'Conc. H₂SO₄ / H₃PO₄ catalyst, heat\nEquilibrium — remove H₂O to push forward (Dean-Stark, conc. H₂SO₄)',
    bs:'',
    n:'Mechanism: protonation of C=O → nucleophilic attack by ROH → loss of H₂O → ester.' },

  { cat:'alc-rxn', cl:'c-org-b',
    f:'3R-OH + PX₃ → ?\nR-OH + PCl₅ → ?\nR-OH + SOCl₂ → ?',
    fs:'Converting -OH to halide',
    b:'3R-OH + PX₃ → 3R-X + H₃PO₃  (X = Cl, Br, I)\nR-OH + PCl₅ → R-Cl + HCl + POCl₃  (SN2)\nR-OH + SOCl₂ → R-Cl + HCl + SO₂  (SN2, with pyridine)',
    bs:'',
    n:'SOCl₂ + pyridine is cleanest method for making R-Cl from ROH. Pyridine mops up HCl.' },

  { cat:'alc-rxn', cl:'c-org-b',
    f:'Cu/Δ dehydrogenation of alcohols:\n1°, 2°, 3° → ?',
    fs:'',
    b:'1° R-OH → RCHO (aldehyde)\n2° R-OH → R-CO-R′ (ketone)\n3° R-OH → Alkene (elimination)',
    bs:'',
    n:'3° has no α-H for dehydrogenation to ketone → elimination instead.' },

  // ══ ETHER PREPARATION ══

  { cat:'ether-prep', cl:'c-org-c',
    f:'Williamson\'s synthesis of ether:\nR-X + NaOR′ → ?',
    fs:'Best method for unsymmetric ethers',
    b:'R-X + NaOR′ → R-O-R′ + NaX\nSN2 mechanism — must use 1° R-X\n3° R-X → gives elimination (E2)',
    bs:'',
    n:'Prepare NaOR′ from R′OH + Na. Then use 1° alkyl halide for SN2.' },

  { cat:'ether-prep', cl:'c-org-c',
    f:'Williamson\'s continuous etherification (dehydration of alcohol):\nAt 140°C vs 180°C?',
    fs:'',
    b:'140°C + H₂SO₄: 2R-OH → R-O-R + H₂O (ether — SN2, 1°/2°)\n180°C + H₂SO₄: R-OH → Alkene + H₂O (E1, 3°/2°)',
    bs:'',
    n:'Lower T = substitution (ether); higher T = elimination (alkene). Classic JEE temperature distinction.' },

  { cat:'ether-prep', cl:'c-org-c',
    f:'2R-X + Ag₂O/Δ → ?',
    fs:'From alkyl halides',
    b:'R-O-R′ + 2AgX↓',
    bs:'',
    n:'Ag₂O acts as both base and O-source. AgX precipitate drives reaction forward.' },

  // ══ ETHER REACTIONS ══

  { cat:'ether-rxn', cl:'c-org-c',
    f:'R-O-R′ + HX → ? Mechanism for 3° vs 1°/2° ether?\nWhich HX is used?',
    fs:'Cleavage of ethers',
    b:'Step 1: R-O-R′ + H⁺ → R-O⁺H-R′\nStep 2: 3° carbon → SN1; 1°/2° → SN2 (X⁻ attacks)\nProducts: R-X + R′-OH (or 2 R-X if excess HX)\nOnly HI and HBr used (not HCl — too weak)',
    bs:'',
    n:'Protonation first converts bad OH into good H₂O leaving group. Then normal substitution.' },

  { cat:'ether-rxn', cl:'c-org-c',
    f:'R-O-R′ + H₃O⁺ → ?\nIntramolecular SN2 of HO-(CH₂)n-Cl + NaOH → ?',
    fs:'',
    b:'R-O-R′ + H₃O⁺ → R-OH + R′-OH (hydrolysis)\nHO-(CH₂)n-Cl + NaOH → cyclic ether (epoxide n=2, oxetane n=3, THF n=4)',
    bs:'',
    n:'Intramolecular SN2 is fast for forming 3- and 5-membered rings.' },

  // ══ GRIGNARD PREPARATION ══

  { cat:'gr-prep', cl:'c-org-d',
    f:'Preparation of Grignard reagent:\nR-X + Mg → ?\nReactivity order of R-X?',
    fs:'',
    b:'R-X + Mg → R-MgX (dry, pure ether)\nReactivity: R-I > R-Br > R-Cl (R-F → no GR formation)',
    bs:'',
    n:'Must use completely dry ether. Even trace water destroys the Grignard.' },

  { cat:'gr-prep', cl:'c-org-d',
    f:'What destroys Grignard reagent? (active H sources)',
    fs:'',
    b:'Z-H + R-MgX → R-H + Mg(Z)(X)\nZ = H₂O, ROH, RCOOH, NH₃, terminal alkyne (any active H)\nR-MgX acts as a base — grabs the acidic H',
    bs:'',
    n:'Grignard must be kept anhydrous. RMgX with active H simply protonates (destroyed).' },

  // ══ GRIGNARD REACTIONS ══

  { cat:'gr-rxn', cl:'c-org-d',
    f:'Grignard + carbonyl → which alcohol?\nHCHO → ?\nR′CHO → ?\nR′COR″ → ?',
    fs:'Nucleophilic addition to C=O',
    b:'RMgX + HCHO → 1° Alcohol (after H₃O⁺)\nRMgX + R′CHO → 2° Alcohol\nRMgX + R′COR″ → 3° Alcohol\nReactivity: HCHO > RCHO > RCOR (steric)',
    bs:'Also: ArCHO > RCHO; RCOR > RCOAr',
    n:'Mechanism: R⁻ from RMgX attacks electrophilic C of C=O → alkoxide → protonate with H₃O⁺.' },

  { cat:'gr-rxn', cl:'c-org-d',
    f:'RMgX + CO₂ → ? (after H₃O⁺)\nRMgX + ester → ?',
    fs:'',
    b:'RMgX + CO₂ → R-COOH (carboxylic acid)\nRMgX + R′-COOR″ → tertiary alcohol R-C(R)(R)-OH (2 equiv RMgX add)',
    bs:'Mechanism: 1st equiv RMgX → ketone intermediate → 2nd equiv → 3° alcohol',
    n:'Ester + 2 RMgX → 3° alcohol with two identical R groups.' },

  { cat:'gr-rxn', cl:'c-org-d',
    f:'RMgX + acid chloride → ?',
    fs:'',
    b:'R-COCl + R′MgX → ketone (R-CO-R′) intermediate → + R′MgX → 3° alcohol R-CR′₂-OH',
    bs:'Excess Grignard → tertiary alcohol. Limit → ketone (with bulky groups)',
    n:'Ketone intermediate is reactive → usually adds second equivalent of RMgX unless very hindered.' },

  { cat:'gr-rxn', cl:'c-org-d',
    f:'RMgX + acid anhydride → ?',
    fs:'',
    b:'R-CO-O-CO-R″ + R′MgX → R-CO-R′ (ketone) + R″COO⁻MgX\n+ R′MgX again → 3° alcohol',
    bs:'',
    n:'Anhydride first gives ketone, then second equivalent gives tertiary alcohol (like with ester).' },

  { cat:'gr-rxn', cl:'c-org-d',
    f:'RMgX + epoxide → ? (which carbon attacked?)',
    fs:'',
    b:'RMgX + ethylene oxide → R-CH₂-CH₂-OH (1° alcohol, chain extended by 2 C)\nAttacks less substituted carbon of epoxide',
    bs:'',
    n:'Great way to add 2 carbons and get a primary alcohol. Anti-Markovnikov ring opening.' },

  { cat:'gr-rxn', cl:'c-org-d',
    f:'RMgX + O₂ → ? then + H₂O → ?',
    fs:'Unusual oxidation of Grignard',
    b:'RMgX + O₂ → R-O-O-MgX (peroxide)\nR-O-O-MgX + RMgX → 2 R-O-MgX\nR-O-MgX + H₂O → R-OH',
    bs:'',
    n:'Grignard reagents must be kept away from air/O₂ — oxidation destroys them and gives alcohol contamination.' },

];
