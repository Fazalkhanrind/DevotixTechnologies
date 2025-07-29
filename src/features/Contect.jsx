import React from 'react';

const Contect = () => {
  return (
         <>
         <section className="contact section-padding" data-scroll-index="6">
           <div className="container">
               <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4>Get <span>In</span> Touch</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>
                   
                    <div className="col-lg-5">
                        <div className="contact-info mb-md50">
                            <h5>Contact Us :</h5>
                            <p>Get in touch with Devotix Technologies for your next digital project. We're here to help!</p>
                            <div className="item">
                                <span className="icon icon-basic-tablet"></span>
                                <div className="cont">
                                    <h6>Phone : </h6>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="icon icon-basic-mail-open-text"></span>
                                <div className="cont">
                                    <h6>Email : </h6>
                                    <p>info@devotix-technologies.com</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="icon icon-basic-geolocalize-05"></span>
                                <div className="cont">
                                    <h6>Address : </h6>
                                    <p>123 Tech Street, Digital City, CA 90210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form className="form" id="contact-form" method="post" action="http://innovationplans.com/idesign/coco3/contact.php">

                            <div className="messages"></div>

                            <div className="controls">

                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_name" type="text" name="name" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_email" type="email" name="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                                    </div>

                                </div>                             
                            </div>
                        </form>
                    </div>

               </div>
           </div>
       </section>

         </>
  );
};

export default Contect;