<template>
  <div class="backend-header">
    <div class="floatL header-item">
      <img width="30" src="/images/backend_icon.svg" alt="">
    </div>
    <div class="floatL header-item">管理控制台</div>
    <div class="floatR header-item">
      <img width="30" src="/images/avatar.svg" alt="">
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
      userHandle: function(key) {
        switch (key) {
          case 'myProfile':
            console.log('123')
            break;
          case 'logout':
            util.logout();
            break;
        }
      },
      skip2backend: function() {
        location.href = '/backend'
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
