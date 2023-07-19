import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
      brand: {
        primary: "#FCFCFC",
        secondary: "#99E1D9",
        tertiary: "#F7567C",
        quaternary: "#FFA143",
        black: "#212227",
        gray: "#212529",
        footer: "#F7F7F7"
    },
  },
})

export default theme;