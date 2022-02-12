import {takeEvery, call, put} from 'redux-saga/effects'
import { walletActions } from "../../reducers/walletSlice";
import {updateUser} from "../services/updateUser";
import {clearObject} from "../../tools/clearObject";
import {IUserCoinList} from "../../components/interfaces/server-types";


export function* updateUserWatcher() {
    yield takeEvery(walletActions.updateUser, updateUserWorker);
}

function* updateUserWorker(action: {payload: {username?: string,newUsername?:string,password?: string,coins?:IUserCoinList}}) {
    try {
        yield put(walletActions.setLoading(true))

        const { data } = yield call(updateUser,clearObject(action.payload))
        const { user } = data

        if (user) {
            yield put(walletActions.setUser(user))
        }

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

