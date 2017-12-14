<template>
  <Card class="data-statistics">
    <p slot="title" class="card-title">
      <Icon type="ios-pulse-strong"></Icon>
      资金变化统计
    </p>
    <div ref="chart" class="data-source-row"></div>
  </Card>
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

    }
  },
  props: {
    iconType: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    sourceData: {
      type: [Object, Array]
    }
  },
  methods:{
    init(){
      const option = {
          color: ['#2d8cf0','#7e53c2','#e14f5f'],
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  crossStyle: {
                      color: '#999'
                  }
              }
          },
          toolbox: {
              feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
              }
          },
          legend: {
              data:['入金','出金','盈利']
          },
          xAxis: [
              {
                  type: 'category',
                  data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  axisPointer: {
                      type: 'shadow'
                  }
              }
          ],
          yAxis: [
              {
                  type: 'value',
                  name: '出入金(万元)',
                  min: 0,
                  max: 250,
                  interval: 50,
                  axisLabel: {
                      formatter: '{value}'
                  }
              },
              {
                  type: 'value',
                  name: '盈利(百万)',
                  min: 0,
                  max: 25,
                  interval: 5,
                  axisLabel: {
                      formatter: '{value}'
                  }
              }
          ],
          series: [
              {
                  name:'入金',
                  type:'bar',
                  data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
              },
              {
                  name:'出金',
                  type:'bar',
                  data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
              },
              {
                  name:'盈利',
                  type:'line',
                  yAxisIndex: 1,
                  data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
              }
          ]
      };
      // 基于准备好的dom，初始化echarts实例s
      const myChart = echarts.init(this.$refs.chart);
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  components:{

  },
  computed:{

  }
}
</script>
