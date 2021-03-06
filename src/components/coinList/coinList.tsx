import {CoinCard} from "../card/coin-card";
import React, {useEffect, useState} from "react";
import { WidgetContainer} from "../widget-container/widgetContainer";
import {ICoin, ICoinList } from "../interfaces/server-types";
import {ModalUpdateCoin} from "../modal/modal-update-coin";
import {useDispatch} from "react-redux";
import {walletActions} from "../../reducers/walletSlice";
import {FormControlLabel, FormGroup, Switch } from "@mui/material";

interface ICoinListComponent {
    coins: ICoinList,
    width?: number,
    isLoading: boolean,
    deleteCoin: (coinName: string) => void
}

export const CoinList = (props: ICoinListComponent ) => {
    const {coins, isLoading, deleteCoin} = props
    const [coinList, setCoinList] = useState(coins)
    const dispatch = useDispatch()

    const isCoinsListEmpty = coins.length === 0 && !isLoading
    const isCoinsListNotEmpty = coins.length !== 0 && !isLoading

    const openUpdateModal = (coin: ICoin)=>  dispatch(walletActions.setModalUpdate({isVisible: true, coin}))

    useEffect(()=>{
        setCoinList(coins)
    },[coins])
    return (
        <WidgetContainer isLoading={isLoading}>
            {isCoinsListEmpty &&
            <h1>У вас не добавлена ни одна монета.</h1>
            }
            {isCoinsListNotEmpty &&
            <div className='card-container'>

                {coinList.map((data) => <CoinCard deleteCoin={deleteCoin} openUpdateModal={openUpdateModal} key={data.name} data={data}/>)}
            </div>}
            <ModalUpdateCoin />
        </WidgetContainer>
    )
}