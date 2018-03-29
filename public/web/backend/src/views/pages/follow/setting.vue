<template>
  <div class="basic_email app-warp">
    <Card style="width:600px">
      <p slot="title">跟单参数</p>
      <a href="#" slot="extra" v-if="readonly" @click.prevent="switchModel(false)">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="!readonly" @click.prevent="switchModel(true)">
        <Icon type="edit"></Icon>
        取消
      </a>
      <Form :model="data" label-position="left" :label-width="120">
        <form-item label="每跟单一次费用">
            <Input :disabled="readonly" v-model="data.fee" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="状态">
            <i-switch :disabled="readonly" v-model="data.status" size="large">
                <span slot="open">启用</span>
                <span slot="close">关闭</span>
            </i-switch>
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
        fee: 1,
        status: true
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