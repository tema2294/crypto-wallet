import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "../page/mainPage";
import {EditPage} from "../page/editPage/editPage";
import React from "react";
import ChatPage from "../page/chatPage";

const AuthorizeRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='edit-page' element={<EditPage/>}/>
            {/*<Route path='chatPage' element={<ChatPage/>}/>*/}
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
    )
} 

export default AuthorizeRoutes