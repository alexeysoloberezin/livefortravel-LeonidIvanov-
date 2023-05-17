<template>
  <div>
    <h1 class="text-center my-3 ">Favorite Houses</h1>
    <v-form class="pa-5 glass" style="max-width: 800px;margin: 0 auto">
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name  ||  Nama"
      ></v-text-field>
      <v-textarea
        v-model="text"
        label="Describe your experience, yourself  ||  Jelaskan pengalaman Anda, diri Anda sendiri"
      ></v-textarea>
      <v-text-field
        v-model="price"
        label="Desired Salary  ||  gaji yang diinginkan"
      ></v-text-field>

      <v-text-field
        v-model="wp"
        label="WhatsApp"
      ></v-text-field>

      <v-checkbox v-model="english" label="Knowledge of English"></v-checkbox>

      <v-btn @click="send" :loading="loading" :disabled="sended" block class="mt-2" color="success">Submit</v-btn>

      <div v-if="sended" class="mt-5">
        <hr class="mb-2">
        <h3>Anda telah mengirim permintaan, terima kasih</h3>
        <h3>You have already sent a request, thank you</h3>

        <hr class="my-4">
        WhatsApp saya jika Anda memiliki pertanyaan <v-btn color="success" outlined @click="$store.commit('SHOW_CONTACT_MODAL')">WhatsApp</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>

export default {
  name: "favoritePage",
  mounted() {
    const sended = localStorage.getItem('sendedInfo')
    if(sended) {
      this.sended = true
    }
  },
  data(){
    return {
      loading: false,
      sended: false,
      firstName: '',
      text: '',
      wp: '',
      price: '',
      english: '',
      rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],
    }
  },
  methods: {
    send(){
      if(!this.firstName || !this.price || !this.wp || !this.text) return alert('Fill in the fields. \n Isi kolom')

      this.loading = true

      this.$fire.firestore.collection('cleaningRequest').add({
        name: this.firstName,
        english: this.english,
        price: this.price,
        text: this.text,
        wp: this.wp
      }).then(() => {
        this.loading = false
        this.sended = true
        localStorage.setItem('sendedInfo', 'Yes')
      }).catch(() => {
        this.sended = true
        this.loading = false
        localStorage.setItem('sendedInfo', 'Yes')
      })
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
