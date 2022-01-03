import {RootState} from "../store";


export const coinsWithFullInfoSelector = (store: RootState) => store.coinsWithFullData
export const coinsNameSelector = (store: RootState):string[] => store.coinsName
export const isLoadingSelector = (store: RootState):boolean => store.isLoading