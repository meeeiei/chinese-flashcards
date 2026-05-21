// soundalikes.js — Comprehensive homophone groups for Sound-Alikes view
// Every member in a group shares the exact same pinyin including tone.
// Shape: { id, pinyin, description, members: [{ character, meaning }] }

const SOUND_ALIKES = [

  // ═══════════════════════════════════════════════════════════════
  // THE MEGA GROUPS  (8 or more characters)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "shi4",
    pinyin: "shì",
    description: "The single busiest sound in Mandarin — 12 everyday characters!",
    members: [
      { character: "是", meaning: "to be / yes / is / are / am" },
      { character: "市", meaning: "city / market / urban" },
      { character: "事", meaning: "matter / affair / event / thing" },
      { character: "室", meaning: "room / chamber / office" },
      { character: "式", meaning: "style / form / type / ceremony" },
      { character: "视", meaning: "look at / view / regard / television" },
      { character: "试", meaning: "test / try / attempt / exam" },
      { character: "示", meaning: "show / indicate / display / notify" },
      { character: "适", meaning: "suitable / fitting / comfortable / just now" },
      { character: "世", meaning: "generation / world / era / lifetime" },
      { character: "士", meaning: "scholar / soldier / gentleman / samurai" },
      { character: "势", meaning: "power / force / tendency / situation / gesture" },
    ]
  },

  {
    id: "yi4",
    pinyin: "yì",
    description: "Art, meaning, memory, benefit — 12 faces of yì",
    members: [
      { character: "义", meaning: "righteousness / justice / meaning / relationship" },
      { character: "意", meaning: "idea / meaning / intention / wish / heart" },
      { character: "易", meaning: "easy / change / trade / the Book of Changes" },
      { character: "艺", meaning: "art / skill / craft / technique" },
      { character: "议", meaning: "discuss / suggest / opinion / proposal" },
      { character: "异", meaning: "different / strange / other / extraordinary" },
      { character: "益", meaning: "benefit / advantage / more / increasingly" },
      { character: "译", meaning: "translate / interpret / translator" },
      { character: "亿", meaning: "hundred million (100,000,000)" },
      { character: "役", meaning: "service / labour / battle / servant" },
      { character: "忆", meaning: "remember / recollect / think of" },
      { character: "毅", meaning: "resolute / firm / determined / strong-willed" },
    ]
  },

  {
    id: "fu4",
    pinyin: "fù",
    description: "Father, rich, pay, woman — fù carries the weight of 10 meanings",
    members: [
      { character: "父", meaning: "father / dad / elder male relative" },
      { character: "付", meaning: "pay / hand over / give / deliver" },
      { character: "附", meaning: "attach / near / add / be close to" },
      { character: "负", meaning: "bear / owe / lose / negative / betray" },
      { character: "富", meaning: "rich / wealthy / abundant / plentiful" },
      { character: "副", meaning: "deputy / pair of / secondary / set of" },
      { character: "赴", meaning: "go to / attend / rush to" },
      { character: "妇", meaning: "married woman / woman / wife" },
      { character: "复", meaning: "again / reply / recover / complex / double" },
      { character: "腹", meaning: "abdomen / belly / stomach area" },
    ]
  },

  {
    id: "wei4",
    pinyin: "wèi",
    description: "Stomach, taste, guard, comfort — wèi in 9 forms",
    members: [
      { character: "为", meaning: "for / because of / in order to" },
      { character: "位", meaning: "position / place / seat / digit / measure word (persons)" },
      { character: "喂", meaning: "feed / hey! / hello (answering phone)" },
      { character: "味", meaning: "taste / flavour / smell / sense / experience" },
      { character: "未", meaning: "not yet / the future / 8th earthly branch" },
      { character: "胃", meaning: "stomach / gizzard" },
      { character: "卫", meaning: "guard / protect / defend / surname Wei" },
      { character: "畏", meaning: "fear / dread / be in awe of / cower" },
      { character: "慰", meaning: "comfort / console / relieve / soothe" },
    ]
  },

  {
    id: "li4",
    pinyin: "lì",
    description: "Power, beauty, history, lychee — 10 characters that all say lì",
    members: [
      { character: "力", meaning: "power / strength / force / effort / capability" },
      { character: "立", meaning: "stand / establish / upright / immediately" },
      { character: "利", meaning: "profit / advantage / benefit / sharp / useful" },
      { character: "历", meaning: "experience / go through / calendar / successive" },
      { character: "例", meaning: "example / case / rule / precedent / instance" },
      { character: "丽", meaning: "beautiful / gorgeous / pretty / splendid" },
      { character: "励", meaning: "encourage / strive / exert / spur on" },
      { character: "粒", meaning: "grain / particle / pellet / measure word (small round things)" },
      { character: "厉", meaning: "strict / fierce / severe / terrible / sharp" },
      { character: "荔", meaning: "lychee (荔枝 lìzhī)" },
    ]
  },

  {
    id: "yan2",
    pinyin: "yán",
    description: "Words, rock, salt, research — 9 characters, one breath",
    members: [
      { character: "言", meaning: "word / speech / say / language / talk" },
      { character: "岩", meaning: "cliff / rock / crag / boulder" },
      { character: "炎", meaning: "inflammation / hot / blazing / -itis (medical)" },
      { character: "研", meaning: "grind / study / research / investigate" },
      { character: "严", meaning: "strict / serious / stern / severe / tight" },
      { character: "沿", meaning: "along / edge / border / follow / trim" },
      { character: "颜", meaning: "face / colour / prestige / appearance" },
      { character: "延", meaning: "extend / delay / invite / prolong / spread" },
      { character: "盐", meaning: "salt / table salt" },
    ]
  },

  {
    id: "jiao1",
    pinyin: "jiāo",
    description: "Teach, rubber, burn, proud — jiāo in 8 characters",
    members: [
      { character: "交", meaning: "hand over / exchange / cross / make friends / pay" },
      { character: "教", meaning: "teach / instruct / make / cause" },
      { character: "胶", meaning: "glue / rubber / sticky / 胶水 = glue" },
      { character: "焦", meaning: "burned / scorched / anxious / 焦虑 = anxiety" },
      { character: "椒", meaning: "pepper / chilli / 辣椒 = chilli pepper" },
      { character: "浇", meaning: "water (plants) / pour / spray / drench" },
      { character: "骄", meaning: "proud / arrogant / 骄傲 = proud/arrogance" },
      { character: "娇", meaning: "delicate / charming / tender / pampered" },
    ]
  },

  {
    id: "zhi4",
    pinyin: "zhì",
    description: "Wisdom, quality, system, will — 8 ways to write zhì",
    members: [
      { character: "志", meaning: "ambition / will / aspiration / record / note" },
      { character: "制", meaning: "system / manufacture / restrict / control / make" },
      { character: "治", meaning: "govern / rule / treat / cure / control" },
      { character: "质", meaning: "quality / substance / nature / texture / question" },
      { character: "致", meaning: "cause / achieve / send / devote to / exquisite" },
      { character: "智", meaning: "wisdom / intelligence / wit / clever" },
      { character: "置", meaning: "place / install / buy / put aside / lay" },
      { character: "至", meaning: "to / until / arrive at / most / extremely" },
    ]
  },

  {
    id: "jian4",
    pinyin: "jiàn",
    description: "See, build, sword, arrow — 8 characters that all say jiàn",
    members: [
      { character: "见", meaning: "see / meet / appear / view / opinion" },
      { character: "建", meaning: "build / establish / construct / found" },
      { character: "件", meaning: "piece / item / document / measure word (items/clothes)" },
      { character: "健", meaning: "healthy / strong / vigorous / good at" },
      { character: "剑", meaning: "sword / sabre / fencing" },
      { character: "鉴", meaning: "mirror / examine / reflect / appraise / reference" },
      { character: "荐", meaning: "recommend / introduce / suggest / grass" },
      { character: "箭", meaning: "arrow / dart / 射箭 = archery" },
    ]
  },

  {
    id: "qi4",
    pinyin: "qì",
    description: "Air, steam, abandon, rest — qì breathes through 8 characters",
    members: [
      { character: "气", meaning: "air / breath / spirit / anger / weather / gas" },
      { character: "汽", meaning: "steam / vapour / 汽车 = car / 汽水 = soda" },
      { character: "器", meaning: "instrument / container / organ / talent / vessel" },
      { character: "弃", meaning: "abandon / give up / discard / throw away" },
      { character: "泣", meaning: "cry / weep / sob quietly" },
      { character: "契", meaning: "contract / agreement / engrave / match / bond" },
      { character: "砌", meaning: "build / lay bricks / pile up / steps" },
      { character: "憩", meaning: "rest / take a break / 小憩 = a short rest" },
    ]
  },

  {
    id: "bei4",
    pinyin: "bèi",
    description: "Passive marker, back, prepare, generation — bèi in 8 forms",
    members: [
      { character: "被", meaning: "by (passive marker) / quilt / blanket / suffer" },
      { character: "背", meaning: "back of body / recite / carry on back / violate" },
      { character: "备", meaning: "prepare / equip / provide / possess / complete" },
      { character: "倍", meaning: "times / double / fold / multiple of" },
      { character: "贝", meaning: "shell / cowrie / shellfish / money (ancient)" },
      { character: "辈", meaning: "generation / lifetime / one's whole life / type of person" },
      { character: "焙", meaning: "bake / roast slowly / dry over fire" },
      { character: "悖", meaning: "absurd / contrary to / violate / irrational" },
    ]
  },

  {
    id: "she4",
    pinyin: "shè",
    description: "Shoot, involve, society, absorb — shè in 8 shapes",
    members: [
      { character: "射", meaning: "shoot / emit / inject / 射击 = shooting" },
      { character: "设", meaning: "set up / establish / suppose / design" },
      { character: "社", meaning: "society / organisation / 社会 = society" },
      { character: "舍", meaning: "dormitory / shed / give up / part with" },
      { character: "涉", meaning: "wade / involve / relate to / concern" },
      { character: "摄", meaning: "absorb / take a photo / act for / conserve" },
      { character: "赦", meaning: "pardon / forgive / amnesty / absolve" },
      { character: "慑", meaning: "fear / awe / intimidate / be awed by" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // LARGE GROUPS  (6–7 characters)
  // ═══════════════════════════════════════════════════════════════

  {
    id: "feng1",
    pinyin: "fēng",
    description: "Wind, bee, peak, maple, blade — fēng blooms in 7 characters",
    members: [
      { character: "风", meaning: "wind / style / custom / manner / scene" },
      { character: "丰", meaning: "abundant / plentiful / fertile / full / rich" },
      { character: "封", meaning: "seal / close / envelop / bestow / measure word (letters)" },
      { character: "蜂", meaning: "bee / wasp / swarm" },
      { character: "峰", meaning: "mountain peak / summit / highest point" },
      { character: "枫", meaning: "maple (tree)" },
      { character: "疯", meaning: "crazy / insane / mad / wild / reckless" },
      { character: "锋", meaning: "sharp edge / blade / vanguard / 先锋 = pioneer" },
    ]
  },

  {
    id: "cheng2",
    pinyin: "chéng",
    description: "City, sincere, journey, orange — chéng rings in 8 forms",
    members: [
      { character: "城", meaning: "city / town / wall / castle / 城市 = city" },
      { character: "成", meaning: "become / accomplish / succeed / formed / complete" },
      { character: "程", meaning: "journey / procedure / rule / distance / degree" },
      { character: "乘", meaning: "ride / take / multiply / seize (an opportunity)" },
      { character: "诚", meaning: "honest / sincere / really / truly / faithful" },
      { character: "承", meaning: "bear / inherit / receive / undertake / continue" },
      { character: "橙", meaning: "orange (colour / fruit) / 橙子 = orange" },
      { character: "呈", meaning: "present / show / appear / petition / display" },
    ]
  },

  {
    id: "ping2",
    pinyin: "píng",
    description: "Flat, bottle, apple, screen — píng in 8 smooth shapes",
    members: [
      { character: "平", meaning: "flat / peaceful / level / average / calm / even" },
      { character: "瓶", meaning: "bottle / vase / jar / flask / 瓶子 = bottle" },
      { character: "苹", meaning: "apple (苹果 píngguǒ)" },
      { character: "评", meaning: "comment / judge / review / criticise / rate" },
      { character: "凭", meaning: "rely on / by means of / proof / lean on / no matter" },
      { character: "屏", meaning: "screen / shield / hold breath (屏气) / 屏幕 = display" },
      { character: "萍", meaning: "duckweed / wandering / drifting (浮萍 = duckweed)" },
      { character: "坪", meaning: "flat land / lawn / platform / 停车坪 = car park" },
    ]
  },

  {
    id: "jing1",
    pinyin: "jīng",
    description: "Capital, crystal, eye, startle — jīng shines in 8 characters",
    members: [
      { character: "京", meaning: "capital / Beijing / 北京 = Beijing" },
      { character: "精", meaning: "essence / refined / meticulous / skilled / excellent" },
      { character: "经", meaning: "pass through / manage / scripture / already / classic" },
      { character: "睛", meaning: "eyeball / pupil (眼睛 yǎnjīng = eye)" },
      { character: "惊", meaning: "startle / surprise / alarm / be shocked / disturb" },
      { character: "晶", meaning: "crystal / sparkling / glittering / 水晶 = crystal" },
      { character: "茎", meaning: "stem / stalk (of a plant) / shaft" },
      { character: "荆", meaning: "thorny shrub / bramble / humble (荆妻 = my wife)" },
    ]
  },

  {
    id: "qing1",
    pinyin: "qīng",
    description: "Green, clear, light, dragonfly — the qīng family is huge!",
    members: [
      { character: "青", meaning: "blue-green / young / 青春 = youth" },
      { character: "清", meaning: "clear / clean / pure / 清楚 = clear / Qing dynasty" },
      { character: "氢", meaning: "hydrogen (chemical element, H)" },
      { character: "轻", meaning: "light (not heavy) / gentle / 轻松 = relaxed" },
      { character: "倾", meaning: "lean / tilt / devote / 倾向 = tendency / 倾听 = listen carefully" },
      { character: "卿", meaning: "high official (ancient) / darling / 爱卿 = dear minister" },
      { character: "蜻", meaning: "dragonfly (蜻蜓 qīngtíng)" },
    ]
  },

  {
    id: "qi1",
    pinyin: "qī",
    description: "Seven, wife, lacquer, chess — qī in 8 characters",
    members: [
      { character: "七", meaning: "seven (7)" },
      { character: "期", meaning: "period / phase / expect / hope / due date / issue" },
      { character: "妻", meaning: "wife / 妻子 = wife" },
      { character: "漆", meaning: "lacquer / paint / varnish / pitch-black / 油漆 = paint" },
      { character: "欺", meaning: "deceive / bully / take advantage of / 欺骗 = deceive" },
      { character: "栖", meaning: "roost / dwell / live / perch / 栖息 = inhabit" },
      { character: "凄", meaning: "cold and desolate / bitter / wretched / 凄凉 = bleak" },
      { character: "沏", meaning: "brew tea / make (a hot drink) / 沏茶 = brew tea" },
    ]
  },

  {
    id: "ji1",
    pinyin: "jī",
    description: "Machine, chicken, muscle, hunger — jī in 8 everyday characters",
    members: [
      { character: "机", meaning: "machine / opportunity / crucial point / 手机 = phone" },
      { character: "鸡", meaning: "chicken / rooster / hen / 鸡肉 = chicken meat" },
      { character: "积", meaning: "accumulate / store up / long-standing / product (maths)" },
      { character: "击", meaning: "hit / strike / attack / beat / 打击 = strike/hit" },
      { character: "基", meaning: "base / foundation / basic / fundamental / 基础 = foundation" },
      { character: "激", meaning: "stir up / inspire / arouse / intense / 激动 = excited" },
      { character: "肌", meaning: "muscle / flesh / skin texture / 肌肉 = muscle" },
      { character: "饥", meaning: "hungry / famine / starvation / 饥饿 = hunger" },
    ]
  },

  {
    id: "he2",
    pinyin: "hé",
    description: "River, box, nucleus, lotus — hé flows through 7 characters",
    members: [
      { character: "和", meaning: "and / with / peaceful / harmonious / sum / mild" },
      { character: "河", meaning: "river / waterway / 河流 = river" },
      { character: "合", meaning: "combine / fit / close / suit / join / 合适 = suitable" },
      { character: "核", meaning: "nucleus / core / kernel / verify / nuclear / 核心 = core" },
      { character: "荷", meaning: "lotus / load / bear / Holland / 荷花 = lotus flower" },
      { character: "何", meaning: "what / how / why / which / who / 为何 = why" },
      { character: "盒", meaning: "box / case / small container / 饭盒 = lunchbox" },
    ]
  },

  {
    id: "dao4",
    pinyin: "dào",
    description: "Arrive, road, steal, rice — dào delivers 7 meanings",
    members: [
      { character: "到", meaning: "arrive / reach / go to / until / thoughtful" },
      { character: "道", meaning: "road / way / doctrine / say / method / 知道 = know" },
      { character: "导", meaning: "lead / guide / direct / conduct / 引导 = guide" },
      { character: "倒", meaning: "upside down / invert / pour / but actually / 倒立 = handstand" },
      { character: "盗", meaning: "steal / rob / thief / bandit / 盗贼 = thief" },
      { character: "稻", meaning: "rice plant / paddy / 水稻 = paddy rice" },
      { character: "悼", meaning: "mourn / grieve / mourn for the dead / 悼念 = mourn" },
    ]
  },

  {
    id: "hui4",
    pinyin: "huì",
    description: "Meeting, painting, wisdom, destroy — huì in 7 forms",
    members: [
      { character: "会", meaning: "can / know how / meeting / society / will (future)" },
      { character: "汇", meaning: "converge / remit / foreign exchange / 汇率 = exchange rate" },
      { character: "绘", meaning: "draw / paint / depict / describe / 绘画 = drawing" },
      { character: "惠", meaning: "favour / benefit / kind / grace / 实惠 = practical value" },
      { character: "慧", meaning: "wise / intelligent / bright / clever / 智慧 = wisdom" },
      { character: "秽", meaning: "dirty / filthy / obscene / foul / 肮脏 = filthy" },
      { character: "毁", meaning: "destroy / damage / ruin / defame / 毁坏 = destroy" },
    ]
  },

  {
    id: "gong1",
    pinyin: "gōng",
    description: "Work, palace, bow, attack — 7 ways to say gōng",
    members: [
      { character: "公", meaning: "public / fair / grandfather / male animal / company" },
      { character: "工", meaning: "work / worker / industry / skill / 工作 = work" },
      { character: "功", meaning: "merit / achievement / result / skill / 成功 = succeed" },
      { character: "宫", meaning: "palace / temple / uterus / musical note / 宫殿 = palace" },
      { character: "攻", meaning: "attack / study / specialise in / 进攻 = attack" },
      { character: "弓", meaning: "bow (weapon) / arch / curved / 弓箭 = bow and arrow" },
      { character: "躬", meaning: "bend / bow (in respect) / personally / 鞠躬 = bow" },
    ]
  },

  {
    id: "xin1",
    pinyin: "xīn",
    description: "Heart, new, salary, hardship — the xīn family",
    members: [
      { character: "心", meaning: "heart / mind / centre / intention / 心情 = mood" },
      { character: "新", meaning: "new / fresh / recently / novel / 新年 = New Year" },
      { character: "欣", meaning: "happy / joyful / delighted / thriving / 欣喜 = delighted" },
      { character: "薪", meaning: "salary / wages / firewood / fuel / 工资薪水 = salary" },
      { character: "辛", meaning: "hardship / pungent / hot / bitter / 辛苦 = hard work" },
      { character: "芯", meaning: "core / wick / pith / heart of a plant / 芯片 = chip" },
      { character: "锌", meaning: "zinc (chemical element, Zn)" },
    ]
  },

  {
    id: "mei2",
    pinyin: "méi",
    description: "No, plum, eyebrow, coal, mould — méi in 7 forms",
    members: [
      { character: "没", meaning: "not have / without / none / did not / lack" },
      { character: "梅", meaning: "plum blossom / plum tree / sour plum / 梅花 = plum blossom" },
      { character: "煤", meaning: "coal / charcoal / 煤炭 = coal" },
      { character: "眉", meaning: "eyebrow / top margin / brow / 眉毛 = eyebrow" },
      { character: "莓", meaning: "berry / 草莓 = strawberry / 蓝莓 = blueberry" },
      { character: "霉", meaning: "mould / mildew / bad luck / 发霉 = go mouldy" },
      { character: "媒", meaning: "medium / matchmaker / intermediary / 媒体 = media" },
    ]
  },

  {
    id: "jin4",
    pinyin: "jìn",
    description: "Enter, near, forbid, soak — 7 words, one sound",
    members: [
      { character: "进", meaning: "enter / advance / go forward / come in / 进步 = progress" },
      { character: "近", meaning: "near / close / recent / intimate / 附近 = nearby" },
      { character: "禁", meaning: "forbid / prohibit / imprison / withstand / 禁止 = prohibit" },
      { character: "尽", meaning: "exhaust / use up / all / to the utmost / 尽力 = try one's best" },
      { character: "劲", meaning: "strength / vigour / spirit / energy / 使劲 = exert force" },
      { character: "浸", meaning: "soak / immerse / steep / permeate / 浸泡 = soak" },
      { character: "晋", meaning: "advance / promote / Jin dynasty / 晋升 = promote" },
    ]
  },

  {
    id: "mo4",
    pinyin: "mò",
    description: "Ink, desert, silent, lonely — 7 faces of mò",
    members: [
      { character: "末", meaning: "end / final / tip / minor details / 末尾 = end" },
      { character: "墨", meaning: "ink / Chinese ink / 墨水 = ink / 墨西哥 = Mexico" },
      { character: "陌", meaning: "road / path / unfamiliar / 陌生 = unfamiliar/strange" },
      { character: "漠", meaning: "desert / indifferent / vast / 沙漠 = desert" },
      { character: "默", meaning: "silent / quietly / 沉默 = silence / 默写 = write from memory" },
      { character: "寞", meaning: "lonely / solitary / desolate / 寂寞 = lonely" },
      { character: "抹", meaning: "smear / wipe / erase / devious / 抹布 = cloth for wiping" },
    ]
  },

  {
    id: "shu4",
    pinyin: "shù",
    description: "Tree, number, skill, vertical — shù in 7 characters",
    members: [
      { character: "树", meaning: "tree / plant / cultivate / 树木 = trees / 树立 = establish" },
      { character: "束", meaning: "bundle / restrict / restrain / measure word (bunches)" },
      { character: "术", meaning: "skill / method / art / technique / 技术 = technology" },
      { character: "数", meaning: "number / figure / several / 数学 = mathematics" },
      { character: "恕", meaning: "forgive / pardon / excuse / 请恕 = please excuse" },
      { character: "竖", meaning: "vertical / upright / erect / 竖立 = erect/set up" },
      { character: "庶", meaning: "common people / numerous / almost / 庶民 = common people" },
    ]
  },

  {
    id: "xie4",
    pinyin: "xiè",
    description: "Thank, unload, leak, crab — xiè in 7 forms",
    members: [
      { character: "谢", meaning: "thank / wither / decline / 谢谢 = thank you" },
      { character: "卸", meaning: "unload / remove / take off / 卸载 = uninstall" },
      { character: "泄", meaning: "leak / vent / release / 泄露 = leak / 发泄 = vent" },
      { character: "懈", meaning: "slack / lazy / relax / 懈怠 = slack off" },
      { character: "蟹", meaning: "crab / 螃蟹 = crab" },
      { character: "屑", meaning: "fragments / worthwhile / 不屑 = disdain / 木屑 = sawdust" },
      { character: "泻", meaning: "pour / flow fast / diarrhoea / 腹泻 = diarrhoea" },
    ]
  },

  {
    id: "yue4",
    pinyin: "yuè",
    description: "Moon, music, leap, surpass — yuè in 7 characters",
    members: [
      { character: "月", meaning: "moon / month / 月亮 = moon / 月份 = month" },
      { character: "乐", meaning: "music / 音乐 = music (also lè = happy)" },
      { character: "越", meaning: "exceed / surpass / Vietnam / 越来越 = more and more" },
      { character: "悦", meaning: "happy / pleased / joy / 愉悦 = joyful / 喜悦 = delight" },
      { character: "阅", meaning: "read / review / inspect / 阅读 = reading" },
      { character: "跃", meaning: "leap / jump / 跳跃 = leap / 活跃 = active/lively" },
      { character: "岳", meaning: "high mountain / wife's father / surname Yue / 岳父 = father-in-law" },
    ]
  },

  {
    id: "bian4",
    pinyin: "biàn",
    description: "Change, convenient, debate, braid — biàn in 6 shapes",
    members: [
      { character: "变", meaning: "change / alter / transform / 变化 = change" },
      { character: "便", meaning: "convenient / then / 方便 = convenient / 便利 = handy" },
      { character: "遍", meaning: "all over / everywhere / times (measure word) / 到处 = everywhere" },
      { character: "辨", meaning: "distinguish / differentiate / 辨别 = distinguish" },
      { character: "辩", meaning: "argue / debate / 辩论 = debate / 辩解 = explain oneself" },
      { character: "辫", meaning: "braid / plait / 辫子 = braid / pigtail" },
    ]
  },

  {
    id: "jue2",
    pinyin: "jué",
    description: "Feel, decide, dig, stubborn — jué in 7 characters",
    members: [
      { character: "觉", meaning: "feel / sense / wake up / 觉得 = feel/think / 睡觉 = sleep" },
      { character: "决", meaning: "decide / determine / definitely / 决定 = decide" },
      { character: "绝", meaning: "absolute / cut off / unique / 绝对 = absolute" },
      { character: "掘", meaning: "dig / excavate / 挖掘 = excavate / 掘墓 = dig a grave" },
      { character: "诀", meaning: "secret formula / key method / farewell / 口诀 = formula" },
      { character: "爵", meaning: "nobility title / wine vessel / 公爵 = duke" },
      { character: "倔", meaning: "stubborn / unyielding / blunt / 倔强 = stubborn" },
    ]
  },

  {
    id: "shi2",
    pinyin: "shí",
    description: "Time, stone, real, eat — shí in 7 essential characters",
    members: [
      { character: "时", meaning: "time / hour / season / when / 时间 = time / 有时 = sometimes" },
      { character: "石", meaning: "stone / rock / 石头 = stone / 岩石 = rock" },
      { character: "实", meaning: "real / true / fact / fruit / 实际 = actual / 其实 = actually" },
      { character: "食", meaning: "eat / food / 食物 = food / 饮食 = diet" },
      { character: "识", meaning: "know / recognise / knowledge / 认识 = know/meet / 知识 = knowledge" },
      { character: "拾", meaning: "pick up / collect / ten (formal) / 拾起 = pick up" },
      { character: "十", meaning: "ten (10) / 第十 = tenth" },
    ]
  },

  {
    id: "hong2",
    pinyin: "hóng",
    description: "Red, rainbow, flood, wild goose — hóng in 6 colours",
    members: [
      { character: "红", meaning: "red / popular / successful / bonus / 红色 = red" },
      { character: "虹", meaning: "rainbow / 彩虹 = rainbow" },
      { character: "洪", meaning: "flood / great / vast / surname Hong / 洪水 = flood" },
      { character: "宏", meaning: "grand / magnificent / great / vast / 宏大 = grand" },
      { character: "鸿", meaning: "wild goose / great / vast / lucky / 鸿运 = good fortune" },
      { character: "弘", meaning: "great / expand / carry forward / 弘扬 = carry forward" },
    ]
  },

  {
    id: "zhong1",
    pinyin: "zhōng",
    description: "Middle, clock, loyal, end — 6 ways to ring zhōng",
    members: [
      { character: "中", meaning: "middle / centre / China / hit (a target) / 中间 = middle" },
      { character: "钟", meaning: "clock / bell / concentrate on / surname / 钟表 = clock" },
      { character: "终", meaning: "end / final / at last / throughout / 最终 = ultimately" },
      { character: "忠", meaning: "loyal / faithful / devoted / honest / 忠诚 = loyal" },
      { character: "衷", meaning: "innermost feelings / heart / sincere / 衷心 = heartfelt" },
      { character: "盅", meaning: "small cup / wine cup without handle / 酒盅 = wine cup" },
    ]
  },

  {
    id: "sheng1",
    pinyin: "shēng",
    description: "Life, sound, rise, nephew — born of the same breath",
    members: [
      { character: "生", meaning: "life / birth / grow / student / uncooked / 生活 = life" },
      { character: "声", meaning: "sound / voice / tone / reputation / 声音 = sound" },
      { character: "升", meaning: "rise / go up / promote / litre / 上升 = rise" },
      { character: "牲", meaning: "domestic animal / livestock / 牲畜 = livestock" },
      { character: "笙", meaning: "shēng — a traditional Chinese reed wind instrument" },
      { character: "甥", meaning: "nephew (sister's son) / niece (sister's daughter)" },
    ]
  },

  {
    id: "tong2",
    pinyin: "tóng",
    description: "Same, copper, child, pupil — the tóng family",
    members: [
      { character: "同", meaning: "same / together / with / similar / 相同 = same" },
      { character: "铜", meaning: "copper / bronze / brass / 铜牌 = bronze medal" },
      { character: "童", meaning: "child / boy / young / 儿童 = child / 童话 = fairy tale" },
      { character: "桐", meaning: "paulownia / tung tree / 梧桐 = phoenix tree" },
      { character: "瞳", meaning: "pupil of the eye / 瞳孔 = pupil" },
      { character: "彤", meaning: "red / rosy / used in names / 彤云 = red clouds" },
    ]
  },

  {
    id: "bao4",
    pinyin: "bào",
    description: "Report, hug, explode, leopard — bào hits hard",
    members: [
      { character: "报", meaning: "report / newspaper / repay / revenge / 报告 = report" },
      { character: "抱", meaning: "hold / hug / carry in arms / cherish / 拥抱 = embrace" },
      { character: "暴", meaning: "violent / fierce / sudden / cruel / 暴力 = violence" },
      { character: "爆", meaning: "explode / burst / stir-fry quickly / 爆炸 = explode" },
      { character: "豹", meaning: "leopard / panther / 豹子 = leopard" },
      { character: "曝", meaning: "expose to sun / broadcast / reveal / 曝光 = expose/develop" },
    ]
  },

  {
    id: "xiang4",
    pinyin: "xiàng",
    description: "Elephant, image, lane, direction — pointing the same way",
    members: [
      { character: "向", meaning: "direction / face / toward / always / 方向 = direction" },
      { character: "象", meaning: "elephant / appearance / symbol / image / 现象 = phenomenon" },
      { character: "像", meaning: "image / resemble / portrait / as if / 好像 = seem / 像素 = pixel" },
      { character: "项", meaning: "item / nape of neck / sum / measure word (items) / 项目 = project" },
      { character: "巷", meaning: "lane / alley / narrow street / 小巷 = alley" },
      { character: "橡", meaning: "rubber tree / oak / acorn / 橡皮 = eraser / 橡胶 = rubber" },
    ]
  },

  {
    id: "bo1",
    pinyin: "bō",
    description: "Wave, glass, broadcast, spinach — bō washes over 6 characters",
    members: [
      { character: "波", meaning: "wave / ripple / Poland / sudden change / 波浪 = wave" },
      { character: "玻", meaning: "glass (玻璃 bōlí = glass / 玻璃杯 = glass cup)" },
      { character: "播", meaning: "broadcast / sow / spread / scatter / 播放 = play/broadcast" },
      { character: "拨", meaning: "stir / dial / allocate / poke / 拨打 = dial a number" },
      { character: "菠", meaning: "spinach (菠菜 bōcài) / 菠萝 = pineapple" },
      { character: "剥", meaning: "peel / strip / shell / deprive / 剥皮 = peel" },
    ]
  },

  {
    id: "liu2",
    pinyin: "liú",
    description: "Stay, flow, Liu (surname), tumour — the liú current",
    members: [
      { character: "留", meaning: "stay / remain / keep / reserve / detain / 留下 = stay" },
      { character: "流", meaning: "flow / current / spread / stream / class / 流行 = popular" },
      { character: "刘", meaning: "Liu (one of the most common Chinese surnames)" },
      { character: "硫", meaning: "sulphur (chemical element, S) / 硫酸 = sulphuric acid" },
      { character: "瘤", meaning: "tumour / lump / growth / 肿瘤 = tumour" },
      { character: "榴", meaning: "pomegranate (石榴 shíliú) / 手榴弹 = hand grenade" },
    ]
  },

  {
    id: "chang2",
    pinyin: "cháng",
    description: "Long, often, taste, intestine — cháng stretches far",
    members: [
      { character: "长", meaning: "long / length / for a long time / 长城 = Great Wall" },
      { character: "常", meaning: "often / always / normal / constant / 经常 = often" },
      { character: "尝", meaning: "taste / try / attempt / ever (have done) / 品尝 = taste" },
      { character: "肠", meaning: "intestine / bowel / sausage / 肠子 = intestines" },
      { character: "偿", meaning: "repay / compensate / fulfil / satisfy / 赔偿 = compensate" },
      { character: "嫦", meaning: "嫦娥 cháng'é — the Moon Goddess in Chinese mythology" },
    ]
  },

  {
    id: "long2",
    pinyin: "lóng",
    description: "Dragon, deaf, grand, cage — lóng roars in 6 characters",
    members: [
      { character: "龙", meaning: "dragon / symbol of China / emperor / 恐龙 = dinosaur" },
      { character: "聋", meaning: "deaf / hard of hearing / 耳聋 = deaf" },
      { character: "隆", meaning: "prosperous / grand / booming sound / 兴隆 = prosperous" },
      { character: "笼", meaning: "cage / basket / cover / steamer basket / 笼子 = cage" },
      { character: "咙", meaning: "throat (喉咙 hóulóng = throat)" },
      { character: "胧", meaning: "hazy / dim / indistinct (朦胧 ménglóng = hazy/romantic)" },
    ]
  },

  {
    id: "si1",
    pinyin: "sī",
    description: "Silk, think, private, tear — sī in 6 forms",
    members: [
      { character: "司", meaning: "manage / department / company / in charge / 公司 = company" },
      { character: "思", meaning: "think / miss / ponder / thought / idea / 思想 = thought" },
      { character: "丝", meaning: "silk / thread / sliver / a tiny bit / 蚕丝 = silk" },
      { character: "私", meaning: "private / personal / selfish / secret / 私人 = private" },
      { character: "撕", meaning: "tear / rip / scratch / 撕开 = tear open" },
      { character: "嘶", meaning: "neigh / hoarse / hiss / 嘶哑 = hoarse" },
    ]
  },

  {
    id: "lan2",
    pinyin: "lán",
    description: "Blue, orchid, basket, ripple — lán in 6 characters",
    members: [
      { character: "蓝", meaning: "blue / 蓝色 = blue / 蓝天 = blue sky" },
      { character: "兰", meaning: "orchid / 兰花 = orchid / Lanzhou / elegant" },
      { character: "拦", meaning: "block / stop / bar the way / 拦住 = block" },
      { character: "栏", meaning: "railing / column / fence / 栏杆 = railing" },
      { character: "篮", meaning: "basket / 篮球 = basketball / 篮子 = basket" },
      { character: "澜", meaning: "ripple / large wave / 波澜 = waves/undulations" },
    ]
  },

  {
    id: "qian2",
    pinyin: "qián",
    description: "Front, money, submerge, pincers — qián in 6 forms",
    members: [
      { character: "前", meaning: "front / before / previous / ago / 前面 = in front" },
      { character: "钱", meaning: "money / coin / 钱包 = wallet / 零钱 = change" },
      { character: "潜", meaning: "submerge / hidden / latent / 潜力 = potential" },
      { character: "乾", meaning: "heaven / dry (乾卦) / surname / 乾坤 = heaven and earth" },
      { character: "虔", meaning: "devout / pious / reverent / 虔诚 = devout" },
      { character: "钳", meaning: "pliers / pincers / clamp / 钳子 = pliers" },
    ]
  },

  {
    id: "xian2",
    pinyin: "xián",
    description: "Salty, idle, virtuous, string — xián in 6 characters",
    members: [
      { character: "咸", meaning: "salty / all / 咸鱼 = salted fish / 咸淡 = saltiness" },
      { character: "嫌", meaning: "dislike / suspect / 嫌疑 = suspicion / 嫌弃 = dislike" },
      { character: "闲", meaning: "idle / free / unoccupied / 空闲 = free time" },
      { character: "弦", meaning: "string / chord / bowstring / 弦乐 = string music" },
      { character: "贤", meaning: "virtuous / worthy / able / 贤惠 = virtuous (wife)" },
      { character: "衔", meaning: "hold in mouth / rank / title / 衔接 = connect/link" },
    ]
  },

  {
    id: "tan2",
    pinyin: "tán",
    description: "Talk, phlegm, altar, play music — tán in 5 characters",
    members: [
      { character: "谈", meaning: "talk / chat / discuss / 谈话 = conversation / 谈判 = negotiate" },
      { character: "痰", meaning: "phlegm / sputum / 痰盂 = spittoon" },
      { character: "坛", meaning: "altar / platform / jar / arena / 天坛 = Temple of Heaven" },
      { character: "弹", meaning: "play (instrument) / spring back / bullet / 弹琴 = play piano" },
      { character: "谭", meaning: "Tan (common Chinese surname) / deep pool" },
    ]
  },

  {
    id: "zhe2",
    pinyin: "zhé",
    description: "Break, wise, hibernate, track — zhé in 5 characters",
    members: [
      { character: "折", meaning: "break / fold / discount / 折叠 = fold / 打折 = discount" },
      { character: "哲", meaning: "wise / philosopher / 哲学 = philosophy" },
      { character: "蛰", meaning: "hibernate / 惊蛰 = Awakening of Insects (solar term)" },
      { character: "辙", meaning: "wheel track / rut / 离题万丈 = off track" },
      { character: "褶", meaning: "pleat / wrinkle / crease / 褶皱 = wrinkle/fold" },
    ]
  },

  {
    id: "han2",
    pinyin: "hán",
    description: "Cold, Korea, contain, letter — hán in 5 forms",
    members: [
      { character: "含", meaning: "contain / hold in mouth / 包含 = contain / 含义 = meaning" },
      { character: "寒", meaning: "cold / poor / 寒冷 = cold / 寒假 = winter holiday" },
      { character: "韩", meaning: "Korea / Han (surname) / 韩国 = South Korea" },
      { character: "函", meaning: "letter / box / 函件 = letter / 函授 = correspondence course" },
      { character: "憨", meaning: "simple-minded / naive / 憨厚 = honest and simple" },
    ]
  },

  {
    id: "liang2",
    pinyin: "liáng",
    description: "Cool, grain, beam, good — liáng in 5 characters",
    members: [
      { character: "凉", meaning: "cool / cold / 凉快 = cool and refreshing / 凉水 = cold water" },
      { character: "粮", meaning: "grain / food / 粮食 = grain/food / 粮食安全 = food security" },
      { character: "良", meaning: "good / 良好 = good / 善良 = kind-hearted" },
      { character: "粱", meaning: "millet / grain / fine food / 高粱 = sorghum" },
      { character: "梁", meaning: "beam / bridge / Liang dynasty / 桥梁 = bridge" },
    ]
  },

  {
    id: "ge1",
    pinyin: "gē",
    description: "Song, elder brother, pigeon, cut — gē in 6 characters",
    members: [
      { character: "歌", meaning: "song / sing / 歌曲 = song / 歌手 = singer" },
      { character: "哥", meaning: "elder brother / 哥哥 = elder brother / 大哥 = big brother" },
      { character: "割", meaning: "cut / sever / harvest / 收割 = harvest / 割断 = cut off" },
      { character: "搁", meaning: "place / put aside / shelve / 搁置 = shelve / 搁下 = put down" },
      { character: "鸽", meaning: "pigeon / dove / 鸽子 = pigeon / 信鸽 = carrier pigeon" },
      { character: "胳", meaning: "arm (胳膊 gēbo = arm)" },
    ]
  },

  {
    id: "jin1",
    pinyin: "jīn",
    description: "Gold, today, catty, towel, tendon — jīn in 6 characters",
    members: [
      { character: "今", meaning: "today / now / present / 今天 = today / 如今 = nowadays" },
      { character: "金", meaning: "gold / metal / 金色 = golden / 金钱 = money" },
      { character: "斤", meaning: "catty (500g unit) / 公斤 = kilogram" },
      { character: "巾", meaning: "cloth / towel / 毛巾 = towel / 手巾 = handkerchief" },
      { character: "筋", meaning: "tendon / muscle / 肌腱 = tendon / 筋骨 = muscles and bones" },
      { character: "津", meaning: "ferry / saliva / Tianjin / 天津 = Tianjin" },
    ]
  },

  {
    id: "zhang1",
    pinyin: "zhāng",
    description: "Open, chapter, display, camphor — zhāng in 6 characters",
    members: [
      { character: "张", meaning: "open / spread / measure word (flat things) / Zhang (surname)" },
      { character: "章", meaning: "chapter / badge / rule / seal / 文章 = article" },
      { character: "彰", meaning: "display / manifest / 彰显 = manifest / 表彰 = commend" },
      { character: "璋", meaning: "jade tablet / type of jade / used in names" },
      { character: "樟", meaning: "camphor tree / 樟树 = camphor tree / 樟脑 = camphor" },
      { character: "蟑", meaning: "cockroach (蟑螂 zhāngláng = cockroach)" },
    ]
  },

  {
    id: "zong1",
    pinyin: "zōng",
    description: "Ancestor, brown, footprint, rice dumpling — zōng in 6 forms",
    members: [
      { character: "宗", meaning: "ancestor / sect / clan / 宗教 = religion / 祖宗 = ancestor" },
      { character: "棕", meaning: "brown / palm tree / 棕色 = brown / 棕榈 = palm tree" },
      { character: "踪", meaning: "trace / footprint / track / 踪迹 = trace / 失踪 = missing" },
      { character: "综", meaning: "weave / sum up / complex / 综合 = comprehensive" },
      { character: "鬃", meaning: "mane (of a horse or lion) / 马鬃 = horse mane" },
      { character: "粽", meaning: "rice dumpling (粽子 zòngzi — eaten at Dragon Boat Festival)" },
    ]
  },

  {
    id: "lin2",
    pinyin: "lín",
    description: "Forest, arrive, neighbour, phosphorus — lín in 6 forms",
    members: [
      { character: "林", meaning: "forest / grove / 森林 = forest / 林子 = grove" },
      { character: "临", meaning: "face / approach / arrive / about to / 来临 = approach" },
      { character: "淋", meaning: "drip / drench / 淋雨 = get rained on / 淋浴 = shower" },
      { character: "磷", meaning: "phosphorus (P) / 磷酸 = phosphoric acid" },
      { character: "鳞", meaning: "scale (of fish or reptile) / 鱼鳞 = fish scales" },
      { character: "邻", meaning: "neighbour / next to / adjacent / 邻居 = neighbour" },
    ]
  },

  {
    id: "ya1",
    pinyin: "yā",
    description: "Duck, press, exclamation, crow — yā in 5 characters",
    members: [
      { character: "鸭", meaning: "duck / 鸭子 = duck / 北京烤鸭 = Peking duck" },
      { character: "压", meaning: "press / crush / suppress / 压力 = pressure / 血压 = blood pressure" },
      { character: "呀", meaning: "oh! / ah! (exclamation expressing surprise or emphasis)" },
      { character: "鸦", meaning: "crow / raven / 乌鸦 = crow / 鸦雀无声 = dead silence" },
      { character: "丫", meaning: "fork / Y-shape / girl (informal) / 丫头 = girl (affectionate)" },
    ]
  },

  {
    id: "fei1",
    pinyin: "fēi",
    description: "Fly, not, consort, fragrant — fēi in 5 characters",
    members: [
      { character: "飞", meaning: "fly / flutter / 飞机 = airplane / 飞翔 = soar" },
      { character: "非", meaning: "not / wrong / must / African / 非常 = very / 非法 = illegal" },
      { character: "妃", meaning: "imperial consort / princess / 王妃 = princess" },
      { character: "菲", meaning: "fragrant / Philippines / 菲律宾 = Philippines" },
      { character: "霏", meaning: "falling of snow/rain / 霏霏 = drizzling (literary)" },
    ]
  },

  {
    id: "xing1",
    pinyin: "xīng",
    description: "Star, thriving, fishy, orang-utan — xīng in 5 characters",
    members: [
      { character: "星", meaning: "star / celebrity / 星星 = star / 明星 = celebrity" },
      { character: "兴", meaning: "prosperous / flourishing / start / 兴旺 = prosperous" },
      { character: "腥", meaning: "fishy smell / raw meat smell / 腥味 = fishy smell" },
      { character: "猩", meaning: "orang-utan / 猩猩 = orang-utan / chimpanzee" },
      { character: "惺", meaning: "clever / alert / 惺忪 = sleepy-eyed / 惺惺 = clever" },
    ]
  },

  {
    id: "yin2",
    pinyin: "yín",
    description: "Silver, sound, chant, gum — yín in 5 characters",
    members: [
      { character: "银", meaning: "silver / money / 银行 = bank / 银色 = silver" },
      { character: "音", meaning: "sound / music / 音乐 = music / 发音 = pronunciation" },
      { character: "吟", meaning: "chant / moan / recite poetry / 吟诗 = recite poetry" },
      { character: "淫", meaning: "excessive / obscene / lewd / 淫雨 = prolonged rain" },
      { character: "寅", meaning: "third earthly branch / tiger (hour/year) / reverent" },
    ]
  },

  {
    id: "chun2",
    pinyin: "chún",
    description: "Pure, lips, honest, quail — chún in 5 forms",
    members: [
      { character: "纯", meaning: "pure / simple / genuine / 纯洁 = pure / 纯粹 = purely" },
      { character: "唇", meaning: "lip / 嘴唇 = lip / 唇膏 = lip balm" },
      { character: "淳", meaning: "honest / simple and sincere / 淳朴 = simple and honest" },
      { character: "鹑", meaning: "quail / 鹌鹑 = quail" },
      { character: "醇", meaning: "pure alcohol / mellow / 醇酒 = fine wine" },
    ]
  },

  {
    id: "huan2",
    pinyin: "huán",
    description: "Return, ring, vast world — huán in 5 characters",
    members: [
      { character: "还", meaning: "return / pay back / still / 还是 = still/or / 归还 = return" },
      { character: "环", meaning: "ring / circle / 环境 = environment / 环形 = ring-shaped" },
      { character: "桓", meaning: "pillar / strong / surname Huan / 桓公 = Duke Huan" },
      { character: "寰", meaning: "the whole world / 寰宇 = the whole world" },
      { character: "鬟", meaning: "coiled hair / hair bun / 丫鬟 = maidservant" },
    ]
  },

  {
    id: "ke4",
    pinyin: "kè",
    description: "Conquer, carve, guest, lesson — kè in 5 characters",
    members: [
      { character: "克", meaning: "overcome / gram / 克服 = overcome / 千克 = kilogram" },
      { character: "刻", meaning: "carve / moment / severe / 刻苦 = hardworking / 立刻 = immediately" },
      { character: "客", meaning: "guest / customer / traveller / 客人 = guest / 顾客 = customer" },
      { character: "课", meaning: "lesson / class / subject / 上课 = attend class / 课本 = textbook" },
      { character: "颗", meaning: "measure word for small round things / 一颗星 = one star" },
    ]
  },

  {
    id: "lei4",
    pinyin: "lèi",
    description: "Tired, type, tears, rib — lèi in 5 forms",
    members: [
      { character: "累", meaning: "tired / weary / 疲累 = exhausted (also lěi = accumulate)" },
      { character: "类", meaning: "type / category / kind / similar / 种类 = type / 类似 = similar" },
      { character: "泪", meaning: "tears / 眼泪 = tears / 泪水 = tears" },
      { character: "肋", meaning: "rib / 肋骨 = rib" },
      { character: "擂", meaning: "beat / grind / 擂台 = fighting arena / 擂鼓 = beat a drum" },
    ]
  },

  {
    id: "hao4",
    pinyin: "hào",
    description: "Like, number, waste, vast — hào in 6 characters",
    members: [
      { character: "好", meaning: "like / be fond of / 爱好 = hobby / 好奇 = curious (diff. from hǎo = good)" },
      { character: "号", meaning: "number / name / shout / size / 号码 = number / 信号 = signal" },
      { character: "耗", meaning: "consume / waste / 耗费 = consume / 消耗 = deplete" },
      { character: "浩", meaning: "vast / grand / great / 浩大 = immense / 浩瀚 = vast" },
      { character: "皓", meaning: "bright / white / 皓月 = bright moon / 皓白 = brilliant white" },
      { character: "昊", meaning: "sky / vast heaven / 昊天 = vast sky (used in names)" },
    ]
  },

  {
    id: "li3",
    pinyin: "lǐ",
    description: "Inside, reason, plum, courtesy — lǐ in 7 characters",
    members: [
      { character: "里", meaning: "inside / inner / village / li (unit 500m) / 里面 = inside" },
      { character: "理", meaning: "reason / manage / arrange / 道理 = reason / 理解 = understand" },
      { character: "李", meaning: "plum / plum tree / Li (one of China's most common surnames)" },
      { character: "礼", meaning: "courtesy / ceremony / gift / 礼物 = gift / 礼貌 = polite" },
      { character: "俚", meaning: "rustic / slang / 俚语 = slang / colloquial expression" },
      { character: "锂", meaning: "lithium (chemical element, Li)" },
      { character: "鲤", meaning: "carp / 鲤鱼 = carp / 鲤鱼跳龙门 = carp leaping through the gate" },
    ]
  },

  {
    id: "jia1",
    pinyin: "jiā",
    description: "Home, add, good, praise — jiā in 5 characters",
    members: [
      { character: "家", meaning: "home / family / household / expert in / 家庭 = family" },
      { character: "加", meaning: "add / increase / plus / apply / 加油 = add oil/go for it!" },
      { character: "佳", meaning: "good / excellent / beautiful / fine / 佳节 = festive day" },
      { character: "嘉", meaning: "excellent / praise / auspicious / 嘉奖 = commend" },
      { character: "夹", meaning: "clip / sandwich / mix in / carry under arm / 夹子 = clip" },
    ]
  },

  {
    id: "bao3",
    pinyin: "bǎo",
    description: "Treasure, protect, full, fortress — bǎo in 5 characters",
    members: [
      { character: "保", meaning: "protect / keep / guarantee / guard / 保护 = protect" },
      { character: "宝", meaning: "treasure / precious / darling / gem / 宝贝 = treasure/baby" },
      { character: "饱", meaning: "full / satisfied / have enough / 吃饱 = eat one's fill" },
      { character: "堡", meaning: "fort / fortress / castle / stronghold / 堡垒 = fortress" },
      { character: "葆", meaning: "preserve / maintain / luxuriant / 永葆 = forever preserve" },
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // SPECIAL GROUPS — smaller but extremely important for learners
  // ─────────────────────────────────────────────────────────────

  {
    id: "ta1",
    pinyin: "tā",
    description: "He, she, it — three pronouns, one identical sound. Confusing at first!",
    members: [
      { character: "他", meaning: "he / him (referring to a male person)" },
      { character: "她", meaning: "she / her (referring to a female person)" },
      { character: "它", meaning: "it (referring to animals, objects, or things)" },
      { character: "塌", meaning: "collapse / sink / cave in / 倒塌 = collapse" },
      { character: "榻", meaning: "couch / low bed / 榻榻米 = tatami mat" },
    ]
  },

  {
    id: "de",
    pinyin: "de",
    description: "的 地 得 — all three particles sound identical. One of the trickiest points in Chinese!",
    members: [
      { character: "的", meaning: "structural particle — turns nouns/verbs into adjectives (e.g. 我的 = my)" },
      { character: "地", meaning: "adverbial particle — turns adjectives into adverbs (e.g. 快乐地 = happily)" },
      { character: "得", meaning: "complement particle — links a verb to its result (e.g. 说得好 = speak well)" },
    ]
  },

  {
    id: "ming2",
    pinyin: "míng",
    description: "Bright, name, inscription, tea — míng in 6 characters",
    members: [
      { character: "明", meaning: "bright / clear / understand / next (day) / 明白 = understand" },
      { character: "名", meaning: "name / famous / reputation / 名字 = name / 有名 = famous" },
      { character: "鸣", meaning: "cry / chirp / make a sound / resound / 鸣叫 = chirp" },
      { character: "冥", meaning: "dark / deep / underworld / 冥想 = meditation / 冥冥 = vast dark" },
      { character: "铭", meaning: "engrave / inscription / 铭记 = engrave in memory / 座右铭 = motto" },
      { character: "茗", meaning: "fine tea / young tea leaves / 香茗 = fragrant tea" },
    ]
  },

];
