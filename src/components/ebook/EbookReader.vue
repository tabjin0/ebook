<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'
  import { ebookMixin } from '../../utils/mixin'
  import Epub from 'epubjs'

  global.ePub = Epub
  export default {
    name: 'EbookReader',
    mixins: [ebookMixin],
    methods: {
      // 映射
      // ...mapActions(['setMenuVisible']),
      prevPage () {
        if (this.rendition) {
          this.rendition.prev()
          this.hideTitleAndMenu()
        }
      },
      nextPage () {
        if (this.rendition) {
          this.rendition.next()
          this.hideTitleAndMenu()
        }
      },
      toggleTitleAndMenu () {
        if (this.menuVisible) {
          this.setSettingVisible(-1)
        }
        // this.$store.dispatch('setMenuVisible', !this.menuVisible)
        this.setMenuVisible(!this.menuVisible)
      },
      hideTitleAndMenu () {
        // this.$store.dispatch('setMenuVisible', false)
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
      },
      initEpub () {
        const url = 'http://localhost:8085/epub/' + this.fileName + '.epub'
        this.book = new Epub(url)
        this.setCurrentBook(this.book)
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'// 考虑到微信兼容性
        })
        this.rendition.display()
        // 进入屏幕
        this.rendition.on('touchstart', event => {
          // console.log('event:', event)
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp// 时间
        })
        // 离开屏幕
        this.rendition.on('touchend', event => {
          // console.log(event)
          const offsetX = event.changedTouches[0].clientX - this.touchStartX// X轴偏移量
          const time = event.timeStamp - this.touchStartTime// 消耗的时间
          console.log('offsetX：', offsetX, 'time：', time)
          if (time < 500 && offsetX > 40) {
            this.prevPage()
          } else if (time < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
          event.preventDefault()
          event.stopPropagation()
        })
      }
    },
    mounted () {
      const fileName = this.$route.params.fileName.split('|').join('/')
      // this.$store.dispatch('setFileName', fileName).then(() => {
      //   this.initEpub()
      // })
      this.setFileName(fileName).then(() => {
        this.initEpub()
      })
    }
  }
</script>

<style scoped>

</style>
