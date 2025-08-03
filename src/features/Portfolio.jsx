import React from 'react';

const Portfolio = () => {
  return (
        <>
        
          <section className="works section-padding" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Our</span> Portfolio</h4>
                        <p>Explore our diverse portfolio of web applications, mobile apps, and software solutions that we've crafted for clients across various industries.</p>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="row">

                     
                    <div className="filtering text-center mb-30 col-sm-12">
                        <div className="filter">
                            <span data-filter='*' className="active">All</span>
                            <span data-filter='.web'>Web Apps</span>
                            <span data-filter='.mobile'>Mobile Apps</span>
                            <span data-filter='.ecommerce'>E-commerce</span>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                   
                    <div className="gallery full-width">

                        
                        <div className="col-lg-3 col-md-6 items web">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Resturent.jpg`} alt="Restaurant Management Dashboard" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Web Application | React.js | ASP.NET APIs</p>
                                        <h6>Restaurant Management Dashboard</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Complete POS system with inventory management</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Resturent.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items mobile">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Food delivery mobile app.jpg`} alt="Food Delivery Mobile App UI" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Mobile App | React Native</p>
                                        <h6>Food Delivery Mobile App</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>iOS & Android app with real-time tracking</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Food delivery mobile app.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items ecommerce">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Fastion store.jpg`} alt="Fashion E-commerce Platform" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>E-commerce | MERN Stack</p>
                                        <h6>Fashion Store Platform</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Multi-vendor marketplace with payment gateway</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Fastion store.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items web">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Hospital managment.jpg`} alt="Hospital Management System Interface" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Web Application | ASP.NET Core</p>
                                        <h6>Hospital Management System</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Patient records & appointment scheduling</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Hospital managment.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items mobile">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Fitness mobile app.jpg`} alt="Fitness Tracker App Interface" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Mobile App | Flutter</p>
                                        <h6>Fitness Tracker App</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Workout plans & progress tracking</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Fitness mobile app.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items ecommerce">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Electronic Store.jpg`} alt="Electronics Store Website" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>E-commerce | Next.js</p>
                                        <h6>Electronics Store</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Product catalog with advanced search</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Electronic Store.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items web">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Real Estate.jpg`} alt="Real Estate Management Platform" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Web Application | Angular</p>
                                        <h6>Real Estate Platform</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Property listings with virtual tours</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Real Estate.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                      {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items mobile">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/Banking mobile.jpg`} alt="Banking Mobile Application" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Mobile App | React Native</p>
                                        <h6>Banking Mobile App</h6>
                                        <small style={{fontSize: '11px', opacity: '0.8'}}>Secure transactions with biometric auth</small>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/Banking mobile.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        </>
  );
};

export default Portfolio;