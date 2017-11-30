<template>
  <div class="home-page">
    <h1>首屏</h1>
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
      loading: false,
      table_columns: [],
      data_list: [],
      pages:{
        page_size_opts: [10, 25, 50, 100],
        page_size: 25,
        page: 1,
        total: 0,
        styles: {
          "margin": "20px auto"
        }
      },
      filter_obj: {
        date_range: [],
        keys: ''
      }
    }
  },
  methods:{
    getHistotyOrder: function(){
      let vm = this;
      this.loading = true;
      let param = {
        httpType      :    'get',
        serviceUrl    :    'GetDealedOrder',
        apiModule     :    'basicAPI',
        domain        :    'www.sohu.com',
        login         :    '4',
        page          :     this.pages.page,
        pageSize      :     this.pages.page_size
      }
      util.ajaxQuery(param,function(res){
        if(res.code==='0'){
          vm.table_columns = [
            {title: '订单号', key: '_Order'},
            {title: '订单品种', key: 'Symbol'},
            {title: '交易类型', key: 'Cmd'},
            {title: '数量', key: 'Volume'},
            {title: '开仓价格', key: 'OpenPrice'},
            {title: '开仓时间', width: 150, key: 'OpenTime'},
            {title: '平仓价格', key: 'ClosePrice'},
            {title: '平仓时间', width: 150, key: 'CloseTime'},
            {title: '利润', key: 'Profit'}
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
          vm.pages.total = res.data.total;
          vm.data_list = res.data.dealedorders;
          vm.loading = false;
        }else{
          vm.$Message.error('服务错误');
        }
      });
    },
    handleDateChange: function(date_arr){        //选择日期后的回调
      this.filter_obj.date_range = date_arr;
    },
    pageChange: function(page) {
      this.getHistotyOrder();
    },
    pageSizeChange: function(page_size) {
      this.pages.page_size = page_size;
      this.pages.page = 1;
      this.getHistotyOrder();
    },
    clearFilter: function() {
      this.filter_obj = {
        date_range: [],
        keys: ''
      }
    },
    search: function() {
      this.$Message.warning('暂未开放此功能')
    }
  },
  components:{

  },
  computed:{
    
  }
}
</script>