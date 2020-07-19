import React, { Component } from 'react';
// import 'antd/dist/ants.css'
import 'antd/dist/antd.min.css'
import {Input, Button, List} from 'antd'
import store from './store/index'//引入store
import axios from 'axios'
import {
    changInputAction, 
    addItemAction, 
    deleteItemAction,
    // getListAction, 
    getTodoList} from './store/actionCreators'
class TodoList extends Component {
    constructor(props){
        super(props)
        // console.log(store.getState())
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange =this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        //订阅
        store.subscribe(this.storeChange)//类例vue wacth
    }
    
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{width:'250px',marginRight:'10px'}}
                        onChange={this.changeInputValue}
                    />
                    <Button type="primary"
                        onClick={this.clickBtn}
                        >增加
                    </Button>
                 </div>
                 <div style={{margin:'10px', width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) =>(<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                 </div>
            </div>
         );
    }
    componentDidMount(){
        // axios.get('http://rap2.taobao.org:38080/app/mock/4705/getList').then((result) => {
        //     const data = result.data
        //     const action =getListAction(data)
        //     store.dispatch(action)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }
    // 给input增加一个onchange事件
    changeInputValue(e){
        // 建立一个action与redux建立连接
        const action = changInputAction(e.target.value)
        store.dispatch(action)//发送给store
    }

    //订阅事件
    storeChange(){
        this.setState(store.getState())
    }

    //点击增加
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }

    //删除
    deleteItem(index){
        console.log(index)
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;