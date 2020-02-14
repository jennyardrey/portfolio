import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/contactform.css';
import Axios from 'axios';


class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state ={
message: "",
name: "",
email: "",
buttonText: "Send message",
sent: false
		}
	}

	formSubmit = e => {
		e.preventDefault()
		this.setState ({
			buttonText: "Sending..."
		})
		let data = {
			name: this.state.name,
			message: this.state.message,
			email: this.state.email
		}

		Axios.post('API_URI', data)
		.then( res => {
			this.setState({ sent:true }, this.resetForm() )
		})
		.catch(() => {
			this.setState({
				message: "",
name: "",
email: "",
				buttonText: "Send message",
			})
			alert('Your message has not been sent. Please try again')
		})
	}

	resetForm = () => {
		this.setState({
			message: "",
name: "",
email: "",
buttonText: "Message sent!",
		})
	}
	render() {
return <form className="contact-form" onSubmit={e => this.formSubmit(e)}>
		
		<label className="message" >Type your message Here:</label>
		<input onChange={e => this.setState({ message: e.target.value })} name="message" className="message-input" type="text" placeholder="Type your message here" value={this.state.message} required></input>
		
		<label className="name" >Your name</label>
<input onChange={e => this.setState({ name: e.target.value })} name="name" className="message-name" type="text" placeholder="Your name" value={this.state.name} required></input>

<label className="email" >Your email</label>
<input onChange={e => this.setState({ email: e.target.value })} name="email" className="message-email" type="text" placeholder="Your email" value={this.state.email} required></input>

<div className="button-container">
	<button type="submit" className="button" >{this.state.buttonText}</button>
</div>

	</form>
	};
};



export default ContactForm;

