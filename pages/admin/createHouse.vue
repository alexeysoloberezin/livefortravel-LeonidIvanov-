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

        <div v-if="obj">
          <div v-if="obj.imgs.length > 0" class="" style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-gap: 20px">
            <v-img v-for="img in obj.imgs" :src="img" ></v-img>
          </div>
        </div>
      </div>
      <div class="createHouse-r">
         {{ obj }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import findText, {getMessages} from "~/helper/aiFindText/main";

export default {
  name: "createPost",
  data() {
    return {
      objString: '',
      obj: null
    }
  },
  watch: {
    objString(newVal) {
      let obj = JSON.parse(newVal)
      if(obj.text){
        const findObj = findText(obj.text)
        this.obj = {...obj, ...findObj}
      }
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
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
