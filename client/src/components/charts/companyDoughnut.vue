<template>
    <ev-container class="chart">
        <div class="d-flex align-item-center justify-center">
            <canvas ref="chart"></canvas>
        </div>
    </ev-container>
</template>

<script>
import Chart from 'chart.js';

const data = {"labels":["None","Others","google","everis","nubank","yahoo"],"datasets":[{"backgroundColor":["#9966ff","#ff6384","#4bc0c0","#ff9f40","#36a2eb","#ffcd56"],"data":[1,1,4,3,2,1]}]}
export default {
    props:{
        chartData:{
            default: false,
        }
    },
    data: () =>({
        chart: ''
    }),
    watch:{
        chartData(val){
            this.updateChart()
        }
    },
    methods: {
        createChart(){
            this.chart = new Chart(this.$refs.chart,{
                type: 'doughnut',
                data: this.chartData
            });
        },
        updateChart(){
            this.chart.data = {
                ...this.chart.data,
                ...this.chartData
            }
            this.chart.update()
        }
    },
    mounted() {
        this.createChart()
    },
    
}
</script>

<style lang="scss" scoped>
</style>
