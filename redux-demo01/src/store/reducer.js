import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'//引入store

// 报漏一个方法
const defaultState = {
    inputValue:'Write Someting',
    list:[
        // '早上8点开晨会,分配今天代码任务',
        // '早上9点和项目经理开需求沟通会一',
        // '早上9点和项目经理开需求沟通会二'
    ]
}
//默认对象
export default (state = defaultState ,action)=>{
    // console.log(state,action)

    //Reducer里只以接收state，不能改变state
    /**
     * 输入input框时
     */
    if(action.type ===CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.inputValue = action.value
        return newState
    }

    //点击增加按钮的action
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    //点击增加按钮的action
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list = action.data.list
        return newState
    }
    return state
}