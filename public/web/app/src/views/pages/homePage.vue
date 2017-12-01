<template>
  <div class="home-page">
    <Alert v-for="(notice, index) in notice_data" :key="notice.msg" v-if="notice_index.indexOf(index)>-1" banner closable show-icon :type="notice.type">{{notice.msg}}</Alert>
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
          <dashboard style="margin-top:12px;" icon-type="arrow-swap" title="数据来源统计" :source-data="{}"></dashboard>
        </Row>
      </Col> 
    </Row>
    
  </div>
</template>

<script>
import inforCard    from './../components/inforCard.vue'
import userInfor    from './../components/userInfor.vue'
import dashboard    from './../components/dashboard.vue'
export default {
  created(){
    let notice_count = util.getRandom(0,4)[0];
    if (notice_count) {
      this.notice_index = util.getRandom(0,3,notice_count,true);
    }
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
      notice_data: [
        {msg: '这是一条普通通知...',type:'info'},
        {msg: '这是一条成功通知...',type:'success'},
        {msg: '这是一条紧急(一般)通知...',type:'warning'},
        {msg: '这是一条紧急(非常)通知...',type:'error'}
      ],
      notice_index: [],
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
    userInfor,
    dashboard
  },
  computed:{
    userInfo(){
      return this.$store.getters.getUserInfo
    }
  }
}
</script>