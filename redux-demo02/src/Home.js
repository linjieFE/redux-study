import React, { Component } from 'react';
import { Link,Redirect } from "react-router-dom";
/**
 * 标签式重定向
 */
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:123,title:'个人博客-1'},
                {cid:456,title:'个人博客-2'},
                {cid:789,title:'个人博客-3'},
            ]
        }
        // this.props.history.push("/home/");直接在构造函数constructor中加入下面的重定向代码---编程式重定向。
    }
    render() { 
        return ( 
            <ul>
                 {/* <Redirect to="/home/"/> 标签式重定向*/}
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <Link to={'/list/'+item.cid}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            );
    }
}
 
export default Home;