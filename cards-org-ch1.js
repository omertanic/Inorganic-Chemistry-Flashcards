// ── ORGANIC CH1: Haloalkanes & Haloarenes ──
window.DECK_ID = 'org-ch1-haloalkanes';

window.LABELS = {
  // Alkyl Halide Preparation
  'prep-halogenation':   'Direct Halogenation',
  'prep-so2cl2':         'SO₂Cl₂ / NBS',
  'prep-hydrohalo':      'Hydrohalogenation',
  'prep-alcohol':        'From Alcohols',
  'prep-hunsdiecker':    'Hunsdiecker Rxn',
  // SN Reactions
  'sn1':                 'SN1',
  'sn2':                 'SN2',
  'sn-compare':          'SN1 vs SN2',
  'sn-stereo':           'Stereochem',
  'sn-ambident':         'Ambident Nu',
  // Named Reactions
  'named-wurtz':         'Wurtz Rxn',
  'named-wes':           'Williamson Ether',
  'named-finkelstein':   'Finkelstein / Swartz',
  'named-ammonolysis':   'Ammonolysis',
  'named-organometal':   'Organometallics',
  // Elimination
  'elimination':         'E2 Elimination',
  // Aryl Halides
  'aryl-prep':           'Aryl Halide Prep',
  'aryl-sn2':            'ArSN2',
  'aryl-eas':            'EAS on Aryl-X',
  'aryl-named':          'Dow / Sandmeyer',
  // Benzene ArSE (from L1 PDF)
  'arse':                'ArSE Reactions',
};

window.FILTER_GROUPS = [
  { label: 'Preparation',   cats: ['prep-halogenation','prep-so2cl2','prep-hydrohalo','prep-alcohol','prep-hunsdiecker'] },
  { label: 'SN Reactions',  cats: ['sn1','sn2','sn-compare','sn-stereo','sn-ambident'] },
  { label: 'Named Rxns',    cats: ['named-wurtz','named-wes','named-finkelstein','named-ammonolysis','named-organometal'] },
  { label: 'Elimination',   cats: ['elimination'] },
  { label: 'Aryl Halides',  cats: ['aryl-prep','aryl-sn2','aryl-eas','aryl-named'] },
  { label: 'ArSE (Benzene)',cats: ['arse'] },
];

window.CARDS = [

  // ══════════════════════════════════════════
  // ArSE REACTIONS (L1 PDF)
  // ══════════════════════════════════════════

  { cat:'arse', cl:'c-org-arse',
    f:'Nitration of benzene — reagents, electrophile, product',
    fs:'ArSE',
    b:'Reagents: (i) conc. HNO₃ + conc. H₂SO₄ → H₃O⁺ + HSO₄⁻ + NO₂⁺; (ii) fuming HNO₃; (iii) N₂O₅\nElectrophile: NO₂⁺\nProduct: C₆H₅–NO₂',
    bs:'Nitronium ion is the electrophile',
    n:'Same nitrating mix at 60°C → nitrobenzene (oil of mirbane). At 100°C → m-dinitrobenzene (NO₂ is meta-directing).' },

  { cat:'arse', cl:'c-org-arse',
    f:'Sulphonation of benzene — reagents, electrophile, product',
    fs:'ArSE',
    b:'Reagents: (i) conc. H₂SO₄; (ii) oleum (H₂S₂O₇ ⇌ SO₃ + H₂SO₄)\nElectrophile: SO₃ (electrophilic S)\nProduct: C₆H₅–SO₃H (benzenesulphonic acid)',
    bs:'Reversible reaction — desulphonation occurs with steam',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Halogenation of benzene — reagents for Cl, Br, I; electrophile',
    fs:'ArSE',
    b:'Cl: Cl₂ + AlCl₃ → Cl⁺ + AlCl₄⁻ (chlorobenzene)\nBr: Br₂ + FeBr₃ → Br⁺ + FeBr₄⁻ (bromobenzene)\n   alt: Br₂ + CH₃COOH or Br₂ + H₂O\nI: I₂ + oxidising agent (HNO₃) → I⁺',
    bs:'Electrophile is X⁺ (halonium)',
    n:'I₂ + AlCl₃ also works: I–Cl polarised → I⁺ + AlCl₄⁻' },

  { cat:'arse', cl:'c-org-arse',
    f:'Friedel-Craft Alkylation — reagents, electrophile, exceptions',
    fs:'F.C. Alkylation',
    b:'(i) R–Cl + AlCl₃ → R⁺ + AlCl₄⁻\n(ii) R–OH + H⁺ (H₂SO₄, H₃PO₄, HF, BF₃) → R⁺ + H₂O\n(iii) Alkene + H⁺ → R⁺\nElectrophile: R⁺\nProduct: C₆H₅–R',
    bs:'Rearrangement possible via C⁺ intermediate',
    n:'R–X CANNOT be: CH₂=CH–Cl, HC≡C–Cl, or ArCl (vinyl/aryl halides don\'t give stable C⁺)' },

  { cat:'arse', cl:'c-org-arse',
    f:'Friedel-Craft Acylation — three ways to generate acylium ion',
    fs:'F.C. Acylation',
    b:'(i) R–C(=O)–Cl + AlCl₃ → R–C≡O⁺ + AlCl₄⁻\n(ii) (R–CO)₂O + AlCl₃ → R–C≡O⁺ + R–CO–OAlCl₃\n(iii) R–COOH + H⁺ (H₂SO₄, H₃PO₄) → R–C≡O⁺ + H₂O\nElectrophile: R–C≡O⁺ (acylium)\nProduct: C₆H₅–CO–R (aryl ketone)',
    bs:'No rearrangement (acylium more stable than carbocation)',
    n:'Acetyl chloride + AlCl₃ + benzene → Acetophenone + HCl' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + 3H₂ + Ni/Pt/Pd + Δ → ?',
    fs:'Reduction of benzene',
    b:'Cyclohexane',
    bs:'Hydrogenation',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + (i) O₃, Δ then (ii) Zn + H₂O → ? (reductive ozonolysis)',
    fs:'Red. ozonolysis',
    b:'3 × Glyoxal (OHC–CHO)',
    bs:'Each double bond of benzene gives one CHO–CHO unit',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + (i) O₃, Δ then (ii) H₂O₂ → ? (oxidative ozonolysis)',
    fs:'Oxid. ozonolysis',
    b:'3 × Oxalic acid (HOOC–COOH)',
    bs:'',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + 3Cl₂ + hν, Δ → ?',
    fs:'Free radical addition',
    b:'C₆H₆Cl₆ — Benzene Hexachloride (BHC / 666 / Lindane / Gammaxene)',
    bs:'Addition, NOT substitution — uses light not Lewis acid',
    n:'★ PYQ favourite — know the common names: BHC, 666, Lindane, Gammaxene' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + CH₃Cl + AlCl₃ → ? (F.C. Alkylation product name)',
    fs:'',
    b:'Toluene (methylbenzene) + HCl\nMechanism: CH₃Cl + AlCl₃ → CH₃⁺ + AlCl₄⁻',
    bs:'',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + isopropyl chloride + AlCl₃ → ? (product name)',
    fs:'F.C. Alkylation',
    b:'Cumene (isopropylbenzene)',
    bs:'No rearrangement — 2° C⁺ stable',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + n-propyl chloride + AlCl₃ → major product (rearrangement!)',
    fs:'F.C. Alkylation',
    b:'Isopropylbenzene (cumene) — major\nCumene > n-propylbenzene\nBecause: n-Pr⁺ → Me shift → 2°C⁺ (isopropyl)',
    bs:'Rearrangement always goes to more stable C⁺',
    n:'★ PYQ trap — n-PrCl with AlCl₃ gives isopropyl product, not n-propyl' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + CH₃–COCl + AlCl₃ → ? (product name)',
    fs:'F.C. Acylation',
    b:'Acetophenone (C₆H₅–CO–CH₃) + HCl',
    bs:'No rearrangement in acylation',
    n:'' },

  { cat:'arse', cl:'c-org-arse',
    f:'Benzene + CH₂=CH–Cl + AlCl₃ → ?',
    fs:'F.C. Alkylation',
    b:'No Reaction',
    bs:'Vinyl halides cannot generate stable C⁺',
    n:'Also: Ph–Cl + AlCl₃ → No Rxn (aryl halides too)' },

  { cat:'arse', cl:'c-org-arse',
    f:'For EAS on ethylbenzene — which positions are electron rich? What is major product direction?',
    fs:'o,p Directing',
    b:'Ethyl group is +I/+H, making ortho and para positions electron-rich\nMajor product: ortho and para substitution (para > ortho for steric reasons)',
    bs:'Applies to nitration, sulphonation, halogenation, F.C. alkylation, F.C. acylation',
    n:'' },

  // ══════════════════════════════════════════
  // ALKYL HALIDE PREPARATION (L1 PDF)
  // ══════════════════════════════════════════

  { cat:'prep-halogenation', cl:'c-org-prep',
    f:'sp³ C–H + X₂ + (hν or Δ or peroxide) → ?  Mechanism? Reactivity order of X₂?',
    fs:'Direct halogenation of alkane',
    b:'–C–X + HX\nMechanism: SFR (free radical substitution)\nReactivity: F₂ > Cl₂ > Br₂ > I₂',
    bs:'Selectivity: Br₂ is more selective; Cl₂ less selective',
    n:'Ethylbenzene + Cl₂ + hν → benzylic position chlorinated (major) — benzylic C–H weakest bond' },

  { cat:'prep-halogenation', cl:'c-org-prep',
    f:'Alkene + Cl₂ + 400°C → ? (vs Cl₂ at room temp)',
    fs:'Temperature control',
    b:'400°C: allylic substitution (SFR) — Cl replaces allylic H\nRoom temp: addition across double bond (ionic mechanism)',
    bs:'High temp favours substitution',
    n:'' },

  { cat:'prep-so2cl2', cl:'c-org-prep',
    f:'sp³ C–H + SO₂Cl₂ + (hν, peroxide) → ?  Byproducts?',
    fs:'Sulphuryl chloride halogenation',
    b:'–C–Cl + HCl + SO₂↑\nMechanism: SFR\nEg: cyclohexane + SO₂Cl₂ → chlorocyclohexane',
    bs:'',
    n:'' },

  { cat:'prep-so2cl2', cl:'c-org-prep',
    f:'NBS / NCS — what position do they halogenate? Give two examples.',
    fs:'N-bromosuccinimide / N-chlorosuccinimide',
    b:'Monohalogenation at allylic, benzylic, and propargylic positions only\nEg: propene + NBS → allyl bromide (CH₂=CH–CH₂Br)\nEg: toluene + NBS → benzyl bromide (C₆H₅CH₂Br)',
    bs:'Never adds across double bond',
    n:'★ PYQ: NBS is the go-to reagent for allylic/benzylic bromination' },

  { cat:'prep-hydrohalo', cl:'c-org-prep',
    f:'Alkene + HX → major product. What mechanism? What rule applies?',
    fs:'Hydrohalogenation (Markovnikov)',
    b:'Markovnikov Product (MP) = major\nMechanism: Electrophilic addition → carbocation → rearrangement possible → MP\nH adds to C with more H; X adds to C with fewer H',
    bs:'Rearrangement always goes to more stable C⁺',
    n:'★ PYQ: cyclopentylmethylene + HBr → ring expansion to cyclohexyl bromide via ring expansion of C⁺' },

  { cat:'prep-hydrohalo', cl:'c-org-prep',
    f:'Alkene + X₂ (Br₂/CCl₄) → product. Mechanism? Key features?',
    fs:'Halogenation of alkenes (ionic)',
    b:'Anti-addition (trans product)\nMechanism II: nonclassical (bridged halonium) C⁺ → no rearrangement → anti addition → MP = major\nEg: CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br\nCyclohexene + Br₂ → trans-1,2-dibromocyclohexane (racemic mix)',
    bs:'Halonium ion = no rearrangement',
    n:'★ PYQ: contrast with HX addition — X₂ gives anti, HX gives Markovnikov' },

  { cat:'prep-alcohol', cl:'c-org-prep',
    f:'R–OH + conc. HX → R–X. Mechanism? Reactivity order of HX and R–OH?',
    fs:'Alcohol + HX (Lucas reagent for Cl)',
    b:'R–OH + HX → R–X + H₂O\nMechanism: H⁺ protonates OH → R–OH₂⁺ → R⁺ (SN1 for 3°, SN2 for 1°)\nHX reactivity: HI > HBr > HCl >>> HF (HF — No Rxn with 1°, 2°)\nR–OH reactivity: 3° > 2° > 1°',
    bs:'Lucas reagent = conc. HCl + anhydrous ZnCl₂',
    n:'' },

  { cat:'prep-alcohol', cl:'c-org-prep',
    f:'3 R–OH + PX₃ → ? and R–OH + PX₅ → ?',
    fs:'Alcohol + phosphorus halide',
    b:'3 R–OH + PX₃ → 3 R–X + H₃PO₃ (phosphorous acid)\nR–OH + PX₅ → R–X + HX + POX₃\nPX₃ = PCl₃, PBr₃, PI₃; PX₅ = PCl₅, PBr₅; P+I₂ → PI₃',
    bs:'',
    n:'Eg: 2° R-OH + PBr₃ → 2° R–Br + H₃PO₃; with P+I₂ → R–I' },

  { cat:'prep-alcohol', cl:'c-org-prep',
    f:'R–OH + SOCl₂ → ? Byproducts? Name of process?',
    fs:'Thionyl chloride — Darzen\'s Process',
    b:'R–OH + SOCl₂ → R–Cl + HCl↑ + SO₂↑\nBoth HCl and SO₂ are gaseous — easy purification\nThis is Darzen\'s Process',
    bs:'Best method for making R–Cl from R–OH',
    n:'' },

  { cat:'prep-alcohol', cl:'c-org-prep',
    f:'R–OH + TsCl + Py → R–OTs → then Br⁻ → ?',
    fs:'Tosylation then SN2',
    b:'R–OH + TsCl + Py → R–O–Ts (tosylate) → + Br⁻ (SN2) → R–Br + TsO⁻ (stable)\nTs = p-Me–C₆H₄–SO₂– (tosyl group)',
    bs:'TsO⁻ is excellent leaving group',
    n:'' },

  { cat:'prep-hunsdiecker', cl:'c-org-prep',
    f:'Hunsdiecker Reaction: R–COOAg + Br₂ + CCl₄ → ?',
    fs:'Decarboxylative halogenation',
    b:'R–Br + CO₂↑ + AgBr↓\nWorks for alkyl and aryl silver carboxylates\nEg: CH₃COOH + AgOH → CH₃COOAg → + Br₂/CCl₄ → CH₃Br + CO₂ + AgBr',
    bs:'One carbon shorter than starting acid',
    n:'★ PYQ: used in synthesis chains to reduce chain length by one C' },

  // ══════════════════════════════════════════
  // SN1 REACTIONS (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'sn1', cl:'c-org-sn1',
    f:'SN1 mechanism — steps, intermediate, RDS?',
    fs:'Unimolecular nucleophilic substitution',
    b:'Step 1 (slow, RDS): R–X → R⁺ + X⁻ (carbocation intermediate)\nStep 2 (fast): R⁺ + Nu⁻(weak) → R–Nu\nRate ∝ [R–X]¹[Nu]⁰ → 1st order',
    bs:'Carbocation = planar sp² → attack from both faces → racemisation',
    n:'' },

  { cat:'sn1', cl:'c-org-sn1',
    f:'SN1 reactivity order w.r.t. R–X structure? What structures give NO SN1?',
    fs:'Reactivity & exceptions',
    b:'Reactivity ∝ stability of C⁺:\nAllylic > Benzylic > R–O–CH₂–X > 3° > 2° > 1° > CH₃–X\nNO SN1: CH₃–X, 1° R–CH₂–X, vinyl halides, aryl halides, R–C≡C–X, β-crowded 3°',
    bs:'',
    n:'' },

  { cat:'sn1', cl:'c-org-sn1',
    f:'SN1: nucleophile type? solvent? rearrangement?',
    fs:'Conditions',
    b:'Nucleophile: weak/neutral (H₂O, R–OH, R–COOH)\nSolvent: polar protic (H₂O, EtOH, AcOH)\nRearrangement: YES — more stable C⁺ forms major product',
    bs:'',
    n:'' },

  { cat:'sn1', cl:'c-org-sn1',
    f:'3° R–Br + KOH + DMSO → ? Why?',
    fs:'Solvent effect on mechanism',
    b:'No Reaction — DMSO is polar aprotic, disfavours SN1 (no carbocation stabilisation) and SN2 cannot occur on 3°',
    bs:'DMSO, acetone, DMF = polar aprotic → favour SN2 only',
    n:'★ PYQ trap: 3° halide + KOH/DMSO → No Rxn' },

  { cat:'sn1', cl:'c-org-sn1',
    f:'3° R–Br + H₂O + acetone (SN1) → product with rearrangement example',
    fs:'SN1 rearrangement',
    b:'If 2° C⁺ adjacent to a β-H or Me, H-shift/Me-shift occurs → 3° C⁺ → more stable → major product from 3° C⁺\nEg: 2° bromide with β-methyl → H shift → 3° C⁺ → 3° alcohol (major)',
    bs:'Most stable C⁺ → major product',
    n:'★ PYQ: ring expansion via ring C⁺ — cyclopentyl C⁺ → cyclohexyl C⁺ (SN1, aq. AgNO₃)' },

  // ══════════════════════════════════════════
  // SN2 REACTIONS (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'sn2', cl:'c-org-sn2',
    f:'SN2 mechanism — steps, TS, stereochemistry?',
    fs:'Bimolecular nucleophilic substitution',
    b:'Single-step: Nu⁻ attacks C from back side (180° to leaving group)\nTransition state (TBP geometry): [Nu···C···X]‡\nRate ∝ [R–X]¹[Nu]¹ → 2nd order\nStereochemistry: Walden Inversion (inversion of configuration)',
    bs:'Back-side attack → inversion at chiral C',
    n:'★ PYQ: Walden inversion is tested every year' },

  { cat:'sn2', cl:'c-org-sn2',
    f:'SN2: nucleophile type? solvent? rearrangement?',
    fs:'Conditions',
    b:'Nucleophile: strong/anionic (R⁻, CN⁻, N₃⁻, NH₂⁻, RO⁻, NH₃, PR₃)\nSolvent: polar aprotic (DMSO, acetone, DMF)\nRearrangement: NOT possible (no carbocation)',
    bs:'',
    n:'' },

  { cat:'sn2', cl:'c-org-sn2',
    f:'SN2 reactivity order w.r.t. R–X? What structures give NO SN2?',
    fs:'Reactivity',
    b:'Reactivity ∝ 1/steric hindrance:\nR–CO–CH₂–X > R–O–CH₂–X > Ph–CH₂–X > allylic > CH₃–X > 1° > 2° > 3°\nNO SN2: 3° R–X, β-crowded, vinyl halides, aryl halides, bridgehead halides',
    bs:'EWG on α-carbon increases SN2 rate',
    n:'★ PYQ: neopentyl bromide — 1° but β-crowded → No SN2' },

  { cat:'sn2', cl:'c-org-sn2',
    f:'Nucleophilicity order (polar protic solvent): CH₃⁻ vs NH₂⁻ vs OH⁻ vs F⁻ and F⁻ vs Cl⁻ vs Br⁻ vs I⁻',
    fs:'Nucleophilicity',
    b:'CH₃⁻ > NH₂⁻ > OH⁻ > F⁻\nF⁻ < Cl⁻ < Br⁻ < I⁻',
    bs:'In polar protic: larger atom = less solvated = better Nu\nIn polar aprotic: order reverses for halides',
    n:'★ PYQ: I⁻ is the best leaving group AND best nucleophile in polar protic' },

  // ══════════════════════════════════════════
  // SN1 vs SN2 COMPARISON
  // ══════════════════════════════════════════

  { cat:'sn-compare', cl:'c-org-sn1',
    f:'Complete comparison: SN1 vs SN2 — 8 points',
    fs:'',
    b:'① Mechanism: SN1=2-step (C⁺ inter.) | SN2=1-step (T.S. only)\n② Nu: SN1=weak neutral | SN2=strong anionic\n③ Solvent: SN1=polar protic | SN2=polar aprotic\n④ Intermediate: SN1=C⁺ | SN2=T.S. only\n⑤ Rearrangement: SN1=YES | SN2=NO\n⑥ Rate: SN1=1st order | SN2=2nd order\n⑦ Reactivity: SN1=3°>2° | SN2=1°>2°\n⑧ Stereochem: SN1=racemisation | SN2=Walden inversion',
    bs:'',
    n:'★ PYQ: the 3° vs 1° reactivity flip is the most commonly tested point' },

  { cat:'sn-compare', cl:'c-org-sn1',
    f:'Leaving group reactivity order (both SN1 and SN2)?',
    fs:'',
    b:'R–I > R–Br > R–Cl > R–F\n(F is worst LG — strongest C–F bond)',
    bs:'',
    n:'' },

  // ══════════════════════════════════════════
  // STEREOCHEMISTRY (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'sn-stereo', cl:'c-org-sn2',
    f:'SN1 on chiral centre → what stereochemical outcome?',
    fs:'Stereochemistry of SN1',
    b:'Planar carbocation (sp²) → attack from both faces equally → racemic mixture of enantiomers (retention + inversion both)\nNote: slight excess of inversion sometimes (ion-pair collapse)',
    bs:'',
    n:'' },

  { cat:'sn-stereo', cl:'c-org-sn2',
    f:'SN2 on chiral centre → what stereochemical outcome?',
    fs:'Walden Inversion',
    b:'Back-side attack ONLY → 100% inversion of configuration (Walden Inversion)\nIf [α] = +x° before → [α] = –x° after (or vice versa)',
    bs:'Only one stereoisomeric product',
    n:'★ PYQ: Walden inversion is defined as stereochemical inversion at C during SN2' },

  { cat:'sn-stereo', cl:'c-org-sn2',
    f:'Trans-4-methylcyclohexyl bromide (2°) + KCN → SN2 → stereochemistry of product?',
    fs:'Cyclic SN2',
    b:'SN2 → back-side attack → inversion → cis-4-methylcyclohexyl cyanide (the Nu comes in from opposite face to Br)',
    bs:'',
    n:'★ PYQ type — SN2 on ring always gives inversion relative to original substituent' },

  // ══════════════════════════════════════════
  // AMBIDENT NUCLEOPHILES (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'sn-ambident', cl:'c-org-sn2',
    f:'R–X + KCN → ? vs R–X + AgCN → ? Why different?',
    fs:'Ambident nucleophile: CN⁻',
    b:'KCN (ionic → C-attack via :C≡N:⁻) → R–CN (alkyl cyanide / nitrile)\nAgCN (covalent → N-attack via Ag–C≡N:) → R–NC (alkyl isocyanide / carbylamine)',
    bs:'Harder nucleophile (C) attacks in ionic; softer (N end) in covalent',
    n:'★ PYQ every few years — know BOTH products' },

  { cat:'sn-ambident', cl:'c-org-sn2',
    f:'R–X + KNO₂ → ? vs R–X + AgNO₂ → ? Why different?',
    fs:'Ambident nucleophile: NO₂⁻',
    b:'KNO₂ (ionic → O-attack via :O–N=O) → R–O–N=O (alkyl nitrite)\nAgNO₂ (covalent → N-attack via Ag–O–N=O) → R–N(=O)O (nitroalkane)',
    bs:'Ionic salt → O-attack; covalent Ag salt → N-attack',
    n:'★ PYQ: alkyl nitrite (R–ONO) vs nitroalkane (R–NO₂) distinction' },

  // ══════════════════════════════════════════
  // NAMED REACTIONS — WURTZ (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'named-wurtz', cl:'c-org-named',
    f:'Wurtz Reaction — reagents, mechanism, limitation with mixed halides',
    fs:'C–C bond formation',
    b:'R–X + 2Na + X–R → R–R + 2NaX\nSolvent: dry ether; X: I > Br > Cl\nMechanism: 2Na → 2Na⁺ + 2e⁻; R–X + 2e⁻ → R⁻ + X⁻; R⁻ (strong Nu) + R–X → R–R (SN2)\nMixed: R–X + R\'–X → R–R + R\'–R\' + R–R\' (statistical mixture)',
    bs:'Only useful for symmetric R–R',
    n:'Intramolecular Wurtz: α,ω-dihalide + Na → cyclic alkane (eg, 1,6-dichlorohexane → cyclohexane)' },

  { cat:'named-wurtz', cl:'c-org-named',
    f:'Wurtz-Fittig vs Fittig vs Ullmann reactions — what do each make?',
    fs:'Variants of Wurtz',
    b:'Wurtz-Fittig: R–Cl + Ar–Cl + Na/ether → R–Ar (alkyl arene)\nFittig: Ar–Cl + Ar–Cl + Na/ether → Ar–Ar (biaryl)\nUllmann: Ar–I + Ar–I + Cu, Δ → Ar–Ar (biaryl)\nEg: PhBr + Na/ether → biphenyl; PhI + Cu,Δ → biphenyl',
    bs:'',
    n:'★ PYQ: Ullmann = Cu catalyst, Fittig = Na, both give Ar–Ar' },

  // ══════════════════════════════════════════
  // WILLIAMSON ETHER SYNTHESIS (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'named-wes', cl:'c-org-named',
    f:'Williamson Ether Synthesis (WES) — mechanism and limitation with 3° R\'–X',
    fs:'Ether synthesis via SN2',
    b:'R–OH + Base → R–O⁻ → + R\'–X (1° or 2°, SN2) → R–O–R\' + X⁻\nIf R\'–X is 3°: E2 elimination occurs instead → alkene product',
    bs:'Use 1° halide for R\'–X in WES',
    n:'★ PYQ: WES always uses 1° alkyl halide — 3° gives elimination' },

  { cat:'named-wes', cl:'c-org-named',
    f:'PhOH + NaOH → PhO⁻Na⁺ + CH₃Cl → ? (product name)',
    fs:'Phenoxide WES',
    b:'Anisole (C₆H₅–O–CH₃)\nMechanism: phenol → phenoxide (base) → SN2 with CH₃Cl → methyl phenyl ether (anisole)',
    bs:'',
    n:'' },

  { cat:'named-wes', cl:'c-org-named',
    f:'CH₃O⁻ + vinyl chloride (CH₂=CH–Cl) → ? and CH₃O⁻ + chlorobenzene → ?',
    fs:'WES limitations',
    b:'Both → No Reaction\nVinyl and aryl halides are inert to SN2 (C–X too strong, no back-side attack)',
    bs:'Also: CH₃O⁻ + bridgehead halide → No Rxn',
    n:'' },

  { cat:'named-wes', cl:'c-org-named',
    f:'Intramolecular WES — what ring sizes form? Give epoxide example.',
    fs:'Ring formation',
    b:'Any halo-alcohol with base → intramolecular SN2 → cyclic ether\nEg: 4-bromobutanol + base → tetrahydropyran (6-ring)\nEg: Br–CH₂–CH₂–OH + NaOH → epoxide (3-membered ring) via O-attack on C bearing Br',
    bs:'',
    n:'' },

  // ══════════════════════════════════════════
  // FINKELSTEIN AND SWARTZ (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'named-finkelstein', cl:'c-org-named',
    f:'Finkelstein Reaction — reagent, mechanism, driving force',
    fs:'Halide exchange → iodide',
    b:'R–X (X=Cl,Br) + NaI + acetone → R–I + NaCl/NaBr↓\nMechanism: SN2\nDriving force: NaCl and NaBr are insoluble in acetone → precipitate → equilibrium shifts forward',
    bs:'Product: always R–I (iodide)',
    n:'★ PYQ: Finkelstein gives Walden inversion (SN2)' },

  { cat:'named-finkelstein', cl:'c-org-named',
    f:'Swartz Reaction — reagent, product',
    fs:'Halide exchange → fluoride',
    b:'R–X (X=Cl,Br,I) + AgF → R–F + AgX↓\nDriving force: AgX precipitates',
    bs:'Product: always R–F (fluoride)',
    n:'' },

  // ══════════════════════════════════════════
  // AMMONOLYSIS (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'named-ammonolysis', cl:'c-org-named',
    f:'R–X (1°, 2°) + excess NH₃, Δ → all products',
    fs:'Ammonolysis — all 4 products',
    b:'R–NH₂ (1° amine) + R₂NH (2° amine) + R₃N (3° amine) + [R₄N⁺]X⁻ (quaternary ammonium salt)\nWith excess R–X → quaternary salt is major\nWith excess NH₃ → 1° amine is major',
    bs:'3° R–X + NH₃ → E2 elimination → alkene (NOT substitution)',
    n:'★ PYQ: CH₃Cl + excess NH₃ → all four + tetramethylammonium chloride as major when R–X in excess' },

  { cat:'named-ammonolysis', cl:'c-org-named',
    f:'Intramolecular ammonolysis — example',
    fs:'Ring closure via N',
    b:'ω-haloamine + Δ, base → cyclic amine\nEg: 6-iodohexylamine + Δ/base → forms C–N bond intramolecularly → piperidine (6-ring NH)',
    bs:'',
    n:'' },

  // ══════════════════════════════════════════
  // ORGANOMETALLIC REACTIONS (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'named-organometal', cl:'c-org-named',
    f:'R–X + Mg (excess) + dry ether → ? Also: R–X + 2Li → ?',
    fs:'Grignard / organolithium',
    b:'R–X + Mg/ether → R–MgX (Grignard reagent)\nWorks for 1°, 2°, 3° and aryl/alkenyl halides\nR–X + 2Li → R–Li + LiX (organolithium)',
    bs:'δ⁻ on C of R–MgX = strong nucleophile & strong base',
    n:'' },

  { cat:'named-organometal', cl:'c-org-named',
    f:'Gilman\'s reagent (R₂CuLi) + R\'–X → ? Reaction name?',
    fs:'Corey-House synthesis',
    b:'R₂CuLi + R\'–X (SN2) → R–R\' + CuLi (coupling product)\nCorey-House synthesis (C–C bond formation)\nEg: Ph–MgCl + isobutyl chloride → cumene',
    bs:'Works even when Grignard + 3° R–X would eliminate',
    n:'★ PYQ: Gilman = R₂CuLi; Grignard + 3°R–X → E2 instead of SN2' },

  { cat:'named-organometal', cl:'c-org-named',
    f:'gem-dihalide R–CHCl₂ + KOH (aq) → ? and R–CCl₃ + KOH → ?',
    fs:'Hydrolysis of gem-dihalides',
    b:'R–CHCl₂ + KOH(aq) → [R–CH(OH)₂] unstable gem-diol → –H₂O → R–CHO (aldehyde)\nR–CCl₃ + KOH(aq) → [R–C(OH)₃] unstable → R–COOH (carboxylic acid)',
    bs:'gem-diol → dehydration → carbonyl',
    n:'' },

  // ══════════════════════════════════════════
  // REDUCTION OF ALKYL HALIDES (L2 PDF)
  // ══════════════════════════════════════════

  { cat:'named-organometal', cl:'c-org-named',
    f:'Methods to reduce R–X → R–H (dehalogenation)',
    fs:'Reduction',
    b:'1° R–X: Zn + HCl, or Zn–Cu + EtOH, or Fe–Cu–CH₃COOH\n1°, 2° R–X: LiAlH₄\n2°, 3° R–X: NaBH₄\n1°, 2°, 3° R–X: HI + Red P',
    bs:'',
    n:'' },

  // ══════════════════════════════════════════
  // E2 ELIMINATION (L3 PDF)
  // ══════════════════════════════════════════

  { cat:'elimination', cl:'c-org-elim',
    f:'E2 — reagents, mechanism features, regiochemistry, reactivity order',
    fs:'Dehydrohalogenation',
    b:'Reagents: alc. KOH/Δ, RMgX, NH₃+Δ, RO⁻/Δ\nFeatures: T.S. only (no intermediate), anti elimination (H and X must be anti-periplanar), no rearrangement, Saytzeff product major (more substituted alkene)\nReactivity: 3° > 2° > 1°\nLG reactivity: R–I > R–Br > R–Cl > R–F',
    bs:'% Hofmann product ∝ electronegativity of LG (more EN LG → more Hofmann)',
    n:'★ PYQ: anti-elimination → in cyclohexane ring, H and X must be diaxial (trans-diaxial) for E2' },

  { cat:'elimination', cl:'c-org-elim',
    f:'Saytzeff vs Hofmann product — which is major and when?',
    fs:'Regioselectivity of E2',
    b:'Saytzeff (more substituted, more stable alkene) = major with normal bases (EtO⁻, OH⁻)\nHofmann (less substituted alkene) = major with bulky bases (t-BuO⁻, Et₂N⁻)\n% Hofmann ∝ electronegativity of leaving group (F > Cl > Br > I)',
    bs:'',
    n:'★ PYQ: bulky base → Hofmann; small base → Saytzeff' },

  { cat:'elimination', cl:'c-org-elim',
    f:'Ph–CHBr–CHBr–Ph + alc. KOH → intermediate, then + NaNH₂ → final product',
    fs:'Double elimination',
    b:'+ alc. KOH (–HBr) → Ph–CH=C(Br)–Ph (vinyl bromide)\n+ NaNH₂ (–HBr) → Ph–C≡C–Ph (diphenylacetylene)\nBoth steps are E2 anti elimination',
    bs:'',
    n:'★ PYQ: two successive E2 eliminations to make alkyne' },

  { cat:'elimination', cl:'c-org-elim',
    f:'1,3,5-tribromocyclohexane + excess alc. KOH/NaOH → product (three E2 steps)',
    fs:'',
    b:'→ benzene (3 × HBr eliminated)\nEach E2 requires anti-periplanar H and Br — possible in this conformation',
    bs:'',
    n:'' },

  { cat:'elimination', cl:'c-org-elim',
    f:'E2 anti elimination on a ring: what conformation must H and X be in?',
    fs:'Ring E2 stereo',
    b:'H and X must be trans-diaxial (anti-periplanar, dihedral angle 180°)\nFor cyclohexane: requires chair conformation where both H (β) and X (α) are axial',
    bs:'cis-4-bromocyclohexanol → E2 → impossible (H and Br can\'t both go axial)\ntrans isomer → E2 → alkene',
    n:'★ PYQ: trans-diaxial requirement in cyclohexane E2 is a high-frequency JEE Adv topic' },

  // ══════════════════════════════════════════
  // ARYL HALIDE PREPARATION (L3 PDF)
  // ══════════════════════════════════════════

  { cat:'aryl-prep', cl:'c-org-aryl',
    f:'Direct halogenation of benzene — three reagent systems for Cl, Br, I',
    fs:'Aryl halide formation',
    b:'Cl: Cl₂ + AlCl₃ → Cl⁺ + AlCl₄⁻ → chlorobenzene (SEAr)\nBr: Br₂ + AlBr₃ or Br₂ + FeBr₃ or Br₂ + Fe + Δ → bromobenzene\nI: I₂ + HNO₃ → iodobenzene',
    bs:'All via SEAr mechanism (not SFR)',
    n:'' },

  { cat:'aryl-prep', cl:'c-org-aryl',
    f:'Sandmeyer\'s Reaction — all 5 products from benzenediazonium chloride',
    fs:'Diazonium → aryl halide',
    b:'[C₆H₅–N₂⁺]Cl⁻ +:\n(i) HCl + Cu + Δ → C₆H₅Cl (Gattermann)\n(ii) HBr + Cu + Δ → C₆H₅Br (Gattermann)\n(iii) HCl + Cu₂Cl₂ + Δ → C₆H₅Cl (Sandmeyer)\n(iv) HBr + Cu₂Br₂ + Δ → C₆H₅Br (Sandmeyer)\n(v) HCN + CuCN + Δ → C₆H₅CN (Sandmeyer)',
    bs:'Gattermann uses Cu (metal); Sandmeyer uses Cu₂X₂ (cuprous halide)',
    n:'★ PYQ: distinguish Gattermann (Cu metal) from Sandmeyer (Cu₂X₂)' },

  { cat:'aryl-prep', cl:'c-org-aryl',
    f:'Diazonium salt + KI + Δ → ? and diazonium + HBF₄ + Δ → ?',
    fs:'Other diazonium reactions',
    b:'+ KI + Δ → ArI + N₂↑ (iodobenzene)\n+ HBF₄ + Δ → ArF + HCl + N₂ + BF₃ (Balz-Schiemann Reaction → fluorobenzene)',
    bs:'',
    n:'★ PYQ: Balz-Schiemann is the ONLY good route to ArF' },

  { cat:'aryl-prep', cl:'c-org-aryl',
    f:'Dow\'s Process for chlorobenzene → phenol',
    fs:'Industrial importance',
    b:'C₆H₅Cl + conc. NaOH (320°C, 300 atm pressure) → C₆H₅ONa → + H⁺ → C₆H₅OH (phenol)',
    bs:'Harsh conditions needed — aryl halides are inert to normal nucleophiles',
    n:'NaNH₂ route: C₆H₅Cl + NaNH₂ + NH₃ → aniline (via benzyne intermediate — VERY high PYQ)' },

  { cat:'aryl-prep', cl:'c-org-aryl',
    f:'PhOH + PCl₅ → ? (aryl halide from phenol)',
    fs:'Phenol → aryl halide',
    b:'C₆H₅Cl + HCl + O=P(OPh)₃ (triphenyl phosphate)\nNote: PCl₃ + 3PhOH → O=PCl + 3HCl → O=P(OPh)₃',
    bs:'Less common route',
    n:'' },

  { cat:'aryl-prep', cl:'c-org-aryl',
    f:'Hunsdiecker reaction for aryl halides — starting material, reagents',
    fs:'Aryl Hunsdiecker',
    b:'Ar–COOAg + Br₂/I₂ + CCl₄ → Ar–Br / Ar–I + CO₂ + AgBr / AgI\nEg: C₆H₅CN + H₃O⁺/Δ → C₆H₅COOH + AgOH → C₆H₅COOAg + Br₂/CCl₄ → C₆H₅Br',
    bs:'One carbon shorter',
    n:'' },

  // ══════════════════════════════════════════
  // ARYL HALIDE REACTIONS (L3 PDF)
  // ══════════════════════════════════════════

  { cat:'aryl-sn2', cl:'c-org-aryl',
    f:'Why do aryl halides generally NOT undergo SN2? When does ArSN2 occur?',
    fs:'ArSN2 reactivity',
    b:'Normally NO SN2: π electron density around ring repels Nu⁻, and C–X bond has partial double bond character (resonance)\nARSN2 OCCURS when: strong EWG (–NO₂) at ortho or para positions activate the ring by withdrawing electrons from C–X\nMechanism: Meisenheimer complex intermediate (addition-elimination)\nReactivity w.r.t. LG: Ar–F > Ar–Cl > Ar–Br > Ar–I (opposite to SN2 of alkyl!)',
    bs:'–NO₂ at o/p stabilises Meisenheimer complex',
    n:'★ PYQ: ArSN2 LG order is REVERSED from alkyl SN2 — Ar–F most reactive' },

  { cat:'aryl-sn2', cl:'c-org-aryl',
    f:'p-ClC₆H₄–NO₂ + NaOH (conc., 150°C) → ? and 2,4-dinitro-F-benzene + Nu → ?',
    fs:'ArSN2 examples',
    b:'p-ClC₆H₄–NO₂ + conc. NaOH/150°C → p-NO₂–C₆H₄–ONa → H⁺ → p-nitrophenol\n2,4-(NO₂)₂C₆H₃F + EtS⁻ (1 mol) → F replaced selectively (para-NO₂ activates F)\nNote: 2,4,6-trinitro-Cl-benzene + H₂O → picric acid (2,4,6-trinitrophenol)',
    bs:'',
    n:'★ PYQ: fluorine is most reactive LG in ArSN2 — do not confuse with alkyl halides' },

  { cat:'aryl-eas', cl:'c-org-aryl',
    f:'Halogens on benzene ring in EAS — activating or deactivating? Directing effect? Why the paradox?',
    fs:'X as substituent in EAS',
    b:'Deactivating (–I effect > +M): overall ring deactivated → EAS slower than benzene\nORTHO-PARA directing (+M effect dominates direction): lone pairs on X donated into ring → o,p positions electron-rich\nParadox: X deactivates BUT directs o/p\nMajor: para > ortho (steric)',
    bs:'',
    n:'★ PYQ: halogen on ring = deactivating o,p-director — this paradox is tested constantly' },

  { cat:'aryl-eas', cl:'c-org-aryl',
    f:'Chlorobenzene + conc. HNO₃ + H₂SO₄ → major product(s)',
    fs:'Nitration of chlorobenzene',
    b:'p-chloronitrobenzene (major) + o-chloronitrobenzene (minor)\nX is o,p-director → para preferred over ortho (steric)',
    bs:'',
    n:'' },

  { cat:'aryl-eas', cl:'c-org-aryl',
    f:'Rules for EAS when ring has TWO substituents — 4 priority rules',
    fs:'Disubstituted ring EAS',
    b:'① Activating > deactivating group (activating group controls)\n② o,p-director > meta director\n③ More activating > less activating\n④ More deactivating > less deactivating (when both are meta-directors)',
    bs:'',
    n:'★ PYQ: draw out the ring and apply hierarchy — always identify which group is stronger' },

  { cat:'aryl-named', cl:'c-org-aryl',
    f:'Gattermann-Koch formylation of benzene — reagents and product',
    fs:'Arene formylation',
    b:'Benzene + CO + HCl + AlCl₃ → benzaldehyde (C₆H₅CHO)\nElectrophile: H–C≡O⁺ (formyl cation, from CO + H⁺)',
    bs:'Gattermann-Koch uses CO gas; Gattermann formylation uses HCN + HCl + AlCl₃',
    n:'★ PYQ: Gattermann-Koch → benzaldehyde; Gattermann formylation → also benzaldehyde (via imine hydrolysis)' },

  { cat:'aryl-named', cl:'c-org-aryl',
    f:'Formation of DDT from chlorobenzene',
    fs:'Industrial synthesis',
    b:'2 × chlorobenzene + CCl₃CHO (chloral) + conc. H₂SO₄ + Δ → DDT (p,p\'-dichlorodiphenyl trichloroethane) + H₂O\nFull name: p,p\'-Dichloro Diphenyl Trichloro ethane',
    bs:'',
    n:'' },

  { cat:'aryl-named', cl:'c-org-aryl',
    f:'Reduction of aryl halide (Ar–X) → benzene',
    fs:'Ar–X → Ar–H',
    b:'Ar–X (eg, chlorobenzene) + Ni–Al + NaOH → benzene\nOr: Ar–X + H₂ / Pd (hydrogenolysis)',
    bs:'',
    n:'' },

];
