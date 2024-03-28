import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    primary: "#ff5263",
    greytext: "#727272",
    blacktext: "#0D0E10",
    whitishgrey: "#e0dedc",

    greybg: "#eeebea",
    // greybg2: "#2A2B2C",
    greybg2: "#222b37",
  },
  fonts: {
    // Style Fonts
    julius: "'Julius Sans One', sans-serif",
    all: "'Allerta Stencil', sans-serif",
    fold: "'Foldit', cursive",
    marc: "'Marcellus SC', serif",
    wall: "'Wallpoet', cursive",
    turr: "'Turret Road', cursive",
    meg: "'Megrim', cursive",
    ice: "'Iceberg', cursive",
    jac: "'Jacques Francois Shadow', cursive",
    sirin: "'Sirin Stencil', cursive",

    // Basic Fonts
    primaryf: '"gordita", "Helvetica Neue", "Helvetica", sans-serif',
    b6: "'B612', sans-serif",
    anu: "'Anuphan', sans-serif",
    noto: "'Noto Sans Tagbanwa', sans-serif",
    k: "'K2D', sans-serif",
  },
});

export default Theme;
