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
                <div class="main-container" id="main-container">
                    <Menu />
                    {this.props.children}
                    <Footer/>
                </div>
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