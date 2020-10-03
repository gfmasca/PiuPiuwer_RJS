import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import Login from "../pages/Login/index";
import Feed from "../pages/Feed/index";
import SignIn from "../pages/SignIn/index";
import Confirmation from "../pages/Confirmation/index";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/confirmation" component={Confirmation} isPrivate />
            <Route path="/feed" component={Feed} isPrivate />
            <Route path="/signin" component={SignIn} />
        </Switch>
    );
}

export default Routes 