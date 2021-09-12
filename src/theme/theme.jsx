import {  createTheme  } from "@material-ui/core/styles";
// import {
//   RobotoLightWoff2Font,
//   RobotoRegularWoff2Font,
//   RobotoMediumWoff2Font,
//   RobotoBoldWoff2Font,
//   NunitoWoff2RegularFont,
//   NunitoSemiBoldWoff2RegularFont,
//   NunitoWoff2MediumFont
// } from "../fonts/";

const theme = createTheme ({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00948D"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#F14040"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    basicColors: {
      white: "#fff",
      lightGray: "#DFDFDF",
      darkGray: "#979797",
      green: "#00B955",
      lightBlack: "#212121",
      darkBlack: "#1A263E",
      background: "#F2F2F2",
      mediumGray: "#A1ABB0",
      borderGray: "#E0E0E0",
      darkestGray: "#4A4954",
      midDarkGray: "#D8D8D8",
      labelGray: "#ACAEB5",
      buttonContrastTextColor: "#FFFFFF",
      darkBlue: "#24005f",
      black: "#000000",
      errorColor: "#D93900",
      disabledInputColor: "rgba(0, 0, 0, 0.12)",
      inputBorderColor: "#DFDFDF",
      labelColor: "#888888",
      facebookBtnColor: "#1DA1F2",
      twitterBtnColor: "#4267B2",
      rangeColor: "#1A73E8",
      ratingBoxBackground: "#e8f1fc",
      starColor: "#EDAB1F",
      selectMenuArrow: "#979797",
      loaderPrimaryColor: "#DFDFDF",
      loaderSecondaryColor: "#ECEBEB",
      heartColor: "#d50000",
      lightBlue: "#0071f0",
      lightGreen: "#24c89a",
      darkGreen: "#189774",
      hoverGreen: "#84c2b1",
      calendarNav: "#9f9f9f",
      darkIconColor: "#a49daf",
      midNightBlue: "#01075d",
      topBarColor: "#34397D",
      snowGray: "#d9d9d9",
      viewrBarLightBlue: "#70D4FF",
      resolutionBlue: "#386A7F",
      whiteGray: "#995dff",
      greenText: "#8DBD4D",
      darkWhite: "#EBECF1",
      dialogGrayBackground: "#575f6b",
      genericPaperColor: "#eeeff3",
      sushi: "#8dbd4d",
      shuttleGray: "#575F6B",
      pelorous: "#34ACC7",
      morningGlory: "#98CADC",
      whiteLilac: "#F8F8FC",
      athensGray: "#EEEFF3",
      salmon: "#ff7676",
      treePoppy: "#F6921E",
      kraneshareColor: "#26254e",
      alabaster: "#F9F9F9",
      mineShaft: "#242424",
      whitesmoke: "#f5f5f5",
      selectiveYellow: "#F4B000",
      silver: "#C5C5C5",
      celeroLogo: "#01978B",
      alabaster2: "#F8F8F8"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: [
      "RobotoThin",
      "RobotoRegular",
      "RobotoMedium",
      "RobotoBold",
      "NunitoRegular",
      "NunitoMedium",
      "NunitoSemiBold",
      "sans-serif"
    ].join(", ")
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
        //   RobotoLightWoff2Font,
        //   RobotoRegularWoff2Font,
        //   RobotoMediumWoff2Font,
        //   RobotoBoldWoff2Font,
        //   NunitoWoff2RegularFont,
        //   NunitoSemiBoldWoff2RegularFont,
        //   NunitoWoff2MediumFont
        ]
      }
    }
  }
});

export default theme;
