import React from 'react';
import Navbar from './Navbar'
import Projects from './Projects'
import ContactForm from './ContactForm'
import Intro from './Intro'
import '../styles/home.css'
import images from "./Images"



const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<section id="intro"><Intro /></section>
			<section id="projects"><Projects slides={images} /></section>
			<section id="contact">	<ContactForm /></section>


		</div>
	);
}

export default Home;