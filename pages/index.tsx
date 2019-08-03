import React from "react"
import Head from "next/head"
import styled from "styled-components"

const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.default};
  height: 100vh;
`

const Hero = styled.section`
  width: 100%;
  height: 320px;
  background-image: url(${require("./images/hero.png")});
  background-size: cover;
  background-position: left 20% center;
  background-repeat: no-repeat;
`

const Inner = styled.section`
  width: 100%
  max-width: 768px;
  background: #fff;
  border-radius: 5px;
  margin: 16px auto;
  padding: 16px;

  @media(max-width: 768px) {
    border-radius: 0
  }
`

interface Author {
  penname: string
  avatar?: string
  twitter_screen_name: string
  pixiv_url?: string
  website_url?: string
  genre: "novel" | "manga" | "illust" | "text" | "dlc"
}

const authors: Author[] = [
  {
    penname: "Martin",
    twitter_screen_name: "martinreaction",
    pixiv_url: "https://www.pixiv.net/member.php?id=9060732",
    website_url: "",
    genre: "illust"
  },
  {
    penname: "閑咲婀萠",
    twitter_screen_name: "ametie_k3ki",
    pixiv_url: "",
    website_url: "http://ametie.web.fc2.com",
    genre: "manga"
  },
  {
    penname: "A歌羽.zip",
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
    twitter_screen_name: "subarun0415",
    pixiv_url: "https://pixiv.me/subarun0415",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "らむだきー",
    twitter_screen_name: "s6jrmany",
    pixiv_url: "https://www.pixiv.net/member.php?id=15408823",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "めめ",
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
    twitter_screen_name: "pripin789",
    pixiv_url: "https://www.pixiv.net/member.php?id=16706445",
    website_url: "",
    genre: "novel"
  },
  {
    penname: "神原ハヤオ",
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
    twitter_screen_name: "taksaro",
    pixiv_url: "",
    website_url: "",
    genre: "dlc"
  },
  {
    penname: "RuluMochi",
    twitter_screen_name: "Rumoi_Mochi",
    pixiv_url: "",
    website_url: "",
    genre: "dlc"
  },
  {
    penname: "ゴートリング",
    twitter_screen_name: "goat_ling",
    pixiv_url: "",
    website_url: "",
    genre: "dlc"
  }
]

export default () => {
  return (
    <Body>
      <Head>
        <title>
          「なんどでもゆめみてる」ステラのまほう百武照合同 - Umbrellahead
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/normalize.css@7.0.0/normalize.css"
        />
      </Head>
      <Hero></Hero>

      <Inner>
        <img src={require("./images/logo.svg")} alt="なんどでもゆめみてる" />
        <br />
        [何らかのエモい文章]
      </Inner>

      <Inner>
        [ここに写真]
        <br />
        [価格]
        <br />
        [頒布場所・サークル名]
        <br />
        [地図]
      </Inner>

      <Inner>[執筆者一覧]</Inner>

      <Inner>[感想はこちら (Google Form 埋め込む)]</Inner>
    </Body>
  )
}
