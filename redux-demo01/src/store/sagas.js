import {takeEvery, put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import { getListAction} from './actionCreators'
import axios from 'axios'
function* mySaga() {
    //saga api 监听函数
    yield takeEvery(GET_MY_LIST,getlist)
}

function* getlist(){
    // console.log('saga!')
    // axios.get('http://rap2.taobao.org:38080/app/mock/4705/getList').then((result) => {
    //     const data = result.data
    //     const action = getListAction(data)
    //     put(action)
    //     //put 是saga API中自带方法代替dispatch
    // })
    const res = yield axios.get('http://rap2.taobao.org:38080/app/mock/4705/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga