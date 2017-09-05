<template lang="html">
  <div class="filter-container">
    <slot name="filter-title"></slot>
    <d-d-progress :percent="lifePercent">
      <span class="progress-right" slot="progress-right">{{lifePercent}}%</span>
    </d-d-progress>
    <span class="filter-outdate-attention" v-if="outDate">已过期，请及时更换滤芯，并重置</span>
    <button class="filter-reset" v-if="shouldReset" type="button">重置滤芯</button>
  </div>
</template>

<script>
import DDProgress from './DDProgress'
export default {
  props: {
    lifePercent: Number
  },
  components: {
    DDProgress
  },
  computed: {
    outDate () {
      return this.lifePercent <= 0
    },
    shouldReset () {
      return this.lifePercent <= 10
    }
  }
}
</script>

<style lang="scss">
.filter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: inherit;
  margin: 0 12px;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.15);
  border-radius: 4px;
  padding: 10px;

  .progress-right {
    font-size: 9px;
    color: #ACACAC;
    margin: 0 0 0 6px;
  }

  .filter-outdate-attention {
    font-size: 14px;
    color: #FF6A72;
  }

  .filter-reset {
    background: #FFFFFF;
    border: 1px solid #63D790;
    border-radius: 22px;
    width: 80px;
    height: 25px;
    color: #63D790;
    margin-top: 10px;
    outline: 0;

    &:active {
      opacity: 0.4;
    }
  }
}
</style>
