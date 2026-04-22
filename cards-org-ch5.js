window.DECK_ID = 'org-ch5-biomolecules';

window.LABELS = {
  'carbs-gen': 'Carbohydrates Gen',
  'glucose-proofs': 'Glucose Proofs',
  'cyclic-struc': 'Cyclic & Anomers',
  'disacc-poly': 'Disacc/Polysacc',
  'amino-acids': 'Amino Acids',
  'proteins': 'Proteins & Nucleic'
};

window.CARDS = [
  // ── CARBOHYDRATES GENERAL ──
  { cat:'carbs-gen', cl:'c-org', f:'Definition of Carbohydrates?', fs:'', b:'Optically active polyhydroxy aldehydes or ketones.', bs:'Or compounds which produce such units on hydrolysis.', n:'' },
  { cat:'carbs-gen', cl:'c-org', f:'What are Reducing Sugars?', fs:'', b:'Sugars that reduce Tollen\'s or Fehling\'s reagent.', bs:'Requirement: Free aldehyde, ketone, or hemiacetal group.', n:'All monosaccharides are reducing.' },
  { cat:'carbs-gen', cl:'c-org', f:'D/L Configuration vs d/l (optical rotation)?', fs:'', b:'D/L refers to the orientation of -OH on the lowest chiral carbon.\nd/l (+/-) refers to experimental optical rotation.', bs:'D-Glucose is dextrorotatory (+).', n:'' },

  // ── GLUCOSE STRUCTURE PROOFS ──
  { cat:'glucose-proofs', cl:'c-org', f:'Glucose + HI / Red P (Δ) → ?', fs:'', b:'n-Hexane.', bs:'Proves all 6 carbons are linked in a straight chain.', n:'' },
  { cat:'glucose-proofs', cl:'c-org', f:'Glucose + NH₂OH → ?  OR  Glucose + HCN → ?', fs:'', b:'Glucose Oxime  OR  Glucose Cyanohydrin.', bs:'Proves the presence of a Carbonyl group (>C=O).', n:'' },
  { cat:'glucose-proofs', cl:'c-org', f:'Glucose + Br₂ / H₂O → ?', fs:'Mild Oxidation', b:'Gluconic Acid.', bs:'Proves the carbonyl group is an Aldehyde.', n:'' },
  { cat:'glucose-proofs', cl:'c-org', f:'Glucose + Acetic Anhydride → ?', fs:'', b:'Glucose Pentaacetate.', bs:'Proves the presence of 5 -OH groups.', n:'' },
  { cat:'glucose-proofs', cl:'c-org', f:'Glucose + conc. HNO₃ → ?', fs:'Strong Oxidation', b:'Saccharic Acid (Glucaric Acid).', bs:'Proves the presence of a primary alcohol group.', n:'' },
  { cat:'glucose-proofs', cl:'c-org', f:'Glucose + 3 Ph-NH-NH₂ → ?', fs:'', b:'Glucosazone + Aniline + NH₃ + H₂O.', bs:'Involves C1 and C2.', n:'🎯 PYQ: Glucose, Fructose, and Mannose give the same osazone.' },

  // ── CYCLIC STRUCTURE & ANOMERS ──
  { cat:'cyclic-struc', cl:'c-org', f:'What are Anomers?', fs:'', b:'Diastereomers that differ in configuration only at C1 (Anomeric Carbon).', bs:'e.g., α-D-Glucose and β-D-Glucose.', n:'' },
  { cat:'cyclic-struc', cl:'c-org', f:'What is Mutarotation?', fs:'', b:'Change in specific rotation of an optically active compound to an equilibrium value.', bs:'α (111°) and β (19.2°) settle at 52.5°.', n:'Proves cyclic hemiacetal structure.' },
  { cat:'cyclic-struc', cl:'c-org', f:'Evidence that Glucose isn\'t strictly open-chain?', fs:'', b:'1. Does not give Schiff\'s test. 2. Does not form NaHSO₃ adduct. 3. Pentaacetate doesn\'t react with NH₂OH.', bs:'', n:'' },
  { cat:'cyclic-struc', cl:'c-org', f:'Pyranose vs Furanose?', fs:'', b:'Pyranose: 6-membered ring (5C + 1O).\nFuranose: 5-membered ring (4C + 1O).', bs:'Glucose is Pyranose; Fructose is Furanose.', n:'' },

  // ── DISACCHARIDES & POLYSACCHARIDES ──
  { cat:'disacc-poly', cl:'c-org', f:'Sucrose: Monomers & Linkage?', fs:'', b:'α-D-Glucose (C1) and β-D-Fructose (C2).', bs:'NON-REDUCING Sugar.', n:'🎯 PYQ: Known as Invert Sugar because rotation changes from + to - on hydrolysis.' },
  { cat:'disacc-poly', cl:'c-org', f:'Maltose: Monomers & Linkage?', fs:'', b:'α-D-Glucose (C1) and α-D-Glucose (C4).', bs:'REDUCING Sugar.', n:'' },
  { cat:'disacc-poly', cl:'c-org', f:'Lactose: Monomers & Linkage?', fs:'', b:'β-D-Galactose (C1) and β-D-Glucose (C4).', bs:'REDUCING Sugar.', n:'' },
  { cat:'disacc-poly', cl:'c-org', f:'Starch: Amylose vs Amylopectin?', fs:'', b:'Amylose: Linear, C1-C4 α-linkage, Water soluble.\nAmylopectin: Branched, C1-C4 and C1-C6 α-linkages, Water insoluble.', bs:'', n:'' },
  { cat:'disacc-poly', cl:'c-org', f:'Cellulose: Monomer & Linkage?', fs:'', b:'β-D-Glucose units linked by C1-C4 β-glycosidic bond.', bs:'Straight chain polysaccharide.', n:'' },
  { cat:'disacc-poly', cl:'c-org', f:'Glycogen structure?', fs:'', b:'Highly branched (similar to Amylopectin).', bs:'Animal starch stored in liver and muscles.', n:'' },

  // ── AMINO ACIDS ──
  { cat:'amino-acids', cl:'c-org', f:'What is a Zwitterion?', fs:'', b:'Dipolar ion formed by transfer of proton from -COOH to -NH₂.', bs:'Neutral but contains both + and - charges.', n:'' },
  { cat:'amino-acids', cl:'c-org', f:'Isoelectric Point (pI)?', fs:'', b:'The pH at which the amino acid has no net charge and doesn\'t migrate in an electric field.', bs:'', n:'' },
  { cat:'amino-acids', cl:'c-org', f:'Classification of Amino Acids?', fs:'', b:'Acidic (Asp, Glu), Basic (Lys, Arg, His), Neutral (Gly, Ala, etc.).', bs:'', n:'' },
  { cat:'amino-acids', cl:'c-org', f:'Essential Amino Acids Mnemonic?', fs:'', b:'PVT TIM HALL', bs:'Phe, Val, Thr, Trp, Ile, Met, His, Arg, Leu, Lys.', n:'' },
  { cat:'amino-acids', cl:'c-org', f:'Only Optically Inactive amino acid?', fs:'', b:'Glycine (H₂N-CH₂-COOH).', bs:'Because α-carbon is not chiral.', n:'' },

  // ── PROTEINS & NUCLEIC ACIDS ──
  { cat:'proteins', cl:'c-org', f:'Peptide Bond structure?', fs:'', b:'-CO-NH- (Amide linkage).', bs:'Formed by condensation of amino acids.', n:'' },
  { cat:'proteins', cl:'c-org', f:'Primary structure vs Secondary structure?', fs:'', b:'1°: Sequence of amino acids.\n2°: α-helix or β-pleated sheets (H-bonding).', bs:'', n:'' },
  { cat:'proteins', cl:'c-org', f:'Denaturation of Proteins?', fs:'', b:'Loss of 2°, 3°, and 4° structure due to heat/pH change.', bs:'1° structure remains intact.', n:'🎯 PYQ: e.g., Coagulation of egg white.' },
  { cat:'proteins', cl:'c-org', f:'Nucleoside vs Nucleotide?', fs:'', b:'Nucleoside: Base + Sugar.\nNucleotide: Base + Sugar + Phosphate.', bs:'', n:'' },
  { cat:'proteins', cl:'c-org', f:'DNA Bases vs RNA Bases?', fs:'', b:'DNA: A, G, C, T.\nRNA: A, G, C, U.', bs:'Thymine (T) is replaced by Uracil (U).', n:'' }
];