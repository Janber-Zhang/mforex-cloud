<template>
  <div class="in-come app-warp">
    <div>
      <img src="/img/unionpay.png" alt="">
    </div>
    <div class="in-come-row">
      <span class="in-come-row-title">支付渠道</span>
      <Select v-model="pay_type" style="width:200px">
        <Option v-for="item in pay_options" :value="item" :key="item">{{ item }}</Option>
      </Select>
    </div>
    <div class="in-come-row">
      <span class="in-come-row-title">入金额度</span>
      <Input v-model="value" placeholder="输入入金额度" style="width: 200px;text-align: center;"></Input>
    </div>
    <div class="in-come-row">
      <Button type="primary" @click="submit" style="width: 261px;">提交</Button>
    </div>
  </div>
</template>

<script>
export default {
  created(){

  },
  mounted(){

  },
  data(){
    return {
      pay_type: '',
      pay_options: ['聪付网银'],
      value: ''
    }
  },
  methods:{
    submit(){
      this.$Message.success('操作成功！');
      this.$router.push({ path: 'in_come_his' });
    }  
  },
  components:{

  },
  computed:{
    
  }
}
</script>