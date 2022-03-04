import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {coinsWithFullInfoSelector, isLoadingSelector, userSelector} from "../../store/selectors/selectors";
import {CoinList} from "../../components/coinList/coinList";
import {SumWidget} from "../../components/sumWidget/sumWidget";
import {walletActions} from "../../reducers/walletSlice";
import './style.css';
import {OtherInvestmentWidget} from "../../components/otherInvestmentWidget/otherInvestmentWidget";

function MainPage() {
    const user = useSelector(userSelector)
    const storeCoins = useSelector(coinsWithFullInfoSelector)

    const isLoading = useSelector(isLoadingSelector)
    const dispatch = useDispatch()

    const deleteCoin = (coinName: string) => {
        dispatch(walletActions.deleteCoin(coinName))
    }

    useEffect(() => {
        if (user) {
            dispatch(walletActions.loadAllCoins())
        }
    }, [user])

    return (
        <>
                <SumWidget width={301} coins={storeCoins} isLoading={isLoading}/>
                <OtherInvestmentWidget isLoading={isLoading} width={301}/>
            <CoinList deleteCoin={deleteCoin} coins={storeCoins} isLoading={isLoading}/>
        </>
    );
}

export default MainPage;
