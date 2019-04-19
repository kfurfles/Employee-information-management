<template>
    <div class="container">
        <b-alert 
            ref="alert"
            dismissible
            @dismiss="dismissed"  
            :variant="type">{{ msg }}</b-alert>
    </div>
</template>

<script>
import BAlert from 'bootstrap-vue/es/components/alert/alert'
import { mapState, mapActions } from 'vuex'
export default {
    components:{
        BAlert
    },
    watch:{
        statusMsg(nValue){
            if (nValue) {
                this.setState(true)
            } else {
                this.setState(false)
            }
        }
    },
    computed:{
        ...mapState('Message',{ 
            'statusMsg' : 'active',
            'type': 'variation',
            'msg': 'message'
        }),
    },
    methods:{
        ...mapActions('Message',['dismissed']),
        setState(val){
            this.$refs.alert.localShow = val
        }
    },
    mounted(){
        this.setState(this.statusMsg)
    }
}
</script>

<style>

</style>
