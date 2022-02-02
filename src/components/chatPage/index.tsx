import {Button} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import {AppDispatch} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {walletActions} from "../../reducers/walletSlice";
import {coinOptionsListSelector, isLoadingSelector, userSelector} from "../../store/selectors/selectors";
import { Autocomplete, TextField } from "@mui/material";
import { toast } from "react-toastify";
import {apiCoinGecko} from "../../tools/api";

export const ChatPage = () => {
    const [message,setMessage] = useState([])
    const [connected,setConnected] = useState(false)
    const socket:any = useRef()
    useEffect(()=>{
        socket.current = new WebSocket('ws://localhost:5000')
        socket.current.onopen =()=> {
            setConnected(true)
            console.log('сокет открылся')
        }
        socket.current.onmessage =()=>console.log('пришло смс')
        socket.current.onerror =()=> console.log('ошибка сокета')
        socket.current.onclose =()=> console.log('сокет закрылся')
    },[])
    const dispatch: AppDispatch = useDispatch()
    const myRoleIsAdmin = useSelector(userSelector)?.roles?.includes('ADMIN')
    const coinOptionsList = useSelector(coinOptionsListSelector)
    const isLoading = useSelector(isLoadingSelector)

    return (
        <div className='p-5 editPage-container'>
                <div>

                </div>
        </div>
    )
}
export default ChatPage