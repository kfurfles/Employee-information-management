export const mutations = {
    SET_MESSAGE: 'SET_MESSAGE',
    SET_MESSAGE_STATE: 'SET_MESSAGE_STATE'
}
export default{
    [mutations.SET_MESSAGE]: (state,payload) => state.message = payload,
    [mutations.SET_MESSAGE_STATE]: (state,payload) => state.active = payload
}