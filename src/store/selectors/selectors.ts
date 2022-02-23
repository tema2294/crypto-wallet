import {RootState} from "../store";
import {ICoinOptionsList, IModalUpdateCoin, IUser, IUserCoinList} from "../../components/interfaces/server-types";


export const coinsWithFullInfoSelector = (store: RootState) =>[...store.coinsWithFullData].sort((a, b) => b.myInvestingRub - a.myInvestingRub)
export const coinsNameSelector = (store: RootState):IUserCoinList => store.user?.coins || []
export const isLoadingSelector = (store: RootState):boolean => store.isLoading
export const userSelector = (store: RootState):IUser | undefined => store.user
export const coinOptionsListSelector = (store: RootState):ICoinOptionsList => store.coinOptionsList
export const modalUpdateCoinDataSelector = (store: RootState):IModalUpdateCoin => store.modalUpdateCoin