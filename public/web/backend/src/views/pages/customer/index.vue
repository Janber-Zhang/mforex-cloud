<template>
  <div class="customer app-warp">
    <Card style="width:100%">
      <p slot="title">客户管理</p>
      <!-- 操作按钮 -->
      <Button type="success" style="margin-right:10px" size="small" slot="extra" icon="plus">新建</Button>
      <Button type="info" style="margin-right:10px" size="small" slot="extra" icon="edit">编辑</Button>
      <Button type="primary" style="margin-right:10px" size="small" slot="extra" icon="checkmark">启用</Button>
      <Button type="error" style="margin-right:10px" size="small" slot="extra" icon="close">停用</Button>
      <Button type="warning" style="margin-right:10px" size="small" slot="extra" icon="information">查看明细</Button>
      <Button style="margin-right:10px" size="small" slot="extra" icon="network">查看代理树</Button>
      <Button type="dashed" style="margin-right:10px" size="small" slot="extra" icon="key">修改密码</Button>
      <Button type="primary" size="small" slot="extra" icon="forward">转到会员中心</Button>
      
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
          <tr v-for="i in 10" :key="i">
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

  },
  ready(){

  },
  data(){
    return {
      readonly: true
    }
  },
  methods:{
    switchModel(type){
      this.readonly = type;
    }
  },
  components:{

  },
  computed:{

  }
}
</script>