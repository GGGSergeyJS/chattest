import React from "react";
import "./styles/App.css";
import { BrowserRouter, Link } from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <nav className="navbar">
                <ul className="navbar__links">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
            <br />
            {/* <div className="navbar">
                <div className="navbar__links">
                    <Link className="navbar__link" to="/about">
                        О сайте
                    </Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div> */}
            <MyNavbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
