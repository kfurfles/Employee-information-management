import { instance } from './config'

export async function Authenticate({ user, password }) {
    user = user.toLowerCase()
    const { data } = await instance.post('/auth',{ user, password })
    return data
}