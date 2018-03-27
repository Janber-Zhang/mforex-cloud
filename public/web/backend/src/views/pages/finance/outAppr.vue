<template>
  <div class="app-warp">
    <Card style="width:100%">
      <p slot="title">出金审核</p>
      <!-- 操作按钮 -->
      <Button type="info" style="margin-right:10px" size="small" slot="extra" icon="information" :disabled="disabled">查看明细</Button>
      <Button type="success" style="margin-right:10px" size="small" slot="extra" icon="edit" :disabled="disabled">审核</Button>
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="checkmark" :disabled="disabled">设置为已转账</Button>
      
       <!-- 筛选器 -->
      <div class="filter-bar">
        <div class="filter-item" flex="main:left cross:center">
          <span class="filter-item-title">状态</span>
          <Select v-model="filter_obj.status" style="width:200px">
            <Option value="-1">全部</Option>
            <Option value="0">申请中</Option>
            <Option value="1">已驳回</Option>
            <Option value="2">已审核</Option>
            <Option value="3">已转账</Option>
          </Select>
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
            <th width="100">编号</th>
            <th width="200">MT4账号</th>
            <th width="150">客户名称</th>
            <th width="200">申请出金数量</th>
            <th width="300">申请时间</th>
            <th width="100">审核意见</th>
            <th width="300">扣款方式</th>
            <th width="200">汇率模式</th>
            <th width="200">汇率转换后金额</th>
            <th width="100">汇率</th>
            <th width="200">汇率计算公式</th>
            <th width="100">币种</th>
            <th width="100">状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i" @click="selectItem(i)" v-bind:class="{'active': selected_key==i}">
            <td>319</td>
            <td>40353082</td>
            <td>莫秀娟--高级</td>
            <td>300</td>
            <td>2018/3/6 10:51:55</td>
            <td>ok</td>
            <td>管理员审核后mt4扣款</td>
            <td>非实时汇率</td>
            <td>2100</td>
            <td>7</td>
            <td>(7.00) + (0.00)</td>
            <td>USD</td>
            <td>已审核</td>
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
    selectItem(key){
      if (this.selected_key === key) {
        this.selected_key = '';
      } else {
        this.selected_key = key;
      }
    },
    initFilterObj(){
      this.filter_obj = {
        status: ''
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