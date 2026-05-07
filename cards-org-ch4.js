window.LABELS = {
  'reduction': 'Reduction',
  'oxidation': 'Oxidation',
  'hydrolysis':'Hydrolysis',
};

window.FILTER_GROUPS = [
  { label: 'Reduction',  cats: ['reduction'] },
  { label: 'Oxidation',  cats: ['oxidation'] },
  { label: 'Hydrolysis', cats: ['hydrolysis'] },
];

window.CARDS = [

  // ══ REDUCTION ══

  { cat:'reduction', cl:'c-org-a',
    f:'Rosenmund\'s catalyst (H₂/Pd/BaSO₄):\nWhat does it reduce and to what?',
    fs:'Heterogeneous / poisoned catalyst',
    b:'Acid chloride (R-COCl) → Aldehyde (R-CHO)\nAlkyne → cis-Alkene (syn addition)\nDoes NOT reduce benzene ring or simple alkene',
    bs:'',
    n:'Pd poisoned by BaSO₄ (and quinoline) — stops at aldehyde/alkene stage.' },

  { cat:'reduction', cl:'c-org-a',
    f:'Stephen\'s reduction:\nR-C≡N → ? Reagents?',
    fs:'Partial reduction of nitrile',
    b:'R-C≡N + SnCl₂/HCl (acidified stannous chloride) + H₂O → R-CHO (Aldehyde)',
    bs:'Compare: LiAlH₄ → R-CH₂NH₂ (1° amine, complete reduction)',
    n:'Stephen\'s = partial reduction stops at aldehyde via imine intermediate.' },

  { cat:'reduction', cl:'c-org-a',
    f:'Birch reduction of benzene ring:\nEDG vs EWG — which positions reduced?\nReagents?',
    fs:'Metal/proton reduction of arene',
    b:'Reagent: Na/Li in liquid NH₃ (Na/NH₃)\nEDG on ring: reduction at ortho positions (unconjugated diene, EDG on sp³ carbons)\nEWG on ring: reduction at ipso positions (double bonds remain conjugated with EWG)',
    bs:'Does NOT work on terminal alkynes',
    n:'Birch = 1,4-reduction of arene. EDG-substituted ring retains substituent on unhydrogenated C.' },

  { cat:'reduction', cl:'c-org-a',
    f:'Meerwein–Pondorf–Verley (MPV) reduction:\nWhat does it do? Reagents?',
    fs:'Transfer hydrogenation',
    b:'Ketone/aldehyde → alcohol\nReagent: isopropyl alcohol + aluminium isopropoxide [Al(OPr-i)₃]\nReversal = Oppenauer oxidation',
    bs:'',
    n:'Selective — only reduces C=O, not C=C. Green method. Oppenauer = reverse (oxidises alcohol to ketone).' },

  { cat:'reduction', cl:'c-org-a',
    f:'Reduction with Red P + HI:\nWhich functional groups → alkane?',
    fs:'',
    b:'Aldehyde, Ketone, Acid chloride,\nAcid anhydride, Ester → all → Alkane\nR-OH → R-H\nR-Cl → R-H',
    bs:'',
    b:'Strong reducing agent — completely deoxygenates',
    n:'' },

  { cat:'reduction', cl:'c-org-a',
    f:'Bouveault–Blanc reduction:\nCyanide → ?\nEster → ?\nAcid halide → ?',
    fs:'Na in alcohol (EtOH)',
    b:'Cyanide (R-CN) → 1° Amine (R-CH₂NH₂)\nEster → 1° Alcohol\nAcid halide → 1° Alcohol',
    bs:'Reagent: Na/EtOH (metal/proton)',
    n:'' },

  { cat:'reduction', cl:'c-org-a',
    f:'LiAlH₄ vs NaBH₄ — key differences?',
    fs:'',
    b:'LiAlH₄: reduces almost everything (C=O, COOH, ester, amide, nitrile, nitro, isocyanide)\nNaBH₄: mild — only reduces C=O (aldehyde, ketone) and acid chloride\nNeither reduces isolated alkene/alkyne/benzene ring\nLiAlH₄ reacts with H₂O violently; NaBH₄ is safe with water/protic solvents',
    bs:'',
    n:'Selectivity: if C=O and C=C both present → NaBH₄ selectively reduces only C=O.' },

  // ══ OXIDATION ══

  { cat:'oxidation', cl:'c-org-b',
    f:'Chemical oxidation of tertiary C-H:\nReagent and product?',
    fs:'Alkane oxidation',
    b:'Tertiary C-H only: KMnO₄ or K₂Cr₂O₇ → 3° alcohol (tertiary H most reactive)',
    bs:'Primary and secondary C-H: not easily oxidised by these reagents',
    n:'Radical mechanism. Only tertiary H reacts because 3° radical most stable.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Baeyer\'s reagent (cold dil. alkaline KMnO₄):\nAlkene → ?\nAlkyne → ?',
    fs:'Syn dihydroxylation',
    b:'Alkene → vicinal diol (cis-diol, syn addition of 2 OH)\nAlkyne → diketone (α-diketone)\nKMnO₄ decolorises (purple → colourless) = test for unsaturation',
    bs:'',
    n:'Cold/dilute/alkaline = gentle = stops at diol. Hot/conc./acidic = cleavage.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Hot conc. acidic KMnO₄ oxidative cleavage:\nRCH=CH₂ → ?\nRCH=CHR′ → ?\nR₂C=CH₂ → ?',
    fs:'',
    b:'R-CH=CH₂ → R-COOH + CO₂ + H₂O\nR-CH=CH-R′ → R-COOH + R′-COOH\nR-CH=C(R′)(R″) → R-COOH + R′-CO-R″ (ketone)\nR₂C=CH₂ → R₁-CO-R₂ (ketone)',
    bs:'Internal alkyne → 2 RCOOH',
    n:'Terminal =CH₂ → CO₂ + H₂O. Internal =CH- → RCOOH. =CR₂ → ketone. Alkyne → RCOOH.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Oxidation with peracid (mCPBA/RCOOH):\nAlkene → ?\nThen H₃O⁺ → ?',
    fs:'Epoxidation',
    b:'Alkene + RCOOOH → Epoxide (syn addition, retention)\nEpoxide + H₃O⁺ → trans-diol (anti-Markovnikov ring opening)\nMore substituted alkene reacts faster',
    bs:'',
    n:'Peracid → epoxide (syn) → acid ring opening → anti-addition overall → trans-diol.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Periodate (IO₄⁻/HIO₄) oxidation:\nWhat does it cleave?',
    fs:'',
    b:'Cleaves vicinal diol (cis or trans) between the two OH carbons\ncis-diol → RCHO + R′CHO (aldehydes)\nIf one C has 2 substituents → ketone\nUsed to locate double bond position via product analysis',
    bs:'',
    n:'Periodate cleaves C-C bond of 1,2-diol. Compare OsO₄ then IO₄⁻ = complete oxidative cleavage.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Wacker process:\nCH₂=CH₂ + H₂O → ?\nReagent?',
    fs:'Industrial oxidation',
    b:'CH₂=CH₂ + H₂O → CH₃-CHO (acetaldehyde)\nR-CH=CH₂ + H₂O → R-CO-CH₃ (methyl ketone)\nReagent: PdCl₂ + catalytic CuCl₂ + air/O₂',
    bs:'PdCl₂ → Pd (reduced); CuCl₂ reoxidises Pd back to PdCl₂ (catalytic)',
    n:'Markovnikov addition of water to alkene, oxidation not reduction. Industrial method for acetaldehyde.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Oxo process (hydroformylation/carbonylation):\nReaction and reagent?',
    fs:'',
    b:'R-CH=CH₂ + CO + H₂ → R-CH₂-CH₂-CHO (aldehyde, anti-Markovnikov)\nReagent: water gas (H₂ + CO) + cobalt carbonyl [Co₂(CO)₈] + high T & P',
    bs:'',
    n:'Adds one carbon (CHO group) to terminal alkene. Used industrially for aldehydes → alcohols.' },

  { cat:'oxidation', cl:'c-org-b',
    f:'Oxidation of aldehyde (RCHO) with:\nTollens, Fehling, Benedict, Schiff\'s reagents?',
    fs:'Tests that distinguish aldehyde from ketone',
    b:"Tollens' (aq. AgNO₃/NH₃): RCHO → RCOOH + Ag↓ (silver mirror)\nFehling's/Benedict's (Cu²⁺ complex): RCHO → RCOOH + Cu₂O↓ (brick-red)\nSchiff's (p-rosaniline/SO₂): RCHO → pink/magenta colour\nWith HgCl₂: RCHO → RCOOH + Hg₂Cl₂↓ or Hg↓ (grey ppt)",
    bs:'Ketones do NOT give these tests (cannot be easily oxidised)',
    n:'Aromatic aldehydes (ArCHO) do NOT give Fehling/Benedict test (too hindered for Cu²⁺).' },

  // ══ HYDROLYSIS ══

  { cat:'hydrolysis', cl:'c-org-c',
    f:'Hydrolysis of ester:\nAcid vs alkaline conditions → products?',
    fs:'',
    b:'Acid (dil. H₂SO₄/HCl): R-COOR′ + H₂O ⇌ R-COOH + R′OH (reversible)\nAlkaline (NaOH/KOH, saponification): R-COOR′ + NaOH → R-COO⁻Na⁺ + R′OH (irreversible — drives completion)',
    bs:'',
    n:'Saponification is irreversible because carboxylate anion (RCOO⁻) cannot be attacked by alcohol.' },

  { cat:'hydrolysis', cl:'c-org-c',
    f:'Hydrolysis of acid anhydride + H₂O → ?\nAcid chloride + H₂O → ?\nAcid amide + H₂O → ?',
    fs:'',
    b:'Anhydride: R-CO-O-CO-R′ + H₂O → R-COOH + R′-COOH\nAcid chloride: R-COCl + H₂O → R-COOH + HCl\nAmide: R-CO-NH₂ + H₂O → R-COOH + NH₃',
    bs:'Reactivity towards hydrolysis: acid chloride > anhydride > ester > amide',
    n:'Amide is hardest to hydrolyse (requires strong acid/base + heat). Acid chloride = fastest (violent).' },

  { cat:'hydrolysis', cl:'c-org-c',
    f:'Hydrolysis of nitrile (R-CN) + H₂O → ?\nConditions?',
    fs:'',
    b:'R-CN + H₂O → R-CONH₂ (amide) [partial, acid/base]\nR-CN + H₂O (excess, acid/base) → R-COOH + NH₃',
    bs:'',
    n:'Nitrile → amide → carboxylic acid (stepwise). Often stops at amide with controlled hydrolysis.' },

  { cat:'hydrolysis', cl:'c-org-c',
    f:'Hydrolysis of gem-dihalide → aldehyde/ketone:\nR-CHCl₂ + aq. KOH → ?',
    fs:'',
    b:'R-CHCl₂ + aq. KOH → R-CH(OH)₂ (geminal diol) → R-CHO + H₂O\nR-CCl₂-R′ + aq. KOH → R-CO-R′ (ketone)',
    bs:'ArCH(Cl₂) + H₂O → ArCHO (makes benzaldehyde from benzal chloride)',
    n:'gem-diol (R-CH(OH)₂) is unstable → eliminates H₂O → carbonyl.' },

];
