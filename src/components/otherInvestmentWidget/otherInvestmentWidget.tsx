import {WidgetContainer} from "../widget-container/widgetContainer"

import {useDispatch, useSelector} from "react-redux";
import {otherInvestmentsSelector, usdPriceSelector} from "../../store/selectors/selectors";
import {IOtherInvestments} from "../interfaces/server-types";
import {convertNumber} from "../../tools/convertNumber";
import './style.scss'
import {walletActions} from "../../reducers/walletSlice";

export const OtherInvestmentWidget = (props: { width: number, isLoading: boolean }) => {
    const {width, isLoading} = props
    const otherInvestments = useSelector(otherInvestmentsSelector)
    const usdPrice = useSelector(usdPriceSelector)
    const dispatch = useDispatch()
    let allUsd = 0
    let allRub = 0
    const deleteOtherInvestment = (id:string)=> dispatch(walletActions.deleteOtherInvestment(id))
    return (
        <WidgetContainer width={width} isLoading={isLoading}>
            <ul>
                {otherInvestments.map((investment: IOtherInvestments) => {
                    let usd,rub
                    if (investment.isUsd) {
                        usd = investment.count
                        rub = investment.count *  usdPrice
                    } else {
                        usd = investment.count / usdPrice
                        rub = investment.count
                    }
                    allUsd += usd
                    allRub += rub
                    return (
                        <li className={'investment-li'}>
                            <span className={'investment-name'}>{investment.investmentName}</span>
                            <div>
                                <span className={'investment-usd'}>{ convertNumber(usd) } $</span> /
                                <span className={'investment-rub'}>{  convertNumber(rub) } ₽</span>
                            </div>
                            <button onClick={()=>deleteOtherInvestment(investment._id)} className='other_investments-btn-delete'>Х</button>

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