<template>
  <div class="basic_payment app-warp">
    <Card style="100%;">
      <p slot="title">支付设置</p>
      <table class="list-table">
        <thead>
          <tr>
            <th width="100">编号</th>
            <th width="200">代码</th>
            <th width="200">名称</th>
            <th width="200">配置</th>
            <th width="100">状态</th>
            <th width="300">插件地址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data_list" :key="item.code">
            <td>{{item.id}}</td>
            <td>{{item.code}}</td>
            <td>{{item.name}}</td>
            <td>{{'详情页查看'}}</td>
            <td>{{item.status}}</td>
            <td>{{item.plugin}}</td>
          </tr>
        </tbody>
      </table>
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
      data_list: [
        {
          id: 31,
          code: 'gfbbank', 
          name: '国付宝网银', 
          config: '{"sellerid":"0000115127","sellerkey":"abcd1234123","accountid":"0000000002000051021","gateway":"https://gateway.gopay.com.cn/Trans/WebClientAction.do","paydomain":"http://pay.sannew.cn","fronturl":"/payment/gfb/choosebanks.aspx"}',
          status: '启用',
          plugin: '/payment/gfb/jump.aspx?paymentcode=gfbbank'
        },
        {
          id: 1,
          code: 'ainong', 
          name: '爱农支付', 
          config: '{"sellerid":"","sellerkey":"","frontapiurl":"http://pay.chinagpay.com/bas/FrontTrans","backapiurl":"http://180.169.129.78:38280/bas/FrontTrans"}',
          status: '禁用',
          plugin: '/payment/ainong/pay.aspx'
        },
        {
          id: 2,
          code: 'alipay', 
          name: '支付宝', 
          config: '',
          status: '禁用',
          plugin: '/payment/alipay/payment.aspx'
        }
      ],
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