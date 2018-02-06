<template>
  <div class="app-header" flex="main:justify cross:center">
    <Breadcrumb>
        <breadcrumb-item to="/">主页</breadcrumb-item>
        <template v-if="headerTitle.length">
          <breadcrumb-item v-for="item in headerTitle" :key="item">{{item}}</breadcrumb-item>
        </template>
    </Breadcrumb>
    <i-button style="position:absolute;right:120px;" @click="skip2backend" shape="circle" size="small">控制台</i-button>
    <Dropdown @on-click="userHandle($event)">
      <a href="javascript:void(0)">
        <img :src="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'" width="35" class="user-avator" alt="">
        {{userInfo.Name}}
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
