<template>
    <div class="echarts-box">
        <div id="myEcharts" :style="{ width: `${width}px`, height: `${height}px` }"></div>
    </div>
</template>
  
<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, onUnmounted, toRefs } from "vue";
const props = defineProps({
    width: Number,
    height: Number
})
const { width, height }: any = toRefs(props)

let myEcharts = echarts;

// 挂载时初始化图表
onMounted(() => {
    init();
});

// 卸载时销毁图表
onUnmounted(() => {
    // 销毁图表
    echarts.dispose;
});

const init = () => {
    // 基于准备好的dom，初始化echarts实例
    let chart = myEcharts.init(document.getElementById("myEcharts"));
    chart.setOption({
        title: {
            text: '随机速度表盘',
            subtext: 'Fake Data',
            bottom: 50,
            left: 'center',
        },
        series: [
            {
                type: 'gauge',
                axisLine: {
                    lineStyle: {
                        width: 30,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'inherit',
                    distance: 40,
                    fontSize: 20
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value} km/h',
                    color: 'inherit'
                },
                data: [
                    {
                        value: 70
                    }
                ]
            }
        ]
    });
    setInterval(function () {
        chart.setOption({
            series: [
                {
                    data: [
                        {
                            value: +(Math.random() * 100).toFixed(2)
                        }
                    ]
                }
            ]
        });
    }, 3000)
}
</script>
  
<style lang="less" scoped></style> 
  