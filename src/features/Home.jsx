import React from 'react';

const Home = () => {
  return (
    <>
    	<header className="header valign bg-img" data-scroll-index="0" data-overlay-dark="7" data-background="img/bg4.jpg" data-stellar-background-ratio="0.5">

    		<div className="container">
    			<div className="text-center caption mt-30">
                    <h4>We Are</h4>
                    <h1>Devotix Technologies</h1>
                    <div className="row">
                        <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                            <p>We are a full-stack development agency passionate about building powerful, scalable, and user-focused web & mobile applications.</p>
                        </div>
                    </div>
                    <a href="#0" class="butn butn-light mt-30">
                        <span>Get Started</span>
                    </a>
                </div>
    		</div>
    	</header>
    </>
  );
};

export default Home;