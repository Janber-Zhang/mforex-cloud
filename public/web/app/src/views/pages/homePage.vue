<template>
  <div class="home-page">
    <Row :gutter="12">
      <Col span="8" style="height:100%;">
        <user-infor :user-name="userInfo.Name" :user-title="userInfo.Email"></user-infor>
      </Col> 
      <Col span="16">
        <Row :gutter="12">
          <Col :span="infor.span" v-for="infor in infor_card_data" :key="infor.idName">
            <infor-card
              :id-name="infor.idName"
              :end-val="infor.value"
              :icon-type="infor.iconType"
              :color="infor.color"
              :intro-text="infor.title"
              ></infor-card>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Col> 
    </Row>
    
  </div>
</template>

<script>
import inforCard    from './../components/inforCard.vue'
import userInfor    from './../components/userInfor.vue'
export default {
  created(){
    
  },
  ready(){

  },
  data(){
    return {
      infor_card_data:[
        {title: '当前盈利', idName:'current_profit', value: 210320, iconType: 'arrow-swap', color: '#2d8cf0', span: 6},
        {title: '当前订单数', idName:'current_orders', value: 8, iconType: 'ios-albums', color: '#64d572', span: 6},
        {title: '历史盈利', idName:'historical_profit', value: 30011231, iconType: 'social-usd', color: '#ffd572', span: 6},
        {title: '历史订单数', idName:'historical_orders', value: 103, iconType: 'shuffle', color: '#f25e43', span: 6},
      ],
      count_1: 302001,
      count_2: 10,
      count_3: 30000000,
      count_4: 100,
    }
  },
  methods:{
    
  },
  components:{
    inforCard,
    userInfor
  },
  computed:{
    userInfo(){
      return this.$store.getters.getUserInfo
    }
  }
}
</script>