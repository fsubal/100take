export const theme = {
  colors: {
    default: "rgb(103, 149, 200)",
    primary: "rgb(54, 114, 172)"
  }
} as const

export type Theme = typeof theme

export type Props = { theme: Theme }
