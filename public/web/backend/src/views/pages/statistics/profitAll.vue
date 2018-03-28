<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">用户历史交易盈亏统计</p>

      <!-- 操作按钮 -->
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="loop">刷新</Button>

      <!-- 列表 -->
      <table class="list-table">
        <thead>
          <tr>
            <th width="200">交易账号</th>
            <th width="200">客户名称</th>
            <th width="200">交易量</th>
            <th width="200">投资金额</th>
            <th width="200">盈利</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 30" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{'2018032600'+i}}</td>
            <td>bhjycgh</td>
            <td>1</td>
            <td>1231.1</td>
            <td>1</td>
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