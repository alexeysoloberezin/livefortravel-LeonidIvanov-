<template>
  <v-dialog v-model="showContactModal" :persistent="persistent" :max-width="maxWidth">
    <div class="white-bg pa-5" style="background: #fff">
      <h5 class="pb-4">{{ $t('OurContacts') }}</h5>
      <div v-if="contacts" class="d-flex flex-wrap" style="grid-gap: 10px">
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
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$store.commit('HIDE_CONTACT_MODAL')">{{ $t('close') }}</v-btn>
      </v-card-actions>
    </div>
  </v-dialog>
</template>

<script>
import TelegramIcon from "~/components/icon/TelegramIcon"
import WpIcon from "~/components/icon/Wp"
import InstagramIcon from "~/components/icon/Instagram"
import FacebookIcon from "~/components/icon/FacebookIcon"

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
    showContactModal: {
      get() {
        return this.$store.state.showContactModal
      },
      set(value) {
        this.$store.commit('HIDE_CONTACT_MODAL', value)
      }
    }
  },
}
</script>
