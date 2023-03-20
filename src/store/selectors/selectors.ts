import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {
    ICoinOptionsList,
    IModalUpdateCoin, IOtherInvestmentsList,
    IUser,
    IUserCoinList
} from "../../components/interfaces/server-types";

export const storeSelector = (store:RootState) => store;
export const coinsWithFullInfoSelector = createSelector(storeSelector, (store) => [...store.coinsWithFullData].sort((a, b) => b.myInvestingRub - a.myInvestingRub))
export const coinsNameSelector = (store: RootState):IUserCoinList => store.user?.coins || []
export const isLoadingSelector = (store: RootState):boolean => store.isLoading
export const userSelector = (store: RootState):IUser | undefined => store.user
export const otherInvestmentsSelector = (store: RootState):IOtherInvestmentsList => store.user?.otherInvestments || []
export const usdPriceSelector = (store: RootState):number => store.usdPrice
export const coinOptionsListSelector = (store: RootState):ICoinOptionsList => store.coinOptionsList
export const modalUpdateCoinDataSelector = (store: RootState):IModalUpdateCoin => store.modalUpdateCoin