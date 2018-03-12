<template>
  <div class="basic_system app-warp">
    <Card style="width:600px">
        <p slot="title">邮件参数</p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="edit"></Icon>
          编辑
        </a>
        <Form :model="data" label-position="left" :label-width="120">
        <form-item label="smtp服务器地址">
            <Input :readonly="readonly" v-model="data.smtp_addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="电子邮件地址">
            <Input :readonly="readonly" v-model="data.email_addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="电子邮件用户名">
            <Input :readonly="readonly" v-model="data.email_user" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="电子邮件用户密码">
            <Input :readonly="readonly" v-model="data.email_pwd" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="管理员邮箱">
            <Input :readonly="readonly" v-model="data.manager_email" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="smtp服务器端口">
            <Input :readonly="readonly" v-model="data.smtp_port" placeholder="Enter something..."></Input>
        </form-item>
        <form-item>
            <Button type="primary">Submit</Button>
            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
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
    
  },
  components:{

  },
  computed:{

  }
}
</script>