<template>
  <div class="main">
    <div class="left-bar">
      <i-Menu :active-name="openStatus.classItem" theme="dark" width="auto" :open-names="openStatus.class">
        <div class="left-bar-logo">mforex-cloud</div>
        <Submenu name="1">
            <template slot="title">
                <Icon type="social-usd"></Icon>
                资金操作
            </template>
            <menu-item name="1-1">账户入金</menu-item>
            <menu-item name="1-2">入金记录</menu-item>
            <menu-item name="1-3">账户出金</menu-item>
            <menu-item name="1-4">出金记录</menu-item>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="arrow-graph-up-right"></Icon>
                数据统计
            </template>
            <menu-item name="2-1">历史交易订单</menu-item>
            <menu-item name="2-2">当前交易订单</menu-item>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="person-stalker"></Icon>
                代理商办公室
            </template>
            <menu-item name="3-1">客户名单</menu-item>
            <menu-item name="3-2">佣金查询</menu-item>
            <menu-item name="3-3">交易单查询</menu-item>
            <menu-item name="3-4">出入金查询</menu-item>
            <menu-item name="3-5">我的邀请链接</menu-item>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="android-bicycle"></Icon>
                跟单系统
            </template>
            <menu-item name="4-1">牛人榜</menu-item>
            <menu-item name="4-2">成为牛人</menu-item>
            <menu-item name="4-3">我的粉丝</menu-item>
            <menu-item name="4-4">我的牛人</menu-item>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="person"></Icon>
                个人设置
            </template>
            <menu-item name="5-1">账户设置</menu-item>
            <menu-item name="5-2">实名认证</menu-item>
        </Submenu>
      </i-Menu>
    </div>
    <div class="content-body">
      <div class="content-header">
        <main-header></main-header>
      </div>
      <div class="content-app">
        Content
      </div>
      <div class="content-copy">
        2008-2017 &copy; MT4 用户交易平台。
      </div>
    </div>
  </div>
</template>

<script>
import header from './header.vue'
import footer from './footer.vue'
export default {
  created(){

  },
  ready(){

  },
  data(){
    return {
      openStatus:{
        class: ['1'],
        classItem: '1-2'
      }
    }
  },
  method:{

  },
  components:{
    'main-header': header,
    'copy-footer': footer
  },
  computed:{
    isready(){
        return this.$store.getters.getReadyState
      }
  }
}
</script>
