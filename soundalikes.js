// soundalikes.js — Curated homophone groups for the Sound-Alikes view
// Every member in a group shares the exact same pinyin (including tone).
// Shape: { id, pinyin, description, members: [{ character, meaning }] }

const SOUND_ALIKES = [

  {
    id: "shi4",
    pinyin: "shì",
    description: "The busiest sound in Mandarin — 12 everyday characters!",
    members: [
      { character: "是", meaning: "to be / yes / is / are" },
      { character: "市", meaning: "city / market" },
      { character: "事", meaning: "matter / affair / event / thing" },
      { character: "室", meaning: "room / chamber / office" },
      { character: "式", meaning: "style / form / type / ceremony" },
      { character: "视", meaning: "look at / view / regard" },
      { character: "试", meaning: "test / try / attempt" },
      { character: "示", meaning: "show / indicate / display" },
      { character: "适", meaning: "suitable / fitting / comfortable" },
      { character: "世", meaning: "generation / world / era" },
      { character: "士", meaning: "scholar / soldier / gentleman" },
      { character: "势", meaning: "power / force / tendency / situation" },
    ]
  },

  {
    id: "yi4",
    pinyin: "yì",
    description: "Another 4th-tone giant — art, meaning, memory and more",
    members: [
      { character: "义", meaning: "righteousness / justice / meaning" },
      { character: "意", meaning: "idea / meaning / intention / wish" },
      { character: "易", meaning: "easy / change / trade" },
      { character: "艺", meaning: "art / skill / craft" },
      { character: "议", meaning: "discuss / opinion / suggest" },
      { character: "异", meaning: "different / strange / other" },
      { character: "益", meaning: "benefit / advantage / more" },
      { character: "译", meaning: "translate / interpret" },
      { character: "亿", meaning: "hundred million" },
      { character: "役", meaning: "service / labour / battle" },
      { character: "忆", meaning: "remember / recollect" },
      { character: "毅", meaning: "resolute / firm / determined" },
    ]
  },

  {
    id: "wei4",
    pinyin: "wèi",
    description: "Stomach, taste, guard, comfort — all sound the same",
    members: [
      { character: "为", meaning: "for / because of / in order to" },
      { character: "位", meaning: "position / place / seat / digit" },
      { character: "喂", meaning: "feed / hey! / hello (on phone)" },
      { character: "味", meaning: "taste / flavour / smell / sense" },
      { character: "未", meaning: "not yet / future / 8th earthly branch" },
      { character: "胃", meaning: "stomach" },
      { character: "卫", meaning: "guard / protect / defend" },
      { character: "畏", meaning: "fear / dread / be in awe of" },
      { character: "慰", meaning: "comfort / console / relieve" },
    ]
  },

  {
    id: "li4",
    pinyin: "lì",
    description: "Power, beauty, history, example — 10 characters, one sound",
    members: [
      { character: "力", meaning: "power / strength / force / effort" },
      { character: "立", meaning: "stand / establish / upright / instant" },
      { character: "利", meaning: "profit / advantage / sharp / benefit" },
      { character: "历", meaning: "experience / go through / calendar" },
      { character: "例", meaning: "example / case / rule / instance" },
      { character: "丽", meaning: "beautiful / gorgeous / pretty" },
      { character: "励", meaning: "encourage / strive / exert" },
      { character: "粒", meaning: "grain / particle / pellet" },
      { character: "厉", meaning: "strict / fierce / severe" },
      { character: "荔", meaning: "lychee (荔枝)" },
    ]
  },

  {
    id: "yan2",
    pinyin: "yán",
    description: "Words, rock, salt, research — 9 characters in one breath",
    members: [
      { character: "言", meaning: "word / speech / say / talk" },
      { character: "岩", meaning: "cliff / rock / crag" },
      { character: "炎", meaning: "inflammation / hot / blazing" },
      { character: "研", meaning: "grind / study / research" },
      { character: "严", meaning: "strict / serious / stern / severe" },
      { character: "沿", meaning: "along / edge / border / follow" },
      { character: "颜", meaning: "face / colour / prestige" },
      { character: "延", meaning: "extend / delay / invite / prolong" },
      { character: "盐", meaning: "salt" },
    ]
  },

  {
    id: "jian4",
    pinyin: "jiàn",
    description: "See, build, sword, recommend — a rich 4th-tone family",
    members: [
      { character: "见", meaning: "see / meet / appear / view" },
      { character: "建", meaning: "build / establish / construct" },
      { character: "件", meaning: "piece / item / document / measure word" },
      { character: "健", meaning: "healthy / strong / vigorous" },
      { character: "剑", meaning: "sword / sabre" },
      { character: "鉴", meaning: "mirror / examine / reflect / appraise" },
      { character: "荐", meaning: "recommend / introduce" },
      { character: "箭", meaning: "arrow" },
    ]
  },

  {
    id: "zhi4",
    pinyin: "zhì",
    description: "Wisdom, quality, system, will — all pronounced zhì",
    members: [
      { character: "志", meaning: "ambition / will / aspiration / record" },
      { character: "制", meaning: "system / manufacture / limit / control" },
      { character: "治", meaning: "govern / rule / treat / cure" },
      { character: "质", meaning: "quality / substance / nature / texture" },
      { character: "致", meaning: "cause / send / achieve / devote to" },
      { character: "智", meaning: "wisdom / intelligence / wit" },
      { character: "置", meaning: "place / install / buy / put aside" },
      { character: "至", meaning: "to / until / arrive at / most / extremely" },
    ]
  },

  {
    id: "qi4",
    pinyin: "qì",
    description: "Air, steam, abandon, rest — one sound, many meanings",
    members: [
      { character: "气", meaning: "air / breath / spirit / anger / weather" },
      { character: "汽", meaning: "steam / vapour / 汽车 = car" },
      { character: "器", meaning: "instrument / container / organ / talent" },
      { character: "弃", meaning: "abandon / give up / discard" },
      { character: "泣", meaning: "cry / weep / sob" },
      { character: "契", meaning: "contract / agreement / engrave" },
      { character: "砌", meaning: "build / lay bricks / pile up" },
      { character: "憩", meaning: "rest / take a break" },
    ]
  },

  {
    id: "feng1",
    pinyin: "fēng",
    description: "Wind, bees, maple, madness — the 1st-tone fēng family",
    members: [
      { character: "风", meaning: "wind / style / custom / manner" },
      { character: "丰", meaning: "abundant / plentiful / fertile" },
      { character: "封", meaning: "seal / close / envelop / bestow" },
      { character: "蜂", meaning: "bee / wasp / swarm" },
      { character: "峰", meaning: "mountain peak / summit / highest point" },
      { character: "枫", meaning: "maple (tree)" },
      { character: "疯", meaning: "crazy / insane / mad / wild" },
      { character: "锋", meaning: "sharp edge / blade / vanguard" },
    ]
  },

  {
    id: "cheng2",
    pinyin: "chéng",
    description: "City, sincere, journey, orange — all ring chéng",
    members: [
      { character: "城", meaning: "city / town / wall / castle" },
      { character: "成", meaning: "become / accomplish / succeed" },
      { character: "程", meaning: "journey / procedure / rule / distance" },
      { character: "乘", meaning: "ride / multiply / take advantage of" },
      { character: "诚", meaning: "honest / sincere / really / truly" },
      { character: "承", meaning: "bear / inherit / receive / undertake" },
      { character: "橙", meaning: "orange (colour / fruit)" },
      { character: "呈", meaning: "present / show / appear / petition" },
    ]
  },

  {
    id: "ping2",
    pinyin: "píng",
    description: "Flat, bottle, apple, screen — smooth sound, many shapes",
    members: [
      { character: "平", meaning: "flat / peaceful / level / average / calm" },
      { character: "瓶", meaning: "bottle / vase / jar / flask" },
      { character: "苹", meaning: "apple (苹果)" },
      { character: "评", meaning: "comment / judge / review / criticise" },
      { character: "凭", meaning: "rely on / by means of / proof / lean on" },
      { character: "屏", meaning: "screen / shield / breath (屏气)" },
      { character: "萍", meaning: "duckweed / wandering / drifting" },
      { character: "坪", meaning: "flat land / lawn / platform" },
    ]
  },

  {
    id: "jing1",
    pinyin: "jīng",
    description: "Capital, crystal, startle, eyeball — a sparkling group",
    members: [
      { character: "京", meaning: "capital / Beijing" },
      { character: "精", meaning: "essence / refined / meticulous / skilled" },
      { character: "经", meaning: "pass through / manage / scripture / already" },
      { character: "睛", meaning: "eyeball / pupil (眼睛 = eye)" },
      { character: "惊", meaning: "startle / surprise / alarm / be shocked" },
      { character: "晶", meaning: "crystal / sparkling / glittering" },
      { character: "茎", meaning: "stem / stalk (of a plant)" },
      { character: "荆", meaning: "thorny shrub / bramble / humble (my wife)" },
    ]
  },

  {
    id: "qi1",
    pinyin: "qī",
    description: "Seven, wife, lacquer, chess — all share qī",
    members: [
      { character: "七", meaning: "seven (7)" },
      { character: "期", meaning: "period / phase / expect / hope / due date" },
      { character: "妻", meaning: "wife" },
      { character: "漆", meaning: "lacquer / paint / varnish / pitch-black" },
      { character: "欺", meaning: "deceive / bully / take advantage of" },
      { character: "栖", meaning: "roost / dwell / live / perch" },
      { character: "凄", meaning: "cold and desolate / bitter / wretched" },
      { character: "沏", meaning: "brew tea / make (a hot drink)" },
    ]
  },

  {
    id: "ji1",
    pinyin: "jī",
    description: "Machine, chicken, muscle, hunger — jī in 8 forms",
    members: [
      { character: "机", meaning: "machine / opportunity / crucial point" },
      { character: "鸡", meaning: "chicken / rooster / hen" },
      { character: "积", meaning: "accumulate / store up / long-standing" },
      { character: "击", meaning: "hit / strike / attack / beat" },
      { character: "基", meaning: "base / foundation / basic / fundamental" },
      { character: "激", meaning: "stir up / inspire / arouse / intense" },
      { character: "肌", meaning: "muscle / flesh / skin texture" },
      { character: "饥", meaning: "hungry / famine / starvation" },
    ]
  },

  {
    id: "he2",
    pinyin: "hé",
    description: "River, box, nucleus, lotus — hé flows through many characters",
    members: [
      { character: "和", meaning: "and / with / peaceful / harmonious" },
      { character: "河", meaning: "river / waterway" },
      { character: "合", meaning: "combine / fit / close / suit / join" },
      { character: "核", meaning: "nucleus / core / kernel / verify" },
      { character: "荷", meaning: "lotus / load / bear / Holland" },
      { character: "何", meaning: "what / how / why / which / who" },
      { character: "盒", meaning: "box / case / small container" },
    ]
  },

  {
    id: "dao4",
    pinyin: "dào",
    description: "Arrive, road, steal, rice — dào delivers many meanings",
    members: [
      { character: "到", meaning: "arrive / reach / go to / until" },
      { character: "道", meaning: "road / way / doctrine / say / method" },
      { character: "导", meaning: "lead / guide / direct / conduct" },
      { character: "倒", meaning: "upside down / invert / pour / but actually" },
      { character: "盗", meaning: "steal / rob / thief / bandit" },
      { character: "稻", meaning: "rice plant / paddy" },
      { character: "悼", meaning: "mourn / grieve / mourn for the dead" },
    ]
  },

  {
    id: "hui4",
    pinyin: "huì",
    description: "Meeting, painting, wisdom, destroy — the huì cluster",
    members: [
      { character: "会", meaning: "can / know how / meeting / society" },
      { character: "汇", meaning: "converge / remit / foreign exchange" },
      { character: "绘", meaning: "draw / paint / depict / describe" },
      { character: "惠", meaning: "favour / benefit / kind / grace" },
      { character: "慧", meaning: "wise / intelligent / bright / clever" },
      { character: "秽", meaning: "dirty / filthy / obscene / foul" },
      { character: "毁", meaning: "destroy / damage / ruin / defame" },
    ]
  },

  {
    id: "gong1",
    pinyin: "gōng",
    description: "Work, palace, bow, attack — all ring gōng",
    members: [
      { character: "公", meaning: "public / fair / grandfather / male animal" },
      { character: "工", meaning: "work / worker / industry / skill" },
      { character: "功", meaning: "merit / achievement / result / skill" },
      { character: "宫", meaning: "palace / temple / uterus / musical note" },
      { character: "攻", meaning: "attack / study / specialise in" },
      { character: "弓", meaning: "bow (weapon) / arch / curved" },
      { character: "躬", meaning: "bend / bow (in respect) / personally" },
    ]
  },

  {
    id: "xin1",
    pinyin: "xīn",
    description: "Heart, new, salary, hardship — the xīn family",
    members: [
      { character: "心", meaning: "heart / mind / centre / intention" },
      { character: "新", meaning: "new / fresh / recently / novel" },
      { character: "欣", meaning: "happy / joyful / delighted / thriving" },
      { character: "薪", meaning: "salary / wages / firewood / fuel" },
      { character: "辛", meaning: "hardship / pungent / hot / bitter" },
      { character: "芯", meaning: "core / wick / pith / heart of a plant" },
      { character: "锌", meaning: "zinc (chemical element)" },
    ]
  },

  {
    id: "mei2",
    pinyin: "méi",
    description: "No, plum, eyebrow, coal, mould — all pronounced méi",
    members: [
      { character: "没", meaning: "not have / without / none / did not" },
      { character: "梅", meaning: "plum blossom / plum tree / sour plum" },
      { character: "煤", meaning: "coal / charcoal" },
      { character: "眉", meaning: "eyebrow / top margin / brow" },
      { character: "莓", meaning: "berry (草莓 = strawberry)" },
      { character: "霉", meaning: "mould / mildew / bad luck" },
      { character: "媒", meaning: "medium / matchmaker / intermediary" },
    ]
  },

  {
    id: "jin4",
    pinyin: "jìn",
    description: "Enter, near, forbid, soak — seven words, one sound",
    members: [
      { character: "进", meaning: "enter / advance / go forward / come in" },
      { character: "近", meaning: "near / close / recent / intimate" },
      { character: "禁", meaning: "forbid / prohibit / imprison / withstand" },
      { character: "尽", meaning: "exhaust / use up / all / to the utmost" },
      { character: "劲", meaning: "strength / vigour / spirit / energy" },
      { character: "浸", meaning: "soak / immerse / steep / permeate" },
      { character: "晋", meaning: "advance / promote / Jin dynasty" },
    ]
  },

  {
    id: "ming2",
    pinyin: "míng",
    description: "Bright, name, bird-cry, inscription — the míng group",
    members: [
      { character: "明", meaning: "bright / clear / understand / next (day)" },
      { character: "名", meaning: "name / famous / reputation / measure word" },
      { character: "鸣", meaning: "cry / chirp / make a sound / resound" },
      { character: "冥", meaning: "dark / deep / underworld / obscure" },
      { character: "铭", meaning: "engrave / inscription / be deeply moved" },
      { character: "茗", meaning: "fine tea / young tea leaves" },
    ]
  },

  {
    id: "hong2",
    pinyin: "hóng",
    description: "Red, rainbow, flood, wild goose — all wear hóng",
    members: [
      { character: "红", meaning: "red / popular / successful / bonus" },
      { character: "虹", meaning: "rainbow" },
      { character: "洪", meaning: "flood / great / vast / surname Hong" },
      { character: "宏", meaning: "grand / magnificent / great / vast" },
      { character: "鸿", meaning: "wild goose / great / vast / lucky" },
      { character: "弘", meaning: "great / expand / carry forward" },
    ]
  },

  {
    id: "zhong1",
    pinyin: "zhōng",
    description: "Middle, clock, loyal, end — six ways to say zhōng",
    members: [
      { character: "中", meaning: "middle / centre / China / hit (a target)" },
      { character: "钟", meaning: "clock / bell / concentrate on / surname" },
      { character: "终", meaning: "end / final / at last / from beginning to end" },
      { character: "忠", meaning: "loyal / faithful / devoted / honest" },
      { character: "衷", meaning: "innermost feelings / heart / sincere" },
      { character: "盅", meaning: "small cup / wine cup without handle" },
    ]
  },

  {
    id: "sheng1",
    pinyin: "shēng",
    description: "Life, sound, rise, nephew — born of the same breath",
    members: [
      { character: "生", meaning: "life / birth / grow / student / uncooked" },
      { character: "声", meaning: "sound / voice / tone / reputation" },
      { character: "升", meaning: "rise / go up / promote / litre (unit)" },
      { character: "牲", meaning: "domestic animal / livestock" },
      { character: "笙", meaning: "shēng — a traditional reed wind instrument" },
      { character: "甥", meaning: "nephew (sister's son) / daughter's son" },
    ]
  },

  {
    id: "tong2",
    pinyin: "tóng",
    description: "Same, copper, child, pupil — the tóng family",
    members: [
      { character: "同", meaning: "same / together / with / similar" },
      { character: "铜", meaning: "copper / bronze / brass" },
      { character: "童", meaning: "child / boy / young / virgin" },
      { character: "桐", meaning: "paulownia / tung tree / 梧桐 = phoenix tree" },
      { character: "瞳", meaning: "pupil of the eye" },
      { character: "彤", meaning: "red / rosy (poetic / used in names)" },
    ]
  },

  {
    id: "bao4",
    pinyin: "bào",
    description: "Report, hug, explode, leopard — bào hits hard",
    members: [
      { character: "报", meaning: "report / newspaper / repay / revenge" },
      { character: "抱", meaning: "hold / hug / carry in arms / cherish" },
      { character: "暴", meaning: "violent / fierce / sudden / cruel" },
      { character: "爆", meaning: "explode / burst / stir-fry quickly" },
      { character: "豹", meaning: "leopard / panther" },
      { character: "曝", meaning: "expose to sun / broadcast / reveal" },
    ]
  },

  {
    id: "xiang4",
    pinyin: "xiàng",
    description: "Elephant, image, lane, direction — pointing the same way",
    members: [
      { character: "向", meaning: "direction / face / toward / always" },
      { character: "象", meaning: "elephant / appearance / symbol / image" },
      { character: "像", meaning: "image / resemble / portrait / as if" },
      { character: "项", meaning: "item / nape of neck / sum / measure word" },
      { character: "巷", meaning: "lane / alley / narrow street" },
      { character: "橡", meaning: "rubber tree / oak / acorn" },
    ]
  },

  {
    id: "bo1",
    pinyin: "bō",
    description: "Wave, glass, broadcast, spinach — bō washes over many characters",
    members: [
      { character: "波", meaning: "wave / ripple / Poland / sudden change" },
      { character: "玻", meaning: "glass (玻璃 bōlí = glass)" },
      { character: "播", meaning: "broadcast / sow / spread / scatter" },
      { character: "拨", meaning: "stir / dial / allocate / poke" },
      { character: "菠", meaning: "spinach (菠菜 bōcài)" },
      { character: "剥", meaning: "peel / strip / shell / deprive" },
    ]
  },

  {
    id: "liu2",
    pinyin: "liú",
    description: "Stay, flow, Liu (surname), tumour — the liú current",
    members: [
      { character: "留", meaning: "stay / remain / keep / reserve / detain" },
      { character: "流", meaning: "flow / current / spread / stream / class" },
      { character: "刘", meaning: "Liu (common Chinese surname)" },
      { character: "硫", meaning: "sulphur (chemical element)" },
      { character: "瘤", meaning: "tumour / lump / growth" },
      { character: "榴", meaning: "pomegranate (石榴 shíliú)" },
    ]
  },

  {
    id: "chang2",
    pinyin: "cháng",
    description: "Long, often, taste, intestine — cháng stretches far",
    members: [
      { character: "长", meaning: "long / length / for a long time" },
      { character: "常", meaning: "often / always / normal / constant" },
      { character: "尝", meaning: "taste / try / attempt / ever (have done)" },
      { character: "肠", meaning: "intestine / bowel / sausage / feelings" },
      { character: "偿", meaning: "repay / compensate / fulfil / satisfy" },
      { character: "嫦", meaning: "嫦娥 cháng'é — the Moon Goddess" },
    ]
  },

  {
    id: "long2",
    pinyin: "lóng",
    description: "Dragon, deaf, grand, cage — the mighty lóng",
    members: [
      { character: "龙", meaning: "dragon / symbol of China / emperor" },
      { character: "聋", meaning: "deaf / hard of hearing" },
      { character: "隆", meaning: "prosperous / grand / booming sound" },
      { character: "笼", meaning: "cage / basket / cover / steamer basket" },
      { character: "咙", meaning: "throat (喉咙 hóulóng)" },
      { character: "胧", meaning: "hazy / dim / indistinct (朦胧 ménglóng)" },
    ]
  },

  {
    id: "si1",
    pinyin: "sī",
    description: "Silk, think, private, tear — the sī sound in six forms",
    members: [
      { character: "司", meaning: "manage / department / company / in charge" },
      { character: "思", meaning: "think / miss / ponder / thought / idea" },
      { character: "丝", meaning: "silk / thread / sliver / a tiny bit" },
      { character: "私", meaning: "private / personal / selfish / secret" },
      { character: "撕", meaning: "tear / rip / scratch" },
      { character: "嘶", meaning: "neigh / hoarse / hiss (嘶哑 = hoarse)" },
    ]
  },

  {
    id: "jia1",
    pinyin: "jiā",
    description: "Home, add, good, praise — the jiā family feels warm",
    members: [
      { character: "家", meaning: "home / family / household / expert in" },
      { character: "加", meaning: "add / increase / plus / apply" },
      { character: "佳", meaning: "good / excellent / beautiful / fine" },
      { character: "嘉", meaning: "excellent / praise / auspicious" },
      { character: "夹", meaning: "clip / sandwich / mix in / carry under arm" },
    ]
  },

  {
    id: "bao3",
    pinyin: "bǎo",
    description: "Treasure, protect, full, fortress — the bǎo group",
    members: [
      { character: "保", meaning: "protect / keep / guarantee / guard" },
      { character: "宝", meaning: "treasure / precious / darling / gem" },
      { character: "饱", meaning: "full / satisfied / have enough of" },
      { character: "堡", meaning: "fort / fortress / castle / stronghold" },
      { character: "葆", meaning: "preserve / luxuriant growth / protect" },
    ]
  },

];
