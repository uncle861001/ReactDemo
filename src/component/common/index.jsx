import React,{Component} from 'react'
import {Link} from 'react-router'

export class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {trueName,title}=this.props;
        return(
            <header className="navbar-wrapper">
                <div className="navbar navbar-fixed-top">
                    <div className="container-fluid cl">
                        <a className="logo navbar-logo f-l mr-10 hidden-xs" href="/aboutHui.shtml">H-ui.admin</a>
                        <a className="logo navbar-logo-m f-l mr-10 visible-xs" href="/aboutHui.shtml">H-ui</a>
                        <span className="logo navbar-slogan f-l mr-10 hidden-xs">v2.4</span>
                        <nav id="Hui-userbar" className="nav navbar-nav navbar-userbar hidden-xs">
                            <ul className="cl">
                                <li>{trueName}</li>
                                <li className="dropDown dropDown_hover"> <a href="#" className="dropDown_A">{title}
                                    <i className="Hui-iconfont">&#xe6d5;</i></a>
                                    <ul className="dropDown-menu menu radius box-shadow">
                                        <li><a href="#">个人信息</a></li>
                                        <li><a href="#">切换账户</a></li>
                                        <li><a href="#">退出</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export class Menu extends Component{
    render(){
        let arr=[];
        arr[this.props.index]='on';
        return(
            <div>
                <aside className="Hui-aside">
                    <input runat="server" id="divScrollValue" type="hidden" value="" />
                    <div className="menu_dropdown bk_2">
                        <dl id="menu-article">
                            <dt><i className="Hui-iconfont">&#xe616;</i> 资讯管理<i className="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
                            <dd>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            资讯管理
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <dl id="menu-admin">
                            <dt><i className="Hui-iconfont">&#xe62d;</i> 管理员管理<i className="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
                            <dd>
                                <ul>
                                    <li>
                                        <Link to="/Users">
                                            角色管理
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Users">
                                            权限管理
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Users">
                                            管理员列表
                                        </Link>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </aside>
            </div>
        );
    };

}