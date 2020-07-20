import React, { Component } from 'react';
// import store from './store/index';
import {connect} from 'react-redux';//连接器

/**
 * 改成无状态组件的优点
 * @param {*} props 
 */
const TodoList =(props)=>{
    let {inputValue,inputChange,deleteItem,clickBtn,list} = props
    return (
        <div>
            <div>
            <input value={inputValue} onChange={inputChange}/>
            <button onClick={clickBtn}>提交</button> 
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (
                            <li key={index} onClick={deleteItem.bind(this,index)}>{item}</li>
                        )
                    })
                } 
            </ul>
        </div> 
    )
}

// class TodoList extends Component {
//     render() { 
//         let {inputValue,inputChange,deleteItem,clickBtn,list} = this.props
//         return ( 
//             <div>
//                 <div>
//                    <input value={inputValue} onChange={inputChange}/>
//                    <button onClick={clickBtn}>提交</button> 
//                 </div>
//                 <ul>
//                     {
//                         list.map((item,index)=>{
//                             return (
//                                 <li key={index} onClick={deleteItem.bind(this,index)}>{item}</li>
//                             )
//                         })
//                     } 
//                 </ul>
//             </div> 
//         );
//     }
    
// }
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
        },
        deleteItem(index){
            const action={
                type:'deleteItem',
                index
            }
            dispatch(action)
        }
     }
 }
 
export default connect(stateToProps,dispatchToProps)(TodoList);