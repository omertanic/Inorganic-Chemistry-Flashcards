window.LABELS = {
  'sn1':      'SN1',
  'sn2':      'SN2',
  'e1':       'E1',
  'e2':       'E2',
  'nu-base':  'Nu & Bases',
  'lg':       'Leaving Groups',
  'halo-rxn': 'Haloalkane Rxns',
};

window.FILTER_GROUPS = [
  { label: 'Mechanisms',   cats: ['sn1', 'sn2', 'e1', 'e2'] },
  { label: 'Nu & LG',      cats: ['nu-base', 'lg'] },
  { label: 'Halo Rxns',    cats: ['halo-rxn'] },
];

window.CARDS = [

  // ══ SN1 ══

  { cat:'sn1', cl:'c-org-b',
    f:'SN1 mechanism — steps & key features',
    fs:'Unimolecular nucleophilic substitution',
    b:'Step 1: R-X → R⁺ + X⁻ (slow, rate-determining)\nStep 2: R⁺ + Nu⁻ → R-Nu (fast)\nRate = k[R-X] (1st order)',
    bs:'Carbocation intermediate → racemisation',
    n:'Gives racemic mixture (Nu can attack from either face of planar carbocation).' },

  { cat:'sn1', cl:'c-org-b',
    f:'SN1 favoured by which substrate, solvent, nucleophile?',
    fs:'',
    b:'Substrate: 3° > 2° >> 1° (stability of carbocation)\nSolvent: polar protic (H₂O, ROH, RCOOH — stabilise ions)\nNucleophile: weak Nu⁻ or neutral Nu (conc. doesn\'t matter)',
    bs:'',
    n:'Allylic/benzylic can also go SN1 (resonance-stabilised carbocation).' },

  { cat:'sn1', cl:'c-org-b',
    f:'Carbocation stability order?',
    fs:'',
    b:'3° > 2° > 1° > CH₃⁺\nAllylic/Benzylic ≈ 3°\nVinyl/Aryl cations: very unstable',
    bs:'',
    n:'Resonance-stabilised carbocations (allylic, benzylic) react via SN1 even if not 3°.' },

  { cat:'sn1', cl:'c-org-b',
    f:'What is rearrangement (1,2-hydride or 1,2-methyl shift)?\nWhen does it occur?',
    fs:'Carbocation rearrangement',
    b:'Occurs in SN1 (and E1) when a more stable carbocation can form\n1,2-H shift: adjacent H moves with electrons → more stable cation\n1,2-Me shift: adjacent CH₃ moves with electrons',
    bs:'',
    n:'Rearrangement is a hallmark of carbocation pathways (SN1/E1). Never in SN2/E2.' },

  // ══ SN2 ══

  { cat:'sn2', cl:'c-org-c',
    f:'SN2 mechanism — steps & key features',
    fs:'Bimolecular nucleophilic substitution',
    b:'One step: Nu⁻ attacks backside of C-X simultaneously as X⁻ leaves\nRate = k[R-X][Nu⁻] (2nd order)\nWalden inversion (100% inversion of configuration)',
    bs:'Transition state: trigonal bipyramidal',
    n:'Inversion = if R substrate, product is S and vice versa (complete stereochemical inversion).' },

  { cat:'sn2', cl:'c-org-c',
    f:'SN2 favoured by which substrate, solvent, nucleophile?',
    fs:'',
    b:'Substrate: CH₃X > 1° > 2° >> 3° (least steric hindrance)\nSolvent: polar aprotic (DMF, DMSO, acetone — solvates cation, leaves Nu⁻ free)\nNucleophile: strong, unhindered Nu⁻',
    bs:'',
    n:'Polar aprotic solvents: don\'t H-bond to Nu⁻ → Nu⁻ is "naked" and more reactive.' },

  { cat:'sn2', cl:'c-org-c',
    f:'SN2 reactivity order for R-X substrates?',
    fs:'',
    b:'CH₃X > 1° > 2° >> 3° (3° = essentially no SN2)\nAllylic/Benzylic 1° = reactive (good access + resonance)\nVinyl/Aryl halides = no SN2',
    bs:'',
    n:'Neopentyl (2,2-dimethyl-1-halopropane) = 1° but severely hindered → very slow SN2.' },

  { cat:'sn2', cl:'c-org-c',
    f:'Walden inversion — what does it mean for a chiral centre?',
    fs:'SN2 stereochemistry',
    b:'SN2 gives complete inversion of configuration at the reacting carbon\n(R) substrate + Nu⁻ → (S) product (or vice versa)',
    bs:'',
    n:'Like umbrella flipping inside out. No racemisation in SN2.' },

  // ══ E1 ══

  { cat:'e1', cl:'c-org-a',
    f:'E1 mechanism — steps & key features',
    fs:'Unimolecular elimination',
    b:'Step 1: R-X → R⁺ + X⁻ (slow, rate-determining)\nStep 2: Base removes β-H from carbocation → alkene\nRate = k[R-X] (1st order)',
    bs:'Saytzeff product (more substituted alkene) major',
    n:'E1 competes with SN1 (same conditions, same substrates). Higher temp favours elimination.' },

  { cat:'e1', cl:'c-org-a',
    f:'E1 favoured conditions?',
    fs:'',
    b:'Substrate: 3° (same carbocation stability as SN1)\nSolvent: polar protic\nBase: weak base (Nu can be weak)\nTemperature: HIGH temp favours E1 over SN1',
    bs:'',
    n:'SN1 vs E1: both via carbocation intermediate. High T → E1; low T → SN1.' },

  // ══ E2 ══

  { cat:'e2', cl:'c-org-d',
    f:'E2 mechanism — steps & key features',
    fs:'Bimolecular elimination',
    b:'One step: Base removes β-H simultaneously as C-X bond breaks → alkene + HX\nRate = k[R-X][Base] (2nd order)\nRequires anti-periplanar geometry (dihedral H-C-C-X = 180°)',
    bs:'Saytzeff product major (unless bulky base)',
    n:'Anti-periplanar = H and X must be on opposite sides (anti-addition). Trans alkene usually major.' },

  { cat:'e2', cl:'c-org-d',
    f:'E2 favoured conditions?',
    fs:'',
    b:'Substrate: 2° or 3° (also 1° with right base)\nBase: strong, bulky (t-BuOK, NaNH₂, LDA)\nSolvent: polar aprotic or alcoholic\nTemperature: high favours E2 over SN2',
    bs:'Bulky base → less substituted (Hofmann) product',
    n:'t-BuOK is classic bulky base → Hofmann product. Normal KOH/NaOH in alcohol → Saytzeff.' },

  { cat:'e2', cl:'c-org-d',
    f:'E2 stereospecificity — what geometry of substrate is needed?',
    fs:'',
    b:'H and X must be anti-periplanar (180° dihedral)\nIn cyclohexane: both H and X must be axial (diaxial elimination)\nGives predominantly trans (E) alkene',
    bs:'',
    n:'If H and X can\'t achieve anti-periplanar → very slow E2. Cyclohexane rings must flip to diaxial.' },

  // ══ NUCLEOPHILES & BASES ══

  { cat:'nu-base', cl:'c-hydro',
    f:'Strong bases AND strong nucleophiles (list)',
    fs:'Prefer SN2 or E2',
    b:'OH⁻ (NaOH, KOH)\nOR⁻ (alkoxide)\nHC≡C⁻ (formed with NaNH₂)\nCH₃⁻ (v. strong)',
    bs:'',
    n:'' },

  { cat:'nu-base', cl:'c-hydro',
    f:'Strong bases, WEAK nucleophiles (list)',
    fs:'Prefer E2 (bulky)',
    b:'H⁻ (hydride: NaH, KAH)\nt-BuO⁻ (bulky — Hofmann)\nLDA\nDBU\nDBA\nNaNH₂/KNH₂ (borderline)',
    bs:'',
    n:'Bulky bases can\'t do SN2 (too hindered) → force E2 elimination.' },

  { cat:'nu-base', cl:'c-hydro',
    f:'Weak bases AND STRONG nucleophiles (list)',
    fs:'Prefer SN2',
    b:'Cl⁻, Br⁻, I⁻, F⁻ (halides)\nCN⁻\nSH⁻\nN₃⁻ (azide)\nPhO⁻ (phenoxide)',
    bs:'Nucleophilicity in polar protic: I⁻ > Br⁻ > Cl⁻ > F⁻',
    n:'Polarizability matters in protic solvents: larger atom = better Nu⁻. In aprotic: F⁻ > Cl⁻ > Br⁻ > I⁻.' },

  { cat:'nu-base', cl:'c-hydro',
    f:'Weak bases AND weak nucleophiles (list)',
    fs:'No SN2/E2 — need SN1/E1 conditions',
    b:'H₂O (attacks directly, then deprotonates)\nROH (same as H₂O)',
    bs:'H₂O doesn\'t give OH⁻ — it attacks directly',
    n:'' },

  { cat:'nu-base', cl:'c-hydro',
    f:'Nucleophilicity trend in polar PROTIC solvent:\nI⁻/F⁻/Cl⁻/Br⁻ order?',
    fs:'',
    b:'I⁻ > Br⁻ > Cl⁻ > F⁻\n(larger, more polarizable = better — H-bonding less effective for larger ions)',
    bs:'In polar APROTIC solvent: F⁻ > Cl⁻ > Br⁻ > I⁻ (follows basicity)',
    n:'Key for JEE: always state the solvent when comparing nucleophilicity.' },

  // ══ LEAVING GROUPS ══

  { cat:'lg', cl:'c-acid',
    f:'What makes a good leaving group?',
    fs:'',
    b:'Must be stable after leaving (weak bases are good LG)\nGood LG: I⁻, Br⁻, Cl⁻, H₂O, alkyl sulphonate (OTs⁻, OMs⁻), CF₃SO₃⁻ (triflate)',
    bs:'Leaving ability: I⁻ > Br⁻ > Cl⁻ >> F⁻',
    n:'Triflate (CF₃SO₃⁻) = super leaving group. OTs⁻ (tosylate) and OMs⁻ (mesylate) very common in synthesis.' },

  { cat:'lg', cl:'c-acid',
    f:'Very BAD leaving groups (list) & why?',
    fs:'',
    b:'OH⁻ (strong base → bad LG)\nF⁻ (stronger base than Cl⁻ → worst halide LG)\nNH₂⁻, CH₃⁻ (very strong bases)\nRO⁻, PhO⁻, RCOO⁻\nOrder: F⁻ > OH⁻ > NH₂⁻ > CH₃⁻',
    bs:'',
    n:'Exception: OH can leave in acid medium (gets protonated → leaves as H₂O which IS a good LG).' },

  { cat:'lg', cl:'c-acid',
    f:'Tosylate (OTs⁻) and triflate (OTf⁻) — why are they good leaving groups?',
    fs:'',
    b:'OTs⁻ = p-MeC₆H₄SO₃⁻ (negative charge delocalised into SO₃ and ring)\nOTf⁻ = CF₃SO₃⁻ (even more stable due to 3 F atoms — super LG)',
    bs:'Tosylation of R-OH converts bad OH to excellent OTs LG',
    n:'Very commonly used in synthesis to activate alcohols for substitution.' },

  // ══ HALOALKANE REACTIONS ══

  { cat:'halo-rxn', cl:'c-org-a',
    f:'Swart\'s reaction:\nR-X + AgF → ?',
    fs:'Fluorine exchange reaction',
    b:'R-F (major) + AgX↓\nAlso minor: R-OH (from H₂O) + R-OC₂H₅ (very minor)\nReagents: AgF/H₂O (major) + C₂H₅OH (minor)',
    bs:'',
    n:'Used to make alkyl fluorides when direct fluorination is too violent.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'Lucas test:\nR-OH + conc. HCl + anhy. ZnCl₂ → ?\nWhich degree gives instant turbidity?',
    fs:'Used to distinguish 1°, 2°, 3° alcohols',
    b:'R-OH → R-Cl (insoluble in reagent → turbid/cloudy)\n3° → instant turbidity\n2° → turbid in 5–10 min\n1° → turbid after 30 min\nCH₃OH → very long time (generally not used)',
    bs:'Exception: allylic/benzylic 1° → instant (carbocation stabilised)',
    n:'Turbidity = R-Cl formed (insoluble layer). Mechanism: SN1 for 3°, SN2 for 1°.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + NaOH (aq) → ?',
    fs:'Substitution',
    b:'R-OH (alcohol) + NaX\nSN2 for 1°, SN1 for 3°',
    bs:'',
    n:'' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + KOH (alcoholic, hot) → ?',
    fs:'Elimination',
    b:'Alkene + KX + H₂O (dehydrohalogenation)\nE2 mechanism, Saytzeff product major',
    bs:'Alcoholic = ethanol as solvent (not aqueous)',
    n:'Key distinction: aq. KOH = substitution; alc. KOH = elimination.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + KCN (aq) → ? vs R-X + AgCN → ?',
    fs:'CN⁻ is ambident nucleophile',
    b:'KCN (ionic, K⁺CN⁻) → CN⁻ attacks via C → nitrile (R-CN)\nAgCN (covalent) → C attacks via N → isocyanide (R-NC)',
    bs:'',
    n:'Nitrile (R-CN) is more stable; isocyanide (R-NC) from AgCN (N attacks).' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + KNO₂ → ? vs R-X + AgNO₂ → ?',
    fs:'NO₂⁻ is ambident nucleophile',
    b:'KNO₂ (ionic) → N attacks → nitroalkane (R-NO₂)\nAgNO₂ (covalent) → O attacks → alkyl nitrite (R-O-N=O)',
    bs:'',
    n:'Nitroalkane (R-NO₂) vs alkyl nitrite (R-O-NO). Nitrogen end = "hard" centre.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + NaI (acetone) → ?\nWhy is this called Finkelstein reaction?',
    fs:'',
    b:'R-X + NaI → R-I + NaX↓\nNaI soluble in acetone; NaCl/NaBr insoluble → precipitates → drives equilibrium\nUsed to convert R-Cl / R-Br → R-I',
    bs:'',
    n:'Finkelstein reaction = halogen exchange using NaI in acetone.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + Mg (dry ether) → ?\nThen RMgX + H₂O/RX/CO₂/C=O → ?',
    fs:'Grignard reagent formation',
    b:'R-X + Mg → RMgX (Grignard reagent)\nRMgX + H₂O → R-H\nRMgX + R′X → R-R′\nRMgX + CO₂ → RCOOH (after H₃O⁺)\nRMgX + HCHO → 1° alcohol\nRMgX + R′CHO → 2° alcohol\nRMgX + R′COR″ → 3° alcohol',
    bs:'',
    n:'RMgX reacts with any active H (H₂O, ROH, RCOOH, NH₃, terminal alkyne) → R-H (destroyed).' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + NaOR′ → ?  [Williamson ether synthesis]',
    fs:'',
    b:'R-X + NaOR′ → R-O-R′ + NaX\nSN2 mechanism (must use 1° R-X for clean product)\nUsed to make unsymmetric ethers',
    bs:'',
    n:'3° R-X → gives elimination (E2) instead of ether.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'Reaction of ether (R-O-R′) with HX:\n3° ether vs 1° ether mechanism?',
    fs:'',
    b:'Step 1: R-O-R′ + H⁺ → R-O⁺H-R′ (protonation)\nStep 2: \n3° → SN1 (tertiary carbocation)\n1°/2° → SN2 (Nu⁻ attacks backside)\nHI and HBr used (not HCl — too weak)',
    bs:'',
    n:'Ether requires protonation first before OH can leave (as H₂O).' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'Intramolecular SN2 reaction:\nHO-(CH₂)ₙ-Cl + NaOH → ?',
    fs:'',
    b:'Forms cyclic ether (epoxide for n=2, oxetane for n=3, THF ring for n=4)\nO⁻ attacks own C-Cl intramolecularly',
    bs:'',
    n:'Intramolecular SN2 is very fast for 3- and 5-membered rings (entropy-driven).' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'Dehalogenation of vicinal dihalide → alkene\nvs Dehalogenation of gem-dihalide → ?',
    fs:'',
    b:'Vicinal (X on adjacent C): + Zn/acid or NaI/acetone → alkene\nGem-dihalide (both X on same C): + 2KOH alc. → terminal alkyne (via vinyl halide)',
    bs:'',
    b:'CHX₃ + 3KOH → R-C≡C: (carbene-like) → products\nCHCl₃ + KOH → :CCl₂ (dichlorocarbene)',
    n:'' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'CHCl₃ / CHBr₃ + KOH (alc.) → ?',
    fs:'Haloform reaction (reverse)',
    b:'CHCl₃ + KOH → :CCl₂ (dichlorocarbene) + KCl + H₂O\n:CCl₂ adds to alkene → cyclopropane ring (Simmons-Smith type)',
    bs:'',
    n:'Carbene (:CCl₂) is a highly reactive intermediate. Adds to double bonds.' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'R-X + Li → ? then + CuI → ? [Gilman reagent]',
    fs:'',
    b:'2R-X + 2Li → 2RLi + 2LiX\n2RLi + CuI → R₂CuLi + LiI (lithium dialkylcuprate = Gilman reagent)\nR₂CuLi + R′X → R-R′ (coupling)',
    bs:'Does NOT react with -NO₂, -CN, C=O, ester',
    n:'Selective cross-coupling. Used to make specific alkanes cleanly (Corey-House).' },

  { cat:'halo-rxn', cl:'c-org-a',
    f:'Haloarene reactivity — why is Ar-X unreactive toward SN2?',
    fs:'',
    b:'1. C-X bond has partial double bond character (resonance with ring)\n2. sp² carbon — 3 groups in plane block backside attack\n3. Electron cloud above/below ring hinders Nu⁻',
    bs:'Aryl halides react only under harsh conditions (NaNH₂/liquid NH₃ or via benzyne)',
    n:'Nucleophilic aromatic substitution (NAS) requires strong e⁻ withdrawing groups ortho/para to X.' },

];
