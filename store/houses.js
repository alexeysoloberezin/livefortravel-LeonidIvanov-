export const state = () => ({
  houses: [],
  loading: false,
  favoriteCount: null,
  selectedInfo: {
    period: null,
    price: null,
    hash: null,
    houseName: null,
  }
})

export const mutations = {
  setHouses(state, value) {
    state.houses = value
  },
  setSelectedInfo(state, value) {
    console.log("V", value)
    state.selectedInfo = value
  },
  setFavoriteCount(state, value){
    state.favoriteCount = value
  },
  refreshHouses(state, value) {
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
