<template>
  <div class="pa-10">
    <h1>Создать объявление дома</h1>
    <div class="createHouse ">
      <div class="createHouse-l">
        <h3 class="mb-2">Step 1</h3>
        <v-btn @click="copyFunction" color="success">Copy info function</v-btn>
        <hr class="my-4" style="opacity: 0.2">

        <h3 class="mb-2">Step 2</h3>
        <v-text-field v-model="objString" background-color="gray" solo :height="50"></v-text-field>
        <hr class="my-4" style="opacity: 0.2">

        <div style="display: grid;grid-template-columns: 1fr 1.5fr 100px;grid-gap: 30px">
          <div v-if="obj">
            <div v-if="obj.imgs.length > 0" class="" style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-gap: 20px">
              <img v-for="img in obj.imgs" :src="img" />
            </div>
            <v-text-field v-model="obj.price" label="Price"></v-text-field>
            <v-text-field v-model="obj.bedrooms" label="Bedrooms"></v-text-field>
            <v-text-field v-model="obj.bathrooms" label="Bathrooms"></v-text-field>
            <v-text-field v-model="obj.available" label="Available"></v-text-field>
            <v-text-field v-model="obj.location" label="Location"></v-text-field>

            <v-text-field v-model="obj.link" label="Link"></v-text-field>
            <v-text-field v-model="obj.linkUser" label="LinkUser"></v-text-field>
            <v-text-field v-model="obj.ava" label="Avatar"></v-text-field>
            <v-text-field v-model="obj.date" label="Date"></v-text-field>
            <div style="display: grid;grid-template-columns: repeat(6, 1fr);grid-gap: 20px">
              <v-checkbox v-model="obj.cleaning" label="Cleaning"></v-checkbox>
              <v-checkbox v-model="obj.garden" label="Garden"></v-checkbox>
              <v-checkbox v-model="obj.parking" label="Pool"></v-checkbox>
              <v-checkbox v-model="obj.pool" label="Pool"></v-checkbox>
            </div>
          </div>
          <div>
            <div v-if="obj.text">
              <div v-html="obj.text"></div>
            </div>
          </div>
          <div>
            <svg @click="readyHouse" style="width: 55px;height: 55px; transform: rotate(180deg);fill: #00b0ff;cursor: pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-thin-circle-outline</title><path d="M3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12C20.03 7.59 16.41 3.97 12 3.97C7.59 3.97 3.97 7.59 3.97 12M2 12C2 6.46 6.46 2 12 2C17.54 2 22 6.46 22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12M10.46 11V8L6.5 12L10.46 16V13H17.5V11" /></svg>
          </div>
        </div>
      </div>
      <div class="createHouse-r">
        <div v-for="item in allHouses" :key="item.text">
          <div v-html="item.text"></div>
          <hr class="my-3">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import findText, {getMessages} from "~/helper/aiFindText/main";
import findValue from "~/helper/aiFindText/patterns";

export default {
  name: "createPost",
  data() {
    return {
      objString: '',
      allHouses: [],
      obj: {
        imgs: [],
        link: '',
        ava: '',
        linkUser: '',
        owner: '',
        date: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        pool: '',
        location: '',
        cleaning: null,
        garden: null,
        parking: null,
        available: ''
      }
    }
  },
  watch: {
    objString(newVal) {
      let obj = JSON.parse(newVal)
      if(obj.text){
        const findObj = findText(obj.text)
        this.obj = {...obj, ...findObj}
      }else{
        this.obj = {
          imgs: [],
          link: '',
          ava: '',
          linkUser: '',
          owner: '',
          date: '',
          price: '',
          bedrooms: '',
          bathrooms: '',
          pool: false,
          location: '',
          cleaning: null,
          garden: null,
          parking: null,
          available: ''
        }
      }
    }
  },
  computed: {

  },
  mounted() {
    this.getAllHouses()

  },
  methods: {
    async getAllHouses(){
      const snapshot = await this.$fire.firestore.collection('allHouses').get()
      const temps = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      this.allHouses = temps
    },
    readyHouse(){
      if(!this.obj.link) return alert('Link is required')
      if(!this.obj.linkUser) return alert('linkUser is required')
      if(!this.obj.imgs.length === 0) return alert('imgs is required')
      if(!this.obj.date) return alert('date is required')
      if(!this.obj.price) return alert('price is required')
      if(!this.obj.location) return alert('location is required')
      if(!this.obj.available) return alert('available is required')


      this.$fire.firestore.collection('allHouses').add(this.obj).then(() => {
        this.getAllHouses()
      })
    },
    copyFunction(){
      const textarea = document.createElement('textarea');

      textarea.value = getMessages;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand('copy');

      document.body.removeChild(textarea);
    }
  }
}
</script>

<style lang="scss">
.createHouse{
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-gap: 20px;
}
</style>
