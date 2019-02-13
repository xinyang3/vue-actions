<template>
    <div>
      <div class="main main1"></div>
      <div class="main main2"></div>
    </div>
</template>
<script>
export default {
  name: 'demo-one',
  data () {
    return {

    }
  },
  methods: {
    init1 () {
      var echarts = require('echarts/lib/echarts.js');
      // 引入柱状图
      require('echarts/lib/chart/bar');
      // 引入提示框和标题组件
      require('echarts/lib/component/tooltip');
      require('echarts/lib/component/title');
      var myChart = echarts.init(document.getElementsByClassName('main1')[0]);

      myChart.setOption({
        title: {
          text: 'echarts 入门'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    },
    init2 () {
      var echarts = require('echarts/lib/echarts.js');
      // 引入柱状图
      require('echarts/lib/chart/pie');
      require('echarts/lib/component/tooltip');
      var myChart = echarts.init(document.getElementsByClassName('main2')[0]);
      myChart.setOption({
        tooltip: {
          show: true
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
              {value:235, name:'视频广告'},
              {value:274, name:'联盟广告'},
              {value:310, name:'邮件营销'},
              {value:335, name:'直接访问'},
              {value:400, name:'搜索引擎'}
            ]
          }
        ]
      });
    }

  },
  mounted () {
    this.init1();
    this.init2();
  }
}
</script>
<style scoped lang="stylus">
  .main {
    height: 400px;
    width: 400px;
    float left;
  }
</style>
