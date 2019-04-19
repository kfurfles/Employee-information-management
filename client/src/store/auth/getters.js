import { parseJwt } from '@/helpers/jwt'

export default{
    getUser: () => parseJwt(localStorage.getItem('token'))
}