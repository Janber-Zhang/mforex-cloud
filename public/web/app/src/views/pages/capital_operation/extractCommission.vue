<template>
  <div class="extract-commission app-warp">
    <div>
      <img src="/img/unionpay.png" alt="">
      <p class="extract-commission-tips">客户可以将佣金提取到mt4平台中</p>
    </div>
    <div class="in-come-row">
      <span class="in-come-row-title">可提取佣金</span>
      <Input v-model="total" placeholder="输入入金额度" readonly disabled style="width: 200px;text-align: center;"></Input>
    </div>
    <div class="in-come-row">
      <span class="in-come-row-title">提取佣金数</span>
      <Input v-model="value" placeholder="输入入金额度" style="width: 200px;text-align: center;"></Input>
    </div>
    <div class="in-come-row">
      <Button type="primary" @click="submit" style="width: 273px;">提交</Button>
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
      total: 10200,
      value: ''
    }
  },
  methods:{
    submit(){
      this.$Message.success('操作成功！');
      
    }  
  },
  components:{

  },
  computed:{
    
  }
}
</script>