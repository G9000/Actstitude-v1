import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "proxima-nova, sans-serif",
  },
  textStyles: {
    h1: {
      fontSize: ["1xl", "3xl", "3xl", "3xl", "4xl"],
      lineHeight: "140%",
      marginBottom: "1.5rem",
    },
    h2: {
      fontSize: ["xl", "3xl"],
      lineHeight: "140%",
      letterSpacing: "-2%",
    },
    h3: {
      fontSize: ["lg", "2xl"],
      lineHeight: "140%",
    },
    h4: {
      fontSize: "lg",
      lineHeight: "140%",
    },
    h5: {
      fontSize: "md",
      lineHeight: "140%",
    },
    h6: {
      fontSize: ["sm", "md"],
      lineHeight: "145%",
    },
  },
  fontSizes: {
    xs: ".95rem",
    sm: "1rem",
    md: "1.12rem",
    lg: "1.375rem",
    xl: "1.95rem",
    "1xl": "2.44rem",
    "2xl": "2.62rem",
    "3xl": "3.05rem",
    "4xl": "4rem",
    "5xl": "5rem",
    "6xl": "6.5rem",
  },
  colors: {
    black: {
      700: "#0B0B0B",
      900: "#050505",
    },
    grey: {
      100: "#AEAEAE",
    },
    white: {
      50: "#f2f2f2",
    },
    accent: {
      400: "#f0295b",
    },
  },
})

export default Theme
