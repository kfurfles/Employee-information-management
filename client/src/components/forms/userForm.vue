<template>
    <ev-container>
        <form @submit.prevent="$emit('submit',value)">
            <h1 class="text-center">New User</h1>
            <div class="row justify-content-center">
                <div class="col-12 col-sm-6 col-md-4" v-for="prop in formList" :key="prop">
                    <ev-input  :value="getValue(schema[prop])" @input="setData($event, schema[prop])" :config="schema[prop]"></ev-input>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <ev-submit :busy="busy" :disabled="disabled" :message="message" variation="success"></ev-submit>
                </div>
            </div>
        </form>
    </ev-container>
</template>

<script>
import genericInput from '@/components/shared/generic-input.vue'
import ButtonSubmit from '@/components/shared/submit-button.vue'
import { set, get } from 'lodash'

export default {
    props: {
        value:{
            default: function(){
                return {}
            }
        },
        busy:{
            type: Boolean,
            default: false
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        message: 'Create User',
        schema:{
            name: getParams("name","Name"),
            userName: getParams("userName","User name","userName"),
            password: getParams("password","Password","password", true, "password"),
            company: getParams("company","Company"),
            salary: getParams("salary","Salary"),
            city: getParams("address.city","City"),
            neighborhood: getParams("address.neighborhood","Neighborhood"),
            street: getParams("address.street","street"),
            number: getParams("address.number","number"),
        }
    }),
    components:{
        'ev-input': genericInput,
        'ev-submit': ButtonSubmit
    },
    computed:{
        formList(){
            return Object.keys(this.schema)
        },
    },
    methods:{
        setData(value,{ dataPath }){
            let copyValue = Object.assign({},this.value)
            set(copyValue,dataPath,value)
            this.$emit('input', copyValue)
        },
        getValue({ dataPath }){
            return get(this.value,dataPath)
        }
    },
}
function getParams(dataPath,label,name,required = true,type = 'text'){
    return {
        dataPath: dataPath,
        label: label,
        name: name || label.toLowerCase(),
        placeholder: `Your ${label}`,
        required: required,
        type: type
    }
}
</script>

<style>

</style>
