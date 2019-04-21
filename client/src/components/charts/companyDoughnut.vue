<template>
    <ev-container>
        <div class="d-flex align-item-center justify-center">
            <canvas ref="chart"></canvas>
        </div>
    </ev-container>
</template>

<script>
import Chart from 'chart.js';

export default {
    methods: {
        createChart(ref, chartData){
            const myChart = new Chart(this.$refs.chart, {
                type: 'doughnut',
                data: {
                    labels: [ 'Red', 'Yellow', 'Blue' ],
                    datasets: [
                        {
                            label: ['one','two','three'],
                            backgroundColor: [ '#3b9b73', '#bd5a4b', '#07b5d6' ],
                            // borderColor: 'rgb(255, 99, 132)',
                            data: [10,20,30]
                        },
                    ],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    
                },
                options: {},
            });
        }
    },
    mounted() {
        this.createChart()
    },
    
}
</script>

<style>

</style>
