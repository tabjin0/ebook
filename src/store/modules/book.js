/**
 * vue-ebook  book
 * Created by Tabjin 2020-02-24-10-49
 */
const book = {
  state: {
    fileName: 1,
    menuVisible: false
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENU_VISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible
    }
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
      return commit('SET_FILENAME', fileName)// 返回一个promise对象
    },
    setMenuVisible: ({ commit }, menuVisible) => {
      return commit('SET_MENU_VISIBLE', menuVisible)
    }
  }
}

export default book
