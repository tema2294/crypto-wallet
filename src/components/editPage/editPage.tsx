import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {AppDispatch} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {walletActions} from "../../reducers/walletSlice";
import {coinOptionsListSelector, userSelector} from "../../store/selectors/selectors";
import { Autocomplete, TextField } from "@mui/material";

export const EditPage = () => {
    const [coinInput,setCoinInput] = useState<any>('')
    const [usernameInput,setUsernameInput] = useState('')
    const [newUsernameInput,setNewUsernameInput] = useState('')
    const [countCoinInput,setCountCoinInput] = useState('')

    const dispatch: AppDispatch = useDispatch()
    const myRoleIsAdmin = useSelector(userSelector)?.roles?.includes('ADMIN')
    const coinOptionsList = useSelector(coinOptionsListSelector)
    useEffect(()=> {
        dispatch(walletActions.loadCoinOptionsList())
    },[])

    const updateUser = () => {
        dispatch(walletActions.updateUser({username:usernameInput,newUsername:newUsernameInput,coins: [{coinName: coinInput,count: countCoinInput}] }))
    }

    const onChangeCoin = (e:any) => {
        setCoinInput(e.target?.value)
    }
    const onChangOldName = (e:any) => {
        setUsernameInput(e.target?.value)
    }
    const onChangeNewUsername = (e:any) => {
        setNewUsernameInput(e.target?.value)
    }
    const onChangeCountCoin = (e:any) => {
        setCountCoinInput(e.target?.value)
    }

    return (
        <div className='p-5'>
            <label>
                Введите название монеты:
            </label>
            <form className='login-form'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Новое имя:</label>
                    <input onChange={onChangeNewUsername} value={newUsernameInput}  type="login" className="form-control" placeholder="Enter login"/>
                </div>
                {myRoleIsAdmin &&
                <div className="form-group">

                    <TextField onChange={onChangOldName} value={usernameInput} placeholder="Enter login"/>
                </div>}
                <div className="form-group">
                    <Autocomplete
                        disablePortal

                        id="combo-box-coinList"
                        options={coinOptionsList}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Название монеты:" />}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Количество монет:</label>
                    <input onChange={onChangeCountCoin} value={countCoinInput} className='form-control mt-1' />
                </div>
                <Button onClick={updateUser} className='mt-5'>
                    Обновить
                </Button>
            </form>

        </div>
    )
}