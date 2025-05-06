import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    message: '',
    isError: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: '', isError: false });
    

    const serviceId = 'service_jnbydyg';
    const templateId = 'template_eizxdkg';
    const publicKey = 'RKtPclSFy37ccLoNk';
    
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setStatus({
          message: 'Thank you for your message! I will get back to you soon.',
          isError: false
        });
        
   
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setStatus({
          message: 'Failed to send message. Please try again later.',
          isError: true
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk About Your Project</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-details">
                <span>Email</span>
                nick007sbt@gmail.com
              </div>
            </div>
          </div>
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.isError ? 'error' : 'success'}`}>
                {status.message}
              </div>
            )}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;