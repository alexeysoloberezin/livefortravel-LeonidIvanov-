<template>
  <v-app>
    <div class="bg">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

    <ContactModal
      :max-width="800"
    />

    <!--    <vertical-nav-menu v-if="!pageRegister" :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>-->

    <div
      :class="`header ${whiteHeader}`"
      v-if="!pageRegister"
    >
      <div class="w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <router-link to="/" class="logo"><img style="width: 200px;height: auto;object-fit: contain"
                                                :src="!whiteHeader ? 'Group 21.png' : 'logoWghite.png'"
                                                alt=""></router-link>

          <nav class="nav">
            <ul>
              <li>
                <router-link to="/">{{ $t('aboutUs') }}</router-link>
              </li>
              <li>
                <router-link to="/houses">
                  {{ $t('houses') }}
                </router-link>
              </li>
              <li>
                <a href="#" @click.prevent="$store.commit('SHOW_CONTACT_MODAL')">{{ $t('contact') }}</a>
              </li>
              <li>
                <router-link to="/mapPage" >{{ $t('housesOnMap') }}</router-link>
              </li>
            </ul>
          </nav>
          <v-spacer></v-spacer>

          <!--          <ul>-->
          <!--            <li v-for="locale in $i18n.locales" :key="locale.code">-->
          <!--              <button @click="$i18n.setLocale(locale.code);$moment.locale(locale.code)">-->
          <!--                {{ locale.name }}-->
          <!--              </button>-->
          <!--            </li>-->
          <!--          </ul>-->
          <LanguageCurrency :white="!!whiteHeader"/>
          <router-link to="/favorite">

            <div class="icon-badge-box">
              <v-icon :color="whiteHeader ? 'white' : 'gray'">
                mdi-heart-outline
              </v-icon>
              <div v-if="favoriteCount" class="icon-badge">{{ favoriteCount }}</div>
            </div>
          </router-link>

          <!-- Right Content -->
          <!--          <theme-switcher></theme-switcher>-->
          <v-btn
            icon
            small
            class="ms-3"
          >
            <v-icon :color="whiteHeader ? 'white' : 'gray'">
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>

          <AppBarUserMenu></AppBarUserMenu>
        </div>
      </div>
    </div>

    <v-main :style="{marginTop: !whiteHeader ? '60px' : ''}">
      <Nuxt/>
    </v-main>

    <div
      class="px-0 py-4 footer mt-16"
    >
      <div class="w-full">
        <div class="mx-6 d-flex  align-center">
          <router-link to="/" class="logo">
            <img style="width: 200px;height: auto;object-fit: contain"
                 src="Group 21.png"
                 alt="">
          </router-link>
          <nav class="nav">
            <ul>
              <li>
                <router-link to="/">{{ $t('aboutUs') }}</router-link>
              </li>
              <li>
                <router-link to="/houses">
                  {{ $t('houses') }}
                </router-link>
              </li>
              <li>
                <a href="#" @click.prevent="$store.commit('SHOW_CONTACT_MODAL')">{{ $t('contact') }}</a>
              </li>
              <li>
                <router-link to="/mapPage" >{{ $t('housesOnMap') }}</router-link>
              </li>
            </ul>
          </nav>
          <div v-if="contacts" class="d-flex align-center ml-auto" style="grid-gap: 8px">
            <a target="_blank" v-if="contacts.Telegram" :href="`https://t.me/${contacts.Telegram}`" class=" cursor-pointer">
              <div>
                <TelegramIcon/>
              </div>
            </a>
            <a target="_blank" v-if="contacts.WhatsApp" :href="`https://wa.me/${contacts.WhatsApp}`" class=" cursor-pointer">
              <div>
                <WpIcon/>
              </div>
            </a>
            <a  target="_blank" v-if="contacts.Instagram" :href="`${contacts.Instagram}`" class=" cursor-pointer">
              <div style="margin-top: -2px">
                <InstagramIcon/>
              </div>
            </a>
            <a target="_blank" v-if="contacts.Facebook" :href="`${contacts.Facebook}`" class="cursor-pointer">
              <div style="">
                <FacebookIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import {mdiMagnify, mdiBellOutline, mdiGithub} from '@mdi/js'
import ContactModal from "~/components/contacts/Contacts"
import {getFavorite} from "~/helper/favoriteHouse"
import TelegramIcon from "~/components/icon/TelegramIcon"
import WpIcon from "~/components/icon/Wp"
import InstagramIcon from "~/components/icon/Instagram"
import FacebookIcon from "~/components/icon/FacebookIcon"

export default {
  name: 'DefaultPage',

  components: {
    FacebookIcon,
    InstagramIcon,
    WpIcon,
    TelegramIcon,
    ContactModal,
  },

  setup() {
    return {
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
  methods: {
    setFavoriteCount() {
      const re = getFavorite()
      this.$store.commit('houses/setFavoriteCount', Array.isArray(re) ? re?.length : null)
    },

  },
  mounted() {
    this.setFavoriteCount()
    this.$store.dispatch('contacts/fetchContacts')

    if (this.$store.state.currency === 'USDT') {
      this.$store.dispatch('fetchCurrencyUSDTIDR')
    } else if (this.$store.state.currency === 'RUB') {
      this.$store.dispatch('fetchCurrencyRubIdr')
    }
  },
  computed: {
    whiteHeader() {
      if (this.$route.path === '/' || this.$route.path === '/beach') {
        return 'header-white'
      } else {
        return ''
      }
    },
    contacts() {
      return this.$store.state.contacts.contacts
    },
    favoriteCount() {
      return this.$store.state.houses.favoriteCount
    },
    pageRegister() {
      return this.$route.name === 'register'
    },
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  grid-gap: 35px;

  a {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
}
@media (max-width: 750px) {
  .nav{
    display: none;
  }
}

.logo {
  margin-top: 10px;
  margin-right: 30px;
  overflow: hidden;
  display: flex;

  img {
    object-fit: cover !important;
  }
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  padding: 0 20px;

  &.header-white {
    .nav ul a {
      color: #fff;
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  position: relative;
  border-top: 1px solid rgba(173, 173, 173, 0.3);
}
</style>
