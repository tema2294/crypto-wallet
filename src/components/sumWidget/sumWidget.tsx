import { WidgetContainer } from "../widget-container/widgetContainer"
import {ICoinList} from "../interfaces/server-types";
import {useEffect, useState} from "react";
import {calculateCoins} from "../../tools/calculate-coins";

export const SumWidget = (props: {coins: ICoinList, width: number,isLoading: boolean}) => {
    const {coins,width,isLoading} = props
    const [sumRub,setSumRub] = useState<string | undefined>()
    const [sumUsd,setSumUsd] = useState<string | undefined>()
    useEffect(()=>{
        const {sumRub,sumUsd} = calculateCoins(coins)
        setSumRub(sumRub)
        setSumUsd(sumUsd)
    },[coins])

    return (
        <WidgetContainer width={width}  isLoading={isLoading}>
            <ul>
                <li>
                    Сумма Rub: {sumRub || 0} ₽
                </li>
                <li>
                    Сумма Usd: {sumUsd || 0} $
                </li>
            </ul>
        </WidgetContainer>
        )
}