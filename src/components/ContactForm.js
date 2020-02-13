import React from 'react';
import PropTypes from 'prop-types';
import '../styles/contactform.css';


const ContactForm = props => (
	<div>
	<h1 className="form">Contact me using the form below</h1>
     <div>
                    <input type="text" id="name" name="user_name" />
                </div>
                <div>
             
                    <input type="email" id="mail" name="user_mail" />
                </div>
                <div>
             
                    <textarea id="msg" name="user_message"></textarea>
                </div>
                <div>
                    <button class="button" id="submit_now" type="submit">Submit!</button>
                </div>
                <div>
                        <button class="button" id="clear_now" type="reset">Clear</button>
</div>
</div>
);



export default ContactForm;