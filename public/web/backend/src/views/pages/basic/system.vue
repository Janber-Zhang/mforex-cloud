<template>
  <div class="basic_system app-warp">
    <div class="app-warp-title">系统参数</div>
    <div class="app-warp-content">
      <Form :model="data" label-position="left" :label-width="120">
        <form-item label="客户站点域名">
            <Input style="width: 500px" :readonly="readonly" v-model="data.domain" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="网站名称">
            <Input style="width: 500px" :readonly="readonly" v-model="data.name" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="联系电话">
            <Input style="width: 500px" :readonly="readonly" v-model="data.phone" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="邮箱">
            <Input style="width: 500px" :readonly="readonly" v-model="data.email" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="传真">
            <Input style="width: 500px" :readonly="readonly" v-model="data.fax" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="地址">
            <Input style="width: 500px" :readonly="readonly" v-model="data.addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="交易软件下载连接">
            <Input style="width: 500px" :readonly="readonly" v-model="data.download_url" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="主站地址">
            <Input style="width: 500px" :readonly="readonly" v-model="data.main_url" placeholder="Enter something..."></Input>
        </form-item>
        <form-item>
            <Button type="primary">Submit</Button>
            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
        </form-item>
      </Form>
    </div>
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
        domain: 'http://office.andaobo.com/',
        name: 'andaobo',
        phone: 'andaobo',
        email: 'andaobo',
        fax: 'andaobo',
        addr: 'andaobo',
        download_url: 'http://www.andaobo.com/',
        main_url: 'http://www.andaobo.com/'
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