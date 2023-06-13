<template>
  <div>
    <v-app v-if="false">
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
          <div class="d-flex align-center mx-0 mx-md-6">
            <!-- Left Content -->
            <router-link to="/" class="logo"><img style="width: 200px;height: auto;object-fit: contain"
                                                  :src="!whiteHeader ? 'logoBlack.png' : 'logoWghite.png'"
                                                  alt=""></router-link>


            <nav class="nav">
              <ul>
                <li>
                  <router-link to="/">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>information-outline</title>
                        <path
                          d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/>
                      </svg>
                    </div>
                    {{ $t('aboutUs') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/houses">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home-search-outline</title>
                        <path
                          d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9M15.5 19C14.12 19 13 17.88 13 16.5S14.12 14 15.5 14 18 15.12 18 16.5 16.88 19 15.5 19M5 20V12H2L12 3L22 12H20.18C19.33 11.11 18.23 10.47 17 10.18L12 5.69L7 10.19V18H9.18C9.35 18.72 9.64 19.39 10.03 20H5Z"/>
                      </svg>
                    </div>
                    {{ $t('houses') }}
                  </router-link>
                </li>
                <li>
                  <a href="#" @click.prevent="$store.commit('SHOW_CONTACT_MODAL')">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone-settings-outline</title>
                        <path
                          d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9H16.1C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5M5 5H6.5C6.6 5.9 6.8 6.8 7 7.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5M19 19C17.7 18.9 16.4 18.6 15.2 18.2L16.4 17C17.2 17.2 18.1 17.4 19 17.4V19M17 9H15V11H17M13 9H11V11H13V9M19 11H21V9H19Z"/>
                      </svg>
                    </div>
                    {{ $t('contact') }}</a>
                </li>
                <li>
                  <router-link to="/mapPage">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>
                        map-marker-multiple-outline</title>
                        <path
                          d="M11.5 9C11.5 7.62 12.62 6.5 14 6.5C15.1 6.5 16.03 7.21 16.37 8.19C16.45 8.45 16.5 8.72 16.5 9C16.5 10.38 15.38 11.5 14 11.5C12.91 11.5 12 10.81 11.64 9.84C11.55 9.58 11.5 9.29 11.5 9M5 9C5 13.5 10.08 19.66 11 20.81L10 22C10 22 3 14.25 3 9C3 5.83 5.11 3.15 8 2.29C6.16 3.94 5 6.33 5 9M14 2C17.86 2 21 5.13 21 9C21 14.25 14 22 14 22C14 22 7 14.25 7 9C7 5.13 10.14 2 14 2M14 4C11.24 4 9 6.24 9 9C9 10 9 12 14 18.71C19 12 19 10 19 9C19 6.24 16.76 4 14 4Z"/>
                      </svg>
                    </div>
                    {{ $t('housesOnMap') }}
                  </router-link>
                </li>
                <li v-if="isAdmin">
                  <router-link to="/admin/createPost">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>
                        map-marker-multiple-outline</title>
                        <path
                          d="M11.5 9C11.5 7.62 12.62 6.5 14 6.5C15.1 6.5 16.03 7.21 16.37 8.19C16.45 8.45 16.5 8.72 16.5 9C16.5 10.38 15.38 11.5 14 11.5C12.91 11.5 12 10.81 11.64 9.84C11.55 9.58 11.5 9.29 11.5 9M5 9C5 13.5 10.08 19.66 11 20.81L10 22C10 22 3 14.25 3 9C3 5.83 5.11 3.15 8 2.29C6.16 3.94 5 6.33 5 9M14 2C17.86 2 21 5.13 21 9C21 14.25 14 22 14 22C14 22 7 14.25 7 9C7 5.13 10.14 2 14 2M14 4C11.24 4 9 6.24 9 9C9 10 9 12 14 18.71C19 12 19 10 19 9C19 6.24 16.76 4 14 4Z"/>
                      </svg>
                    </div>
                    Создать пост
                  </router-link>
                </li>
                <li v-if="isAdmin">
                  <router-link to="/admin/checkHistoryIp">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>
                        map-marker-multiple-outline</title>
                        <path
                          d="M11.5 9C11.5 7.62 12.62 6.5 14 6.5C15.1 6.5 16.03 7.21 16.37 8.19C16.45 8.45 16.5 8.72 16.5 9C16.5 10.38 15.38 11.5 14 11.5C12.91 11.5 12 10.81 11.64 9.84C11.55 9.58 11.5 9.29 11.5 9M5 9C5 13.5 10.08 19.66 11 20.81L10 22C10 22 3 14.25 3 9C3 5.83 5.11 3.15 8 2.29C6.16 3.94 5 6.33 5 9M14 2C17.86 2 21 5.13 21 9C21 14.25 14 22 14 22C14 22 7 14.25 7 9C7 5.13 10.14 2 14 2M14 4C11.24 4 9 6.24 9 9C9 10 9 12 14 18.71C19 12 19 10 19 9C19 6.24 16.76 4 14 4Z"/>
                      </svg>
                    </div>
                    История Ip
                  </router-link>
                </li>
              </ul>
            </nav>
            <v-spacer></v-spacer>

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

            <AppBarUserMenu v-if="user"></AppBarUserMenu>
          </div>
        </div>
      </div>

      <v-main :style="{marginTop: !whiteHeader ? '100px' : ''}">
        <Nuxt/>
      </v-main>

      <div
        class="px-0 py-4 footer mt-16 mb-md-0 mb-14"
      >
        <div class="w-full">
          <div class="mx-6 d-flex  align-center">
            <router-link to="/" class="logo">
              <img style="width: 200px;height: auto;object-fit: contain"
                   src="logoBlack.png"
                   alt="">
            </router-link>
            <nav class="nav">
              <ul>
                <li>
                  <router-link to="/" :class="{active: true}">
                    {{ $t('aboutUs') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/houses">
                    {{ $t('houses') }}
                  </router-link>
                </li>
                <li>
                  <a href="#" @click.prevent="$store.commit('SHOW_CONTACT_MODAL')">
                    {{ $t('contact') }}
                  </a>
                </li>
                <li>
                  <router-link to="/mapPage">
                    {{ $t('housesOnMap') }}
                  </router-link>
                </li>
              </ul>
            </nav>
            <div v-if="contacts" class="d-flex align-center ml-auto" style="grid-gap: 8px">
              <a target="_blank" v-if="contacts.Telegram" :href="`https://t.me/${contacts.Telegram}`"
                 class=" cursor-pointer">
                <div>
                  <TelegramIcon/>
                </div>
              </a>
              <a target="_blank" v-if="contacts.WhatsApp" :href="`https://wa.me/${contacts.WhatsApp}`"
                 class=" cursor-pointer">
                <div>
                  <WpIcon/>
                </div>
              </a>
              <a target="_blank" v-if="contacts.Instagram" :href="`${contacts.Instagram}`" class=" cursor-pointer">
                <div style="margin-top: -2px">
                  <InstagramIcon/>
                </div>
              </a>
              <a target="_blank" v-if="contacts.Facebook" :href="`${contacts.Facebook}`" class="cursor-pointer">
                <div style="">
                  <FacebookIcon/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-app>
    <div class="cloased"><h1>Сайт оффлайн на 2 дня</h1></div>
  </div>
</template>

<script>
import {mdiMagnify, mdiBellOutline, mdiGithub} from '@mdi/js'
import ContactModal from "~/components/contacts/Contacts"
import {getFavorite} from "~/helper/favoriteHouse"
import TelegramIcon from "~/components/icon/TelegramIcon"
import WpIcon from "~/components/icon/Wp"
import InstagramIcon from "~/components/icon/Instagram"
import FacebookIcon from "~/components/icon/FacebookIcon"
import findText from "~/helper/aiFindText/main";
import getInfo from "~/helper/getInfo";

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
    const text = [`🏠 Комфортабельная  вилла с 3 -мя спальнями в удобном районе.

🔹В каждой комнате имеется ванная комната.
🔹Две гостиные на первом и втором этажах.
🔹Современная укомплектованная  кухня.
🔹Много подсобных помещений.
🔹Прачечная комната

Район Umalas jl Tegal Cupek
Любимая улица экспатов.
Нету пробок. Улица не проездная.
Безопасно, комфортно.
Рядом много кафе и магазинов.

Вилла с красивым названием SUKA

На вилле:
 🔅Интернет 100 Мб
 🔅Уборка
 🔅Замена белья и полотенец
 🔅Садовник
 🔅Уборка бассейна
 🔅Питьевая вода
 🔅Сейф
 🔅Гараж

Стоимость 49 в мес (минимум 4 мес)
Возможна аренда на пол года и на год.`, `Топовая вилла в самом центре Семиньяка!

Супер уютный дизайн, большие 3 просторные спальные комнаты с персональными ванными и очень красиво оформленная гостиная, свой паркинг, тенистый сад, чайная беседка.

Вилла сделана с любовью и вниманием к деталям. Попадая в нее ты чувствуешь себя как дома.

Стоимость в месяц 55 милл все включено. (Кроме электричества)

Есть весь стафф
Все необходимое для жизни

Возможна аренда на пол года и год.
Вилла свободна с 18 Мая.`,`🏠Вилла с 3 комнатами в Умаласе, Бали

• 3 спальни
• 3 ванных комнаты
• Гардероб
• Бассейн
• Открытая гостиная и кухня
• WI-FI 50mb/s 
• Полностью мебелирована  
• Парковочное место
• Гостевой туалет

🐶pets friendly


📝Что включено в стоимость:
• Обслуживание бассейна 2 раза в неделю 
• Уборка 2 раза в неделю
• Вывоз мусора
• Смена постельного белья 2 раз в неделю

Не включено:
• Электричество

241016

🔖45 млн рупий / месяц`, `🏡Сдается новая 3х комнатная вилла.
👕У каждой комнаты своя гардеробная
🖥️Полностью оборудована (от мебели до техники).
🏊🏽‍♂️Свой бассейн.
🔥своя зона барбекю
🏋️‍♀️1 мин до фитнеса
🏝️7 мин до пляжа Куты
🛍️5 мин до ТЦ Beachwalk
🛍️3 мин до ТЦ TransStudioMall, carrefour
🛒2 минуты до Grand Lucky
🍽️Множество ресторанов в пешей доступности.
🅿️ Закрытая парковка для машины и байков

✅Включено:
🧹Уборка х2 в неделю
🛏️Смена постельного белья
🧼Уборка бассейна и сада х2 в неделю
📶Интернет

❌Не включено:
⚡️Электричество.

Цена в месяц: 30.000.000
Цена в год: 270.000.000

Свободна с 24.05`];

    getInfo(this.$fire, this.$moment, this.$route.query?.t, this.$moment().format('L'))

    // text.forEach(item => {
    //   const res = findText(item)
    //   console.log(res)
    // })


    if (this.$route.path.includes('/admin/')) {
      if (!this.isAdmin) {
        this.$router.push('/');
      }
    }


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
      if (this.$route.path === '/' || this.$route.path === '/beach' || this.$route.path === '/ru' || this.$route.path === '/ru/beach') {
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
    user() {
      return this.$store.state.user
    },
    isAdmin() {
      return this.$store.state.user?.email === "alexeysoloberezinsolo@gmail.com"
    }
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

  svg {
    display: none;
  }

  a {
    font-size: 16px;
    color: #333;
    font-weight: 500;
  }
}

@media (max-width: 750px) {
  .nav {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: calc(100vw - 00px);
    height: 60px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
    //border-top: 3px solid #09d261;
    a {
      color: #333 !important;
      font-size: 13px !important;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      grid-gap: 0;

      li {
        position: relative;
        padding: 7px 0 0 0;
        width: 100%;


        //border-right: 1px solid rgba(0, 0, 0, 0.2);
        //&:last-child{
        //  border: none;
        //}
      }

      svg {
        display: block !important;
        width: 26px;
        height: 25px;
        fill: #333;
      }

      li > div {

      }

      li > a {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
    }
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

.cloased{
  background: #071317;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

}
.cloased h1{
  color: #fff !important;
}
</style>
