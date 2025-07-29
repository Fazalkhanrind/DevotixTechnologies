import React from 'react';

const Portfolio = () => {
  return (
        <>
        
          <section className="works section-padding" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Creative</span> Portfolio</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="row">

                     
                    <div className="filtering text-center mb-30 col-sm-12">
                        <div className="filter">
                            <span data-filter='*' className="active">All</span>
                            <span data-filter='.brand'>Brand</span>
                            <span data-filter='.web'>Design</span>
                            <span data-filter='.graphic'>Graphic</span>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                   
                    <div className="gallery full-width">

                        
                        <div className="col-lg-3 col-md-6 items graphic">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/1.jpg`} alt="Creative Web Design Portfolio 1" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/1.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items web">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/2.jpg`} alt="Creative Web Design Portfolio 2" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/2.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items brand">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/3.jpg`} alt="Creative Web Design Portfolio 3" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/3.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items graphic">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/4.jpg`} alt="Creative Web Design Portfolio 4" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/4.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items web">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/5.jpg`} alt="Creative Web Design Portfolio 5" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/5.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items brand">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/6.jpg`} alt="Creative Web Design Portfolio 6" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/6.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items brand">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/7.jpg`} alt="Creative Web Design Portfolio 7" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/7.jpg`} className="popimg">
                                            <span className="icon"><i className="fas fa-long-arrow-alt-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                      {/* gallery item */}
                        <div className="col-lg-3 col-md-6 items graphic">
                            <div className="item-img">
                                <img src={`${process.env.PUBLIC_URL}/img/portfolio/8.jpg`} alt="Creative Web Design Portfolio 8" />
                                <div className="item-img-overlay">
                                    <div className="overlay-info full-width">
                                        <p>Logo | Branding</p>
                                        <h6>Creative Web Design</h6>
                                        <a href={`${process.env.PUBLIC_URL}/img/portfolio/8.jpg`} className="popimg">
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