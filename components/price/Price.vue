<template>
  <div :class="`priceBox ${small ? 'small' : ''}`" :key="rerender">
    <div v-if="finalPrice.monthlyX1" class="priceBox-item">
      <span>{{ $t('month') }}</span>
      <span>{{ calcPrice(finalPrice.monthlyX1) }} {{ currency }} <span>/ {{ $t('month') }}</span></span>
    </div>
    <div v-if="finalPrice.monthlyX2" class="priceBox-item">
      <span>{{ $t('monthsX2') }}</span>
      <span>{{ calcPrice(finalPrice.monthlyX2) }} {{ currency }} <span>/ {{ $t('month') }}</span></span>
    </div>
    <div v-if="finalPrice.monthlyX3" class="priceBox-item ">
      <span>
        {{ $t('monthsX3') }}
      </span>
      <span class="d-flex align-center">{{ calcPrice(finalPrice.monthlyX3) }} {{ currency }} <span>/ {{ $t('month') }}</span>             <svg class="ml-1" style="fill: #ff3a65;width: 18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>fire</title><path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z" /></svg>
</span>
    </div>

    <div v-if="finalPrice.yearly && !small" class="priceBox-item">
      <span>{{ $t('yearly') }}</span>
      <span>{{ calcPrice(finalPrice.yearly) }} {{ currency }}</span>
    </div>

    <template v-if="!small">
      <div class="hiddenBtn" @click="hide = !hide">
        {{ $t('hiddenPrice') }}
      </div>
      <div class="pl-3" v-if="!hide">
        <div v-if="finalPrice.weekX2" class="priceBox-item small">
          <span>{{ $t('weeksX2') }}</span>
          <span>{{ calcPrice(finalPrice.weekX2) }} {{ currency }}</span>
        </div>
        <div v-if="finalPrice.week" class="priceBox-item small">
          <span>{{ $t('weeksX1') }}</span>
          <span>{{ calcPrice(finalPrice.week) }} {{ currency }}</span>
        </div>
        <div v-if="finalPrice.daily" class="priceBox-item small">
          <span>{{ $t('daily') }}</span>
          <span>{{ calcPrice(finalPrice.daily) }} {{ currency }}</span>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import {makePrice} from "~/helper/makeMillion"
import calcPriceCurrency from "~/helper/calcPriceCurrecny"

export default {
  name: "PriceBox",
  props: {
    price: Object,
    small: Boolean,
  },
  data() {
    return {
      rerender: 0,
      finalPrice: [],
      hide: true
    }
  },
  watch: {
    currency(){
      this.rerender++
    },
    currencyValue(){
      console.log('curency changed')
      this.changePrice()
    }
  },
  computed: {
    currencyValue(){
      return this.$store.state.currencyValue
    },
    currency(){
      return this.$store.state.currency
    },
  },
  created() {
    this.changePrice()
    setTimeout(() => {
      this.changePrice()
    }, 2000)
  },
  methods: {
    changePrice() {
      this.finalPrice = JSON.parse(JSON.stringify(this.price))
      for (const key in this.price) {
        this.finalPrice[key] = calcPriceCurrency(this.price[key], this.currency, this.currencyValue)
      }
    },
    calcPrice(price) {
      return makePrice(price)
    }
  }
}
</script>

<style scoped lang="scss">
.hiddenBtn {
  cursor: pointer;
  text-decoration: underline;
  margin: 5px 0;
}

.priceBox {
  &.small{
    .priceBox-item{
      grid-template-columns: 100px 1fr;
      font-size: 16px;
      &.small {
        font-size: 14px;
      }
      &> span > span {
        font-size: 13px;
      }
    }
  }
  &-item {
    display: grid;
    grid-template-columns: 120px 1fr;
    border-bottom: 1px solid rgba(220, 220, 220, 0.3);
    padding: 8px 0;
    font-size: 19px;
    font-weight: 500;
    color: #4d4d4d;

    span:first-child {
      font-weight: 600;
    }

    & > span > span {
      font-size: 16px;
      color: rgba(133, 133, 133, 0.75);
    }

    &.small {
      font-size: 17px;
      color: rgba(133, 133, 133, 0.75);
    }
  }
}
</style>
