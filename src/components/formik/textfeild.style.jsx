import { makeStyles, withStyles } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";

export const useTextFieldStyle = makeStyles((theme) => ({
  TextField: {
    width: "100%",
    "& > div": {
      borderRadius: "16px",
      height: "80px",
      backgroundImage:
        "linear-gradient(to left top, #ecedf2, #e9eaef, #e5e7ed, #e2e4ea, #dee1e8)",
      boxShadow: "inset 6px 6px 10px 0px rgba(36, 65, 93, 0.2)",
      [`${theme.breakpoints.down("md")}`]: {
        height: "50px"
      },
      "& > fieldset": {
        border: 0
      },
      "& > input": {
        fontFamily: "Roboto-Regular,sans-serif",
        textAlign: "center",
        fontSize: "30px",
        fontWeight: 900,
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: 1.23,
        letterSpacing: "normal",
        color: theme.palette.basicColors.greenText,
        [`${theme.breakpoints.down("md")}`]: {
          fontSize: "20px"
        }
      }
    }
  },
  FormHelperText: {
    fontSize: 12,
    paddingLeft: 5,
    marginTop: 0
  },
  FormControlStyle: {
    width: "100%"
  }
}));

export const EnhacnedIconButton = withStyles(() => ({
  root: {
    "&:hover": {
      background: "#F6F7F8"
    }
  }
}))(IconButton);
