import React, { useState } from 'react';
import './contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/send-email', formData)
      .then((response) => {
        console.log(response.data);
        // Reset the form or show a success message to the user
      })
      .catch((error) => {
        console.error(error);
        // Handle the error or show an error message to the user
      });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Hi! Nice to meet you</h3>
          <p className="contact__details">Send me an email.</p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name / company"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="contact__form-div message">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write Your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
