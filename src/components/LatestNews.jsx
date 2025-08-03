import React from 'react';

const LatestNews = () => {
  return (
        <>
         
  <section className="blog section-padding" data-scroll-index="5">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Latest</span> News</h4>
                        <p>Stay updated with the latest trends in technology, software development insights, and industry news from Devotix Technologies. Discover what's shaping the future of digital innovation.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="item mb-md50">
                            <div className="post-img">
                                <div className="img">
                                    <img src="/img/blog/1.jpg" alt="React Development Best Practices" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="info">
                                    <a href="#0">By : Devotix Team</a>
                                    <a href="#0">15 Jul 2025</a>
                                    <a href="#0" className="tag">React.js</a>
                                </div>
                                <h6><a href="#0">Modern React Development Best Practices for 2025</a></h6>
                                <p>Discover the latest React.js patterns, hooks optimization, and performance techniques that we use at Devotix Technologies to build scalable web applications.</p>
                                <a href="#0" className="more">Read More <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item mb-md50">
                            <div className="post-img">
                                <div className="img">
                                    <img src="/img/blog/2.jpg" alt="Mobile App Development Trends" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="info">
                                    <a href="#0">By : Devotix Team</a>
                                    <a href="#0">22 Jul 2025</a>
                                    <a href="#0" className="tag">Mobile Apps</a>
                                </div>
                                <h6><a href="#0">Flutter vs React Native: Choosing the Right Framework</a></h6>
                                <p>A comprehensive comparison of Flutter and React Native for mobile app development, helping you make the right choice for your next project.</p>
                                <a href="#0" className="more">Read More <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item">
                            <div className="post-img">
                                <div className="img">
                                    <img src="/img/blog/3.jpg" alt="AI Integration in Web Development" />
                                </div>
                            </div>
                            <div className="cont">
                                <div className="info">
                                    <a href="#0">By : Devotix Team</a>
                                    <a href="#0">01 Aug 2025</a>
                                    <a href="#0" className="tag">AI & Tech</a>
                                </div>
                                <h6><a href="#0">How AI is Transforming Software Development in 2025</a></h6>
                                <p>Explore how artificial intelligence is revolutionizing the software development process, from code generation to automated testing and deployment.</p>
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