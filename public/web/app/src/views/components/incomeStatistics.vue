<template>
  <Card class="income-statistics">
    <p slot="title" class="card-title">
      <Icon type="ios-pulse-strong"></Icon>
      收入统计
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: false,
          orient: 'vertical',
          left: 'right',
          data: ['ios', 'android', 'pc', 'web', 'others'],
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '66%',
            center: ['47%', '50%'],
            data: [
                {value: 2103456, name: 'ios', itemStyle: {normal: {color: '#9bd598'}}},
                {value: 1305923, name: 'android', itemStyle: {normal: {color: '#ffd58f'}}},
                {value: 543250, name: 'pc', itemStyle: {normal: {color: '#abd5f2'}}},
                {value: 798403, name: 'web', itemStyle: {normal: {color: '#ab8df2'}}},
                {value: 302340, name: 'others', itemStyle: {normal: {color: '#e14f60'}}}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
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
