import {apiCoinGecko} from "../../tools/api";

export const getCoinList = async () => {

    const data = await apiCoinGecko.get( 'coins/list')
    return data
}