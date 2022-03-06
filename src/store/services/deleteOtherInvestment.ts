import { apiHeroku} from "../../tools/api"

export const deleteOtherInvestment = async (id:string) => {
    const data = await apiHeroku.delete(`user/other-investment/${id}`)
    return data
}