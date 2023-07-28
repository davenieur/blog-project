import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
      brand: {
        primary: "#FCFCFC",
        secondary: "#FF8811",
        tertiary: "#5F00BA",
        black: "#0C0910",
        gray: "#212529",
        pink: "#F227B2",
        footer: "#F7F7F7"
    },
  },
})

export default theme;