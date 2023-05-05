<template>
  <v-dialog v-model="showContactModal" :persistent="persistent" :max-width="maxWidth">
    <div class="white-bg pa-5" style="background: #fff">
      <h5 class="pb-4">{{ $t('OurContacts') }}</h5>
      <div v-if="contacts" class="d-flex flex-wrap conta" style="grid-gap: 10px">
        <a target="_blank" v-if="contacts.Telegram" :href="`https://t.me/${contacts.Telegram}`" class="blockTab cursor-pointer">
          <div>
            <TelegramIcon/>
          </div>
          <div>
            <div class="blockTab-title">Telegram</div>
          </div>
        </a>
        <a target="_blank" v-if="contacts.WhatsApp" :href="`https://wa.me/${contacts.WhatsApp}`" class="blockTab cursor-pointer">
          <div>
            <WpIcon/>
          </div>
          <div>
            <div class="blockTab-title">WhatsApp</div>
          </div>
        </a>
        <a target="_blank" v-if="contacts.Instagram" :href="`${contacts.Instagram}`" class="blockTab cursor-pointer">
          <div style="margin-top: -2px">
            <InstagramIcon />
          </div>
          <div>
            <div class="blockTab-title">Instagram</div>
          </div>
        </a>
        <a target="_blank" v-if="contacts.Facebook" :href="`${contacts.Facebook}`" class="blockTab cursor-pointer">
          <div style="">
            <FacebookIcon />
          </div>
          <div>
            <div class="blockTab-title">Facebook</div>
          </div>
        </a>
      </div>
      <pre>{{ selectedInfo }}</pre>
      <v-card-actions class="mt-4">
        <v-spacer></v-spacer>
<!--        <v-btn v-if="selectedInfo" color="primary" @click="copy(selectedInfo)">Скопировать информацию о доме</v-btn>-->
        <v-btn color="primary" outlined @click="$store.commit('HIDE_CONTACT_MODAL')">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </div>
  </v-dialog>
</template>

<script>
import TelegramIcon from "~/components/icon/TelegramIcon"
import WpIcon from "~/components/icon/Wp"
import InstagramIcon from "~/components/icon/Instagram"
import FacebookIcon from "~/components/icon/FacebookIcon"
import copyToClipboard from "~/helper/copyToClipboard";

export default {
  name: 'ContactModal',
  components: {FacebookIcon, InstagramIcon, WpIcon, TelegramIcon},
  props: {
    title: {
      type: String,
    },
    persistent: {
      type: Boolean,
    },
    maxWidth: {
      type: [String, Number],
      default: 500,
    },
    value: {
      type: Boolean,
    },
  },
  computed: {
    contacts() {
      return this.$store.state.contacts.contacts
    },
    selectedInfo() {
      const selectedInfo = this.$store.state.houses.selectedInfo
      if(!selectedInfo.houseName) return ''

      let res = `Здравствуйте, я по жилью: \n`
      if(selectedInfo.houseName){
        res += `Название (Name House): ${selectedInfo.houseName} ${selectedInfo.hash ? ', ' + selectedInfo.hash : ''} \n`
      }
      if(selectedInfo.price){
        res += `Цена (Price): ${selectedInfo.price} \n`
      }
      if(selectedInfo.period){
        res += `Период (Period): ${selectedInfo.period} \n`
      }
      return res
    },
    showContactModal: {
      get() {
        console.log(this.$store.state.houses.selectedInfo)
        return this.$store.state.showContactModal
      },
      set(value) {
        this.$store.commit('houses/setSelectedInfo', {
          period: null,
          price: null,
          hash: null,
          houseName: null,
        })
        this.$store.commit('HIDE_CONTACT_MODAL', value)
      }
    }
  },
  methods: {
    copy(text){
      const textarea = document.createElement('textarea');

      textarea.value = 'asdasdasd';
      document.body.appendChild(textarea);

      // выделяем весь текст внутри textarea
      textarea.select();

      // копируем выделенный текст в буфер обмена
      document.execCommand('copy');

      // удаляем созданный textarea
      document.body.removeChild(textarea);
    }
  }
}
</script>

<style lang="scss">
@media (max-width: 600px) {
  .conta.d-flex{
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    .blockTab{
      min-width: 100%;
      margin-bottom: 0;
      padding: 13px;
      &-title{
        font-size: 16px;
      }
    }
  }
}
</style>
