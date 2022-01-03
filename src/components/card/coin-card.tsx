import './style.scss'
import {convertNumber} from "../../tools/convertNumber";

export const CoinCard = (props: any) => {
    const {data} = props
    const { name,usdPrice,image,myInvestingUsd,myInvestingRub } = data
    const { small } = image
    const convertUsdPrice = convertNumber(usdPrice)
    const profitUsd = convertNumber(myInvestingUsd)
    const profitRub = convertNumber(myInvestingRub)
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
                <p className="card-text"> ( {profitRub} rub)</p>

                <button className="btn btn-primary ">Удалить</button>
            </div>
        </li>
    )
}