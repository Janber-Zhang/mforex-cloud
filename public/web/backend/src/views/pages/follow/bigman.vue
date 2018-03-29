<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">牛人列表</p>

      <!-- 操作按钮 -->
      <Button type="success" style="margin-right:10px" size="small" slot="extra" icon="checkmark" :disabled="disabled">通过</Button>
      <Button type="error" style="margin-right:10px" size="small" slot="extra" icon="close" :disabled="disabled">驳回</Button>
      <Button type="info" style="margin-right:10px" size="small" slot="extra" icon="edit" :disabled="disabled">修改参数</Button>
      
      <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">账号</span>
          <Input v-model="filter_obj.account" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">姓名</span>
          <Input v-model="filter_obj.name" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">邮箱</span>
          <Input v-model="filter_obj.email" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">电话</span>
          <Input v-model="filter_obj.phone" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">组</span>
          <Input v-model="filter_obj.group" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">申请时间</span>
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
            <th width="200">MT4账号</th>
            <th width="200">姓名</th>
            <th width="200">显示跟单人数</th>
            <th width="200">显示准确率</th>
            <th width="200">显示盈利</th>
            <th width="200">实际跟单人数</th>
            <th width="200">组</th>
            <th width="200">邮箱</th>
            <th width="200">电话号码</th>
            <th width="200">申请时间</th>
            <th width="200">认证通过时间</th>
            <th width="200">启用状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{'40331504' + i}}</td>
            <td>王二</td>
            <td>12312</td>
            <td>100</td>
            <td>1000000</td>
            <td>2</td>
            <td>group_1</td>
            <td>tet@mfrox.com</td>
            <td>19201232233</td>
            <td>2018/3/6 10:51:55</td>
            <td>2018/3/6 10:51:55</td>
            <td>启用</td>
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
        name: '',
        email: '',
        phone: '',
        group: '',
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