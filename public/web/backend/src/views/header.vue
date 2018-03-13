<template>
  <div class="backend-header">
    <div class="floatL header-item" @click="toIndex">
      <img width="30" src="/img/backend_icon.svg" alt="">
    </div>
    <div class="floatL header-item" @click="toIndex">管理控制台</div>
    <div class="floatR header-item">
      <img width="30" src="/images/avatar.svg" alt="">
      <ul class="more-info right">
        <li class="info-item" @click="logout">退出登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    created(){

    },
    ready(){

    },
    data(){
      return {
        msg: 'Welcome to Exciting-hub'
      }
    },
    methods:{
      logout: function(key) {
        util.logout();
      },
      toIndex: function() {
        this.$router.push({ path: '/' });
      }
    },
    components:{

    },
    computed:{
      userInfo(){
        return this.$store.getters.getUserInfo
      },
      headerTitle(){
        return this.$store.getters.getHeaderTitle
      }
    }
  }
</script>
