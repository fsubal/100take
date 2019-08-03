import styled, { css } from "styled-components"
import { Author } from "../models/author"

type AvatarProps = React.HTMLProps<HTMLImageElement> & {
  crisp: boolean
}

const Avatar = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-right: 8px
  border-radius: 50%;
  background-image: url(${(props: AvatarProps) => props.src});
  background-size: cover;
  background-position: center;
  ${(props: AvatarProps) =>
    props.crisp
      ? css`
          image-rendering: pixelated;
          image-rendering: -webkit-crisp-edges;
          image-rendering: -moz-crisp-edges;
          -ms-interpolation-mode: nearest-neighbor;
        `
      : null};
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const AuthorItem: React.FC<{ src: Author }> = ({ src: author }) => {
  return (
    <Container>
      <Avatar
        crisp={author.dotpics || false}
        src={author.avatar}
        alt={author.penname}
      />
      {author.penname}
    </Container>
  )
}

export default AuthorItem
