import {put, takeEvery, call} from 'redux-saga/effects'
import {walletActions} from "../../reducers/walletSlice";
import {authorizeUser} from "../services/authorize";


export function* authorizeWatcher() {
    yield takeEvery(walletActions.authorize, authorizeWorker);
}

export function* authorizeWorker(action: { payload: { username: string, password: string } }) {
    try {
        yield put(walletActions.setLoading(true))
        const { data } = yield call(authorizeUser, action.payload)
        localStorage.setItem('token',data.token)
        yield put(walletActions.setUser(data.user))
        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

