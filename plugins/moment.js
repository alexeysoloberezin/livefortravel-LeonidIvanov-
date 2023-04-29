import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/ru'
import 'moment/locale/en-gb'


if(window.location.pathname.split('/')[1] === 'ru'){
  moment.locale('ru')
}else{
  moment.locale('en')
}

Vue.prototype.$moment = moment
