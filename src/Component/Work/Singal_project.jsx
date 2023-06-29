import Footer from "../Home/Footer";
import Header from "../Home/Header";

function Singal_project() {
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
                                    <h1>Single Project</h1>
                                    <span>Lovely layout </span>
                                </div>
                            </div>
                        </section>
                        <section className="single-project">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="single-project-item">
                                            <div className="slider">
                                                <div className="fullwidthbanner-container">
                                                    <div className="fullwidthbanner">
                                                        <ul>
                                                            <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                                                <img src="files/images/01-big-portfolio.jpg" data-fullwidthcentering="on" alt="slide" />
                                                            </li>
                                                            <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                                                <img src="files/images/02-big-portfolio.jpg" data-fullwidthcentering="on" alt="slide" />
                                                            </li>
                                                            <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                                                <img src="files/images/03-big-portfolio.jpg" data-fullwidthcentering="on" alt="slide" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-content">
                                                <h3><a href="#">Lorum Ipsum5</a></h3>
                                                <span><a href="#">Syam Imeri</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate cumque vitae necessitatibus recusandae suscipit ipsum a harum illo odit, facilis optio aspernatur, accusantium mollitia aut incidunt quasi earum libero possimus quaerat iste blanditiis assumenda dolorum ducimus ab. <br /><br /> <em><i className="fa fa-info" />Quis, sequi illo nobis velit. Quas minima corporis quis laborum, ex odit natus.</em><br /><br />Blanditiis possimus voluptas similique numquam consequatur dolorem labore veritatis quaerat laboriosam, porro tenetur vel exercitationem laborum aperiam repellat expedita ipsum corrupti perspiciatis! Quia necessitatibus totam repudiandae ipsam aut repellendus, aspernatur soluta consectetur aperiam accusantium aliquid beatae nihil magni nulla, similique minus perspiciatis provident qui veritatis dolorum quasi sint. Quam impedit in eos illum sint officiis reiciendis repellendus quia, similique ipsa porro accusantium dolores sunt error, ex, tempora et voluptatibus eveniet. <br /><br />Voluptatibus libero laboriosam tempore rerum error non. Perspiciatis deleniti iste a. Illo ipsum, commodi vel necessitatibus assumenda veritatis a velit possimus sint!</p>
                                                <div className="share-post">
                                                    <span>Share on: <a href="#">facebook</a>, <a href="#">twitter</a>, <a href="#">linkedin</a>, <a href="#">instagram</a></span>
                                                </div>
                                            </div>
                                            <div className="prev-btn col-md-4 col-sm-6 col-xs-6">
                                                <a href="#"><i className="fa fa-angle-left" />Previous</a>
                                            </div>
                                            <div className="next-btn col-md-4 col-sm-6 col-xs-6">
                                                <a href="#">Next<i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="single-project-sidebar">
                                            <div className="about-author">
                                                <img src="files/images/author.png" alt="author" />
                                                <div className="author-contet">
                                                    <h3>Syam Meri</h3>
                                                    <span>Webdesigner</span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quis ullam explicabo facere numquam architecto.</p>
                                                </div>
                                            </div>
                                            <div className="info project-name">
                                                <span>Project name: <em>Redesign</em></span>
                                            </div>
                                            <div className="info data-share">
                                                <span>Data shared: <em>8 June 2015</em></span>
                                            </div>
                                            <div className="info category">
                                                <span>Category: <em>Webdesign</em></span>
                                            </div>
                                            <div className="info share-on">
                                                <div className="social-icons">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                                        <li><a href="#"><i className="fa fa-rss" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="similar-projects">
                            <div className="container">
                                <div className="item col-md-4">
                                    <figure>
                                        <img alt="1-image" src="files/images/01-portfolio.jpg" />
                                        <figcaption>
                                            <h3>Normcore Dreamcatcher</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="item col-md-4">
                                    <figure>
                                        <img alt="2-image" src="files/images/02-portfolio.jpg" />
                                        <figcaption>
                                            <h3>Meggings Mixtape</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div className="item col-md-4">
                                    <figure>
                                        <img alt="3-image" src="files/images/03-portfolio.jpg" />
                                        <figcaption>
                                            <h3>Locavore Brooklyn</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </figcaption>
                                    </figure>
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

export default Singal_project;