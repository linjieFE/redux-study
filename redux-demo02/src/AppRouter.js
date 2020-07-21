import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //引入router
// import Home from './Home';
// import List from './List';

import './index.css'
import Index from './Home'
//--关键代码------------start
import Video from './Pages/Video'
//--关键代码------------end

import Workplace from './Pages/workPlace'


function AppRouter() {
    /**
     * 模拟从后台得到JSON字符串，并转换为了对象（我们只是模拟，就不真的去远端请求数据了）
     */
    let routeConfig =[
        {path:'/',title:'博客首页',exact:true,component:Index},
        {path:'/video/',title:'视频教程',exact:false,component:Video},
        {path:'/workplace/',title:'职场技能',exact:false,component:Workplace}
    ]
    return (
    //   <Router>
    //       <ul>
    //           <li> <Link to="/">首页</Link> </li>
    //           <li><Link to="/list/123">列表</Link> </li>
    //       </ul>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/list/:id" component={List} />
    //   </Router>
        <Router>
          <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    {
                        routeConfig.map((item,index)=>{
                            return (<li key={index}> <Link to={item.path}>{item.title}</Link> </li>)
                        })
                    }
                    {/* <li> <Link to="/">博客首页</Link> </li> */}
                    {/*--关键代码------------start*/}
                     {/* <li><Link to="/video/">视频教程</Link> </li> */}
                    {/*--关键代码------------end*/}
                    {/* <li><Link to="/workplace/">职场技能</Link> </li> */}
                </ul>
            </div>

            <div className="rightMain">
                {
                    routeConfig.map((item,index)=>{
                        return (<Route key={index} exact={item.exact} path={item.path}  component={item.component} />)
                    })
                }

                {/* <Route path="/"  exact component={Index} /> */}
                {/*--关键代码------------start*/}
                {/* <Route path="/video/"   component={Video} /> */}
                 {/*--关键代码------------end*/}
                {/* <Route path="/workplace/"   component={Workplace} /> */}
            </div>
          </div>
        </Router>
    );
}
export default AppRouter;