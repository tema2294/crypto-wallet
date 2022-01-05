import { apiHeroku } from "../../tools/api";

export const authorizeUser = async (props: {username: string,password: string}) => {

    const data = await apiHeroku.post( 'auth/login',props)
    return data
}