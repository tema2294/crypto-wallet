import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    coinsName : any[],
    coinsWithFullData: any[]
    isLoading: boolean
}

const initialState: CounterState = {
    coinsName : [],
    coinsWithFullData: [],
    isLoading: true

}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        addInitialCoinName:(state,action: PayloadAction<any[]>) => {
            state.coinsName = action.payload
        },
        addCoin: (state,action: PayloadAction<string>) => {
            return state
        },
        addCoinWithFullInfo: (state,action: PayloadAction<any>) => {
            const coin  = action.payload
            state.coinsWithFullData = [...state.coinsWithFullData , coin]
        },
        loadAllCoins: (state) => {
            return state
        },
        setLoading: (state,action:PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
})

export const walletActions = walletSlice.actions
