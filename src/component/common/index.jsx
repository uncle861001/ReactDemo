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
            <header className="navbar-wrapper">
                <div className="navbar navbar-black">
                    <div className="container-fluid cl">
                        <a className="logo navbar-logo hidden-xs" href="/aboutHui.shtml">ApiAce</a>
                    </div>
                </div>
            </header>
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
            $link.parent().addClass('current');
        }
    }
    render() {
        return (
            <aside className="Hui-aside">
                <div className="menu_dropdown bk_2">
                    <dl id="menu_notes">
                        <dt className="">&nbsp;&nbsp;&nbsp;&nbsp;管理员管理<i className="Hui-iconfont menu_dropdown-arrow"></i></dt>
                        <dd style={{display: 'none'}}>
                            <ul>
                                <li><Link to="/adminUser" onClick={this.TogleClick}>Api管理</Link></li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </aside>
        );
    };
}

export class Content extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="main-content-inner">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-20">
                <div className="container-fluid">

                </div>
            </footer>
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