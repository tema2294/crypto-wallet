import {takeEvery, all, select, call, put} from 'redux-saga/effects'
import { walletActions } from "../../reducers/walletSlice";
import { getCoinWorker } from "./getCoin";
import { coinsNameSelector } from "../selectors/selectors";
import {ICoin, IUserCoinList} from "../../components/interfaces/server-types";
import {getCoin} from "../services/getCoinService";


export function* getAllCoinWatcher() {
    yield takeEvery(walletActions.loadAllCoins, getAllCoinsWorker);
}

function* getAllCoinsWorker() {
    try {
        yield put(walletActions.setLoading(true))

        const coins:IUserCoinList = yield select(coinsNameSelector)

        yield all(coins.map((coinInfo) => call(getCoinWorker,{payload: coinInfo})))
        const response: { data: ICoin } = yield call(getCoin, 'tether');

        yield put(walletActions.setUsdPrice(response?.data.market_data.current_price.rub))
        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

