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
    constructor(props) {
        super(props);

        this.TogleClick = (e)=> {
            var $link = $(e.target);
            $link.parent().addClass('current');
        }
    }

    render() {
        return (
            <aside className="Hui-aside">
                <div className="menu_dropdown bk_2">
                    <dl id="menu_notes">
                        <dt className="">&nbsp;&nbsp;&nbsp;&nbsp;管理员管理<i
                            className="Hui-iconfont menu_dropdown-arrow"></i></dt>
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
            <section className="Hui-article-box">
                {this.props.children}
            </section>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <footer className="footer mt-20">
                <div className="container-fluid">
                    <p>Copyright &copy;2016 Ace All Rights Reserved. </p>
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
            startRow = 0, endRow = 0, total = 0, pages = 0, pageNum = 0, nextPage = 0, prePage = 0, pageSize = 0,
            hasPreviousPage = 0, hasNextPage = 0
        }=this.props.data;

        laypage({
            cont:'page'
        });
        return (
            <div id="page" className="text-c"></div>
        )
    }

}