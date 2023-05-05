<template>
  <div>
    <div>
      <div class="firstBanner">
        <div class="firstBanner-bg"><img :src="bannerArrMain.bg" alt=""></div>
        <div class="firstBanner-wrp">
          <div class="firstBanner-l">
            <div class="firstBanner-title" v-html="bannerArrMain.title"></div>
            <div class="firstBanner-text">{{ bannerArrMain.text }}</div>
            <v-btn color="success" class="firstBanner-btn" width="180px">{{
                bannerArrMain.btnText
              }}
            </v-btn>
          </div>
          <div class="firstBanner-r">
            <!--            <v-carousel height="400" :visible="2">-->
            <!--              <v-carousel-item v-for="(item, i) in bannersArr" :key="i">-->
            <!--                <v-img :src="item.bg" alt="" aspect-ratio="1"/>-->
            <!--              </v-carousel-item>-->
            <!--            </v-carousel>-->
            <VueSlickCarousel v-bind="settings" ref="carousel" @afterChange="updateActiveSlide">
              <router-link v-for="(item, i) in bannersArr" :key="i" :to="item.btnLink" class="slider-item">
                <v-img :src="item.bg" alt="" :aspect-ratio="2/3"/>
                <div class="slider-item-info">
                  <div class="slider-item-title">{{ item.title }}</div>
                  <div class="slider-item-text">{{ item.text }}</div>
                </div>
              </router-link>
            </VueSlickCarousel>
            <div class="d-flex align-center mt-2 slick-info" style="grid-gap: 10px">
              <button @click="showPrev" class="slick-arr">
                <svg style="width: 22px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>
                  arrow-left</title>
                  <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
                </svg>
              </button>
              <button @click="showNext" class="slick-arr">
                <svg style="width: 22px;transform: rotate(180deg);display: block;" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"><title>arrow-left</title>
                  <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
                </svg>
              </button>
              <div class="slider-btns-line"></div>
              <div class="slick-index">{{ getIndex }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="about mt-6 mt-md-16">
          <div class="about-l">
            <v-img aspect-ratio="3/2" src="landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise.jpg"
                   alt=""/>
            <v-img aspect-ratio="3/2"
                   src="https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/C9%2Fphoto_5_2023-04-11_13-42-10.jpg?alt=media&token=7e3c5250-458d-494b-a68b-065ec5a4140f"
                   alt=""/>
            <v-img aspect-ratio="3/2"
                   src="https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/photo_6_2023-04-09_16-35-32.jpg?alt=media&token=3e7b2a9d-a96b-4c98-bb8a-639a788de3b0"
                   alt=""/>
          </div>
          <div class="about-r">
            <div class="about-title mb-2">{{ $t('aboutUs') }}</div>
            <div class="about-text">
              <div>{{ $t('aboutUsTxt1') }}</div>
              <div>{{ $t('aboutUsTxt2') }}
              </div>
            </div>
            <v-btn class="about-btn my-4" color="success">{{ $t('contact') }}</v-btn>
          </div>
        </div>
      </div>


      <div class="whatWeDo container my-16 py-md-16 py-0">
        <div class="whatWeDo-r">
          <div class="whatWeDo-item">
            <h2 class="about-title">{{ $t('WhatWDYou') }}</h2>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="sofa.png" alt=""></div>
            <div class="whatWeDo-item-title">{{ $t('WhatWDYou1Title') }}</div>
            <div class="whatWeDo-item-text">{{ $t('WhatWDYou1Text') }}
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="shield.png" alt=""></div>
            <div class="whatWeDo-item-title">{{ $t('WhatWDYou2Title') }}</div>
            <div class="whatWeDo-item-text">{{ $t('WhatWDYou2Text') }}
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="cleanliness.png" alt=""></div>
            <div class="whatWeDo-item-title">{{ $t('WhatWDYou3Title') }}</div>
            <div class="whatWeDo-item-text">{{ $t('WhatWDYou3Text') }}
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="clock.png" alt=""></div>
            <div class="whatWeDo-item-title">{{ $t('WhatWDYou4Title') }}</div>
            <div class="whatWeDo-item-text">{{ $t('WhatWDYou4Text') }}
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="satisfaction.png" alt=""></div>
            <div class="whatWeDo-item-title">{{ $t('WhatWDYou5Title') }}</div>
            <div class="whatWeDo-item-text">{{ $t('WhatWDYou5Text') }}</div>
          </div>
        </div>
      </div>

      <div class="howWork">
        <div class="howWork_r">
          <div class="howWork-item">
            <div class="howWork-info">
              <div class="about-title mb-4">{{ $t('howWork') }}</div>
              <p>{{ $t('howWorkTxt1') }}</p>
              <p>{{ $t('howWorkTxt2') }}</p>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/balazs-ketyi-L0nipfx-Ry4-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">01</div>
              <div class="howWork-title">{{ $t('howWorkBx1Title') }}</div>
              <div class="howWork-text">{{ $t('howWorkBx1Text') }}
              </div>
              <v-btn to="/houses" color="success" outlined class="mt-3">{{ $t('lookHouses') }}</v-btn>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/michael-oxendine-BfkTFeysp34-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">02</div>
              <div class="howWork-title">{{ $t('howWorkBx2Title') }}</div>
              <div class="howWork-text">{{ $t('howWorkBx2Text') }}
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/michael-oxendine-GHCVUtBECuY-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">03</div>
              <div class="howWork-title">{{ $t('howWorkBx3Title') }}</div>
              <div class="howWork-text">{{ $t('howWorkBx3Text') }}
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/roberto-nickson-rEJxpBskj3Q-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">04</div>
              <div class="howWork-title">{{ $t('howWorkBx4Title') }}</div>
              <div class="howWork-text">{{ $t('howWorkBx4Text') }}
              </div>
            </div>
          </div>

          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/spacejoy-IH7wPsjwomc-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">05</div>
              <div class="howWork-title">{{ $t('howWorkBx5Title') }}</div>
              <div class="howWork-text"> {{ $t('howWorkBx5Text') }}
              </div>
              <v-btn target="_blank" href="https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/documents%2F%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%8B%20K4%20(5)%20(1).pdf?alt=media&token=3c969ddf-3327-4067-8298-71dbc115db16" color="white" outlined  class="mt-2">{{ $t('exampleDoc') }}</v-btn>
            </div>
          </div>

          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/spacejoy-YI2YkyaREHk-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">06</div>
              <div class="howWork-title">{{ $t('howWorkBx6Title') }}</div>
              <div class="howWork-text">{{ $t('howWorkBx6Text') }}
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/1618685996_26-p-sovremennii-stil-v-dizaine-interera-27.jpg" alt="">
            </div>
            <div class="howWork-info">
              <div class="howWork-number">07</div>
              <div class="howWork-title">{{ $t('howWorkBx7Title') }}</div>
              <div class="howWork-text">{{ $t('howWorkBx7Text') }}
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-info">
              <div class="about-title mb-4">{{ $t('howWorkBx8Title') }}</div>
              <p>{{ $t('howWorkBx8Text') }}</p>
              <v-btn @click="$store.commit('SHOW_CONTACT_MODAL')" color="success">{{ $t('contact') }}</v-btn>
            </div>
          </div>
        </div>
      </div>

      <!--      <div class="banner">-->
      <!--        <div class="banner-title">Наши дома в аренду - лучший выбор для вашего комфортного проживания</div>-->
      <!--        <div class="banner-text">-->
      <!--          <div>Мы-->
      <!--            предлагаем только лучшие варианты для вашего комфортного проживания. Наша компания заботится о том, чтобы-->
      <!--            наши дома были в отличном состоянии и готовы к вашему пребыванию.-->
      <!--          </div>-->

      <!--          <div>Каждый дом в нашей аренде имеет уютную атмосферу, качественную мебель и оснащен всем необходимым для-->
      <!--            вашего-->
      <!--            пребывания. У нас есть как маленькие уютные квартиры, так и большие дома с садом. Вы можете-->
      <!--            выбрать то, что наиболее подходит для вас и вашей семьи.-->
      <!--          </div>-->

      <!--          <div>Посмотрите наши варианты домов в аренду и выберите тот, который подходит вам лучше всего. Мы гарантируем,-->
      <!--            что вы не пожалеете о своем выборе, а наша команда сделает все возможное, чтобы ваше пребывание было-->
      <!--            приятным и комфортным.-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <v-btn color="white" class="banner-text">Look houses</v-btn>-->
      <!--      </div>-->
      <!--          что мы делаем для вас -->
      <!--          о нас -->
      <!--          контакты -->
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {isAdmin} from "~/helper/checkRole"

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "dots": false,
        "infinite": true,
        "arrows": false,
        "speed": 750,
        "variableWidth": true,
        "centerPadding": "20px",
        "slidesToShow": 1,
        draggable: true,
        swipeToSlide: true,
        "slidesToScroll": 1,
        "touchThreshold": 5
      },
      activeBannerIndex: 0,
      activeSlide: 0,
      bannerArrMain: {
        bg: 'szabolcs-toth-BE2T__AyThs-unsplash.jpg',
        title: 'Life <br>is Travel',
        text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
        btnText: 'Show',
        btnLink: 'https://ru.pinterest.com/pin/448952656620921015/'
      },
      bannersArr: [
        {
          bg: '5695d7338d8c5e2eba2ffa3147250ca2.jpg',
          title: 'Каталог домов',
          text: 'Добро пожаловать в наш каталог домов! Здесь вы найдете все, что нужно для того, чтобы выбрать идеальный дом для вашего отпуска.',
          btnText: 'Show',
          btnLink: '/houses'
        },
        {
          bg: 'https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
          title: 'Пляжи букита',
          text: ' Здесь вы найдете полезную информацию о самых популярных пляжах Букита. От красивых пейзажей и уединенных уголков до возможностей для серфинга и других видов активного отдыха - все это вы найдете на пляжах Букита.',
          btnText: 'Show',
          btnLink: '/beach'
        },
        {
          bg: 'https://i.pinimg.com/564x/ea/1b/ed/ea1bed5065aadd208bea842c74d6e520.jpg',
          title: 'Never stop exploring the world',
          text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
          btnText: 'Show',
          btnLink: 'https://ru.pinterest.com/pin/448952656620921015/'
        },
        {
          bg: 'brenda-godinez-k4116JZ07S0-unsplash.jpg',
          title: 'Never stop exploring the world',
          text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
          btnText: 'Show',
          btnLink: '/houses'
        },
        {
          bg: 'brenda-godinez-k4116JZ07S0-unspl (4).jpg',
          title: 'Never stop exploring the world',
          text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
          btnText: 'Show',
          btnLink: 'https://ru.pinterest.com/pin/448952656620921015/'
        },
      ]
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    updateActiveSlide(slideIndex) {
      this.activeSlide = slideIndex
    }
  },
  computed: {
    isAdmin() {
      return isAdmin(this.$store.state.user?.email)
    },
    getIndex() {
      const index = this.activeSlide + 1
      const maxNumber = this.bannersArr.length
      const first = index < 10 ? '0' + index : index
      const max = maxNumber < 10 ? '0' + maxNumber : maxNumber

      return first + '/' + max
    }
  },
  setup() {

  },
}
</script>

<style lang="scss">
.firstBanner {
  position: relative;
  width: 100%;
  max-width: 100vw;
  min-height: 740px;

  &-title {
    font-size: 60px;
    font-weight: 700;
    max-width: 370px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
  }

  &-text {
    color: #fff;
    font-size: 24px;
    opacity: 0.7;
    margin: 15px 0 25px;
    font-weight: 300;
    max-width: 450px;
  }

  &-l {
    padding-left: 40px;
    padding-right: 50px;
    min-height: 550px;
  }

  &-wrp {
    min-height: 740px;
    height: 100vh;
    display: flex;
    padding: 80px 0 30px;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    z-index: 10;
  }

  &-r {
    width: calc(80% - 400px);
  }

  &-bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    left: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      z-index: 2;
      background: rgba(0, 0, 0, 0.55);
    }
  }
  @media (max-width: 1400px) {
    .firstBanner-r{
      width: calc(80% - 200px);
    }
  }
  @media (max-width: 900px) {
    .firstBanner-r{
      width: 100%;
      margin-left: 25px;
    }
    .firstBanner{
      max-height: initial;
    }
    .firstBanner-l{
      min-height: initial;
      padding-left: 25px;
      margin: 50px 0;
    }
    .firstBanner-wrp{
      display: block;
      height: initial;
    }
  }
  @media (max-width: 550px) {
    .firstBanner-title{
      font-size: 50px;
    }
    .firstBanner-text{
      font-size: 20px;
      margin-top: 10px;
    }
    .slick-slide{
      width: 220px;
    }
    .slider-item-title{
      font-size: 20px;
    }
    .slider-item-text{
      font-size: 14px;
    }
    .slick-arr{
      width: 45px;
      height: 45px;
    }
    .slick-info{
      padding-right: 40px;
    }
    .slick-index{
      font-size: 60px;
    }
  }
}

.howWork {
  display: grid;
  //grid-template-columns: 230px 1fr;
  padding: 100px;

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 15px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
      object-fit: cover;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      z-index: 1;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      transition: .4s;
      background: rgba(0, 0, 0, 0.55);
    }
  }

  &-item {
    position: relative;
    min-height: 350px;
    color: #fff;
    flex-grow: 1;
    padding: 15px 20px;
    background: #fff;
    border-radius: 10px;
    //overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.58);
    transition: .65s ease-in-out;

    .v-btn {
      transition: .4s;
      //opacity: 0;
    }
  }

  &-info {
    position: relative;
    z-index: 4;
    p{
      color: #333;
      font-size: 15px;
    }
  }

  &-number {
    font-size: 65px;
    font-weight: 700;
    line-height: 1.1;
  }

  &-text {
    //opacity: 0;
    opacity: 0.8;
    transition: .4s;
  }

  &-title {
    opacity: 1;
    font-size: 20px;
    margin-bottom: 7px;
    font-weight: 600;
  }

  &_r {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:25px;
    border-radius: 10px;

    //&:hover {
    //  .howWork-item {
    //    width: calc(100% / 14);
    //  }
    //}
  }
}
@media (max-width: 1400px) {
  .howWork{
    padding: 30px 20px;
  }
}
@media (max-width: 950px) {
  .howWork_r{
    grid-template-columns: 1fr 1fr;
  }
  .howWork-text,.howWork-info p {
    font-size: 14px;
  }
}
@media (max-width: 650px) {
  .howWork_r {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  .howWork-item {
    min-height: initial;
    padding: 25px;

  }
}
</style>
