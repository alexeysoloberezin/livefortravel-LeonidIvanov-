(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{523:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(249);function c(e,t){var n=e.toLocaleString("en-US",{style:"decimal",useGrouping:!0,minimumFractionDigits:0,maximumFractionDigits:0,minimumIntegerDigits:1,currency:"RUB",currencyDisplay:"symbol"});return t&&(n=+n.toFixed(1)),n}},527:function(e,t,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("555450a0",content,!0,{sourceMap:!1})},528:function(e,t,n){"use strict";function c(e,t,n){return"USDT"===t&&n?e/n:"RUB"===t&&n?e*n:e}n.d(t,"a",(function(){return c}))},534:function(e,t,n){"use strict";n(527)},535:function(e,t,n){var c=n(21)((function(i){return i[1]}));c.push([e.i,".hiddenBtn[data-v-2805b2d8]{cursor:pointer;margin:5px 0;-webkit-text-decoration:underline;text-decoration:underline}.priceBox.small .priceBox-item[data-v-2805b2d8]{font-size:16px;grid-template-columns:100px 1fr}.priceBox.small .priceBox-item.small[data-v-2805b2d8]{font-size:14px}.priceBox.small .priceBox-item>span>span[data-v-2805b2d8]{font-size:13px}.priceBox-item[data-v-2805b2d8]{border-bottom:1px solid hsla(0,0%,86%,.3);color:#4d4d4d;display:grid;font-size:19px;font-weight:500;grid-template-columns:120px 1fr;padding:8px 0}.priceBox-item span[data-v-2805b2d8]:first-child{font-weight:600}.priceBox-item>span>span[data-v-2805b2d8]{color:hsla(0,0%,52%,.75);font-size:16px}.priceBox-item.small[data-v-2805b2d8]{color:hsla(0,0%,52%,.75);font-size:17px}",""]),c.locals={},e.exports=c},540:function(e,t,n){"use strict";n.r(t);n(250),n(61);var c=n(523),r=n(528),l={name:"PriceBox",props:{price:Object,small:Boolean},data:function(){return{rerender:0,finalPrice:[],hide:!0}},watch:{currency:function(){this.rerender++},currencyValue:function(){this.changePrice()}},computed:{smallVal:function(){return window.innerWidth<500||this.small},currencyValue:function(){return this.$store.state.currencyValue},currency:function(){return this.$store.state.currency}},created:function(){var e=this;this.changePrice(),setTimeout((function(){e.changePrice()}),2e3)},methods:{changePrice:function(){for(var e in this.finalPrice=JSON.parse(JSON.stringify(this.price)),this.price)this.finalPrice[e]=Object(r.a)(this.price[e],this.currency,this.currencyValue)},calcPrice:function(e){return Object(c.a)(e)}}},o=(n(534),n(36)),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",{key:e.rerender,class:"priceBox ".concat(e.smallVal?"small":"")},[e.finalPrice.monthlyX1?t("div",{staticClass:"priceBox-item"},[t("span",[e._v(e._s(e.$t("month")))]),e._v(" "),t("span",[e._v(e._s(e.calcPrice(e.finalPrice.monthlyX1))+" "+e._s(e.currency)+" "),t("span",[e._v("/ "+e._s(e.$t("month")))])])]):e._e(),e._v(" "),e.finalPrice.monthlyX2?t("div",{staticClass:"priceBox-item"},[t("span",[e._v(e._s(e.$t("monthsX2")))]),e._v(" "),t("span",[e._v(e._s(e.calcPrice(e.finalPrice.monthlyX2))+" "+e._s(e.currency)+" "),t("span",[e._v("/ "+e._s(e.$t("month")))])])]):e._e(),e._v(" "),e.finalPrice.monthlyX3?t("div",{staticClass:"priceBox-item"},[t("span",[e._v("\n        "+e._s(e.$t("monthsX3"))+"\n      ")]),e._v(" "),t("span",{staticClass:"d-flex align-center"},[e._v(e._s(e.calcPrice(e.finalPrice.monthlyX3))+" "+e._s(e.currency)+" "),t("span",[e._v("/ "+e._s(e.$t("month")))]),e._v(" "),t("svg",{staticClass:"ml-1",staticStyle:{fill:"#ff3a65",width:"18px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("title",[e._v("fire")]),t("path",{attrs:{d:"M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z"}})])])]):e._e(),e._v(" "),e.finalPrice.yearly&&!e.small?t("div",{staticClass:"priceBox-item"},[t("span",[e._v(e._s(e.$t("yearly")))]),e._v(" "),t("span",[e._v(e._s(e.calcPrice(e.finalPrice.yearly))+" "+e._s(e.currency))])]):e._e(),e._v(" "),e.small?e._e():[t("div",{staticClass:"hiddenBtn",on:{click:function(t){e.hide=!e.hide}}},[e._v("\n        "+e._s(e.$t("hiddenPrice"))+"\n      ")]),e._v(" "),e.hide?e._e():t("div",{staticClass:"pl-3"},[e.finalPrice.weekX2?t("div",{staticClass:"priceBox-item small"},[t("span",[e._v(e._s(e.$t("weeksX2")))]),e._v(" "),t("span",[e._v(e._s(e.calcPrice(e.finalPrice.weekX2))+" "+e._s(e.currency))])]):e._e(),e._v(" "),e.finalPrice.week?t("div",{staticClass:"priceBox-item small"},[t("span",[e._v(e._s(e.$t("weeksX1")))]),e._v(" "),t("span",[e._v(e._s(e.calcPrice(e.finalPrice.week))+" "+e._s(e.currency))])]):e._e(),e._v(" "),e.finalPrice.daily?t("div",{staticClass:"priceBox-item small"},[t("span",[e._v(e._s(e.$t("daily")))]),e._v(" "),t("span",[e._v(e._s(e.calcPrice(e.finalPrice.daily))+" "+e._s(e.currency))])]):e._e()])]],2)}),[],!1,null,"2805b2d8",null);t.default=component.exports}}]);