<template>
  <div class="basic_proxy app-warp">
    <Card style="width:800px; height: 100%;">
      <p slot="title">佣金设置</p>
      <ul>
        <li v-for="item in type_list" :key="item">{{item}}</li>
      </ul>
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
      type_list: ['ESP35', 'JPN225', 'ITA40', 'SUI30', 'GER30', 'US30', 'NAS100', 'SPX500', 'FRA40', 'EUSTX50', 'UK100', 'USDJPY'],
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