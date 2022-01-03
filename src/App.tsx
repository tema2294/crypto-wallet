import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

import {coinsWithFullInfoSelector, isLoadingSelector} from "./store/selectors/selectors";
import {walletActions} from "./reducers/walletSlice";
import {CoinList} from "./components/coinList/coinList";
import {SumWidget} from "./components/sumWidget/sumWidget";

function App() {
    const storeCoins = useSelector(coinsWithFullInfoSelector)
    const isLoading = useSelector(isLoadingSelector)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(walletActions.addInitialCoinName([
            {coinName:'chia',count: 1.27327713},
            {coinName: 'genopets',count: 12.53745},
            {coinName: 'filecoin',count: 6.23753},
            {coinName: 'tornado-cash',count: 6.03396},
            {coinName: 'biconomy',count: 37.68228},
            {coinName: 'flow',count: 14.97501},

        ]))
        setTimeout(()=> {
            dispatch(walletActions.loadAllCoins())
        },1000)

    },[])
    return (
        <>

            <SumWidget width={300} coins={storeCoins} isLoading={isLoading} />
            <CoinList coins={storeCoins} isLoading={isLoading}/>
        </>
    );
}

export default App;
