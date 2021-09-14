import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import newHistory from "./history";
import  AuthRoute  from "./AuthRoute"
import { NonAuthRoutes, AuthRoutes } from "../constants/routes";

const NotFound = lazy(() => import("../containers/NotFound"));
const Login = lazy(() => import("../containers/Login/login"));
const HomePage = lazy(() => import("../containers/Home/home"));

export const RouterComponent = () => {
    return (
        <Router history={newHistory}>
            <Suspense fallback={<div>Loading... </div>}>
                <Switch>
                    <Route  path={NonAuthRoutes.login} component={Login} />
                    <AuthRoute exact path={"/"} component={HomePage} />
                    <AuthRoute path={AuthRoutes.home} component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}
