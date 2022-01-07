import './style.scss'

export const PriceChangeTable = (props: { market_data: any }) => {
    const {
        price_change_24h,
        price_change_percentage_24h,
        price_change_percentage_7d,
        price_change_percentage_30d,
    } = props.market_data
    return (
        <table className="table table-price-change">
            <thead>
            <tr>
                <th scope="col">1h</th>
                <th scope="col">24h</th>
                <th scope="col">7d</th>
                <th scope="col">30d</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{price_change_24h.toFixed(1)} %</td>
                <td>{price_change_percentage_24h.toFixed()} %</td>
                <td>{price_change_percentage_7d.toFixed()} %</td>
                <td>{price_change_percentage_30d.toFixed()} %</td>
            </tr>
            </tbody>
        </table>
    )
}