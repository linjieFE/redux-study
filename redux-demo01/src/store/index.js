
import { createStore, applyMiddleware, compose } from 'redux'//compose->增强函数
import reducer from './reducer'//图书管理员
// import thunk from 'redux-thunk'
import creactSagaMiddleware from 'redux-saga'
import mySages from './sagas'
const sagaMiddleware =creactSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :compose

const enhancer =composeEnhancers(applyMiddleware(sagaMiddleware))
//createStore只能写两个参数
const store = createStore(
    reducer,
    enhancer,
)//生成一个store 把reducer 传入store

sagaMiddleware.run(mySages)

export default store