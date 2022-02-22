import {ICoin} from "../components/interfaces/server-types";
import {convertNumber} from "./convertNumber";

export const calculateCoins = (coins: ICoin[]) => {
    let sumRub = 0
    let sumUsd = 0
    coins.forEach((coinInfo)=> {
        const {myInvestingUsd,myInvestingRub} = coinInfo
        sumRub += myInvestingRub
        sumUsd += myInvestingUsd
    })
    return {sumRub:convertNumber(sumRub),sumUsd:convertNumber(sumUsd)}
}