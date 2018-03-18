<template>
  <div class="basic_proxy app-warp">
    <Card style="width:800px; height: 100%;positon: relative;">
      <p slot="title">佣金设置</p>
      <ul class="basic_proxy-list">
        <li>代理名称</li>
        <li v-for="item in type_list" :key="item">{{item}}</li>
      </ul>
      <div class="basic_proxy-edit">
        <Row>
            <Col span="4">
              <p>入门iB</p>
            </Col>
            <Col span="10" offset="1">

            </Col>
            <Col span="10" offset="1">
              
            </Col>
        </Row>
      </div>
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
      type_list: ['ESP35', 'JPN225', 'ITA40', 'SUI30', 'GER30', 'US30', 'NAS100', 'SPX500', 'FRA40', 'EUSTX50', 'UK100', 'USDJPY', 'USDJPY1', 'USDJPY2', 'USDJPY3', 'USDJPY4', 'USDJPY5', 'USDJPY6', 'USDJPY7', 'USDJPY8', 'USDJPY9', 'USDJPY0','ESP351','ESP352','ESP353','ESP354','ESP355','ESP356','ESP357','ESP358','ESP359'],
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