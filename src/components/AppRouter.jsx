import React, {useContext, useEffect} from 'react';
import {privateRoutes, publicRoutes} from '../router'
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return (
            <Loader />
        )

    }

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
            <Redirect to='/'/>
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
                <Redirect to='/sign-in'/>
            </Switch>
    );
};

export default AppRouter;