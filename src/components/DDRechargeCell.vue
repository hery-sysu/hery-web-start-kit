<template>
  <div class="dd-recharge-cell" :class="{ selected: selected }" @click="cellClicked">
    <div class="dd-recharge-container">
      <div class="recharge-cell-activity">
        <img src="./../assets/images/icon_discount.png" />
      </div>
      <div class="recharge-cell-total">20元</div>
      <div class="recharge-cell-desc">48元</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // rechargeItem: Object,
    // selected: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    cellClicked: function () {
      // this.$emit('clicked', this.rechargeItem.id)
      this.selected = !this.selected
      console.log('cellClicked')
    }
  }
}
</script>

<style lang="scss">
  .dd-recharge-cell {
    background: #FFFFFF;
    min-width: 170px;
    height: 70px;
    margin: 10px auto;
    .dd-recharge-container {
      background-color: #FFFFFF;
      box-shadow: 0px 1px 2.5px 0px rgba(0,0,0,0.20);
      border-radius: 2px;
      margin: 2px;
      height: 66px;
      .recharge-cell-activity {
        width: 32px;
        height: 32px;
        transform: translate(-1px, -1px);
        // float: left;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .recharge-cell-total {
        text-align: center;
        transform: translateY(-18px);
        height: 32px;
        font-size: 24px;
        color: #4BB1EF;
      }
      .recharge-cell-desc {
        text-align: center;
        transform: translateY(-16px);
        font-size: 12px;
        color: #ACACAC;
      }
    }
  }

  .selected {
    background: #FF6A72;
    border-radius: 2px;
  }
</style>
