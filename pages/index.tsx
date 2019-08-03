import React from "react"
import Head from "next/head"
import styled from "styled-components"
import { authors } from "../models/author"
import Author from "../components/Author"

const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.default};
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

      <Inner>
        {authors.map(author => (
          <Author src={author} />
        ))}
      </Inner>

      <Inner>[感想はこちら (Google Form 埋め込む)]</Inner>
    </Body>
  )
}
