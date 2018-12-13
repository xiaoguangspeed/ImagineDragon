import * as types from './mutation-type.js'

export const mutations = {
    [types.CHANGE_APPID](state,payload){
        state.appId = payload;
    }
}