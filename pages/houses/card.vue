<template>
  <div class="" :class="`cardHouse glass ${vertical ? 'houseHot' : ''}`">
    <div class="cardHouse-img">
      <img :src="house.info.img[0] || 'housePlaceholder.jpg'" alt="">
      <div class="cardHouse-favorite">
        <v-btn icon @click.prevent.stop="makeFavorite(house.info.id)">
          <v-icon :key="renderHeart" color="red">{{
              checkFavorite(house.info.id) ? 'mdi-heart' : 'mdi-heart-outline'
            }}
          </v-icon>
        </v-btn>
      </div>
    </div>

    <div class="cardHouse-leftTopTags">
      <router-link to="/mapPage" >
        <LocationTag :mini-img="house.info.locationMiniImg" :name-location="house.info.location"/>
      </router-link>
      <AvailbleTag :value="house.customerRentPrice[house.customerRentPrice.length - 1].nextPayment"/>
      <hot-tag v-if="house.info.hot"/>
    </div>

    <div class="cardHouse-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title>
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
      </svg>
    </div>
    <div class="cardHouse-info">
<!--      <div class="cardHouse-price text&#45;&#45;black" :key="refreshPrice"><span class="h4">{{-->
<!--          calcPriceMethod(house.info.price.monthlyX1)-->
<!--        }} {{ currency }} </span><span>{{ $t('perMonth') }}</span></div>-->
      <div class="cardHouse-name mb-2">{{ house.info.name }}</div>
      <PriceBox small :price="house.info.price"/>
      <div class="cardHouse-list">
        <div class="cardHouse-item">
          <BedIcon/>
          <span class="firstLetterBig">{{ $tc('rooms', house.info.rooms) }}</span>
        </div>
        <div class="cardHouse-item">
          <BethICon/>
          <span class="firstLetterBig">{{ $tc('bathrooms', house.info.bethRooms) }}
</span>
        </div>
        <div v-if="house.info.distanceToTheBeach" class="cardHouse-item tag">{{ $t('distanceBeach') }}:
          {{ house.info.distanceToTheBeach }}
        </div>
        <div v-if="house.info.kitchen" class="cardHouse-item tag">{{ $t('kitchen') }}</div>
        <div v-if="house.info.tv" class="cardHouse-item tag">{{ $t('tv') }}</div>
        <div v-if="house.info.fridge" class="cardHouse-item tag">{{ $t('fridge') }}</div>
        <div class="cardHouse-item tag">{{ $t('cleaning') }}</div>
        <div v-if="house.info.ac" class="cardHouse-item tag">{{ $t('ac') }}: {{ house.info.ac }}</div>
        <div v-if="house.info.parking" class="cardHouse-item tag">{{ $t('parking') }}</div>
        <div v-if="house.info.garden" class="cardHouse-item tag">{{ $t('garden') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BedIcon from "~/components/icon/BedIcon"
import LocationTag from "~/components/tags/LocationTag"
import HotTag from "~/components/tags/HotTag"
import BethICon from "~/components/icon/Beth"
import AvailbleTag from "~/components/tags/AvailbleTag"
import addFavoriteHouse, {checkFavorite} from "~/helper/favoriteHouse"
import calcPriceCurrency from "~/helper/calcPriceCurrecny"
import {makePrice} from "~/helper/makeMillion"
import PriceBox from "~/components/price/Price"

export default {
  name: "cardHouse",
  components: {PriceBox, AvailbleTag, BethICon, HotTag, LocationTag, BedIcon},
  props: {
    img: String,
    houseHot: Boolean,
    vertical: Boolean,
    house: Object,
    refreshAfterFavorite: Boolean
  },
  data() {
    return {
      renderHeart: 0,
      refreshPrice: 0
    }
  },
  watch: {
    currencyValue() {
      console.log('1231231', this.currencyValue)
    }
  },
  computed: {
    hotPrice() {
      if (this.house.info.hotPrice) {
        return this.house.info.price[this.house.info.hotPrice]
      }

      return null
    },
    currency() {
      return this.$store.state.currency
    },
    currencyValue() {
      return this.$store.state.currencyValue
    },
  },
  methods: {
    checkFavorite(id) {
      return checkFavorite(id)
    },
    calcPriceMethod(price) {
      return makePrice(calcPriceCurrency(price, this.$store.state.currency, this.$store.state.currencyValue))
    },
    makeFavorite(id) {
      this.renderHeart = this.renderHeart + 1
      if (id) {
        addFavoriteHouse(id, this.$store)
        if (this.refreshAfterFavorite) {
          this.$store.commit('houses/refreshHouses')
        }
      }
    },
  }
}
</script>

<style lang="scss">

.cardHouse-leftTopTags {
  position: absolute;
  top: 9px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 7px;
  align-self: center;
  left: 6px;
  z-index: 2;

  & > h4 {


  }
}


@keyframes rotate {
  50% {
    transform: translateX(100%);
  }
}
.cardHouse {
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;

  &.houseHot {
    display: flex;
    flex-direction: row;
    height: 100%;

    .cardHouse-img {
      width: 65%;
      //margin: 6px;
      flex-shrink: 0;
      border-radius: 8px 0 0 8px;
    }

    .cardHouse-btn {
      display: none;
    }
    .cardHouse-info{
      position: relative;
      z-index: 5;
    }

    .cardHouse-price {
      padding-top: 25px;
    }
  }

  &-name {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Comfortaa', sans-serif;
  }

  svg {
    width: 21px;
    height: 21px;
    fill: #E96479;
    pointer-events: none;
  }

  &, * {
    text-decoration: none;
    color: #4b4b4b;
  }

  &-info {
    padding: 20px;
  }

  cursor: pointer;

  &-price {
    //color: #4b4b4b;
    margin-top: -15px;
  }

  &-list {
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
    grid-gap: 8px;
  }

  &-item {
    display: flex;
    grid-gap: 4px;
    background: rgba(85, 199, 255, 0.08);
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 14px;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
    width: 100%;
    object-fit: cover;
    display: block;
  }

  &-img {
    position: relative;
  }

  &-favorite {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 255, 255, 0.4);
    padding: 3px 2px 0 1px;
    border-radius: 50%;
  }

  h4 {

  }

  &-btn {
    width: 50px;
    height: 50px;
    background: #59CE8F;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;
    flex-shrink: 0;
    position: relative;
    margin-left: auto;
    margin-right: 30px;
    z-index: 2;
    box-shadow: 0 0 3px 3px rgba(89, 206, 143, 0.26);

    svg {
      fill: #fff;
      width: 32px;
      height: 32px;
    }
  }
}
</style>
