import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

import {coinsWithFullInfoSelector, isLoadingSelector, userSelector } from "./store/selectors/selectors";
import {CoinList} from "./components/coinList/coinList";
import {SumWidget} from "./components/sumWidget/sumWidget";
import {walletActions} from "./reducers/walletSlice";

function App() {
    const user = useSelector(userSelector)
    const storeCoins = useSelector(coinsWithFullInfoSelector)
    const isLoading = useSelector(isLoadingSelector)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (user) {
            dispatch(walletActions.loadAllCoins())
        }
    },[user])

    return (
        <>
            <SumWidget width={300} coins={storeCoins} isLoading={isLoading} />
            <CoinList coins={storeCoins} isLoading={isLoading}/>
        </>
    );
}

export default App;
