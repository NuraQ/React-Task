import React, { useState } from "react";
import {
  TextField,
  FormHelperText,
  FormControl,
  InputAdornment
} from "@material-ui/core";
import clsx from "clsx";
import { EnhacnedIconButton, useTextFieldStyle } from "./textfeild.style";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useFormikContext } from "formik";

const FormikTextField = (Props) => {
  const {
    setFieldValue,
    setFieldTouched,
    name,
    value,
    error,
    className,
    container,
    FormControlStyle,
    type,
    isWithTwoLines,
    ...props
  } = Props;
  const classes = useTextFieldStyle();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormikContext();
  const handleChange = (e) => {
    if (e.target.value.indexOf("\n") > -1) {
      formik.submitForm();
    } else {
      setFieldValue(name, e.target.value);
      setFieldTouched(name, true, false);
    }

  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const inputProps = {
    endAdornment: type === "password" && (
      <InputAdornment position="end">
        <EnhacnedIconButton onClick={handleClickShowPassword} disableRipple>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </EnhacnedIconButton>
      </InputAdornment>
    )
  };
  const rowsNumber = isWithTwoLines ? 2 : 1;

  return (
    <FormControl
      error={!!error}
      className={clsx(classes.FormControlStyle, FormControlStyle)}
    >
      <TextField
        className={className}
        id="outlined-basic"
        variant="outlined"
        value={value}
        onChange={handleChange}
        InputProps={inputProps}
        type={showPassword ? "text" : type}
        multiline={isWithTwoLines}
        rows={rowsNumber}
        {...props}
      />
      {error && (
        <FormHelperText className={classes.FormHelperText} error={true}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FormikTextField;
