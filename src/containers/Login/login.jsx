
import { Grid } from "@material-ui/core";
import { LoginForm } from "../../components/loginForm/LoginForm";
import {useLoginStyles} from "./login.style";
import Images from "../../images"
 const Login = () => {
    const classes = useLoginStyles()
    const {containerStyle,paperWrapperStyle} = classes;

    return (
        <Grid container className={paperWrapperStyle}>
            <div>
             <image src={Images.logo} />
            </div>
            <Grid item xs={12}>
            <LoginForm  />
            </Grid>
        </Grid>
    )
}
export default Login