import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export const useLoginFormStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8b0000",
      borderWidth: 1,
      boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
    }
  },
  submit: {
    background: `linear-gradient(114.17deg,#f7f7f7 0%, #f7f7f7 100%)`,
    boxShadow: "0 2px 4px 0 rgba(44,39,56,0.08), 0 4px 8px 0 rgba(44,39,56,0.08)",
    padding: 15,
    fontSize: 17,
    fontWeight: 500,
    borderRadius: 6,
    marginBottom: 18,
    maxWidth: 400,
    textTransform: "none",
    fontFamily: "RobotoMedium"
  },
  forgetPasswordButton: {
    fontFamily: "RobotoRegular",
    textTransform: "none",
    color: "#0880AE",
    fontSize: 16,
    marginBottom: 28
  },
  labelTextStyle: {
    fontSize: "16px",
    letterSpacing: "0",
    lineHeight: "21px",
    marginBottom: 8,
    fontFamily: "RobotoRegular"
  },
  inputFieldStyle: {
    background: "#F6F7F8",
    marginTop: 0,
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0px 1000px white inset"
    }
  },
  inputFieldHighlightedStyle: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#00008b",
        borderWidth: 1,
        boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
      },
      "&:hover fieldset": {
        borderColor: "#00008b",
        boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00008b",
        boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
      }
    }
  },
  inputFieldErroredStyle: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.error.main,
        borderWidth: 1,
        boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
      },
      "&:hover fieldset": {
        borderColor: theme.palette.error.main,
        boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.error.main,
        boxShadow: "0 1px 8px 0 rgba(0,148,141,0.23)"
      }
    }
  },

  formControlStyle: {
    "& .MuiFormControl-root": {
      marginTop: 0
    }
  },
  emailTextField: {
    "&.MuiFormControl-root": {
      margin: "0 0 29px 0"
    }
  }
}));
