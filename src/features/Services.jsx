import React from 'react';

const Services = () => {
  return (
    <>
       <div className="process section-padding bg-img bg-fixed pos-re text-center" data-overlay-dark="7" data-background="img/bg6.jpg">
            <div className="container">
                <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Our</span> Process</h4>
                        <p>We follow a streamlined development process from planning and design to development and deployment delivering scalable and user-friendly web & mobile solutions with precision.</p>
                    </div>
                    <div className="full-width clearfix"></div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="item first mb-md50">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.png`} className="tobotm" alt="arrow" />
                            <span className="icon icon-basic-lightbulb"></span>
                            <div className="cont">
                                <h3>01</h3>
                                <h6>Ideas</h6>
                                <p>We start by understanding your business goals and brainstorming innovative, tech-driven solutions tailored to your vision</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item odd mb-md50">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.png`} alt="arrow" />
                            <span className="icon icon-basic-book-pencil"></span>
                            <div className="cont">
                                <h3>02</h3>
                                <h6>Planning</h6>
                                <p>Our team maps out detailed wireframes, defines system architecture, and creates a clear roadmap to guide the development process</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item mb-sm50">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.png`} className="tobotm" alt="arrow" />
                            <span className="icon icon-basic-pencil-ruler"></span>
                            <div className="cont">
                                <h3>03</h3>
                                <h6>Development</h6>
                                <p>We build secure, scalable, and high-performing web and mobile applications using modern stacks like MERN, .NET, and React Native</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item odd">
                            <span className="icon icon-basic-server-upload"></span>
                            <div className="cont">
                                <h3>04</h3>
                                <h6>Testing</h6>
                                <p>Every feature undergoes rigorous manual and automated testing to ensure a bug-free, smooth, and optimized user experience</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="curve curve-gray-t curve-top"></div>
            <div className="curve curve-bottom"></div>
        </div>
    </>
  );
};

export default Services;
