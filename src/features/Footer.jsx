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
                    <a href="#0"><i className="fab fa-twitter"></i></a>
                    <a href="#0"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#0"><i className="fab fa-behance"></i></a>
                    <a href="#0"><i className="fab fa-pinterest-p"></i></a>
                </div>

            </div>

            <div className="curve curve-top curve-center"></div>
        </footer>
    );
};

export default Footer;