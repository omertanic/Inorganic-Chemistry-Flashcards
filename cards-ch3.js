window.LABELS = {
  // Group 13
  'b13-overview':  'Gr 13 Overview',
  'b13-boron':     'Boron',
  'b13-borax':     'Borax',
  'b13-boricacid': 'Boric Acid',
  'b13-diborane':  'Diborane',
  'b13-aluminium': 'Aluminium Cmpds',
  // Group 14
  'b14-overview':  'Gr 14 Overview',
  'b14-carbon':    'Carbon (CO/CO₂)',
  'b14-silicon':   'Silicon Cmpds',
  'b14-tinlead':   'Sn/Pb Cmpds',
  // Group 15
  'b15-overview':  'Gr 15 Overview',
  'b15-nitrogen':  'N₂ & NH₃',
  'b15-noxides':   'Oxides of N',
  'b15-hno3':      'HNO₃',
  'b15-phosphorus':'Phosphorus',
  'b15-phalides':  'P Halides',
  'b15-poxyacids': 'P Oxyacids',
  // Group 16
  'b16-overview':  'Gr 16 Overview',
  'b16-oxygen':    'O₂ & O₃',
  'b16-sulphur':   'Sulphur Cmpds',
  'b16-h2o2':      'H₂O₂',
  // Group 17
  'b17-overview':  'Gr 17 Overview',
  'b17-fluorine':  'F₂',
  'b17-chlorine':  'Cl₂',
  'b17-halogens':  'HX & Oxyacids',
  'b17-interhal':  'Interhalogens',
  // Group 18
  'b18-noble':     'Noble Gases',
  'b18-xe':        'Xe Compounds',
};

window.FILTER_GROUPS = [
  { label:'Gr 13 — B/Al', cats:['b13-overview','b13-boron','b13-borax','b13-boricacid','b13-diborane','b13-aluminium'] },
  { label:'Gr 14 — C/Si', cats:['b14-overview','b14-carbon','b14-silicon','b14-tinlead'] },
  { label:'Gr 15 — N/P',  cats:['b15-overview','b15-nitrogen','b15-noxides','b15-hno3','b15-phosphorus','b15-phalides','b15-poxyacids'] },
  { label:'Gr 16 — O/S',  cats:['b16-overview','b16-oxygen','b16-sulphur','b16-h2o2'] },
  { label:'Gr 17 — X₂',  cats:['b17-overview','b17-fluorine','b17-chlorine','b17-halogens','b17-interhal'] },
  { label:'Gr 18 — Xe',  cats:['b18-noble','b18-xe'] },
];

window.CARDS = [

  // ══════════════════════════════════════════
  // GROUP 13 — OVERVIEW
  // ══════════════════════════════════════════
  { cat:'b13-overview', cl:'c-pb13',
    f:'Group 13 e⁻ config, common OS & inert pair effect trend?', fs:'B, Al, Ga, In, Tl',
    b:'ns²np¹; Group OS = +3\nInert pair: +1 OS stability increases B→Tl\nTl most stable in +1 (Tl⁺ > Tl³⁺)',
    bs:'Higher OS less stable down the group', n:'TlI₃ is actually Tl⁺[I₃]⁻ — Tl in +1, not +3' , imp:true },

  { cat:'b13-overview', cl:'c-pb13',
    f:'Why is Ga < Al in atomic radius (exception)?', fs:'Gr 13 atomic size trend',
    b:'Ga has poor shielding by 3d electrons → higher effective nuclear charge → smaller radius than expected',
    bs:'Same reason: IE(Ga) > IE(Al)', n:'IE trend: B > Al < Ga > In < Tl (irregular)' },

  { cat:'b13-overview', cl:'c-pb13',
    f:'Nature of Gr 13 oxides (E₂O₃) — acid/base trend?', fs:'B₂O₃ → Tl₂O₃',
    b:'B₂O₃: Acidic\nAl₂O₃, Ga₂O₃: Amphoteric\nIn₂O₃, Tl₂O₃: Basic',
    bs:'Acidic → Basic down group', n:'' , imp:true },

  { cat:'b13-overview', cl:'c-pb13',
    f:'Max covalence of B vs Al — why different?', fs:'Octet expansion',
    b:'B: max covalence = 4 (no d-orbitals in valence shell)\nAl: max covalence = 6 (has d-orbitals)\nBF₃ + F⁻ → [BF₄]⁻ (4)\nAlF₃ + 3F⁻ → [AlF₆]³⁻ (6)',
    bs:'', n:'2nd period p-block elements cannot expand octet' },

  { cat:'b13-overview', cl:'c-pb13',
    f:'2E + 3X₂ → ? (Gr 13 halide general rxn) Exception?', fs:'X = F,Cl,Br,I',
    b:'2E + 3X₂ → 2EX₃\nException: TlI₃ is not Tl³⁺ compound — exists as Tl⁺[I₃]⁻',
    bs:'Inert pair effect: Tl prefers +1', n:'' , imp:true },

  { cat:'b13-overview', cl:'c-pb13',
    f:'B + HCl(aq) → ? vs B + conc. hot HNO₃ → ?', fs:'Boron with acids',
    b:'B + HCl(aq) → No reaction (non-oxidizing acid)\nB + conc/hot HNO₃/H₂SO₄ → H₃BO₃ + NO₂↑/SO₂↑',
    bs:'Boron reacts only with oxidising acids', n:'' },

  { cat:'b13-overview', cl:'c-pb13',
    f:'Al + aq NaOH + H₂O → ? (amphoteric reaction)', fs:'',
    b:'2Al + 2NaOH(aq) + 2H₂O → 2NaAlO₂(aq) + 3H₂↑\n(Sodium meta-aluminate)',
    bs:'', n:'Al is passive in conc HNO₃ (protective oxide film)' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 13 — BORON
  // ══════════════════════════════════════════
  { cat:'b13-boron', cl:'c-pb13',
    f:'Boron preparation: from borax (step by step)?', fs:'',
    b:'Na₂B₄O₇ + 2HCl + 5H₂O → 4H₃BO₃ + 2NaCl\n2H₃BO₃ → B₂O₃ + 3H₂O\nB₂O₃ + 3Mg → 2B + 3MgO',
    bs:'', n:'Van Arkels method: 2BI₃ → 2B + 3I₂↑ (purest B, red hot W/Ta)' },

  { cat:'b13-boron', cl:'c-pb13',
    f:'BCl₃ vs AlCl₃ — which dimerises and why?', fs:'Trihalide dimerization',
    b:'AlCl₃ dimerises → Al₂Cl₆ (chloro-bridged, coordinate bonds)\nBCl₃/BF₃/BBr₃/BI₃ do NOT dimerize — halogen lone pairs cause steric repulsion around tiny B atom',
    bs:'', n:'BCl₃ also has partial π backbonding from Cl, reducing Lewis acidity' , imp:true },

  { cat:'b13-boron', cl:'c-pb13',
    f:'BCl₃ + 3H₂O → ? vs hydrolysis of AlCl₃?', fs:'Trihalide hydrolysis',
    b:'BCl₃ + 3H₂O → H₃BO₃ + 3HCl↑\nAlCl₃ aqueous: [Al(H₂O)₆]³⁺ + 3Cl⁻ (no simple Al(OH)₃ due to higher covalence)',
    bs:'B limited covalence = 4 → no [B(OH)₄(H₂O)₂]⁻ type species', n:'' , imp:true },

  { cat:'b13-boron', cl:'c-pb13',
    f:'Lewis acidity order of boron trihalides?', fs:'BF₃ vs BCl₃ vs BBr₃ vs BI₃',
    b:'Lewis acidity: BI₃ > BBr₃ > BCl₃ > BF₃\nSmaller halogens (F) do more pπ-pπ back donation → reduce e⁻ deficiency more\nSo BF₃ is weakest Lewis acid despite F being most electronegative',
    bs:'', n:'BF₃ + NH₃ → F₃B←NH₃ (adduct; B: sp² → sp³)' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 13 — BORAX
  // ══════════════════════════════════════════
  { cat:'b13-borax', cl:'c-pb13',
    f:'Borax structure and true formula?', fs:'Na₂B₄O₇·10H₂O',
    b:'True: 2Na⁺[B₄O₅(OH)₄]²⁻·8H₂O\nAnion has 2 sp² B atoms + 2 sp³ B atoms\nForms cyclic B-O-B structure with OH groups',
    bs:'', n:'' , imp:true },

  { cat:'b13-borax', cl:'c-pb13',
    f:'Borax bead test — heating steps and colored beads?', fs:'Na₂B₄O₇·10H₂O on heating',
    b:'Step 1: Na₂B₄O₇·10H₂O → Na₂B₄O₇ + 10H₂O\nStep 2: Na₂B₄O₇ → 2NaBO₂ + B₂O₃ (transparent glass bead)\nCuO + B₂O₃ → Cu(BO₂)₂ (Blue bead)\nCoO + B₂O₃ → Co(BO₂)₂ (Blue bead)',
    bs:'Bead = NaBO₂ + B₂O₃ glass', n:'Also used for Cu²⁺, Ni²⁺, Fe³⁺ etc.' , imp:true },

  { cat:'b13-borax', cl:'c-pb13',
    f:'Borax as primary standard — mole ratio with H⁺?', fs:'',
    b:'1 mol borax reacts with 2 mol H⁺\nNa₂B₄O₇ + 7H₂O → 2B(OH)₃ + 2[B(OH)₄]⁻\n2[B(OH)₄]⁻ + 2H⁺ → 2B(OH)₃ + 2H₂O',
    bs:'Aqueous borax is a buffer', n:'NaBO₂ + H₂O₂ + H₂O → sodium peroxoborate (brightener in washing powders)' },

  // ══════════════════════════════════════════
  // GROUP 13 — BORIC ACID
  // ══════════════════════════════════════════
  { cat:'b13-boricacid', cl:'c-pb13',
    f:'H₃BO₃ — is it a protonic or Lewis acid? Equation?', fs:'Boric acid, pKa ≈ 9.25',
    b:'It is a Lewis acid (NOT protonic)\nB(OH)₃ + H₂O ⇌ [B(OH)₄]⁻ + H⁺\nAccepts OH⁻ from water, does not donate H⁺ directly',
    bs:'Weak monobasic, pKa ≈ 9.25', n:'Cannot be titrated directly with NaOH — add cis-1,2-diol (mannitol, glycerol) to sharpen endpoint' , imp:true },

  { cat:'b13-boricacid', cl:'c-pb13',
    f:'Heating H₃BO₃ stepwise → products?', fs:'',
    b:'H₃BO₃ →(370K)→ HBO₂ (metaboric acid)\nHBO₂ →(Δ)→ B₂O₃ (boric anhydride)',
    bs:'', n:'' },

  { cat:'b13-boricacid', cl:'c-pb13',
    f:'H₃BO₃ + 3C₂H₅OH →? Test for borate?', fs:'Reaction with alcohol',
    b:'H₃BO₃ + 3C₂H₅OH → B(OC₂H₅)₃ + 3H₂O\nEthyl borate burns with a green-edged flame → qualitative test for borate ions',
    bs:'', n:'H₃BO₃ + 4HF → HBF₄ + 3H₂O (fluoroboric acid)' , imp:true },

  { cat:'b13-boricacid', cl:'c-pb13',
    f:'Why does BF₃ not undergo complete hydrolysis?', fs:'',
    b:'BF₃ + 3H₂O → H₃BO₃ + 3HF (partial)\n3HF + 3BF₃ → 3HBF₄ (fluoroboric acid formed)\nHF partially re-reacts with BF₃ instead of completing hydrolysis',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // GROUP 13 — DIBORANE
  // ══════════════════════════════════════════
  { cat:'b13-diborane', cl:'c-pb13',
    f:'Diborane preparation — lab and industrial methods?', fs:'B₂H₆',
    b:'Lab: 2NaBH₄ + I₂ →(diglyme)→ B₂H₆ + 2NaI + H₂↑\nIndustrial: 2BF₃ + 6NaH →(450K)→ B₂H₆ + 6NaF\nAlso: 2BF₃ + 6LiAlH₄ →(Et₂O)→ B₂H₆ + 6LiF + 2AlF₃',
    bs:'', n:'' , imp:true },

  { cat:'b13-diborane', cl:'c-pb13',
    f:'B₂H₆ structure — types of bonds?', fs:'Banana bonds',
    b:'4 terminal B-H: 2c-2e bonds\n2 bridging B-H-B: 3c-2e bonds (banana bonds)\nOverall: B-H-B bridge stronger than terminal B-H',
    bs:'Electron-deficient molecule', n:'BnHn+4 series (e.g. B₂H₆); BnHn+6 series (e.g. B₄H₁₀)' , imp:true },

  { cat:'b13-diborane', cl:'c-pb13',
    f:'B₂H₆ + larger amines (R₃N) → ? vs smaller amines (NH₃) → ?', fs:'Lewis base cleavage of B₂H₆',
    b:'Large amines (R₃N, pyridine): homolytic (symmetrical) cleavage\nB₂H₆ + 2NR₃ → 2BH₃·NR₃ (adducts)\nSmall amines (NH₃, CH₃NH₂): unsymmetrical cleavage\nB₂H₆ + 2NH₃ → [BH₂(NH₃)₂]⁺[BH₄]⁻ (ionic)',
    bs:'', n:'[BH₂(NH₃)₂]⁺[BH₄]⁻ + H₂O → H₃BO₃ + NH₃↑ + Borazine (B₃N₃H₆) + H₂↑' },

  { cat:'b13-diborane', cl:'c-pb13',
    f:'B₂H₆ + H₂O → ? B₂H₆ + 2H⁻ → ? B₂H₆ + 2CO → ?', fs:'Key reactions of diborane',
    b:'B₂H₆ + 6H₂O → 2H₃BO₃ + 6H₂↑\nB₂H₆ + 2H⁻ → 2BH₄⁻ (borohydride)\nB₂H₆ + 2CO → 2BH₃·CO\nB₂H₆ + HCl → B₂H₅Cl + H₂↑ (terminal H replaced)',
    bs:'', n:'Combustion: B₂H₆ + 3O₂ → B₂O₃ + 3H₂O (highly exothermic; used in rockets)' , imp:true },

  { cat:'b13-diborane', cl:'c-pb13',
    f:'Borazine (B₃N₃H₆) — structure and how it forms?', fs:'Inorganic benzene',
    b:'Cyclic structure like benzene with alternating B and N atoms\nH on each B and N\nForms from unsymmetrical cleavage of B₂H₆ with NH₃ (then slow hydrolysis)\nColourless liquid',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 13 — ALUMINIUM COMPOUNDS
  // ══════════════════════════════════════════
  { cat:'b13-aluminium', cl:'c-pb13',
    f:'Important gems of Al₂O₃ — colour and dopant?', fs:'Corundum-based gems',
    b:'Ruby: Red → Cr³⁺\nSapphire: Blue → Fe²⁺/Ti⁴⁺/Cr³⁺\nOriental topaz: Yellow → Fe³⁺\nOriental emerald: Green → Cr³⁺/V³⁺',
    bs:'', n:'α-Al₂O₃ (corundum) = hardest; used to polish glass' },

  { cat:'b13-aluminium', cl:'c-pb13',
    f:'AlCl₃ aqueous — why acidic? Internal hydrolysis on heating?', fs:'',
    b:'AlCl₃ + 6H₂O → [Al(H₂O)₆]³⁺ + 3Cl⁻\n[Al(H₂O)₆]³⁺ + H₂O ⇌ [Al(H₂O)₅(OH)]²⁺ + H₃O⁺ (turns litmus red)\nInternal hydrolysis on heating:\nAlCl₃·6H₂O →(Δ)→ Al₂O₃ + 6HCl↑ + 9H₂O↑',
    bs:'', n:'AlCl₃ + 3NaOH → Al(OH)₃↓; excess NaOH → NaAlO₂ (amphoteric)' },

  { cat:'b13-aluminium', cl:'c-pb13',
    f:'AlCl₃ + 4LiH → ? Uses of AlCl₃?', fs:'',
    b:'AlCl₃ + 4LiH → LiAlH₄ + 3LiCl\nLiAlH₄ = strong reducing agent in organic chemistry\nUses: Friedel-Crafts catalyst; preparing Al compounds',
    bs:'', n:'Anhydrous AlCl₃: 2Al + 3Cl₂ → 2AlCl₃; fumes in moist air (HCl vapours)' },

  { cat:'b13-aluminium', cl:'c-pb13',
    f:'General formula of alums and examples?', fs:'Double salts',
    b:'M₂SO₄·M′₂(SO₄)₃·24H₂O\nM⁺ = K⁺, NH₄⁺ | M′³⁺ = Al³⁺, Cr³⁺, Fe³⁺\nPotash alum: K₂SO₄·Al₂(SO₄)₃·24H₂O\nChrome alum: K₂SO₄·Cr₂(SO₄)₃·24H₂O\nFerric alum: K₂SO₄·Fe₂(SO₄)₃·24H₂O',
    bs:'Uses: water purification, coagulant (blood clotting), mordant in dyeing', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 14 — OVERVIEW
  // ══════════════════════════════════════════
  { cat:'b14-overview', cl:'c-pb14',
    f:'Group 14 e⁻ config, OS, inert pair trend?', fs:'C, Si, Ge, Sn, Pb',
    b:'ns²np²; Group OS = +4\nInert pair: +2 OS stability increases C→Pb\nPb most stable in +2 (Pb²⁺ > Pb⁴⁺)',
    bs:'', n:'IE trend: C > Si > Ge > Sn < Pb (Pb exception: lanthanoid contraction)' },

  { cat:'b14-overview', cl:'c-pb14',
    f:'Catenation order in Gr 14 and why C is best?', fs:'',
    b:'C >> Si > Ge ≈ Sn\nC has strongest C-C bonds → highest catenation\nDecreases down group as bond strength falls',
    bs:'', n:'Fullerenes: pure carbon, no dangling bonds, C60 has 20 hexagons + 12 pentagons, sp² C atoms' , imp:true },

  { cat:'b14-overview', cl:'c-pb14',
    f:'Stability of EX₄ vs EX₂ down Gr 14?', fs:'Tetrahalides vs dihalides',
    b:'EX₄ stability decreases C→Pb (inert pair effect)\nEX₂ stability increases C→Pb\nPbI₄ does not exist: Pb-I bond weak + I⁻ is good R.A. + Pb⁴⁺ is strong O.A. → redox reaction',
    bs:'', n:'SnF₄ and PbF₄ are ionic; all other tetrahalides are covalent' },

  { cat:'b14-overview', cl:'c-pb14',
    f:'CCl₄ + H₂O → ? Why no reaction?', fs:'Hydrolysis of tetrahalides',
    b:'CCl₄ + H₂O → No reaction\nC has no vacant d-orbitals to accept lone pair from water\nSiCl₄ + 4H₂O → H₄SiO₄ + 4HCl (silicic acid)',
    bs:'All tetrachlorides except CCl₄ hydrolyze', n:'' , imp:true },

  { cat:'b14-overview', cl:'c-pb14',
    f:'Nature of Gr 14 oxides — EO₂ and EO trend?', fs:'',
    b:'EO₂: CO₂ (acidic), SiO₂ (acidic), GeO₂ (acidic), SnO₂ (amphoteric), PbO₂ (amphoteric)\nEO: CO (neutral), SiO (unstable), GeO (acidic), SnO (amphoteric), PbO (basic)',
    bs:'', n:'' },

  { cat:'b14-overview', cl:'c-pb14',
    f:'Allotropic forms of carbon — thermodynamic stability order?', fs:'',
    b:'Stability: Graphite > Diamond > Fullerene\nΔHf°(graphite) = 0; ΔHf°(diamond) and fullerene are +ve\nGraphite: soft, conductor along sheet\nDiamond: hardest; sp³\nC₆₀: sp² C, 20 hexagons + 12 pentagons',
    bs:'', n:'α-Sn (grey, diamond structure) ⇌ β-Sn (white metallic) at 13.2°C' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 14 — CARBON: CO & CO₂
  // ══════════════════════════════════════════
  { cat:'b14-carbon', cl:'c-pb14',
    f:'CO preparation — lab, industrial (water gas, producer gas)?', fs:'Carbon monoxide',
    b:'Lab: HCOOH →(conc H₂SO₄, Δ)→ CO + H₂O\nH₂C₂O₄ →(conc H₂SO₄)→ CO + CO₂ + H₂O (1:1)\nWater gas: C + H₂O(steam) → CO + H₂\nProducer gas: 2C + O₂ + N₂ → 2CO + N₂\nK₄[Fe(CN)₆] + conc H₂SO₄ → CO↑',
    bs:'', n:'' , imp:true },

  { cat:'b14-carbon', cl:'c-pb14',
    f:'CO toxicity mechanism + quantitative estimation?', fs:'',
    b:'CO + Hb-O₂ → Hb-CO + O₂\nCarboxyhemoglobin is ~300× more stable than oxyhemoglobin\nEstimation: 5CO + I₂O₅ → 5CO₂ + I₂\nCO absorbed by ammoniacal CuCl',
    bs:'', n:'CO burns with blue flame: 2CO + O₂ → 2CO₂' , imp:true },

  { cat:'b14-carbon', cl:'c-pb14',
    f:'Ni + 4CO → ? What is this reaction used for?', fs:'',
    b:'Ni + 4CO → [Ni(CO)₄] (Nickel tetracarbonyl, liquid)\nMond process — purification of Ni\nPdCl₂ + CO + H₂O → Pd↓ + 2HCl + CO₂ (Pd reduced)',
    bs:'CO: powerful reducing agent (metallurgy of Fe, Zn, Sn)', n:'NaOH(molten) + CO(high pr) → HCOONa; aq NaOH + CO → no reaction' , imp:true },

  { cat:'b14-carbon', cl:'c-pb14',
    f:'CO₂ — greenhouse effect, dry ice, blood buffer?', fs:'Carbon dioxide properties',
    b:'Greenhouse: absorbs IR radiation → raises atmospheric temperature\nDry ice: solid CO₂, sublimes → used to transport perishable food\nBlood buffer: H₂CO₃/HCO₃⁻ maintains pH 7.26–7.42\nSolubility increases with pressure → soft drinks',
    bs:'', n:'6CO₂ + 12H₂O →(hν)→ C₆H₁₂O₆ + 6O₂ + 6H₂O (photosynthesis)' },

  // ══════════════════════════════════════════
  // GROUP 14 — SILICON
  // ══════════════════════════════════════════
  { cat:'b14-silicon', cl:'c-pb14',
    f:'SiO₂ structure and reactions with HF and NaOH?', fs:'Silica',
    b:'3D covalent network; each Si is sp³, tetrahedral; 8-membered rings\nSiO₂ + 4HF → SiF₄ + 2H₂O\nSiF₄ + 2HF → H₂SiF₆ (fluorosilicic acid)\nSiO₂ + 2NaOH → Na₂SiO₃ + H₂O',
    bs:'Very high MP; unreactive except HF and NaOH', n:'Quartz = piezoelectric; Silica gel = drying agent/chromatography; Kieselguhr = filtration' , imp:true },

  { cat:'b14-silicon', cl:'c-pb14',
    f:'Si + 2NaOH + H₂O → ? 2Mg + Si → ?', fs:'Reactivity of Si',
    b:'Si + 2NaOH + H₂O → Na₂SiO₃ + 2H₂↑ (sodium silicate)\n2Mg + Si → Mg₂Si (magnesium silicide)\nMg₂Si + 4H₂O → 2Mg(OH)₂ + SiH₄↑ (silane)',
    bs:'', n:'' , imp:true },

  { cat:'b14-silicon', cl:'c-pb14',
    f:'Silicon carbide (SiC) — structure, properties, reactions?', fs:'Carborundum',
    b:'3D covalent network (diamond-like), sp³ Si bonded to 4 C atoms; very hard\nNot attacked by acids\nSiC + 2NaOH(molten) + 2O₂ → Na₂SiO₃ + CO₂↑ + H₂O\nSiC + 2Cl₂ → SiCl₄ + CCl₄',
    bs:'Uses: cutting tools, grinding wheels (abrasive); furnace lining (refractory)', n:'' },

  { cat:'b14-silicon', cl:'c-pb14',
    f:'Silicones — types, preparation from chlorosilanes, role of each?', fs:'Organosilicon polymers',
    b:'R₃SiCl: chain blocker (monofunctional, terminator)\nR₂SiCl₂: chain former (difunctional, linear chain)\nRSiCl₃: branching/crosslinker (trifunctional)\nPrep: Si + RCl →(Cu, 570K)→ R₃SiCl + R₂SiCl₂ + RSiCl₃\nHydrolysis + condensation polymerization',
    bs:'Silicone oils: R₂SiCl₂ + R₃SiCl', n:'Properties: water-repelling, high dielectric strength, biocompatible, thermally stable, chemically inert' },

  // ══════════════════════════════════════════
  // GROUP 14 — Sn / Pb COMPOUNDS
  // ══════════════════════════════════════════
  { cat:'b14-tinlead', cl:'c-pb14',
    f:'SnCl₂ as reducing agent — 4 key reactions?', fs:'Stannous chloride',
    b:'2HgCl₂ + SnCl₂ → Hg₂Cl₂↓(white) + SnCl₄\nHg₂Cl₂ + SnCl₂ → 2Hg↓(black) + SnCl₄\n2FeCl₃ + SnCl₂ → 2FeCl₂ + SnCl₄\n2CuCl₂ + SnCl₂ → 2CuCl↓(white) + SnCl₄',
    bs:'Sn⁴⁺ more stable than Sn²⁺', n:'SnCl₂ + H₂O → Sn(OH)Cl↓ + HCl (partial hydrolysis, white ppt)' , imp:true },

  { cat:'b14-tinlead', cl:'c-pb14',
    f:'PbO₂ — oxidising reactions (2 examples) + decomposition?', fs:'Lead dioxide',
    b:'PbO₂ + 4HCl(conc) → Cl₂↑ + PbCl₂ + 2H₂O\n2MnSO₄ + 5PbO₂ + 6HNO₃ → 2HMnO₄ + 2PbSO₄ + 3Pb(NO₃)₂ + 2H₂O\n2PbO₂ →(440°C)→ 2PbO + O₂↑',
    bs:'Chocolate brown solid; powerful O.A.', n:'PbO + NaOCl → PbO₂↓ (one preparation route)' , imp:true },

  { cat:'b14-tinlead', cl:'c-pb14',
    f:'Red lead (Pb₃O₄) — composition, decomposition, reaction with dil HNO₃?', fs:'',
    b:'Pb₃O₄ = 2PbO·PbO₂ (mixed oxide)\nPb₃O₄ →(>550°C)→ 3PbO + ½O₂↑\nPb₃O₄ + 4HNO₃(dil) → PbO₂↓ + 2Pb(NO₃)₂ + 2H₂O',
    bs:'', n:'PbCl₄ →(Δ)→ PbCl₂ + Cl₂↑ (PbCl₄ unstable; Pb²⁺ > Pb⁴⁺)' , imp:true },

  { cat:'b14-tinlead', cl:'c-pb14',
    f:'Why does Pb not dissolve in HCl or H₂SO₄ but dissolves in HNO₃?', fs:'',
    b:'Pb + HCl → PbCl₂(s) coating → passive\nPb + H₂SO₄ → PbSO₄(s) coating → passive\n3Pb + 8HNO₃(dil) → 3Pb(NO₃)₂ + 2NO↑ + 4H₂O\nPb + 4HNO₃(conc) → Pb(NO₃)₂ + 2NO₂↑ + 2H₂O',
    bs:'', n:'Pb + 2CH₃COOH + ½O₂(air) → (CH₃COO)₂Pb + H₂O (lead acetate)' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 15 — OVERVIEW
  // ══════════════════════════════════════════
  { cat:'b15-overview', cl:'c-pb15',
    f:'Gr 15 classification, OS stability trend (inert pair)?', fs:'N, P, As, Sb, Bi',
    b:'Non-metals: N, P | Metalloids: As, Sb | Metal: Bi\nStability of +3 OS: Bi³⁺ > Sb³⁺ > As³⁺ (increases down)\nStability of +5 OS: Bi⁵⁺ < Sb⁵⁺ < As⁵⁺\nException: As³⁺ < As⁵⁺ (As prefers +5)',
    bs:'', n:'N cannot expand octet (no d-orbitals); covalency max = 4 (e.g. HNO₃ covalency of N = 4)' },

  { cat:'b15-overview', cl:'c-pb15',
    f:'EH₃ hydrides: bond angle, thermal stability, reducing power, basic nature trends?', fs:'NH₃ → BiH₃',
    b:'Bond angle: NH₃ 107° (sp³); PH₃, AsH₃, SbH₃, BiH₃ ≈ 90° (Drago\'s rule)\nThermal stability: NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃\nReducing power: NH₃ < PH₃ < AsH₃ < SbH₃ < BiH₃\nLewis basic nature: NH₃ > PH₃ > AsH₃ > SbH₃\nBP: BiH₃ > SbH₃ > NH₃ > AsH₃ > PH₃',
    bs:'', n:'' , imp:true },

  { cat:'b15-overview', cl:'c-pb15',
    f:'N₂ forms EX₃ only — why no NX₅? Stable N halide?', fs:'Nitrogen halides',
    b:'N cannot expand octet (no d-orbitals) → no pentahalides\nOnly NF₃ is stable among nitrogen halides\nNCl₃ is explosive; NBr₃ and NI₃ exist as ammoniates (NBr₃·6NH₃, NI₃·6NH₃)',
    bs:'', n:'Except BiF₃ (ionic), all Gr 15 halides are covalent' , imp:true },

  { cat:'b15-overview', cl:'c-pb15',
    f:'Bond strength anomalies in Gr 15 and 16?', fs:'Single bond energies',
    b:'Single N-N < single P-P (N-N weaker due to lone pair repulsion in small N)\nSingle O-O < single S-S\nSingle F-F < single Cl-Cl\nBond energy order of X₂: Cl₂ > Br₂ > F₂ > I₂',
    bs:'', n:'N≡N is very strong (946 kJ/mol) → N₂ is inert' },

  // ══════════════════════════════════════════
  // GROUP 15 — N₂ AND NH₃
  // ══════════════════════════════════════════
  { cat:'b15-nitrogen', cl:'c-pb15',
    f:'N₂ lab preparation — 3 methods?', fs:'Dinitrogen',
    b:'NH₄Cl(aq) + NaNO₂(aq) →(Δ)→ N₂↑ + 2H₂O + NaCl\nNH₄NO₂ →(Δ)→ N₂↑ + 2H₂O\n(NH₄)₂Cr₂O₇ →(Δ)→ Cr₂O₃ + N₂↑ + 4H₂O (orange → green)\nPure N₂: 2NaN₃ →(Δ)→ 2Na + 3N₂↑ (used in car airbags)',
    bs:'Commercial: fractional distillation of liquid air', n:'CaC₂ + N₂ → CaCN₂ + C (Nitrolim = fertilizer); N₂ + O₂ →(2000K)→ 2NO (endothermic)' },

  { cat:'b15-nitrogen', cl:'c-pb15',
    f:'NH₃ preparation and why CaCl₂/P₄O₁₀/H₂SO₄ cannot dry it?', fs:'',
    b:'(NH₄)₂SO₄ + 2NaOH → 2NH₃↑ + Na₂SO₄ + 2H₂O\nDried by CaO (quicklime) only\nCaCl₂ + 8NH₃ → CaCl₂·8NH₃ (reacts)\nP₄O₁₀ + 6NH₃ → 2(NH₄)₃PO₄ (reacts)\nH₂SO₄ + 2NH₃ → (NH₄)₂SO₄ (reacts)',
    bs:'', n:'Haber\'s process: N₂ + 3H₂ ⇌ 2NH₃ (500°C, 200 atm, Fe catalyst, Mo promoter, ΔH = –ve)' , imp:true },

  { cat:'b15-nitrogen', cl:'c-pb15',
    f:'NH₃ + CuSO₄ → ? NH₃ + AgCl → ? Nessler\'s test?', fs:'NH₃ as ligand',
    b:'CuSO₄ + 4NH₃ → [Cu(NH₃)₄]SO₄ (deep blue; dsp², square planar, paramagnetic)\nAgCl + 2NH₃ → [Ag(NH₃)₂]Cl\nNessler\'s: K₂[HgI₄] + KOH + NH₃ → H₂N-Hg-O-HgI↓ (brown ppt, iodide of Millon\'s base)',
    bs:'', n:'4NH₃ + 3O₂ → 2N₂ + 6H₂O (burns in pure O₂, pale yellow flame)' , imp:true },

  { cat:'b15-nitrogen', cl:'c-pb15',
    f:'Ostwald\'s process for HNO₃ — all steps?', fs:'Catalytic oxidation of NH₃',
    b:'4NH₃ + 5O₂ →(Pt/Rh, 500K, 9 bar)→ 4NO + 6H₂O\n2NO + O₂ → 2NO₂\n3NO₂ + H₂O → 2HNO₃ + NO↑',
    bs:'', n:'Raschig process for N₂H₄: NH₃ + NaOCl →(fast)→ NH₂Cl + NaOH; 2NH₃ + NH₂Cl →(slow)→ N₂H₄ + NH₄Cl' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 15 — OXIDES OF N
  // ══════════════════════════════════════════
  { cat:'b15-noxides', cl:'c-pb15',
    f:'Oxides of nitrogen — OS, colour, acidic/neutral/basic, paramagnetic?', fs:'N₂O to N₂O₅',
    b:'N₂O (+1): neutral, colourless, laughing gas; prep: NH₄NO₃ →(<300°C)→ N₂O + 2H₂O\nNO (+2): neutral, colourless, paramagnetic\nN₂O₃ (+3): blue solid; NO + NO₂ →(250K)→ N₂O₃\nNO₂ (+4): reddish brown, acidic, paramagnetic; 2NO₂ ⇌ N₂O₄ (diamagnetic)\nN₂O₅ (+5): white solid; HNO₃ + P₄O₁₀ → N₂O₅ + HPO₃',
    bs:'', n:'N₂O₄ self-ionises: N₂O₄ ⇌ NO⁺ + NO₃⁻ (NO⁺ = acid; NO₃⁻ = base in N₂O₄ solvent)' },

  // ══════════════════════════════════════════
  // GROUP 15 — HNO₃
  // ══════════════════════════════════════════
  { cat:'b15-hno3', cl:'c-pb15',
    f:'HNO₃ reactions with Cu (dil vs conc) and Zn (very dil)?', fs:'Nitric acid with metals',
    b:'Cu + 4HNO₃(conc) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O\n3Cu + 8HNO₃(dil) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O\n4Zn + 10HNO₃(very dil) → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O\n4Zn + 10HNO₃(dil) → 4Zn(NO₃)₂ + N₂O↑ + 5H₂O',
    bs:'More dilute → more reduced N product', n:'Fe, Cr, Al passive in conc HNO₃ (oxide film)' , imp:true },

  { cat:'b15-hno3', cl:'c-pb15',
    f:'HNO₃ with non-metals: S₈, P₄, I₂, C?', fs:'Conc HNO₃ as oxidiser',
    b:'S₈ + 48HNO₃(conc) → 8H₂SO₄ + 48NO₂↑ + 16H₂O\nP₄ + 20HNO₃(conc) → 4H₃PO₄ + 20NO₂↑ + 4H₂O\nI₂ + 10HNO₃(conc) → 2HIO₃ + 10NO₂↑ + 4H₂O\nC + 4HNO₃(conc) → CO₂ + 4NO₂↑ + 2H₂O',
    bs:'', n:'' , imp:true },

  { cat:'b15-hno3', cl:'c-pb15',
    f:'Brown Ring Test for NO₃⁻ — mechanism and aqua regia?', fs:'',
    b:'NO₃⁻ + 3Fe²⁺ + 4H⁺ → NO + 3Fe³⁺ + 2H₂O\n[Fe(H₂O)₆]²⁺ + NO → [Fe(H₂O)₅(NO)]²⁺ (Brown ring complex)\nAqua regia: 3:1 HCl:HNO₃; dissolves Au and Pt\nAu + 4HNO₃ + 4HCl → H[AuCl₄] + NO + 2H₂O',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 15 — PHOSPHORUS
  // ══════════════════════════════════════════
  { cat:'b15-phosphorus', cl:'c-pb15',
    f:'Phosphorus allotropes — structure, reactivity, stability?', fs:'White, Red, Black P',
    b:'White (P₄): tetrahedral, sp³, 60° bond angle, angle strain → very reactive; phosphorescence; soluble in CS₂\nRed P: polymeric 3-coord; no phosphorescence; used in matchboxes\nBlack P: polymeric layers; least reactive; semiconductor\nReactivity: White > Red > Black\nStability (MP): White < Red < Black\nΔHf°(white P₄) = 0 (reference state)',
    bs:'', n:'2Ca₃(PO₄)₂ + 10C + 6SiO₂ →(high temp)→ P₄↑ + 6CaSiO₃ + 10CO↑ (preparation of white P)' , imp:true },

  { cat:'b15-phosphorus', cl:'c-pb15',
    f:'White P₄ disproportionation in alkali?', fs:'',
    b:'P₄ + 3NaOH(aq) + 3H₂O →(Δ)→ PH₃↑ + 3NaH₂PO₂\nP: 0 → -3 (PH₃) and +1 (hypophosphite)',
    bs:'Only white P does this; red/black do not', n:'P₄ + 3O₂(limited) → P₄O₆; P₄ + 5O₂(excess) → P₄O₁₀' , imp:true },

  { cat:'b15-phosphorus', cl:'c-pb15',
    f:'Phosphine (PH₃) — preparation, properties, Holme\'s signal?', fs:'',
    b:'Ca₃P₂ + 6H₂O → 2PH₃↑ + 3Ca(OH)₂\nAlso from: 4H₃PO₃ →(Δ)→ 3H₃PO₄ + PH₃↑\nPure PH₃: non-inflammable; impure (P₂H₄ vapour) = inflammable\nWeak base: PH₃ + HBr → PH₄Br\nHolme\'s signal: Ca₃P₂ + CaC₂ in seawater → PH₃ + C₂H₂ burn spontaneously → flame + fumes',
    bs:'Colourless, rotten fish smell, poisonous', n:'AgNO₃ + PH₃ → Ag↓ + HNO₃ + H₃PO₃ (strong R.A.)' , imp:true },

  { cat:'b15-phosphorus', cl:'c-pb15',
    f:'P₄O₆ hydrolysis (cold water vs hot)?', fs:'Phosphorus trioxide',
    b:'Cold water: P₄O₆ + 6H₂O → 4H₃PO₃ (phosphorous acid)\nHot water: P₄O₆ + 6H₂O → 3H₃PO₄ + PH₃↑\nP₄O₁₀ + 2H₂O → H₄P₂O₇ (pyrophosphoric acid)\nP₄O₁₀ + 6H₂O → 4H₃PO₄ (orthophosphoric acid)',
    bs:'P₄O₁₀ is powerful dehydrating agent', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 15 — P HALIDES
  // ══════════════════════════════════════════
  { cat:'b15-phalides', cl:'c-pb15',
    f:'PCl₃ and PCl₅ — preparation and hydrolysis?', fs:'Phosphorus halides',
    b:'PCl₃: P₄ + 6Cl₂(limited) → 4PCl₃\nPCl₃ + 3H₂O → H₃PO₃ + 3HCl\nPCl₅: P₄ + 10Cl₂(excess) → 4PCl₅\nPCl₅ + H₂O(limited) → POCl₃ + 2HCl\nPCl₅ + 4H₂O → H₃PO₄ + 5HCl (excess)',
    bs:'', n:'Solid PCl₅ is ionic: PCl₄⁺PCl₆⁻; thermal decomp: PCl₅ →(Δ)→ PCl₃ + Cl₂' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 15 — P OXYACIDS
  // ══════════════════════════════════════════
  { cat:'b15-poxyacids', cl:'c-pb15',
    f:'Oxyacids of P — OS, acidic H, reducing H, disproportionation?', fs:'H₃PO₂, H₃PO₃, H₃PO₄',
    b:'H₃PO₂ (+1): 1 P=O, 2 P-H, 1 P-OH → 1 acidic H, 2 reducing H; strong R.A.\nDisproportionation: 4H₃PO₂ →(Δ)→ 3H₃PO₄ + PH₃↑\nH₃PO₃ (+3): 1 P=O, 1 P-H, 2 P-OH → 2 acidic H, 1 reducing H\nDisproportionation: 4H₃PO₃ →(Δ)→ 3H₃PO₄ + PH₃↑\nH₃PO₄ (+5): 1 P=O, 3 P-OH → 3 acidic H, no reducing H',
    bs:'P-H bond → reducing; P-OH → acidic', n:'Pyrophosphoric acid: 2H₃PO₄ → H₄P₂O₇ + H₂O\nPolymetaphosphoric acid: H₄P₂O₇ →(heat)→ (HPO₃)n' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 16 — OVERVIEW
  // ══════════════════════════════════════════
  { cat:'b16-overview', cl:'c-pb16',
    f:'Gr 16 classification, hydride trends (BP, thermal stability, acidity)?', fs:'O, S, Se, Te, Po',
    b:'Non-metals: O, S | Metalloids: Se, Te | Metal: Po (radioactive)\nH₂E bond angles: H₂O 104.5°; H₂S, H₂Se, H₂Te ≈ 90° (Drago\'s rule)\nThermal stability: H₂O > H₂S > H₂Se > H₂Te\nAcidic/reducing nature: H₂O < H₂S < H₂Se < H₂Te\nBP: H₂O > H₂Te > H₂Se > H₂S',
    bs:'', n:'Stability of -2 OS decreases O→Po; S shows many OS: -2, 0, +2, +4, +6' },

  { cat:'b16-overview', cl:'c-pb16',
    f:'Sulphur hexafluorides (SF₆) — why inert? Monohalides?', fs:'',
    b:'SF₆: sterically crowded, inert; SF₆ + H₂O → No reaction\nAll hexafluorides are gaseous at room temperature; only hexafluorides of S are stable\nMonohalides (S₂F₂, S₂Cl₂): dimeric; undergo disproportionation\n2S₂Cl₂ → SCl₄ + 3S; open-book structure',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // GROUP 16 — O₂ AND O₃
  // ══════════════════════════════════════════
  { cat:'b16-oxygen', cl:'c-pb16',
    f:'O₂ lab preparation — 3 methods?', fs:'Dioxygen',
    b:'2KClO₃ →(MnO₂, Δ)→ 2KCl + 3O₂↑\n2HgO →(Δ)→ 2Hg + O₂↑\n2PbO₂ →(Δ)→ 2PbO + O₂↑\nBrin\'s process: 2BaO + O₂ →(500°C)→ 2BaO₂; 2BaO₂ →(800°C)→ 2BaO + O₂↑ (very pure)',
    bs:'Commercial: fractional distillation of liquid air or electrolysis of water', n:'' },

  { cat:'b16-oxygen', cl:'c-pb16',
    f:'O₃ preparation, properties, and quantitative estimation?', fs:'Ozone',
    b:'3O₂ →(silent electrical discharge)→ 2O₃ (ΔH = +ve; thermodynamically less stable)\nDark blue gas; diamagnetic; SRP = 2.07V (second after F₂)\nEstimation: 2KI + O₃ + H₂O → I₂ + 2KOH + O₂\nI₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆',
    bs:'', n:'PbS(black) + 4O₃ → PbSO₄(white) + 4O₂ (restores old paintings)\nO₃ tailing of Hg: O₃ oxidises Hg → Hg₂O (sticks to glass)' , imp:true },

  { cat:'b16-oxygen', cl:'c-pb16',
    f:'Ozone layer depletion — agents and reactions?', fs:'',
    b:'Caused by: supersonic jet exhaust (NO) and CFCs (Cl atoms)\nNO + O₃ → NO₂ + O₂\nCl + O₃ → ClO + O₂',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 16 — SULPHUR COMPOUNDS
  // ══════════════════════════════════════════
  { cat:'b16-sulphur', cl:'c-pb16',
    f:'Sulphur allotropes — rhombic vs monoclinic, plastic S, heating effect?', fs:'',
    b:'Both rhombic and monoclinic: S₈, cyclic crown structure (yellow)\nRhombic: stable at room temp; transition at 369K → monoclinic\nPlastic S: molten S quenched in cold water; rubber-like; converts to rhombic on standing\nHeating: >160°C → rings break, viscosity increases; >444°C → chains break, viscosity decreases; >600°C → S₂ (paramagnetic)',
    bs:'', n:'' },

  { cat:'b16-sulphur', cl:'c-pb16',
    f:'SO₂ — preparation, properties, bleaching action?', fs:'Sulphur dioxide',
    b:'S + O₂ → SO₂; 2FeS₂ + 11O₂ → Fe₂O₃ + 8SO₂\nCu + 2H₂SO₄(conc) → CuSO₄ + SO₂↑ + 2H₂O\nLime water test: SO₂ → CaSO₃↓ milky; excess SO₂ → Ca(HSO₃)₂ (clears)\nReducing agent: SO₂ + Cl₂ →(charcoal)→ SO₂Cl₂\nOxidising agent: 2H₂S + SO₂ → 3S↓ + 2H₂O\nTemporary (reducing) bleach, in aqueous medium',
    bs:'', n:'' , imp:true },

  { cat:'b16-sulphur', cl:'c-pb16',
    f:'Contact process for H₂SO₄ — all steps?', fs:'',
    b:'S + O₂ → SO₂\n2SO₂ + O₂ →(V₂O₅, 720K, 2 bar)→ 2SO₃\nSO₃ + H₂SO₄ → H₂S₂O₇ (oleum)\nH₂S₂O₇ + H₂O → 2H₂SO₄',
    bs:'(cannot add SO₃ directly to water — violent)', n:'H₂SO₄ dehydrates: C₁₂H₂₂O₁₁ → 12C + 11H₂O; also HCOOH, H₂C₂O₄' , imp:true },

  { cat:'b16-sulphur', cl:'c-pb16',
    f:'Oxyacids of sulphur — key ones with OS and special features?', fs:'',
    b:'H₂SO₃ (+4)\nH₂SO₄ (+6)\nH₂S₂O₇ (Oleum, +6)\nH₂SO₅ (Caro\'s acid, +6): contains peroxy linkage, powerful O.A.\nH₂S₂O₈ (Marshall\'s acid, +6): peroxy linkage -O-O-, powerful O.A.\nH₂S₂O₃ (Thiosulphuric acid): unstable, exists as Na₂S₂O₃·5H₂O',
    bs:'', n:'' , imp:true },

  { cat:'b16-sulphur', cl:'c-pb16',
    f:'Na₂S₂O₃ — 3 key uses/reactions?', fs:'Sodium thiosulphate (hypo)',
    b:'1. Antichlor: Cl₂ + Na₂S₂O₃ + H₂O → NaHSO₄ + HCl (removes excess Cl₂)\n2. Estimation of I₂: I₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆\n3. Fixer in photography: AgBr + 2Na₂S₂O₃ → Na₃[Ag(S₂O₃)₂] + NaBr',
    bs:'', n:'Prep: Na₂SO₃ + S →(Δ)→ Na₂S₂O₃' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 16 — H₂O₂
  // ══════════════════════════════════════════
  { cat:'b16-h2o2', cl:'c-pb16',
    f:'H₂O₂ preparation — 3 methods?', fs:'Hydrogen peroxide',
    b:'BaO₂·8H₂O + H₂SO₄(cold dil) → BaSO₄↓ + H₂O₂ + 8H₂O\nElectrolysis of H₂SO₄: 2HSO₄⁻ →(anode)→ H₂S₂O₈ + 2e⁻; H₂S₂O₈ + 2H₂O → 2H₂SO₄ + H₂O₂\nIndustrial: 2-ethyl anthraquinol + O₂(air) → anthraquinone + H₂O₂',
    bs:'', n:'Stored in wax-lined glass/plastic; stabilized by urea, H₃PO₄, glycerin; decomposes in sunlight' , imp:true },

  { cat:'b16-h2o2', cl:'c-pb16',
    f:'H₂O₂ as O.A. and R.A. (one example each, acidic and basic medium)?', fs:'',
    b:'O.A. acidic: Fe²⁺ + H₂O₂ + 2H⁺ → 2Fe³⁺ + 2H₂O\nO.A. basic: Cr(OH)₃ + H₂O₂ + NaOH → Na₂CrO₄ + H₂O (yellow)\nR.A. acidic: 2KMnO₄ + 5H₂O₂ + 3H₂SO₄ → K₂SO₄ + 2MnSO₄ + 5O₂↑ + 8H₂O\nR.A. basic: 2MnO₄⁻ + 3H₂O₂ + 2OH⁻ → 2MnO₂↓ + 3O₂↑ + 4H₂O',
    bs:'', n:'Chromate test: K₂Cr₂O₇ + H₂SO₄ + H₂O₂ →(amyl alcohol)→ CrO₅ (blue, stable in ether)' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 17 — OVERVIEW
  // ══════════════════════════════════════════
  { cat:'b17-overview', cl:'c-pb17',
    f:'Key trends in Gr 17 — EA, oxidising power, bond energy, reducing ability?', fs:'F, Cl, Br, I',
    b:'Electron Affinity (−ΔHeg): Cl > F > Br > I\nOxidising power: F₂ > Cl₂ > Br₂ > I₂\nBond energy (X₂): Cl₂ > Br₂ > F₂ > I₂\nReducing ability: I⁻ > Br⁻ > Cl⁻ > F⁻\nF₂: most powerful oxidiser — low BE + high hydration energy of F⁻',
    bs:'', n:'F state: -1, 0 only. Cl, Br, I: -1, 0, +1, +3, +5, +7' , imp:true },

  { cat:'b17-overview', cl:'c-pb17',
    f:'HX boiling points, acidic strength, H-E bond energy order?', fs:'HF, HCl, HBr, HI',
    b:'BP: HF > HI > HBr > HCl (HF highest due to H-bonding)\nAcidic strength: HI > HBr > HCl > HF\nH-X bond energy: H-F > H-Cl > H-Br > H-I\nReducing power: HI > HBr > HCl > HF',
    bs:'', n:'HI, HBr cannot be prepared by H₂SO₄ method (oxidised to I₂/Br₂); use H₃PO₄ instead' , imp:true },

  { cat:'b17-overview', cl:'c-pb17',
    f:'Reactivity of halogens with water?', fs:'',
    b:'F₂ + H₂O → O₂ + 2HF (violent)\nX₂ + H₂O ⇌ HX + HOX (X = Cl, Br; reversible)\nI₂ + H₂O → No reaction',
    bs:'', n:'' , imp:true },

  { cat:'b17-overview', cl:'c-pb17',
    f:'Disproportionation of X₂ in NaOH — cold dilute vs hot conc?', fs:'Halogens in alkali',
    b:'Cold dilute NaOH: X₂ + 2NaOH → NaX + NaXO + H₂O (gives X⁻ + XO⁻)\nHot conc NaOH: 3X₂ + 6NaOH → 5NaX + NaXO₃ + 3H₂O (gives X⁻ + XO₃⁻)\nComproportionation: X⁻ + XO₃⁻ + H⁺ → X₂ (acidic medium)',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 17 — FLUORINE
  // ══════════════════════════════════════════
  { cat:'b17-fluorine', cl:'c-pb17',
    f:'F₂ preparation — why special conditions?', fs:'Electrolysis of KHF₂',
    b:'CaF₂ + H₂SO₄(conc) → 2HF + CaSO₄\nHF + KF → K[HF₂] (H-bonded)\nElectrolyse KHF₂ + HF:\nCathode: 2H⁺ + 2e⁻ → H₂↑\nAnode: 2F⁻ → F₂↑ + 2e⁻\nNo water (F₂ + H₂O → HF + O₂); no graphite anode (reacts with F₂)',
    bs:'', n:'' , imp:true },

  { cat:'b17-fluorine', cl:'c-pb17',
    f:'F₂ reactions — 8 key reactions?', fs:'',
    b:'H₂ + F₂ → 2HF; S + F₂ → SF₆; P + F₂ → PF₅\nPt + F₂ → PtF₆; Pu + F₂ → PuF₆\nO₂ + F₂ →(silent discharge)→ O₂F₂\nH₂O + F₂ → O₂↑ + 2HF; NH₃ + F₂ → N₂↑ + 3HF\nNaOH(dil) + F₂ → OF₂↑ + H₂O + HF\nNaOH(conc) + F₂ → O₂↑ + H₂O + HF\nNaX + F₂ → NaF + X₂ (X = Cl, Br, I)',
    bs:'', n:'F₂ cannot oxidise any halide ion to free halogen from a more reactive halogen (F is most reactive)' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 17 — CHLORINE
  // ══════════════════════════════════════════
  { cat:'b17-chlorine', cl:'c-pb17',
    f:'Cl₂ industrial manufacture — Deacon\'s process and brine electrolysis?', fs:'',
    b:'Deacon\'s: 4HCl + O₂(air) →(CuCl₂, 723K)→ 2Cl₂ + 2H₂O\nBrine electrolysis:\nAnode: 2Cl⁻ → Cl₂↑ + 2e⁻\nHg cathode: Na⁺ + e⁻ → Na-Hg amalgam → Na-Hg + H₂O → NaOH + H₂↑ + Hg\nPt cathode: 2H₂O + 2e⁻ → H₂↑ + 2OH⁻',
    bs:'', n:'' , imp:true },

  { cat:'b17-chlorine', cl:'c-pb17',
    f:'Bleaching powder — composition and bleaching action?', fs:'',
    b:'2Ca(OH)₂ + 2Cl₂ → Ca(OCl)₂ + CaCl₂ + 2H₂O\nNCERT: Ca(OCl)₂·CaCl₂·Ca(OH)₂·2H₂O\nBleaching: Cl₂ + H₂O → 2HCl + [O] (nascent O)\n[O] + coloured dye → colourless\nBleaching powder action due to OCl⁻ ion',
    bs:'', n:'Uses of Cl₂: metallurgy of Au/Pt; sterilising water; bleaching; synthesis of CFCs, CHCl₃, CCl₄, DDT, phosgene, tear gas' , imp:true },

  { cat:'b17-chlorine', cl:'c-pb17',
    f:'Cl₂ reactions — Fe, Pb, P₄, NH₃ (excess Cl₂)?', fs:'',
    b:'Fe + Cl₂ → FeCl₃; Pb + Cl₂ → PbCl₄; Al + Cl₂ → AlCl₃\nP₄ + Cl₂ → PCl₃/PCl₅; S₈ + 4Cl₂ → 4S₂Cl₂\nNH₃(excess) + 3Cl₂ → N₂↑ + 6NH4Cl (8NH₃ + 3Cl₂)\nNH₃ + 3Cl₂(excess) → NCl₃ + 3HCl (explosive!)\nI₂ + Cl₂ + H₂O → HIO₃ + HCl',
    bs:'', n:'' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 17 — HX AND OXYACIDS
  // ══════════════════════════════════════════
  { cat:'b17-halogens', cl:'c-pb17',
    f:'HCl drying — what can and cannot be used?', fs:'',
    b:'CAN dry with conc H₂SO₄\nCANNOT use P₄O₁₀: P₄O₁₀ + HCl → H₃PO₃ + POCl₃\nCANNOT use CaO: CaO + HCl → CaCl₂ + H₂O (reacts)\nCANNOT dry H₂S with H₂SO₄: H₂S + H₂SO₄ → S↓ + SO₂↑ + H₂O',
    bs:'', n:'Etching glass: HF used; SiO₂ + HF → SiF₄ + H₂O; Na₂SiO₃ + HF → Na₂SiF₆ + H₂O' },

  { cat:'b17-halogens', cl:'c-pb17',
    f:'Oxyacids of Cl — list, Lewis structures, acid strength order?', fs:'',
    b:'HClO (H-O-Cl:) < HClO₂ (H-O-Cl=O) < HClO₃ (H-O-Cl(=O)₂) < HClO₄ (H-O-Cl(=O)₃)\nAcid strength: HClO₄ > HClO₃ > HClO₂ > HClO\nDisproportionation: ClO⁻ →(high T)→ Cl⁻ + ClO₃⁻\nClO₃⁻ → Cl⁻ + ClO₄⁻ (kinetically slow)',
    bs:'More O atoms = stronger acid', n:'' , imp:true },

  { cat:'b17-halogens', cl:'c-pb17',
    f:'Pseudohalogens and pseudohalide ions — examples and similarity?', fs:'',
    b:'Pseudohalide ions: CN⁻, OCN⁻, SCN⁻, SeCN⁻, N₃⁻\nPseudohalogens: (CN)₂ (cyanogen gas), (SCN)₂, (SeCN)₂\nBehave like halide ions:\nCN⁻ + AgNO₃ → AgCN↓; AgCN + NH₃ → [Ag(NH₃)₂]⁺\nAgCN + KCN(excess) → [Ag(CN)₂]⁻',
    bs:'', n:'' , imp:true },

  { cat:'b17-halogens', cl:'c-pb17',
    f:'Iodine — solubility, reaction with Na₂S₂O₃ and NH₃?', fs:'',
    b:'I₂: less soluble in water; highly soluble in KI:\nKI + I₂ → KI₃ (I₃⁻ is sp³d, linear)\nI₂ + 2Na₂S₂O₃ → 2NaI + Na₂S₄O₆\nNH₃(aq) + 3I₂ → NI₃·NH₃ + 3HI (explosive on decomposition)\nNI₃·NH₃ → N₂↑ + I₂ + NH₄I',
    bs:'', n:'Bromine: forms clathrate compounds with ice/quinols (Br₂·8H₂O) — entrapment' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 17 — INTERHALOGEN COMPOUNDS
  // ══════════════════════════════════════════
  { cat:'b17-interhal', cl:'c-pb17',
    f:'Interhalogen compound types, examples, states at RT?', fs:'XX\', XX₃\', XX₅\', XX₇\'',
    b:'XX\': ClF, BrF, IF, ICl, BrCl, IBr\nXX₃\': ClF₃, BrF₃, IF₃, ICl₃ (ICl₃ exists as I₂Cl₆ dimer, planar)\nXX₅\': ClF₅, BrF₅, IF₅\nXX₇\': IF₇ only (only I large enough for 7 F atoms)\nGases: ClF, BrF, ClF₃, IF₇\nLiquids: BrF₃, BrF₅\nSolids: ICl, IBr, IF₃, ICl₃',
    bs:'All covalent and diamagnetic', n:'' , imp:true },

  { cat:'b17-interhal', cl:'c-pb17',
    f:'Interhalogen hydrolysis — which halide ends up in which acid?', fs:'',
    b:'Larger halogen → oxyacid; smaller halogen → HF\nIF₅ + H₂O → HF + HIO₃\nICl + H₂O → HCl + HIO\nClF₃ + H₂O → HF + HClO₂\nBrF₅ + H₂O → HF + HBrO₃',
    bs:'', n:'Use in nuclear: U + 3ClF₃ → UF₆ + 3ClF (enrichment of U²³⁵ by effusion of UF₆)' , imp:true },

  // ══════════════════════════════════════════
  // GROUP 18 — NOBLE GASES
  // ══════════════════════════════════════════
  { cat:'b18-noble', cl:'c-pb18',
    f:'Noble gas abundance, config, and Bartlett\'s discovery?', fs:'',
    b:'Config: ns²np⁶; all monoatomic, colourless, odourless, tasteless\nAr: most abundant in atmosphere; Rn: radioactive\nBartlett: O₂⁺[PtF₆]⁻; since IE(Xe) ≈ IE(O₂), he formed Xe⁺[PtF₆]⁻ (red-orange)\nKrF₂ exists; no compounds of He, Ne, Ar isolated',
    bs:'', n:'²²⁶Ra → ²²²Rn + ⁴He (Rn formed by radioactive decay)' , imp:true },

  { cat:'b18-noble', cl:'c-pb18',
    f:'Uses of noble gases?', fs:'He, Ne, Ar, Kr, Xe',
    b:'He: meteorological balloons (non-flammable), diving diluent (avoids bends), cryogenic experiments, B.P.=4.2K, superconducting MRI magnets\nNe: discharge tubes, fluorescent bulbs\nAr: inert atmosphere (arc welding, metallurgy), gas in electric bulbs\nKr/Xe: special light bulbs; Xe in headlights of cars',
    bs:'', n:'' },

  // ══════════════════════════════════════════
  // GROUP 18 — Xe COMPOUNDS
  // ══════════════════════════════════════════
  { cat:'b18-xe', cl:'c-pb18',
    f:'XeF₂, XeF₄, XeF₆ preparation conditions?', fs:'',
    b:'XeF₂: Xe + F₂ (2:1 molar, 673K, 1 bar)\nXeF₄: Xe + 2F₂ (1:5 molar, 873K, 7 bar)\nXeF₆: Xe + 3F₂ (1:20 molar, 573K, 60–70 bar)\nXeF₄ + O₂F₂ →(143K)→ XeF₆ + O₂',
    bs:'Higher F₂ ratio and pressure → higher fluoride', n:'Structures: XeF₂ linear; XeF₄ square planar; XeF₆ distorted octahedron; XeO₃ pyramidal; XeO₄ tetrahedral' , imp:true },

  { cat:'b18-xe', cl:'c-pb18',
    f:'XeF₂ oxidising reactions — SRP and examples?', fs:'',
    b:'XeF₂ + 2H⁺ + 2e⁻ → Xe↑ + 2HF; SRP ≈ 2.64V\nNH₃ + XeF₂ → N₂ + NH₄F + Xe\nH₂ + XeF₂ → Xe↑ + 2HF\nBrO₃⁻ + XeF₂ → BrO₄⁻ + Xe (bromate to perbromate)\nCe³⁺ + XeF₂ → Ce⁴⁺ + Xe\nXeF₂ hydrolysis: XeF₂ + H₂O → Xe↑ + O₂↑ + 2HF (slow)',
    bs:'', n:'XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻ (XeF₂ as F⁻ donor)' , imp:true },

  { cat:'b18-xe', cl:'c-pb18',
    f:'XeF₄ hydrolysis (JEE key), thermal decomp?', fs:'',
    b:'6XeF₄ + 12H₂O → 4Xe↑ + 2XeO₃(s) + 24HF + 3O₂↑\nXeO₃: white explosive solid\nXeO₃ + 2NaOH → Na₄XeO₆ (sodium xenate)\nNo thermal decomposition of XeF₄ (or XeF₂)',
    bs:'', n:'XeF₄ + SbF₅ → [XeF₃]⁺[SbF₆]⁻ (F⁻ donor to SbF₅)' , imp:true },

  { cat:'b18-xe', cl:'c-pb18',
    f:'XeF₆ — hydrolysis (excess and little water), SiO₂ reactions, thermal decomp?', fs:'',
    b:'XeF₆ + excess H₂O → XeO₃ + HF\nXeF₆ + little H₂O → XeOF₄ + HF\nXeOF₄ + H₂O → XeO₂F₂ + HF\nXeF₆ →(Δ)→ XeF₄ + XeF₂ + F₂\nSiO₂ + XeF₆(little) → XeOF₄ + SiF₄\nSiO₂ + XeF₆(excess) → XeO₃ + SiF₄\nXeF₆ + NaF/CsF → Na⁺[XeF₇]⁻ (F⁻ acceptor)\nXeF₆ + PF₅ → [XeF₅]⁺[PF₆]⁻ (F⁻ donor)',
    bs:'XeF₂ < XeF₄ < XeF₆ (increasing MP and bond length)', n:'' , imp:true },

  // ── NEW FROM NOTES (Images 2–4) ──

  // Boron (Image 2) — check: HNO₂→HNO₃ not in ch3
  { cat:'b13-boron', cl:'c-pb',
    f:'HNO₂ → HNO₃ + NO + H₂O (disproportionation at room temp)?', fs:'Nitrous acid instability',
    b:'3HNO₂ → HNO₃ + 2NO↑ + H₂O\nHNO₂ is unstable — disproportionates on standing', bs:'', n:'' , imp:true },

  { cat:'b13-borax', cl:'c-pb',
    f:'NaB₄O₇·10H₂O →(Δ) ? / Na₂B₄O₇ + H₂O → ?', fs:'Borax dehydration & hydrolysis',
    b:'NaB₄O₇·10H₂O → Na₂B₄O₇ + 9H₂O (at ~300°C)\nNa₂B₄O₇ + H₂O → NaOH + H₃BO₃\nNa₂B₄O₇ + 2HCl + H₂O → NaCl + 4H₃BO₃', bs:'', n:'' },

  { cat:'b14-carbon', cl:'c-pb',
    f:'BaO₂·8H₂O + H₂SO₄ → ? / K₂S₂O₈ + D₂O → ?', fs:'H₂O₂ preparation methods',
    b:'BaO₂·8H₂O + H₂SO₄ → BaSO₄↓ + H₂O₂ + H₂O\nK₂S₂O₈ + D₂O → D₂O₂ + K₂SO₄ (deuterium peroxide)', bs:'', n:'' },

  { cat:'b13-boron', cl:'c-pb',
    f:'B₋ on H⁺ or OH⁻? B(OH)₃ in NaOH → ? [Monoborate → Tetraborate]', fs:'Borate equilibria',
    b:'In neutral/acidic: B(OH)₃ (boric acid)\nIn base: B(OH)₃ + OH⁻ ⇌ [B(OH)₄]⁻ (tetraborate, monoboric)\n∴ Monobasic in NaOH', bs:'', n:'' },

  { cat:'b14-silicon', cl:'c-pb',
    f:'C/Si/Ge + H₂O → ? [Network solid — no hydrolysis]', fs:'',
    b:'C/Si/Ge + H₂O → X (no reaction — network covalent solid)\nPb + H₂O → X (protective oxide layer forms)', bs:'', n:'' },

  { cat:'b14-silicon', cl:'c-pb',
    f:'Sn + H₂O →(steam) ? / SiCl₄ →(excess H₂O) H₄SiO₄ already — but SiF₄ partial?', fs:'',
    b:'Sn + H₂O(steam) → SnO₂ + H₂↑\nSiCl₄ + 4H₂O → H₄SiO₄ + 4HCl', bs:'', n:'' },

  // P-block Group 15 (Image 3) — new reactions
  { cat:'b15-nitrogen', cl:'c-pb',
    f:'NH₄Cl + NaNO₂ →(Δ) ? / (NH₄)₂Cr₂O₇ →(Δ) ?', fs:'N₂ preparation',
    b:'NH₄Cl + NaNO₂ → N₂↑ + NaCl + H₂O (lab prep of N₂)\n(NH₄)₂Cr₂O₇ → N₂↑ + Cr₂O₃ + H₂O', bs:'', n:'' , imp:true },

  { cat:'b15-nitrogen', cl:'c-pb',
    f:'Ba(N₃)₂ →(Δ) ? / N₂ + O₂ →(lightning, 2000K) ?', fs:'Nitrogen reactions',
    b:'Ba(N₃)₂ → Ba + N₂↑ (azide decomp)\nN₂ + O₂ →(lightning) → 2NO (white ppt with Pb²⁺)\nNH₂−Ē−NH₂ + H₂O → NH₃ + CO₂ + H₂O (hydrazine hydrolysis)', bs:'', n:'' },

  { cat:'b15-hno3', cl:'c-pb',
    f:'Cu²⁺ + NH₃ → [Cu(NH₃)₄]²⁺ [Blue solution]/ Ag⁺ + Cl⁻ → AgCl; AgCl + NH₃ → ?', fs:'Complex formation',
    b:'Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺ (deep blue complex)\nAgCl + 2NH₃ → [Ag(NH₃)₂]Cl (soluble, colourless)', bs:'', n:'' , imp:true },

  { cat:'b15-nitrogen', cl:'c-pb',
    f:'NH₄NO₃ →(Δ) N₂O + H₂O / 2NO₂ →(cold) N₂O₄ / N₂O₅: prep and reaction?', fs:'NOₓ reactions',
    b:'NH₄NO₃ → N₂O↑ + 2H₂O\n2NO₂ (cooling) ⇌ N₂O₄ (colourless)\nN₂O₅: HNO₃ + P₄O₁₀ → N₂O₅ + H₃PO₄ (or H₃PO₄)\nN₂O₅ + H₂O → 2HNO₃', bs:'', n:'' },

  { cat:'b15-hno3', cl:'c-pb',
    f:'Pb(NO₃)₂ →(Δ) ? / NO + O₂ → NO₂ / 2NO₂ + H₂O → HNO₃ + HNO₂ (Ostwald)', fs:'',
    b:'Pb(NO₃)₂ → PbO + NO₂↑ + O₂↑\nNO + O₂ → NO₂ (Ostwald step 2)\n3NO₂ + H₂O → 2HNO₃ + NO (Ostwald step 3)\nNH₃ →(Pt, 500°C) → NO (Ostwald step 1)', bs:'', n:'' , imp:true },

  { cat:'b15-hno3', cl:'c-pb',
    f:'HNO₃ with S₈, P₄, I₂, C (non-metals)?', fs:'Concentrated HNO₃ oxidises non-metals',
    b:'S₈ + HNO₃(conc) → H₂SO₄ + NO₂ + H₂O\nP₄ + HNO₃ → H₃PO₄ + NO₂\nI₂ + HNO₃(conc) → HIO₃ + NO₂\nC + HNO₃(conc) → CO₂ + NO₂ + H₂O', bs:'', n:'' },

  { cat:'b15-hno3', cl:'c-pb',
    f:'NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃ / Cu or Zn + HNO₃ (very dil) → ?', fs:'',
    b:'NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃↑\nZn + very dil HNO₃ → Zn(NO₃)₂ + N₂O↑ + H₂O\nCu + conc HNO₃ → Cu(NO₃)₂ + NO₂↑ + H₂O\nCu + dil HNO₃ → Cu(NO₃)₂ + NO↑ + H₂O', bs:'', n:'' },

  { cat:'b15-phosphorus', cl:'c-pb',
    f:'NaOH + P₄ → PH₃ + NaH₂PO₂ / P₄ + Cl₂(limited) → PCl₃; PCl₃ + Cl₂ → PCl₅', fs:'',
    b:'P₄ + 3NaOH + 3H₂O → PH₃↑ + 3NaH₂PO₂ (disproportionation)\nP₄ + 6Cl₂(limited) → 4PCl₃\nPCl₃ + Cl₂ → PCl₅', bs:'', n:'' , imp:true },

  { cat:'b15-phosphorus', cl:'c-pb',
    f:'PCl₅ →(Δ) PCl₃ + Cl₂ / CH₃COOH + PCl₅ → CH₃COCl + POCl₃ + HCl', fs:'PCl₅ reactions',
    b:'PCl₅ → PCl₃ + Cl₂ (reversible, +heat)\nCH₃COOH + PCl₅ → CH₃COCl + POCl₃ + HCl (esterification-type)\nC−OH + PCl₅ → C−Cl + POCl₃ + HCl (general)', bs:'', n:'' , imp:true },

  { cat:'b15-phosphorus', cl:'c-pb',
    f:'P₄ + SO₂Cl₂ → PCl₃ + SO₂ + PCl₅ / PCl₅ + H₂O (little) → POCl₃ + HCl', fs:'',
    b:'P₄ + SO₂Cl₂ → PCl₃ + SO₂\nPCl₃ + Cl₂ → PCl₅\nPCl₅ + H₂O(small) → POCl₃ + 2HCl\nPOCl₃ + 3H₂O → H₃PO₄ + 3HCl', bs:'', n:'' },

  { cat:'b15-poxyacids', cl:'c-pb',
    f:'H₃PO₃ →(Δ) H₃PO₄ + PH₃↑ / AgNO₃ + H₃PO₂ → Ag↓ + H₃PO₃', fs:'Phosphorus oxyacids reactions',
    b:'H₃PO₃ → H₃PO₄ + PH₃↑ (disproportionation)\nAgNO₃ + H₃PO₂ (reducing) → Ag↓ (silver mirror) + H₃PO₃', bs:'', n:'' , imp:true },

  // Group 16 (Image 3) — new reactions
  { cat:'b16-sulphur', cl:'c-pb',
    f:'SO₂ + O₂ →(V₂O₅) SO₃ / S + O₂ →(Δ) SO₂ / SO₃ + H₂O → H₂SO₄', fs:'Sulphur oxides',
    b:'S + O₂ → SO₂\n2SO₂ + O₂ →(V₂O₅, 450°C) → 2SO₃ (contact process)\nSO₃ + H₂O → H₂SO₄\nSO₃ + H₂SO₄ → H₂S₂O₇ (oleum)', bs:'', n:'' },

  { cat:'b16-sulphur', cl:'c-pb',
    f:'S + O₂ → SO₂ / SO₂ is RA: Fe³⁺ + SO₂ → Fe²⁺ + SO₄²⁻ / MnO₄⁻ + SO₂ → Mn²⁺', fs:'SO₂ as reducing agent',
    b:'SO₂ is RA → Fe³⁺ + SO₂ → Fe²⁺ + SO₄²⁻(aq)\nMnO₄⁻ + SO₂ + H⁺ → Mn²⁺ + SO₄²⁻\nSO₂ is OA: H₂S + SO₂ → S↓ + H₂O', bs:'', n:'' },

  { cat:'b16-sulphur', cl:'c-pb',
    f:'S + O₂ →(Δ) SO₂ / S→SO₂→SO₃→H₂SO₄ / Na₂SO₄ + H₂O + SO₂ → NaHSO₃ / NaHSO₄ + NaCl → Na₂SO₄ + HCl', fs:'Sulphate reactions',
    b:'Na₂SO₄ + H₂O + Cl₂ → Na₂SO₄ + HCl (via SO₃)\nNaHSO₄ + NaCl → Na₂SO₄ + HCl\nSO₂ + H₂O + Cl₂ → H₂SO₄ + HCl\nSO₃ + H₂O + Cl → H₂SO₄ + HCl', bs:'', n:'' },

  { cat:'b16-sulphur', cl:'c-pb',
    f:'conc H₂SO₄ as dehydrating agent — 3 reactions (C₁₂H₂₂O₁₁, HCOOH, HNO₃)?', fs:'',
    b:'C₁₂H₂₂O₁₁ + conc H₂SO₄ → 12C + 11H₂O (charring)\nconc H₂SO₄ + HCOOH → CO↑ + H₂O\nconc H₂SO₄ + HNO₃ → NO₂⁺ + H₂SO₄⁻ (nitronium ion — nitration)', bs:'', n:'' , imp:true },

  { cat:'b16-sulphur', cl:'c-pb',
    f:'Cu + H₂SO₄(conc) → ? / C(s) + H₂SO₄(conc) → ?', fs:'Conc H₂SO₄ as OA',
    b:'Cu + 2H₂SO₄(conc) → CuSO₄ + SO₂↑ + H₂O\nC + 2H₂SO₄(conc) → CO₂↑ + 2SO₂↑ + 2H₂O', bs:'Conc H₂SO₄ oxidises Cu and C', n:'' , imp:true },

  // Group 17 (Image 4) — new halogen reactions
  { cat:'b17-fluorine', cl:'c-pb',
    f:'F₂ + Cl⁻ → F⁻ + Cl₂ / Cl₂ + F⁻ → X (why)?', fs:'Halogen displacement',
    b:'F₂ + 2Cl⁻ → 2F⁻ + Cl₂ (F₂ displaces Cl⁻ — stronger OA)\nCl₂ + F⁻ → No reaction (Cl₂ weaker than F₂)\nF₂ > Cl₂ > Br₂ > I₂ (oxidising power)', bs:'', n:'' },

  { cat:'b17-chlorine', cl:'c-pb',
    f:'MnO₂ + NaCl + H₂SO₄ → MnCl₂ + NaHSO₄ + H₂O + Cl₂↑ / Cl₂ + 2Br⁻ → Br₂ + 2Cl⁻', fs:'Chlorine preparation and reactions',
    b:'MnO₂ + 2NaCl + 2H₂SO₄ → MnCl₂ + 2NaHSO₄ + H₂O + Cl₂↑\nCl₂ + 2Br⁻ → Br₂ + 2Cl⁻\nCl₂ + 2Fe²⁺ → 2Fe³⁺ + 2Cl⁻ (OA)', bs:'', n:'' , imp:true },

  { cat:'b17-chlorine', cl:'c-pb',
    f:'Na₂SO₄ + Cl₂ + H₂O → Na₂SO₄ + HCl / SO₂ + H₂O + Cl₂ → H₂SO₄ + HCl / I₂ + H₂O + Cl₂ → HIO₃ + HCl', fs:'Cl₂ oxidising reactions',
    b:'Na₂SO₃ + Cl₂ + H₂O → Na₂SO₄ + 2HCl\nSO₂ + 2H₂O + Cl₂ → H₂SO₄ + 2HCl\nI₂ + H₂O + Cl₂(5) → 2HIO₃ + 10HCl', bs:'', n:'' , imp:true },

  { cat:'b17-chlorine', cl:'c-pb',
    f:'NaCl + H₂SO₄ → NaHSO₄ + HCl / KMnO₄ + HCl → KCl + MnCl₂ + Cl₂ + H₂O', fs:'HCl and Cl₂ from salts',
    b:'NaCl + H₂SO₄ → NaHSO₄ + HCl↑ (conc H₂SO₄)\n2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O\nNaOH(dil) + Cl₂ → NaCl + NaOCl + H₂O (cold)\nNaOH(conc) + Cl₂ → NaCl + NaClO₃ + H₂O (hot)', bs:'', n:'' , imp:true },

  { cat:'b17-chlorine', cl:'c-pb',
    f:'FeO + Cl₂ + H₂SO₄ → FeCl₂ + ... / FeBr₂ + Cl₂ → FeCl₃ / Ca(OCl)₂·CaCl₂·Ca(OH)₂ + Cl₂ → ?', fs:'',
    b:'FeBr₂ + Cl₂ → FeCl₂ + Br₂ (Cl₂ displaces Br₂)\nFeO₃ + Cl₂ + H₂SO₄ → FeSO₄ + Cl₂ (redox)\nBleaching powder + Cl₂: bleaching action via Ca(OCl)₂ releasing Cl₂ in moist conditions', bs:'', n:'' },

  { cat:'b17-halogens', cl:'c-pb',
    f:'Aqua regia: 3HCl:1HNO₃ / Au + aqua regia → ? / Pt + aqua regia → ?', fs:'',
    b:'Au + NO₃⁻ + Cl⁻ + H⁺ → AuCl₄⁻ + NO\nPt + NO₃⁻ + Cl⁻ + H⁺ → PtCl₆²⁻ + NO\nAqua regia dissolves noble metals via complexation', bs:'', n:'' },

  { cat:'b17-halogens', cl:'c-pb',
    f:'U + ClF₃ → UF₆ + ClF / V + ClF₃ → VF₅ + ...', fs:'Interhalogen as fluorinating agent',
    b:'U + ClF₃ → UF₆ + ClF\nInterhalogens are powerful fluorinating agents', bs:'', n:'' },

  // Group 18 new (Image 4)
  { cat:'b18-xe', cl:'c-pb',
    f:'Ra →(222, 86) Rn + He / Xe + F₂(1:5, 400°C) → XeF₂ / Xe + F₂(1:1, 400°C) → ?', fs:'Xe and Rn reactions',
    b:'Ra → ²²²Rn + ⁴He (α decay)\nXe + F₂(1:5 Xe excess) → XeF₂\nXe + F₂(1:1) → XeF₂ (also XeF₄ with 1:20)\nXe + F₂(excess, 1:20) → XeF₆', bs:'', n:'' },

  { cat:'b18-xe', cl:'c-pb',
    f:'XeF₂ + PF₅ → (XeF)⁺PF₆⁻ / XeF₄ + SbF₅ → (XeF₃)⁺SbF₆⁻', fs:'Xe fluorides as F⁻ donors',
    b:'XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻\nXeF₄ + SbF₅ → [XeF₃]⁺[SbF₆]⁻\nXeF₆ + NaF → Na⁺[XeF₇]⁻ (F⁻ acceptor)', bs:'', n:'' , imp:true },

  { cat:'b18-xe', cl:'c-pb',
    f:'XeOF₄ + H₂O → XeO₂F₂ + HF / XeO₂F₂ →(hν) XeO₃ + HF', fs:'Xe oxyfluoride hydrolysis',
    b:'XeOF₄ + H₂O → XeO₂F₂ + 2HF\nXeO₂F₂ →(hν/Δ) → XeO₃ + HF', bs:'', n:'' },

  { cat:'b18-noble', cl:'c-pb',
    f:'XeF₄ + O₂F₂ → XeF₆ + O₂ / XeF₂ + O₂F₂ → XeF₄ + O₂ (alternate prep)', fs:'Alternative Xe fluoride preps',
    b:'XeF₄ + O₂F₂ → XeF₆ + O₂\nXeF₂ + O₂F₂ → XeF₄ + O₂', bs:'O₂F₂ is a stronger fluorinating agent', n:'' },

];
