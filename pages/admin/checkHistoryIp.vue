<template>
  <div class="container">
    <h1>Check History Ip</h1>
    <ul class="glass pa-5">
      {{ info }}
      <li>
        <v-img src></v-img>
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
    async getInfo(){
      const snapshot = await this.$fire.firestore.collection('ipUsers').get()
      const temps = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      this.info = temps
    }
  }
}
</script>

<style scoped>

</style>
