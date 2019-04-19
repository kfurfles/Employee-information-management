import { Authenticate } from '@/services/api'

export default{
    async Auth({}, payload){
        const r = await Authenticate(payload)
        console.log(r)
    }
}