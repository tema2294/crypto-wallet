import {all} from 'redux-saga/effects'
import {getCoinWatcher} from "./getCoin";
import {getAllCoinWatcher} from "./getAllCoins";
import {authorizeWatcher} from "./authorize";
import {updateUserWatcher} from "./updateUser";
import {getUserInfoWatcher} from "./getUserInfo";

export default function* rootSaga() {
    yield all([
        getCoinWatcher(),
        getAllCoinWatcher(),
        authorizeWatcher(),
        updateUserWatcher(),
        getUserInfoWatcher()
    ])
}