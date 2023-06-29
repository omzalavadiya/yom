import Footer from "../Home/Footer";
import Header from "../Home/Header";

function Services() {
    return (
        <>

            <div className="sidebar-menu-container" id="sidebar-menu-container">
                <div className="sidebar-menu-push">
                    <div className="sidebar-menu-overlay" />
                    <div className="sidebar-menu-inner">
                        <Header/>
                        <section className="page-heading wow fadeIn" data-wow-duration="1.5s" style={{ backgroundImage: 'url(files/images/01-heading.jpg)' }}>
                            <div className="container">
                                <div className="page-name">
                                    <h1>Our Services</h1>
                                    <span>Lovely layout of heading</span>
                                </div>
                            </div>
                        </section>
                        <section className="services on-services green">
                            <div className="container">
                                <div className="row">
                                    <div className="section-heading">
                                        <h2>What We Offer</h2>
                                        <div className="section-dec" />
                                    </div>
                                    <div className="service-item col-md-4">
                                        <span><i className="fa fa-support" /></span>
                                        <div className="tittle"><h3>Fully Support</h3></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                    </div>
                                    <div className="service-item col-md-4">
                                        <span><i className="fa fa-html5" /></span>
                                        <div className="tittle"><h3>Created using HTML5</h3></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                    </div>
                                    <div className="service-item col-md-4">
                                        <span><i className="fa fa-css3" /></span>
                                        <div className="tittle"><h3>Created using CSS3</h3></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="service-item col-md-4">
                                        <span><i className="fa fa-mobile" /></span>
                                        <div className="tittle"><h3>Fully Responsive</h3></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                    </div>
                                    <div className="service-item col-md-4">
                                        <span><i className="fa fa-eye" /></span>
                                        <div className="tittle"><h3>Retina Ready</h3></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                    </div>
                                    <div className="service-item col-md-4">
                                        <span><i className="fa fa-cogs" /></span>
                                        <div className="tittle"><h3>Documentation Ready</h3></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="call-to-action-2">
                            <div className="container">
                                <div className="left-text hidden-xs">
                                    <h4>Know Us Better, Read This</h4>
                                    <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut explicabo magni sapiente.</em><br /><br />Inventore at quia, vel in repellendus, cumque dolorem autem ad quidem mollitia porro blanditiis atque rerum debitis eveniet nostrum aliquam. Sint aperiam expedita sapiente amet officia quis perspiciatis adipisci, iure dolorem esse exercitationem!</p>
                                </div>
                                <div className="right-image hidden-xs" />
                            </div>
                        </section>
                        <Footer/>
                        <a href="#" className="go-top"><i className="fa fa-angle-up" /></a>
                    </div>
                </div>
                <nav className="sidebar-menu slide-from-left">
                    <div className="nano">
                        <div className="content">
                            <nav className="responsive-menu">
                                <ul>
                                    <li><a href="index-2.html">Home</a></li>
                                    <li className="menu-item-has-children"><a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="clients.html">Clients</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog.html">Blog Classic</a></li>
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog-single.html">Single Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="menu-item-has-children"><a href="#">Works</a>
                                        <ul className="sub-menu">
                                            <li><a href="work-3columns.html">Three Columns</a></li>
                                            <li><a href="work-4columns.html">Four Columns</a></li>
                                            <li><a href="single-project.html">Single Project</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Services;