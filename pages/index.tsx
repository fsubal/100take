import React from "react"
import Head from "next/head"
import styled from "styled-components"
import { Props } from "../theme"

const Hero = styled.section`
  width: 100%;
  height: 200px;
  background: ${({ theme }: Props) => theme.colors.primary};
`

export default () => {
  return (
    <>
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
      <Hero>Hello world</Hero>
    </>
  )
}
