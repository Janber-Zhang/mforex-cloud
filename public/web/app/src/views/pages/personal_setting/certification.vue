<template>
  <div class="certification app-warp">
    <p class="certification-status">恭喜，您已完成个人实名认证。如果您的认证信息发生变更，可修改认证</p>

    <div class="certification-info">
      <h5 class="certification-info-title">认证信息</h5>
      <Row :gutter="16">
        <Col span="12">
          <Card>
            <div style="text-align:center">
              
              <h3>身份证正面</h3>
              <img class="certification-info-img" v-bind:src="card_url.idcard_positive">
            </div>
          </Card>
        </Col>
        <Col span="12">
          <Card>
            <div style="text-align:center">
              
              <h3>身份证反面</h3>
              <img class="certification-info-img" v-bind:src="card_url.idcard_reverse">
            </div>
          </Card>
        </Col>
      </Row>
      <br>
      <Row :gutter="16">
        <Col span="12">
          <Card>
            <div style="text-align:center">
              
              <h3>银行卡正面</h3>
              <img class="certification-info-img" v-bind:src="card_url.bankcard_positive">
            </div>
          </Card>
        </Col>
        <Col span="12">
          <Card>
            <div style="text-align:center">
              
              <h3>银行卡反面</h3>
              <img class="certification-info-img" v-bind:src="card_url.bankcard_reverse">
            </div>
          </Card>
        </Col>
      </Row>
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
      value: '',
      card_url: {
        idcard_positive: 'http://m.china-7.net/uploads/14779763653053.jpg',
        idcard_reverse: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515686437202&di=57655356795e35db2fbf60abd30bb378&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F0824ab18972bd407544066e77b899e510fb30920.jpg',
        bankcard_positive: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515686203726&di=ba1b333bda618cc3d96f0b1e1e2c5896&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F7dd98d1001e939018e5771d07fec54e737d19683.jpg',
        bankcard_reverse: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515686399479&di=99a2d9623ed660fcf52cda7e6e984d45&imgtype=0&src=http%3A%2F%2Fwww.23book.com%2Fupload%2F2015%2F12%2F12%2F6c8a8531-d909-4088-9d9a-4d3e49b072e5.jpg'
      }
    }
  },
  methods:{
    submit(){
      this.$Message.success('操作成功！');
      
    }  
  },
  components:{

  },
  computed:{
    
  }
}
</script>