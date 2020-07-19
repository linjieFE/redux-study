// 报漏一个方法
const defaultState = {
    inputValue:'Write Someting',
    list:[
        '早上8点开晨会,分配今天代码任务',
        '早上9点和项目经理开需求沟通会一',
        '早上9点和项目经理开需求沟通会二'
    ]
}//默认对象
export default (state = defaultState ,action)=>{
    return state
}