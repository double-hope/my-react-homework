import React from 'react';
import {privateRoutes, publicRoutes} from '../router'
import {Route, Switch, Redirect} from "react-router-dom";

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
        <Switch>
            {privateRoutes.map(route =>
                <Route
                    key={route.path}
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                />
            )}
            <Redirect to="/"/>
        </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )}
                <Redirect to="/sign-up"/>
            </Switch>
    );
};

export default AppRouter;