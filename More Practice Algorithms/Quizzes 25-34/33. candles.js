// 33. When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

// You have candlesNumber candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?

function candles(candlesNumber, makeNew) {
    let candlesLit = candlesNumber;
    for (let i = 0; i < candlesLit; i++){
        if(i % makeNew === 0){
            candlesLit += 1;
        }
    }
    return candlesLit - 1;
}
