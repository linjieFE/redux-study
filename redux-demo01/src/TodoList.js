import React, { Component } from 'react';
// import 'antd/dist/ants.css'
import 'antd/dist/antd.min.css'
import {Input, Button, List} from 'antd'
import store from './store/index'//引入store

class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state=store.getState()
    }
    
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{width:'250px',marginRight:'10px'}}
                    />
                    <Button type="primary">增加</Button>
                 </div>
                 <div style={{margin:'10px', width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />
                 </div>
            </div>
         );
    }
}
 
export default TodoList;