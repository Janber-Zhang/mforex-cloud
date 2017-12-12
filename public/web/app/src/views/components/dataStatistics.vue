<template>
  <Card>
    <p slot="title" class="card-title">
      <Icon type="ios-pulse-strong"></Icon>
      数据来源统计
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
      required: true
    },
    title: {
      type: String,
      required: true
    },
    sourceData: {
      type: [Object, Array]
    }
  },
  methods:{
    init(){
      var base = +new Date(1968, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];

      var data = [Math.random() * 300];

      for (var i = 1; i < 20000; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }

      let option = {
        toolbox: {
          show: false
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 10
          }
        ],
        series: [
          {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(255, 70, 131)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }])
              }
            },
            data: data
          }
        ]
      };
      // 基于准备好的dom，初始化echarts实例s
      var myChart = echarts.init(this.$refs.chart);
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
