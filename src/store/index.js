import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user.js'
import Data from './modules/data.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    User,
    Data
  }
})

export default store
