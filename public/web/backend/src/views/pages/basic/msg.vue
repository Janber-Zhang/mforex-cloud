<template>
  <div class="basic_system app-warp">
    <Card style="width:600px">
      <p slot="title">短信参数</p>
      <a href="#" slot="extra" v-if="readonly" @click.prevent="switchModel(false)">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="!readonly" @click.prevent="switchModel(true)">
        <Icon type="edit"></Icon>
        取消
      </a>
      <Alert type="warning">当前短信采用的是253云通讯的短信服务，如果您没有该短信服务，请不要选择启用短信功能。</Alert>
      <Form :model="data" label-position="left" :label-width="120">
        <form-item label="是否启用短信验证">
          <Select :disabled="readonly" v-model="data.status">
            <Option value="0">否</Option>
            <Option value="1">是</Option>
          </Select>
        </form-item>
        <form-item label="短信用户名">
          <Input :disabled="readonly" v-model="data.email_addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="短信密码">
          <Input :disabled="readonly" v-model="data.email_user" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="短信签名">
          <Input :disabled="readonly" v-model="data.email_pwd" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="管理员手机号">
          <Input :disabled="readonly" v-model="data.manager_email" placeholder="Enter something..."></Input>
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
        status: '0',
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