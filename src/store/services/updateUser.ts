import { apiHeroku } from "../../tools/api";

export const updateUser = async (props: {username?: string,newUsername?:string,password?: string,coins?:any[]}) => {
    const data = await apiHeroku.post( 'user/update',props)
    return data
}