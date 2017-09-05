<template>
  <div>
    <div class="router-test">
      <router-link to="/main">首页</router-link>
    </div>
    <p>This is my web start kit! Just pull down and run cmd 'npm run dev'</p>
  </div>
</template>

<script>
  import { getWechatOauthURL, setValueToLocalStorage } from './../utils/util'

  export default {
    created () {
      if (process.env.NODE_ENV === 'development') {
        this.$store.dispatch('getWechatUserinfo')
        this.login()
      } else {
        let code = this.$route.query.code
        console.log(window.location.href)
        // if (getValueFromLocalStorage('uid')) {
        //   this.$store.dispatch('autoLogin').then(reply => {
        //     this.$store.dispatch('getQkUserInfo')
        //     this.$router.push('/main')
        //   })
        // } else {
        if (code && code.length > 0) {
          let originalUrl = document.location.origin + '/' + document.location.pathname.split('/')[1] + '/' + document.location.search
          setValueToLocalStorage('originalUrl', originalUrl)
          this.$store.dispatch('getWechatUserinfo', code).then(reply => {
            this.login()
          })
        } else {
          console.log('oauthURL:' + getWechatOauthURL(document.location.href))
          document.location = getWechatOauthURL(document.location.href)
        }
        // }
      }
    },
    methods: {
      login () {
        this.$store.dispatch('loginWithWechat').then(result => {
          this.$store.dispatch('getDingDongUserInfo')
          // this.$store.dispatch('getBindedDevice').then(result => {
          //   if (this.hasBindedDevice) {
          //     this.$router.push('/main')
          //   } else {
          //     this.$router.push('/add_device')
          //   }
          // })
        }, error => {
          if (error.code === 205005) {
            // this.$router.push('/register')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
p {
  padding: 50px;
}

.router-test {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
</style>
