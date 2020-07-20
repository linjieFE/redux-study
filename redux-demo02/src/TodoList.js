import React, { Component } from 'react';
// import store from './store/index';
import {connect} from 'react-redux';//连接器
class TodoList extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() { 
        return ( 
            <div>
                <div>
                   <input value={this.props.inputValue} onChange={this.props.inputChange}/>
                   <button onClick={this.props.clickBtn}>提交</button> 
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    } 
                </ul>
            </div> 
        );
    }
    
}
 const stateToProps=(state)=>{
     return {
         inputValue:state.inputValue,
         list:state.list
     }
 }

 const dispatchToProps = (dispatch)=>{
     return {
        inputChange(e){
            const action={
                type:'changeInput',
                value:e.target.value
            }
            dispatch(action)

        },
        clickBtn(){
            const action={
                type:'addItem',
            }
            dispatch(action)
        }
     }
 }
 
export default connect(stateToProps,dispatchToProps)(TodoList);