<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">跟单记录</p>
      
      <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">商品名</span>
          <Input v-model="filter_obj.name" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">被跟单账号</span>
          <Input v-model="filter_obj.account_1" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">跟单账号</span>
          <Input v-model="filter_obj.account_2" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">记录时间</span>
          <date-picker type="daterange" confirm placement="bottom-start" placeholder="请选择日期范围" :value="filter_obj.date_range" style="width: 200px"></date-picker>
        </div>
        <div class="filter-handle" flex="main:left cross:center">
          <i-button style="margin-right: 10px;" type="primary" @click="search()">查询</i-button>
          <i-button @click="clearFilter()">清除</i-button>
        </div>
      </div>

      <!-- 列表 -->
      <table class="list-table">
        <thead>
          <tr>
            <th width="200">订单编号</th>
            <th width="200">商品</th>
            <th width="200">被跟单账号</th>
            <th width="200">被跟单编号</th>
            <th width="200">跟单账号</th>
            <th width="200">数量</th>
            <th width="200">交易类型</th>
            <th width="200">开仓价格</th>
            <th width="200">开仓时间</th>
            <th width="200">状态</th>
            <th width="200">时间</th>
            <th width="200">是否平仓</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{'40331504' + i}}</td>
            <td>USD</td>
            <td>wanger001</td>
            <td>123123</td>
            <td>zhangsan001</td>
            <td>2</td>
            <td>in</td>
            <td>18.212</td>
            <td>2018/3/6 10:51:55</td>
            <td>开启</td>
            <td>2018/3/6 10:51:55</td>
            <td>是</td>
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
        account_1: '',
        account_2: '',
        name: '',
        date_range: []
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