<template>
  <div class="container">
    <h1>Check History Ip</h1>
    <ul class="glass pa-5">
      <li v-for="(item, index) in info" :key="item.id" class="d-flex flex-wrap" style="grid-gap: 15px;margin-bottom: 10px">
<!--        <v-img src></v-img>-->

        <h3>Ip: {{ item.ip }}</h3>
        <h3 v-if="item.date">Date: {{ replaceDate(item.date) }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "checkHistoryIp",
  data(){
    return {
      info: null
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    replaceDate(date){
      return this.$moment.utc(date).format('LLL')
    },
    async getInfo(){
      const snapshot = await this.$fire.firestore.collection('ipUsers').get()
      const temps = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      this.info = temps
      console.log(temps)
    }
  }
}
</script>

<style scoped>

</style>
