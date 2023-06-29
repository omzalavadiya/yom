function Header() {
    return (
        <>
            <header className="site-header">
                <div id="main-header" className="main-header header-sticky">
                    <div className="inner-header clearfix">
                        <div className="logo">
                            <a href="/">YOM</a>
                        </div>
                        <div className="header-right-toggle pull-right hidden-md hidden-lg">
                            <a href="javascript:void(0)" className="side-menu-button"><i className="fa fa-bars" /></a>
                        </div>
                        <nav className="main-navigation pull-right hidden-xs hidden-sm">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#" className="has-submenu">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="/Services">Services</a></li>
                                        <li><a href="/Clients">Clients</a></li>
                                    </ul>
                                </li>
                                <li><a href="#" className="has-submenu">Blog</a>
                                    <ul className="sub-menu">
                                        <li><a href="/Blog">Blog Classic</a></li>
                                        <li><a href="/Blog_gird">Blog Grid</a></li>
                                        <li><a href="/Blog_Singal">Single Post</a></li>
                                    </ul>
                                </li>
                                <li><a href="/About">About</a></li>
                                <li><a href="#" className="has-submenu">Work</a>
                                    <ul className="sub-menu">
                                        <li><a href="/Three_columns">Three Columns</a></li>
                                        <li><a href="/Four_columns">Four Columns</a></li>
                                        <li><a href="/Singal_project">Single Project</a></li>
                                    </ul>
                                </li>
                                <li><a href="/Contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;