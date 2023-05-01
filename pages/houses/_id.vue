<template>
  <div>
    <template v-if="loading">
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="50"
        ></v-progress-circular>
      </div>
    </template>
    <template v-else>
      <div v-if="getHouse" class="mainHouse container">
        <div>
          <v-dialog v-model="galleryDialog" class="modalImages" :max-height="800" :max-width="1700">
            <v-carousel hide-delimiters cycle>
              <v-carousel-item v-for="(image, index) in getHouse.info.img" :key="image + index">
                <v-img :src="image" contain :center="true" :aspect-ratio="16/9"/>
              </v-carousel-item>
            </v-carousel>
          </v-dialog>
        </div>
        <div class="d-flex flex-wrap" style="grid-gap: 10px">
          <LocationTag border :name-location="getHouse.info.location"/>
          <hot-tag v-if="getHouse.info.hot"/>
        </div>
        <div class="d-flex mt-3 mt-md-0">
          <h1 class="text--black mb-3">{{ getHouse.info.name }}</h1>

          <v-btn icon @click="makeFavorite(getHouse.info.id)" class="ml-auto">
            <v-icon :key="renderHeart" color="red">
              {{ checkFavorite(getHouse.info.id) ? 'mdi-heart' : 'mdi-heart-outline' }}
            </v-icon>
          </v-btn>
          <v-btn v-if="getHouse.info.video" color="success" outlined @click="openVideoMet">{{ $t('video') }}</v-btn>
        </div>
        <div class="mainHouse-images">
          <div class="mainHouse-images-left">
            <div><img :src="getHouse.info.img[0]" @click.prevent="openGallery()" alt=""></div>
          </div>
          <div class="mainHouse-images-right">
            <div v-for="(img, index) in getHouse.info.img.slice(1, 5)" @click.prevent="openGallery()"
                 :key="img + index"><img
              :src="img" alt=""></div>
          </div>
        </div>


        <div class="mainHouse-stick">
          <div class="mainHouse-left">
            <div class="mainHouse-block">
              <h5>{{ $t('aboutHouse') }}</h5>
              <div v-if="getHouse.info.description">
                <div v-html="getHouse.info.description"></div>
              </div>
            </div>

            <div class="mainHouse-block">
              <h5>{{ $t('advantages') }}</h5>
              <div class="mainHouse-block-wrp">
                <div class="blockTab">
                  <div>
                    <RoomsIcon/>
                  </div>
                  <div>
                    <div class="blockTab-title">{{ $tc('rooms', getHouse.info.rooms) }}</div>
                  </div>
                </div>
                <!--                <div class="blockTab">-->
                <!--                  <div>-->
                <!--                    <BedIcon/>-->
                <!--                  </div>-->
                <!--                  <div>-->
                <!--                    <div class="blockTab-title">{{ getHouse.info.bethRooms }} Bedrooms</div>-->
                <!--                  </div>-->
                <!--                </div>-->
                <!--                <div class="blockTab">-->
                <!--                  <div>-->
                <!--                    <BedIcon/>-->
                <!--                  </div>-->
                <!--                  <div>-->
                <!--                    <div class="blockTab-title">{{ getHouse.info.bethRooms }} Bed</div>-->
                <!--                  </div>-->
                <!--                </div>-->
                <div class="blockTab">
                  <div>
                    <BethICon/>
                  </div>
                  <div>
                    <div class="blockTab-title">{{ $tc('rooms', getHouse.info.bethRooms) }}</div>
                  </div>
                </div>
                <div v-if="getHouse.info.garden" class="blockTab">
                  <div>
                    <TreeIcon/>
                  </div>
                  <div>
                    <div class="blockTab-title">{{ $t('garden') }}</div>
                  </div>
                </div>
                <div v-if="getHouse.info.tv" class="blockTab">
                  <div>
                    <TvIcon/>
                  </div>
                  <div>
                    <div class="blockTab-title">{{ $t('tv') }}</div>
                  </div>
                </div>
              </div>

            </div>
            <div class="map" v-if="getHouse.info.locationPoint">
              <h5 class="py-5 mt-2">Location</h5>
              <iframe :src="getHouse.info.locationPoint" width="600" height="450" style="border:0;" allowfullscreen=""
                      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div class="mainHouse-stick-right glass">
            <div class="mainHouse-stick-right-block">
              <div class="d-flex flex-wrap align-center">
                <h5 class="pt-0">
                  {{ checkStatus(getHouse.customerRentPrice[getHouse.customerRentPrice.length - 1].nextPayment) }}
                </h5>
                <h6
                  v-if="checkStatus(getHouse.customerRentPrice[getHouse.customerRentPrice.length - 1].nextPayment) !== 'Available'"
                  class="pl-2 pt-1" style="opacity: 0.8;">( {{
                    $moment(getHouse.customerRentPrice[getHouse.customerRentPrice.length - 1].nextPayment, 'MM/DD/YYYY').add(1, 'day').format('LL')
                  }} )
                </h6>
              </div>
              <div>
                <div class="prices">
                  <h4 class="pb-1 pt-4 h4">{{ $t('price') }}</h4>
                  <PriceBox :price="getHouse.info.price"/>
                </div>
                <div class="dates my-4 ">
                  <h4 class="mb-4 h4">{{ $t('pricePeriod') }}</h4>
                  <div>
                    <div class="dates-price mb-2" v-if="selectedNights">Price
                      <b>{{ makePrice(calcPriceMethod(calculatePrice(getHouse.info.price))) }}</b> for
                      <b>{{ selectedNights }} nights</b></div>
                    <div  v-if="selectedNights" class="my-3">{{ $t('priceWarning') }}</div>
                  </div>
                  <input style="position:absolute;visibility: hidden" id="input-id" type="text"/>
                </div>
              </div>

              <v-btn width="100%" color="success" class="mt-4" @click="$store.commit('SHOW_CONTACT_MODAL')">
                {{ $t('contact') }}
              </v-btn>
              <v-menu offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on }">
                  <v-btn color="success" class="mt-2" outlined width="100%" v-on="on">
                    Change currency
                  </v-btn>
                </template>
                <v-list class="pa-2">
                  <h4>Currency</h4>
                  <v-list-item-group>
                    <v-list-item v-for="currencyItem in currencyList"
                                 :key="currencyItem"
                                 :disabled="currency === currencyItem"
                                 @click="getPrice( currencyItem)"
                    >
                      <button>
                        {{ currencyItem }}
                      </button>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div class="modal" :class="{active: openVideo}" @click="toggleModal">
      <video
        v-if="openVideo"
        autoplay
        :src="getHouse.info.video"
        controls></video>
    </div>
  </div>
</template>

<script>
import HotelDatepicker from "hotel-datepicker"
import "hotel-datepicker/dist/css/hotel-datepicker.css"
// import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css'
import RoomsIcon from "~/components/icon/Rooms"
import BethICon from "~/components/icon/Beth"
import TvIcon from "~/components/icon/TvIcon"
import TreeIcon from "~/components/icon/TreeIcon"
import PriceBox from "~/components/price/Price"
import LocationTag from "~/components/tags/LocationTag"
import HotTag from "~/components/tags/HotTag"
import {makePrice} from "~/helper/makeMillion"
import getDatesInRange from "~/helper/getDatesInRange"
import calcPriceCurrency from "~/helper/calcPriceCurrecny"
import addFavoriteHouse, {checkFavorite} from "~/helper/favoriteHouse"

export default {
  name: "HouseZoom",
  components: {HotTag, LocationTag, PriceBox, TreeIcon, TvIcon, BethICon, RoomsIcon},
  data() {
    return {
      renderHeart: 0,
      selectedDate: null,
      selectedNights: null,
      datepicker: null,
      calcPrice: null,
      dateObj: null,
      openVideo: false,

      galleryDialog: false,
      showModal: false,
      range: [],
    }
  },
  mounted() {
    this.$store.dispatch('houses/fetchHouses').then(() => {
      setTimeout(() => {
        const rent = this.getHouse.customerRentPrice[this.getHouse.customerRentPrice.length - 1]
        this.initDatePicker(rent.startRent, rent.nextPayment)
      }, 1000)
    })
  },
  methods: {
    toggleModal(e){
      if(e.target.classList.contains('modal')){
        this.openVideo = false
      }
    },
    openVideoMet() {
      this.openVideo = !this.openVideo
    },
    checkFavorite(id) {
      return checkFavorite(id)
    },
    makeFavorite(id) {
      this.renderHeart = this.renderHeart + 1
      if (id) {
        addFavoriteHouse(id, this.$store)
      }
    },
    makePrice(price) {
      return makePrice(price) + ' ' + this.$store.state.currency
    },
    calcPriceMethod(price) {
      return calcPriceCurrency(price, this.$store.state.currency, this.$store.state.currencyValue)
    },
    getPrice(currencyItem) {
      if (currencyItem === 'USDT') {
        this.$store.dispatch('fetchCurrencyUSDTIDR')
      } else if (currencyItem === "IDR") {
        this.$store.commit('SET_CURRENCY_VALUE', 1)
        this.$store.commit('SET_CURRENCY', 'IDR')
      } else if (currencyItem === 'RUB') {
        this.$store.dispatch('fetchCurrencyRubIdr')
      }
    },
    calculatePrice(price) {
      if (!this.dateObj?.days && !this.dateObj?.months) return ''

      let res = 0

      if (this.dateObj?.months >= 3) {
        if (price?.monthlyX3) {
          res += price.monthlyX3 * this.dateObj?.months
        }
      }

      if (this.dateObj?.months === 2) {
        if (price?.monthlyX2) {
          res += price.monthlyX2 * this.dateObj?.months
        } else {
          res += price.monthlyX1 * this.dateObj?.months
        }
      }

      if (this.dateObj?.months >= 1 && this.dateObj?.months < 2) {
        if (price?.monthlyX1) {
          res += price.monthlyX1 * this.dateObj?.months
        }
      }

      if (this.dateObj?.days >= 7) {
        if (price?.week) {
          let count = 0
          for (let i = 1; i <= this.dateObj?.days; i++) {
            if (i % 7 === 0) {
              count++
            }
          }
          const daysRest = this.dateObj?.days - count * 7
          res += price.week * count + daysRest * price.daily
        } else {
          res += price.daily * this.dateObj?.days
        }
      } else {
        res += price.daily * this.dateObj?.days
      }

      return res
    },
    getMonthAndDaysDifference(dateRangeString) {
      const [start, end] = dateRangeString.split(' - ')
      const startDate = this.$moment(start, 'MM/DD/YYYY')
      const endDate = this.$moment(end, 'MM/DD/YYYY')

      const diff = endDate.diff(startDate, 'months', true)
      const monthsNames = []

      // узнаем количество дней в месяце
      for (let i = 0; i <= diff; i++) {
        monthsNames.push(startDate.clone().add(i, 'months').daysInMonth())
      }
      monthsNames.pop()
      let different = 0

      monthsNames.forEach(item => {
        if (item === 31) return different++
        if (item === 29) return different--
        if (item === 28) {
          different = different - 2
        }
      })

      const days = endDate.diff(startDate, 'days')
      const months = Math.floor(days / 30)
      const remainingDays = days % 30

      return {months, days: remainingDays - different, monthsNames, different}
    },

    initDatePicker(disableDateStart, disableDateNext) {
      const th = this
      const input = document.getElementById('input-id')

      const disabledDates = getDatesInRange(disableDateStart, disableDateNext, th.$moment)

      this.datepicker = new HotelDatepicker(input, {
        onSelectRange() {
          th.selectedDate = this.getValue()
          th.selectedNights = this.getNights()

          th.dateObj = th.getMonthAndDaysDifference(th.selectedDate)
        },
        disabledDates,
        inline: true,
        format: 'MM/DD/YYYY',
        minNights: 30,
      })
    },
    clickRemoveDate() {
      this.datepicker.clear()
      this.selectedDate = null
    },
    openGallery(index) {
      this.galleryDialog = true
    },
    checkStatus(nextPayment) {
      const date = this.$moment(nextPayment, 'MM/DD/YYYY')

      if (date.isBefore(this.$moment())) {
        return this.$t('available')
      } else {
        return `${this.$t('released')}: ${date.add(1, 'day').fromNow()}`
      }
    }
  },
  computed: {
    currencyList() {
      return this.$store.state.currencyList
    },
    currency() {
      return this.$store.state.currency
    },
    currencyValue() {
      return this.$store.state.currencyValue
    },
    loading() {
      return this.$store.state.houses.loading
    },
    getId() {
      return this.$route.params.id
    },
    getHouse() {
      if (this.$store.state.houses.houses.length > 0) {
        return this.$store.state.houses.houses.find(el => +el?.info?.id === +this?.getId)
      } else {
        return null
      }
    }
  },
}
</script>

<style scoped lang="scss">
.mainHouse-block-wrp {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  grid-gap: 10px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .blockTab{
      max-width: initial;
      min-width: initial;
    }
  }
}

.dates-price {
  font-size: 18px;
  font-weight: 500;

  b {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
}

.mainHouse {
  &-block {
    padding: 30px 0 30px 0;
    border-bottom: 1px solid rgba(199, 199, 199, 0.4);

    h5 {
      margin-bottom: 10px;
    }

    &:first-child {
      padding-top: 0;
    }
  }

  .map {
    &, iframe {
      width: 100%;
      aspect-ratio: 16/9;
    }
  }

  &-stick {
    display: flex;
    position: relative;
    align-items: start;
    margin-top: 30px;
    grid-gap: 40px;
    align-self: start;
    width: 100%;
    justify-content: space-between;

    & > div:first-child {
      flex-grow: 1;
    }

    &-right {
      position: sticky;
      top: 10vh;
      right: 0;
      width: 600px;
      padding: 20px;
    }

    &-left {
      width: 100%;
      flex-grow: 1;
    }
  }

  &-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &-left {
      height: 100%;
      max-height: 675px;

      div {
        height: 100%;
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

    }

    &-allPhotos {
      position: absolute;
      bottom: 15px;
      right: 15px;
      z-index: 2;
    }

    &-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
      height: 100%;

      & > div {
        height: 100%;
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        img {
          height: 100%;
          max-height: 330px;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

@media (max-width: 1260px) {
  .mainHouse-images{
    grid-template-columns: 1fr;
  }
  .mainHouse-stick{
    flex-direction: column;
    &-right{
      width: 100%;
    }
  }
}
@media (max-width: 500px) {
  .mainHouse-stick{
    &-right{
      padding: 10px;
    }
  }


}


</style>
