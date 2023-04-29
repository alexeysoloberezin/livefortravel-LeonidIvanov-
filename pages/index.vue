<template>
  <div>
    <div>
      <div class="firstBanner">
        <div class="firstBanner-bg"><img :src="bannersArr[activeBannerIndex].bg" alt=""></div>
        <div class="firstBanner-wrp">
          <div class="firstBanner-l">
            <div class="firstBanner-title">{{ bannersArr[activeBannerIndex].title }}</div>
            <div class="firstBanner-text">{{ bannersArr[activeBannerIndex].text }}</div>
            <v-btn color="success" class="firstBanner-btn" width="180px">{{
                bannersArr[activeBannerIndex].btnText
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
              <div v-for="(item, i) in bannersArr" :key="i" class="slider-item">
                <v-img :src="item.bg" alt="" :aspect-ratio="2/3"/>
                <div class="slider-item-info">
                  <div class="slider-item-title">{{ item.title }}</div>
                  <div class="slider-item-text">{{ item.text }}</div>
                </div>
              </div>
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
        <div class="about mt-16">
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
            <div class="about-title mb-2">О нас</div>
            <div class="about-text">
              <div>Мы - команда профессионалов, которая занимается арендой домов на Бали. Наша компания осуществляет
                долгосрочную аренду домов и вилл на острове, предоставляя качественный сервис для наших клиентов.
              </div>
              <div>Мы не только предлагаем аренду домов на Бали, но и проводим работы по их реставрации и обслуживанию,
                чтобы обеспечить максимальный комфорт для наших гостей. Наша команда усердно трудится, чтобы каждый наш
                клиент получил первоклассное обслуживание и насладился незабываемым отдыхом на Бали.
              </div>
            </div>
            <v-btn class="about-btn my-4" color="success">Контакты</v-btn>
          </div>
        </div>
      </div>


      <div class="whatWeDo container my-16 py-16">
        <div class="whatWeDo-r">
          <div class="whatWeDo-item">
            <h2 class="about-title">What We Do For You</h2>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="sofa.png" alt=""></div>
            <div class="whatWeDo-item-title">Комфорт и доступность</div>
            <div class="whatWeDo-item-text">Мы также стараемся сделать наши услуги доступными и обеспечить комфортное
              проживание в отреставрированных домах на Бали. Мы работаем над тем, чтобы наши клиенты получили наилучший
              сервис и могли насладиться пребыванием в своих домах.
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="shield.png" alt=""></div>
            <div class="whatWeDo-item-title">Легальность</div>
            <div class="whatWeDo-item-text">Мы - легально зарегистрированная компания, которая соответствует всем
              законодательным требованиям и правилам. Это означает, что вы можете работать с нами с уверенностью в том,
              что ваши деньги и личные данные находятся в безопасности.
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="cleanliness.png" alt=""></div>
            <div class="whatWeDo-item-title">Чистота</div>
            <div class="whatWeDo-item-text">Мы предлагаем профессиональную уборку, используя экологически чистые
              средства и методы, чтобы ваш дом был идеально чистым и комфортным для проживания.
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="clock.png" alt=""></div>
            <div class="whatWeDo-item-title">Quick response</div>
            <div class="whatWeDo-item-text">Мы понимаем важность своевременной коммуникации, поэтому всегда быстро
              отвечаем на ваши сообщения и запросы. Вы можете рассчитывать на нас, когда вам нужно.
            </div>
          </div>
          <div class="whatWeDo-item">
            <div class="whatWeDo-item-icon"><img src="satisfaction.png" alt=""></div>
            <div class="whatWeDo-item-title">Ensure Your Satisfaction</div>
            <div class="whatWeDo-item-text">Наша главная цель - ваше удовлетворение. Мы тесно сотрудничаем с вами, чтобы
              понимать ваши потребности и предпочтения, и стремимся достичь результатов, превышающих ваши ожидания.
            </div>
          </div>
        </div>
      </div>

      <div class="howWork">
        <div class="howWork_l">
          <div class="about-title mb-4">How its work</div>
        </div>
        <div class="howWork_r">
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/balazs-ketyi-L0nipfx-Ry4-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">01</div>
              <div class="howWork-title">Поиск дома</div>
              <div class="howWork-text">Вы начинаете поиск подходящего варианта аренды жилья. Вы можете перейти на
                страницу с нашими домами и выбрать тот, который будет вам по душе.
              </div>
              <v-btn color="success" outlined class="mt-3">Посмотреть дома</v-btn>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/michael-oxendine-BfkTFeysp34-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">02</div>
              <div class="howWork-title">Выбор подходящего дома</div>
              <div class="howWork-text">После просмотра объявлений вы выбираете подходящие варианты и записываетесь на
                осмотр.
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/michael-oxendine-GHCVUtBECuY-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">03</div>
              <div class="howWork-title">Осмотр дома</div>
              <div class="howWork-text">Приходит время осмотра домов. Вы приходите в назначенное время на просмотр
                выбранных домов. Вы осматриваете дом, проверяете состояние комнат, мебели, сантехники, электрики и других
                элементов.
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/roberto-nickson-rEJxpBskj3Q-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">04</div>
              <div class="howWork-title">Уточнение условий аренды</div>
              <div class="howWork-text">Вы задаете все интересующие вас вопросы по условиям аренды: стоимости,
                дополнительных платежах, сроку аренды, правилам проживания, а также возможности внесения изменений в
                договор.
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/spacejoy-IH7wPsjwomc-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">05</div>
              <div class="howWork-title">Заключение договора</div>
              <div class="howWork-text"> Если вы решаете арендовать дом сразу, вы заключаете договор с нашей компанией.
                Договор обычно включает в себя права и обязанности сторон,
                стоимость аренды, даты платежей и др.
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/spacejoy-YI2YkyaREHk-unsplash.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">06</div>
              <div class="howWork-title">Залог</div>
              <div class="howWork-text">Если аренда начнется через какое-то время, собственник дома может потребовать
                залог в размере 2 млн рупий. Это обеспечивает собственнику защиту от потери дохода в случае, если вы
                откажетесь от аренды.
              </div>
            </div>
          </div>
          <div class="howWork-item">
            <div class="howWork-img"><img src="inter/1618685996_26-p-sovremennii-stil-v-dizaine-interera-27.jpg" alt=""></div>
            <div class="howWork-info">
              <div class="howWork-number">07</div>
              <div class="howWork-title">Переезд</div>
              <div class="howWork-text">После заключения договора и внесения залога, вы можете заселиться в арендованный
                дом и начать жить там с комфортом и уютом.
              </div>
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
        "focusOnSelect": true,
        "infinite": false,
        "arrows": false,
        "speed": 750,
        "variableWidth": true,
        "centerPadding": "20px",
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "touchThreshold": 5
      },
      activeBannerIndex: 0,
      activeSlide: 0,
      bannersArr: [
        {
          bg: 'landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise.jpg',
          title: 'Never stop exploring the world',
          text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
          btnText: 'Show',
          btnLink: 'https://ru.pinterest.com/pin/448952656620921015/'
        },
        {
          bg: 'https://www.pravmir.ru/wp-content/uploads/2021/02/download-936x560.jpg',
          title: 'Never stop exploring the world',
          text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
          btnText: 'Show',
          btnLink: 'https://ru.pinterest.com/pin/448952656620921015/'
        },
        {
          bg: 'landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise.jpg',
          title: 'Never stop exploring the world',
          text: 'Download this Premium PSD File about Landing page design layout for travel website, and discover more than 48 Million',
          btnText: 'Show',
          btnLink: 'https://ru.pinterest.com/pin/448952656620921015/'
        },
        {
          bg: 'https://www.pravmir.ru/wp-content/uploads/2021/02/download-936x560.jpg',
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
}

.howWork {
  display: grid;
  //grid-template-columns: 230px 1fr;
  padding: 100px ;
  &-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:after{
      content: '';
      position: absolute;
      top: 0;
      z-index: 1;
      left: 0;
      width: 100%;
      height: 100%;
      transition: .4s;
      background: rgba(0, 0, 0, 0.45);
    }
  }
  &-item{
    position: relative;
    height: 350px;
    color: #fff;
    flex-grow: 1;
    width: calc(100% / 7);
    overflow: hidden;
    padding: 15px 20px;
    transition: .65s ease-in-out;
    .v-btn{
      transition: .4s;
      opacity: 0;
    }
    &:hover{
      flex-grow: 15;
      border-left: 1px solid rgb(196, 185, 185);
      border-right: 1px solid rgba(196, 185, 185);
      .howWork-text{
        opacity: 0.7;
        transition-delay: .35s;
      }
      .v-btn{
        opacity: 1;
        transition-delay: .35s;
      }
      .howWork-img:after{
        background: rgba(0, 0, 0, 0.6);
      }
    }
  }
  &-info{
    position: relative;
    z-index: 4;
  }
  &-number{
    font-size: 65px;
    font-weight: 700;
    line-height: 1.1;
  }
  &-text{
    opacity: 0;
    transition: .4s;
  }
  &-title{
    opacity: 1;
    font-size: 20px;
    margin-bottom: 7px;
    font-weight: 600;
  }
  &_r {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    &:hover{
      .howWork-item{
        width: calc(100% / 14);
      }
    }
  }
}
</style>
