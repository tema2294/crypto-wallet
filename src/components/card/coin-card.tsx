import './style.scss'
import {convertNumber} from "../../tools/convertNumber";
import {PriceChangeTable} from "../price-change-table/price-change-table";

export const CoinCard = (props: any) => {
    const {data,deleteCoin} = props
    const { name,usdPrice,image,myInvestingUsd,myInvestingRub,market_data,id } = data
    const { small } = image
    const convertUsdPrice = convertNumber(usdPrice,2)
    const profitUsd = convertNumber(myInvestingUsd)
    const profitRub = convertNumber(myInvestingRub)
    const deleteHandler = () => {
        deleteCoin(id)
    }
    return (
        <li className="card">
            <div className="card-header d-flex align-items-center">
                <div className='card-log-container'>
                    <img className='coin-image' src={small} />
                </div>
                <div className="card-title">{name}</div>
            </div>
            <div className="card-body">
                <p className="card-text">Стоимость актива:  { convertUsdPrice } $</p>
                <p className="card-text">Мой доход:  { profitUsd } $ </p>
                <p className="card-text"> ( {profitRub} rub )</p>
                <PriceChangeTable market_data={market_data} />
                <button onClick={deleteHandler} className='button '>delete</button>
            </div>
        </li>
    )
}
