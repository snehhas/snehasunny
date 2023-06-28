import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }

    return (
        <div className="contact-container">
            <div className="contact-map">
                {/* You can add a Google Map iframe here */}
            </div>

            <div className="contact-info">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
