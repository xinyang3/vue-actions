<template>
   <!-- <span> {{'one'}}</span> -->
    <div id="line1"></div>
</template>
<script>
    export default {
        name: 'bar-one',
        data () {
            return {}
        },
        methods: {
            init () {
                 var echarts = require('echarts/lib/echarts');
                require('echarts/lib/chart/bar');
                require('echarts/lib/chart/line');
                require('echarts/lib/component/tooltip');
                require('echarts/lib/component/title');
                require('echarts/lib/component/legend');
                require('echarts/theme/macarons')
                var line = echarts.init(document.getElementById("line1"), 'macarons');
                var option1 = {
                    title: {
                        text: 'title'
                    },
                    legend: {
                        show: true,
                        data: [{
                            name: 'line1'
                        },
                        {
                            name: 'line2'
                        },{
                            name: 'bar3'
                        }
                        ]
                    },
                    tooltip: {
                        show: true,
                        triger: 'axis'
                    },
                    xAxis: {
                        name: 'x轴',
                        type: 'category',
                        data: ['周一','周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type:'line',
                            name:'line1',
                            data: ['25', '23','40','47', '60', '64', '70']
                        },
                        {
                            type:'line',
                            name:'line2',
                            data: ['20', '35', '30','35','54', '50', '70']
                        },
                        {
                            type:'bar',
                            name:'bar3',
                            data: ['20', '35', '30','35','54', '50', '70'],
                            barWidth: '5'
                        }
                    ]

                };
                line.setOption(option1);
            }
        },
        mounted () {
            this.init();
        }
    }
</script>
<style scoped lang="stylus">
    #line1 {
        width 400px;
        height 400px;
        float left;
    }
</style>
