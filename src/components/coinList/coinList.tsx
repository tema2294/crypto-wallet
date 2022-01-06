import {CoinCard} from "../card/coin-card";
import React from "react";
import {WidgetContainer} from "../widget-container/widgetContainer";

export const CoinList = (props: {coins: any[], width?: number,isLoading: boolean}) => {
    const {coins,isLoading} = props
    console.log(coins)
    const sortedCoins = [...coins].sort((a,b) => b.myInvestingRub - a.myInvestingRub)
    const isCoinsListEmpty = coins.length === 0 && !isLoading
    const isCoinsListNotEmpty = coins.length !== 0 && !isLoading
    return (
      <WidgetContainer  isLoading={isLoading}>
          {isCoinsListEmpty &&
          <h1>У вас не добавлена ни одна монета.</h1>
          }
          {isCoinsListNotEmpty && <ul className='card-container'>
                    {sortedCoins.map((data) => <CoinCard key={data.name} data={data}/>)}
                </ul>}
        </WidgetContainer>
    )
}