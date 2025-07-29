import React from 'react';

const AboutUs = () => {
  return (
        <>
    	 <section className="hero" data-scroll-index="1">
            <div className="section-padding pos-re">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 text-center mb-80">
                            <h4 className="extra-title">About Our <span>Creative</span> Agency</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries.</p>
                        </div>

                        <div className="feat-item mb-md50 col-lg-4">
                            <div className="text-center">
                                <span className="icon icon-basic-anchor"></span>
                                <h5>Web Design</h5>
                                <h6>Modern & Clean Design</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry</p>
                            </div>
                        </div>

                        <div className="feat-item active mb-md50 col-lg-4">
                            <div className="text-center">
                                <span className="icon icon-basic-pencil-ruler"></span>
                                <h5>Development</h5>
                                <h6>Web & Mobile Development</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry</p>
                            </div>
                        </div>

                        <div className="feat-item col-lg-4">
                            <div className="text-center">
                                <span className="icon icon-basic-cards-diamonds"></span>
                                <h5>Branding</h5>
                                <h6>Logo & Motion Design</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="curve curve-gray-b curve-bottom"></div>
            </div>

            <div className="tabs-section section-padding bg-gray">
                <div className="container">
                    <div className="row">

                        <ul className="col-md-12 nav nav-pills tabs" id="pills-tab" role="tablist">
                            <li className="nav-item one active">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">About Us</a>
                            </li>
                            <li className="nav-item two">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Our Mission</a>
                            </li>
                            <li className="nav-item three">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Why Us?</a>
                            </li>
                        </ul>
                        
                        <div className="tab-content col-lg-12" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="left col-lg-6">
                                        <div className="about box-white">
                                            <h5 className="title">About Us</h5>
                                            <h6 className="sub-title">We Are A Creative Agency</h6>
                                            <p>We’re full service which means we’ve got you covered on design and content right through to digital.</p>

                                           

                                            <div className="skills mt-40">
                                                <div className="skill-item mb-30">
                                                    <h6>Web Design</h6>
                                                    <div className="skill-progress">
                                                        <div className="progres" data-value="90%"></div>
                                                    </div>
                                                </div>
                                                <div className="skill-item mb-30">
                                                    <h6>Branding</h6>
                                                    <div className="skill-progress">
                                                        <div className="progres" data-value="75%"></div>
                                                    </div>
                                                </div>
                                                <div className="skill-item">
                                                    <h6>Development</h6>
                                                    <div className="skill-progress">
                                                        <div className="progres" data-value="80%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 image">
                                        <div className="img">
                                            <img src={`${process.env.PUBLIC_URL}/img/2.jpg`} alt="About Us" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="left col-lg-6">
                                        <div className="mission box-white">
                                            <h5 className="title">Our Mission</h5>
                                            <h6 className="sub-title">We Are A Creative Agency</h6>
                                            <p className="mb-10"><b>We’re full service which means</b> we’ve got you covered on design and content right through to digital. You’ll form a lasting relationship with us, <b>collaboration is central to</b> everything we do. <b>We’ll push you out of</b> your comfort zone from time, but this is where you’ll shine. Bottom line is we want you to succeed at Faculty.</p>
                                            <p>You’ll form a lasting relationship with us, collaboration is central to everything we do. We’ll push you out of your comfort zone from time-to-time, but this is where you’ll shine. Bottom line is we want you to succeed at Faculty.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 image">
                                        <div className="img">
                                            <img src={`${process.env.PUBLIC_URL}/img/3.jpg`} alt="Our Mission" />
                                            <a className="vid" href="https://vimeo.com/127203262">
                                                <span className="vid-butn">
                                                    <i className="fas fa-play-circle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="left col-lg-6">
                                        <div className="why-us box-white">
                                            <h5 className="title">Why Choose Us?</h5>
                                            <h6 className="sub-title">We Are A Creative Agency</h6>
                                            <p>We’re full service which means we’ve got you covered on design and content right through to digital.You’ll form a lasting relationship with us, collaboration is central to everything we do.</p>
                                            <ul className="feat mt-30 row">
                                                <li className="col-sm-4">
                                                    <span className="icon icon-basic-display"></span>
                                                    <h6>Perfect Design</h6>
                                                </li>
                                                <li className="col-sm-4">
                                                    <span className="icon icon-basic-picture-multiple"></span>
                                                    <h6>Retina Ready</h6>
                                                </li>
                                                <li className="col-sm-4">
                                                    <span className="icon icon-basic-headset"></span>
                                                    <h6>Friendly Support</h6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 image">
                                        <div className="img owl-carousel owl-theme carousel-single">
                                            <img src={`${process.env.PUBLIC_URL}/img/4.jpg`} alt="Why Choose Us 1" />
                                            <img src={`${process.env.PUBLIC_URL}/img/5.jpg`} alt="Why Choose Us 2" />
                                            <img src={`${process.env.PUBLIC_URL}/img/2.jpg`} alt="Why Choose Us 3" />
                                        </div>
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

export default AboutUs;