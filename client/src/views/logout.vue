<template>
    <ev-container class="text-center mt-5">
        <h2>Saindo ...</h2>
    </ev-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions('',['resetState'])
    },
    mounted(){
        setTimeout(() => {
            this.$store.dispatch('resetState')
            this.$router.push({ name: 'Login' })
        }, 2000);
    }
}
</script>
