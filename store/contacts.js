export const state = () => ({
  contacts: {
    Telegram: '',
    Instagram: '',
    Facebook: '',
    WhatsApp: '',
  },
})


export const mutations = {
  SET_CONTACTS: (state, value) => {
    state.contacts = value
  },
}


export const actions = {
  async fetchContacts({commit}) {
    try {
      const snapshot = await this.$fire.firestore.collection('contacts').get()
      const contacts = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      if (contacts.length !== 0){
        commit('SET_CONTACTS', contacts[0])
      }
    } catch (error) {
      console.log('ERR contacts', error)
    }
  }
}
