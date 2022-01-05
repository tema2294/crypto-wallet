import {apiCoinGecko} from "../../tools/api";

export const getCoin = async (coinName: string) => {
    const data = await apiCoinGecko.get('coins/' + coinName)
    return data
}