export function makePrice (price, withIdr) {
  const options = { style: 'decimal', useGrouping: true, minimumFractionDigits: 0, maximumFractionDigits: 0, minimumIntegerDigits: 1, currency: 'RUB', currencyDisplay: 'symbol' }
  let formattedPrice = price.toLocaleString('en-US', options) // '$20,000,000' for US locale

  if(withIdr){
    formattedPrice = +formattedPrice.toFixed(1)
  }

  return formattedPrice
}
