import React, {Component} from 'react'
import {Link} from 'react-router'
import {Content, PageTool, Footer} from './common/index'

/**
 * redux 相关
 */
import {connect} from 'react-redux'
import {fetchListIfNeed} from '../actions/disAction'

import Tool from '../lib/Tool/Tool';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
        this.DOMload = (props)=> {
            let {GET_DATA_SUCCESS, GET_DATA_ERROR}=props;
            let {baseUrl}=props.state.def;
            let pathname = baseUrl + 'base/api/search';
            this.state.url = pathname;
            const {dispatch}=this.props;
            dispatch(fetchListIfNeed(this.state));

        }

    }

    render() {
        let {list}=this.props.state;
        let main = null;
        if (Tool.isArray(list)) {
            main = (<UserList list={list}/>);
        }
        let pageTool = null;
        if (this.props.state.page) {
            pageTool = (<PageTool data={this.props.state.page}/>);
        }

        return (
            <Content>
                <nav className="breadcrumb">
                    <i className="Hui-iconfont Hui-iconfont-home"></i>
                    <Link to="/">主页</Link>
                    <span class="c-666 en">&gt;</span>
                    <span className="c-666">Api信息</span>
                    <a className="btn btn-success radius r" style={{lineHeight: '1.6em', marginTop: '3px'}}
                       href="javascript:location.replace(location.href);" title="刷新">
                        <i className="Hui-iconfont">&#xe68f;</i></a>
                </nav>

                <div className="page-container">
                    <div className="text-c">
                        <input className="input-text radius" style={{width: '250px'}} placeholder="API名称"/>
                        <input className="input-text radius" style={{width: '250px'}} placeholder="APIKEY"/>
                        <button name="" id="" className="btn btn-success" type="submit">
                            <i className="Hui-iconfont">&#xe665;</i>搜Api
                        </button>
                    </div>
                    <div className="cl pd-5 bg-1 bk-gray mt-20">
                                <span className="l">
                                   <a href="javascript:;" className="btn btn-primary radius">
                                       <i className="Hui-iconfont">&#xe600;</i> 添加Api</a>
                                </span>
                    </div>
                    <table className="table table-border table-bordered table-bg radius">
                        <thead>
                        <tr>
                            <th colSpan="6">Api列表</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>API编号</th>
                            <th>API名称</th>
                            <th>APIKEY</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        {main}
                    </table>
                    {pageTool}
                </div>
            </Content>
        )
    }

    componentDidMount() {
        this.DOMload(this.props);
    }

}

class UserList extends Component {
    render() {
        return (
            <tbody>
            {this.props.list.map((item, index)=> {
                    let {id, apiName, apiKey, createTime}=item;
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>{id }</td>
                            <td>{apiName }</td>
                            <td>{apiKey }</td>
                            <td>{createTime}</td>
                            <td>
                                <div className="btn-group">
                                    <a className="btn btn-primary radius">
                                        <i className="Hui-iconfont">&#xe60c;</i>编辑</a>
                                    <button type="button" className="btn btn-secondary radius">
                                        <i className="Hui-iconfont">&#xe60b;</i>删除
                                    </button>
                                    <a className="btn btn-success radius">
                                        <i className="Hui-iconfont">&#xe691;</i>错误代码</a>
                                    <a className="btn btn-success radius">
                                        <i className="Hui-iconfont">&#xe636;</i>调用说明</a>
                                </div>
                            </td>
                        </tr>
                    )
                }
            )}
            </tbody>
        );
    }
}


export default connect((state)=> {
    return {state: state.listReduce};
})(User);