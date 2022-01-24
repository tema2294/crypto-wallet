import {CoinCard} from "../card/coin-card";
import React from "react";
import {WidgetContainer} from "../widget-container/widgetContainer";

export const CoinList = (props: { coins: any[], width?: number, isLoading: boolean, deleteCoin: (coinName: string) => void }) => {
    const {coins, isLoading, deleteCoin} = props
    const isCoinsListEmpty = coins.length === 0 && !isLoading
    const isCoinsListNotEmpty = coins.length !== 0 && !isLoading
    return (
        <WidgetContainer isLoading={isLoading}>
            {isCoinsListEmpty &&
            <h1>У вас не добавлена ни одна монета.</h1>
            }
            {isCoinsListNotEmpty && <div className='card-container'>
                {coins.map((data) => <CoinCard deleteCoin={deleteCoin} key={data.name} data={data}/>)}
            </div>}
        </WidgetContainer>
    )
}