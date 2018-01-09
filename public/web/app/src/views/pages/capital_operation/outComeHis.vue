<template>
  <div class="out-come-his app-warp">
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
        {title: '金额', width: 100, key: 'amounts'},
        {title: '申请时间', key: 'created'},
        {title: '审核备注', key: 'approval_info'},
        {title: '转账时间',  key: 'transfer_time'},
        {title: '转账金额', width: 100, key: 'transfer_amounts'},
        {title: '转账流水号', key: 'transfer_id'},
        {title: '状态', width: 100, key: 'status'},
        {title: '操作', width: 100, key: 'handle_his'},
      ];
      let i = 0;
      while (i<10) {
        this.data_list.push({
          amounts: '100',
          created: '2017-12-14 15:27:00',
          approval_info: '可以出金',
          transfer_time: '2017-12-14 15:28:00',
          transfer_amounts: '100',
          transfer_id: '1900283281237521',
          status: '已审核',
          handle_his: '执行记录'
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