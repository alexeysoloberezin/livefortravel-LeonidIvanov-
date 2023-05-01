export default function calcPriceCurrency(value, currency, currencyValue){
  if (currency === 'USDT' && currencyValue) {
    return value / currencyValue
  }else if (currency === 'RUB' && currencyValue){
    return value * currencyValue
  } else {
    return value
  }
}
