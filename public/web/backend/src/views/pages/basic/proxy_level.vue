<template>
  <div class="basic_system app-warp">
    <Card style="width:600px">
      <p slot="title">代理等级参数</p>
      <a href="#" slot="extra" v-if="readonly" @click.prevent="switchModel(false)">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="!readonly" @click.prevent="switchModel(true)">
        <Icon type="edit"></Icon>
        取消
      </a>
      <Form :model="data" label-position="left" :label-width="120">
        <form-item label="无返佣级别">
          <Input :disabled="readonly" v-model="data.no_level" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="等级1">
          <Input :disabled="readonly" v-model="data.level_1" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="等级2">
          <Input :disabled="readonly" v-model="data.level_2" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="等级3">
          <Input :disabled="readonly" v-model="data.level_3" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="等级4">
          <Input :disabled="readonly" v-model="data.level_4" placeholder="Enter something..."></Input>
        </form-item>
        <form-item label="等级5">
          <Input :disabled="readonly" v-model="data.level_5" placeholder="Enter something..."></Input>
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
        no_level: '会员',
        level_1: '入门iB',
        level_2: '初级iB',
        level_3: '高级iB',
        level_4: '机构iB',
        level_5: '区域iB',
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