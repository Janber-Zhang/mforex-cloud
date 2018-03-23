<template>
  <div class="customer app-warp">
    <Card style="width:100%">
      <p slot="title">客户管理</p>
      <!-- 操作按钮 -->
      <Button type="success" style="margin-right:10px" size="small" slot="extra" icon="plus">新建</Button>
      <Button type="info" style="margin-right:10px" size="small" slot="extra" icon="edit" :disabled="disabled">编辑</Button>
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="checkmark" :disabled="disabled">启用</Button>
      <Button type="error" style="margin-right:10px" size="small" slot="extra" icon="close" :disabled="disabled">停用</Button>
      <Button type="warning" style="margin-right:10px" size="small" slot="extra" icon="information" :disabled="disabled">查看明细</Button>
      <Button style="margin-right:10px" size="small" slot="extra" icon="network" :disabled="disabled">查看代理树</Button>
      <Button style="margin-right:10px" size="small" slot="extra" icon="key" :disabled="disabled">修改密码</Button>
      <Button size="small" slot="extra" icon="forward" :disabled="disabled">转到会员中心</Button>
      
      <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">姓名</span>
          <Input v-model="filter_obj.name" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">MT4账号</span>
          <Input v-model="filter_obj.mt4_account" style="width: 200px" placeholder="请输入查询关键字"></Input>
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
          <span class="filter-item-title">注册时间</span>
          <date-picker type="daterange" confirm placement="bottom-start" placeholder="请选择日期范围" :value="filter_obj.created_range" style="width: 200px"></date-picker>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">代理账号</span>
          <Input v-model="filter_obj.proxy_account" style="width: 200px" placeholder="请输入查询关键字"></Input>
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
            <th width="150">MT4账号</th>
            <th width="200">姓名</th>
            <th width="100">组</th>
            <th width="300">邮箱</th>
            <th width="200">电话</th>
            <th width="100">杠杆</th>
            <th width="200">上级代理帐号</th>
            <th width="100">代理等级</th>
            <th width="300">注册时间</th>
            <th width="100">是否验证</th>
            <th width="100">余额</th>
            <th width="100">盈亏值</th>
            <th width="100">启用状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" @click="selectUser(i)" v-bind:class="{'active': selected_key==i}">
            <td>wanger</td>
            <td>王二</td>
            <td>USD1</td>
            <td>janber@gmail.com</td>
            <td>18200115617</td>
            <td>100</td>
            <td>zhangsan</td>
            <td>2</td>
            <td>2018-02-12 18:00</td>
            <td>已验证</td>
            <td>200000</td>
            <td>-1222</td>
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
      filter_obj: null
    }
  },
  methods:{
    switchModel(type){
      this.readonly = type;
    },
    selectUser(key){
      if (this.selected_key === key) {
        this.selected_key = '';
      } else {
        this.selected_key = key;
      }
    },
    initFilterObj(){
      this.filter_obj = {
        name: '',
        mt4_account: '',
        email: '',
        phone: '',
        group: '',
        created_range: [],
        proxy_account: ''
      }
    },
    clearFilter(){
      this.initFilterObj();
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