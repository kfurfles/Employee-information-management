<template>
    <div>
        <div class="row mb-4">
            <div class="col">
                <ev-dashboard-card/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ev-dashboard-table :list="list"/>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardTable from '@/components/dashboard/fullTableDashboard'
import DashboardCard from '@/components/dashboard/card'
import { mapState, mapGetters } from 'vuex';

export default {
    computed:{
        ...mapState('Users',['list']),
    },
    components:{
        'ev-dashboard-table': DashboardTable,
        'ev-dashboard-card': DashboardCard
    },
    mounted(){
        this.$store.dispatch('Users/getUsers')
    }
}
</script>

<style>

</style>
