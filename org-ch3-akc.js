window.DECK_ID = 'org-ch3-akc';

window.LABELS = {
  'prep-gen': 'Gen. Preparation',
  'prep-name': 'Named Prep Rxns',
  'nuc-add': 'Nucleophilic Addition',
  'ammonia': 'Ammonia Derivatives',
  'red-ox': 'Reduction & Oxidation',
  'aldol-can': 'Aldol & Cannizzaro',
  'acids-prep': 'Acids: Prep & Acidity',
  'acids-rxn': 'Acids: Reactions'
};

window.CARDS = [
  // ── GENERAL PREPARATION ──
  { cat:'prep-gen', cl:'c-org', f:'Alkene + (i) O₃ (ii) Zn/H₂O → ? vs (ii) H₂O₂ → ?', fs:'Ozonolysis', b:'Zn/H₂O (Reductive) → Aldehydes/Ketones.\nH₂O₂ (Oxidative) → Carboxylic Acids/Ketones.', bs:'Aldehydes oxidize to acids in oxidative ozonolysis.', n:'' },
  { cat:'prep-gen', cl:'c-org', f:'Alkyne + HgSO₄/H₂SO₄ (Δ) → ?', fs:'Kucherov Reaction', b:'Enol → (tautomerizes) → Aldehyde or Ketone.', bs:'Markovnikov addition of H₂O.', n:'🎯 PYQ: Acetylene gives Acetaldehyde. All other alkynes give Ketones.' },
  { cat:'prep-gen', cl:'c-org', f:'Alkyne + (i) B₂H₆/THF (ii) H₂O₂/OH⁻ → ?', fs:'Hydroboration-Oxidation', b:'Aldehyde (from terminal alkyne) or Ketone (from internal).', bs:'Anti-Markovnikov addition of H₂O.', n:'' },
  { cat:'prep-gen', cl:'c-org', f:'Alkene + PdCl₂ + CuCl₂ + O₂ / H₂O → ?', fs:'Wacker Process', b:'Aldehyde or Ketone.', bs:'Ethene gives Acetaldehyde. Other alkenes give Ketones.', n:'' },
  { cat:'prep-gen', cl:'c-org', f:'Hydrolysis of Geminal Dihalides (R-CHX₂ vs R-CX₂-R) → ?', fs:'Aq. KOH / Δ', b:'Terminal (R-CHX₂) → Aldehyde.\nNon-terminal (R-CX₂-R) → Ketone.', bs:'Forms an unstable gem-diol which loses H₂O.', n:'' },
  { cat:'prep-gen', cl:'c-org', f:'1° Alcohol + Cu/300°C → ? vs 2° Alcohol → ?', fs:'Catalytic Dehydrogenation', b:'1° → Aldehyde + H₂.\n2° → Ketone + H₂.', bs:'3° Alcohols undergo dehydration to give Alkenes.', n:'' },
  { cat:'prep-gen', cl:'c-org', f:'1° Alcohol + PCC or PDC or Collins Reagent → ?', fs:'Controlled Oxidation', b:'Aldehyde.', bs:'Stops at aldehyde stage. Does not over-oxidize to acid.', n:'Does not affect C=C double bonds.' },
  { cat:'prep-gen', cl:'c-org', f:'Allylic/Benzylic Alcohol + MnO₂ → ?', fs:'Selective Oxidation', b:'Allylic/Benzylic Aldehyde or Ketone.', bs:'MnO₂ specifically oxidizes only allylic and benzylic -OH groups.', n:'' },
  { cat:'prep-gen', cl:'c-org', f:'2° Alcohol + Aluminum isopropoxide + Acetone → ?', fs:'Oppenauer Oxidation', b:'Ketone + Isopropyl alcohol.', bs:'Reverse of MPV reduction.', n:'Does not affect C=C double bonds.' },

  // ── NAMED PREPARATION REACTIONS ──
  { cat:'prep-name', cl:'c-org', f:'R-COCl + H₂ / Pd-BaSO₄ (in boiling xylene) → ?', fs:'Rosenmund Reduction', b:'R-CHO + HCl.', bs:'BaSO₄ & Sulphur/Quinoline act as poison to stop reduction at aldehyde.', n:'🎯 PYQ: HCHO cannot be prepared this way because Formyl Chloride (HCOCl) is unstable.' },
  { cat:'prep-name', cl:'c-org', f:'R-C≡N + SnCl₂/HCl followed by H₃O⁺ → ?', fs:'Stephen Reduction', b:'R-CHO.', bs:'Intermediate is an Aldimine (R-CH=NH·HCl).', n:'Only makes aldehydes.' },
  { cat:'prep-name', cl:'c-org', f:'Nitriles/Esters + DIBAL-H (-78°C) → H₃O⁺ → ?', fs:'Diisobutylaluminium hydride', b:'R-CHO.', bs:'Selective reduction at low temp.', n:'Does not reduce isolated C=C or C≡C bonds.' },
  { cat:'prep-name', cl:'c-org', f:'Toluene + CrO₂Cl₂ / CS₂ → H₃O⁺ → ?', fs:'Etard Reaction', b:'Benzaldehyde.', bs:'Intermediate is a brown Chromium complex.', n:'Using CrO₃ + Ac₂O also gives Benzaldehyde via a gem-diacetate intermediate.' },
  { cat:'prep-name', cl:'c-org', f:'Benzene + CO + HCl (anhyd. AlCl₃/CuCl) → ?', fs:'Gattermann-Koch Reaction', b:'Benzaldehyde.', bs:'Electrophile is Formyl cation [HC=O]⁺.', n:'' },
  { cat:'prep-name', cl:'c-org', f:'Dry distillation of Calcium Acetate (CH₃COO)₂Ca + Δ → ?', fs:'', b:'Acetone (CH₃COCH₃) + CaCO₃.', bs:'Calcium Formate alone gives HCHO. A mixture gives Acetaldehyde.', n:'' },
  { cat:'prep-name', cl:'c-org', f:'R-COOH vapors + MnO / 300°C → ?', fs:'', b:'Ketone + CO₂ + H₂O.', bs:'Formic acid vapors give HCHO. Mixture gives Aldehydes.', n:'' },

  // ── NUCLEOPHILIC ADDITION ──
  { cat:'nuc-add', cl:'c-org', f:'Reactivity order of carbonyls towards Nuc. Addition?', fs:'Electronic & Steric factors', b:'HCHO > RCHO > R₂CO > Ar-CHO > Ar-CO-R', bs:'Reactivity is directly proportional to positive charge on carbonyl carbon.', n:'🎯 PYQ: EWG (-NO₂) increases reactivity, EDG (-OMe) decreases it.' },
  { cat:'nuc-add', cl:'c-org', f:'Carbonyl + HCN (OH⁻ catalyst) → ?', fs:'', b:'Cyanohydrin (R-C(OH)(CN)-R\').', bs:'Base (OH⁻) is needed to generate the CN⁻ nucleophile (RDS).', n:'Step-up reaction (increases carbon chain by 1).' },
  { cat:'nuc-add', cl:'c-org', f:'Carbonyl + NaHSO₃ → ?', fs:'Sodium bisulphite', b:'White crystalline bisulphite adduct.', bs:'Used for separation and purification of carbonyls.', n:'Bulky ketones (Acetophenone, Benzophenone) do NOT react due to steric hindrance.' },
  { cat:'nuc-add', cl:'c-org', f:'Aldehyde + 2 ROH (dry HCl gas) → ?', fs:'', b:'Acetal [R-CH(OR)₂].', bs:'Dry HCl removes water to push equilibrium forward.', n:'Hemiacetal is the unstable intermediate. Ketones form Ketals with ethylene glycol.' },
  { cat:'nuc-add', cl:'c-org', f:'Grignard (RMgX) + HCHO → ? vs RCHO → ? vs R₂CO → ?', fs:'Followed by H₃O⁺', b:'HCHO → 1° Alcohol.\nRCHO → 2° Alcohol.\nR₂CO → 3° Alcohol.', bs:'', n:'' },

  // ── AMMONIA DERIVATIVES (pH 3.5 - 4.5) ──
  { cat:'ammonia', cl:'c-org', f:'Why is pH 3.5-4.5 strictly maintained for Ammonia derivatives?', fs:'', b:'If too acidic: Ammonia derivative is protonated (loses nucleophilicity).\nIf too basic: Carbonyl oxygen isn\'t protonated (lowers electrophilicity).', bs:'', n:'' },
  { cat:'ammonia', cl:'c-org', f:'Carbonyl + 1° Amine (R-NH₂) → ?', fs:'', b:'Schiff\'s Base (Imine: >C=N-R).', bs:'', n:'' },
  { cat:'ammonia', cl:'c-org', f:'Carbonyl + Hydroxylamine (NH₂OH) → ?', fs:'', b:'Oxime (>C=N-OH).', bs:'Can show geometrical isomerism (syn/anti).', n:'' },
  { cat:'ammonia', cl:'c-org', f:'Carbonyl + Hydrazine (NH₂NH₂) → ?', fs:'', b:'Hydrazone (>C=N-NH₂).', bs:'', n:'' },
  { cat:'ammonia', cl:'c-org', f:'Carbonyl + 2,4-DNP → ?', fs:'Brady\'s Reagent', b:'2,4-Dinitrophenylhydrazone.', bs:'Yellow/Orange/Red precipitate.', n:'🎯 PYQ: Used as a test for Carbonyl group. Glucose does NOT give this test.' },
  { cat:'ammonia', cl:'c-org', f:'Carbonyl + Semicarbazide (NH₂-NH-CO-NH₂) → ?', fs:'Which nitrogen attacks?', b:'Semicarbazone.', bs:'Only the terminal -NH₂ (far from C=O) is nucleophilic.', n:'The -NH₂ adjacent to C=O is involved in resonance and lacks lone pair availability.' },

  // ── REDUCTION & OXIDATION ──
  { cat:'red-ox', cl:'c-org', f:'Carbonyl + Zn-Hg / conc. HCl (Δ) → ?', fs:'Clemmensen Reduction', b:'Alkane (-CH₂-).', bs:'Acidic medium reduction.', n:'Avoid if acid-sensitive groups (like -OH, acetals) are present.' },
  { cat:'red-ox', cl:'c-org', f:'Carbonyl + NH₂NH₂ / KOH / Ethylene Glycol (Δ) → ?', fs:'Wolff-Kishner Reduction', b:'Alkane (-CH₂-).', bs:'Basic medium reduction.', n:'Avoid if base-sensitive groups (like halogens) are present.' },
  { cat:'red-ox', cl:'c-org', f:'Carbonyl + Red P / HI (420 K) → ?', fs:'', b:'Alkane.', bs:'Strongest reducing agent; reduces almost all functional groups to alkanes.', n:'' },
  { cat:'red-ox', cl:'c-org', f:'Tollen\'s Test Reagent & Result?', fs:'Ammoniacal AgNO₃', b:'Aldehydes → Carboxylate ion + Silver Mirror (Ag↓).', bs:'Ketones do NOT react.', n:'Formic acid (HCOOH) and terminal alkynes also give this test.' },
  { cat:'red-ox', cl:'c-org', f:'Fehling\'s Test Reagents & Result?', fs:'CuSO₄ + Rochelle salt (NaOH)', b:'Aliphatic Aldehydes → Red/Brown ppt (Cu₂O).', bs:'Aromatic aldehydes (Benzaldehyde) and Ketones do NOT react.', n:'' },
  { cat:'red-ox', cl:'c-org', f:'Schiff\'s Reagent Test?', fs:'Magenta dye decolorized by SO₂', b:'Aldehydes restore the pink/magenta color.', bs:'Ketones do not respond.', n:'' },
  { cat:'red-ox', cl:'c-org', f:'Haloform Reaction: Reagents & Requirement?', fs:'X₂ + NaOH (or NaOX)', b:'Methyl Ketones (CH₃-CO-) → Haloform (CHX₃) + R-COO⁻.', bs:'Iodoform (CHI₃) is a yellow ppt.', n:'🎯 PYQ: Ethanol, Isopropanol, and Acetaldehyde also give this test. Active methylene groups do not.' },
  { cat:'red-ox', cl:'c-org', f:'Ketone + Peroxy acid (R-CO₃H or mCPBA) → ?', fs:'Baeyer-Villiger Oxidation', b:'Ester.', bs:'Oxygen inserts next to the carbonyl carbon.', n:'Migration aptitude: 3° > 2° > 1° > Methyl.' },
  { cat:'red-ox', cl:'c-org', f:'Carbonyl + SeO₂ (Δ) → ?', fs:'Riley Oxidation', b:'Oxidizes the active α-CH₂ to a Carbonyl (>C=O).', bs:'Converts adjacent CH₂ to C=O (forming 1,2-dicarbonyls).', n:'' },

  // ── ALDOL & CANNIZZARO ──
  { cat:'aldol-can', cl:'c-org', f:'Aldol Condensation: Reagents & Requirement?', fs:'', b:'Dilute Base (NaOH/Ba(OH)₂). Requires at least one α-Hydrogen.', bs:'Produces β-hydroxy aldehyde/ketone (Aldol).', n:'' },
  { cat:'aldol-can', cl:'c-org', f:'Aldol Product + Heat (Δ) → ?', fs:'', b:'α,β-unsaturated carbonyl + H₂O.', bs:'Dehydration occurs easily due to conjugation in the product.', n:'' },
  { cat:'aldol-can', cl:'c-org', f:'Cannizzaro Reaction: Reagents & Requirement?', fs:'', b:'Conc. Base (50% NaOH/KOH). Requires ZERO α-Hydrogens.', bs:'Produces Alcohol (reduced) + Carboxylic acid salt (oxidized).', n:'Disproportionation (Redox) reaction.' },
  { cat:'aldol-can', cl:'c-org', f:'Cross-Cannizzaro: HCHO + Ph-CHO + conc. NaOH → ?', fs:'', b:'HCOONa + Ph-CH₂OH.', bs:'The more reactive aldehyde (HCHO) gets oxidized to acid salt.', n:'Ph-CHO gets reduced to benzyl alcohol.' },
  { cat:'aldol-can', cl:'c-org', f:'What is the Rate Determining Step (RDS) of Cannizzaro?', fs:'', b:'Hydride ion (H⁻) transfer.', bs:'From the di-anion/mono-anion intermediate to the second carbonyl molecule.', n:'🎯 PYQ heavily tested concept.' },

  // ── CARBOXYLIC ACIDS: PREP & ACIDITY ──
  { cat:'acids-prep', cl:'c-org', f:'Acid Strength Order: EWG vs EDG?', fs:'', b:'EWG (-I, -M) increases acidity. EDG (+I, +M) decreases it.', bs:'CF₃COOH > CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > CH₃COOH', n:'Anion stability drives acidity.' },
  { cat:'acids-prep', cl:'c-org', f:'What is the Ortho Effect in Benzoic Acids?', fs:'', b:'Any ortho-substituted benzoic acid is STRONGER than its meta, para, and unsubstituted isomers.', bs:'Regardless of whether the group is EWG or EDG.', n:'Due to steric inhibition of resonance (SIR effect).' },
  { cat:'acids-prep', cl:'c-org', f:'Grignard (RMgX) + CO₂ (Dry Ice) → H₃O⁺ → ?', fs:'', b:'R-COOH.', bs:'Increases carbon chain by 1.', n:'' },
  { cat:'acids-prep', cl:'c-org', f:'Alkyl Benzene + KMnO₄/KOH (Δ) → H₃O⁺ → ?', fs:'Side-chain oxidation', b:'Benzoic Acid.', bs:'Requires at least one benzylic hydrogen.', n:'Toluene, Ethylbenzene, Isopropylbenzene all give Benzoic acid. t-Butylbenzene gives NO reaction.' },
  { cat:'acids-prep', cl:'c-org', f:'R-C≡N + H₃O⁺ (Δ) → ?', fs:'Complete Hydrolysis', b:'R-COOH + NH₄⁺.', bs:'Partial hydrolysis (conc. HCl or H₂O₂/OH⁻) stops at Amide (R-CONH₂).', n:'' },

  // ── CARBOXYLIC ACIDS: REACTIONS ──
  { cat:'acids-rxn', cl:'c-org', f:'R-COOH + NaHCO₃ → ?', fs:'Bicarbonate Test', b:'R-COONa + H₂O + CO₂↑ (Brisk Effervescence).', bs:'Confirms presence of Carboxylic Acid.', n:'🎯 PYQ: Phenol does NOT give this test (but Picric acid does).' },
  { cat:'acids-rxn', cl:'c-org', f:'R-COOH + R\'-OH + conc. H₂SO₄ (Δ) → ?', fs:'Esterification', b:'R-COOR\' (Ester) + H₂O.', bs:'Reversible. C-O bond of ACID breaks; O-H bond of ALCOHOL breaks.', n:'Reactivity: CH₃OH > 1° > 2° > 3°.' },
  { cat:'acids-rxn', cl:'c-org', f:'R-COOH + SOCl₂ → ?', fs:'', b:'R-COCl + SO₂↑ + HCl↑', bs:'Best method to make acid chlorides because byproducts are gases.', n:'PCl₃ gives H₃PO₃; PCl₅ gives POCl₃ + HCl.' },
  { cat:'acids-rxn', cl:'c-org', f:'R-COOH + NH₃ → (Δ) → ?', fs:'', b:'R-CONH₂ (Amide) + H₂O.', bs:'Intermediate is Ammonium carboxylate (R-COONH₄).', n:'Heating strongly with P₂O₅ dehydrates amide to Nitrile (R-C≡N).' },
  { cat:'acids-rxn', cl:'c-org', f:'R-COOH + LiAlH₄ or B₂H₆ → ?', fs:'Reduction', b:'R-CH₂OH (1° Alcohol).', bs:'B₂H₆ is highly selective for carboxylic acids.', n:'NaBH₄ does NOT reduce carboxylic acids.' },
  { cat:'acids-rxn', cl:'c-org', f:'R-COONa + Soda Lime (Δ) → ?', fs:'Decarboxylation', b:'R-H (Alkane) + Na₂CO₃.', bs:'Soda Lime = NaOH + CaO (3:1). CaO keeps NaOH dry.', n:'Step-down reaction (loses one carbon). Carbanion is the intermediate.' },
  { cat:'acids-rxn', cl:'c-org', f:'Aq. R-COOK (Electrolysis) → ?', fs:'Kolbe Electrolysis', b:'R-R (Alkane) + CO₂ at Anode.\nH₂ + KOH at Cathode.', bs:'Free radical mechanism.', n:'Cannot be used to prepare Methane.' },
  { cat:'acids-rxn', cl:'c-org', f:'R-CH₂-COOH + (X₂ + Red P) → H₂O → ?', fs:'Hell-Volhard-Zelinsky (HVZ)', b:'α-halo carboxylic acid.', bs:'Halogenation occurs strictly at the α-carbon.', n:'Formic acid does not give this reaction (no α-carbon).' },
  { cat:'acids-rxn', cl:'c-org', f:'R-COOAg + Br₂ / CCl₄ (Δ) → ?', fs:'Hunsdiecker Reaction', b:'R-Br + AgBr↓ + CO₂↑', bs:'Free radical mechanism.', n:'Yield: 1° > 2° > 3° halides. With I₂, it forms an ester (Birnbaum-Simonini reaction).' },
  { cat:'acids-rxn', cl:'c-org', f:'Benzoic Acid + conc. HNO₃ / conc. H₂SO₄ → ?', fs:'Electrophilic Aromatic Substitution', b:'m-Nitrobenzoic acid.', bs:'-COOH is moderately deactivating and meta-directing.', n:'Benzoic acid does NOT undergo Friedel-Crafts reactions (AlCl₃ catalyst complexes with -COOH).' }
];