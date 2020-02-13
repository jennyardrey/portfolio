import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => (

	<div className="topBar">
	<ul>
		<div class="imgLogo"><img
			className="logo"
			src="https://logosolusa.com/wp-content/uploads/parser/Random-Logo-1.png"
			alt="logo"
			height="200"
			width="200"
		/>
		<h1>Jenny Ardrey</h1>
		</div>
		<div className="nav">
		<Link className="item" to="/"> Home </Link>
		<Link className="item" to="/projects">Projects </Link>
		<Link className="item" to="/contact">Contact </Link>
		</div>
			</ul>
</div>
  
);


export default Navbar;