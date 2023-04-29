<template>
  <div>
    <div>
      <div class="d-flex align-center flex-wrap">
        <v-tooltip
          v-for="item in btns"
          :key="item.icon"
          top
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              v-bind="attrs"
              class="icons-card mb-3 me-3"
              v-on="on"
              @click="clickTooltip(item.key)"
            >
              <v-card-text class="py-2 px-2">
                <v-icon size="25">
                  {{ item.icon }}
                </v-icon>
              </v-card-text>
            </v-card>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
      </div>
    </div>
    <div v-if="houses.length > 0" class="grid-cards" :style="{gridTemplateColumns: this.grid}">
      <router-link :to="'/houses/' + house.info.id" v-for="(house, index) in houses" :key="index" >
        <CardHouse :img="house.info.img[0]"/>
      </router-link>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import { mdiViewGridOutline, mdiGrid, mdiGridOff } from '@mdi/js'
// eslint-disable-next-line import/extensions
import CardHouse from "~/pages/houses/card"


export default {
  name: "HousesPage",
  components: {CardHouse},
  data() {
    return {
      grid: '1fr 1fr',
      btns: [
        {icon: mdiViewGridOutline, name: 'Grid x2', key: '1fr 1fr'},
        {icon: mdiGrid, name: 'Grid x3', key: '1fr 1fr 1fr'},
        {icon: mdiGridOff, name: 'Inline', key: '1fr'},
      ]
    }
  },
  methods: {
    clickTooltip(key){
      console.log(key)
      this.grid = key
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses.houses
    },
  }
}
</script>

<style scoped>
.grid-cards{
  display: grid;
  grid-gap: 30px;
  transition: .5s;
}
.icons-card{
  cursor: pointer;
}
</style>
