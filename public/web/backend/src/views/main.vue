<template>
  <div class="backend-main">
    <main-header></main-header>
    <div class="content-body">
      <left-bar></left-bar>
      <div class="content-app">
        <!-- <router-view></router-view> -->
      </div>
      <!-- <copy-footer></copy-footer> -->
    </div>
  </div>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'
import leftBar from './leftBar.vue'
export default {
  created(){
    let userinfo = $('#user_info').val();
    let userInfo = JSON.parse(userinfo);
    this.$store.dispatch('initUserInfo',userInfo);
  },
  ready(){

  },
  data(){
    return {
      
    }
  },
  method:{

  },
  components:{
    'main-header': header,
    'copy-footer': footer,
    'left-bar': leftBar
  },
  computed:{
    
  }
}
</script>
