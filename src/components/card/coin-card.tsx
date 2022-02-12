import './style.scss'
import {convertNumber} from "../../tools/convertNumber";
import {PriceChangeTable} from "../price-change-table/price-change-table";
import { ICoin } from "../interfaces/server-types";

export const CoinCard = (props: { data: ICoin,deleteCoin: (id:string)=>void }) => {
    const {data,deleteCoin} = props
    const { name,usdPrice,image,myInvestingUsd,myInvestingRub,market_data,id } = data
    const { small } = image
    const convertUsdPrice = convertNumber(usdPrice)
    const profitUsd = convertNumber(myInvestingUsd)
    const profitRub = convertNumber(myInvestingRub)

    const deleteHandler = () => {
        deleteCoin(id)
    }
    return (
        <div className="card">
            <div className="card-header d-flex align-items-center">
                <div className='card-log-container'>
                    <img className='coin-image' src={small} />
                </div>
                <div className="card-title">{name}</div>
            </div>
            <div className="card-body">
                <p className="card-text">Price:  { convertUsdPrice } $</p>
                <p className="card-text">Investments:  { profitUsd } $ </p>
                <p className="card-text"> ( {profitRub} rub )</p>
                <PriceChangeTable market_data={market_data} />
                <button onClick={deleteHandler} className='btn-delete'>Х</button>
            </div>
        </div>
    )
}
