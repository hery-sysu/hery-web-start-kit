<template lang="html">
  <div class="today-drink">
    <div class="today-drink-date">
      <span>今日饮水量:</span>
    </div>
    <div class="today-drink-volume">
      <div class="volume-normal">
        <span class="volume-normal-title"><img src="./../assets/images/icon_coldwater.png" />冷水</span>
        <span class="volume-normal-value">990ml</span>
      </div>
      <div class="volume-dest">
        <span class="volume-dest-complete">1467</span>
        <span class="volume-dest-total">ml<br />/2000</span>
      </div>
      <div class="volume-hot">
        <span class="volume-hot-title"><img src="./../assets/images/icon_warmwater.png" />热水</span>
        <span class="volume-hot-value">447ml</span>
      </div>
    </div>
    <div class="last-drink">
      <span>上次取水:15:30 200ml热水 耗费0.34元</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.today-drink {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto 12px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.15);
  border-radius: ４px;
  height: inherit;

  .today-drink-date {
    text-align: left;
    align-self: flex-start;
    font-size: 10px;
    color: #ACACAC;
    margin-top: 10px;
    margin-left: 10px;
  }
  .today-drink-volume {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .volume-normal,.volume-hot {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
    }
    .volume-normal {
      margin: auto 0px 20px 19px;
      span {
        font-size: 15px;
        color: #5AB3F2;
      }
      .volume-normal-title {
        font-size: 12px;
        img {
          width: 10px;
          height: 15px;
        }
      }
    }
    .volume-hot {
      margin: auto 19px 20px 0px;
      span {
        font-size: 15px;
        color: #FF6A72;
      }
      .volume-hot-title {
        font-size: 12px;
        img {
          width: 12.5px;
          height: 11px;
        }
      }
    }
    .volume-dest {
      width: 171.5px;
      height: 132.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('./../assets/images/drink_status/pic_water_h06.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transform: translateX(17px);

      .volume-dest-complete {
        font-size: 24px;
        color: #189BCD;
        font-weight: normal;
        transform: translateX(-17px);
      }
      .volume-dest-total {
        font-size: 10px;
        color: #189BCD;
        line-height: 10px;
        text-align: right;
        transform: translateX(-17px);
      }
    }
  }
  .last-drink {
    text-align: center;
    font-size: 9px;
    color: #ACACAC;
    margin-bottom: 10px;
  }
}
</style>
