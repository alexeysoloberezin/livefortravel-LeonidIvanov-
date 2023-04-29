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
    <div v-if="finalPrice.monthlyX3" class="priceBox-item">
      <span>{{ $t('monthsX3') }}</span>
      <span>{{ calcPrice(finalPrice.monthlyX3) }} {{ currency }} <span>/ {{ $t('month') }}</span></span>
    </div>

    <div v-if="finalPrice.yearly" class="priceBox-item">
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
