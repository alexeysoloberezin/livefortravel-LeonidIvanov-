<template>
  <div>
    <div class="glass rentList pa-4" v-if="house">
      <div v-for="(item, index) in house.customerRentPrice" :key="item.name + item.startRent" class="d-flex align-center pa-1 flex-wrap">
        <div class="pr-2">{{ index + 1 }}) </div>
        <div class="pr-3"><b class="pr-1">Name:</b> {{ item.name }}</div>
        <div class="pr-3"><b class="pr-1">Period:</b> {{ $moment(item.startRent).format('LL') }} --- {{  $moment(item.nextPayment).format('LL') }}</div>
        <div class="pr-3"><b class="pr-1">Total price:</b> {{ replacePrice(item.totalPrice) }}</div>
        <div class="pr-3"><b class="pr-1">Period:</b> {{ item.paymentLong }}</div>

        <div class="pr-3 d-flex align-center">
          <div v-for="contact in item.contacts" :key="contact.value" class="contacts">
            <a v-if="contact.type === 'telegram'" :href="contact.value" class="mr-2 mb-1"><TelegramIcon /></a>
            <a v-if="contact.type === 'wp'" :href="contact.value" class="mr-2 mb-1"><WpIcon /></a></div>
          </div>
      </div>
    </div>

    <div class="d-flex align-center justify-space-between my-2 mb-4 ">
      <div>
        <div v-if="dateMain">
          {{ changeDate(dateMain) }}
        </div>
      </div>
      <v-btn color="success" @click="showAddPeriod = !showAddPeriod">{{ showAddPeriod ? 'Hide' : 'Add' }} new rent
        period
      </v-btn>
    </div>

    <div class="glass pa-2">
      <div class="grid2" v-if="showAddPeriod">
        <div>
          <h4 class="text-center">Start</h4>
          <datepicker v-model="date" :inline="true" :highlighted="highlighted"
                      :disabled-dates="disabledDates"></datepicker>
        </div>
        <div>
          <h4 class="text-center">End</h4>
          <datepicker v-model="date2" :inline="true" :highlighted="highlighted"
                      :disabled-dates="disabledDates"></datepicker>
        </div>
      </div>
      <div v-else>
        <h4 class="text-center">Main</h4>
        <div class="vdp-datepicker__calendar d-flex align-center">
          <div class="cell highlighted mr-2">1</div>
          <div>-- Rented or disabled date</div>
        </div>
        <hr class="mt-13 mb-2 " style="opacity: 0.3;" >
        <datepicker v-model="dateMain" :inline="true" :highlighted="highlighted"
                    :disabled-dates="disabledDates"></datepicker>
      </div>
    </div>


    <!--    <v-date-picker v-model="selectedDate"></v-date-picker>-->
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import {makePrice} from "~/helper/makeMillion"
import TelegramIcon from "~/components/icon/TelegramIcon"
import WpIcon from "~/components/icon/Wp"

export default {
  name: "HouseColendar",
  props: {
    house: Object
  },
  components: {
    WpIcon,
    TelegramIcon,
    Datepicker
  },
  data() {
    return {
      showAddPeriod: false,
      date: null,
      date2: null,
      dateMain: null,
      disabledDates: {},

      highlighted: {
        dates: [ // Highlight an array of dates

        ],
        includeDisabled: true
      },
    }
  },
  mounted() {
    const allDates = []


    this.house.customerRentPrice.forEach(item => {
      const startDate = this.$moment(item.startRent)
      const finishDate = this.$moment(item.nextPayment)

      let currentDate = startDate.clone() // создаем копию начальной даты

      while (currentDate <= finishDate) {
        allDates.push(currentDate.toDate()) // добавляем текущую дату в массив
        currentDate = currentDate.add(1, 'day') // увеличиваем текущую дату на один день
      }
    })
    console.log(allDates) // выводим массив всех дат между начальной и конечной датами
    this.highlighted.dates = allDates
  },
  methods: {
    changeDate(date) {
      const myDate = this.$moment(date, "ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      console.log(myDate)

      return myDate.format('L')
    },
    replacePrice(price) {
      return makePrice(price)
    },

  }
}
</script>

<style lang="scss">
.vdp-datepicker {
  .vdp-datepicker__calendar {
    width: 100%;
  }
}

.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.contacts{
  a {
    width: 24px;
    height: 24px;
    display: block;
    svg{
      max-width: 100%;
    }
  }
}
</style>
