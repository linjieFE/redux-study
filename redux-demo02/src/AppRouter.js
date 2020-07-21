import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; //引入router
// import Home from './Home';
// import List from './List';

import './index.css'
import Index from './Home'
//--关键代码------------start
import Video from './Pages/Video'
//--关键代码------------end
/**
 * 两个无状态组件 index & list
 * @param {*} props 
 */


function AppRouter() {
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
                    <li> <Link to="/">博客首页</Link> </li>
                    {/*--关键代码------------start*/}
                     <li><Link to="/video/">视频教程</Link> </li>
                    {/*--关键代码------------end*/}
                    <li><Link to="">职场技能</Link> </li>
                </ul>
            </div>

            <div className="rightMain">
                <Route path="/"  exact component={Index} />
                {/*--关键代码------------start*/}
                <Route path="/video/"   component={Video} />
                 {/*--关键代码------------end*/}
            </div>
          </div>
        </Router>
    );
}
export default AppRouter;