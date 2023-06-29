import Footer from "../Home/Footer";
import Header from "../Home/Header";

function Contact() {
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
                                    <h1>Contact Us</h1>
                                    <span>Lovely layout of heading</span>
                                </div>
                            </div>
                        </section>
                        <section className="contact-map-wrapper">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>Find Us On Map</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="contact-map" style={{ height: 380 }} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="contact-us">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>Send Us A Message</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="send-message col-sm-12">
                                    <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
                                        <div className=" col-md-4 col-sm-4 col-xs-6">
                                            <input type="text" className="blog-search-field" name="s" placeholder="Your name..." defaultValue />
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-6">
                                            <input type="text" className="blog-search-field" name="s" placeholder="Your email..." defaultValue />
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <input type="text" className="subject" name="s" placeholder="Subject..." defaultValue />
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <textarea id="message" className="input" name="message" placeholder="Message..." defaultValue={""} />
                                        </div>
                                        <div className="submit-coment col-md-12">
                                            <div className="btn-black">
                                                <a href="#">Send now</a>
                                            </div>
                                        </div>
                                    </form>
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

export default Contact;