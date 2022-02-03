import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../components/login-page/loginPage";
import React from "react";

const UnauthorizedRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage/>}/>

            <Route
                path="*"
                element={<Navigate to="login" />}
            />
        </Routes>
    )
}

export default UnauthorizedRoutes