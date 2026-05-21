// families.js — Character Family groups for the Explore tab
// Each family has: id, component, componentPinyin, componentMeaning,
//                  type ("phonetic" | "semantic"), description, members[]
// members[]: { character, pinyin, meaning }

const CHARACTER_FAMILIES = [

  // ══════════════════════════════════════════════════════════
  // PHONETIC FAMILIES — the shared component hints at the sound
  // ══════════════════════════════════════════════════════════

  {
    id: "qing",
    component: "青",
    componentPinyin: "qīng",
    componentMeaning: "blue-green / clear",
    type: "phonetic",
    description: "These characters all contain 青. Notice how their sounds echo qīng — the component is acting as a pronunciation hint!",
    members: [
      { character: "青", pinyin: "qīng",  meaning: "blue-green / young" },
      { character: "清", pinyin: "qīng",  meaning: "clear / clean" },
      { character: "请", pinyin: "qǐng",  meaning: "please / invite" },
      { character: "情", pinyin: "qíng",  meaning: "feeling / emotion" },
      { character: "睛", pinyin: "jīng",  meaning: "eyeball" },
      { character: "静", pinyin: "jìng",  meaning: "quiet / still" },
    ]
  },

  {
    id: "bao",
    component: "包",
    componentPinyin: "bāo",
    componentMeaning: "wrap / package",
    type: "phonetic",
    description: "These characters contain 包. Their sounds are all variations of bāo/bào/pào/pǎo.",
    members: [
      { character: "包", pinyin: "bāo",  meaning: "wrap / package / bag" },
      { character: "抱", pinyin: "bào",  meaning: "hug / hold in arms" },
      { character: "泡", pinyin: "pào",  meaning: "bubble / soak" },
      { character: "炮", pinyin: "pào",  meaning: "cannon / firecracker" },
      { character: "跑", pinyin: "pǎo",  meaning: "run" },
      { character: "饱", pinyin: "bǎo",  meaning: "full (after eating)" },
      { character: "报", pinyin: "bào",  meaning: "report / newspaper" },
      { character: "胞", pinyin: "bāo",  meaning: "cell / born of same womb" },
    ]
  },

  {
    id: "fang",
    component: "方",
    componentPinyin: "fāng",
    componentMeaning: "square / direction",
    type: "phonetic",
    description: "These characters contain 方. Their sounds are all variations of fāng/fáng/fǎng/fàng.",
    members: [
      { character: "方", pinyin: "fāng",  meaning: "square / direction / method" },
      { character: "放", pinyin: "fàng",  meaning: "put / release / let go" },
      { character: "防", pinyin: "fáng",  meaning: "defend / prevent" },
      { character: "房", pinyin: "fáng",  meaning: "room / house" },
      { character: "访", pinyin: "fǎng",  meaning: "visit / inquire" },
      { character: "仿", pinyin: "fǎng",  meaning: "imitate / copy" },
      { character: "芳", pinyin: "fāng",  meaning: "fragrant / virtuous" },
    ]
  },

  {
    id: "gong",
    component: "工",
    componentPinyin: "gōng",
    componentMeaning: "work / craft",
    type: "phonetic",
    description: "These characters contain 工 (or a variant). Their sounds cluster around gōng and hóng.",
    members: [
      { character: "工", pinyin: "gōng",  meaning: "work / craft / worker" },
      { character: "功", pinyin: "gōng",  meaning: "merit / skill / success" },
      { character: "攻", pinyin: "gōng",  meaning: "attack / study hard" },
      { character: "红", pinyin: "hóng",  meaning: "red" },
      { character: "虹", pinyin: "hóng",  meaning: "rainbow" },
      { character: "空", pinyin: "kōng",  meaning: "empty / sky / air" },
      { character: "江", pinyin: "jiāng", meaning: "river (large)" },
    ]
  },

  {
    id: "ma",
    component: "马",
    componentPinyin: "mǎ",
    componentMeaning: "horse",
    type: "phonetic",
    description: "These characters contain 马. As a phonetic hint, 马 leads to sounds like mā/mǎ/mà/ma and even qí (骑).",
    members: [
      { character: "马", pinyin: "mǎ",  meaning: "horse" },
      { character: "妈", pinyin: "mā",  meaning: "mum / mother" },
      { character: "骂", pinyin: "mà",  meaning: "scold / curse" },
      { character: "吗", pinyin: "ma",  meaning: "(yes/no question particle)" },
      { character: "码", pinyin: "mǎ",  meaning: "code / number" },
      { character: "骑", pinyin: "qí",  meaning: "ride (a bike or horse)" },
    ]
  },

  {
    id: "gu",
    component: "古",
    componentPinyin: "gǔ",
    componentMeaning: "ancient / old",
    type: "phonetic",
    description: "These characters contain 古. Their sounds cluster around gǔ/gù/gū and kǔ.",
    members: [
      { character: "古", pinyin: "gǔ",  meaning: "ancient / old" },
      { character: "故", pinyin: "gù",  meaning: "reason / old / therefore" },
      { character: "苦", pinyin: "kǔ",  meaning: "bitter / suffer / hardship" },
      { character: "固", pinyin: "gù",  meaning: "solid / firm / stubbornly" },
      { character: "姑", pinyin: "gū",  meaning: "aunt (father's sister)" },
      { character: "鼓", pinyin: "gǔ",  meaning: "drum / beat" },
      { character: "枯", pinyin: "kū",  meaning: "withered / dried up" },
    ]
  },

  {
    id: "ke",
    component: "可",
    componentPinyin: "kě",
    componentMeaning: "can / may / approve",
    type: "phonetic",
    description: "These characters contain 可. Their sounds cluster around kě/hé/gē.",
    members: [
      { character: "可", pinyin: "kě",  meaning: "can / may / approve" },
      { character: "何", pinyin: "hé",  meaning: "what / why / how" },
      { character: "河", pinyin: "hé",  meaning: "river" },
      { character: "哥", pinyin: "gē",  meaning: "older brother" },
      { character: "歌", pinyin: "gē",  meaning: "song / sing" },
    ]
  },

  {
    id: "si_temple",
    component: "寺",
    componentPinyin: "sì",
    componentMeaning: "temple",
    type: "phonetic",
    description: "These characters contain 寺. As a phonetic component, 寺 leads to sounds like shí/shī/chí/dài/tè.",
    members: [
      { character: "寺", pinyin: "sì",   meaning: "temple / monastery" },
      { character: "时", pinyin: "shí",  meaning: "time / moment / hour" },
      { character: "诗", pinyin: "shī",  meaning: "poetry / poem" },
      { character: "持", pinyin: "chí",  meaning: "hold / maintain" },
      { character: "待", pinyin: "dài",  meaning: "wait / treat / stay" },
      { character: "特", pinyin: "tè",   meaning: "special / particular" },
    ]
  },

  {
    id: "dong",
    component: "东",
    componentPinyin: "dōng",
    componentMeaning: "east",
    type: "phonetic",
    description: "These characters contain 东. Their sounds all cluster around dōng/dòng/dǒng.",
    members: [
      { character: "东", pinyin: "dōng",  meaning: "east" },
      { character: "动", pinyin: "dòng",  meaning: "move / stir / action" },
      { character: "冻", pinyin: "dòng",  meaning: "freeze / frozen" },
      { character: "懂", pinyin: "dǒng",  meaning: "understand / know" },
      { character: "洞", pinyin: "dòng",  meaning: "hole / cave / tunnel" },
    ]
  },

  {
    id: "fen",
    component: "分",
    componentPinyin: "fēn",
    componentMeaning: "divide / minute / point",
    type: "phonetic",
    description: "These characters contain 分. Their sounds cluster around fēn/fěn/fèn/pén/pín.",
    members: [
      { character: "分", pinyin: "fēn",  meaning: "divide / minute / point" },
      { character: "粉", pinyin: "fěn",  meaning: "powder / pink / flour" },
      { character: "份", pinyin: "fèn",  meaning: "portion / part / share" },
      { character: "盆", pinyin: "pén",  meaning: "basin / pot / bowl" },
      { character: "纷", pinyin: "fēn",  meaning: "numerous / confused" },
      { character: "贫", pinyin: "pín",  meaning: "poor / poverty" },
    ]
  },

  {
    id: "zhong",
    component: "中",
    componentPinyin: "zhōng",
    componentMeaning: "middle / centre",
    type: "phonetic",
    description: "These characters contain 中. Their sounds cluster around zhōng/zhǒng/chōng.",
    members: [
      { character: "中", pinyin: "zhōng",  meaning: "middle / centre / China" },
      { character: "忠", pinyin: "zhōng",  meaning: "loyal / faithful" },
      { character: "钟", pinyin: "zhōng",  meaning: "clock / bell" },
      { character: "种", pinyin: "zhǒng",  meaning: "kind / type / seed" },
      { character: "冲", pinyin: "chōng",  meaning: "rush / charge / rinse" },
    ]
  },

  {
    id: "cheng",
    component: "成",
    componentPinyin: "chéng",
    componentMeaning: "become / succeed",
    type: "phonetic",
    description: "These characters contain 成. Their sounds all cluster around chéng/shèng.",
    members: [
      { character: "成", pinyin: "chéng",  meaning: "become / succeed / accomplish" },
      { character: "城", pinyin: "chéng",  meaning: "city / town / wall" },
      { character: "程", pinyin: "chéng",  meaning: "journey / procedure / degree" },
      { character: "诚", pinyin: "chéng",  meaning: "sincere / honest" },
      { character: "盛", pinyin: "shèng",  meaning: "flourishing / magnificent" },
      { character: "乘", pinyin: "chéng",  meaning: "ride / multiply / take advantage" },
    ]
  },

  {
    id: "zhu_master",
    component: "主",
    componentPinyin: "zhǔ",
    componentMeaning: "main / master / host",
    type: "phonetic",
    description: "These characters contain 主. Their sounds all cluster around zhǔ/zhù.",
    members: [
      { character: "主", pinyin: "zhǔ",  meaning: "main / master / host" },
      { character: "住", pinyin: "zhù",  meaning: "live / reside / stop" },
      { character: "注", pinyin: "zhù",  meaning: "pour / concentrate / note" },
      { character: "柱", pinyin: "zhù",  meaning: "pillar / column" },
      { character: "煮", pinyin: "zhǔ",  meaning: "boil / cook" },
      { character: "驻", pinyin: "zhù",  meaning: "be stationed / halt" },
    ]
  },

  {
    id: "ge_each",
    component: "各",
    componentPinyin: "gè",
    componentMeaning: "each / every",
    type: "phonetic",
    description: "These characters contain 各. Their sounds cluster around gè/kè/gé/luò.",
    members: [
      { character: "各", pinyin: "gè",  meaning: "each / every / various" },
      { character: "客", pinyin: "kè",  meaning: "guest / customer / visitor" },
      { character: "格", pinyin: "gé",  meaning: "grid / style / pattern" },
      { character: "络", pinyin: "luò", meaning: "net / bind / connect" },
      { character: "落", pinyin: "luò", meaning: "fall / drop / settle" },
      { character: "略", pinyin: "lüè", meaning: "brief / strategy / slightly" },
    ]
  },

  {
    id: "mei_every",
    component: "每",
    componentPinyin: "měi",
    componentMeaning: "every / each",
    type: "phonetic",
    description: "These characters contain 每. Their sounds cluster around měi/méi/hǎi/huǐ.",
    members: [
      { character: "每", pinyin: "měi",  meaning: "every / each" },
      { character: "海", pinyin: "hǎi",  meaning: "sea / ocean" },
      { character: "梅", pinyin: "méi",  meaning: "plum / apricot" },
      { character: "悔", pinyin: "huǐ",  meaning: "regret / repent" },
      { character: "霉", pinyin: "méi",  meaning: "mould / bad luck" },
    ]
  },

  {
    id: "he_combine",
    component: "合",
    componentPinyin: "hé",
    componentMeaning: "combine / suit / close",
    type: "phonetic",
    description: "These characters contain 合. Their sounds cluster around hé/hā/dá/gē.",
    members: [
      { character: "合", pinyin: "hé",  meaning: "combine / suit / close" },
      { character: "哈", pinyin: "hā",  meaning: "laugh / breathe out" },
      { character: "答", pinyin: "dá",  meaning: "answer / reply" },
      { character: "盒", pinyin: "hé",  meaning: "box / case" },
      { character: "鸽", pinyin: "gē",  meaning: "pigeon / dove" },
      { character: "给", pinyin: "gěi", meaning: "give / for / to" },
    ]
  },

  {
    id: "liang_good",
    component: "良",
    componentPinyin: "liáng",
    componentMeaning: "good / fine",
    type: "phonetic",
    description: "These characters contain 良. Their sounds cluster around liáng/láng/làng.",
    members: [
      { character: "良", pinyin: "liáng",  meaning: "good / fine / virtuous" },
      { character: "粮", pinyin: "liáng",  meaning: "grain / food / provisions" },
      { character: "郎", pinyin: "láng",   meaning: "young man / official" },
      { character: "浪", pinyin: "làng",   meaning: "wave / wasteful / dissolute" },
      { character: "狼", pinyin: "láng",   meaning: "wolf" },
    ]
  },

  {
    id: "gong_together",
    component: "共",
    componentPinyin: "gòng",
    componentMeaning: "together / total / share",
    type: "phonetic",
    description: "These characters contain 共. Their sounds cluster around gōng/gòng/hóng.",
    members: [
      { character: "共", pinyin: "gòng",  meaning: "together / total / share" },
      { character: "供", pinyin: "gōng",  meaning: "supply / offer / provide" },
      { character: "洪", pinyin: "hóng",  meaning: "flood / vast / huge" },
      { character: "恭", pinyin: "gōng",  meaning: "respectful / reverent" },
      { character: "拱", pinyin: "gǒng",  meaning: "arch / fold hands in greeting" },
    ]
  },

  {
    id: "zhe_person",
    component: "者",
    componentPinyin: "zhě",
    componentMeaning: "person (who does sth)",
    type: "phonetic",
    description: "These characters contain 者. Their sounds cluster around zhě/zhù/dōu/dǔ.",
    members: [
      { character: "者", pinyin: "zhě",  meaning: "person / one who" },
      { character: "都", pinyin: "dōu",  meaning: "all / both / already" },
      { character: "著", pinyin: "zhù",  meaning: "notable / write / clearly" },
      { character: "赌", pinyin: "dǔ",   meaning: "gamble / bet" },
      { character: "堵", pinyin: "dǔ",   meaning: "block / wall / traffic jam" },
    ]
  },

  {
    id: "yi_easy",
    component: "易",
    componentPinyin: "yì",
    componentMeaning: "easy / change / exchange",
    type: "phonetic",
    description: "These characters share the 昜 phonetic component (a variant of 易). Their sounds cluster around chǎng/tāng/yáng/cháng.",
    members: [
      { character: "易", pinyin: "yì",    meaning: "easy / change / exchange" },
      { character: "场", pinyin: "chǎng", meaning: "field / place / occasion" },
      { character: "汤", pinyin: "tāng",  meaning: "soup / hot water" },
      { character: "阳", pinyin: "yáng",  meaning: "sun / positive / male" },
      { character: "肠", pinyin: "cháng", meaning: "intestine / gut" },
    ]
  },


  // ══════════════════════════════════════════════════════════
  // SEMANTIC FAMILIES — the shared radical hints at the meaning
  // ══════════════════════════════════════════════════════════

  {
    id: "water",
    component: "氵",
    componentPinyin: "shuǐ",
    componentMeaning: "water (radical)",
    type: "semantic",
    description: "The 氵 (three-drops-water) radical marks characters related to water, liquids, or flowing things.",
    members: [
      { character: "河", pinyin: "hé",   meaning: "river" },
      { character: "海", pinyin: "hǎi",  meaning: "sea / ocean" },
      { character: "湖", pinyin: "hú",   meaning: "lake" },
      { character: "汤", pinyin: "tāng", meaning: "soup / hot water" },
      { character: "游", pinyin: "yóu",  meaning: "swim / travel / play" },
      { character: "洗", pinyin: "xǐ",   meaning: "wash / clean" },
      { character: "油", pinyin: "yóu",  meaning: "oil / grease" },
      { character: "汁", pinyin: "zhī",  meaning: "juice / liquid" },
      { character: "清", pinyin: "qīng", meaning: "clear / clean / pure" },
      { character: "泡", pinyin: "pào",  meaning: "bubble / soak" },
      { character: "港", pinyin: "gǎng", meaning: "harbour / port / Hong Kong" },
    ]
  },

  {
    id: "person_left",
    component: "亻",
    componentPinyin: "rén",
    componentMeaning: "person (radical)",
    type: "semantic",
    description: "The 亻 (standing-person) radical marks characters related to people or human actions.",
    members: [
      { character: "你", pinyin: "nǐ",   meaning: "you" },
      { character: "他", pinyin: "tā",   meaning: "he / him" },
      { character: "们", pinyin: "men",  meaning: "(plural suffix)" },
      { character: "住", pinyin: "zhù",  meaning: "live / reside" },
      { character: "做", pinyin: "zuò",  meaning: "do / make" },
      { character: "借", pinyin: "jiè",  meaning: "borrow / lend" },
      { character: "位", pinyin: "wèi",  meaning: "position / seat / (polite MW for person)" },
      { character: "休", pinyin: "xiū",  meaning: "rest / stop" },
    ]
  },

  {
    id: "wood",
    component: "木",
    componentPinyin: "mù",
    componentMeaning: "wood / tree",
    type: "semantic",
    description: "The 木 (tree/wood) radical marks characters related to trees, wood, or furniture.",
    members: [
      { character: "树", pinyin: "shù",   meaning: "tree" },
      { character: "桌", pinyin: "zhuō",  meaning: "table / desk" },
      { character: "椅", pinyin: "yǐ",    meaning: "chair" },
      { character: "楼", pinyin: "lóu",   meaning: "building / floor / storey" },
      { character: "桥", pinyin: "qiáo",  meaning: "bridge" },
      { character: "林", pinyin: "lín",   meaning: "forest / grove" },
      { character: "森", pinyin: "sēn",   meaning: "dense forest / gloomy" },
      { character: "校", pinyin: "xiào",  meaning: "school / proofread" },
    ]
  },

  {
    id: "mouth",
    component: "口",
    componentPinyin: "kǒu",
    componentMeaning: "mouth",
    type: "semantic",
    description: "The 口 (mouth) radical marks characters related to speaking, eating, or sounds.",
    members: [
      { character: "吃", pinyin: "chī",   meaning: "eat" },
      { character: "喝", pinyin: "hē",    meaning: "drink" },
      { character: "唱", pinyin: "chàng", meaning: "sing" },
      { character: "叫", pinyin: "jiào",  meaning: "call / shout / be called" },
      { character: "哭", pinyin: "kū",    meaning: "cry / weep" },
      { character: "喂", pinyin: "wèi",   meaning: "hello (on phone) / hey / feed" },
      { character: "吗", pinyin: "ma",    meaning: "(yes/no question particle)" },
      { character: "吧", pinyin: "ba",    meaning: "(suggestion particle)" },
      { character: "呢", pinyin: "ne",    meaning: "(follow-up question particle)" },
    ]
  },

  {
    id: "woman",
    component: "女",
    componentPinyin: "nǚ",
    componentMeaning: "woman / female",
    type: "semantic",
    description: "The 女 (woman) radical marks characters related to women, family roles, or relationships.",
    members: [
      { character: "妈", pinyin: "mā",   meaning: "mum / mother" },
      { character: "姐", pinyin: "jiě",  meaning: "older sister" },
      { character: "妹", pinyin: "mèi",  meaning: "younger sister" },
      { character: "她", pinyin: "tā",   meaning: "she / her" },
      { character: "姓", pinyin: "xìng", meaning: "surname / be surnamed" },
      { character: "好", pinyin: "hǎo",  meaning: "good / well" },
      { character: "奶", pinyin: "nǎi",  meaning: "milk / grandma (paternal)" },
      { character: "婚", pinyin: "hūn",  meaning: "marriage / wed" },
    ]
  },

  {
    id: "heart",
    component: "心/忄",
    componentPinyin: "xīn",
    componentMeaning: "heart / mind / feeling",
    type: "semantic",
    description: "The 心 (bottom) or 忄 (left-side) heart radical marks characters related to emotions, thinking, or mental states.",
    members: [
      { character: "想", pinyin: "xiǎng", meaning: "want / think / miss" },
      { character: "忙", pinyin: "máng",  meaning: "busy" },
      { character: "忘", pinyin: "wàng",  meaning: "forget" },
      { character: "怕", pinyin: "pà",    meaning: "fear / be afraid of" },
      { character: "情", pinyin: "qíng",  meaning: "feeling / emotion" },
      { character: "快", pinyin: "kuài",  meaning: "fast / quick / soon" },
      { character: "悔", pinyin: "huǐ",   meaning: "regret / repent" },
      { character: "爱", pinyin: "ài",    meaning: "love / like" },
      { character: "感", pinyin: "gǎn",   meaning: "feel / sense / be moved" },
    ]
  },

  {
    id: "fire",
    component: "火/灬",
    componentPinyin: "huǒ",
    componentMeaning: "fire / heat",
    type: "semantic",
    description: "The 火 (left-side) or 灬 (bottom four-dots) fire radical marks characters related to heat, fire, or cooking.",
    members: [
      { character: "热", pinyin: "rè",    meaning: "hot / heat" },
      { character: "烤", pinyin: "kǎo",   meaning: "roast / bake / grill" },
      { character: "炒", pinyin: "chǎo",  meaning: "stir-fry / sauté" },
      { character: "灯", pinyin: "dēng",  meaning: "lamp / light" },
      { character: "烦", pinyin: "fán",   meaning: "annoyed / bored / troubled" },
      { character: "煮", pinyin: "zhǔ",   meaning: "boil / cook" },
      { character: "烧", pinyin: "shāo",  meaning: "burn / cook / fever" },
      { character: "炸", pinyin: "zhá",   meaning: "deep-fry / explode" },
    ]
  },

  {
    id: "hand",
    component: "扌",
    componentPinyin: "shǒu",
    componentMeaning: "hand (radical)",
    type: "semantic",
    description: "The 扌 (hand) radical marks characters involving hands or physical actions.",
    members: [
      { character: "打", pinyin: "dǎ",   meaning: "hit / play / do (various actions)" },
      { character: "找", pinyin: "zhǎo", meaning: "look for / find" },
      { character: "推", pinyin: "tuī",  meaning: "push" },
      { character: "拉", pinyin: "lā",   meaning: "pull / drag" },
      { character: "接", pinyin: "jiē",  meaning: "receive / pick up / connect" },
      { character: "握", pinyin: "wò",   meaning: "grasp / hold / shake (hands)" },
      { character: "挥", pinyin: "huī",  meaning: "wave / brandish" },
      { character: "拍", pinyin: "pāi",  meaning: "clap / pat / shoot (photo)" },
      { character: "换", pinyin: "huàn", meaning: "exchange / change / swap" },
    ]
  },

  {
    id: "speech",
    component: "讠",
    componentPinyin: "yán",
    componentMeaning: "speech / language (radical)",
    type: "semantic",
    description: "The 讠(speech) radical marks characters related to language, communication, or talking.",
    members: [
      { character: "说", pinyin: "shuō",  meaning: "speak / say / talk" },
      { character: "话", pinyin: "huà",   meaning: "speech / words / language" },
      { character: "读", pinyin: "dú",    meaning: "read / study" },
      { character: "请", pinyin: "qǐng",  meaning: "please / invite / ask" },
      { character: "谢", pinyin: "xiè",   meaning: "thank / decline" },
      { character: "语", pinyin: "yǔ",    meaning: "language / words" },
      { character: "讲", pinyin: "jiǎng", meaning: "speak / explain / lecture" },
      { character: "词", pinyin: "cí",    meaning: "word / term" },
      { character: "诗", pinyin: "shī",   meaning: "poem / poetry" },
      { character: "课", pinyin: "kè",    meaning: "class / lesson / subject" },
    ]
  },

  {
    id: "eye",
    component: "目",
    componentPinyin: "mù",
    componentMeaning: "eye",
    type: "semantic",
    description: "The 目 (eye) radical marks characters related to seeing or eyes.",
    members: [
      { character: "看", pinyin: "kàn",  meaning: "look / watch / read" },
      { character: "眼", pinyin: "yǎn",  meaning: "eye" },
      { character: "睛", pinyin: "jīng", meaning: "eyeball" },
      { character: "睡", pinyin: "shuì", meaning: "sleep" },
      { character: "眉", pinyin: "méi",  meaning: "eyebrow" },
      { character: "望", pinyin: "wàng", meaning: "hope / gaze into the distance" },
    ]
  },

  {
    id: "plant",
    component: "艹",
    componentPinyin: "cǎo",
    componentMeaning: "grass / plant (radical)",
    type: "semantic",
    description: "The 艹 (grass/plant) radical marks characters related to plants, herbs, or vegetation.",
    members: [
      { character: "花", pinyin: "huā",  meaning: "flower / spend (money/time)" },
      { character: "草", pinyin: "cǎo",  meaning: "grass / draft / careless" },
      { character: "茶", pinyin: "chá",  meaning: "tea" },
      { character: "菜", pinyin: "cài",  meaning: "vegetable / dish / food" },
      { character: "茄", pinyin: "qié",  meaning: "eggplant / aubergine" },
      { character: "药", pinyin: "yào",  meaning: "medicine / drug" },
      { character: "苹", pinyin: "píng", meaning: "apple (in 苹果)" },
      { character: "蓝", pinyin: "lán",  meaning: "blue / indigo" },
      { character: "葡", pinyin: "pú",   meaning: "grape (in 葡萄)" },
      { character: "芒", pinyin: "máng", meaning: "mango (in 芒果) / sharp tip" },
    ]
  },

  {
    id: "bamboo",
    component: "竹/⺮",
    componentPinyin: "zhú",
    componentMeaning: "bamboo (radical)",
    type: "semantic",
    description: "The 竹/⺮ (bamboo) radical marks characters connected to bamboo objects or tools.",
    members: [
      { character: "笔", pinyin: "bǐ",    meaning: "pen / pencil / brush" },
      { character: "笑", pinyin: "xiào",  meaning: "laugh / smile" },
      { character: "答", pinyin: "dá",    meaning: "answer / reply" },
      { character: "算", pinyin: "suàn",  meaning: "calculate / count / regard as" },
      { character: "篮", pinyin: "lán",   meaning: "basket (篮球 = basketball)" },
      { character: "筷", pinyin: "kuài",  meaning: "chopstick (in 筷子)" },
      { character: "管", pinyin: "guǎn",  meaning: "tube / manage / control" },
      { character: "等", pinyin: "děng",  meaning: "wait / equal / et cetera" },
    ]
  },

  {
    id: "metal",
    component: "钅",
    componentPinyin: "jīn",
    componentMeaning: "metal / gold (radical)",
    type: "semantic",
    description: "The 钅(metal) radical marks characters related to metals, tools, or objects made of metal.",
    members: [
      { character: "钱", pinyin: "qián",  meaning: "money / coin" },
      { character: "银", pinyin: "yín",   meaning: "silver / bank" },
      { character: "钟", pinyin: "zhōng", meaning: "clock / bell" },
      { character: "铅", pinyin: "qiān",  meaning: "lead (metal) / pencil (铅笔)" },
      { character: "铁", pinyin: "tiě",   meaning: "iron / determined" },
      { character: "键", pinyin: "jiàn",  meaning: "key / button" },
      { character: "锁", pinyin: "suǒ",   meaning: "lock / lock up" },
    ]
  },

  {
    id: "food_radical",
    component: "饣",
    componentPinyin: "shí",
    componentMeaning: "food / eat (radical)",
    type: "semantic",
    description: "The 饣(eat/food) radical marks characters related to food, eating, or hunger.",
    members: [
      { character: "饭", pinyin: "fàn",  meaning: "cooked rice / meal" },
      { character: "饿", pinyin: "è",    meaning: "hungry / starving" },
      { character: "饮", pinyin: "yǐn",  meaning: "drink / beverage" },
      { character: "饺", pinyin: "jiǎo", meaning: "dumpling (饺子)" },
      { character: "饼", pinyin: "bǐng", meaning: "flat bread / cake / biscuit" },
      { character: "饱", pinyin: "bǎo",  meaning: "full (after eating)" },
    ]
  },

  {
    id: "foot",
    component: "足",
    componentPinyin: "zú",
    componentMeaning: "foot / leg",
    type: "semantic",
    description: "The 足 (foot) radical marks characters related to feet, walking, or leg movements.",
    members: [
      { character: "跑", pinyin: "pǎo",  meaning: "run" },
      { character: "跳", pinyin: "tiào", meaning: "jump / hop / leap" },
      { character: "踢", pinyin: "tī",   meaning: "kick" },
      { character: "路", pinyin: "lù",   meaning: "road / path / route" },
      { character: "踩", pinyin: "cǎi",  meaning: "step on / tread" },
      { character: "跟", pinyin: "gēn",  meaning: "heel / follow / with / and" },
    ]
  },

  {
    id: "sun",
    component: "日",
    componentPinyin: "rì",
    componentMeaning: "sun / day",
    type: "semantic",
    description: "The 日 (sun/day) radical marks characters related to the sun, daylight, or time.",
    members: [
      { character: "时", pinyin: "shí",   meaning: "time / hour / moment" },
      { character: "明", pinyin: "míng",  meaning: "bright / clear / tomorrow" },
      { character: "晴", pinyin: "qíng",  meaning: "clear / sunny" },
      { character: "晚", pinyin: "wǎn",   meaning: "late / evening / night" },
      { character: "早", pinyin: "zǎo",   meaning: "early / morning" },
      { character: "昨", pinyin: "zuó",   meaning: "yesterday (in 昨天)" },
      { character: "星", pinyin: "xīng",  meaning: "star / week (in 星期)" },
      { character: "暖", pinyin: "nuǎn",  meaning: "warm" },
    ]
  },

  {
    id: "roof",
    component: "宀",
    componentPinyin: "mián",
    componentMeaning: "roof / home (radical)",
    type: "semantic",
    description: "The 宀 (roof) radical marks characters related to houses, homes, or enclosed spaces.",
    members: [
      { character: "家", pinyin: "jiā",  meaning: "home / family / house" },
      { character: "室", pinyin: "shì",  meaning: "room / office / chamber" },
      { character: "宿", pinyin: "sù",   meaning: "stay overnight / dormitory" },
      { character: "安", pinyin: "ān",   meaning: "peaceful / safe / install" },
      { character: "宝", pinyin: "bǎo",  meaning: "treasure / precious" },
      { character: "字", pinyin: "zì",   meaning: "character / word / letter" },
      { character: "容", pinyin: "róng", meaning: "contain / appearance / allow" },
    ]
  },

  {
    id: "flesh",
    component: "月/肉",
    componentPinyin: "ròu",
    componentMeaning: "flesh / body (radical)",
    type: "semantic",
    description: "The 月 radical in body-part characters is actually 肉 (flesh/meat), not 月 (moon). It marks body parts and organs.",
    members: [
      { character: "脸", pinyin: "liǎn",   meaning: "face" },
      { character: "脚", pinyin: "jiǎo",   meaning: "foot / leg" },
      { character: "肚", pinyin: "dù",     meaning: "belly / stomach" },
      { character: "背", pinyin: "bèi",    meaning: "back (of body) / carry on back" },
      { character: "胸", pinyin: "xiōng",  meaning: "chest / breast" },
      { character: "肩", pinyin: "jiān",   meaning: "shoulder" },
      { character: "腿", pinyin: "tuǐ",    meaning: "leg / thigh" },
      { character: "脖", pinyin: "bó",     meaning: "neck (in 脖子)" },
      { character: "腰", pinyin: "yāo",    meaning: "waist / lower back" },
      { character: "臂", pinyin: "bì",     meaning: "arm" },
    ]
  },

  {
    id: "thread",
    component: "纟",
    componentPinyin: "sī",
    componentMeaning: "silk / thread (radical)",
    type: "semantic",
    description: "The 纟(thread/silk) radical marks characters related to fabric, thread, or connections.",
    members: [
      { character: "红", pinyin: "hóng", meaning: "red" },
      { character: "绿", pinyin: "lǜ",   meaning: "green" },
      { character: "丝", pinyin: "sī",   meaning: "silk / thread / a tiny bit" },
      { character: "给", pinyin: "gěi",  meaning: "give / for" },
      { character: "经", pinyin: "jīng", meaning: "pass through / manage / scripture" },
      { character: "结", pinyin: "jié",  meaning: "knot / tie / result / settle" },
      { character: "纸", pinyin: "zhǐ",  meaning: "paper" },
      { character: "线", pinyin: "xiàn", meaning: "thread / line / wire" },
      { character: "细", pinyin: "xì",   meaning: "thin / fine / detailed" },
    ]
  },

  {
    id: "ice",
    component: "冫",
    componentPinyin: "bīng",
    componentMeaning: "ice (radical)",
    type: "semantic",
    description: "The 冫(two-drops-ice) radical marks characters related to cold, ice, or winter.",
    members: [
      { character: "冷", pinyin: "lěng",  meaning: "cold" },
      { character: "冰", pinyin: "bīng",  meaning: "ice / icy cold" },
      { character: "凉", pinyin: "liáng", meaning: "cool / cold / disappointed" },
      { character: "冻", pinyin: "dòng",  meaning: "freeze / frozen / numb with cold" },
      { character: "冲", pinyin: "chōng", meaning: "rush / rinse / charge" },
    ]
  },

  {
    id: "rain",
    component: "雨",
    componentPinyin: "yǔ",
    componentMeaning: "rain / weather",
    type: "semantic",
    description: "The 雨 (rain) radical marks characters related to weather phenomena.",
    members: [
      { character: "雪", pinyin: "xuě",   meaning: "snow" },
      { character: "雷", pinyin: "léi",   meaning: "thunder" },
      { character: "雾", pinyin: "wù",    meaning: "fog / mist" },
      { character: "霜", pinyin: "shuāng",meaning: "frost" },
      { character: "露", pinyin: "lù",    meaning: "dew / show / reveal" },
    ]
  },

  {
    id: "earth",
    component: "土",
    componentPinyin: "tǔ",
    componentMeaning: "earth / soil / ground",
    type: "semantic",
    description: "The 土 (earth/soil) radical marks characters related to ground, land, or building.",
    members: [
      { character: "地", pinyin: "dì",    meaning: "ground / earth / place" },
      { character: "在", pinyin: "zài",   meaning: "at / in / on / exist" },
      { character: "坐", pinyin: "zuò",   meaning: "sit / take (a vehicle)" },
      { character: "城", pinyin: "chéng", meaning: "city / town / wall" },
      { character: "场", pinyin: "chǎng", meaning: "field / place / occasion" },
      { character: "堵", pinyin: "dǔ",    meaning: "block / clog / wall" },
    ]
  },

  {
    id: "shell_money",
    component: "贝",
    componentPinyin: "bèi",
    componentMeaning: "shell / money (radical)",
    type: "semantic",
    description: "The 贝 (shell) radical marks characters related to money, value, or trade — ancient shells were used as currency.",
    members: [
      { character: "贵", pinyin: "guì",  meaning: "expensive / precious" },
      { character: "贺", pinyin: "hè",   meaning: "congratulate / celebrate" },
      { character: "财", pinyin: "cái",  meaning: "wealth / money / riches" },
      { character: "贸", pinyin: "mào",  meaning: "trade / commerce" },
      { character: "贫", pinyin: "pín",  meaning: "poor / poverty" },
      { character: "购", pinyin: "gòu",  meaning: "buy / purchase" },
      { character: "货", pinyin: "huò",  meaning: "goods / merchandise / money" },
    ]
  },

  {
    id: "power",
    component: "力",
    componentPinyin: "lì",
    componentMeaning: "strength / power",
    type: "semantic",
    description: "The 力 (strength) radical marks characters related to effort, power, or work.",
    members: [
      { character: "力", pinyin: "lì",    meaning: "strength / power / force" },
      { character: "加", pinyin: "jiā",   meaning: "add / increase / plus" },
      { character: "努", pinyin: "nǔ",    meaning: "strive / exert oneself" },
      { character: "劳", pinyin: "láo",   meaning: "labour / work hard / toil" },
      { character: "动", pinyin: "dòng",  meaning: "move / stir / action" },
      { character: "勇", pinyin: "yǒng",  meaning: "brave / courageous" },
      { character: "劝", pinyin: "quàn",  meaning: "advise / persuade / encourage" },
    ]
  },

  {
    id: "door",
    component: "门",
    componentPinyin: "mén",
    componentMeaning: "door / gate",
    type: "semantic",
    description: "The 门 (door/gate) radical marks characters related to openings or enclosed spaces.",
    members: [
      { character: "门", pinyin: "mén",  meaning: "door / gate / entrance" },
      { character: "问", pinyin: "wèn",  meaning: "ask / inquire" },
      { character: "间", pinyin: "jiān", meaning: "between / room / space" },
      { character: "闻", pinyin: "wén",  meaning: "hear / smell / news" },
      { character: "闪", pinyin: "shǎn", meaning: "flash / dodge / lightning" },
      { character: "闭", pinyin: "bì",   meaning: "close / shut" },
      { character: "闲", pinyin: "xián", meaning: "idle / free / leisurely" },
    ]
  },

  {
    id: "field",
    component: "田",
    componentPinyin: "tián",
    componentMeaning: "field / farmland",
    type: "semantic",
    description: "The 田 (field) radical marks characters related to farming, fields, or territory.",
    members: [
      { character: "田", pinyin: "tián",  meaning: "field / farmland" },
      { character: "男", pinyin: "nán",   meaning: "male / man" },
      { character: "界", pinyin: "jiè",   meaning: "boundary / world / field" },
      { character: "留", pinyin: "liú",   meaning: "stay / keep / leave behind" },
      { character: "累", pinyin: "lèi",   meaning: "tired / weary / pile up" },
    ]
  },

  {
    id: "knife",
    component: "刂",
    componentPinyin: "dāo",
    componentMeaning: "knife (radical)",
    type: "semantic",
    description: "The 刂 (knife) radical marks characters involving cutting, separating, or sharp actions.",
    members: [
      { character: "切", pinyin: "qiē",   meaning: "cut / slice / slice off" },
      { character: "别", pinyin: "bié",   meaning: "don't / other / separate" },
      { character: "判", pinyin: "pàn",   meaning: "judge / sentence / decide" },
      { character: "刺", pinyin: "cì",    meaning: "stab / prick / irritate" },
      { character: "利", pinyin: "lì",    meaning: "benefit / sharp / profit" },
      { character: "到", pinyin: "dào",   meaning: "arrive / reach / to" },
      { character: "刮", pinyin: "guā",   meaning: "scrape / blow (wind)" },
    ]
  },

  {
    id: "vehicle",
    component: "车",
    componentPinyin: "chē",
    componentMeaning: "vehicle / wheel",
    type: "semantic",
    description: "The 车 (vehicle) radical marks characters related to vehicles or transportation.",
    members: [
      { character: "车", pinyin: "chē",   meaning: "vehicle / car" },
      { character: "轻", pinyin: "qīng",  meaning: "light (weight) / easy" },
      { character: "辆", pinyin: "liàng", meaning: "(measure word for vehicles)" },
      { character: "输", pinyin: "shū",   meaning: "transport / lose (a contest)" },
      { character: "较", pinyin: "jiào",  meaning: "compare / relatively / rather" },
      { character: "转", pinyin: "zhuǎn", meaning: "turn / rotate / transfer" },
    ]
  },

  {
    id: "walk",
    component: "走",
    componentPinyin: "zǒu",
    componentMeaning: "walk / run (radical)",
    type: "semantic",
    description: "The 走 (walk) radical marks characters related to movement or going somewhere.",
    members: [
      { character: "走", pinyin: "zǒu",   meaning: "walk / go / leave" },
      { character: "起", pinyin: "qǐ",    meaning: "rise / start / get up" },
      { character: "超", pinyin: "chāo",  meaning: "exceed / surpass / super" },
      { character: "越", pinyin: "yuè",   meaning: "exceed / jump over / the more" },
      { character: "赶", pinyin: "gǎn",   meaning: "hurry / catch up / drive away" },
    ]
  },

  {
    id: "grain",
    component: "米",
    componentPinyin: "mǐ",
    componentMeaning: "rice / grain",
    type: "semantic",
    description: "The 米 (rice/grain) radical marks characters related to grains, food staples, or fine textures.",
    members: [
      { character: "米", pinyin: "mǐ",   meaning: "rice / metre" },
      { character: "粉", pinyin: "fěn",  meaning: "powder / flour / pink" },
      { character: "糖", pinyin: "táng", meaning: "sugar / candy / sweets" },
      { character: "粥", pinyin: "zhōu", meaning: "congee / rice porridge" },
      { character: "精", pinyin: "jīng", meaning: "refined / spirit / energy / skilled" },
      { character: "糕", pinyin: "gāo",  meaning: "cake / pastry" },
    ]
  },

  {
    id: "see",
    component: "见",
    componentPinyin: "jiàn",
    componentMeaning: "see / meet",
    type: "semantic",
    description: "The 见 (see) radical marks characters related to vision, observation, or appearance.",
    members: [
      { character: "见", pinyin: "jiàn",  meaning: "see / meet" },
      { character: "观", pinyin: "guān",  meaning: "observe / view / idea" },
      { character: "现", pinyin: "xiàn",  meaning: "appear / present / now" },
      { character: "规", pinyin: "guī",   meaning: "rule / compass / standard" },
      { character: "觉", pinyin: "jué",   meaning: "feel / sense / wake up" },
    ]
  },

  {
    id: "fish",
    component: "鱼",
    componentPinyin: "yú",
    componentMeaning: "fish",
    type: "semantic",
    description: "The 鱼 (fish) radical marks characters for different types of fish and seafood.",
    members: [
      { character: "鱼", pinyin: "yú",    meaning: "fish" },
      { character: "鲜", pinyin: "xiān",  meaning: "fresh / delicious / seafood" },
      { character: "鲤", pinyin: "lǐ",    meaning: "carp" },
      { character: "鲸", pinyin: "jīng",  meaning: "whale" },
      { character: "鳝", pinyin: "shàn",  meaning: "eel" },
      { character: "鲫", pinyin: "jì",    meaning: "crucian carp" },
    ]
  },

  {
    id: "bird",
    component: "鸟",
    componentPinyin: "niǎo",
    componentMeaning: "bird",
    type: "semantic",
    description: "The 鸟 (bird) radical marks characters for different types of birds.",
    members: [
      { character: "鸟", pinyin: "niǎo",  meaning: "bird" },
      { character: "鸡", pinyin: "jī",    meaning: "chicken" },
      { character: "鸭", pinyin: "yā",    meaning: "duck" },
      { character: "鹅", pinyin: "é",     meaning: "goose" },
      { character: "鸽", pinyin: "gē",    meaning: "pigeon / dove" },
      { character: "鹦", pinyin: "yīng",  meaning: "parrot (in 鹦鹉)" },
    ]
  },

  {
    id: "insect",
    component: "虫",
    componentPinyin: "chóng",
    componentMeaning: "insect / bug / worm",
    type: "semantic",
    description: "The 虫 (insect) radical marks characters for insects, reptiles, and small creatures.",
    members: [
      { character: "虫", pinyin: "chóng", meaning: "insect / bug / worm" },
      { character: "蛇", pinyin: "shé",   meaning: "snake" },
      { character: "蝴", pinyin: "hú",    meaning: "butterfly (in 蝴蝶)" },
      { character: "蝶", pinyin: "dié",   meaning: "butterfly" },
      { character: "蚊", pinyin: "wén",   meaning: "mosquito" },
      { character: "蜂", pinyin: "fēng",  meaning: "bee / wasp" },
      { character: "蟹", pinyin: "xiè",   meaning: "crab" },
    ]
  },

  {
    id: "mountain",
    component: "山",
    componentPinyin: "shān",
    componentMeaning: "mountain",
    type: "semantic",
    description: "The 山 (mountain) radical marks characters related to mountains, hills, or raised terrain.",
    members: [
      { character: "山", pinyin: "shān",   meaning: "mountain / hill" },
      { character: "岛", pinyin: "dǎo",    meaning: "island" },
      { character: "峰", pinyin: "fēng",   meaning: "mountain peak / summit" },
      { character: "崖", pinyin: "yá",     meaning: "cliff / precipice" },
      { character: "岁", pinyin: "suì",    meaning: "years old / year" },
      { character: "峡", pinyin: "xiá",    meaning: "gorge / strait" },
    ]
  },

  {
    id: "stone",
    component: "石",
    componentPinyin: "shí",
    componentMeaning: "stone / rock",
    type: "semantic",
    description: "The 石 (stone) radical marks characters related to minerals, rocks, or hard objects.",
    members: [
      { character: "石", pinyin: "shí",   meaning: "stone / rock" },
      { character: "碗", pinyin: "wǎn",   meaning: "bowl" },
      { character: "破", pinyin: "pò",    meaning: "break / broken / worn out" },
      { character: "砖", pinyin: "zhuān", meaning: "brick / tile" },
      { character: "研", pinyin: "yán",   meaning: "grind / study / research" },
      { character: "矿", pinyin: "kuàng", meaning: "mine / ore / mineral" },
    ]
  },

  {
    id: "big",
    component: "大",
    componentPinyin: "dà",
    componentMeaning: "big / large",
    type: "semantic",
    description: "The 大 (big/person with arms spread) component appears in characters often related to greatness, people, or nature.",
    members: [
      { character: "大", pinyin: "dà",   meaning: "big / large" },
      { character: "天", pinyin: "tiān", meaning: "sky / day / heaven" },
      { character: "太", pinyin: "tài",  meaning: "too / extremely" },
      { character: "夫", pinyin: "fū",   meaning: "husband / man" },
      { character: "奇", pinyin: "qí",   meaning: "strange / odd / wonderful" },
      { character: "美", pinyin: "měi",  meaning: "beautiful / pretty / good" },
    ]
  },

  {
    id: "child",
    component: "子",
    componentPinyin: "zǐ",
    componentMeaning: "child / son",
    type: "semantic",
    description: "The 子 (child) component appears in characters related to children, descendants, or small objects.",
    members: [
      { character: "子", pinyin: "zǐ",   meaning: "child / son / seed" },
      { character: "字", pinyin: "zì",   meaning: "character / word / letter" },
      { character: "孩", pinyin: "hái",  meaning: "child (in 孩子)" },
      { character: "孙", pinyin: "sūn",  meaning: "grandchild" },
      { character: "学", pinyin: "xué",  meaning: "study / learn / school" },
      { character: "孤", pinyin: "gū",   meaning: "orphan / lonely / isolated" },
    ]
  },

  {
    id: "clothing_radical",
    component: "衤",
    componentPinyin: "yī",
    componentMeaning: "clothing / garment (radical)",
    type: "semantic",
    description: "The 衤(clothing) radical marks characters related to garments or fabric items.",
    members: [
      { character: "被", pinyin: "bèi",  meaning: "quilt / by (passive marker)" },
      { character: "裤", pinyin: "kù",   meaning: "trousers / pants" },
      { character: "裙", pinyin: "qún",  meaning: "skirt" },
      { character: "补", pinyin: "bǔ",   meaning: "patch / repair / supplement" },
      { character: "袜", pinyin: "wà",   meaning: "sock / stocking" },
      { character: "袍", pinyin: "páo",  meaning: "robe / gown" },
    ]
  },

];
