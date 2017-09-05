<template lang="html">
  <div class="water-status" :style="styles">
    <div class="water-status-title">
      <span>{{type === "cold" ? "纯水" : "热水"}}</span>
    </div>
    <div class="water-status-detail">
      <div class="water-status-value">{{value}}<sup class="badge">{{type === "cold" ? "TDS" : "&#8451;"}}</sup></div>
      <div class="water-status-icon">
        <img :src="iconUrl" width="20px" height="20px"/>
      </div>
    </div>
    <div class="water-status-desc">
      <span>{{description}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      validator (value) {
        return ['cold', 'hot'].indexOf(value) > -1
      }
    },
    value: Number,
    status: {
      type: String,
      validator (value) {
        return ['heating', 'keepwarming', 'unheated'].indexOf(value) > -1
      }
    }
  },
  computed: {
    description () {
      if (this.type === 'cold') {
        if (this.value >= 300) {
          return '水质差，口感差，不适合饮用'
        } else if (this.value >= 100) {
          return '纯度一般，不建议饮用'
        } else {
          return '纯度较高，可直接饮用'
        }
      } else {
        if (this.status === 'heating') {
          return '加热中'
        } else if (this.status === 'keepwarming') {
          return '保温中'
        } else {
          return '未加热'
        }
      }
    },
    styles () {
      let textColor
      if (this.type === 'cold') {
        if (this.value > 200) {
          textColor = '#ACACAC'
        } else if (this.value > 100) {
          textColor = '#FFC56C'
        } else {
          textColor = '#67C0FF'
        }
      } else {
        textColor = '#FF6A72'
      }
      return {
        color: textColor
      }
    },
    iconUrl () {
      let url
      if (this.type === 'cold') {
        if (this.value > 200) {
          url = require('./../assets/images/icon_watergray.png')
        } else if (this.value > 100) {
          url = require('./../assets/images/icon_wateryellow.png')
        } else {
          url = require('./../assets/images/icon_waterblue.png')
        }
      } else {
        if (this.status === 'heating') {
          url = require('./../assets/images/firesmall.gif')
        } else if (this.status === 'keepwarming') {
          url = require('./../assets/images/icon_heat.png')
        } else {
          url = require('./../assets/images/icon_waterred.png')
        }
      }
      return url
    }
  }
}
</script>

<style lang="scss">
.water-status {
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.15);
  border-radius: 4px;
  .water-status-title {
    width: 90%;
    height: 36px;
    text-align: center;
    border-bottom-color: #acacac;
    border-bottom-style: dotted;
    border-bottom-width: 1px;
    span {
      line-height: 36px;
      font-size: 14px;
    }
  }
  .water-status-detail {
    flex-grow: 1;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    .water-status-value {
      font-size: 50px;
      width: 60px;
      .badge {
        font-size: 10px;
        vertical-align: text-top;
      }
    }
  }
  .water-status-desc {
    margin-bottom: 10px;
    font-size: 10px;
  }
}

</style>
