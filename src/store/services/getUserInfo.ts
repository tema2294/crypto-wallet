import { apiHeroku} from "../../tools/api"

export const getUserInfo = async () => {
    const data = await apiHeroku.get('user/user-info')
    return data
}