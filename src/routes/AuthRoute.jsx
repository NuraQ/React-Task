import { Redirect, Route } from "react-router-dom";
import { NonAuthRoutes } from "../constants/routes";
import { useSelector } from "react-redux";


const AuthRoute = ({
    component,
    path,
}) => {

    const isAuthenticated =  localStorage.getItem("token");
    console.log(isAuthenticated)
    //   const userType = auth.user.type || storageService.getITem("userType");
    const message = `you don't have permission`;

    if (!isAuthenticated) {
        return (
            <Redirect
                to={{
                    pathname: NonAuthRoutes.login
                }}
            />
        );
    } else {
        return (
            <Route
                path={path}
                component={component}
            />
        )

    }
};
export default AuthRoute;
