import React from 'react';

const Prices = () => {
  return (
        <>
        <section className="price section-padding bg-gray pos-re" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4>Pricing <span>Table</span></h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>

                    <div className="pricing-tables text-center full-width">

                        <div className="row">

                            <div className="col-lg-3">
                                <div className="item mb-md50">
                                    <div className="type">
                                        <h4>Free</h4>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>00</h3>
                                        <span className="per">/ Month</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>10 GB Disk Space</li>
                                            <li>15 Domain Names</li>
                                            <li>4 Email Address</li>
                                            <li>Enhanced Security</li>
                                            <li>Unlimited Support</li>
                                        </ul>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-bg">
                                            <span>Purchase Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="item mb-md50">
                                    <div className="type">
                                        <h4>Basic</h4>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>10</h3>
                                        <span className="per">/ Month</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>10 GB Disk Space</li>
                                            <li>15 Domain Names</li>
                                            <li>4 Email Address</li>
                                            <li>Enhanced Security</li>
                                            <li>Unlimited Support</li>
                                        </ul>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-bg">
                                            <span>Purchase Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="item active mb-md50">

                                    <div className="type">
                                        <h4>Standard</h4>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>30</h3>
                                        <span className="per">/ Month</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>100 GB Disk Space</li>
                                            <li>30 Domain Names</li>
                                            <li>5 Email Address</li>
                                            <li>Enhanced Security</li>
                                            <li>Unlimited Support</li>
                                        </ul>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-light">
                                            <span>Purchase Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="item">
                                    <div className="type">
                                        <h4>Premium</h4>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>80</h3>
                                        <span className="per">/ Month</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>500 GB Disk Space</li>
                                            <li>100 Domain Names</li>
                                            <li>10 Email Address</li>
                                            <li>Enhanced Security</li>
                                            <li>Unlimited Support</li>
                                        </ul>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-bg">
                                            <span>Purchase Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="curve curve-bottom"></div>
        </section>

        </>
  );
};

export default Prices;