<template>
  <div class="mt4_init app-warp">
    <Card style="width:600px">
      <p slot="title">初始化</p>
      <h1 class="mt4_init-title">注意事项</h1>
      <p class="mt4_init-content">1.第一次初始化会将CRM系统里面的历史数据全部清空，请仅仅在系统第一次使用的时候进行操作！！！</p>
      <p class="mt4_init-content">2.初始化完毕以后，初始化开关将被置为1,就不能在进行初始化。如果要再进行初始化，需要在MT4基本设置中将标志位修改为0。</p>
      <p class="mt4_init-content">3.初始化的作用主要是将MT4中的数据包括，组，符号，用户，历史订单，同步到CRM系统中！！！</p>
      <Button icon="nuclear" @click="init">初始化</Button>
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
    init(){
      this.$Modal.confirm({
          title: '警告',
          content: '<p>此次操作无法撤回，是否继续？</p>',
          onOk: () => {
              this.$Message.info('Clicked ok');
          },
          onCancel: () => {
              this.$Message.info('Clicked cancel');
          }
      });
    }
  },
  components:{

  },
  computed:{

  }
}
</script>