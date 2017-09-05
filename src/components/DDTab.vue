<template lang="html">
  <div class="dd-tab-container">
    <button
      v-for="(item, index) in tabItems"
      class="dd-tab-item"
      :class="{'first-item': index === 0, 'current-selected': index === currentIndex}"
      type="button"
      :key="index"
      @click="tabSelectedIndex(index)">
      {{item}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tabItems: Array
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  mounted () {
    this.$emit('tabChanged', this.currentIndex)
  },
  methods: {
    tabSelectedIndex (index) {
      if (this.currentIndex !== index) {
        this.$emit('tabChanged', index)
        this.currentIndex = index
      }
    }
  }
}
</script>

<style lang="scss">
.dd-tab-container {
  width: 100%;
  height: 34px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2.5px 0px rgba(0,0,0,0.20);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  .dd-tab-item {
    flex: 1;
    height: auto;
    font-size: 16px;
    color: #ACACAC;
    border: 0;
    border-left: 1px solid #979797;
    background-color: inherit;
    outline: 0;
  }

  .first-item {
    border-left: 0;
  }

  .current-selected {
    color: #74CAFF;
  }
}
</style>
