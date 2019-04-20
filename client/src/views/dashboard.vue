<template>
    <div>
        <div class="row">
            <div class="col">
                dashboard
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
import { mapState, mapGetters } from 'vuex';

export default {
    computed:{
        ...mapState('Users',['list']),
    },
    components:{
        'ev-dashboard-table': DashboardTable
    },
    mounted(){
        this.$store.dispatch('Users/getUsers')
    }
}
</script>

<style>

</style>
