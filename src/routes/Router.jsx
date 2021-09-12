import React, { lazy, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import  newHistory  from "./history";
import {  NonAuthRoutes, AuthRoutes } from "../constants/routes";


const Login = lazy(() => import("../containers/Login/login"));
const HomePage = lazy(() => import("../containers/Home/home"));

export const RouterComponent = () => {
    return (
        <Router history={newHistory}>
            <Suspense fallback={<div>Loading... </div>}>

            <Switch>
                <Route path={NonAuthRoutes.login} component={Login} />
                <Route path={AuthRoutes.home}  component={HomePage} />
                <Route component={Login} />
            </Switch>
            </Suspense>
        </Router>
    );
}
