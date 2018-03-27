<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">出入金统计</p>

      <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">MT4账号</span>
          <Input v-model="filter_obj.mt4_account" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">类型</span>
          <Select v-model="filter_obj.status" style="width:200px">
            <Option value="-1">出金</Option>
            <Option value="0">入金</Option>
          </Select>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">时间范围</span>
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
            <th width="100">订单编号</th>
            <th width="100">MT4账号</th>
            <th width="150">时间</th>
            <th width="50">金额</th>
            <th width="200">备注</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{'2018032600'+i}}</td>
            <td>40331504</td>
            <td>2018/3/6 10:51:55</td>
            <td>88.10</td>
            <td>无备注</td>
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
        mt4_account: '',
        type: '',
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