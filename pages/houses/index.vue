<template>
  <div>
    <div class="white-bg housesSearch-wrp">
      <div class="housesSearch-wrp">
        <h3>{{ $t('pricePeriod') }}</h3>
        <div class="housesSearch">
          <div class="housesSearch-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>magnify</title>
              <path
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
            </svg>
          </div>

          <div class="inputBox">
            <input
              v-model="search"
              type="text"
              @input="checkSearchWords"
              :placeholder="$t('search')"
            >
            <input
              v-model="searchHelp"
              type="text"
            >
          </div>
        </div>
      </div>
      <div class="d-flex align-center justify-end mx-auto mt-4 cursor-pointer " style="max-width: 1000px;"
           @click="openFilter = !openFilter">
        <div class="mainBtn">
          <svg class="mr-2" width="23" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>
            filter-menu-outline</title>
            <path
              d="M12 18.88A1 1 0 0 1 11.71 19.71A1 1 0 0 1 10.3 19.71L6.3 15.71A1 1 0 0 1 6 14.87V9.75L1.21 3.62A1 1 0 0 1 1.38 2.22A1 1 0 0 1 2 2H16A1 1 0 0 1 16.62 2.22A1 1 0 0 1 16.79 3.62L12 9.75V18.88M4 4L8 9.06V14.58L10 16.58V9.05L14 4M13 16L18 21L23 16Z"/>
          </svg>
          {{ $t('filters') }}
        </div>
      </div>
      <div v-show="openFilter" class="housesFilters">
        <div class="dates">
          <label>{{ $t('dates') }}</label>
          <input id="input-id" type="text"/>
          <div v-if="selectedDate" class="dates-cross" @click="clickRemoveDate"><CrossIcon /></div>
        </div>
        <div class="rooms">
          <label>{{ $t('rooms') }}</label>
          <v-select
            :items="['-', 1, 2,3,4]"
            v-model="roomsFilter"
          ></v-select>
        </div>
        <div class="chips">
          <label>{{ $t('tabs') }}</label>
          {{ chipsValue }}
          <v-select
            v-model="chipsValue"
            :items="chipsItems"
            chips
            multiple
          ></v-select>
        </div>

        <div class="price">
          <label>{{ $t('pricePerMonth') }}</label>
          <v-range-slider
            v-model="range"
            :max="40000000"
            :min="0"
            :step="1000000"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                :model-value="range[0]"
                :value="range[0]"
                hide-details
                single-line
                prefix="IDR"
                number
                type="number"
                variant="outlined"
                density="compact"
                style="width: 130px"
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                :model-value="range[1]"
                :value="range[1]"
                hide-details
                single-line
                prefix="IDR"
                number
                type="number"
                variant="outlined"
                style="width: 130px"
                density="compact"
                @change="$set(range, 1, $event)"
              ></v-text-field>
            </template>
          </v-range-slider>
        </div>
      </div>
    </div>

    <div class="houses mt-8">
      <!--      <div>-->
      <!--        <div class="d-flex align-center flex-wrap">-->
      <!--          <v-tooltip-->
      <!--            v-for="item in btns"-->
      <!--            :key="item.icon"-->
      <!--            top-->
      <!--          >-->
      <!--            <template v-slot:activator="{ on, attrs }">-->
      <!--              <v-card-->
      <!--                v-bind="attrs"-->
      <!--                class="icons-card mb-3 me-3"-->
      <!--                v-on="on"-->
      <!--                @click="clickTooltip(item.key)"-->
      <!--              >-->
      <!--                <v-card-text class="py-2 px-2">-->
      <!--                  <v-icon size="25">-->
      <!--                    {{ item.icon }}-->
      <!--                  </v-icon>-->
      <!--                </v-card-text>-->
      <!--              </v-card>-->
      <!--            </template>-->
      <!--            <span>{{ item.name }}</span>-->
      <!--          </v-tooltip>-->
      <!--        </div>-->
      <!--      </div>-->
      <template v-if="loading">
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            size="50"
          ></v-progress-circular>
        </div>
      </template>
      <div v-else>
        <div v-if="houses.length > 0" class="grid-cards" :style="{gridTemplateColumns: this.grid}">

          <router-link :to="`${$route.path}/` + house.info.id" v-for="(house, index) in houses" :key="index"
                       v-show="!isDateInRange(house.customerRentPrice[house.customerRentPrice.length - 1].nextPayment) || !selectedDate">
            <CardHouse :house="house" :vertical="index === 0"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelDatepicker from "hotel-datepicker"
import "hotel-datepicker/dist/css/hotel-datepicker.css"
// import 'vue-hotel-datepicker/dist/vueHotelDatepicker.css'
import {mdiViewGridOutline, mdiGrid, mdiGridOff} from '@mdi/js'
import CardHouse from "~/pages/houses/card"
import CrossIcon from "~/components/icon/Cross"

export default {
  name: "HousesPage",
  components: {CrossIcon, CardHouse},

  data() {
    return {
      refreshHouses: 0,
      search: '',
      searchHelp: '',
      autoCompleteWords: ['Jimbaran', 'Center Bukit', 'Bukit', 'jimbaran', 'center bukit', 'bukit', '2BD'],

      selectedDate: null,
      datepicker: null,

      roomsFilter: '-',
      openFilter: false,
      value: 0,
      grid: '1fr 1fr 1fr 1fr',
      date: null,
      range: [0, 40000000],
      chipsItems: ['tv', 'parking', 'kitchen', 'fridge', 'garden'],
      chipsValue: [],
      btns: [
        {icon: mdiViewGridOutline, name: 'Grid x2', key: '1fr 1fr'},
        {icon: mdiGrid, name: 'Grid x3', key: '1fr 1fr 1fr'},
        {icon: mdiGridOff, name: 'Inline', key: '1fr'},
      ],
      pickerDate: new Date(),
      locale: 'ru',
    }
  },

  methods: {
    clickRemoveDate(){
      this.datepicker.clear()
      this.selectedDate = null
    },
    checkSearchWords() {
      this.searchHelp = ''
      if (!this.search) return null

      this.autoCompleteWords.forEach(item => {
        if (item.startsWith(this.search)) {
          this.searchHelp = item
        }
      })
    },
    isDateInRange(date) {
      if (!this.selectedDate) return null

      // Разбиваем строку с промежутком дат на две даты
      const [startDateStr, endDateStr] = this.selectedDate.split(' - ')
      const startDate = new Date(startDateStr)
      const endDate = new Date(endDateStr)

      // Преобразуем строку с датой в объект Date
      const checkDate = new Date(date)

      console.log(startDateStr, endDateStr, date, checkDate >= startDate && checkDate <= endDate)

      // Сравниваем даты
      return checkDate >= startDate && checkDate <= endDate
    },
  },
  mounted() {
    const th = this

    this.$store.dispatch('houses/fetchHouses')

    const input = document.getElementById('input-id')
    this.datepicker = new HotelDatepicker(input, {
      onSelectRange() {
        th.selectedDate = this.getValue()
        },
      format: 'MM/DD/YYYY',
      minNights: 30,
    })
  },
  computed: {
    currency(){
      return this.$store.state.currency
    },
    currencyValue(){
      return this.$store.state.currencyValue
    },
    loading() {
      return this.$store.state.houses.loading
    },

    houses() {
      const houses = [...this.$store.state.houses.houses]
      let res = houses.sort((a, b) => {
        if (a.info?.hot && !b.info?.hot) {
          return -1 // перемещаем a в начало массива
        } else if (!a.info?.hot && b.info?.hot) {
          return 1 // перемещаем b в начало массива
        } else {
          return 0 // сохраняем исходный порядок элементов
        }
      })

      if (res.length < 1) return res

      const searchTerm = this.search.toLowerCase()

      res = res.filter(house =>  house.info.price.monthlyX1 <= this.range[1] && house.info.price.monthlyX1 >= this.range[0])

      if(this.roomsFilter !== '-'){
        res = res.filter(house =>  house.info.rooms === this.roomsFilter)
      }
      if(this.chipsValue.length > 0){
        res = res.filter(house => {
          return this.chipsValue.some(chip => house[chip])
        })
      }

      return res.filter(house => {
        const name = house.info.name.toLowerCase()
        const location = house.info.location.toLowerCase()

        return name.includes(searchTerm)
          || location.includes(searchTerm)
      })
    },
  }
}
</script>

<style scoped lang="scss">


.icons-card {
  cursor: pointer;
}

.housesFilters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1000px;
  margin: 30px auto;
  grid-gap: 16px;

  .dates {
    position: relative;
    //width: 100%;
    .dates-cross{
      position: absolute;
      bottom: 10px;
      right: 15px;
      cursor: pointer;
      z-index: 15;
    }
    & > input {
      height: 50px;
      width: 100%;
      border: 1px solid #eaeaea;
      border-radius: 50px;
      padding-left: 20px;
    }
  }

  .price {
    grid-column: 1/4;
  }

  .rooms {
    //width: calc(50% - 8px);
  }
}

.housesSearch {
  background: rgba(247, 247, 255, 0.56);
  border-radius: 50px;
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-top: 10px;

  &-wrp {
    max-width: 1000px;
    margin: 50px auto 0;

    h3 {
      margin-bottom: 10px;

      display: block;
    }
  }

  &-icon {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid rgba(168, 168, 168, 0.46);
  }

  svg {
    width: 23px;
    opacity: 0.5;
    margin-left: 2px;
    object-fit: contain;
  }

  .inputBox {
    position: relative;

    input:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }

    input:nth-child(2) {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      color: #adadad;
    }
  }

  input {
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 1;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
    outline: none;
    padding-left: 20px;
  }
}

.houses {
  padding: 0 40px;
}

</style>
