<template>
  <div class="app-warp">
    <i-table stripe :columns="table_columns" :data="data_list"></i-table>
  </div>
</template>

<script>
export default {
  created(){
    this.getHistotyOrder();
  },
  ready(){

  },
  data(){
    return {
      table_columns: [],
      data_list: []
    }
  },
  methods:{
    getHistotyOrder: function(){
      let vm = this;
      let param = {
        httpType      :    'get',
        serviceUrl    :    'GetDealedOrder',
        apiModule     :    'basicAPI',
        domain        :    'www.sohu.com',
        login         :    '4',
        page          :     1,
        pageSize      :     25
      }
      util.ajaxQuery(param,function(res){
        if(res.code==='0'){
          vm.table_columns = [
            {
              title: '订单号',
              key: '_Order'
            },
            {
              title: '订单品种',
              key: 'Symbol'
            },
            {
              title: '交易类型',
              key: 'Cmd'
            },
            {
              title: '数量',
              key: 'Volume'
            },
            {
              title: '开仓价格',
              key: 'OpenPrice'
            },
            {
              title: '开仓时间',
              width: 150,
              key: 'OpenTime'
            },
            {
              title: '平仓价格',
              key: 'ClosePrice'
            },
            {
              title: '平仓时间',
              width: 150,
              key: 'CloseTime'
            },
            {
              title: '利润',
              key: 'Profit'
            }
          ];
          res.data.dealedorders.forEach(function(item){
            item.OpenTime = DateFormat.format(new Date(item.OpenTime), 'yyyy-MM-dd hh:mm:ss');
            item.CloseTime = DateFormat.format(new Date(item.CloseTime), 'yyyy-MM-dd hh:mm:ss');
            switch (item.Cmd) {
              case 'Balance':
                if (item.Profit>0) {
                  item.Cmd = '入金';
                } else{
                  item.Cms = '出金';
                }
                break
              case 'Sell':
                item.Cmd = '卖出';
                break
              default:
                console.log('other type')
            }
          });
          vm.data_list = res.data.dealedorders;
        }else{
          // alert('账号密码错误')
        }
      });
    }
  },
  components:{

  },
  computed:{
    
  }
}
</script>