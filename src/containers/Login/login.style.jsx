import { makeStyles } from "@material-ui/core/styles";

export const useLoginStyles = makeStyles(theme => ({
  paperWrapperStyle: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 12px 24px 0 rgba(44,39,56,0.02), 0 32px 64px 0 rgba(44,39,56,0.04)",
    // backgroundColor: theme.palette.basicColors.white,
    borderRadius: 16,
    alignItems: "center",
    padding: "40px 30px",
    boxSizing: "border-box",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 67,
 
  },
  // containerStyle: {
  //   backgroundColor: theme.palette.customStyles.backGroundColor,
  //   height: "100%"
  // },
  // signInTextStyle: {
  //   color: theme.palette.customStyles.primaryTextColor,
  //   alignSelf: "flex-start",
  //   marginBottom: 8,
  //   fontSize: "34px",
  //   fontWeight: "bold",
  //   letterSpacing: "0",
  //   lineHeight: "36px",
  //   fontFamily: "RobotoBold"
  // },
  // subTitleTextStyle: {
  //   fontFamily: "RobotoRegular",
  //   marginTop: 8,
  //   marginBottom: 16,
  //   alignSelf: "flex-start",
  //   color: theme.palette.customStyles.primaryTextColor,
  //   fontSize: "16px",
  //   letterSpacing: "0",
  //   lineHeight: "22px"
  // },
  // gridItemStyle: {
  //   display: "flex",
  //   justifyContent: "center"
  // },
  // gridItemSmDownStyle: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "column"
  // },
  logoStyle: {
    marginTop: 28,
    maxHeight: 40,
    maxWidth: 170
  },
  // paperWrapperSmDownStyle: {
  //   borderRadius: 16
  // },
  // noAccountTextStyle: {
  //   marginRight: 5,
  //   height: 26,
  //   color: theme.palette.customStyles.primaryTextColor,
  //   fontFamily: "RobotoRegular",
  //   fontSize: 16,
  //   letterSpacing: 0,
  //   lineHeight: "22px"
  // },
  // signUpLink: {
  //   fontFamily: "RobotoRegular",
  //   textTransform: "none",
  //   color: "#0880AE",
  //   fontSize: 16,
  //   marginBottom: 28
  // },
  // logoGridContainer: {
  //   width: "100%",
  //   paddingLeft: 49,
  //   justifyContent: "flex-start",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: 20,
  //     justifyContent: "center"
  //   }
  // }
}));
