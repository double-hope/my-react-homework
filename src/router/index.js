import Main from "../pages/Main";
import Bookings from "../pages/Bookings";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Trip from "../pages/Trip";

export const privateRoutes =[
    {path: '/', component: Main, exact: true},
    {path: '/bookings', component: Bookings, exact: true},
    {path: '/sign-in', component: SignIn, exact: true},
    {path: '/sign-up', component: SignUp, exact: true},
    {path: '/trip', component: Trip, exact: true}
]

export const publicRoutes =[
    {path: '/sign-in', component: SignIn, exact: true},
    {path: '/sign-up', component: SignUp, exact: true}
]