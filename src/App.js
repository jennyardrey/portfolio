import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar.js'



function App() {
	return (
		<div className="App">
			<Navbar />

			<ContactForm />

		</div>
	);
}

export default App;
