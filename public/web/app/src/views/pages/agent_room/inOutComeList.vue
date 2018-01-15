<template>
  <div class="in-out-come-list app-warp">
    <div class="filter-bar" flex="main:left cross:center">
      <div class="filter-item" flex="main:left cross:center">
        <span class="filter-item-name">交易账号</span>
        <Input v-model="filter_obj.account" style="width: 200px" placeholder="请输入交易账号"></Input>
      </div>
      <div class="filter-item" flex="main:left cross:center">
        <span class="filter-item-name">起止时间</span>
        <date-picker type="daterange" confirm placement="bottom-start" @on-change="handleDateChange" placeholder="请选择起止时间" :value="filter_obj.date_range" style="width: 200px"></date-picker>
      </div>
      
      <i-button style="margin-right: 20px;" type="primary" @click="search()">查询</i-button>
      <i-button @click="clearFilter()">清除</i-button>
    </div>
    <div class="list-table">
      <i-table stripe :columns="table_columns" :data="data_list"></i-table>
      <Page :total="pages.total" :current.sync="pages.page" :styles="pages.styles" :page-size="pages.page_size" :page-size-opts="pages.page_size_opts" placement="top" show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange" v-if="!loading"></Page>
    </div>
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
        account: ''
      }
    }
  },
  methods:{
    getHistotyOrder: function(){
      this.table_columns = [
        {title: '交易账号', key: 'trans_account'},
        {title: '订单号', key: 'order_number'},
        {title: '交易类型', key: 'trade_type'},
        {title: '数量', key: 'count'},
        {title: '时间', key: 'time'}
      ];
      let i = 0;
      while (i<10) {
        this.data_list.push({
          trans_account: '158',
          order_number: '123522',
          trade_type: 'USD',
          count: '122',
          time: '2018-12-12',
        })
        i++
      }
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
        trans_account: '',
        get_account: ''
      }
    },
    search: function() {
      // this.$Message.warning('暂未开放此功能')
      this.getHistotyOrder();
    }
  },
  components:{

  },
  computed:{
    
  }
}
</script>