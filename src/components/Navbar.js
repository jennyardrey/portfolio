import React, { useState, useEffect } from 'react';
import logo from '../images/glasses.jpg';
import './styles/Navbar.css';
import { CSSTransition } from "react-transition-group";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
	const [isNavVisible, setNavVisibility] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 700px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};

	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
	};

	return (
		<div>
			<div className="navbar" >
				<img className="logo-head" src={logo} alt="posh-pods-logo"></img>
				<CSSTransition
					in={!isSmallScreen || isNavVisible}
					timeout={350}
					classNames="NavAnimation"
					unmountOnExit
				>
					<nav className="navlinks">
						<AnchorLink offset='100' href='#intro' className="navbtn">Home</AnchorLink>
						<AnchorLink offset='200' href='#projects' className="navbtn">Projects
						</AnchorLink>
						<AnchorLink offset='100' href='#contact' className="navbtn">Contact Me</AnchorLink>
					</nav>
				</CSSTransition>
				<button onClick={toggleNav} className="burger navbtn">
					<i class="fas fa-bars"></i>
				</button>
			</div >
		</div>
	);
}

export default Navbar;