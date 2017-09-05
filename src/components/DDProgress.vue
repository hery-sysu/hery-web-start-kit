<template lang="html">
  <div class="progress-container">
    <slot name="progress-left"></slot>
    <div class="progress-life-total">
      <div class="progress-life-remain" :style="styles"></div>
    </div>
    <slot name="progress-right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    percent: Number
  },
  computed: {
    styles () {
      return {
        width: this.percent + '%',
        backgroundImage: this.percent >= 50
        ? `linear-gradient(-90deg, #A4EDC7 0%, #6BD795 100%)`
        : (this.percent > 10 ? `linear-gradient(-90deg, #FFE4A5 0%, #FFC56C 100%)`
        : `linear-gradient(-90deg, #FFD0C9 0%, #FF5656 100%)`)
      }
    }
  }
}
</script>

<style lang="scss">
.progress-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: inherit;
  .progress-life-total {
    flex: 1;
    height: 7px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.20);
    border-radius: 3px;
    .progress-life-remain {
      height: inherit;
      border-radius: 3px;
      background-image: linear-gradient(-90deg, #A4EDC7 0%, #6BD795 100%);
    }
  }
}
</style>
