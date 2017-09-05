<template lang="html">
  <div class="user-info" @click="onClicked">
    <div class="user-info-avatar">
      <img :src="avatar"/>
    </div>
    <div class="user-info-profile">
      <div class="user-info-nickname">hery</div>
      <div class="user-info-drinkdata">
        <span><img src="./../assets/images/icon_coin.png" />300L</span>
        <span><img src="./../assets/images/icon_waterblue.png" />200元</span>
      </div>
    </div>
    <div class="user-info-more">
      <img src="./../assets/images/icon_more.png" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    nickname: state => state.User.nickname,
    mobile: function (state) {
      return state.User.mobile.length > 0 ? state.User.mobile : '13128896272'
    },
    avatar: function (state) {
      return state.User.avatar.length > 0 ? state.User.avatar : 'http://img.zcool.cn/community/01057e56f1ef1632f875a944d7985a.jpg'
    }
  }),
  mounted: function () {
  },
  methods: {
    onClicked: function () {

    }
  }
}
</script>

<style lang="scss">
  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 50px;
    width: auto;
    margin: auto 12px;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.15);
    border-radius: 4px;
    .user-info-avatar {
      border-width: 0;
      width: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      img {
          width: 34px;
          height: 34px;
          border-radius: 17px;
          border-width: 0;
          margin: auto;
      }
    }
    .user-info-profile {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      text-align: left;
      flex-grow: 1;
      align-items: flex-start;
      justify-content: center;
      .user-info-nickname {
        font-size: 14px;
        color: #333333;
      }
      .user-info-drinkdata {
        font-size: 9px;
        color: #ACACAC;
        img {
          height: 11px;
          width: 11px;
        }
      }
    }
    .user-info-more {
      margin-right: 10px;
      img {
        width: 20px;
        height: 5px;
      }
    }
  }
</style>
