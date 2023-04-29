<template>
  <div>
    <v-btn @click="sendHouse">SEND HOUSE</v-btn>
    <pre>{{ house }}</pre>


    <div style="margin: 50px">
      <v-card>
        <h5>customerRent</h5>
        <h5>Select house id: {{ customerRentSelectedHouseId }}</h5>
        <div v-if="houses.length > 0" style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap: 30px">
          <div v-for="item in houses" :key="item.info.id" @click="customerRentSelectedHouseId = item.id" style="border: 5px solid transparent" :style="{borderColor: customerRentSelectedHouseId === item.id ? 'blue' : ''}">
            <img :src="item.info.img[0]" alt="">
          </div>
        </div>
        <v-form>
          <v-text-field v-model="customerRent.name" label="Name"></v-text-field>
          <div style="display: grid;grid-template-columns: 1fr 1fr;grid-gap: 30px">
            <v-date-picker v-model="customerRent.startRent" type="date"
                           format="MM/DD/YYYY" label="Start date"></v-date-picker>
            <v-date-picker v-model="customerRent.nextPayment" type="date"
                           format="MM/DD/YYYY" label="End date"></v-date-picker>
          </div>
          <v-text-field v-model="customerRent.totalPrice" label="Total Price"></v-text-field>
          <v-checkbox v-model="customerRent.cleaning" label="Cleaning"></v-checkbox>
          <v-checkbox v-model="customerRent.internet" label="Internet"></v-checkbox>
          <v-text-field v-model="customerRent.light" label="Light"></v-text-field>
          <v-btn @click="sendCustomerRent()">Save</v-btn>
        </v-form>
      </v-card>


    </div>
    <!--    <v-form class="d-none">-->
    <!--      <v-container>-->
    <!--        <h3>Общая информация</h3>-->

    <!--        <v-file-input label="Выберите файлы" v-model="files" multiple @change="previewImages"/>-->
    <!--        <v-row>-->
    <!--          <v-col v-for="(img, index) in previewImgs" :key="index" cols="2">-->
    <!--            <img :src="img" class="preview-img">-->
    <!--          </v-col>-->
    <!--        </v-row>-->

    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.name" label="Название"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.location" label="Местоположение"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.rooms" label="Количество комнат"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.bethRooms" label="Количество ванных комнат"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.distanceToTheBeach" label="Расстояние до пляжа"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.status" label="Статус"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.price.week" label="Цена за неделю"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.price.daily" label="Цена за день"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.price.monthlyX1" label="Цена за месяц (на 1 месяц)"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.price.monthlyX2" label="Цена за месяц (на 2 месяца)"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.price.monthlyX3" label="Цена за месяц (на 3 месяца)"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.price.yearly" label="Цена за год"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="info.ac" label="Количество кондиционеров"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12">-->
    <!--            <v-textarea v-model="info.description" label="Описание"></v-textarea>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <h3>Удобства</h3>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.kitchen" label="Кухня"></v-switch>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.tv" label="tv"></v-switch>-->
    <!--          </v-col>-->

    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.parking" label="Парковка"></v-switch>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.fridge" label="Холодильник"></v-switch>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.workTable" label="Рабочее место"></v-switch>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.garden" label="Сад"></v-switch>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-switch v-model="info.hot" label="Hot"></v-switch>-->
    <!--          </v-col>-->
    <!--        </v-row>-->

    <!--        <br>-->
    <!--        <hr>-->
    <!--        <br>-->

    <!--        <h5>rentPrice:</h5>-->
    <!--        <pre>{{ rentPrice }}</pre>-->
    <!--        <v-row>-->

    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-date-picker v-model="rentPrice.nextPayment" label="Следующий платеж"></v-date-picker>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-date-picker v-model="rentPrice.startRent" label="Начало аренды"></v-date-picker>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="rentPrice.longRent" label="Долгосрочная аренда"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model.number="rentPrice.yearly" label="Годовой платеж"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model.number="rentPrice.monthly" label="Месячный платеж"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-select v-model="selectedContactType" :items="contactTypes" label="Тип контакта"></v-select>-->
    <!--            <v-text-field v-model="newContact.name" label="Имя"></v-text-field>-->
    <!--            <v-text-field v-model="newContact.value" label="Значение"></v-text-field>-->
    <!--            <v-btn @click.prevent="addContact" color="primary">Добавить контакт</v-btn>-->
    <!--            <v-list>-->
    <!--              <v-subheader>Контакты</v-subheader>-->
    <!--              <v-list-item v-for="(contact, index) in rentPrice.contacts" :key="index">-->
    <!--                <v-list-item-content>-->
    <!--                  <v-list-item-title>{{ contact.name }}</v-list-item-title>-->
    <!--                  <v-list-item-subtitle>{{ contact.value }} ({{ contact.type }})</v-list-item-subtitle>-->
    <!--                </v-list-item-content>-->
    <!--                <v-list-item-action>-->
    <!--                  <v-btn icon @click.prevent="removeContact(index)">-->
    <!--                    <v-icon>mdi-delete</v-icon>-->
    <!--                  </v-btn>-->
    <!--                </v-list-item-action>-->
    <!--              </v-list-item>-->
    <!--            </v-list>-->
    <!--          </v-col>-->
    <!--        </v-row>-->

    <!--        <br>-->
    <!--        <hr>-->
    <!--        <br>-->
    <!--        <h5>customerRentPrice</h5>-->
    <!--        <pre>{{ customerRentPrice }}</pre>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="customerRentPrice.name" label="Имя арендатора"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-select v-model="selectedContactTypeCustomer" :items="contactTypes" label="Тип контакта"></v-select>-->
    <!--            <v-text-field v-model="newContactCustomer.name" label="Имя контакта"></v-text-field>-->
    <!--            <v-text-field v-model="newContactCustomer.value" label="Значение контакта"></v-text-field>-->
    <!--            <v-btn @click.prevent="addContact" color="primary">Добавить контакт</v-btn>-->
    <!--            <v-list>-->
    <!--              <v-subheader>Контакты</v-subheader>-->
    <!--              <v-list-item v-for="(contact, index) in customerRentPrice.contacts" :key="index">-->
    <!--                <v-list-item-content>-->
    <!--                  <v-list-item-title>{{ contact.name }}</v-list-item-title>-->
    <!--                  <v-list-item-subtitle>{{ contact.value }} ({{ contact.type }})</v-list-item-subtitle>-->
    <!--                </v-list-item-content>-->
    <!--                <v-list-item-action>-->
    <!--                  <v-btn icon @click.prevent="removeContact(index)">-->
    <!--                    <v-icon>mdi-delete</v-icon>-->
    <!--                  </v-btn>-->
    <!--                </v-list-item-action>-->
    <!--              </v-list-item>-->
    <!--            </v-list>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-date-picker v-model="customerRentPrice.startRent" label="Начало аренды"></v-date-picker>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-date-picker v-model="customerRentPrice.nextPayment" label="Следующий платеж"></v-date-picker>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model.number="customerRentPrice.longRent" label="Длительность аренды"></v-text-field>-->
    <!--          </v-col>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model.number="customerRentPrice.totalPrice" label="Стоимость аренды"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--        <v-row>-->
    <!--          <v-col cols="12" sm="6">-->
    <!--            <v-text-field v-model="customerRentPrice.paymentLong" label="Срок оплаты"></v-text-field>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <!--      </v-container>-->

    <!--      <pre>{{ info }}</pre>-->
    <!--    </v-form>-->
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return {
      customerRentSelectedHouseId: null,
      customerRent: {
        name: '',
        startRent: '',
        nextPayment: '',
        totalPrice: 25000000,
        cleaning: true,
        internet: true,
        light: 1000000,
      },

      house: {
        info: {
          id: 5,
          name: 'Ari House 2BD',
          location: 'Center Bukit',
          locationMiniImg: 'Screenshot_7.png',
          rooms: 2,
          bethRooms: 3,
          kitchen: true,
          tv: false,
          ac: 2,
          parking: true,
          fridge: true,
          workTable: true,
          garden: true,
          distanceToTheBeach: null,
          price: {
            monthlyX1: 19000000,
            monthlyX2: 17000000,
            monthlyX3: 15000000,
            yearly: null,
            week: null,
            daily: 750000,
          },
          description: ``,
          hot: false,
          img: [
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2Fphoto_7_2023-04-25_18-43-37.jpg?alt=media&token=3d39832a-4bb0-4716-8c84-ad1e7ef2a156',
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2Fphoto_8_2023-04-25_18-43-37.jpg?alt=media&token=19beb2de-a9ea-4330-b17f-c1ed57d45a3a',
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2Fphoto_3_2023-04-25_18-43-37.jpg?alt=media&token=ffa0f683-043a-4539-8c59-738b1eed3cf1',
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2FIMG_0601.jpeg?alt=media&token=535b1e83-711d-47a2-b437-3715abb4e57d',
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2Fphoto_10_2023-04-25_18-43-37.jpg?alt=media&token=f9d23ab6-f479-4fef-a7b7-dd1a2a622e35',
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2Fphoto_2_2023-04-25_18-43-37.jpg?alt=media&token=7198655f-01b1-45f5-ae75-56c8d84b4df4',
            'https://firebasestorage.googleapis.com/v0/b/vue-main-42e70.appspot.com/o/Ari%2Fphoto_6_2023-04-25_18-43-37.jpg?alt=media&token=0f53f931-7ecd-44d6-9e69-7543ee1a343e',
          ],
        },
        rentPrice: {
          longRent: '180 days', // days
          startRent: '01/01/2023',
          nextPayment: '01/01/2024',
          yearly: 70000000,
          monthly: null,
          contacts: []
        },
        customerRentPrice: [
          {
            name: 'Anatoliy',
            contacts: [],
            startRent: '02/18/2023',
            nextPayment: '04/18/2023',
            totalPrice: 34000000,
            cleaning: true,
            internet: true,
            light: 0,
          },
        ],
        rentedInfo: [
          {}
        ],
        ourPayments: {
          internet: {
            bank: '',
            name: '',
            code: '',
            owner: '',
            bankNumber: '',
          },
          water: {
            number: '',
            img: ''
          },
        },
      },
      selectedContactType: 'phone',
      newContact: {
        name: '',
        value: '',
        type: 'phone'
      },
      files: [],
      previewImgs: [],
      info: {
        id: 2,
        name: '',
        location: '',
        locationMiniImg: '',
        rooms: null,
        bethRooms: null,
        kitchen: null,
        tv: null,
        ac: null,
        parking: null,
        fridge: null,
        workTable: null,
        garden: null,
        distanceToTheBeach: null,
        price: {
          monthlyX1: null,
          monthlyX2: null,
          monthlyX3: null,
          yearly: null,
          week: null,
          daily: null,
        },
        description: ``,
        status: '',
        hot: null,
        img: [],
      },
      rentPrice: {
        longRent: '',
        startRent: '',
        nextPayment: '',
        yearly: 0,
        monthly: 0,
        contacts: [
          {
            name: '',
            value: '',
            type: 'wp'
          }
        ]
      },
      customerRentPrice: [
        {
          name: 'Anatoly',
          contacts: [],
          startRent: '',
          nextPayment: '',
          longRent: 60,
          totalPrice: 34000000,
          paymentLong: '2 days',
        },
      ],
      contactTypes: ['phone', 'email', 'whatsapp', 'telegram'],
      selectedContactTypeCustomer: 'phone',
      newContactCustomer: {
        name: '',
        value: '',
        type: 'phone'
      },
      rentedInfo: [
        {}
      ],
      ourPayments: {
        internet: {
          address: '',
          bank: '',
          bankNumber: '',
        },
        water: {
          img: '',
          number: ''
        },
      }
    }
  },
  mounted() {
    this.$store.dispatch('houses/fetchHouses')
  },
  computed: {
    loading(){
      return this.$store.state.houses.loading
    },
    houses() {
      return this.$store.state.houses.houses
    },
  },
  methods: {
    sendHouse() {
      this.$fire.firestore.collection('houses').add(this.house)
    },
    sendCustomerRent(){
      if(!this.customerRentSelectedHouseId) return alert('Select house')

      const houseRef = this.$fire.firestore.collection('houses').doc(this.customerRentSelectedHouseId)

      const customerRentNew = {
        ...this.customerRent,
        startRent: this.$moment(this.customerRent.startRent, 'YYYY-MM-DD').format('MM/DD/YYYY'),
        nextPayment: this.$moment(this.customerRent.nextPayment, 'YYYY-MM-DD').format('MM/DD/YYYY')
      }

      houseRef.get().then(doc => {
        const currentCustomerRent = doc.data().customerRentPrice || []

        const newCustomerRent = [...currentCustomerRent, { // добавляем новый объект в массив
          // объект, который нужно добавить
          ...customerRentNew
        }]
        houseRef.update({ customerRentPrice: newCustomerRent }) // обновляем значение массива в документе
        alert('GOOD')
      })
    }
  }
}
</script>

<style scoped>

</style>
