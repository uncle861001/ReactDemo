import React, {Component} from 'react'
import {Link} from 'react-router'
import {Content, PageTool} from './common/index'

/**
 * redux 相关
 */
import {connect} from 'react-redux'
import {fetchListIfNeed} from '../actions/disAction'

import Tool from '../lib/Tool/Tool';

class User extends Component {
    constructor(props) {
        super(props);

        this.state=this.props.state;
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
                <div className="breadcrumbs" id="breadcrumbs">
                    <ul className="breadcrumb">
                        <li>
                            <i className="ace-icon fa fa-home home-icon"></i>
                            <Link to="/">主页</Link>
                        </li>
                        <li className="active">Api信息</li>
                    </ul>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <h1>
                            Api信息管理
                            <small>
                                <i className="ace-icon fa fa-angle-double-right"></i>
                                管理Api的信息
                            </small>
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-1">
                            <h4 className="header blue bolder smaller">查询</h4>
                            <div className="col-xs-3">
                                <div className="input-group input-group-sm">
                                    <span className="input-group-addon">API名称</span>
                                    <input type="text" className="form-control"
                                           placeholder="API名称"/>
                                </div>
                            </div>
                            <div className="col-xs-3">
                                <div className="input-group input-group-sm">
                                    <span className="input-group-addon">APIKEY</span>
                                    <input type="text" className="form-control"
                                           placeholder="APIKEY"/>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button className="btn btn-success btn-sm" type="button">
                                    <i className="ace-icon fa fa-search bigger-110 orange"></i>查询
                                </button>
                                <button type="button" className="btn btn-success btn-sm">
                                    <i className="ace-icon fa fa-refresh bigger-110 orange"></i>重置
                                </button>
                            </div>
                            <h4 className="header blue bolder smaller">API数据列表
                                <Link to="/apiDetail" className="btn btn-minier btn-info pull-right">
                                    <i className="ace-icon fa fa-plus bigger-110 orange"></i>增加</Link>
                            </h4>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="thin-border-bottom">
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
                    </div>
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
                                    <a ui-sref="index.apiDetail({id:x.id})" className="btn btn-pink btn-sm">
                                        <i class="ace-icon fa fa-edit bigger-110 orange"></i>编辑</a>
                                    <button type="button" className="btn btn-yellow btn-sm" ng-click="vm.deleteItem(x)">
                                        <i className="ace-icon fa fa-trash-o bigger-110 orange"></i>删除
                                    </button>
                                    <a ui-sref="index.choseCode({id:x.id})" className="btn btn-purple btn-sm">
                                        <i className="ace-icon fa fa-exchange bigger-110 orange"></i>错误代码</a>
                                    <a ui-sref="index.setExplain({id:x.id})" className="btn btn-danger btn-sm">
                                        <i className="ace-icon fa fa-tablet bigger-110 orange"></i>调用说明</a>
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