<template>
    <ev-table :items="userList" @onEdit="edit" @onDel="del" :fields="fields"/>
</template>

<script>
import DashboardTable from '@/components/tables/dashboard'
import { mapGetters } from 'vuex';

export default {
    props:{
        list:{
            required: true,
            default: () => []
        }
    },
    computed:{
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
        edit({ _id }){
            this.$router.push({ name: 'UpdateUser', params: { id: _id } })
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
}
</script>

<style>

</style>
