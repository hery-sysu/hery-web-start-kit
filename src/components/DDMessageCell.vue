<template lang="html">
  <div class="message-cell-container">
    <div class="message-header">
      <span class="message-header-title">{{message.title}}</span>
      <span class="message-header-date">{{message.date}}</span>
    </div>
    <div class="message-body">
      {{message.content}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: Object
  }
}
</script>

<style lang="scss">
.message-cell-container {
  width: auto;
  min-height: 72px;
  background: #FFFFFF;
  box-shadow: 0px 1px 2.5px 0px rgba(0,0,0,0.20);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 12px;
  .message-header {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    .message-header-title {
      font-size: 17px;
      color: #333333;
    }
    .message-header-date {
      font-size: 12px;
      color: #CCCCCC;
    }
  }
  .message-body {
    margin: 0 10px 10px;
    width: 95%;
    font-size: 14px;
    color: #ACACAC;
    flex: 1;
  }
}
</style>
