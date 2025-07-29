import React from 'react';

const Team = () => {
  return (
        <>
         <section className="team section-padding" data-scroll-index="3">
            <div className="container">
                <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Talent</span> Team</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>
                    
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/1.jpg`} alt="Alex Smith - Project Manager" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Alex Smith</h6>
                                <span>Project Manager</span>
                            </div>
                        </div>
                    
                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/2.jpg`} alt="Sarah Johnson - Lead Developer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Sarah Johnson</h6>
                                <span>Lead Developer</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/3.jpg`} alt="Mike Brown - UI/UX Designer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Mike Brown</h6>
                                <span>UI/UX Designer</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/4.jpg`} alt="Emma Wilson - Marketing Director" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Emma Wilson</h6>
                                <span>Marketing Director</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/3.jpg`} alt="David Lee - Backend Developer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-behance"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>David Lee</h6>
                                <span>Backend Developer</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section> 
        </>
  );
};

export default Team;