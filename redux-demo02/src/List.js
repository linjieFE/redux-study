import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <h2>List page  {this.state.id}</h2> );
    }

    //-接收传递过来的值 关键代码---------start
    componentDidMount(){
        
        let tempId=this.props.match.params.id
        console.log(this.props.match,tempId)
        this.setState({id:tempId })
    }
    //-接收传递过来的值 关键艾玛---------end
}
 
export default List;