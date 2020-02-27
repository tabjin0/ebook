import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import getters from './getters'// 不是node_modules中的需要添加./
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book
  },
  getters,
  actions
})
