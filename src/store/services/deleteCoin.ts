import { apiHeroku} from "../../tools/api"

export const deleteCoin = async (coinName:string) => {
    const data = await apiHeroku.delete(`user/${coinName}`)
    return data
}