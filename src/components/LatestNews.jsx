import React from 'react';

const LatestNews = () => {
  return (
        <>
         
  <section className="blog section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Latest</span> News</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="item mb-md50">
                            <div className="post-img">
                                <div className="img">
                                    <img src="/img/blog/1.jpg" alt="WordPress Themes Blog Post" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="info">
                                    <a href="#0">By : Admin</a>
                                    <a href="#0">06 Aug 2017</a>
                                    <a href="#0" className="tag">WordPress</a>
                                </div>
                                <h6><a href="#0">48 Best WordPress Themes</a></h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                                <a href="#0" className="more">Read More <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item mb-md50">
                            <div className="post-img">
                                <div className="img">
                                    <img src="/img/blog/2.jpg" alt="Web Development Blog Post" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="info">
                                    <a href="#0">By : Admin</a>
                                    <a href="#0">15 Sep 2017</a>
                                    <a href="#0" className="tag">Web Design</a>
                                </div>
                                <h6><a href="#0">Modern Web Development Trends</a></h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                                <a href="#0" className="more">Read More <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item">
                            <div className="post-img">
                                <div className="img">
                                    <img src="/img/blog/3.jpg" alt="UI/UX Design Blog Post" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="info">
                                    <a href="#0">By : Admin</a>
                                    <a href="#0">22 Oct 2017</a>
                                    <a href="#0" className="tag">UI/UX</a>
                                </div>
                                <h6><a href="#0">Best UI/UX Design Practices</a></h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                                <a href="#0" className="more">Read More <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>      
        </>
  );
};

export default LatestNews;