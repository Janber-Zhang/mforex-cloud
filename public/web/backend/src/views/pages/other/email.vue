<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">邮件通知</p>

      <!-- 操作按钮 -->
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="ios-redo" :disabled="disabled">重发</Button>
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="loop">刷新</Button>

      <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">标题</span>
          <Input v-model="filter_obj.title" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">正文</span>
          <Input v-model="filter_obj.content" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">收件人</span>
          <Input v-model="filter_obj.target" style="width: 200px" placeholder="请输入查询关键字"></Input>
        </div>
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">时间</span>
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
            <th width="200">标题</th>
            <th width="400">内容</th>
            <th width="200">收件人</th>
            <th width="200">发送时间</th>
            <th width="100">状态</th>
            <th width="200">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>出金提醒</td>
            <td>账户40331506提交了出金申请。</td>
            <td>info@andaobo.com</td>
            <td>2017-10-16 15:07:35</td>
            <td>成功</td>
            <td>
              <span class="handle">查看详情</span>
              <span class="handle">重发</span>
            </td>
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
        title: '',
        content: '',
        target: '',
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