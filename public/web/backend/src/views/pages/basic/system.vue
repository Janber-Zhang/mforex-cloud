<template>
  <div class="basic_system app-warp">
    <Card style="width:600px">
      <p slot="title">系统参数</p>
      <a href="#" slot="extra" v-if="readonly" @click.prevent="switchModel(false)">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="!readonly" @click.prevent="switchModel(true)">
        <Icon type="edit"></Icon>
        取消
      </a>
      <Form :model="data" label-position="left" :label-width="120">
        <form-item label="客户站点域名">
            <Input :disabled="readonly" v-model="data.domain" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="网站名称">
            <Input :disabled="readonly" v-model="data.name" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="联系电话">
            <Input :disabled="readonly" v-model="data.phone" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="邮箱">
            <Input :disabled="readonly" v-model="data.email" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="传真">
            <Input :disabled="readonly" v-model="data.fax" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="地址">
            <Input :disabled="readonly" v-model="data.addr" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="交易软件下载连接">
            <Input :disabled="readonly" v-model="data.download_url" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="主站地址">
            <Input :disabled="readonly" v-model="data.main_url" placeholder="Enter something..."></Input>
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