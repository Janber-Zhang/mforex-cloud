<template>
  <div class="out-come app-warp">
    <div>
      <img src="/img/unionpay.png" alt="">
      <p class="out-come-tips">客户可以在自己的任何一张银联卡上在中国的任何一个城市按照当天的汇率取得汇款。</p>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">收款人姓名</span>
      <Input v-model="form_data.recive_name" disabled placeholder="输入收款人姓名..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">银联卡卡号</span>
      <Input v-model="form_data.recive_card" disabled placeholder="输入银联卡卡号..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">开户行银行全称</span>
      <Input v-model="form_data.recive_bank" disabled placeholder="输入开户行银行全称..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">开户行支行全称</span>
      <Input v-model="form_data.recive_bank_branch" disabled placeholder="输入开户行支行全称..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">联系电话</span>
      <Input v-model="form_data.phone" disabled placeholder="输入联系电话..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">身份证号</span>
      <Input v-model="form_data.id_card" disabled placeholder="输入身份证号码..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">金额</span>
      <Input v-model="form_data.amount" placeholder="请输入金额..." style="width: 400px;text-align: center;"></Input>
    </div>
    <div class="out-come-row">
      <span class="out-come-row-title">备注</span>
      <Input v-model="form_data.more_info" type="textarea" :rows="4" placeholder="请输入备注..." style="width: 400px;text-align: center;"></Input>
    </div>
    <Button type="primary" @click="submit" style="width: 150px; margin-top: 20px">确认提交</Button>
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
      form_data: {
        recive_name: '王二',
        recive_card: '6227003819008393271',
        recive_bank: '中国建设银行',
        recive_bank_branch: '中国建设银行春熙路分行',
        phone: '18200115617',
        id_card: '510723197709102073',
        amount: '1000',
        more_info: '速度出金！！！',
      }
    }
  },
  methods:{
    submit(){
      this.$Message.success('操作成功！');
      this.$router.push({ path: 'out_come_his' });
    }  
  },
  components:{

  },
  computed:{
    
  }
}
</script>