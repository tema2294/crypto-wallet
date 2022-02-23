import {put, takeEvery, call} from 'redux-saga/effects'
import {walletActions} from "../../reducers/walletSlice";
import {getCoin} from "../services/getCoinService";
import {ICoin, IUserCoinInfo} from "../../components/interfaces/server-types";


export function* getCoinWatcher() {
    yield takeEvery(walletActions.getCoin, getCoinWorker);
}

export function* getCoinWorker(action: { payload: IUserCoinInfo }) {
    try {
        yield put(walletActions.setLoading(true))
        const { coinName, count,updatedCase } = action.payload
        const response: { data: ICoin } = yield call(getCoin, coinName);
        const { market_data } = response.data
        const { current_price } = market_data
        const { usd ,rub } = current_price
        const coinFullData = {...response.data,usdPrice: usd,myInvestingRub : (rub * count),count,myInvestingUsd : (usd * count), }
        if (updatedCase) {
            yield put(walletActions.updateCoinWithFullInfo(coinFullData))
        } else {
            yield put(walletActions.addCoinWithFullInfo(coinFullData))

        }
        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

