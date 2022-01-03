import axios from "axios"
import {baseUrl} from "../../const";

export const getCoin = async (coinName: string) => {
    const data = await axios.get(baseUrl + 'coins/' + coinName)
    return data
}