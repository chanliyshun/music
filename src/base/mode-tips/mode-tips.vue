<template>
  <transition name="twinkle">
    <div class="mode-tips" v-show="showFlag" @click.stop="hide">
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      delay: {
        type: Number,
        default: 2000
      }
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.hide()
        }, this.delay)
      },
      hide() {
        this.showFlag = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .mode-tips
    position: fixed
    top: 45%
    transform: translateY(-50%)
    width: 100%
    z-index: 500
    &.twinkle-leave-active
      animation: twinkle-fadeout 0.3s
  @keyframes twinkle-fadeout
    0%
      opacity: 1
    100%
      opacity: 0
</style>
