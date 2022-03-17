import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {AppDispatch} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {walletActions} from "../../reducers/walletSlice";
import {coinOptionsListSelector, isLoadingSelector, userSelector} from "../../store/selectors/selectors";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { toastSuccessAddCoin } from "../../constants/toastTexts";

export const EditPage = () => {
    const [coinInput,setCoinInput] = useState<any>('')
    const [usernameInput,setUsernameInput] = useState('')
    const [newUsernameInput,setNewUsernameInput] = useState('')
    const [countCoinInput,setCountCoinInput] = useState('')
    const [investmentName,setInvestmentName] = useState('')
    const [count,setCount] = useState<number>(0)
    const [isUsd,setIsUsd] = useState(false)

    const dispatch: AppDispatch = useDispatch()
    const myRoleIsAdmin = useSelector(userSelector)?.roles?.includes('ADMIN')
    const coinOptionsList = useSelector(coinOptionsListSelector)
    const isLoading = useSelector(isLoadingSelector)

    useEffect(()=> {
        dispatch(walletActions.loadCoinOptionsList())
    },[])

    const updateUser = () => {
        const isFullOtherInvestments = investmentName.length > 0 && count > 0
        const otherInvestments = isFullOtherInvestments ? {investmentName , count , isUsd} : undefined
        const username =  usernameInput.length > 0 ? usernameInput : undefined
        const newUsername =  newUsernameInput.length > 0 ? newUsernameInput : undefined
        const coins =  coinInput.id && countCoinInput ? [{coinName: coinInput.id,count: countCoinInput}] : undefined
        dispatch(walletActions.updateUser({username,newUsername,coins,otherInvestments }))
        toast(toastSuccessAddCoin);
    }
    const onChangeCoin = (e:any, newValue:any) => {
        setCoinInput(newValue)
    }
    const onChangOldName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsernameInput(e.target?.value)
    }
    const onChangeNewUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewUsernameInput(e.target?.value)
    }
    const onChangeCountCoin = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCountCoinInput(e.target?.value)
    }

    return (
        <div className='p-5 editPage-container'>

            <form className='login-form'>
                {myRoleIsAdmin &&
                <div className="form-group ">
                    <TextField onChange={onChangOldName} label='Username' value={usernameInput} placeholder="old username"/>
                </div>}
                <div className="form-group mt-3">
                    <TextField onChange={onChangeNewUsername} label='New name:' value={newUsernameInput}  placeholder="Enter new name"/>
                </div>

                <div className="form-group mt-3 ">
                    <Autocomplete
                        disablePortal
                        value={coinInput}
                        onChange={onChangeCoin}
                        id="combo-box-coinList"
                        options={coinOptionsList}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Coin name:" />}
                    />
                </div>
                <div className="form-group">
                    <TextField label='Count coin' onChange={onChangeCountCoin} value={countCoinInput} className='mt-3' />
                </div>
                <div className="form-group">
                    <TextField  label='Investment name' onChange={(e)=>setInvestmentName(e.target.value)} value={investmentName} className='mt-3' />
                    <TextField label='Count' type={'number'} onChange={(e:any)=>setCount(e.target?.value)} value={count} className='mt-3' />
                    <Checkbox value={isUsd} onChange={(e)=>setIsUsd(e.target.checked)}/>
                </div>
                <Button disabled={isLoading} onClick={updateUser} className='mt-5'>
                    Обновить
                </Button>
            </form>

        </div>
    )
}