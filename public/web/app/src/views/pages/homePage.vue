<template>
  <div class="home-page">
    <Row :gutter="16">
      <Col span="6">
        <infor-card
          id-name="user_created_count"
          :end-val="count_1"
          icon-type="arrow-swap"
          color="#2d8cf0"
          intro-text="当前盈利"
          ></infor-card>
      </Col>
      <Col span="6" class-name="padding-left-5">
        <infor-card
          id-name="visit_count"
          :end-val="count_2"
          icon-type="ios-albums"
          color="#64d572"
          intro-text="当前订单数"
          ></infor-card>
      </Col>
      <Col span="6" class-name="padding-left-5">
        <infor-card
          id-name="collection_count"
          :end-val="count_3"
          icon-type="social-usd"
          color="#ffd572"
          intro-text="历史盈利"
          ></infor-card>
      </Col>
      <Col span="6" class-name="padding-left-5">
        <infor-card
          id-name="transfer_count"
          :end-val="count_4"
          icon-type="shuffle"
          color="#f25e43"
          intro-text="历史订单数"
          ></infor-card>
      </Col>
      </Col>
    </Row>
  </div>
</template>

<script>
import inforCard    from './../components/inforCard.vue'
export default {
  created(){
    
  },
  ready(){

  },
  data(){
    return {
      count_1: 302001,
      count_2: 10,
      count_3: 30000000,
      count_4: 100,
    }
  },
  methods:{
    
  },
  components:{
    inforCard
  },
  computed:{
    
  }
}
</script>