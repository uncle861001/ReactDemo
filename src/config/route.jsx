import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import {Index} from '../component/Index';
import {ShowHeader, Menu} from '../component/common/index';
import User from '../component/User';

class Main extends Component {
    render() {
        return (
            <div>
                <ShowHeader/>
                <Menu />
                {this.props.children}
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