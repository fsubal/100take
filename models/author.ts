interface Author {
  penname: string
  avatar?: string
  dotpics?: boolean
  twitter_screen_name: string
  pixiv_url?: string
  website_url?: string
  genre: "novel" | "manga" | "illust" | "text" | "dlc"
}

export const authors: Author[] = [
  {
    penname: "Martin",
    avatar: require("./icons/martinreaction.png"),
    twitter_screen_name: "martinreaction",
    pixiv_url: "https://www.pixiv.net/member.php?id=9060732",
    website_url: "",
    genre: "illust"
  },
  {
    penname: "閑咲婀萠",
    avatar: require("./icons/ametie_k3ki.jpg"),
    twitter_screen_name: "ametie_k3ki",
    pixiv_url: "",
    website_url: "http://ametie.web.fc2.com",
    genre: "manga"
  },
  {
    penname: "A歌羽.zip",
    avatar: require("./icons/utah.png"),
    twitter_screen_name: "Utha_art",
    pixiv_url: "",
    website_url: "https://autaha-zip.hatenablog.com/",
    genre: "illust"
  },
  {
    penname: "MNukazawa",
    twitter_screen_name: "MNukazawa",
    pixiv_url: "https://www.pixiv.net/member.php?id=11951957",
    website_url: "https://daisy-bell.booth.pm",
    genre: "novel"
  },
  {
    penname: "すばるん",
    avatar: require("./icons/subarun.jpg"),
    twitter_screen_name: "subarun0415",
    pixiv_url: "https://pixiv.me/subarun0415",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "らむだきー",
    avatar: require("./icons/s6jrmany.png"),
    twitter_screen_name: "s6jrmany",
    pixiv_url: "https://www.pixiv.net/member.php?id=15408823",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "めめ",
    avatar: require("./icons/Milktea900ml.jpg"),
    twitter_screen_name: "Milktea900ml",
    pixiv_url: "https://www.pixiv.net/member.php?id=11625201",
    website_url: "",
    genre: "illust"
  },
  {
    penname: "藤秋すばる",
    twitter_screen_name: "f_subal",
    pixiv_url: "",
    website_url: "",
    genre: "manga"
  },
  {
    penname: "nora1",
    avatar: require("./icons/nora1.png"),
    twitter_screen_name: "pripin789",
    pixiv_url: "https://www.pixiv.net/member.php?id=16706445",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "神原ハヤオ",
    avatar: require("./icons/kanbara_s.png"),
    twitter_screen_name: "/kanbara_s",
    pixiv_url: "https://www.pixiv.net/member.php?id=18870576",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "いたちか",
    twitter_screen_name: "nkmkinak",
    pixiv_url: "https://pixiv.me/user_srrm7377",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "染井本夜",
    twitter_screen_name: "biblio1719",
    pixiv_url: "https://pixiv.me/biblio1719",
    website_url: "",
    genre: "illust"
  },
  {
    penname: "くすく",
    twitter_screen_name: "xfiveone",
    pixiv_url: "https://www.pixiv.net/member.php?id=9297584",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "坂西原貴",
    avatar: require("./icons/Hirune101.jpg"),
    twitter_screen_name: "Hirune101",
    pixiv_url: "",
    website_url: "hirune1204daydream.hatenablog.com",
    genre: "novel"
  },
  {
    penname: "星見秋",
    twitter_screen_name: "himonohsm",
    pixiv_url: "https://www.pixiv.net/member.php?id=27273529",
    website_url: "https://hosimiakirara.hatenablog.com",
    genre: "novel"
  },
  {
    penname: "堅魚",
    twitter_screen_name: "kengyo7",
    pixiv_url: "",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "asakusa",
    twitter_screen_name: "asakuso1919",
    pixiv_url: "",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "A11",
    twitter_screen_name: "a11urrorg",
    pixiv_url: "pixiv.me/a11urrorg",
    website_url: "",
    genre: "text"
  },
  {
    penname: "～しょしぃる",
    avatar: require("./icons/taksaro.png"),
    twitter_screen_name: "taksaro",
    dotpics: true,
    pixiv_url: "",
    website_url: "",
    genre: "dlc"
  },
  {
    penname: "RuluMochi",
    avatar: require("./icons/RuluMochi.png"),
    twitter_screen_name: "Rumoi_Mochi",
    pixiv_url: "",
    website_url: "",
    genre: "dlc"
  },
  {
    penname: "ゴートリング",
    avatar: require("./icons/goatling.png"),
    dotpics: true,
    twitter_screen_name: "goat_ling",
    pixiv_url: "",
    website_url: "",
    genre: "dlc"
  }
]
