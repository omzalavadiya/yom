import Header from "../Home/Header";
import Footer from "../Home/Footer";


function Clients() {
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
                                    <h1>Our Clients</h1>
                                    <span>Lovely layout of heading</span>
                                </div>
                            </div>
                        </section>
                        <section className="call-to-action-1">
                            <div className="container">
                                <h4>Around 2,100 new user this month on YOM</h4>
                                <p className="col-md-10 col-md-offset-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quod voluptate consequuntur ad quasi, dolores obcaecati ex aliquid, dolor provident accusamus omnis dolorum ipsam. Voluptatem ipsum expedita, corporis facilis laborum asperiores nostrum! Amet porro numquam ratione temporibus quia dolorem sint lorem voluptates quasi mollitia.</p>
                                <div className="buttons">
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <div className="border-btn"><a href="#">Learn More</a></div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <div className="btn-black"><a href="#">Buy This Theme</a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="clients">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>Our Clients</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/01-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/02-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/03-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/04-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/05-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/06-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/07-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/08-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/09-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/10-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/11-client.png" alt /></a>
                                    </div>
                                </div>
                                <div className="col-md-2 col-sm-4 col-xs-12">
                                    <div className="client-item">
                                        <a href="#"><img src="files/images/12-client.png" alt /></a>
                                    </div>
                                </div>
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

export default Clients;