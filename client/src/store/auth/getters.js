import { parseJwt } from '@/helpers/jwt'

export default{
    getUser: (state) => parseJwt(state.token)
}