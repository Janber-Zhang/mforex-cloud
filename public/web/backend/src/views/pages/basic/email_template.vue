<template>
  <div class="basic_email-template app-warp">
    <Card style="width:100%">
      <p slot="title">邮件模版</p>
      <table class="list-table">
        <thead>
          <tr>
            <th width="100">编号</th>
            <th width="300">代码</th>
            <th width="200">名称</th>
            <th width="200">通知对象</th>
            <th width="200">模版内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data_list" :key="item.code">
            <td>{{index}}</td>
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>
            <td>{{item.target}}</td>
            <td>
              <span class="handle" @click="showDetail">编辑</span>
              <span class="handle" @click="showDetail">查看</span>
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

  },
  ready(){

  },
  data(){
    return {
      data_list: [
        {code: 'REGISTER_SUCCESS_NOTIFY_TO_USER',name: '注册成功',target: '客户'},
        {code: 'REGISTER_SUCCESS_NOTIFY_TO_MANAGER',name: '用户注册',target: '管理员'},
        {code: 'APPLY_VERIFY_NOTIFY_TO_MANAGER',name: '提交认证',target: '管理员'},
        {code: 'VERIFY_SUCCESS_TO_USER',name: '认证成功',target: '客户'},
        {code: 'VERIFY_FAIL_TO_USER',name: '认证失败',target: '客户'},
        {code: 'APPLY_WITHDRAW_NOTIFY_TO_MANAGER',name: '申请出金',target: '管理员'},
        {code: 'WITHDRAW_CHECK_SUCCESS_NOTIFY_TO_USER',name: '出金审核成功',target: '客户'},
        {code: 'WITHDRAW_CHECK_FAIL_NOTIFY_TO_USER',name: '出金审核失败',target: '客户'},
        {code: 'WITHDRAW_TRANSACTION_SUCCESS_NOTIFY_TO_USER',name: '出金转账通知',target: '客户'},
        {code: 'DEPOSIT_SUCCESS_TO_MANAGER',name: '入金成功通知',target: '管理员'}
      ],
      readonly: true
    }
  },
  methods:{
    showDetail(){
      this.$Modal.warning({
        title: '温馨提示',
        content: '<p>暂未开放该模块</p>'
      });
    },

  },
  components:{

  },
  computed:{

  }
}
</script>