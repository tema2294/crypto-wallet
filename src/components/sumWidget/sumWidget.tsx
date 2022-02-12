import { WidgetContainer } from "../widget-container/widgetContainer"
import {convertNumber} from "../../tools/convertNumber";
import {ICoinList} from "../interfaces/server-types";

export const SumWidget = (props: {coins: ICoinList, width: number,isLoading: boolean}) => {
    const {coins,width,isLoading} = props
    let sumRub = 0
    let sumUsd = 0
    coins.forEach((coinInfo)=> {
        const {myInvestingUsd,myInvestingRub} = coinInfo
        sumRub += Number(myInvestingRub)
        sumUsd += Number(myInvestingUsd)
    })
    const sumRubString = convertNumber(sumRub)
    const sumUsdString = convertNumber(sumUsd)
    return (
        <WidgetContainer width={width}  isLoading={isLoading}>
            <ul>
                <li>
                    Сумма Rub: {sumRubString} ₽
                </li>
                <li>
                    Сумма Usd: {sumUsdString} $
                </li>
            </ul>
        </WidgetContainer>
        )
}