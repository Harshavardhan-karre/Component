import { createTheme } from "@mui/material";

export const theme=createTheme({
    palette:{
        primary:{
            main: "rgb(74, 64, 64)",
            light:"#393552"
        },
        secondary:{
            main:"#ffffff",
            dark:"#000000",
            light:"#6C5DD3",
        }
    },
    spacing:2,
    typography:{
        body1:{
            fontWeight:"bold",
            width:"auto",
            height:"auto"
        }
    }
})

