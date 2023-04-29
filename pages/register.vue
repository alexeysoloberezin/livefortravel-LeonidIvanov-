<template>
  <div class="register">
    <h2 class="text-center pl-4">Register or login</h2>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
export default {
  name: "register",

  methods: {
    send() {
      console.log("send")
    },
    async createUser() {
      try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        console.error("MY ERROR ", e)
      }
    },

  },
  mounted() {
    const context = this
    const firestore = this.$fire.firestore
    const firebaseui = require('firebaseui')
    require('firebaseui/dist/firebaseui.css')

    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fire.auth)

    const config = {
      signInOptions: [
        this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
        this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/testD',
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl) {
          firestore.collection('users').where('uid', '==', authResult.additionalUserInfo.profile.id || authResult.user.multiFactor.user.uid).get()
            .then(querySnapshot => {
              if (querySnapshot.empty) {
                // если документа нет, то добавляем новый документ с уникальным идентификатором поля
                firestore.collection('users').add({
                  displayName: authResult.additionalUserInfo.profile.name || authResult.user.multiFactor.user.displayName || '',
                  picture: authResult.additionalUserInfo.profile.picture || '',
                  email: authResult.additionalUserInfo.profile.email || authResult.user.multiFactor.user.email || '',
                  uid: authResult.additionalUserInfo.profile.id || authResult.user.multiFactor.user.uid
                }).then(docRef => {
                  console.log("Docref", docRef)
                  context.$router.push('/')
                }).catch(err => {
                  console.log('err', err)
                })
              }
            }).catch(error => {
            console.error('Error getting documents: ', error)
          })

        }
      }
    }

    ui.start('#firebaseui-auth-container', config)
  },

  data: () => ({
    valid: false,
    firstname: '',
    password: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Name is requred.'
      },
      value => {
        if (value?.length <= 10) return true

        return 'Name must be less than 10 characters.'
      },
    ],
    email: '',
  }),
}
</script>

<style>
.register .firebaseui-auth-container{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>


