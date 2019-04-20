<template>
<div class="mt-3 mb-3">
    <ev-form-user :class=" error ? 'border border-danger' : ''" v-model="formatedData" :busy="busy" @submit="onSubmit"></ev-form-user>
</div>
</template>

<script>
import FormUser from '@/components/forms/userForm'
export default {
    data: () => ({
        updated: false,
        busy: false,
        error: false,
        formatedData: {
            name: 'Joao',
            userName: 'joaopedro16',
            password: '12345678',
            company: 'everis',
            salary: '101010',
            address: {
                city: 'sao paulo',
                number: '101010',
                neighborhood: 'centro',
                street: 'rua treze de maio'
            }
        }
        // formatedData: {
        //     name: '',
        //     userName: '',
        //     password: '',
        //     company: '',
        //     salary: '',
        //     address: {
        //         city: '',
        //         number: '',
        //         neighborhood: '',
        //         street: ''
        //     }
        // }
    }),
    methods:{
        onSubmit(value){
            if (this.updated) {
                this.onSubmitUpdated(value)
            } else {
                this.onSubmitNew(value)
            }
        },
        onSubmitUpdated(){
        
        },
        async onSubmitNew(newUser){
            newUser['user'] = newUser.userName
            try {
                this.busy = true;
                this.error = false
                await this.$store.dispatch('Users/createUser',newUser)
                this.$store.dispatch('Message/AlertSuccess')
                this.busy = false
                this.$router.push({ name: 'Dashboard' })
            } catch (error) {
                console.error(error)
                this.error = true
                this.busy = false
            }
        }
    },
    components:{
        'ev-form-user': FormUser
    }
}
</script>

<style>

</style>
