<template>
  <div>
    <h1>CreatePost</h1>
    <div class="createPost">
      <div class="createPost-l">
        <v-tabs
          v-model="tab"
          bg-color="primary"
        >
          <v-tab value="one">Images</v-tab>
          <v-tab value="two">Templates Description</v-tab>
          <v-tab value="three">Templates</v-tab>
        </v-tabs>


        <template v-if="tab === 0">
          <div v-if="houses.length > 0" class="createPost-houses">
            <div v-for="house in houses" :key="house.info.id" class="createPost-house-wrp glass">
              <v-btn @click="selectAll(house.info.img)" class="mb-3">Select All</v-btn>
              <div class="createPost-house">
                <v-img v-for="item in house.info.img" :class="{'active': checkSelectImg(item, selectedImages)}"
                       @click="selectImg(item)" :src="item"></v-img>
              </div>
            </div>
          </div>
        </template>
        {{ tab }}

        <template v-if="tab === 1">
          <h3>Templates </h3>
          <v-btn color="success" class="my-3" outlined @click="showNewTD = !showNewTD">Add new template description
          </v-btn>
          <div class="glass pa-4 mb-3" v-if="showNewTD">
            <v-textarea v-model="newTemplateDesc"></v-textarea>
            <v-btn @click="sendTemplateDesc">Send template</v-btn>
          </div>
          <div v-for="temp in templatesDesciption" class="glass pa-5 mb-2"
               @click="sendPostData.description = temp.template">
            <div v-html="temp.template"></div>
            <v-btn color="error" outlined x-small @click.stop="removeTemplateDoc(temp.id)">Remove</v-btn>
          </div>
        </template>

        <template v-if="tab === 2">
          <div v-if="houses.length > 0" class="">
            <div v-for="house in houses" :key="house.info.id" class="createPost-house-box">
                <v-img @click="selectImg(house.info.img)" :src="house.info.img[0]"></v-img>
            </div>
          </div>
        </template>

      </div>
      <div class="createPost-r glass">
        <h2 class="text--black mb-3">Result</h2>
        <div class="createPost-result">
          <v-img v-for="item in selectedImages" :src="item"></v-img>
        </div>
        <v-textarea :height="500" v-model="replaceFromBr" placeholder="Your text"></v-textarea>
        <div class="d-flex flex-wrap">
          <v-btn :disabled="blockSendPost" color="success" @click="sendPost" class="mr-2">
            Send post
          </v-btn>
          <v-btn color="error" outlined @click="clearAll">
            Clear all
          </v-btn>
          <v-btn color="blue" @click="sendMessage">Send message</v-btn>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createPost",
  data() {
    return {
      showNewTD: false,
      blockSendPost: false,
      newTemplateDesc: '',
      templatesDesciption: [],
      tab: null,
      sendPostData: {
        description: '',
      },
      selectedImages: []
    }
  },
  computed: {
    houses() {
      return this.$store.state.houses.houses
    },
    replaceFromBr: {
      get() {
        return this.sendPostData.description.replace(/<br>/g, '\n')
      },
      set(value) {
        this.sendPostData.description = this.replaceOnBr(value)
      }
    }
  },
  mounted() {
    this.$store.dispatch('houses/fetchHouses')
    this.getTemplatesDesc()
  },
  methods: {
    clearAll() {
      this.selectedImages = []
      this.sendPostData.description = ''
    },
    removeTemplateDoc(id) {
      this.$fire.firestore
        .collection('templatesDesc')
        .doc(id)
        .delete()
        .then(() => {
          console.log('Документ успешно удален');
          this.getTemplatesDesc()
        })
        .catch((error) => {
          console.error('Ошибка при удалении документа:', error);
        });
    },
    replaceOnBr(string) {
      return string.replace(/\n/g, '<br>')
    },
    sendTemplateDesc() {
      this.$fire.firestore.collection('templatesDesc').add({template: this.replaceOnBr(this.newTemplateDesc)}).then(() => {
        this.getTemplatesDesc()
        this.newTemplateDesc = ''
      })
    },
    async getTemplatesDesc() {
      const snapshot = await this.$fire.firestore.collection('templatesDesc').get()
      const temps = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      this.templatesDesciption = temps
    },
    selectAll(imgs) {
      imgs.forEach(img => this.selectImg(img, true))
    },
    selectImg(img, selectAll) {
      if (!this.selectedImages.includes(img)) {
        this.selectedImages.push(img);
      } else {
        if (!selectAll) {
          this.selectedImages = this.selectedImages.filter(item => item !== img)
        }
      }
    },
    checkSelectImg(img, arr) {
      let res = false
      arr.forEach(item => {
        if (item === img) res = true
      })

      return res
    },
    sendMessage() {
      // const chatid = "-1001501742593";
      const chatid = "-1001270949254";

      const token = "6245643623:AAFA5v0rRv4gJxI-vDUh9p7QL3cw1bMaHkI";

      function otpravka(token, chatid) {
        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          "chat_id": chatid,
          "text": "Привет, есть жильё до 10млн на буките?"
        })
          .then(response => {
            console.log('Success send', response)
          })
          .catch(error => {
            console.error(error);
            console.error(error.response);
          })
      };
      // otpravka(token, chatid)

      const apiId = "23339883";
      const apiHash = 'e7927d4c8ccf8b8586450f880ada08c7';
      const phoneNumber = '+6282123340433'; // ваш номер телефона

      // const bot = new Telegraf(apiId + ':' + apiHash);
      //
      // bot.telegram.signIn({
      //   phoneNumber: phoneNumber
      // }).then(authData => {
      //   // authData содержит информацию о процессе авторизации, включая важные данные, такие как user_id и user_hash.
      //   console.log('Авторизация прошла успешно:', authData);
      // }).catch(error => {
      //   console.log('Ошибка авторизации:', error);
      // });

      const API_ID = "23339883";
      const API_HASH = 'e7927d4c8ccf8b8586450f880ada08c7';
      const PHONE_NUMBER = '+6282123340433';

      axios.post(`https://api.telegram.org/bot${token}/auth.sendCode`, {
        phone_number: PHONE_NUMBER,
        current_number: false,
        api_id: API_ID,
        api_hash: API_HASH
      })
        .then((response) => {
          console.log(response.data);
          // Получаем хэш кода аутентификации из ответа и сохраняем его для последующих запросов
          const phoneCodeHash = response.data.phone_code_hash;
          console.log(phoneCodeHash)
          // Затем отправляем запрос на проверку полученного кода аутентификации
          // axios.post('https://api.telegram.org/bot<YOUR_BOT_TOKEN>/auth.signIn', {
          //   phone_number: PHONE_NUMBER,
          //   phone_code_hash: phoneCodeHash,
          //   phone_code: 'YOUR_PHONE_CODE'
          // })
          //   .then((response) => {
          //     console.log(response.data);
          //     // Делаем что-то дальше с полученным токеном
          //   })
          //   .catch((error) => {
          //     console.error(error.response.data);
          //   });
        })
        .catch((error) => {
          console.error(error.response.data);
        });
    },
    sendPost() {
      this.blockSendPost = true
      const chatid = "-1001501742593";
      const token = "6245643623:AAFA5v0rRv4gJxI-vDUh9p7QL3cw1bMaHkI";

      if (this.selectedImages.length < 1) return alert('Select imgs')
      if (!this.sendPostData.description) return alert('Description is Required')

      const photoUrl = this.selectedImages.map((item, index) => {
        return {
          type: 'photo',
          caption: index === 0 ? this.sendPostData.description.replace(/<br>/g, '\n') : '',
          media: item
        }
      })

      otpravka(token, chatid);
      const t = this

      function otpravka(token, chatid) {
        axios.post(`https://api.telegram.org/bot${token}/sendMediaGroup`, {
          chat_id: chatid,
          media: [...photoUrl]
        })
          .then(response => {
            t.blockSendPost = false
            alert('Success send')
          })
          .catch(error => {
            console.error(error);
            console.error(error.response);
            t.blockSendPost = false
          })
      };
    }
  }
}
</script>

<style lang="scss">
.createPost {
  margin: 20px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 400px;

  &-r {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    padding: 20px;

    textarea {
      height: 500px !important;
    }
  }

  &-result {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  &-house-box{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, 1fr);
  }
  &-house {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(6, 1fr);

    &-wrp {
      padding: 30px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .v-image {
      position: relative;
      border: 5px solid transparent;

      &.active {
        border: 5px solid #d9085f;
      }

      .select {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        padding: 10px;
        background: red;
      }
    }
  }

  &-houses {
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    grid-gap: 15px;
  }
}
</style>
