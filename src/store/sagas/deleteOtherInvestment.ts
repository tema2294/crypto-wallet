import {takeEvery, call, put} from 'redux-saga/effects'
import { walletActions } from "../../reducers/walletSlice";
import {deleteOtherInvestment} from "../services/deleteOtherInvestment";


export function* deleteOtherInvestmentWatcher() {
    yield takeEvery(walletActions.deleteOtherInvestment, deleteOtherInvestmentWorker);
}

function* deleteOtherInvestmentWorker(action: {payload: string}) {
    try {
        yield put(walletActions.setLoading(true))

        const { data:otherInvestments } = yield call(deleteOtherInvestment,action.payload)

        yield put(walletActions.setOtherInvestments(otherInvestments))

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

