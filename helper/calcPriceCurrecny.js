export default function calcPriceCurrency(value, currency, currencyValue){
  if (currency === 'USDT' && currencyValue) {
    return value / currencyValue
  }else if (currency === 'RUB' && currencyValue){
    console.log(value, currencyValue, currency)

    return value * currencyValue
  } else {
    return value
  }
}
