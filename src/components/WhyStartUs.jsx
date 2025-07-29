import React from 'react';

const WhyStartUS = () => {
  return (
        <>
        <div className="why-us section-padding bg-gray pos-re">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-6">
                        <div className="img mb-md50">
                            <img src={`${process.env.PUBLIC_URL}/img/1.jpg`} alt="Why Choose Us" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="content pt-10">
                            <div className="item mb-40">
                                <span className="icon icon-basic-display"></span>
                                <div className="cont">
                                    <h5>Fully Responsive</h5>
                                    <p>Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit aptent taciti sociosqu.</p>
                                </div>
                            </div>
                            <div className="item mb-40">
                                <span className="icon icon-basic-bolt"></span>
                                <div className="cont">
                                    <h5>Clean & Modern Design</h5>
                                    <p>Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit aptent taciti sociosqu.</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="icon icon-basic-headset"></span>
                                <div className="cont">
                                    <h5>Friendly Support</h5>
                                    <p>Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit aptent taciti sociosqu.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="curve curve-top"></div>
            <div className="curve curve-bottom"></div>
        </div>
        
        
        
        </>
  );
};

export default WhyStartUS;