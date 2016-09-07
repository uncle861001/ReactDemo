import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import {Index} from '../component/Index';
import {ShowHeader, Menu, Footer} from '../component/common/index';
import User from '../component/User';

class Main extends Component {
    render() {
        return (
            <div>
                <ShowHeader/>
                <Menu />
                {this.props.children}
                <Footer/>
                <a href="javascript:void(0)" class="tools-right toTop Hui-iconfont" title="返回顶部" alt="返回顶部"
                   style="display:none"></a>
            </div>
        );
    };
}


const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index}/>
            <Route path="/adminUser" component={User}/>
        </Route>
    </Router>
);

export default route;