import {takeEvery, all, select, call, put} from 'redux-saga/effects'
import { walletActions } from "../../reducers/walletSlice";
import { getCoinWorker } from "./getCoin";
import { coinsNameSelector } from "../selectors/selectors";
import {apiHeroku} from "../../tools/api";
import {updateUser} from "../services/updateUser";


export function* updateUserWatcher() {
    yield takeEvery(walletActions.updateUser, updateUserWorker);
}

function* updateUserWorker(action: {payload: {username?: string,newUsername?:string,password?: string,coins?:any[]}}) {
    try {
        yield put(walletActions.setLoading(true))

        const { data } = yield call(updateUser,action.payload)
        console.log(data)

        yield put(walletActions.setLoading(false))

    } catch (e) {
        yield put(walletActions.setLoading(false))

        alert('ошибка')
    }
}

