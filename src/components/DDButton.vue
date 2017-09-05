<template>
  <button
    class="dd-button"
    :disabled="disabled"
    :class="['dd-button-size--' + size, 'dd-button-type--' + type, { 'is-disabled': disabled }]">
    <slot name="icon"></slot>
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '确定'
    },
    disabled: Boolean,
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return ['large', 'normal'].indexOf(value) > -1
      }
    },
    type: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'default'].indexOf(value) > -1
      }
    }
  }
}
</script>

<style lang="css">
  .dd-button {
    height: 49px;
    border-radius: 37px;
    border: 0;
    color: white;
    display: block;
    font-size: 17px;
    outline: 0;
    text-align: center;
    background-color: #38d3d9;
    margin: 0 auto;
  }

  .dd-button-size--large {
    width: 90%;
  }

  .dd-button-size--normal {
    width: 210px;
  }

  .dd-button-type--primary {
    background: #74CAFF;
  }

  .dd-button-type--primary.is-disabled {
    background-color: #cccccc;
  }
  .dd-button-type--primary:active {
    background: #55B2F4;
  }

  .dd-button-type--default {
    background: #FFFFFF;
    border: 1px solid #74CAFF;
    color: #74CAFF;
  }

  .dd-button-type--default.is-disabled {
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    color: #CCCCCC;
  }
  .dd-button-type--default:active {
    background: #E7F6FF;
  }

</style>
