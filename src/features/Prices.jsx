import React from 'react';

const Prices = () => {
  return (
        <>
        <section className="price section-padding bg-gray pos-re" data-scroll-index="4">
            <div className="container">
                <div className="row">
                    
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4>Our <span>Pricing</span> Plans</h4>
                        <p>Choose the perfect package for your business needs. We offer comprehensive software development solutions from basic websites to enterprise applications with transparent pricing and dedicated support.</p>
                    </div>

                    <div className="pricing-tables text-center full-width">

                        <div className="row">

                            <div className="col-lg-3">
                                <div className="item mb-md50">
                                    <div className="type">
                                        <h4>🔹 Starter</h4>
                                        <small>Personal websites & small businesses</small>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>299</h3>
                                        <span className="per">/ Project</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>Custom-designed website</li>
                                            <li>Up to 5 content pages</li>
                                            <li>Fully responsive design</li>
                                            <li>Basic on-page SEO setup</li>
                                            <li>Integrated contact form</li>
                                            <li>30 days post-launch support</li>
                                        </ul>
                                        <p style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                                            Great for getting your online presence up and running with a professional touch.
                                        </p>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-bg">
                                            <span>Get Started</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="item mb-md50">
                                    <div className="type">
                                        <h4>🔷 Professional</h4>
                                        <small>Startups & SMEs with digital services</small>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>799</h3>
                                        <span className="per">/ Project</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>Full-stack web application</li>
                                            <li>Database design & integration</li>
                                            <li>Intuitive Admin Panel (CRUD)</li>
                                            <li>RESTful API development</li>
                                            <li>Advanced SEO configuration</li>
                                            <li>90 days maintenance support</li>
                                        </ul>
                                        <p style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                                             Perfect for data-driven applications made easy.
                                        </p>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-bg">
                                            <span>Get Started</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="item active mb-md50">

                                    <div className="type">
                                        <h4>🟡 Business</h4>
                                        <small>Scale online operations (web + mobile)</small>
                                    </div>

                                    <div className="value">
                                        <h3><span>$</span>1499</h3>
                                        <span className="per">/ Project</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>End-to-end e-commerce platform</li>
                                            <li>Payment gateway integration</li>
                                            <li>Cross-platform mobile app</li>
                                            <li>Analytics & reporting dashboard</li>
                                            <li>6 months comprehensive support</li>
                                            <li>Priority response for queries</li>
                                        </ul>
                                        <p style={{fontSize: '12px', color: 'white', marginTop: '10px'}}>
                                             Ideal for unified web + mobile experiences.
                                        </p>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-light">
                                            <span>Most Popular</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="item">
                                    <div className="type">
                                        <h4>🟣 Enterprise</h4>
                                        <small>Large-scale bespoke solutions</small>
                                    </div>

                                    <div className="value">
                                        <h3>Custom</h3>
                                        <span className="per">Quote</span>
                                    </div>

                                    <div className="features">
                                        <ul>
                                            <li>Tailor-made software solutions</li>
                                            <li>Cloud infrastructure setup</li>
                                            <li>DevOps practices (CI/CD)</li>
                                            <li>24/7 monitoring & support</li>
                                            <li>Dedicated account manager</li>
                                            <li>Enterprise-grade security</li>
                                        </ul>
                                        <p style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                                             Built for scale. Mission-critical systems.
                                        </p>
                                    </div>

                                    <div className="order">
                                        <a href="#0" className="butn butn-bg">
                                            <span>Contact Us</span>
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