import {all} from 'redux-saga/effects'
import {getCoinWatcher} from "./getCoin";
import {getAllCoinWatcher} from "./getAllCoins";

export default function* rootSaga() {
    yield all([
        getCoinWatcher(),
        getAllCoinWatcher()
    ])
}