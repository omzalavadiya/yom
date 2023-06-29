import Footer from "../Home/Footer";
import Header from "../Home/Header";

function Blog() {
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
                                    <h1>Our Blog</h1>
                                    <span>Lovely layout of heading</span>
                                </div>
                            </div>
                        </section>
                        <section className="on-blog-grid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="blog-item">
                                            <a href="blog-single.html"><img src="files/images/01-blog.jpg" alt /></a>
                                            <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                            <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam porro atque dolore corporis et iste assumenda quas, cumque modi quibusdam. Eveniet modi aliquid ex...</p>
                                            <div className="read-more">
                                                <a href="blog-single.html">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-item">
                                            <a href="blog-single.html"><img src="files/images/02-blog.jpg" alt /></a>
                                            <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                            <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam porro atque dolore corporis et iste assumenda quas, cumque modi quibusdam. Eveniet modi aliquid ex...</p>
                                            <div className="read-more">
                                                <a href="blog-single.html">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-item">
                                            <a href="blog-single.html"><img src="files/images/03-blog.jpg" alt /></a>
                                            <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                            <span><a href="#">Syam Kesav</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam porro atque dolore corporis et iste assumenda quas, cumque modi quibusdam. Eveniet modi aliquid ex...</p>
                                            <div className="read-more">
                                                <a href="blog-single.html">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-item">
                                            <a href="blog-single.html"><img src="files/images/04-blog.jpg" alt /></a>
                                            <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                            <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam porro atque dolore corporis et iste assumenda quas, cumque modi quibusdam. Eveniet modi aliquid ex...</p>
                                            <div className="read-more">
                                                <a href="blog-single.html">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-item">
                                            <a href="blog-single.html"><img src="files/images/05-blog.jpg" alt /></a>
                                            <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                            <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam porro atque dolore corporis et iste assumenda quas, cumque modi quibusdam. Eveniet modi aliquid ex...</p>
                                            <div className="read-more">
                                                <a href="blog-single.html">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="blog-item">
                                            <a href="blog-single.html"><img src="files/images/06-blog.jpg" alt /></a>
                                            <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                            <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam porro atque dolore corporis et iste assumenda quas, cumque modi quibusdam. Eveniet modi aliquid ex...</p>
                                            <div className="read-more">
                                                <a href="blog-single.html">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="blog-page-nav text-center">
                                            <ul>
                                                <li><a href="#" className="current">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
                                            </ul>
                                        </div>
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

export default Blog;