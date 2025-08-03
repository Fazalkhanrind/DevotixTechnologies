import React from 'react';

const Team = () => {
  return (
        <>
         <section className="team section-padding" data-scroll-index="3">
            <div className="container">
                <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Our</span> Team</h4>
                        <p>Meet our talented team of software engineers, project managers, and specialists who collaborate to build innovative, scalable, and user-friendly digital solutions tailored to meet your business goals.</p>
                    </div>
                    
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Anas Rasool.jpg`} alt="Anas Rasool - Software Engineer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Anas Rasool</h6>
                                <span>Software Engineer</span>
                            </div>
                        </div>
                    
                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Fazal Rahman.jpg`} alt="Fazal Rahman - Software Engineer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Fazal Rahman</h6>
                                <span>Software Engineer</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Abdul Rauf.jpg`} alt="Abdul Rauf - Project Manager" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Abdul Rauf</h6>
                                <span>Project Manager</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Ali nisar.jpg`} alt="Ali - Business Analyst" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Ali Nisar</h6>
                                <span>Business Analyst</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Fahad Maqbool.jpg`} alt="Fahad Maqbool - Software Architect" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Fahad Maqbool</h6>
                                <span>Software Architect</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/2.jpg`} alt="M.Muneeb - Frontend Developer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>M.Muneeb</h6>
                                <span>Frontend Developer</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Adil mustafa.jpg`} alt="Adil Mustafa - Backend Developer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Adil Mustafa</h6>
                                <span>Backend Developer</span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="team-img">
                                <img src={`${process.env.PUBLIC_URL}/img/team/Qasir Arslan.jpg`} alt="Qasir Arslan - QA Engineer" />
                                <div className="social">
                                    <a href="#0" className="icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="#0" className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="info">
                                <h6>Qasir Arslan</h6>
                                <span>QA Engineer</span>
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