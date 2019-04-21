<template>
    <div>
        <div class="row">
            <div v-for="(insight,i) of insights" :key="i" class="col-12 col-md-4 mb-3">
                <ev-dashboard-card :info="insight.data" :variant="insight.variant"/>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-5 mb-4">
                <ev-dashboard-chart/>
            </div>
            <div class="col-12 col-md-7 ">
                <ev-dashboard-table :list="list"/>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardTable from '@/components/dashboard/fullTableDashboard'
import DashboardCard from '@/components/dashboard/card'
import DashboardChart from '@/components/charts/companyDoughnut'
import { mapState, mapGetters } from 'vuex';

export default {
    computed:{
        ...mapState('Users',['list']),
        insights(){
            return [
                { 
                    variant: 'blue',
                    data: {
                        title: 'Registered users',
                        mainData: '20', 
                        footerTitle: 'Last logged in user',
                        footerData: 'João da Silva',
                    } 
                },
                { 
                    variant: 'green',
                    data: {
                        title: 'Companies in the system',
                        footerTitle: 'Company with more employees',
                        footerData: 'Everis',
                        mainData: '10' 
                    } 
                },
                { 
                    variant: 'pink',
                    data: {
                        title: 'Average salary',
                        footerTitle: 'Highest salary | Lower salary',
                        footerData: '1000 | 1',
                        mainData: '20' 
                    } 
                }
            ]
        }
    },
    components:{
        'ev-dashboard-table': DashboardTable,
        'ev-dashboard-card': DashboardCard,
        'ev-dashboard-chart': DashboardChart
    },
    mounted(){
        this.$store.dispatch('Users/getUsers')
    }
}
</script>

<style>

</style>
