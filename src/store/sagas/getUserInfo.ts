import {put, takeEvery, call} from 'redux-saga/effects'
import {walletActions} from "../../reducers/walletSlice";
import {getUserInfo} from "../services/getUserInfo";


export function* getUserInfoWatcher() {
    yield takeEvery(walletActions.getUserInfo, getUserInfoWorker);
}

export function* getUserInfoWorker() {
    try {
        yield put(walletActions.setLoading(true))

        const {data:userData} = yield call(getUserInfo);

        yield put(walletActions.setUser(userData))

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))
        alert('ошибка')
    }
}

