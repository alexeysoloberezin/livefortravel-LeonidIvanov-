<template>
  <div>
    <h1 class="text-center my-3">Favorite Houses</h1>
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
      <div v-if="houses.length > 0" class="grid-cards px-10"  :style="{gridTemplateColumns: '1fr 1fr 1fr 1fr'}">

        <router-link :to="`houses/` + house.info.id" v-for="(house, index) in houses" :key="index">
          <CardHouse :house="house" :vertical="index === 0" refresh-after-favorite/>
        </router-link>
      </div>
      <div v-else>
        <h3 class="text-center">Your favorites list is empty, <router-link style="text-decoration: underline" to="/houses" >take a look at home</router-link></h3>
      </div>
    </div>
  </div>
</template>

<script>
import CardHouse from "~/pages/houses/card"
import {getFavorite} from "~/helper/favoriteHouse"

export default {
  name: "favoritePage",
  components: {CardHouse},
  mounted() {
    this.$store.dispatch('houses/fetchHouses')
  },
  computed: {
    loading() {
      return this.$store.state.houses.loading
    },

    houses() {
      const res = [...this.$store.state.houses.houses]

      if (res.length < 1) return res

      return getFavorite(res)
    },
  }
}
</script>

<style scoped>

</style>
