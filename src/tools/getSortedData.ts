
export const getSortedData = (field:any ,data: any) => {
    return data.sort((coin:any,nextCoin:any) => coin.market_data[field] - nextCoin.market_data[field])
}