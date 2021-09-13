import { Grid, Typography, TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import {
    FORMIK_EMAIL_VALID_EMAIL,
    FORMIK_PASSWORD_BODY,
    FORMIK_PASSWORD_REQUIRED
  } from "../../constants/formik";
  import clsx from "clsx";
import { EMAIL, PASSWORD } from "../../constants/login";
import {LoginApi}  from "../../containers/Login/lognApi";
import FormikTextField from "../formik/formikTextfeild";
import {useLoginFormStyles} from "./LoginForm.style"
import { useDispatch } from "react-redux";
export const LoginForm = () => {
    const classes = useLoginFormStyles();
    const dispatch = useDispatch()

    const {
        emailTextField,
        forgetPasswordButton,
        form,
        formControlStyle,
        inputFieldErroredStyle,
        inputFieldHighlightedStyle,
        inputFieldStyle,
        labelTextStyle,
        submit
      } = classes;

      const initialValues = {
        email: "",
        password: ""
      };

      const validationSchema = Yup.object().shape({
        email: Yup.string()
          .email(FORMIK_EMAIL_VALID_EMAIL)
          .required(FORMIK_EMAIL_VALID_EMAIL),
        password: Yup.string().required(FORMIK_PASSWORD_REQUIRED).min(8, FORMIK_PASSWORD_BODY)
      });

      const handleSubmit = (values) => {
        const userObj = {
          username: values.email,
          password: values.password,
        };
        LoginApi.login(userObj,dispatch)
      };
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {({
            values,
            setFieldValue,
            setFieldTouched,
            errors
          }) => {
            const emailInputFieldClasses = clsx(
              inputFieldStyle,
              values.email && inputFieldHighlightedStyle,
              errors.email && inputFieldErroredStyle
            );
            const passwordInputFieldClasses = clsx(
              inputFieldStyle,
              values.password && inputFieldHighlightedStyle,
              errors.password && inputFieldErroredStyle
            );
            return (
              <Form className={form}>
                <Typography component="h1" variant="h5" className={labelTextStyle}>
                  {EMAIL}
                </Typography>
                <FormikTextField
                  FormControlStyle={emailTextField}
                  id={"email"}
                  name={"email"}
                  value={values.email}
                  autoFocus
                  fullWidth
                  autoComplete={"email"}
                  margin={"normal"}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  error={errors["email"]}
                  className={emailInputFieldClasses}
                />
                <Typography component="h1" variant="h5" className={labelTextStyle}>
                  {PASSWORD}
                </Typography>
                <FormikTextField
                  FormControlStyle={formControlStyle}
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  value={values.password}
                  fullWidth
                  margin={"normal"}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                  error={errors["password"]}
                  className={passwordInputFieldClasses}
                />
                <Button type="submit" fullWidth variant="contained" className={submit}>
                  Sign In 
                </Button>
              </Form>
            );
          }}
        </Formik>
      );
}
