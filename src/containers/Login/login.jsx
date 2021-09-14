
import { Grid, Typography } from "@material-ui/core";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { SIGN_IN } from "../../constants/login"
import { useLoginStyles } from "./login.style";

const Login = () => {
    const classes = useLoginStyles()
    const { paperWrapperStyle, signInTextStyle } = classes;

    return (
        <Grid container className={paperWrapperStyle}>
            <div>
                <Typography component="h1" className={signInTextStyle}>
                    {SIGN_IN}
                </Typography>
            </div>
            <Grid item xs={12}>
                <LoginForm />
            </Grid>
        </Grid>
    )
}
export default Login