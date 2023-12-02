import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
// import Timer from "./components/Timer";
// import Input from "./components/Input";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                isLoading,
            }}
        >
            <Router>
                <MyNavbar />
                <AppRouter />
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
