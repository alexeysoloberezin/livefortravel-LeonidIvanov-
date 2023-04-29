<template>
  <div>
    <div class="table">
      <div class="table-head">
        <div class="text-left">
          Name
        </div>
        <div class="text-left">
          Description
        </div>
        <div class="text-left">
          Date
        </div>
        <div class="text-left">
          Total
        </div>
      </div>
      <div v-for="item in desserts"
           :key="item.name">
        <div class="table-item"        >
          <div>{{ item.name }}</div>
          <div>{{ item.description }}</div>
          <div>{{ item.date }}</div>
          <div :style="{color: item.type === 'expenses' ? '#FC2947' : '#1F8A70'}">{{ item.type === 'expenses' ? '-' : '+' }}{{ replacePrice(item.total) }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {makePrice} from "~/helper/makeMillion"

export default {
  name: "HouseExpenses",
  data() {
    return {
      desserts: [
        {
          name: 'Frozen Yogurt',
          date: '03/02/2023',
          description: 'LOROORORO',
          total: 750000,
          type: 'expenses'
        },
        {
          name: 'Frozen Yogurt',
          date: '03/05/2023',
          description: 'LOROO23 RORO',
          total: 1000000,
          type: 'income'
        },
      ],
    }
  },
  methods: {
    replacePrice(price) {
      return makePrice(price)
    },
  },
}
</script>

<style scoped>

</style>
