/**
 * vue-ebook  mixin
 * Created by Tabjin 2020-02-26-17-07
 */
import { mapActions, mapGetters } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'settingVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setMenuVisible',
      'setFileName',
      'setSettingVisible'
    ])
  }
}
