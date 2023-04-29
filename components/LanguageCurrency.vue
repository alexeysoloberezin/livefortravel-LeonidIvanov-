<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon  :color="white ? 'white' : 'gray'">mdi-earth</v-icon>
      </v-btn>
    </template>
    <v-list class="pa-2">
      <h4>Language {{ getLanguage }}</h4>
      <v-list-item-group>
        <v-list-item v-for="locale in $i18n.locales"
                     :key="locale.code"
                     :disabled="getLanguage === locale.code"
                     @click="$i18n.setLocale(locale.code);$moment.locale(locale.code)"
        >
          <button >
            {{ locale.name }}
          </button>
        </v-list-item>
      </v-list-item-group>
      <h4>Currency {{ currency }}</h4>
      <v-list-item-group>
        <v-list-item v-for="currencyItem in currencyList"
                     :key="currencyItem"
                     :disabled="currency === currencyItem"
                     @click="$store.commit('SET_CURRENCY', currencyItem)"
        >
          <button   >
            {{ currencyItem }}
          </button>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "LanguageCurrency",
  props: {
    white: Boolean
  },
  computed:{
    currencyList() {
      return this.$store.state.currencyList
    },

    currency(){
      return this.$store.state.currency
    },
    getLanguage(){
      return this.$i18n.locale
    }
  },
  watch: {
    currency(){
      console.log(this.$store.state.currencyValue, this.currency)
      this.getPrice()
    }
  },
  methods:{
    getPrice(){
      if(this.currency === 'RUB'){
        this.$store.dispatch('fetchCurrencyRubIdr')
      }else if (this.currency === 'USDT'){
        this.$store.dispatch('fetchCurrencyUSDTIDR')
      }else if (this.currency === "IDR"){
        this.$store.commit('SET_CURRENCY_VALUE', 1)
        this.$store.commit('SET_CURRENCY', 'IDR')
      }
    }
  },
  created() {
    // fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    //   .then(response => response.json())
    //   .then(data => {
    //     const usdRate = data.Valute.USD.Value
    //     console.log(`Курс доллара к рублю: ${usdRate}`)
    //   })
    //   .catch(error => console.error(error))


    // this.$axios.get('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=idr')
    //   .then(response => {
    //     const usdtIdrPrice = response.data.tether.idr
    //     console.log(`Текущий курс USDT к IDR: ${usdtIdrPrice}`)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
  }
}
</script>

<style scoped>

</style>
