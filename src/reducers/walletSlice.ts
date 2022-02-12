import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    ICoin,
    ICoinList,
    ICoinOptionsList,
    IUser,
    IUserCoinInfo,
    IUserCoinList
} from "../components/interfaces/server-types";

export interface CounterState {
    coinsWithFullData: ICoinList
    isLoading: boolean,
    user?: IUser,
    coinOptionsList: ICoinOptionsList
}

const initialState: CounterState = {
    coinsWithFullData: [],
    isLoading: true,
    coinOptionsList: []
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {

        addCoinWithFullInfo: (state,action: PayloadAction<ICoin>) => {
            const coin  = action.payload
            state.coinsWithFullData = [...state.coinsWithFullData , coin]
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
        }
    },
})

export const walletActions = walletSlice.actions
