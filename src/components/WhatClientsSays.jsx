import React from 'react';

const WhatClientsSays = () => {
  return (
        <>
         <section className="testimonials section-padding bg-img bg-fixed pos-re" data-overlay-dark="7" data-background="/img/bg4.jpg">
            <div className="container">
                <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4>What's <span>Clients</span> Says?</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>

                    <div className="owl-carousel owl-theme text-center col-lg-10 offset-lg-1">
                        <div className="item-box">
                            <span className="quote">
                                <img src="/img/quot.png" alt="Quote" />
                            </span>
                            <p>Lorem Ipsum is simply dummy text a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="info">
                                <div className="author-img">
                                    <img src="/img/clients/1.jpg" alt="Client 1" />
                                </div>
                                <div className="cont">
                                    <h6>John Doe</h6>
                                    <span>CEO, Tech Corp</span>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <span className="quote">
                                <img src="/img/quot.png" alt="Quote" />
                            </span>
                            <p>Lorem Ipsum is simply dummy text a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="info">
                                <div className="author-img">
                                    <img src="/img/clients/2.jpg" alt="Client 2" />
                                </div>
                                <div className="cont">
                                    <h6>Sarah Wilson</h6>
                                    <span>Marketing Director</span>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <span className="quote">
                                <img src="/img/quot.png" alt="Quote" />
                            </span>
                            <p>Lorem Ipsum is simply dummy text a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="info">
                                <div className="author-img">
                                    <img src="/img/clients/3.jpg" alt="Client 3" />
                                </div>
                                <div className="cont">
                                    <h6>Mike Johnson</h6>
                                    <span>Business Owner</span>
                                </div>
                            </div>
                        </div>
                        <div className="item-box">
                            <span className="quote">
                                <img src="/img/quot.png" alt="Quote" />
                            </span>
                            <p>Lorem Ipsum is simply dummy text a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="info">
                                <div className="author-img">
                                    <img src="/img/clients/4.jpg" alt="Client 4" />
                                </div>
                                <div className="cont">
                                    <h6>Emma Davis</h6>
                                    <span>Startup Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="curve curve-top"></div>
        </section>
        </>
  );
};

export default WhatClientsSays;