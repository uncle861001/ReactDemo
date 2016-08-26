import React,{ Component } from 'react'
import action from '../actions/action'
import { connect } from 'react-redux'

import {Header,Menu,Footer} from './common/index'

class Index extends Component{
    render(){
        let { msg}=this.props;
        return(
            <div>
                <Header trueName={msg.name}/>
                <Menu />
                <Content/>
                <Footer/>
            </div>
        );
    };
}

class Content extends Component{
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Page Header
                        <small>Optional description</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
                        <li className="active">Here</li>
                    </ol>
                </section>
                <section className="content">
                </section>
            </div>
        );
    }
}

export default connect((state) => {return {msg: state.fist.def};},action('mainList'))(Index);