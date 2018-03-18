<template>
  <div class="basic_trade app-warp">
    <Card style="width:600px">
      <p slot="title">交易参数</p>
      <a href="#" slot="extra" v-if="readonly" @click.prevent="switchModel(false)">
        <Icon type="edit"></Icon>
        编辑
      </a>
      <a href="#" slot="extra" v-if="!readonly" @click.prevent="switchModel(true)">
        <Icon type="edit"></Icon>
        取消
      </a>
      <Form :model="data" label-position="left" :label-width="100">
        <form-item label="币种" prop="currency_type">
          <Select v-model="data.currency_type" :disabled="readonly" placeholder="选择币种">
            <Option value="USD">美元/USD</Option>
            <Option value="CNY">人民币/CNY</Option>
          </Select>
        </form-item>
        <form-item label="入金汇率模式" prop="in_come_model">
          <Select v-model="data.in_come_model" :disabled="readonly" placeholder="选择入金汇率模式">
            <Option value="0">实时汇率</Option>
            <Option value="1">非实时汇率</Option>
          </Select>
        </form-item>
        <form-item label="入金默认汇率" prop="in_come_exchange_rate">
          <input-number :max="10000000" :min="0" :step="1" :disabled="readonly" v-model="data.in_come_exchange_rate"></input-number>
        </form-item>
        <form-item label="入金汇率调整" prop="in_come_exchange_rate_change">
          <input-number :max="10000000" :min="0" :step="1" :disabled="readonly" v-model="data.in_come_exchange_rate_change"></input-number>
        </form-item>
        <form-item label="出金汇率模式" prop="out_come_model">
          <Select v-model="data.out_come_model" :disabled="readonly" placeholder="选择入金汇率模式">
            <Option value="0">实时汇率</Option>
            <Option value="1">非实时汇率</Option>
          </Select>
        </form-item>
        <form-item label="出金默认汇率" prop="out_come_exchange_rate">
          <input-number :max="10000000" :min="0" :step="1" :disabled="readonly" v-model="data.out_come_exchange_rate"></input-number>
        </form-item>
        <form-item label="出金汇率调整" prop="out_come_exchange_rate_change">
          <input-number :max="10000000" :min="0" :step="1" :disabled="readonly" v-model="data.out_come_exchange_rate_change"></input-number>
        </form-item>
        <form-item label="出金扣款方式" prop="out_come_type">
          <Select v-model="data.out_come_model" :disabled="readonly" placeholder="选择入金汇率模式">
            <Option value="0">出金申请审核后从MT4扣款</Option>
            <Option value="1">客户出金申请后从MT4扣款</Option>
          </Select>
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
        currency_type: 'USD',
        in_come_model: '1',
        in_come_exchange_rate: 7,
        in_come_exchange_rate_change: 0,
        out_come_model: '1',
        out_come_exchange_rate: 7,
        out_come_exchange_rate_change: 0,
        out_come_type: '0'
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