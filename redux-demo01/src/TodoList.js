import React, { Component } from 'react';
// import 'antd/dist/ants.css'
import 'antd/dist/antd.min.css'
import {Input, Button, List} from 'antd'

const data = [
    '早上8点开晨会,分配今天代码任务',
    '早上9点和项目经理开需求沟通会一',
    '早上9点和项目经理开需求沟通会一'
]

class TodoList extends Component {
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder="write Sometiong" 
                        style={{width:'250px',marginRight:'10px'}}
                    />
                    <Button type="primary">增加</Button>
                 </div>
                 <div style={{margin:'10px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />
                 </div>
            </div>
         );
    }
}
 
export default TodoList;