import { instance } from './config'

export function Auth({ user, password }) {
    
    return instance.get('/auth',{

    })
}