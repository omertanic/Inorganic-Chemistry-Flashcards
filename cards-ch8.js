window.LABELS = {
  'occurrence':    'Occurrence & Ores',
  'concentration': 'Concentration',
  'extraction':    'Extraction',
  'thermodynamics':'Ellingham / Thermo',
  'applications':  'Metal Extraction',
  'refining':      'Refining',
  'uses':          'Uses & Facts',
};

window.FILTER_GROUPS = [
  { label: 'Ore & Conc',   cats: ['occurrence', 'concentration'] },
  { label: 'Extraction',   cats: ['extraction', 'thermodynamics', 'applications'] },
  { label: 'Refining',     cats: ['refining'] },
  { label: 'Uses & Facts', cats: ['uses'] },
];

window.CARDS = [

  // ══ OCCURRENCE & ORES ══

  { cat:'occurrence', cl:'c-hydro',
    f:'Principal ores of Aluminium?',
    fs:'',
    b:'Bauxite: AlOₓ(OH)₃₋₂ₓ (main ore for extraction)\nKaolinite (clay): Al₂(OH)₄Si₂O₅\nCryolite: Na₃AlF₆ (used as flux in electrolysis)',
    bs:'Al = most abundant metal (3rd most abundant element in crust, 8.3%)',
    n:'Ruby and sapphire are impure Al₂O₃ (with Cr and Co impurities respectively).' , imp:true },

  { cat:'occurrence', cl:'c-hydro',
    f:'Principal ores of Iron?',
    fs:'',
    b:'Haematite: Fe₂O₃\nMagnetite: Fe₃O₄\nSiderite: FeCO₃\nIron pyrites: FeS₂',
    bs:'Iron = 2nd most abundant metal in crust',
    n:'Iron pyrites NOT used for extraction — produces SO₂ (polluting). Oxide ores preferred.' , imp:true },

  { cat:'occurrence', cl:'c-hydro',
    f:'Principal ores of Copper?',
    fs:'',
    b:'Copper pyrites (chalcopyrite): CuFeS₂\nMalachite: CuCO₃·Cu(OH)₂\nCuprite: Cu₂O\nCopper glance: Cu₂S',
    bs:'',
    n:'CuFeS₂ is the most important ore commercially.' , imp:true },

  { cat:'occurrence', cl:'c-hydro',
    f:'Principal ores of Zinc?',
    fs:'',
    b:'Zinc blende / Sphalerite: ZnS\nCalamine: ZnCO₃\nZincite: ZnO',
    bs:'',
    n:'Zinc blende (ZnS) is the most common ore.' , imp:true },

  { cat:'occurrence', cl:'c-hydro',
    f:'Mineral vs Ore — what is the difference?',
    fs:'',
    b:'Mineral: naturally occurring chemical substance in earth\'s crust obtained by mining\nOre: a mineral from which a metal can be extracted commercially and profitably\nAll ores are minerals but not all minerals are ores',
    bs:'',
    n:'"Gangue" = unwanted earthly impurities associated with the ore.' , imp:true },

  { cat:'occurrence', cl:'c-hydro',
    f:'3 major steps in extraction of metals from ores?',
    fs:'',
    b:'1) Concentration of the ore (removal of gangue)\n2) Isolation of metal from concentrated ore (reduction)\n3) Purification / Refining of the metal',
    bs:'',
    n:'' , imp:true },

  // ══ CONCENTRATION METHODS ══

  { cat:'concentration', cl:'c-misc',
    f:'Hydraulic washing — principle and used for?',
    fs:'Gravity separation',
    b:'Based on difference in specific gravity of ore and gangue\nUpward stream of water washes lighter gangue away; heavier ore particles left behind\nUsed for: heavy oxide/carbonate ores (e.g., tin stone SnO₂)',
    bs:'',
    n:'' },

  { cat:'concentration', cl:'c-misc',
    f:'Magnetic separation — principle and example?',
    fs:'',
    b:'Based on difference in magnetic properties\nOre/gangue attracted to magnetic field → separated by magnetic roller on conveyer belt\nExample: Fe₂O₃, Fe₃O₄, FeCO₃, FeS₂ (magnetic) separated from non-magnetic gangue',
    bs:'Magnetic particles fall close to belt; non-magnetic fall away',
    n:'' },

  { cat:'concentration', cl:'c-misc',
    f:'Froth flotation — principle, reagents and used for?',
    fs:'',
    b:'Used for sulphide ores\nOre powder + water + collectors + froth stabilisers → air blown → mineral floats in froth\nCollectors (pine oil, fatty acids, xanthates): make mineral non-wettable\nFroth stabilisers (cresols, aniline): stabilise froth\nMineral particles wet by oil; gangue by water',
    bs:'Depressant NaCN: selectively prevents ZnS from floating (allows PbS) when both present',
    n:'Invented by observation: copper compounds floated in soapsuds while washing miners\' clothes (Mrs. Carrie Everson).' , imp:true },

  { cat:'concentration', cl:'c-misc',
    f:'Leaching of bauxite (Bayer\'s process) — step by step reactions?',
    fs:'Chemical method of concentration',
    b:'Step 1: Al₂O₃ + 2NaOH + 3H₂O → 2Na[Al(OH)₄] (aq) — dissolves Al₂O₃, SiO₂ also dissolves\nStep 2: 2Na[Al(OH)₄] + 2CO₂ → Al₂O₃·xH₂O↓ + 2NaHCO₃ — precipitates hydrated alumina ("seeding" added)\nStep 3: Al₂O₃·xH₂O → Al₂O₃ + xH₂O (at 1470 K) — pure alumina',
    bs:'Conditions: conc. NaOH, 473–523 K, 35–36 bar pressure (digestion)',
    n:'SiO₂ dissolves as sodium silicate and stays in solution. Other impurities (Fe₂O₃, TiO₂) are left behind.' , imp:true },

  { cat:'concentration', cl:'c-misc',
    f:'Leaching of silver and gold with NaCN:\nReaction and recovery step?',
    fs:'Hydrometallurgy',
    b:'Dissolution: 4M + 8CN⁻ + 2H₂O + O₂ → 4[M(CN)₂]⁻ + 4OH⁻  (M = Ag or Au)\nRecovery (displacement): 2[M(CN)₂]⁻ + Zn → [Zn(CN)₄]²⁻ + 2M',
    bs:'Air supplies O₂ for oxidation; Zn acts as reducing agent to displace the metal',
    n:'More reactive Zn displaces less reactive Au/Ag from cyanide complex.' , imp:true },

  // ══ EXTRACTION (CONVERSION TO OXIDE) ══

  { cat:'extraction', cl:'c-heat',
    f:'Calcination vs Roasting — define and give examples?',
    fs:'Two methods to convert ore to oxide',
    b:'Calcination: heating in absence/limited air → removes volatile matter\nFe₂O₃·xH₂O → Fe₂O₃ + xH₂O\nZnCO₃ → ZnO + CO₂\nCaCO₃·MgCO₃ → CaO + MgO + 2CO₂\n\nRoasting: heating in regular supply of air below MP of metal\n2ZnS + 3O₂ → 2ZnO + 2SO₂\n2PbS + 3O₂ → 2PbO + 2SO₂\n2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂',
    bs:'',
    n:'Calcination → carbonates, hydrated oxides. Roasting → sulphides. Both convert ore to oxide for reduction.' , imp:true },

  // ══ THERMODYNAMICS / ELLINGHAM ══

  { cat:'thermodynamics', cl:'c-redox',
    f:'Ellingham diagram — what is it and what does it show?',
    fs:'ΔrG° vs T plot',
    b:'Graph of ΔfG° vs T for formation of metal oxides (2xM + O₂ → 2MxO)\nEach curve is a straight line, generally slopes upward (ΔS negative for oxide formation)\nIf the curve of reducing agent lies BELOW the metal oxide curve → reduction is feasible\nPoint of intersection of two curves → temperature above which reduction becomes possible',
    bs:'First used by H.J.T. Ellingham',
    n:'Limitations: (1) Only thermodynamic — doesn\'t tell about kinetics/rate. (2) Assumes equilibrium — not always true in commercial processes.' , imp:true },

  { cat:'thermodynamics', cl:'c-redox',
    f:'Why does the Ellingham curve for metal oxide formation slope upward?\nException?',
    fs:'',
    b:'Formation of MxO consumes O₂ gas → ΔS is negative → T·ΔS is positive → ΔfG° becomes less negative as T rises → curve slopes upward\nException: C + O₂ → CO₂ (slope nearly flat)\n2C + O₂ → 2CO: curve slopes DOWNWARD (more gas produced → ΔS positive)',
    bs:'',
    n:'CO curve going down is why coke becomes a better reducing agent at higher temperatures.' , imp:true },

  { cat:'thermodynamics', cl:'c-redox',
    f:'ΔG = ΔH − TΔS: when does ΔG become negative?\n(2 conditions)',
    fs:'Feasibility criterion',
    b:'1) If ΔS is positive → increasing T increases TΔS → eventually ΔH < TΔS → ΔG becomes negative\n2) Coupling two reactions (reduction + oxidation) such that the net ΔrG° is negative',
    bs:'ΔG° = −nE°F (electrochemical equivalent)',
    n:'' , imp:true },

  { cat:'thermodynamics', cl:'c-redox',
    f:'At what temperature does coke reduce FeO?\nRelevant ΔrG° values?',
    fs:'From Ellingham diagram',
    b:'Above ~1073 K: C + ½O₂ → CO curve lies below Fe/FeO curve → ΔrG° becomes negative\nAt ~1673 K: 2FeO→2Fe+O₂ ΔrG°=+341 kJ/mol; 2C+O₂→2CO ΔrG°=−447 kJ/mol\nNet (FeO+C→Fe+CO): ΔrG°=−53 kJ/mol → feasible',
    bs:'',
    n:'Below 1073 K: CO₂ is the preferred product of carbon oxidation. Above 1073 K: CO preferred → more useful reductant.' , imp:true },

  { cat:'thermodynamics', cl:'c-redox',
    f:'Under what conditions can Mg reduce Al₂O₃?\nAnd why is it not done commercially?',
    fs:'From Ellingham diagram intersection point "A"',
    b:'Below the intersection point of Al₂O₃ and MgO curves (below ~1350°C): Mg can reduce Al₂O₃\n2/3 Al₂O₃ + 2Mg → 2MgO + 4/3 Al\nNot done commercially: temperature required is very low → process is uneconomical',
    bs:'Above ~1350°C: Al can reduce MgO',
    n:'Mg is more expensive than Al; not practical even if thermodynamically feasible.' },

  { cat:'thermodynamics', cl:'c-redox',
    f:'Why is reduction of a metal oxide easier when the metal product is in liquid state?',
    fs:'Entropy argument',
    b:'Liquid state has higher entropy than solid state\nΔS of reduction (solid oxide → liquid metal) is more positive\n→ TΔS term larger → ΔrG° more negative → reduction more feasible',
    bs:'',
    n:'' },

  // ══ METAL EXTRACTION APPLICATIONS ══

  { cat:'applications', cl:'c-redox',
    f:'Extraction of iron — Blast furnace reactions at 500–800 K and 900–1500 K?',
    fs:'',
    b:'500–800 K (upper zone, lower T):\n3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂\nFe₃O₄ + 4CO → 3Fe + 4CO₂\nFe₂O₃ + CO → 2FeO + CO₂\nAlso: CaCO₃ → CaO + CO₂; CaO + SiO₂ → CaSiO₃ (slag)\n\n900–1500 K (lower zone, higher T):\nC + CO₂ → 2CO\nFeO + CO → Fe + CO₂\nFeO + C → Fe + CO',
    bs:'Also at lowest zone: C + O₂ → CO₂ (up to ~2200 K)',
    n:'Pig iron (from blast furnace): ~4% C + impurities S, P, Si, Mn.' , imp:true },

  { cat:'applications', cl:'c-redox',
    f:'Pig iron vs Cast iron vs Wrought iron — differences?',
    fs:'',
    b:'Pig iron: from blast furnace, ~4% C + impurities — can be moulded\nCast iron: pig iron + scrap iron + coke + hot air → ~3% C — very hard and brittle\nWrought iron (malleable iron): purest commercial iron — made by oxidising impurities from cast iron in reverberatory furnace lined with haematite\nFe₂O₃ + 3C → 2Fe + 3CO (haematite oxidises C)',
    bs:'',
    n:'Wrought iron: lowest C content, most malleable. Used for chains, anchors, agricultural implements.' , imp:true },

  { cat:'applications', cl:'c-redox',
    f:'Extraction of copper from sulphide ore — step by step reactions?',
    fs:'Self-reduction in converter',
    b:'1) Roasting: 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂\n2) Smelting (reverberatory furnace with silica): FeO + SiO₂ → FeSiO₃ (slag)\n   → copper matte (Cu₂S + FeS)\n3) In converter: 2FeS + 3O₂ → 2FeO + 2SO₂; FeO + SiO₂ → FeSiO₃\n   2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂\n   2Cu₂O + Cu₂S → 6Cu + SO₂ (self-reduction)\n4) Blister copper: solidified with blistered appearance from SO₂ evolution',
    bs:'Cu₂O line is near top of Ellingham diagram → Cu oxide easy to reduce',
    n:'Blister copper = impure; must be refined electrolytically.' , imp:true },

  { cat:'applications', cl:'c-redox',
    f:'Extraction of zinc from zinc oxide?',
    fs:'',
    b:'ZnO + C → Zn + CO  (coke, 1673 K)\nZn vapour is collected by rapid chilling (distillation)\nOre made into brickettes with coke and clay before reduction',
    bs:'Higher temperature needed than for copper',
    n:'India was first country to master zinc distillation (downward distillation technique, 5th–6th BCE, Zawar, Rajasthan).' , imp:true },

  { cat:'applications', cl:'c-redox',
    f:'Extraction of aluminium — Hall–Héroult process:\nReactions at cathode and anode?',
    fs:'Electrolysis of molten Al₂O₃',
    b:'Ore: bauxite → purified Al₂O₃ (by Bayer\'s process)\nFlux: Na₃AlF₆ (cryolite) or CaF₂ — lowers melting point, increases conductivity\nCell: steel vessel with carbon lining (cathode), graphite rods (anode)\nOverall: 2Al₂O₃ + 3C → 4Al + 3CO₂\nCathode: Al³⁺(melt) + 3e⁻ → Al(l)\nAnode: C + O²⁻(melt) → CO(g) + 2e⁻\n       C + 2O²⁻(melt) → CO₂(g) + 4e⁻',
    bs:'~0.5 kg carbon anode burnt per kg Al produced',
    n:'Cryolite role: lowers MP of Al₂O₃ from ~2000°C to ~950°C and makes it conducting.' , imp:true },

  { cat:'applications', cl:'c-redox',
    f:'Electrochemical principle of metallurgy:\nΔG° = −nE°F. When does a more reactive metal displace a less reactive one?',
    fs:'',
    b:'If the difference in two E° values gives positive net E° → ΔG° is negative → reaction feasible\nExample: Cu²⁺(aq) + Fe(s) → Cu(s) + Fe²⁺(aq)\n(Fe more reactive → goes into solution; Cu less reactive → deposits out)',
    bs:'More reactive metals have large negative electrode potentials → difficult to reduce',
    n:'Leaching of low-grade copper: Cu²⁺ + H₂ → Cu + 2H⁺ (or scrap iron).' },

  // ══ REFINING ══

  { cat:'refining', cl:'c-misc',
    f:'Distillation refining — which metals and principle?',
    fs:'',
    b:'Used for low boiling point metals: Zinc and Mercury\nImpure metal evaporated → collected as pure distillate',
    bs:'',
    n:'' },

  { cat:'refining', cl:'c-misc',
    f:'Liquation refining — which metal and principle?',
    fs:'',
    b:'Used for low melting point metals: Tin (Sn)\nImpure metal made to flow on sloping surface → separates from higher melting impurities',
    bs:'',
    n:'' },

  { cat:'refining', cl:'c-misc',
    f:'Electrolytic refining — principle, setup and example?',
    fs:'',
    b:'Principle: impure metal = anode; pure metal strip = cathode; electrolyte = soluble salt of same metal\nAnode: M → Mⁿ⁺ + ne⁻  (dissolves)\nCathode: Mⁿ⁺ + ne⁻ → M  (pure metal deposits)\nExample: Copper — electrolyte = acidified CuSO₄\nAnode mud (blister copper): Sb, Se, Te, Ag, Au, Pt',
    bs:'More basic metal stays in solution; less basic goes to anode mud',
    n:'Recovery of precious metals from anode mud often pays for the refining cost.' , imp:true },

  { cat:'refining', cl:'c-misc',
    f:'Zone refining — principle, process and metals?',
    fs:'',
    b:'Principle: impurities more soluble in melt than in solid state\nProcess: heater moved along rod → molten zone sweeps impurities to one end → end cut off\nRepeated several times in same direction',
    bs:'Metals: Ge, Si, B, Ga, In (semiconductors requiring very high purity)',
    n:'' , imp:true },

  { cat:'refining', cl:'c-misc',
    f:'Mond process for refining Nickel:\nReactions and temperatures?',
    fs:'Vapour phase refining',
    b:'Ni + 4CO → Ni(CO)₄ (nickel tetracarbonyl)  at 330–350 K\nNi(CO)₄ → Ni + 4CO  at 450–470 K (decomposed to get pure Ni)',
    bs:'CO acts as volatile ligand to carry Ni away from impurities',
    n:'Two requirements for vapour phase refining: (1) metal forms volatile compound; (2) compound easily decomposable.' , imp:true },

  { cat:'refining', cl:'c-misc',
    f:'van Arkel method for refining Zr or Ti:\nReactions?',
    fs:'Vapour phase refining — removes O and N impurities',
    b:'Zr + 2I₂ → ZrI₄  (heated in evacuated vessel with iodine — more covalent, volatilises)\nZrI₄ → Zr + 2I₂  (decomposed on tungsten filament heated to ~1800 K → pure Zr deposits)',
    bs:'Same method works for Ti',
    n:'' , imp:true },

  { cat:'refining', cl:'c-misc',
    f:'Chromatographic refining — when used?',
    fs:'',
    b:'Used when element available in minute quantities and impurities have similar chemical properties\nColumn chromatography: mixture passed through column; components separate based on differential adsorption',
    bs:'',
    n:'' },

  // ══ USES & FACTS ══

  { cat:'uses', cl:'c-acid',
    f:'Uses of Aluminium?',
    fs:'',
    b:'Foil wrappers for food\nFine dust in paints and lacquers\nExtraction of Cr and Mn from oxides (thermite)\nElectrical conductors (wires)\nLight alloys (aircraft, vehicle parts)',
    bs:'',
    n:'' },

  { cat:'uses', cl:'c-acid',
    f:'Uses of Copper?',
    fs:'',
    b:'Electrical wires (best conductor after Ag)\nWater and steam pipes\nAlloys: Brass (Cu+Zn), Bronze (Cu+Sn), Coinage alloy (Cu+Ni)',
    bs:'',
    n:'' },

  { cat:'uses', cl:'c-acid',
    f:'Uses of Zinc?',
    fs:'',
    b:'Galvanising iron (prevents rusting)\nBatteries\nAlloys: Brass (Cu 60%, Zn 40%), German silver (Cu 25-30%, Zn 25-30%, Ni 40-50%)\nZinc dust = reducing agent in dyes, paints',
    bs:'',
    n:'' },

  { cat:'uses', cl:'c-acid',
    f:'Uses of Iron (cast/wrought/steel)?',
    fs:'',
    b:'Cast iron: stoves, railway sleepers, gutter pipes, toys\nWrought iron: anchors, wires, bolts, chains, agricultural implements\nSteel: Nickel steel (cables, auto/aircraft parts, measuring tapes), Chrome steel (cutting tools), Stainless steel (utensils, cycles, pens)',
    bs:'',
    n:'' },

  { cat:'uses', cl:'c-acid',
    f:'India\'s historical contributions to metallurgy — key facts?',
    fs:'',
    b:'Wootz steel (Damascus steel): iron with 1–1.9% C; exported to Europe, China, Arab world\nIron Pillar Delhi (5th CE): no corrosion in 1600 years\nZinc distillation: first country to master it (Zawar mines, 5th–6th BCE)\nCopper metallurgy: Aravalli Hills (Chalcolithic era)\nFirst copper bead: Mehrgarh, Baluchistan, ~6000 BCE',
    bs:'',
    n:'Wootz = English version of "ukku" (Kannada/Telugu word for steel). Michael Faraday tried but failed to duplicate Wootz steel.' },

];
