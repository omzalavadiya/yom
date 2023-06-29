import Footer from "../Home/Footer";
import Header from "../Home/Header";

function Blog_singal() {
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
                                    <h1>Single Post</h1>
                                    <span>Lovely layout of heading</span>
                                </div>
                            </div>
                        </section>
                        <section className="blog-single">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="blog-single-item">
                                            <img src="files/images/01-big-blog.jpg" alt />
                                            <div className="blog-single-content">
                                                <h3><a href="#">Lorum Ipsum5</a></h3>
                                                <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate cumque vitae necessitatibus recusandae suscipit ipsum a harum illo odit, facilis optio aspernatur, accusantium mollitia aut incidunt quasi earum libero possimus quaerat iste blanditiis assumenda dolorum ducimus ab. <br /><br /> <em><i className="fa fa-info" />Quis, sequi illo nobis velit. Quas minima corporis quis laborum, ex odit natus.</em><br /><br />Blanditiis possimus voluptas similique numquam consequatur dolorem labore veritatis quaerat laboriosam, porro tenetur vel exercitationem laborum aperiam repellat expedita ipsum corrupti perspiciatis! Quia necessitatibus totam repudiandae ipsam aut repellendus, aspernatur soluta consectetur aperiam accusantium aliquid beatae nihil magni nulla, similique minus perspiciatis provident qui veritatis dolorum quasi sint. Quam impedit in eos illum sint officiis reiciendis repellendus quia, similique ipsa porro accusantium dolores sunt error, ex, tempora et voluptatibus eveniet. <br /><br />Voluptatibus libero laboriosam tempore rerum error non. Perspiciatis deleniti iste a. Illo ipsum, commodi vel necessitatibus assumenda veritatis a velit possimus sint!</p>
                                                <div className="share-post">
                                                    <span>Share on: <a href="#">facebook</a>, <a href="#">twitter</a>, <a href="#">linkedin</a>, <a href="#">instagram</a></span>
                                                </div>
                                            </div>
                                            <div className="prev-btn col-md-6 col-sm-6 col-xs-6">
                                                <a href="#"><i className="fa fa-angle-left" />Previous</a>
                                            </div>
                                            <div className="next-btn col-md-6 col-sm-6 col-xs-6">
                                                <a href="#">Next<i className="fa fa-angle-right" /></a>
                                            </div>
                                        </div>
                                        <div className="blog-comments">
                                            <h2>7 Comments</h2>
                                            <ul className="coments-content">
                                                <li className="first-comment-item">
                                                    <img src="files/images/01-author-comment.jpg" alt />
                                                    <span className="author-title"><a href="#">Akhil Raj</a></span>
                                                    <span className="comment-date">10 May 2015 / <a href="#">Reply</a>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, libero sit amet maximus ultricies, tortor justo venenatis justo, ac auctor quam lorem ac lectus.</p>
                                                </li>
                                                <li className="second-comment-item">
                                                    <img src="files/images/02-author-comment.jpg" alt />
                                                    <span className="author-title"><a href="#">Meera</a></span>
                                                    <span className="comment-date">12 May 2015 / <a href="#">Reply</a>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, libero sit amet maximus ultricies, tortor justo venenatis justo.</p>
                                                </li>
                                                <li className="third-comment-item">
                                                    <img src="files/images/03-author-comment.jpg" alt />
                                                    <span className="author-title"><a href="#">Joseph</a></span>
                                                    <span className="comment-date">14 June 2015 / <a href="#">Reply</a>
                                                    </span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, libero sit amet maximus ultricies, tortor justo venenatis justo, ac auctor quam lorem ac lectus.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="submit-comment col-sm-12">
                                            <h2>Leave A Comment</h2>
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
                                                    <textarea id="message" className="input" name="message" placeholder="Comment..." defaultValue={""} />
                                                </div>
                                                <div className="submit-coment col-md-12">
                                                    <div className="btn-black">
                                                        <a href="#">Submit now</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="widget-item">
                                            <h2>Search here</h2>
                                            <div className="dec-line" />
                                            <form method="get" id="blog-search" className="blog-search">
                                                <input type="text" className="blog-search-field" name="s" placeholder="Type keyword..." defaultValue />
                                            </form>
                                        </div>
                                        <div className="widget-item">
                                            <h2>About Us</h2>
                                            <div className="dec-line">
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique earum quod iste, natus quaerat facere a rem dolor sit amet, et placeat nemo.</p>
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
                                        <div className="widget-item">
                                            <h2>Recent Posts</h2>
                                            <div className="dec-line" />
                                            <ul className="recent-item">
                                                <li className="recent-post-item">
                                                    <a href="#">
                                                        <img src="files/images/01-recentpost.jpg" alt />
                                                        <span className="post-title">Jhony Sebastian</span>
                                                    </a>
                                                    <span className="post-info">10 June 2015</span>
                                                </li>
                                                <li className="recent-post-item">
                                                    <a href="#">
                                                        <img src="files/images/02-recentpost.jpg" alt />
                                                        <span className="post-title">Ramshad Padinjarayil</span>
                                                    </a>
                                                    <span className="post-info">9 June 2015</span>
                                                </li>
                                                <li className="recent-post-item">
                                                    <a href="#">
                                                        <img src="files/images/03-recentpost.jpg" alt />
                                                        <span className="post-title">Akil Raj</span>
                                                    </a>
                                                    <span className="post-info">7 June 2015</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget-item">
                                            <h2>From Flickr</h2>
                                            <div className="dec-line" />
                                            <div className="flickr-feed">
                                                <ul className="flickr-images">
                                                </ul>
                                            </div>
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

export default Blog_singal;