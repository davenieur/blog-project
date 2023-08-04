import { extendTheme } from "@chakra-ui/react"
import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const thick = defineStyle({
  borderWidth: '.2rem', 
  borderStyle: "solid", 
  borderColor: "rgb(221, 221, 221)"
})

const dividerTheme = defineStyleConfig({
  variants: { thick },
})


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

  components: { Divider: dividerTheme },
})

export default theme;