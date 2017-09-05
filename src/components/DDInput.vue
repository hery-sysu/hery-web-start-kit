<template>
  <div class="dd-input" tabindex="0">
    <input
      class="input-view"
      ref="input"
      :value="currentValue"
      :type="type"
      :placeholder="placeholder"
      :max="max"
      :min="min"
      @input="updateValue"
      @change="onChange"
       />
    <div class="right-slot">
      <slot name="right-view"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'number'
    },
    value: [String, Number],
    placeholder: String,
    max: Number,
    min: Number
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    updateValue: function (event) {
      this.currentValue = event.target.value
      this.$emit('input', this.currentValue)
    },
    onChange: function (event) {
      this.$emit('change', this.currentValue)
    }
  }
}
</script>

<style lang="less">
  ::-webkit-input-placeholder{color:#d2d2d2;}
  ::-moz-placeholder{color:#d2d2d2;}
  :-moz-placeholder{color:#d2d2d2;}
  .dd-input {
    border: 0;
    height: 49px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background: #FFFFFF;
    .input-view {
      flex: 1;
      margin: auto 10px;
      border: 0;
      height: 39px;
      outline: none;
      text-align: left;
      font-size: 18px;
      color: #333333;
    }
    .right-slot {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .dd-input:focus {
    border: 1px solid #67C0FF;
    box-shadow: 0px 0px 5px 0px #74CAFF;
  }
</style>
