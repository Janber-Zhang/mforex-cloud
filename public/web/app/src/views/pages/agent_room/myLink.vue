<template>
  <div class="my-link app-warp">
    <h4>我的邀请链接</h4>
    <p>http://office.andaobo.com/register.aspx?refid=158</p>
    <img src="http://qr.liantu.com/api.php?text=http://office.andaobo.com/register.aspx?refid=158" alt="">
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