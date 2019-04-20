<template>
    <div>
        <div class="row">
            <div class="col">
                dashboard
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ev-table :items="userList" @onEdit="edit" @onDel="del" :fields="fields"/>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardTable from '@/components/tables/dashboard'
import { mapState, mapGetters } from 'vuex';

export default {
    computed:{
        ...mapState('Users',['list']),
        ...mapGetters('Auth',['getUser']),
        fields(){
            return [ 
                { key: 'actions', label: 'Actions' },
                { key: 'name' },
                { key: 'userName' },
                { key: 'salary' },
                { key: 'company' },
            ]
        },
        userList(){
            const lower = str => str ? str.toLowerCase() : ''
            const ownUserName = this.getUser.id
            return  this.list.filter(({ userName, name }) => {
                name = lower(name)
                userName = lower(userName)
                return !(ownUserName === name || ownUserName === userName)
            }) 
        }
    },
    methods:{
        edit(user){
            console.log(user)
        },
        async del({ _id }){
            try{
                await this.$store.dispatch('Users/deleteUser',_id)
                await this.$store.dispatch('Message/AlertSuccess')
            } catch(error){
                console.error(error)
            }
        }
    },
    components:{
        'ev-table': DashboardTable
    },
    mounted(){
        this.$store.dispatch('Users/getUsers')
    }
}
</script>

<style>

</style>
