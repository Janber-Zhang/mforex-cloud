<template>
  <Card>
    <p slot="title" class="card-title">
      <Icon type="ios-pulse-strong"></Icon>
      数据来源统计
    </p>
    <div class="data-source-row">
      
    </div>
  </Card>
</template>

<script>
  export default {
    created(){

    },
    ready(){

    },
    data(){
      return {
        
      }
    },
    props: {
        iconType: {
          type: String,
          required: true
        },
        title: {
          type: String,
          required: true
        },
        sourceData: {
          type: [Object, Array]
        }
    },
    methods:{
      
    },
    components:{

    },
    computed:{
      
    }
  }
</script>
