import React from "react"
import { Grid } from "@chakra-ui/react"

export const FourColGrid = ({ children, ...props }) => (
  <Grid
    gap="3rem"
    gridTemplateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(3, 1fr)",
      xl: "repeat(4, 1fr)",
    }}
    {...props}
  >
    {children}
  </Grid>
)
