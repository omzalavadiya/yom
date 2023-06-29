function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="three spacing" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>
                                <a href="index.html">
                                    YOM
                                </a>
                            </h1>
                            <p>©2015 Yom. All rights reserved.</p>
                            <div className="spacing" />
                            <ul className="socials">
                                <li>
                                    <a href="http://facebook.com">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://twitter.com">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://dribbble.com">
                                        <i className="fa fa-dribbble" />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://tumblr.com">
                                        <i className="fa fa-tumblr" />
                                    </a>
                                </li>
                            </ul>
                            <div className="spacing" />
                        </div>
                        <div className="col-md-3">
                            <div className="spacing" />
                            <div className="links">
                                <h4>Some pages</h4>
                                <ul>
                                    <li><a href="/ ">Home</a></li>
                                    <li><a href="/">View some works here</a></li>
                                    <li><a href="/">Follow our blog</a></li>
                                    <li><a href="/">Contact us</a></li>
                                    <li><a href="/">Our services</a></li>
                                </ul>
                            </div>
                            <div className="spacing" />
                        </div>
                        <div className="col-md-3">
                            <div className="spacing" />
                            <div className="links">
                                <h4>Recent posts</h4>
                                <ul>
                                    <li><a href="/">Hello World!</a></li>
                                    <li><a href="/">This is the post title here</a></li>
                                    <li><a href="/">Our happy day</a></li>
                                    <li><a href="/">The first works done</a></li>
                                    <li><a href="/">The cats and dogs</a></li>
                                </ul>
                            </div>
                            <div className="spacing" />
                        </div>
                        <div className="col-md-3">
                            <div className="spacing" />
                            <h4>Email updats</h4>
                            <p>We want to share our latest trends, news and insights with you.</p>
                            <form>
                                <input className="email-address" placeholder="Your email address" type="text" />
                                <input className="button boxed small" type="submit" />
                            </form>
                            <div className="spacing" />
                        </div>
                    </div>
                </div>
                <div className="two spacing" />
            </footer>

        </>
    );
}

export default Footer;