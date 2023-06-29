import Footer from "../Home/Footer";
import Header from "../Home/Header";

function Three_columns() {
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
                                    <h1>Latest Photos</h1>
                                    <span>Lovely layout of heading</span>
                                </div>
                            </div>
                        </section>
                        <section className="portfolio on-portfolio">
                            <div className="container">
                                <div className="col-sm-12 text-center">
                                    <div id="projects-filter">
                                        <a href="#" data-filter="*" className="active">Show All</a>
                                        <a href="#" data-filter=".furniture">Furniture</a>
                                        <a href="#" data-filter=".wallpaper">Wallpaper</a>
                                        <a href="#" data-filter=".nature">Nature</a>
                                        <a href="#" data-filter=".branding">Branding</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="row" id="portfolio-grid">
                                        <div className="item col-md-4 col-sm-6 col-xs-12 furniture">
                                            <figure>
                                                <img alt="1-image" src="files/images/01-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Plaid Authentic</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 wallpaper">
                                            <figure>
                                                <img alt="2-image" src="files/images/02-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Portland Neutral</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 furniture">
                                            <figure>
                                                <img alt="3-image" src="files/images/03-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Synth Thundercats</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 wallpaper">
                                            <figure>
                                                <img alt="4-image" src="files/images/04-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Bushwick Letterpress</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 furniture">
                                            <figure>
                                                <img alt="5-image" src="files/images/05-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Fashion Heirloom</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 nature">
                                            <figure>
                                                <img alt="6-image" src="files/images/06-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Locavore Brooklyn</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 branding">
                                            <figure>
                                                <img alt="7-image" src="files/images/07-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Meggings Mixtape</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 wallpaper furniture">
                                            <figure>
                                                <img alt="8-image" src="files/images/08-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Normcore Dreamcatcher</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div className="item col-md-4 col-sm-6 col-xs-12 branding nature">
                                            <figure>
                                                <img alt="9-image" src="files/images/09-portfolio.jpg" />
                                                <figcaption>
                                                    <h3>Street Fanny</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="portfolio-page-nav text-center">
                                        <ul>
                                            <li><a href="#" className="current">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
                                        </ul>
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

export default Three_columns;