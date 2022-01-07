import {put, takeEvery, call} from 'redux-saga/effects'
import {walletActions} from "../../reducers/walletSlice";
import {getCoinList} from "../services/getCoinList";


export function* loadCoinOptionsListWatcher() {
    yield takeEvery(walletActions.loadCoinOptionsList, loadCoinOptionsListWorker);
}

export function* loadCoinOptionsListWorker() {
    try {
        yield put(walletActions.setLoading(true))

        const { data:coinList } = yield call(getCoinList)
        const updateCoinList = coinList.map((coin:any) => ({...coin,label: coin.name}))
        yield put(walletActions.setCoinOptionsList(updateCoinList))
        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))
        alert('ошибка')
    }
}

