import {WidgetContainer} from "../widget-container/widgetContainer"

import {useSelector} from "react-redux";
import {otherInvestmentsSelector} from "../../store/selectors/selectors";
import {IOtherInvestments} from "../interfaces/server-types";
import {convertNumber} from "../../tools/convertNumber";

export const OtherInvestmentWidget = (props: { width: number, isLoading: boolean }) => {
    const {width, isLoading} = props
    const otherInvestments = useSelector(otherInvestmentsSelector)
    let allUsd = 0
    let allRub = 0
    return (
        <WidgetContainer width={width} isLoading={isLoading}>
            <ul>
                {otherInvestments.map((investment: IOtherInvestments) => {
                    let usd,rub
                    if (investment.isUsd) {
                        usd = investment.count
                        rub = investment.count *  100
                    } else {
                        usd = investment.count / 100
                        rub = investment.count
                    }
                    allUsd += usd
                    allRub += rub
                    return (
                        <li>
                            <span className={'investment-name'}>{investment.investmentName}</span>
                            <div>
                                <span className={'investment-usd'}>{ convertNumber(usd) } $</span> /
                                <span className={'investment-rub'}>{  convertNumber(rub) } ₽</span>
                            </div>
                        </li>
                    )
                })}
                <li>
                    Общая сумма :  {convertNumber(allUsd)} $ / {convertNumber(allRub)} ₽
                </li>
            </ul>

        </WidgetContainer>
    )
}