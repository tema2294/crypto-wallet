import {put, takeEvery, call} from 'redux-saga/effects'
import {walletActions} from "../../reducers/walletSlice";
import {updateCoin} from "../services/updateCoin";
import {getCoinWorker} from "./getCoin";


export function* updateCoinWatcher() {
    yield takeEvery(walletActions.updateCoin, updateCoinWorker);
}

export function* updateCoinWorker(action: { payload: { count:number, coinId: string } }) {
    try {
        yield put(walletActions.setLoading(true))

        const { data } = yield call(updateCoin,action.payload);
        const { coinId,count } = data

        yield call(getCoinWorker,{payload: { count, coinName: coinId,updatedCase: true}})

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))
    }
}

