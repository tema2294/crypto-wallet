import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {AppDispatch} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {walletActions} from "../../reducers/walletSlice";
import {userSelector} from "../../store/selectors/selectors";

export const EditPage = () => {
    const [coinInput,setCoinInput] = useState('')
    const [usernameInput,setUsernameInput] = useState('')
    const [newUsernameInput,setNewUsernameInput] = useState('')
    const [countCoinInput,setCountCoinInput] = useState('')

    const dispatch: AppDispatch = useDispatch()
    const myRoleIsAdmin = useSelector(userSelector)?.roles.includes('ADMIN')

    const addCoin = () => {
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
                    <label htmlFor="exampleInputEmail1">Старое имя:</label>
                    <input onChange={onChangOldName} value={usernameInput} type="login" className="form-control"
                           placeholder="Enter login"/>
                </div>}
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Название монеты:</label>
                    <input onChange={onChangeCoin} value={coinInput} className='form-control mt-1' />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Количество монет:</label>
                    <input onChange={onChangeCountCoin} value={countCoinInput} className='form-control mt-1' />
                </div>
                <Button onClick={addCoin} className='mt-5'>
                    Добавить
                </Button>
            </form>

        </div>
    )
}