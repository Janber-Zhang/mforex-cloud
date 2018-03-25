<template>
  <div class="app-warp">
    <Card style="width:100%">
      <!-- 标题 -->
      <p slot="title">符号管理</p>

      <!-- 操作按钮 -->
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="loop">同步符号</Button>
      <Button type="success" style="margin-right:10px" size="small" slot="extra" icon="checkmark" :disabled="disabled">启用</Button>
      <Button type="error" style="margin-right:10px" size="small" slot="extra" icon="close" :disabled="disabled">停用</Button>

      <!-- 列表 -->
      <table class="list-table">
        <thead>
          <tr>
            <th width="300">名称</th>
            <th width="300">每手佣金</th>
            <th width="300">状态</th>
            <!-- <th width="300">操作</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>{{'测试组-00'+ i}}</td>
            <td>{{'100'}}</td>
            <td>{{'已禁用返佣'}}</td>
            <!-- <td>
              <Button type="success"  style="margin-right:10px" size="small" icon="checkmark">启用</Button>
              <Button type="error" size="small" icon="close">禁用</Button>
            </td> -->
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