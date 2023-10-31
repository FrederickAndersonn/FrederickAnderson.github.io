import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n0f6f6x', 'template_woz5ae3', form.current, 'i64_FC3tEvQj8HTAD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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

        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name / company"
                name="user_name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="from_name"
                
              />
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
                name="subject"
                
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
            ></textarea>
          </div>
          <button type="submit" className="btn" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
