import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/feed" component={Feed} />
        </Switch>
    );
}

export default Routes 