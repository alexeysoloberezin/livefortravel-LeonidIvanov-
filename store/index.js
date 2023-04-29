export const state = () => ({
  user: null,
  currency: 'IDR',
  currencyValue: null,
  currencyList: [
    'IDR', "RUB", "USDT"
  ],
  showContactModal: false,
})


export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, {authUser, claims}) => {
    if (authUser) {
      const {uid, email, emailVerified} = authUser
      state.user = {uid, email, emailVerified}
    }
  },
  REMOVE_USER: state => {
    state.user = null
  },
  SHOW_CONTACT_MODAL: state => {
    state.showContactModal = true
  },
  HIDE_CONTACT_MODAL: state => {
    state.showContactModal = false
  },
  SET_CURRENCY: (state, value) => {
    state.currency = value
  },
  SET_CURRENCY_VALUE: (state, value) => {
    state.currencyValue = value
  },
}


export const actions = {
  fetchCurrencyUSDTIDR({commit}) {
    this.$axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=idr')
      .then(response => {
        // change curse
        const usdtIdrPrice = response.data.tether.idr / 1.004
        commit('SET_CURRENCY', 'USDT')
        commit('SET_CURRENCY_VALUE', +usdtIdrPrice.toFixed(1))
        commit('houses/refreshHouses')
      })
      .catch(error => {
        console.error(error)
      })
  },
  fetchCurrencyRubIdr({commit}){
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,rub,idr')
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.bitcoin.rub / data.bitcoin.idr // вычисляем курс IDR/RUB
        commit('SET_CURRENCY', 'RUB')
        console.log('rub', exchangeRate)
        commit('SET_CURRENCY_VALUE', exchangeRate * 1.004)
        commit('houses/refreshHouses')
      })
      .catch(error => {
        console.error('Error fetching exchange rate:', error)
      })
  }
}
