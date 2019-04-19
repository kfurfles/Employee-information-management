<template>
    <div class="text-center">
        <form class="form-signin" @submit.prevent="login">
            <img class="mb-4" src="https://www.inova.unicamp.br/wp-content/uploads/2016/11/Logo_everis.jpg" alt="" width="150" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
            <label for="inputuser" class="sr-only">User</label>
            <input v-model="form.user" type="user" autocomplete="false" id="inputuser" class="form-control" placeholder="Username" required="" autofocus="">
            
            <label for="inputPassword" class="sr-only">Senha</label>
            <input v-model="form.password" type="password" id="inputPassword" class="form-control mt-2" placeholder="Password" required="">
            
            <button :class="['btn btn-lg btn-primary btn-block mt-3',{ disabled: busy }]" type="submit">{{ busy ? 'loading ...' : 'Enter' }}</button>
            <p class="mt-5 mb-3 text-muted">© 2019</p>
        </form>
    </div>
</template>

<script>
import { Auth } from '@/services/api'
export default {
    data: () => ({
        busy: false,
        form: {
            user: '',
            password: ''
        }
    }),
    methods:{
        async login(){
            try {
                this.busy = true
                const { id: name } = await this.$store.dispatch('Auth/Auth',this.form)
                alert(`Bem vindo ${name}`)
            } catch (error) {
                console.error(error)
                console.error('deu ruim')
            }
            finally {
                this.busy = false
            }
        }
    }
}
</script>

<style lang="scss">
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>
