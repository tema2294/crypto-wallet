import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {AppDispatch} from "../../store/store";
import {useDispatch} from "react-redux";
import {walletActions} from "../../reducers/walletSlice";

export const EditPage = () => {
    const [coinInput,setCoinInput] = useState('')
    const dispatch: AppDispatch = useDispatch()
    const addCoin = () => {
        dispatch(walletActions.addCoin(coinInput))
        setCoinInput('')
    }

    const onChange = (e:any) => {
        setCoinInput(e.target?.value)
    }

    return (
        <div className='p-5'>
            <label>
                Введите название монеты:
            </label>

            <input onChange={onChange} value={coinInput} className='form-control mt-1' />
            <Button onClick={addCoin} className='mt-5'>
                Добавить
            </Button>
        </div>
    )
}