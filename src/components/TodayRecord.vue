<template lang="html">
  <div class="today-record-container">
    <div class="progress-bar">
      <div class="progress-bar-cold" :style="coldWidth">
      </div>
      <div class="progress-bar-warm" :style="warmWidth">
      </div>
    </div>
    <div class="progress-bar-value">
      <span>已饮{{cold + warm}}ml</span>
      <span><slot></slot>目标{{total}}ml</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
    cold: Number,
    warm: Number
  },
  computed: {
    coldWidth () {
      return {
        width: this.cold * 100 / this.total + '%'
      }
    },
    warmWidth () {
      return {
        width: this.warm * 100 / this.total + '%'
      }
    }
  }
}
</script>

<style lang="scss">
.today-record-container {
  width: 100%;
  .progress-bar {
    background: #F7FCFF;
    border: 1px solid #ACACAC;
    border-radius: 11px;
    height: 25px;
    display: flex;
    overflow: hidden;
    .progress-bar-cold {
      height: inherit;
      background-image: linear-gradient(-180deg, #ACE7FF 0%, #74CAFF 100%);
    }
    .progress-bar-warm {
      height:inherit;
      background-image: linear-gradient(-180deg, #EFFFA6 0%, #FE6D75 100%);
    }
  }
  .progress-bar-value {
    height: 20px;
    display: flex;
    align-items: center;;
    justify-content: space-between;
    font-size: 14px;
    color: #ACACAC;
  }
}
</style>
