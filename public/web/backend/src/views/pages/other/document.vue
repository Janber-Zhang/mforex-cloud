<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">文档管理</p>

      <!-- 操作按钮 -->
      <Button type="success" style="margin-right:10px" size="small" slot="extra" icon="plus">新建</Button>
      <Button type="info" style="margin-right:10px" size="small" slot="extra" icon="edit" :disabled="disabled">编辑</Button>
      <Button type="error" style="margin-right:10px" size="small" slot="extra" icon="close" :disabled="disabled">删除</Button>

      <!-- 列表 -->
      <table class="list-table">
        <thead>
          <tr>
            <th width="200">编号</th>
            <th width="200">标题</th>
            <th width="200">内容</th>
            <th width="200">时间</th>
            <th width="200">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{i}}</td>
            <td>客户协议</td>
            <td></td>
            <td>2017-06-23 10:17:35</td>
            <td><span class="handle">查看详情</span></td>
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
        order_id: '',
        get_account: '',
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