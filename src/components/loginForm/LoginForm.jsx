import { FormGroup, Grid, Typography, TextField, Button } from "@material-ui/core";
import { EMAIL, PASSWORD } from "../../constants/login";
import {LoginApi}  from "../../containers/Login/lognApi";
import { useDispatch } from "react-redux";
export const LoginForm = () => {
    const dispatch = useDispatch()
    return (
        <Grid >
            <Typography component="h1" variant="h5" >
                {EMAIL}
            </Typography>
            <TextField id="standard-basic" label="Standard" />
            <Typography component="h1" variant="h5" >
                {PASSWORD}
            </Typography>
            <TextField id="standard-basic" label="Standard" />
            <Button onClick={() => {
                LoginApi.login(dispatch)
                
            }}>
                Login
            </Button>
        </Grid>
    )
}
