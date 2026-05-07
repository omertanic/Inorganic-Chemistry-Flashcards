window.LABELS = {
  'phenol':    'Phenols',
  'eas':       'EAS of Benzene',
  'directing': 'Directing Groups',
  'aniline':   'Aniline',
  'diazonium': 'Diazonium Salts',
  'nitrobenz': 'Nitrobenzene',
};

window.FILTER_GROUPS = [
  { label: 'Phenols',    cats: ['phenol'] },
  { label: 'EAS',        cats: ['eas', 'directing'] },
  { label: 'Aniline',    cats: ['aniline'] },
  { label: 'Diazonium',  cats: ['diazonium'] },
  { label: 'Nitrobenz',  cats: ['nitrobenz'] },
];

window.CARDS = [

  // ══ PHENOLS ══

  { cat:'phenol', cl:'c-org-b',
    f:'Hückel\'s rule and aromaticity:\n4n+2 vs 4n?',
    fs:'',
    b:'4n+2 π electrons (n=0,1,2…) = Aromatic (planar, cyclic, fully conjugated)\n4n π electrons = Anti-aromatic\nStability: Aromatic > Non-aromatic > Anti-aromatic',
    bs:'',
    n:'Cyclopentadienyl anion (6e) = aromatic. Cyclopentadienyl cation (4e) = anti-aromatic.' },

  { cat:'phenol', cl:'c-org-b',
    f:'Dow\'s process (industrial phenol prep):\nChlorobenzene → phenol?',
    fs:'',
    b:'Ar-Cl + NaOH/KOH → ArO⁻Na⁺ (sodium phenoxide) + H⁺ → Phenol\nConditions: high temp, high pressure',
    bs:'',
    n:'NAS (nucleophilic aromatic substitution) — possible because Cl on benzene + NaOH under forcing conditions.' },

  { cat:'phenol', cl:'c-org-b',
    f:'Phenol from Grignard:\nArMgX → ?',
    fs:'',
    b:'ArMgX + O₂ → ArOMgX → H₃O⁺ → Ar-OH (phenol)',
    bs:'',
    n:'' },

  { cat:'phenol', cl:'c-org-b',
    f:'Acidity of phenol:\nPhenol vs alcohol vs carboxylic acid?',
    fs:'',
    b:'Phenol is more acidic than alcohol (pKa ~10 vs ~16)\nPhCOOH > PhOH > H₂O > PhCH₂OH > ROH\nPhenoxide stabilised by resonance (negative charge delocalised into ring)',
    bs:'EWG on ring → more acidic (stabilise PhO⁻); EDG → less acidic',
    n:'Para-nitrophenol more acidic than phenol (NO₂ withdraws electrons → stabilises phenoxide).' },

  { cat:'phenol', cl:'c-org-b',
    f:'Test for phenol:\nFeCl₃ test and litmus?',
    fs:'',
    b:'FeCl₃: Phenol → violet/purple colour (characteristic test)\nLitmus: turns blue litmus red (acidic)\nPhenol + H₂O ⇌ PhO⁻ + H₃O⁺ (weak acid)',
    bs:'',
    n:'FeCl₃ test distinguishes phenol from alcohol (alcohol gives no colour).' },

  { cat:'phenol', cl:'c-org-b',
    f:'Kolbe–Schmidt carboxylation of phenol:\nPhenol + CO₂ → ? Product depends on which base?',
    fs:'',
    b:'PhONa + CO₂ (NaOH) → salicylic acid (o-COOH, ortho major)\nPhOK + CO₂ (KOH) → potassium p-hydroxybenzoate (p-COOH, para major)\nThen H⁺ → free acid',
    bs:'',
    n:'Na salt → ortho (salicylate). K salt → para. Electrophilic CO₂ attacks ortho/para.' },

  { cat:'phenol', cl:'c-org-b',
    f:'Reimer–Tiemann reaction:\nPhenol + CHCl₃ + KOH → ?',
    fs:'',
    b:'Phenol + CHCl₃ + KOH (alc) → o-Hydroxybenzaldehyde (salicylaldehyde, major) + p-isomer (minor)\nMechanism: CHCl₃ + KOH → :CCl₂ (dichlorocarbene) → electrophilic attack on ring',
    bs:'',
    b:'Intermediate: dichloromethylphenol → KOH hydrolysis → CHO',
    n:'Carbene intermediate. Formylation of phenol ring at ortho (major) and para.' },

  { cat:'phenol', cl:'c-org-b',
    f:'Fries rearrangement:\nPhenyl ester + AlCl₃/Δ → ?',
    fs:'',
    b:'Ph-O-CO-R + AlCl₃/Δ → o-hydroxyaryl ketone (major at high T) + p-hydroxyaryl ketone (major at low T)\n(Acyl group migrates from O to the ring)',
    bs:'',
    n:'High T → ortho; low T → para. Rearrangement via ion pair mechanism.' },

  { cat:'phenol', cl:'c-org-b',
    f:'Reduction of phenol:\nPhenol + Zn/Δ → ?\nPhenol + 3H₂/Ni/Δ → ?',
    fs:'',
    b:'Phenol + Zn/Δ → Benzene\nPhenol + 3H₂/Ni/Δ → Cyclohexanol',
    bs:'',
    n:'Zn removes OH; H₂/Ni reduces ring.' },

  { cat:'phenol', cl:'c-org-b',
    f:'Williamson ether synthesis from phenol:\nPhenol + NaOH + CH₃I → ?',
    fs:'',
    b:'PhOH + NaOH → PhO⁻Na⁺ + CH₃I → PhO-CH₃ (Anisole / Methoxybenzene) + NaI',
    bs:'',
    n:'Phenol → sodium phenoxide (strong base removes H) → then alkylate with R-X (SN2).' },

  // ══ EAS OF BENZENE ══

  { cat:'eas', cl:'c-org-c',
    f:'Benzene halogenation (EAS):\nReagent, electrophile generated, product?',
    fs:'',
    b:'Reagent: Cl₂/FeCl₃ or Br₂/FeBr₃ (Lewis acid catalyst)\nElectrophile: Cl⁺ (from Cl-FeCl₃ complex) attacks ring\nProduct: Chlorobenzene/Bromobenzene + HCl/HBr + FeCl₃',
    bs:'F₂ and I₂ not used directly (F₂ too violent; I₂ too slow)',
    n:'FeCl₃/FeBr₃ activates X₂ by polarising X-X bond. Base (FeCl₃⁻) removes H⁺ in final step.' },

  { cat:'eas', cl:'c-org-c',
    f:'Benzene nitration:\nReagent, electrophile, product?',
    fs:'',
    b:'Reagent: conc. HNO₃ + conc. H₂SO₄ (mixed acid)\nElectrophile: NO₂⁺ (nitronium ion, from H₂SO₄ + HNO₃ → NO₂⁺ + H₂O)\nProduct: Nitrobenzene + H₂O',
    bs:'H₂SO₄ also acts as dehydrating agent to increase NO₂⁺ concentration',
    n:'Nitrobenzene = pale yellow oily liquid (mirbane oil). Further nitration is harder (NO₂ deactivates ring).' },

  { cat:'eas', cl:'c-org-c',
    f:'Benzene sulfonation:\nReagent, electrophile, reversible?',
    fs:'',
    b:'Reagent: fuming H₂SO₄ (oleum = SO₃ in H₂SO₄)\nElectrophile: SO₃ (neutral, powerful electrophile)\nProduct: Benzene sulphonic acid (PhSO₃H)\nReversible: PhSO₃H + H₂O (steam) → Benzene + H₂SO₄',
    bs:'',
    n:'Reversibility used in synthesis to block a position, then remove sulphonate group later.' },

  { cat:'eas', cl:'c-org-c',
    f:'Friedel–Crafts alkylation:\nReagent, electrophile, limitations?',
    fs:'',
    b:'Reagent: R-X + AlCl₃ → R⁺ (carbocation) + AlCl₄⁻\nProduct: Alkylbenzene\nLimitations: rearrangement of R⁺; polyalkylation; no reaction with deactivated rings (NO₂, etc.)',
    bs:'',
    n:'Rearrangement: n-PrCl + AlCl₃ → isopropyl cation → isopropylbenzene (not propylbenzene).' },

  { cat:'eas', cl:'c-org-c',
    f:'Friedel–Crafts acylation:\nReagent, electrophile, why preferred over alkylation?',
    fs:'',
    b:'Reagent: R-COCl + AlCl₃ → RCO⁺ (acylium ion, stable → no rearrangement)\nProduct: Aryl ketone (R-CO-Ar)\nAdvantages: no rearrangement, no polyacylation (C=O deactivates ring after one substitution)',
    bs:'Does not work with deactivated rings (e.g. nitrobenzene)',
    n:'Acylium ion resonance-stabilised → no rearrangement. Zn-Hg/HCl (Clemmensen) → removes C=O to get alkyl.' },

  // ══ DIRECTING GROUPS ══

  { cat:'directing', cl:'c-org-c',
    f:'Ortho-para directors: list and mechanism?',
    fs:'',
    b:'EDG (electron-donating groups): activate ring for EAS\n-O⁻ > -NH₂ > -NHR > -NR₂ > -OH (very strong activators)\n-OR > -NHCOR > -OCOR (strong activators)\n-R > -Ar > -CH=CH₂ (activators)\nHalogens: o/p directors but DEactivators (−I > +M)',
    bs:'',
    n:'EDG donate electrons into ring → ring electron-rich at ortho/para → electrophile attacks there.' },

  { cat:'directing', cl:'c-org-c',
    f:'Meta directors: list and why meta?',
    fs:'',
    b:'EWG (electron-withdrawing groups): deactivate ring\n-CHO, -COR, -COOH, -COOR, -COCl, -CN, -SO₃H (strong deactivators)\n-NO₂, -NR₃⁺, -SR₂⁺, -CF₃ (very strong deactivators)\nMeta product major because ortho/para positions even more deactivated',
    bs:'',
    n:'EWG withdraw electrons from ortho/para but meta remains relatively more electron-rich.' },

  { cat:'directing', cl:'c-org-c',
    f:'Why are halogens ortho-para directors but deactivators?',
    fs:'',
    b:'Halogens: −I effect (inductively withdrawing via σ bond, deactivates ring) > +M effect (resonance donating lone pair, o/p director)\n−I dominates → net deactivator\n+M dominates → ortho/para orientation\n→ Deactivating o/p directors',
    bs:'-CH₂X, -N=O are also deactivators but o/p directors',
    n:'Key JEE concept: direction and activation are determined by different factors.' },

  // ══ ANILINE ══

  { cat:'aniline', cl:'c-org-d',
    f:'Preparation of aniline — 4 methods?',
    fs:'',
    b:'1) Nitrobenzene + Sn/HCl or Fe/HCl → aniline (metal-acid reduction)\n2) Nitrobenzene + H₂/Ni (weak basic medium) → aniline\n3) Halobenzene + NH₃/Cu₂O/Δ → aniline (Ullmann-type)\n4) Benzamide + Br₂ + KOH → aniline (Hofmann bromamide decarboxylation)',
    bs:'Selective reduction: NH₄SH or NH₃/H₂S/Δ reduces one -NO₂ in dinitrobenzene',
    n:'' },

  { cat:'aniline', cl:'c-org-d',
    f:'Basicity of aniline vs aliphatic amines?\nEffect of ring substituents?',
    fs:'',
    b:'Aliphatic amine (RNH₂) >> Aniline (PhNH₂) (pKb ~4.6 vs ~9.4)\nPh-NH₂: lone pair delocalised into ring → less available for protonation\nEDG on ring (CH₃, OCH₃) → more basic\nEWG on ring (NO₂, Cl) → less basic',
    bs:'',
    n:'Lone pair in conjugation with aromatic ring = aniline much weaker base than alkylamines.' },

  { cat:'aniline', cl:'c-org-d',
    f:'Carbylamine reaction (Hoffmann isocyanide test):\nReagent, product, what amine?',
    fs:'Test for primary amines only',
    b:'R-NH₂ or Ph-NH₂ + CHCl₃ + alc. NaOH/Δ → R-NC (isocyanide, foul/toxic smell)\nOnly 1° amines (aliphatic or aromatic)\n2° and 3° amines do NOT give this test',
    bs:'',
    n:'Isocyanide = carbylamine. Offensive smell = positive test. Mechanism: dichlorocarbene intermediate.' },

  { cat:'aniline', cl:'c-org-d',
    f:'Hofmann mustard oil reaction:\nR-NH₂ + CS₂ → ? then + HgCl₂ → ?',
    fs:'Test for primary amines',
    b:'R-NH₂ + CS₂ → dithiocarbamate intermediate\n+ HgCl₂ → R-N=C=S (isothiocyanate, mustard oil smell)',
    bs:'',
    n:'Mustard oil smell = positive for 1° amine.' },

  { cat:'aniline', cl:'c-org-d',
    f:'Hinsberg\'s test:\nHow to distinguish 1°, 2°, 3° amines?',
    fs:'',
    b:'Reagent: PhSO₂Cl (benzenesulphonyl chloride)\n1° amine: PhSO₂-NHR (sulphonamide, ppt, soluble in NaOH)\n2° amine: PhSO₂-NR₂ (sulphonamide, ppt, insoluble in NaOH)\n3° amine: No reaction (no N-H)',
    bs:'',
    n:'Key difference: 1° sulphonamide has acidic N-H → dissolves in NaOH. 2° does not.' },

  { cat:'aniline', cl:'c-org-d',
    f:'EAS of aniline — which position and rate?',
    fs:'',
    b:'NH₂ = very strong activator, ortho-para director\nAniline undergoes EAS much faster than benzene\nBromination: PhNH₂ + Br₂(aq) → 2,4,6-tribromoaniline↓ (white ppt, instantly)\nNitration: need to protect NH₂ first (acetylation) to avoid over-reaction',
    bs:'',
    n:'For controlled EAS: protect NH₂ as acetamide (NHCOCH₃) — still o/p but less activating.' },

  // ══ DIAZONIUM SALTS ══

  { cat:'diazonium', cl:'c-hydro',
    f:'Preparation of diazonium salt:\nAr-NH₂ → Ar-N₂⁺Cl⁻. Reagents and temperature?',
    fs:'Diazotisation',
    b:'Ar-NH₂ + NaNO₂ + HCl → Ar-N₂⁺Cl⁻ + NaCl + H₂O\nTemperature: 0–5°C (ice bath — diazonium salt unstable, decomposes above 5°C)\nHNO₂ formed in situ: NaNO₂ + HCl → HNO₂ + NaCl',
    bs:'',
    n:'Diazonium salts must be used immediately — decompose rapidly above 5°C.' },

  { cat:'diazonium', cl:'c-hydro',
    f:'Sandmeyer reaction — all 3 variants:\nAr-N₂⁺Cl⁻ → ?',
    fs:'Replacement with Cu(I) salts',
    b:'+ CuCl/HCl → Ar-Cl\n+ CuBr/HBr → Ar-Br\n+ CuCN (or KCN + CuCN) → Ar-CN',
    bs:'',
    n:'Sandmeyer = Cu(I) catalyst. Introduces Cl, Br, or CN onto benzene ring via diazonium.' },

  { cat:'diazonium', cl:'c-hydro',
    f:'Other diazonium replacements (non-Sandmeyer):\nN₂⁺ replaced by F, I, OH, H?',
    fs:'',
    b:'F: Balz–Schiemann: + HBF₄ → Ar-N₂⁺BF₄⁻ → Δ → Ar-F + N₂ + BF₃\nI: + KI/Δ → Ar-I + N₂ (no Cu needed)\nOH: + H₂O/H⁺/Δ → Ar-OH\nH: + EtOH (redox) → Ar-H + CH₃CHO + N₂ (or hypophosphorous acid)',
    bs:'',
    n:'Balz-Schiemann = only way to put F on benzene ring (ArF otherwise very difficult).' },

  { cat:'diazonium', cl:'c-hydro',
    f:'Gomberg reaction:\nAr-N₂⁺Cl⁻ + C₆H₆ + NaOH/Δ → ?',
    fs:'Radical coupling',
    b:'Ar-N₂⁺Cl⁻ + benzene + NaOH/Δ → Ar-C₆H₅ (biaryl, e.g. biphenyl)',
    bs:'',
    n:'Free radical mechanism. Used to make biaryl compounds (aryl-aryl bond).' },

  { cat:'diazonium', cl:'c-hydro',
    f:'Diazo coupling reaction:\nAr-N₂⁺ + Ar′H → ? pH conditions?',
    fs:'Coupling reaction — makes azo dyes',
    b:'Ar-N₂⁺ couples with activated Ar′H (PhOH or PhNH₂)\n+ PhNH₂ (pH 4–6, weakly acidic) → p-amino azobenzene (yellow, p-coupling)\n+ PhOH (pH 8–10, weakly alkaline NaOH) → p-hydroxy azobenzene\n+ PhOH (pH 11–13, strongly basic KOH) → o-hydroxy (ortho coupling)',
    bs:'',
    n:'Product = azo compound (Ar-N=N-Ar′). Azo dyes are highly coloured. pH controls position.' },

  // ══ NITROBENZENE ══

  { cat:'nitrobenz', cl:'c-org-a',
    f:'Complete reduction of nitrobenzene:\nSn/HCl or Fe/HCl → ?\nH₂/Ni weak basic medium → ?',
    fs:'',
    b:'Sn/HCl or Fe/HCl → Aniline (PhNH₂)\nH₂/Ni, weak basic → Aniline',
    bs:'',
    n:'' },

  { cat:'nitrobenz', cl:'c-org-a',
    f:'Partial/controlled reduction of nitrobenzene:\nNa₂AsO₃ + 4[H] → ?\nZn/NaOH or LiAlH₄ + 8[H] → ?\nNH₄SH → ?',
    fs:'',
    b:'Na₂AsO₃ + 4[H] → Azoxybenzene (Ph-N(O)=N-Ph)\nZn/NaOH or LiAlH₄ + 8[H] → Azobenzene (Ph-N=N-Ph)\nZn/NH₄Cl → Phenylhydroxylamine (Ph-NH-OH)\nNH₄SH/Δ → Selectively reduces one NO₂ in dinitrobenzene',
    bs:'Reduction levels: NO₂ → NHOH → N=N → N-N → NH₂',
    n:'Na₂AsO₃ = very mild (stops at azoxy). Increasing [H] gives successive reduction products.' },

  { cat:'nitrobenz', cl:'c-org-a',
    f:'FC alkylation/acylation with nitrobenzene — does it work?',
    fs:'',
    b:'NO REACTION — nitrobenzene does not undergo FC alkylation or FC acylation\nNO₂ is a very strong deactivator (meta-director) — ring too electron-poor for electrophilic attack',
    bs:'',
    n:'Cannot do EAS on nitrobenzene with most electrophiles. Need very harsh conditions even for nitration.' },

];
