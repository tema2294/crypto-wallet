import {all} from 'redux-saga/effects'
import {getCoinWatcher} from "./getCoin";
import {getAllCoinWatcher} from "./getAllCoins";
import {authorizeWatcher} from "./authorize";
import {updateUserWatcher} from "./updateUser";
import {getUserInfoWatcher} from "./getUserInfo";
import {deleteCoinWatcher} from "./deleteCoin";
import {loadCoinOptionsListWatcher} from "./getCoinList";
import {updateCoinWatcher} from "./updateCoin";
import {deleteOtherInvestmentWatcher} from "./deleteOtherInvestment";

export default function* rootSaga() {
    yield all([
        getCoinWatcher(),
        getAllCoinWatcher(),
        authorizeWatcher(),
        updateUserWatcher(),
        getUserInfoWatcher(),
        deleteCoinWatcher(),
        loadCoinOptionsListWatcher(),
        updateCoinWatcher(),
        deleteOtherInvestmentWatcher()
    ])
}