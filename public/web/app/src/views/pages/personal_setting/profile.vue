<template>
  <div class="profile app-warp">
    <div class="profile-info-card">
      <h5 class="profile-info-card-title">个人信息</h5>
      <ul class="profile-info-card-base">
        <li><span class="profile-info-card-base-title">账户号码</span> <span>158</span></li>
        <li><span class="profile-info-card-base-title">MT4平台资金余额</span> <span>0</span></li>
        <li><span class="profile-info-card-base-title">MT4平台资金净值</span> <span>0</span></li>
        <li><span class="profile-info-card-base-title">MT4平台资金总利润</span> <span>-10023</span></li>
        <li><span class="profile-info-card-base-title">客户姓名</span> <span>王二</span></li>
        <li><span class="profile-info-card-base-title">电子邮箱</span> <span>test_01@mforex.com</span></li>
        <li><span class="profile-info-card-base-title">杠杆比例</span> <span>1:100</span></li>
      </ul>
    </div>
    <div class="profile-info-card">
      <h5 class="profile-info-card-title">银行信息</h5>
      <ul class="profile-info-card-base">
        <li><span class="profile-info-card-base-title">收款人</span> <span>王二</span></li>
        <li><span class="profile-info-card-base-title">开户银行</span> <span>中国建设银行</span></li>
        <li><span class="profile-info-card-base-title">支行名称</span> <span>中国建设银行中南海支行</span></li>
        <li><span class="profile-info-card-base-title">银行卡号</span> <span>6227993821777238842</span></li>
        <li><span class="profile-info-card-base-title">身份证号</span> <span>510823199309091232</span></li>
        <li><span class="profile-info-card-base-title">联系电话</span> <span>18200115612</span></li>
      </ul>
    </div>
    <div class="profile-info-card">
      <h5 class="profile-info-card-title">密码修改</h5>
      <Button type="primary" @click="pswChange()">点此修改</Button>
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
      
    },
    pswChange(){
      this.$Message.success('暂未开放该功能');
    }
  },
  components:{

  },
  computed:{
    
  }
}
</script>