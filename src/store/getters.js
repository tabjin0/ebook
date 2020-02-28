/**
 * vue-ebook  getters
 * Created by Tabjin 2020-02-24-14-38
 */
const book = {
  fileName: state => state.book.fileName,
  menuVisible: state => state.book.menuVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize
}
export default book
