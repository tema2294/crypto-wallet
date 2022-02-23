import {apiHeroku} from "../../tools/api"

export const updateCoin = async (data: { count:number, coinId: string }) => {
   const response = await apiHeroku.post('user/update-coin', data)
    return response

}