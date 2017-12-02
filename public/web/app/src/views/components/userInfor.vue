<template>
  <div class="user-infor-card">
    <Card>
      <Row type="flex" class="user-infor">
        <Col span="8">
          <Row class-name="made-child-con-middle" type="flex" align="middle">
              <img class="avator-img" :src="avatorPath" />
          </Row>
        </Col>
        <Col span="16" style="padding-left:6px;">
          <Row class-name="made-child-con-middle" type="flex" align="middle">
            <div>
              <b class="card-user-infor-name">{{userName}}</b>
              <p>{{userTitle}}</p>
              <div class="status not_authentication"></div>
            </div>
          </Row>
        </Col>
      </Row>
      <div class="line-gray"></div>
      <Row class="margin-top-8" v-for="item in otherInfo" :key="item.value">
        <Col span="8"><p class="notwrap">{{item.desc + ':'}}</p></Col>
        <Col span="16" class="padding-left-8">{{item.value}}</Col>
      </Row>
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
        
      }
    },
    props: {
        avatorPath: {
            type: String,
            default: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'
        },
        userName: String,
        userTitle: String,
        otherInfo: {
          type: Array,
          default: function(){
            return [
              {desc: '本次登录时间', value: DateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss')},
              {desc: '上次登录时间', value: DateFormat.format(new Date(), 'yyyy-MM-dd hh:mm:ss')}
            ]
          }
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
