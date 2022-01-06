import {RootState} from "../store";


export const coinsWithFullInfoSelector = (store: RootState) => store.coinsWithFullData
export const coinsNameSelector = (store: RootState):string[] => store.user?.coins || []
export const isLoadingSelector = (store: RootState):boolean => store.isLoading
export const userSelector = (store: RootState):any => store.user