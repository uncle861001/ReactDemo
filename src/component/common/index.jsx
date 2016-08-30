import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {msg}=this.props;
        return (
            <div id="navbar" className="navbar navbar-default">
                <div className="navbar-container" id="navbar-container">
                    <button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler"
                            data-target="#sidebar">
                        <span className="sr-only">Toggle sidebar</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-header pull-left">
                        <a ui-sref="index" className="navbar-brand">
                            <small>
                                <i className="fa fa-leaf"></i>
                                Api管理系统
                            </small>
                        </a>
                    </div>

                    <div className="navbar-buttons navbar-header pull-right" role="navigation">
                        <ul className="nav ace-nav">
                            <li className=" green">
                                <a>
						<span className="user-info">
							<small>欢迎光临,</small>
                            {msg.name}
						</span>
                                </a>
                            </li>
                            <li className="grey">
                                <a ui-sref="index.changePassword">
                                    <i className="ace-icon fa fa-cog"></i>
                                    修改密码
                                </a>
                            </li>
                            <li className="purple">
                                <a ui-sref="index.userProfile({id:vm.user.id})">
                                    <i className="ace-icon fa fa-user"></i>
                                    个人资料
                                </a>
                            </li>
                            <li className="light-blue">
                                <a ng-click="vm.logout()">
                                    <i className="ace-icon fa fa-power-off"></i>
                                    退出
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
}

export let ShowHeader = connect((state)=> {
    return {msg: state.fist.def};
})(Header);

export class Menu extends Component {
    constructor(props){
        super(props);

        this.TogleClick=(e)=>{
            var $link=$(e.target);
            $link.parents().find('.open').addClass('active')
            $link.parents().addClass('active');
        }
    }
    render() {
        return (
            <div className="sidebar responsive" id="sidebar">
                <ul className="nav nav-list">
                    <li>
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-list"></i>
                            <span className="menu-text">Api管理</span>
                            <b className="arrow fa fa-angle-down"></b>
                        </a>
                        <b className="arrow"></b>
                        <ul className="submenu">
                            <li>
                                <Link to="/adminUser" onClick={this.TogleClick}>
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    Api管理
                                </Link>
                                <b className="arrow"></b>
                            </li>
                            <li>
                                <a href="jqgrid.html">
                                    <i className="menu-icon fa fa-caret-right"></i>
                                    jqGrid plugin
                                </a>
                                <b className="arrow"></b>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    };
}

export class Content extends Component {
    render() {
        return (
            <div className="main-content">
                {this.props.children}
            </div>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-inner">
                    <div className="footer-content">
						<span className="bigger-120">
							<span className="blue bolder">Ace</span>
							Application &copy; 2016-2017
						</span>
                    </div>
                </div>
            </div>
        );
    }
}

export class PageTool extends Component {
    constructor(props) {
        super(props);

        this.changeSelect = (pageNum)=> {

        }

    }

    render() {
        let {
            startRow=0, endRow=0, total=0, pages=0, pageNum=0, nextPage=0, prePage=0, pageSize=0,
            hasPreviousPage=0, hasNextPage=0
        }=this.props.data;
        let widthStyle = {
            width: '80px'
        }

        let marStyle = {
            margin: '5px'
        }
        return (
            <div className="row">
                <div className="col-xs-4">
                            <span className="text">显示<span
                                className="badge badge-pink">{startRow}</span>
                        到<span className="badge badge-pink">{endRow}</span>项,
                        共<span className="badge badge-pink">{total}</span>项,共
                        <span className="badge badge-pink">{pages}</span>页 第
                        <span className="badge badge-pink">{pageNum}</span>页 </span>
                </div>

                <div className="col-xs-2 col-xs-offset-1">
                        {
                            (()=> {
                                if (pageSize === 5) {
                                    return (
                                        <select className="form-control" style={widthStyle}>
                                            <option value="5" selected>5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                        </select>
                                    )
                                } else if (pageSize == 10) {
                                    return (
                                        <select className="form-control" style={widthStyle}>
                                            <option value="5" >5</option>
                                            <option value="10" selected>10</option>
                                            <option value="15">15</option>
                                        </select>
                                    )
                                } else if (pageSize === 15) {
                                    return (
                                        <select className="form-control" style={widthStyle}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15" selected>15</option>
                                        </select>
                                    )
                                }
                            })()

                        }
                </div>

                <div className="col-xs-4 pull-right">
                    <ul className="pager pull-right" style={marStyle}>
                        {
                            (()=> {
                                if (hasNextPage) {
                                    return (
                                        <li className="next">
                                            <a onClick={this.changeSelect(nextPage)}>下一页<span
                                                aria-hidden="true">&rarr;</span></a></li>
                                    )

                                } else {
                                    return (
                                        <li className="next disabled">
                                            <a onClick={this.changeSelect(nextPage)}>下一页<span
                                                aria-hidden="true">&rarr;</span></a></li>
                                    )
                                }
                            })()
                        }
                        {
                            (()=> {
                                if (hasPreviousPage) {
                                    return (
                                        <li className="previous">
                                            <a onClick={this.changeSelect(prePage)}>
                                                <span aria-hidden="true">&larr;</span> 上一页</a></li>
                                    )
                                } else {
                                    return (
                                        <li className="previous disabled">
                                            <a onClick={this.changeSelect(prePage)}>
                                                <span aria-hidden="true">&larr;</span> 上一页</a></li>
                                    )
                                }
                            })()
                        }
                    </ul>
                </div>
            </div>
        )
    }

}