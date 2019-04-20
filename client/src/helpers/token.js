import { parseJwt } from '@/helpers/jwt'

export const GET_TOKEN = () => JSON.parse(localStorage.getItem('token'))
export const SET_TOKEN = (token) => localStorage.setItem('token', token ? JSON.stringify(token) : '')
export const PARSET_TOKEN = () => parseJwt(GET_TOKEN())