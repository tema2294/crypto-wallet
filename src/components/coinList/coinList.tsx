import {CoinCard} from "../card/coin-card";
import React from "react";
import {WidgetContainer} from "../widget-container/widgetContainer";

export const CoinList = (props: {coins: any[], width?: number,isLoading: boolean,deleteCoin: (coinName:string)=>void}) => {
    const {coins,isLoading,deleteCoin} = props
    const sortedCoins = [...coins].sort((a,b) => b.myInvestingRub - a.myInvestingRub)
    const isCoinsListEmpty = coins.length === 0 && !isLoading
    const isCoinsListNotEmpty = coins.length !== 0 && !isLoading
    return (
      <WidgetContainer  isLoading={isLoading}>
          {isCoinsListEmpty &&
          <h1>У вас не добавлена ни одна монета.</h1>
          }
          {isCoinsListNotEmpty && <ul className='card-container'>
                    {sortedCoins.map((data) => <CoinCard deleteCoin={deleteCoin} key={data.name} data={data}/>)}
                </ul>}
        </WidgetContainer>
    )
}