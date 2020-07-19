import React, { Component } from 'react';
import store from './store/index';
import {connect} from 'react-redux';//连接器
class TodoList extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div>
                <div>
                   <input value={this.props.inputValue}/>
                   <button>提交</button> 
                </div>
                <ul>
                    <li>jspang</li>
                </ul>
            </div> 
        );
    }
}
 const stateToProps=(state)=>{
     return {
         inputValue:state.inputValue
     }
 }
export default connect(stateToProps,null)(TodoList);