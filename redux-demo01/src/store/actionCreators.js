import { CHANGE_INPUT, DELETE_ITEM, ADD_ITEM, GET_LIST} from './actionTypes'
import axios from 'axios'
export const changInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (data)=>({
    type:GET_LIST,
    data
})

export const getTodoList = ()=>{
    // 返回一个函数
    return (dispatch)=>{
        axios.get('http://rap2.taobao.org:38080/app/mock/4705/getList').then((result) => {
            const data = result.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}
