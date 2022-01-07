import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    coinsWithFullData: any[]
    isLoading: boolean,
    user?: any,
    coinOptionsList: any[]
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

        addCoinWithFullInfo: (state,action: PayloadAction<any>) => {
            const coin  = action.payload
            state.coinsWithFullData = [...state.coinsWithFullData , coin]
        },
        addCoin: (state)=> {
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
        setUser: (state,action:PayloadAction<any>) => {
            state.user = action.payload
        },
        updateUser: (state,action:PayloadAction<{ username?:string,newUsername?:string,password?:string,coins:any[] }>) => {
            return state
        },
        getUserInfo: (state)=> {
           return state
        },
        deleteCoin: (state,action:PayloadAction<string>)=> {
          return state
        },

        setCoins: (state,action:PayloadAction<any[]>) => {
            state.user = {...state.user,coins: action.payload}
        },
        loadCoinOptionsList: (state)=> {
            return state
        },
        setCoinOptionsList: (state,action:PayloadAction<any[]>) => {
            state.coinOptionsList = action.payload
        }
    },
})

export const walletActions = walletSlice.actions
