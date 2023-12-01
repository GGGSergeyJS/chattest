import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    { path: "/about", element: <About />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/posts/:id", element: <PostIdPage />, exact: true },
    { path: "/error", element: <Error />, exact: true },
    { path: "/login", element: <Navigate replace to="/posts" />, exact: true },
    { path: "/", element: <Navigate replace to="/posts" />, exact: true },
    { path: "/*", element: <Navigate replace to="/error" />, exact: true },
];

export const publicRoutes = [
    { path: "/login", element: <Login />, exact: true },
    { path: "/*", element: <Navigate replace to="/login" />, exact: true },
];
