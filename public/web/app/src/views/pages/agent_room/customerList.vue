<template>
  <div class="customer-list app-warp">
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
        {title: '账号', key: 'account'},
        {title: '代理级别', key: 'level'},
        {title: '姓名', key: 'name'},
        {title: '余额', key: 'balance'},
        {title: '注册时间', key: 'created'}
      ];
      let i = 0;
      while (i<10) {
        this.data_list.push({
          account: '158',
          level: '一级',
          name: '王二',
          balance: '222.2',
          created: '2017-12-14 15:27:00'
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