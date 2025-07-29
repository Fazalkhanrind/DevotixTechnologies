import React from 'react';

const Services = () => {
  return (
    <>
       <div className="process section-padding bg-img bg-fixed pos-re text-center" data-overlay-dark="7" data-background="img/bg6.jpg">
            <div className="container">
                <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Our</span> Process</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>
                    <div className="full-width clearfix"></div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="item first mb-md50">
                            <img src={`${process.env.PUBLIC_URL}/img/arrow.png`} className="tobotm" alt="arrow" />
                            <span className="icon icon-basic-lightbulb"></span>
                            <div className="cont">
                                <h3>01</h3>
                                <h6>Ideas</h6>
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
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
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
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
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item odd">
                            <span className="icon icon-basic-server-upload"></span>
                            <div className="cont">
                                <h3>04</h3>
                                <h6>Testing</h6>
                                <p>Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat</p>
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
