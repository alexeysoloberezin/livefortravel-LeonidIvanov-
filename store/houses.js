export const state = () => ({
  houses: [],
  loading: false,
  favoriteCount: null,
})

export const mutations = {
  setHouses(state, value) {
    state.houses = value
  },
  setFavoriteCount(state, value){
    state.favoriteCount = value
  },
  refreshHouses(state, value) {
    console.log('refresh HOuses!!!')
    state.houses = JSON.parse(JSON.stringify(state.houses))
  },
  setHousesLoading(state, value) {
    state.loading = value
  },
}

export const actions = {
  async fetchHouses({commit}) {
    commit('setHousesLoading', true)
    try {
      const snapshot = await this.$fire.firestore.collection('houses').get()
      const houses = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      commit('setHousesLoading', false)
      commit('setHouses', houses)
    } catch (error) {
      commit('setHousesLoading', false)
    }
  }
}
