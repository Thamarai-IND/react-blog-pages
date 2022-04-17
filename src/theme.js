import { createTheme } from "@mui/material";
import {  pink, purple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
          main: purple[500],
          light: pink[500]
        },
        secondary: {
          main: pink[500]
        },
        otherColor:{
            main:"#999",
            light:pink[500]
        }
      }
})