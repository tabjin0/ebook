/**
 * vue-ebook  actions
 * Created by Tabjin 2020-02-27-09-27
 */
const actions = {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)// 返回一个promise对象
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENU_VISIBLE', menuVisible)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTING_VISIBLE', settingVisible)
  }
}
export default actions
