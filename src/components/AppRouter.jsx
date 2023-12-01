import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/routes";
import { AuthContext } from "../context";
import MyLoader from "./UI/loader/MyLoader";

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

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) return <MyLoader />;

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
