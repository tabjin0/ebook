/**
 * vue-ebook  book
 * Created by Tabjin 2020-02-24-10-49
 */
const book = {
  state: {
    fileName: 1,
    menuVisible: false,
    settingVisible: -1, // -1:不显示,0:字体,1:主题,2:进度,3:目录
    defaultFontSize: 16
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENU_VISIBLE: (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    SET_SETTING_VISIBLE: (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    SET_DEFAULT_FONTSIZE: (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    }
  }
}

export default book
