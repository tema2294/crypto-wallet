import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../components/login-page/loginPage";
import React from "react";
import {ChatPage} from "../components/chatPage";

const UnauthorizedRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='chat' element={<ChatPage/>}/>
            <Route
                path="*"
                element={<Navigate to="login" />}
            />
        </Routes>
    )
}

export default UnauthorizedRoutes