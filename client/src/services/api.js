import { instance } from './config'
import { validationParams } from './../helpers/validators'

export function Authenticate({ user, password }) {
    try {
        validationParams([user,password])
        return instance.post('/auth',{ user, password })
    } catch (error) {
        console.error(error)
    }
}