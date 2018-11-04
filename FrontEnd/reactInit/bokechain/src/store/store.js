//  redux 
// store  actions reducer(state,action)
// 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。 
// 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。 为了描述 action 如何改变 state 树，你需要编写 reducers。

import { applyMiddleware ,compose, createStore } from 'redux'
import { loadStorage } from './../util/localStorage'
import rootReducer from './reducers'

const pesistState = loadStorage();
const store = createStore(rootReducer,pesistState)

export default store