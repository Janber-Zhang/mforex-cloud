<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">组分布</p>

      <!-- 操作按钮 -->
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="loop">刷新</Button>

      <!-- 列表 -->
      <table class="list-table">
        <thead>
          <tr>
            <th width="300">名称</th>
            <th width="200">mt4内用户数量</th>
            <th width="200">平台用户数量</th>
            <th width="200">启用状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{'测试组-00'+ i}}</td>
            <td>{{'1212'}}</td>
            <td>{{'100'}}</td>
            <td>{{'启用'}}</td>
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
      selected_key: '',
      filter_obj: null         //筛选参数
    }
  },
  methods:{
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