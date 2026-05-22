import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaPaperPlane
} from 'react-icons/fa';

import { useTheme } from '../ThemeContext';

import './ContactForm.css';

function ContactForm() {

  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (

    <section
      id="mini-contact"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="mini-contact-container">

        {/* LEFT */}

        <motion.div
          className="mini-contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="small-title">
            OPEN TO EMPLOYMENT
          </span>

          <h1>
            Let’s Build
            Something Amazing.
          </h1>

          <p>
            Passionate Software Engineer focused on
            creating modern, scalable, and elegant
            digital experiences.
          </p>

          {/* SKILLS */}

          <div className="skill-items">

            <div className="skill-box">

              <FaLaptopCode />

              <span>
                Frontend Development
              </span>

            </div>

            <div className="skill-box">

              <FaCode />

              <span>
                Full Stack Development
              </span>

            </div>

            <div className="skill-box">

              <FaServer />

              <span>
                Backend Development
              </span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="mini-contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {submitted && (

            <div className="success-message">

              ✓ Message Sent Successfully

            </div>

          )}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactForm;