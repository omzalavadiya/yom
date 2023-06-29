import Footer from "./Footer";
import Header from "./Header";


function Index() {
    return (
        <>
            <div className="sidebar-menu-container" id="sidebar-menu-container">
                <div className="sidebar-menu-push">
                    <div className="sidebar-menu-overlay" />
                    <div className="sidebar-menu-inner">

                        <Header/>

                        <div className="slider">
                            <div className="fullwidthbanner-container">
                                <div className="fullwidthbanner">
                                    <ul>
                                        <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                            <img src="files/images/01-slide.jpg" data-fullwidthcentering="on" alt="slide" />
                                            <div className="tp-caption first-line lft tp-resizeme start" data-x="center" data-hoffset={0} data-y={250} data-speed={1000} data-start={200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>YOM-DOWNLOAD ANYTHING</div>
                                            <div className="tp-caption second-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={340} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>From Yom you can download anything for free</div>
                                            <div className="tp-caption slider-btn sfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={510} data-speed={1000} data-start={2200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}><a href="#" className="btn btn-slider">Discover More</a></div>
                                        </li>
                                        <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                            <img src="files/images/02-slide.jpg" data-fullwidthcentering="on" alt="slide" />
                                            <div className="tp-caption first-line lft tp-resizeme start" data-x="center" data-hoffset={0} data-y={250} data-speed={1000} data-start={200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Create a Multi Author Blog</div>
                                            <div className="tp-caption second-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={340} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Using Yom you can create multi author Blog platform</div>
                                            <div className="tp-caption slider-btn sfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={510} data-speed={1000} data-start={2200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}><a href="#" className=" second-btn btn btn-slider">Discover More</a></div>
                                        </li>
                                        <li className="first-slide" data-transition="fade" data-slotamount={10} data-masterspeed={300}>
                                            <img src="files/images/03-slide.jpg" data-fullwidthcentering="on" alt="slide" />
                                            <div className="tp-caption first-line lft tp-resizeme start" data-x="center" data-hoffset={0} data-y={250} data-speed={1000} data-start={200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Create an E-commerce Site</div>
                                            <div className="tp-caption second-line lfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={340} data-speed={1000} data-start={800} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}>Using Yom your can create a Multi Author E-Commerce Website</div>
                                            <div className="tp-caption slider-btn sfb tp-resizeme start" data-x="center" data-hoffset={0} data-y={510} data-speed={1000} data-start={2200} data-easing="Power4.easeOut" data-splitin="none" data-splitout="none" data-elementdelay={0} data-endelementdelay={0}><a href="#" className="btn btn-slider">Discover More</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section className="services green">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>What We Offer</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="service-item col-md-4">
                                    <span><i className="fa fa-support" /></span>
                                    <div className="tittle"><h3>Stylish Design</h3></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                </div>
                                <div className="service-item col-md-4">
                                    <span><i className="fa fa-cogs" /></span>
                                    <div className="tittle"><h3>Fully Responsive</h3></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                </div>
                                <div className="service-item col-md-4">
                                    <span><i className="fa fa-eye" /></span>
                                    <div className="tittle"><h3>Retina Ready</h3></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam numquam voluptates cumque inventore, quibusdam corporis consequatur amet.</p>
                                </div>
                            </div>
                        </section>
                        <section className="call-to-action-1">
                            <div className="container">
                                <h4>Over 3000 people already downloaded YOM</h4>
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
                        <section className="call-to-action-2">
                            <div className="container">
                                <div className="left-text hidden-xs">
                                    <h4>To know about this theme read this</h4>
                                    <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ut explicabo magni sapiente.</em><br /><br />Inventore at quia, vel in repellendus, cumque dolorem autem ad quidem mollitia porro blanditiis atque rerum debitis eveniet nostrum aliquam. Sint aperiam expedita sapiente amet officia quis perspiciatis adipisci, iure dolorem esse exercitationem!</p>
                                </div>
                                <div className="right-image hidden-xs" />
                            </div>
                        </section>
                        <section className="portfolio">
                            <div className="container">
                                <div className="section-heading-white">
                                    <h2>Recent Photos</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="owl-portfolio" className="owl-carousel owl-theme">
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/01-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Plaid Authentic</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/02-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Portland Neutra</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/03-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Synth Thundercats</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/04-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Bushwick Letterpress</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/05-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Fashion Heirloom</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/06-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Locavore Brooklyn</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/07-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Meggings Mixtape</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="item">
                                                <figure>
                                                    <img alt="portfolio" src="files/images/08-portfolio.jpg" />
                                                    <figcaption>
                                                        <h3>Normcore Dreamcatcher</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-navigation">
                                    <a className="btn prev fa fa-angle-left" />
                                    <a className="btn next fa fa-angle-right" />
                                    <a href="work-3columns.html" className="go-to">Go to portfolio</a>
                                </div>
                            </div>
                        </section>
                        <section className="testimonials">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>What Others saying</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="owl-demo" className="owl-carousel owl-theme">
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Ramshad Imeri - <em>India,Malappura</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Akhil Luis - <em>India, Calicut</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Ramkumar - <em>Munnar, Kerala</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Sajit OB - <em>Berlin, Germany</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Anithamol Benny - <em>Thodupuzha, Kottayam</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Sreejith Rajan - <em>India, Alappuzha</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Aneeshkumar - <em>Kakkanad ,Cochin</em></h6>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="testimonials-post">
                                                    <span className="fa fa-quote-left" />
                                                    <p>“ At vero eos et accusamus et iusto odio dignissimos ducimus qui molestias excepturi blanditis ”</p>
                                                    <h6>Rohit Sarma - <em>Gurgaon, India</em></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="call-to-action-3">
                            <div className="container">
                                <div className="col-md-12">
                                    <h4 className="col-md-10 col-sm-8">Read your lastest newsletters, we have an offer for you!</h4>
                                    <div className="btn-black col-md-2 col-sm-4"><a href="#">Take it now</a></div>
                                </div>
                            </div>
                        </section>
                        <section className="blog-posts">
                            <div className="container">
                                <div className="section-heading">
                                    <h2>Latest Posts</h2>
                                    <div className="section-dec" />
                                </div>
                                <div className="blog-item">
                                    <div className="col-md-4">
                                        <a href="blog-single.html"><img src="files/images/01-blog.jpg" alt /></a>
                                        <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                        <span><a href="#">Syam Kesav</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                        <div className="read-more">
                                            <a href="blog-single.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-item">
                                    <div className="col-md-4">
                                        <a href="blog-single.html"><img src="files/images/02-blog.jpg" alt /></a>
                                        <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                        <span><a href="#">Manohar Raj</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                        <div className="read-more">
                                            <a href="blog-single.html">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-item">
                                    <div className="col-md-4">
                                        <a href="blog-single.html"><img src="files/images/03-blog.jpg" alt /></a>
                                        <h3><a href="blog-single.html">Lorum Ipsum5</a></h3>
                                        <span><a href="#">George Yeti</a> / <a href="#">6 June 2015</a> / <a href="#">Uncategorized</a></span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit alis quam est leo, imperdiet eget dictum sed, congue non erosa senean sed ligula hendrerit...</p>
                                        <div className="read-more">
                                            <a href="blog-single.html">Read more</a>
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
export default Index;