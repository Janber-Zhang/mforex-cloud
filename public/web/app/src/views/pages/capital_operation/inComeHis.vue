<template>
  <div class="in-come-his app-warp">
    <div class="filter-bar" flex="main:left cross:center">
      <div class="filter-item" flex="main:left cross:center">
        <span class="filter-item-name">关键字</span>
        <Input v-model="search_key" style="width: 200px" placeholder="请输入查询关键字"></Input>
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
  mounted(){
    this.init();
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
      search_key: ''
    }
  },
  methods:{
    init(){
      this.table_columns = [
        {title: '入金数量', key: 'count'},
        {title: '转账金额', key: 'amounts'},
        {title: '币种', key: 'type'},
        {title: '订单创建时间', width: 200,  key: 'created'},
        {title: '订单状态', key: 'pay_status'},
        {title: '入金状态',key: 'state'}
      ];
      let i = 0;
      while (i<10) {
        this.data_list.push({
          count:   '100',
          amounts: '100',
          type: 'USD',
          created: '2017-12-14 15:27:00',
          pay_status: '未支付',
          state: '未入金',
        })
        i++
      }
    },
    getList(){

    },
    pageSizeChange(){

    },
    pageChange(){

    },
    search(){

    },
    clearFilter(){

    }
  },
  components:{

  },
  computed:{
    
  }
}
</script>