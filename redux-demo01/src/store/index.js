
import { createStore } from 'redux'
import reducer from './reducer'//图书管理员
const store = createStore(reducer)//生成一个store 把reducer 传入store
export default store