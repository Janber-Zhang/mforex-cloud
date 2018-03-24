<template>
  <div class="mt4_basic-param app-warp">
    <Card style="width:600px">
      <p slot="title">基本参数设置</p>
      <a href="#" slot="extra" v-if="readonly" @click.prevent="switchModel(false)">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="!readonly" @click.prevent="switchModel(true)">
        <Icon type="edit"></Icon>
        取消
      </a>
      <Form :model="data" label-position="left" :label-width="120">
        <form-item label="mt4账户ID范围开始">
            <Input :disabled="readonly" v-model="data.smtp_addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4账户ID范围结束">
            <Input :disabled="readonly" v-model="data.email_addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4账户默认组">
            <Input :disabled="readonly" v-model="data.email_user" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4账户默认杠杆">
            <Input :disabled="readonly" v-model="data.email_pwd" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4管理员帐号">
            <Input :disabled="readonly" v-model="data.manager_email" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4管理员密码">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4服务器地址">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="demo mt4账户ID范围开始">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="demo mt4账户ID范围结束">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="demo mt4账户默认组">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="mt4登录地址">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="模拟账户资金">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="是否已初始化">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="开放demo账户注册">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="最低入金数量">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="入金需要先审核">
            <Input :disabled="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item v-if="!readonly">
            <Button type="primary">提交</Button>
            <Button type="ghost" @click="switchModel(true)" style="margin-left: 8px">取消</Button>
        </form-item>
      </Form>
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
      data: {
        smtp_addr: 'smtp.exmail.qq.com',
        email_addr: 'info@andaobo.com',
        email_user: 'info@andaobo.com',
        email_pwd: 'A123456a',
        manager_email: 'info@andaobo.com',
        smtp_port: '25'
      },
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