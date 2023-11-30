import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
// import { routes } from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="/*" element={<Navigate replace to="/error" />} />
        </Routes>
    );
};

// const AppRouter = () => {
//     return (
//         <Routes>
//             {routes.map((route, index) => (
//                 <Route
//                     key={index}
//                     path={route.path}
//                     element={route.element}
//                     exact={route.exact}
//                 />
//             ))}
//         </Routes>
//     );
// };

export default AppRouter;
