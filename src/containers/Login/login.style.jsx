import { makeStyles } from "@material-ui/core/styles";

export const useLoginStyles = makeStyles(theme => ({
  paperWrapperStyle: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 12px 24px 0 rgba(44,39,56,0.02), 0 32px 64px 0 rgba(44,39,56,0.04)",
    borderRadius: 16,
    alignItems: "center",
    padding: "40px 30px",
    boxSizing: "border-box",
    justifyContent: "center",
    marginTop: 2,
    marginBottom: 67,
  },
  signInTextStyle: {
    alignSelf: "flex-start",
    marginBottom: 8,
    fontSize: "34px",
    fontWeight: "bold",
    letterSpacing: "0",
    lineHeight: "36px",
    fontFamily: "RobotoBold",
    marginBottom: 30,
  },

}));
