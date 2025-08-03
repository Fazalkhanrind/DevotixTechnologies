import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center pos-re">
            <div className="container">

                <a className="logo" href="#home">
                    <img src="/White-logo.png" alt="Devotix Technologies Logo" />
                </a>

                <div className="social">
                    <a href="#0"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/devotix_technologies?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/devotixtechnologies/posts/?feedView=all"><i className="fab fa-linkedin-in"></i></a>
                    
                </div>

            </div>

            <div className="curve curve-top curve-center"></div>
        </footer>
    );
};

export default Footer;