import React,{ Component } from 'react'
import action from '../actions/action'
import { connect } from 'react-redux'

import {Header,Menu} from './common/index'

class Index extends Component{
    render(){
        let { msg}=this.props;
        return(
            <div>
                <Header trueName={msg.name}/>
                <Menu />
            </div>
        );
    };
}

export default connect((state) => {return {msg: state.fist.def};},action('mainList'))(Index);