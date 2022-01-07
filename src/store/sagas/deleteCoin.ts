import {takeEvery, call, put} from 'redux-saga/effects'
import { walletActions } from "../../reducers/walletSlice";
import { deleteCoin } from "../services/deleteCoin";


export function* deleteCoinWatcher() {
    yield takeEvery(walletActions.deleteCoin, deleteCoinWorker);
}

function* deleteCoinWorker(action: {payload: string}) {
    try {
        yield put(walletActions.setLoading(true))

        const { data:newCoinList } = yield call(deleteCoin,action.payload)

        yield put(walletActions.setCoins(newCoinList))

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

