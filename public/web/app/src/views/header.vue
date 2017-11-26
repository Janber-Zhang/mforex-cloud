<template>
  <div class="app_header" flex="main:justify cross:center">
    <p>主页／代理商办公室／客户名单</p>
    <Dropdown @on-click="userHandle($event)">
      <a href="javascript:void(0)">
        <img :src="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'" width="35" class="user_avator" alt="">
        {{'王二'}}
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item name="myProfile">我的信息</Dropdown-item>
        <Dropdown-item name="logout">注销登录</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>

<script>
  export default {
    created(){
      // let users = JSON.parse(JSON.stringify(this.userInfo));
      
    },
    ready(){

    },
    data(){
      return {
        msg: 'Welcome to Exciting-hub',
        userInfo: {}
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
      }
    },
    components:{

    },
    computed:{
      
    }
  }
</script>
