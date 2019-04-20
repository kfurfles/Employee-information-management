export const mutations = {
    SET_USER_LIST: 'SET_USER_LIST',
}
export default{
    [mutations.SET_USER_LIST]: (state,payload) => state.list = payload,
}