<template>
  <div class="basic_proxy app-warp">
    <Card style="width:800px; height: 100%;positon: relative;">
      <p slot="title">佣金设置</p>
      <ul class="basic_proxy-list">
        <li>代理名称</li>
        <li v-for="item in type_list" v-bind:class="{'active': item==type_selected}" @click="selectType(item)" :key="item">{{item}}</li>
      </ul>
      <div class="basic_proxy-edit">
        <div class="basic_proxy-edit-header">
          <Button type="text" @click="switchEdit" icon="edit">{{isreadonly? '编辑':'取消'}}</Button>
        </div>
        <table class="basic_proxy-edit-body">
          <thead>
            <tr><th width="100">代理级别</th><th width="100">直接佣金比例</th><th width="100">间接佣金比例</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>入门iB</td>
              <td><span v-if="isreadonly">{{data.level1}}</span><Input  v-else style="width:60px;" v-model="data.level1"></Input></td>
              <td><span v-if="isreadonly">{{data._level1}}</span><Input  v-else style="width:60px;" v-model="data._level1"></Input></td>
            </tr>
            <tr>
              <td>初级iB</td>
              <td><span v-if="isreadonly">{{data.level2}}</span><Input  v-else style="width:60px;" v-model="data.level2"></Input></td>
              <td><span v-if="isreadonly">{{data._level2}}</span><Input  v-else style="width:60px;" v-model="data._level2"></Input></td>
            </tr>
            <tr>
              <td>高级iB</td>
              <td><span v-if="isreadonly">{{data.level3}}</span><Input  v-else style="width:60px;" v-model="data.level3"></Input></td>
              <td><span v-if="isreadonly">{{data._level3}}</span><Input  v-else style="width:60px;" v-model="data._level3"></Input></td>
            </tr>
            <tr>
              <td>机构iB</td>
              <td><span v-if="isreadonly">{{data.level4}}</span><Input  v-else style="width:60px;" v-model="data.level4"></Input></td>
              <td><span v-if="isreadonly">{{data._level4}}</span><Input  v-else style="width:60px;" v-model="data._level4"></Input></td>
            </tr>
            <tr>
              <td>区域iB</td>
              <td><span v-if="isreadonly">{{data.level5}}</span><Input  v-else style="width:60px;" v-model="data.level5"></Input></td>
              <td><span v-if="isreadonly">{{data._level5}}</span><Input  v-else style="width:60px;" v-model="data._level5"></Input></td>
            </tr>
          </tbody>
        </table>
        <Button type="primary" v-if="!isreadonly" style="width:120px;margin-top:20px;" @click="switchEdit">提交</Button>
      </div>
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
      type_list: ['ESP35', 'JPN225', 'ITA40', 'SUI30', 'GER30', 'US30', 'NAS100', 'SPX500', 'FRA40', 'EUSTX50', 'UK100', 'USDJPY', 'USDJPY1', 'USDJPY2', 'USDJPY3', 'USDJPY4', 'USDJPY5', 'USDJPY6', 'USDJPY7', 'USDJPY8', 'USDJPY9', 'USDJPY0','ESP351','ESP352','ESP353','ESP354','ESP355','ESP356','ESP357','ESP358','ESP359'],
      type_selected: '',
      data: {
        level1: '0.1',_level1: '0.2',
        level2: '0.2',_level2: '0.1',
        level3: '0.4',_level3: '0.5',
        level4: '0.1',_level4: '0.2',
        level5: '0.2',_level5: '0.9',
      },
      isreadonly: true
    }
  },
  methods:{
    selectType(type){
      this.type_selected = type;
    },
    switchEdit(){
      this.isreadonly = !this.isreadonly;
    }
  },
  components:{

  },
  computed:{

  }
}
</script>