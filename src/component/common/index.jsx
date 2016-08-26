import React, {Component} from 'react'
import {Link} from 'react-router'

export class Header extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let {trueName, title}=this.props;
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini"><b>ace</b>api</span>
                    <span className="logo-lg"><b>Ace</b>Api</span>
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    {trueName}
                </nav>
            </header>
        )
    }
}

export class Menu extends Component {
    render() {
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="header">HEADER</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-laptop"></i>
                                <span>UI Elements</span>
                                <span className="pull-right-container">
                                    <i className="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                                <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                                <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                                <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                                <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                                <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    };

}

export class Footer extends Component{
    render(){
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    Anything you want
                </div>
                <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
            </footer>
        );
    }
}