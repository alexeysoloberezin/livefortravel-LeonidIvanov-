<template>
  <div>
    {{ getId }}

    <hr/>

    <div>
      <v-card>
        {{ tab }}
        <v-tabs
          v-model="tab"
          background-color="transparent"
          bg-color="primary"
        >
          <v-tab v-for="tabsItem in tabs" :key="tabsItem" :value="tabsItem">{{ tabsItem }}</v-tab>
        </v-tabs>

        <div class="pa-4">
<!--          <component v-for="comp in tabsComponents"/>-->
<!--          Info component - imgs, in fo,  -->
          <HouseInfo v-if="tab === 0" :house="getHouse" />
          <HouseExpenses v-else-if="tab === 2" :house="getHouse" />
          <HouseImages v-else-if="tab === 3" :house="getHouse" />
          <HouseColendar v-if="tab === 4" :house="getHouse" />
        </div>
<!--        <v-card-text>-->
<!--          <v-window v-model="tab">-->
<!--            <v-window-item value="one">-->
<!--              One-->
<!--            </v-window-item>-->

<!--            <v-window-item value="two">-->
<!--              Two-->
<!--            </v-window-item>-->

<!--            <v-window-item value="three">-->
<!--              Three-->
<!--            </v-window-item>-->
<!--          </v-window>-->
<!--        </v-card-text>-->
      </v-card>
    </div>
  </div>
</template>

<script>
import HouseImages from "~/pages/houses/HouseImages"
import HouseInfo from "~/pages/houses/HouseInfo"
import HouseColendar from "~/pages/houses/HouseColendar"
import HouseExpenses from "~/pages/houses/HouseExpenses"

export default {
  name: "HouseZoom",
  components: {HouseExpenses, HouseColendar, HouseImages, HouseInfo},
  data() {
    return {
      tab: null,
      tabsComponents: [
        HouseInfo,
        HouseImages,
        HouseColendar
      ],
      tabs: [
        'Info', 'Location', 'Expenses, Income', 'Images', 'Сalendar'
      ]
    }
  },
  computed: {
    getId() {
      return this.$route.params.id
    },
    getHouse(){
      return this.$store.state.houses.houses.find(el => +el.info.id === +this.getId)
    }
  },

}
</script>

<style scoped>

</style>
