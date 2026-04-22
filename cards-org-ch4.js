window.DECK_ID = 'org-ch4-amines';

window.LABELS = {
  'prep-named': 'Named Prep Rxns',
  'basic-strength': 'Basic Strength',
  'rxn-aliphatic': 'Aliphatic Reactions',
  'rxn-aromatic': 'Aromatic Reactions',
  'diazonium-prep': 'Diazonium: Formation',
  'diazonium-rxn': 'Diazonium: Reactions',
  'nitro-comp': 'Nitro Compounds'
};

window.CARDS = [
  // ── PREPARATION REACTIONS ──
  { cat:'prep-named', cl:'c-org', f:'R-CONH₂ + Br₂ + NaOH (or NaOBr) → ?', fs:'Hoffmann Bromamide Degradation', b:'R-NH₂ (1° Amine) + Na₂CO₃ + NaBr.', bs:'Intermediate: Isocyanate (R-N=C=O).', n:'🎯 PYQ: Migrating group (R) retains configuration. Carbon chain shortens by 1.' },
  { cat:'prep-named', cl:'c-org', f:'Phthalimide + KOH → Alkyl Halide → Hydrolysis → ?', fs:'Gabriel Phthalimide Synthesis', b:'1° Aliphatic Amine + Phthalic Acid.', bs:'N-alkylphthalimide is the intermediate.', n:'Cannot prepare Aniline (Aryl halides don\'t undergo SN2 with phthalimide anion).' },
  { cat:'prep-named', cl:'c-org', f:'R-CN + (i) LiAlH₄ or (ii) Na/EtOH → ?', fs:'Mendius Reaction', b:'R-CH₂NH₂.', bs:'Reduction of Nitriles.', n:'' },
  { cat:'prep-named', cl:'c-org', f:'R-CONH₂ + LiAlH₄ → ?', fs:'Amide Reduction', b:'R-CH₂NH₂.', bs:'Unlike Hoffmann, the number of carbons remains the same.', n:'' },
  { cat:'prep-named', cl:'c-org', f:'Ar-NO₂ + Sn/HCl or Fe/HCl → ?', fs:'Nitro Reduction', b:'Ar-NH₂ (Aniline).', bs:'Fe/HCl is preferred because FeCl₂ formed gets hydrolyzed to release HCl.', n:'' },
  { cat:'prep-named', cl:'c-org', f:'R-N₃ (Alkyl Azide) + LiAlH₄ → ?', fs:'', b:'R-NH₂.', bs:'Evolution of N₂ gas.', n:'' },
  { cat:'prep-named', cl:'c-org', f:'R-X + NH₃ (excess) → ? vs R-X (excess) + NH₃ → ?', fs:'Ammonolysis', b:'NH₃ excess → 1° Amine.\nR-X excess → Quaternary Ammonium Salt [R₄N⁺]X⁻.', bs:'Nucleophilic Substitution (SN2).', n:'' },

  // ── BASIC STRENGTH ──
  { cat:'basic-strength', cl:'c-org', f:'Order of Basicity: NH₃, CH₃NH₂, (CH₃)₂NH, (CH₃)₃N in AQUEOUS (Methyl)?', fs:'', b:'2° > 1° > 3° > NH₃', bs:'(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃', n:'🎯 PYQ: Due to Inductive, Solvation (hydration), and Steric effects.' },
  { cat:'basic-strength', cl:'c-org', f:'Order of Basicity: NH₃, EtNH₂, Et₂NH, Et₃N in AQUEOUS (Ethyl)?', fs:'', b:'2° > 3° > 1° > NH₃', bs:'Et₂NH > Et₃N > EtNH₂ > NH₃', n:'Ethyl groups are bulkier; steric effects push 3° higher than in methyl.' },
  { cat:'basic-strength', cl:'c-org', f:'Order of Basicity in GASEOUS Phase?', fs:'', b:'3° > 2° > 1° > NH₃', bs:'Only +I effect matters here.', n:'' },
  { cat:'basic-strength', cl:'c-org', f:'Why is Aniline less basic than Ammonia/Aliphatic amines?', fs:'', b:'Lone pair of Nitrogen is in resonance with the benzene ring.', bs:'Hybridization: N in Aniline is sp² hybridized (more electronegative).', n:'' },
  { cat:'basic-strength', cl:'c-org', f:'Effect of substituents on Aniline Basicity?', fs:'', b:'EDG (+I, +M) increases basicity.\nEWG (-I, -M) decreases basicity.', bs:'', n:'🎯 PYQ: Ortho-substituted anilines are almost always WEAKER bases than aniline (Ortho Effect in Amines).' },
  { cat:'basic-strength', cl:'c-org', f:'Basicity: Pyridine vs Pyrrole vs Piperidine?', fs:'', b:'Piperidine > Pyridine > Pyrrole', bs:'Pyrrole: LP is part of aromatic sextet.\nPyridine: LP is in sp² orbital (localised).\nPiperidine: LP is in sp³ (most available).', n:'' },

  // ── ALIPHATIC REACTIONS ──
  { cat:'rxn-aliphatic', cl:'c-org', f:'R-NH₂ + CHCl₃ + alc. KOH → ?', fs:'Carbylamine Reaction', b:'R-NC (Isocyanide) + 3KCl + 3H₂O.', bs:'Foul/offensive smelling liquid.', n:'Only 1° amines (Aliphatic/Aromatic) give this test.' },
  { cat:'rxn-aliphatic', cl:'c-org', f:'Hinsberg Reagent and its test results?', fs:'Ph-SO₂Cl', b:'1°: Soluble in KOH.\n2°: Insoluble in KOH.\n3°: No reaction.', bs:'1° forms N-alkylbenzene sulphonamide (acidic H on N).\n2° forms N,N-dialkyl... (no H on N).', n:'' },
  { cat:'rxn-aliphatic', cl:'c-org', f:'R-NH₂ + NaNO₂ + HCl (0-5°C) → ?', fs:'Nitrous Acid reaction', b:'R-OH + N₂↑ + H₂O.', bs:'Intermediate alkyl diazonium is highly unstable and breaks to carbocation.', n:'Used to distinguish 1° aliphatic amines (evolution of bubbles).' },
  { cat:'rxn-aliphatic', cl:'c-org', f:'2° Amine + NaNO₂ + HCl → ?', fs:'', b:'N-Nitrosoamine (Yellow oily layer).', bs:'Libermann\'s Nitroso Test.', n:'' },
  { cat:'rxn-aliphatic', cl:'c-org', f:'1° Amine + CS₂ + HgCl₂ (Δ) → ?', fs:'Hoffmann\'s Mustard Oil Rxn', b:'R-N=C=S (Alkyl Isothiocyanate) + HgS + 2HCl.', bs:'Smell of mustard oil.', n:'' },

  // ── AROMATIC REACTIONS (ANILINE) ──
  { cat:'rxn-aromatic', cl:'c-org', f:'Aniline + Br₂/H₂O → ?', fs:'Bromination', b:'2,4,6-Tribromoaniline (White ppt).', bs:'-NH₂ is highly activating.', n:'To get monobromo, protect -NH₂ by acetylation with (CH₃CO)₂O.' },
  { cat:'rxn-aromatic', cl:'c-org', f:'Aniline + conc. HNO₃ / conc. H₂SO₄ → ?', fs:'Nitration', b:'o-nitro (2%), p-nitro (51%), and m-nitro (47%).', bs:'Surprisingly high Meta product!', n:'🎯 PYQ: Due to formation of Anilinium ion (deactivating/meta-directing) in strongly acidic medium.' },
  { cat:'rxn-aromatic', cl:'c-org', f:'Aniline + conc. H₂SO₄ (180°C) → ?', fs:'Sulphonation', b:'Sulphanilic Acid (p-aminobenzene sulphonic acid).', bs:'Exists as a Zwitterion.', n:'' },
  { cat:'rxn-aromatic', cl:'c-org', f:'Why doesn\'t Aniline undergo Friedel-Crafts Rxn?', fs:'', b:'Aniline (base) reacts with AlCl₃ (Lewis acid) to form a salt.', bs:'The salt [Ph-NH₂-AlCl₃]⁺ is highly deactivating for the ring.', n:'' },

  // ── DIAZONIUM SALTS: FORMATION ──
  { cat:'diazonium-prep', cl:'c-org', f:'Aniline + NaNO₂ + HCl (0-5°C) → ?', fs:'Diazotization', b:'Benzene Diazonium Chloride [Ph-N₂⁺]Cl⁻.', bs:'Temperature must be 0-5°C; otherwise it decomposes to Phenol.', n:'' },
  { cat:'diazonium-prep', cl:'c-org', f:'Why is Aryl diazonium more stable than Alkyl diazonium?', fs:'', b:'Due to resonance of the diazonium group with the benzene ring.', bs:'', n:'' },

  // ── DIAZONIUM SALTS: REACTIONS ──
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + CuCl/HCl → ? vs Cu/HCl → ?', fs:'Sandmeyer vs Gattermann', b:'Both give Chlorobenzene (Ph-Cl).', bs:'Sandmeyer (CuX) generally gives better yields than Gattermann (Cu powder).', n:'' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + KI → ?', fs:'', b:'Iodobenzene (Ph-I).', bs:'Does not require Cu catalyst; simple warming is enough.', n:'' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + (i) HBF₄ (ii) Δ → ?', fs:'Schiemann Reaction', b:'Fluorobenzene (Ph-F).', bs:'Intermediate is Ph-N₂⁺BF₄⁻ (stable).', n:'If heated with NaNO₂/Cu, it gives Nitrobenzene.' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + H₂O (warm) → ?', fs:'Hydrolysis', b:'Phenol (Ph-OH) + N₂ + HCl.', bs:'', n:'' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + H₃PO₂/H₂O or EtOH → ?', fs:'Deamination', b:'Benzene (Ph-H).', bs:'H₃PO₂ is oxidized to H₃PO₃. EtOH is oxidized to CH₃CHO.', n:'' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + Phenol (basic medium, pH 9-10) → ?', fs:'Coupling Reaction', b:'p-hydroxyazobenzene (ORANGE DYE).', bs:'Electrophilic Substitution on phenol.', n:'' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + Aniline (acidic medium, pH 4-5) → ?', fs:'Coupling Reaction', b:'p-aminoazobenzene (YELLOW DYE).', bs:'', n:'' },
  { cat:'diazonium-rxn', cl:'c-org', f:'Ph-N₂⁺Cl⁻ + β-Naphthol → ?', fs:'', b:'Scarlet Red Dye.', bs:'Used as a test for 1° aromatic amines.', n:'' },

  // ── NITRO COMPOUNDS ──
  { cat:'nitro-comp', cl:'c-org', f:'R-X + AgNO₂ → ? vs R-X + NaNO₂ → ?', fs:'Ambident Nucleophile', b:'AgNO₂ → R-NO₂ (Nitroalkane).\nNaNO₂ → R-O-N=O (Alkyl Nitrite).', bs:'Ag-N bond is covalent; Na-O bond is ionic.', n:'🎯 PYQ: Same logic applies to KCN (R-CN) vs AgCN (R-NC).' },
  { cat:'nitro-comp', cl:'c-org', f:'Nitroethane + LiAlH₄ → ?', fs:'', b:'Ethylamine (C₂H₅NH₂).', bs:'Reduction of -NO₂ to -NH₂.', n:'' },
  { cat:'nitro-comp', cl:'c-org', f:'Nitrobenzene + Zn/NH₄Cl → ?', fs:'Neutral medium reduction', b:'Phenylhydroxylamine (Ph-NHOH).', bs:'Further reaction with Tollen\'s reagent gives Nitrosobenzene.', n:'🎯 PYQ: Mulliken-Barker Test.' },
  { cat:'nitro-comp', cl:'c-org', f:'Nitrobenzene + Zn/NaOH → ?', fs:'Basic medium reduction', b:'Azobenzene / Hydrazobenzene.', bs:'Via Nitrosobenzene and Phenylhydroxylamine intermediates.', n:'' }
];