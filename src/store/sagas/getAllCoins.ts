import {takeEvery, all, select, call, put} from 'redux-saga/effects'
import { walletActions } from "../../reducers/walletSlice";
import { getCoinWorker } from "./getCoin";
import { coinsNameSelector } from "../selectors/selectors";
import { IUserCoinList} from "../../components/interfaces/server-types";


export function* getAllCoinWatcher() {
    yield takeEvery(walletActions.loadAllCoins, getAllCoinsWorker);
}

function* getAllCoinsWorker() {
    try {
        yield put(walletActions.setLoading(true))

        const coins:IUserCoinList = yield select(coinsNameSelector)

        yield all(coins.map((coinInfo) => call(getCoinWorker,{payload: coinInfo})))

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

