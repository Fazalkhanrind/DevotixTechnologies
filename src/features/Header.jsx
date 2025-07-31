import React from 'react';

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg">
			<div className="container">

           
            <a className="logo" href="#home">
				<img src="/White-logo.png" alt="Devotix Technologies Logo"  />          
            </a>

			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="icon-bar"><i className="fas fa-bars"></i></span>
			  </button>

			 
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav ml-auto">
			      <li className="nav-item">
			        <a className="nav-link active" href="#" data-scroll-nav="0">Home</a>
			      </li>
			      <li className="nav-item">
                    <a className="nav-link" href="#" data-scroll-nav="1">Services</a>
                  </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#" data-scroll-nav="2">Portfolio</a>
			      </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scroll-nav="3">Team</a>
                  </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#" data-scroll-nav="4">Price</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#" data-scroll-nav="5">Blog</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#" data-scroll-nav="6">Contact</a>
			      </li>
			    </ul>
			  </div>
			</div>
		</nav>
  );
};

export default Header;