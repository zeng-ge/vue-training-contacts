import Vue from 'vue'
import Vuex from 'vuex'
import contact from './contact'

Vue.use(Vuex)

const Logger = store => {
  store.subscribeAction((action, state) => {
    console.log(action, state)
  })
}

export default new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    contact
  },
  plugins: process.env.NODE_ENV === 'development' ? [Logger] : []
})
