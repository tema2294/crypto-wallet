import {Route, Routes} from "react-router-dom";
import MainPage from "../components/mainPage";
import {EditPage} from "../components/editPage/editPage";
import LoginPage from "../components/login-page/loginPage";
import React from "react";
import ChatPage from "../components/chatPage";

const AuthorizeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='edit-page' element={<EditPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='chatPage' element={<ChatPage/>}/>

        </Routes>
    )
}

export default AuthorizeRoutes