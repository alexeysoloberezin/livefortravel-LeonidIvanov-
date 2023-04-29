<template>
  <div class="houseInfo">
    <img :src="house.info.img[0]" alt="">

    <div>
      <h3>Main Info</h3>
      <div class="houseInfo-wrp">
        <v-text-field label="Name" v-model="name" variant="underlined"></v-text-field>
        <v-text-field label="Location" v-model="location" variant="underlined"></v-text-field>

        <v-select
          label="Status"
          v-model="status"
          variant="underlined"
          :items="['Available', 'Rented', 'Hold', 'Wait guest']"
        ></v-select>
      </div>

      <v-divider class="my-3"/>

      <h3>Price for customer</h3>
      <div class="houseInfo-wrp" v-if="price">
        <div v-if="price.monthlyX1">
          <b>Month:</b> {{ replacePrice(price.monthlyX1) }}
        </div>
        <div v-if="price.monthlyX2">
          <b>Two Months:</b> {{ replacePrice(price.monthlyX2) }}
        </div>
        <div v-if="price.monthlyX3">
          <b>Three Months:</b>{{ replacePrice(price.monthlyX3) }}
        </div>
        <div v-if="price.week">
          <b>Week:</b> {{ replacePrice(price.week) }}
        </div>
        <div v-if="price.weekX2">
          <b>Two Week:</b> {{ replacePrice(price.weekX2) }}
        </div>
      </div>

      <v-divider class="my-3"/>

      <h3>Rent Price</h3>
      <div class="houseInfo-wrp" v-if="rentPrice">
        <div v-if="rentPrice.yearly">
          <b>Yearly:</b> {{ replacePrice(rentPrice.yearly) }}
        </div>
        <div v-if="rentPrice.monthly">
          <b>Monthly:</b> {{ replacePrice(rentPrice.monthly) }}
        </div>
        <div v-if="rentPrice.longRent">
          <b>Rental duration:</b> {{ rentPrice.longRent }}
        </div>
        <div v-if="rentPrice.longRent">
          <b>Rental duration rest:</b> {{ restDuration(rentPrice.nextPayment) }}
        </div>
        <div v-if="rentPrice.startRent">
          <b>Start rent period:</b> {{ rentPrice.startRent }}
        </div>
        <div v-if="rentPrice.startRent">
          <b>Finish rent period:</b> {{ rentPrice.nextPayment }}
        </div>
      </div>

      <v-divider class="my-3"/>

      <h3>Our Payments</h3>
      <div class="houseInfo-wrp" v-if="ourPayments">
        <div v-if="ourPayments.internet.address">
          <b>Internet Address:</b> {{ ourPayments.internet.address }}
        </div>
        <div v-if="ourPayments.internet.bank">
          <b>Bank:</b> {{ ourPayments.internet.bank }}
        </div>
        <div v-if="ourPayments.internet.bankNumber">
          <b>Bank Number:</b> {{ ourPayments.internet.bankNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {makePrice} from '~/helper/makeMillion'

export default {
  name: "HouseImages",
  data() {
    return {
      name: '',
      location: '',
      price: null,
      status: '',
      rentPrice: null,
      ourPayments: null,
    }
  },
  props: {
    house: Object
  },
  methods: {
    replacePrice(price) {
      return makePrice(price)
    },
    restDuration(date1) {
      return this.$moment(date1).fromNow()
    }
  },
  mounted() {
    this.name = this.house?.info?.name
    this.location = this.house?.info?.location
    this.price = this.house?.info?.price
    this.status = this.house?.info?.status
    this.rentPrice = this.house?.rentPrice
    this.ourPayments = this.house?.ourPayments
  }
}
</script>

<style lang="scss">
.houseInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  img {
    max-width: 100%;
  }

  img {
    border-radius: 5px;
  }

  &-wrp {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    align-self: start;
  }
}
</style>
