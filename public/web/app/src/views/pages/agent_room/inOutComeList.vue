<template>
  <div class="in-out-come-list app-warp">
    
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