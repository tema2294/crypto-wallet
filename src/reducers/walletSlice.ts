import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    ICoin,
    ICoinList,
    ICoinOptionsList,
    IModalUpdateCoin,
    IUser,
    IUserCoinInfo,
    IUserCoinList
} from "../components/interfaces/server-types";

export interface CounterState {
    coinsWithFullData: ICoinList
    isLoading: boolean,
    user?: IUser,
    coinOptionsList: ICoinOptionsList
    modalUpdateCoin : IModalUpdateCoin
}

const initialState: CounterState = {
    coinsWithFullData: [],
    isLoading: true,
    coinOptionsList: [],
    modalUpdateCoin : {
        isVisible: false
    }
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {

        addCoinWithFullInfo: (state,action: PayloadAction<ICoin>) => {
            const coin  = action.payload
            state.coinsWithFullData = [...state.coinsWithFullData , coin]
        },
        updateCoinWithFullInfo: (state,action: PayloadAction<ICoin>) => {
            const updateCoin  = action.payload
            state.coinsWithFullData = state.coinsWithFullData.map((coin)=>{
                const isUpdateCoin = coin.id === updateCoin.id
                if (isUpdateCoin) {
                    return updateCoin
                } else return coin
            })
        },
        getCoin: (state,_action:PayloadAction<IUserCoinInfo>)=> {
            return state
        },
        loadAllCoins: (state) => {
            state.coinsWithFullData = []
            return state
        },
        authorize: (state,_action:PayloadAction<{username: string,password: string}>) => {
            return state
        },
        setLoading: (state,action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setUser: (state,action:PayloadAction<IUser>) => {
            state.user = action.payload
        },
        updateUser: (state,_action:PayloadAction<{ username?:string,newUsername?:string,password?:string,coins:any[] }>) => {
            return state
        },
        getUserInfo: (state)=> {
           return state
        },
        deleteCoin: (state,_action:PayloadAction<string>)=> {
          return state
        },

        setCoins: (state,action:PayloadAction<IUserCoinList>) => {
            if (state.user) {
                state.user = {...state.user,coins: action.payload}
            }
        },
        loadCoinOptionsList: (state)=> {
            return state
        },
        setCoinOptionsList: (state,action:PayloadAction<ICoinOptionsList>) => {
            state.coinOptionsList = action.payload
        },
        setModalUpdate : (state,action:PayloadAction<IModalUpdateCoin>) => {
          state.modalUpdateCoin =  {...state.modalUpdateCoin,...action.payload}
        },
        updateCoin: (state,_action: PayloadAction<{ count:number, coinId: string }>) => {
            return state
        }
    },
})

export const walletActions = walletSlice.actions
