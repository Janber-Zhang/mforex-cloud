<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">入金纪录</p>

      <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">账号</span>
          <Input v-model="filter_obj.account" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">代理账号</span>
          <Input v-model="filter_obj.proxy_account" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">组名</span>
          <Input v-model="filter_obj.group_name" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">订单号</span>
          <Input v-model="filter_obj.order_id" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">支付时间</span>
          <date-picker type="daterange" confirm placement="bottom-start" placeholder="请选择日期范围" :value="filter_obj.created_range" style="width: 200px"></date-picker>
        </div>
        <div class="filter-handle" flex="main:left cross:center">
          <i-button style="margin-right: 20px;" type="primary" @click="search()">查询</i-button>
          <i-button @click="clearFilter()">清除</i-button>
        </div>
      </div>

      <!-- 列表 -->
      <table class="list-table">
        <thead>
          <tr>
            <th width="300">订单号</th>
            <th width="200">MT4账号</th>
            <th width="150">姓名</th>
            <th width="100">组名</th>
            <th width="100">入金数量</th>
            <th width="100">转账金额</th>
            <th width="100">币种</th>
            <th width="300">创建时间</th>
            <th width="100">支付状态</th>
            <th width="300">完成时间</th>
            <th width="100">入金状态</th>
            <th width="300">入金时间</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>dingpaybank2017090400000001</td>
            <td>40331504</td>
            <td>技术测试 勿删</td>
            <td>IB206</td>
            <td>100</td>
            <td>700</td>
            <td>USD</td>
            <td>2018/3/6 10:51:55</td>
            <td>已支付</td>
            <td>2018/3/6 10:51:55</td>
            <td>已入金</td>
            <td>2018/3/6 10:51:55</td>
          </tr>
        </tbody>
      </table>

    </Card>
  </div>
</template>

<script>
export default {
  created(){
    this.initFilterObj();
  },
  ready(){

  },
  data(){
    return {
      readonly: true,
      selected_key: '',
      filter_obj: null         //筛选参数
    }
  },
  methods:{
    switchModel(type){
      this.readonly = type;
    },
    selectItem(key){
      if (this.selected_key === key) {
        this.selected_key = '';
      } else {
        this.selected_key = key;
      }
    },
    clearFilter(){
      this.initFilterObj();
    },
    initFilterObj(){
      this.filter_obj = {
        account: '',
        proxy_account: '',
        g_name: '',
        order_id: '',
        created_range: []
      }
    },
    search(){
      this.$Message.error('暂未开放此功能')
    }
  },
  components:{

  },
  computed:{
    disabled: function(){
      return this.selected_key === ''
    }
  }
}
</script>