import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {AuthContext, BookedContext} from "./context";
import {useEffect, useState} from "react";

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [bookedTrips, setBookedTrips] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
        setIsLoading(false);
        }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
            setIsLoading
        }}>
            <BookedContext.Provider value={{
                bookedTrips,
                setBookedTrips
            }}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </BookedContext.Provider>

        </AuthContext.Provider>
    );
}

export default App;
