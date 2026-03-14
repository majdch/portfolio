import React, { useState } from 'react';
import Title from "../common/Title";
import './index.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:majdchagroufi@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="page" id="contact">
            <Title>
                Contact Me
            </Title>
            
            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-box">
                        <div className="info-item">
                            <span className="icon">📧</span>
                            <a href="mailto:majdchagroufi@gmail.com">majdchagroufi@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span className="icon">📱</span>
                            <span>+212 649 795 475</span>
                        </div>
                        <div className="info-item">
                            <span className="icon">📍</span>
                            <span>Casablanca, Morocco</span>
                        </div>
                        <div className="info-item">
                            <span className="icon">🔗</span>
                            <a href="https://linkedin.com/in/majdchagroufi" target="_blank" rel="noopener noreferrer">linkedin.com/in/majdchagroufi</a>
                        </div>
                    </div>

                   
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                placeholder="Your Message" 
                                rows="5" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
