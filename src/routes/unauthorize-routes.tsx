import {Navigate, Route, Routes} from "react-router-dom";
import React from "react";
import LoginPage from "../page/loginPage/loginPage";

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