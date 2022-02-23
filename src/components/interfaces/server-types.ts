
export interface IMarketData {
    price_change_24h: number,
    price_change_percentage_24h: number,
    price_change_percentage_7d: number,
    price_change_percentage_30d: number,
    current_price: { usd: number,rub: number }
}
export interface IUserCoinInfo {
    coinName: string,
    count: number,
    updatedCase?: true
}
export type IUserCoinList = IUserCoinInfo[]

export interface ICoin {
    coinName: string,
    count: number
    name:string,
    usdPrice: number,
    image: { thumb:string,small:string,large:string },
    myInvestingUsd: number,
    myInvestingRub:number,
    market_data: IMarketData,
    id:string
    symbol: string
}

export type ICoinList = ICoin[]

export type IRole = string
export type IRoleList = IRole[]

export interface IUser {
    username: string,
    password: string,
    roles: IRoleList
    coins: IUserCoinList
}
interface ICoinOptions {
    id:string
    symbol:string
    name:string
    label:string
}
export interface IModalUpdateCoin {
    isVisible: boolean,
    coin?: ICoin
}
export type ICoinOptionsList = ICoinOptions[]