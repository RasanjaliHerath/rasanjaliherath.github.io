import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaBlogger
} from 'react-icons/fa';

import { useTheme } from '../ThemeContext';
import './ContactInfo.css';

import contactImage from '../assets/contac.png';

function ContactInfo() {

  const { isDark } = useTheme();

  return (

    <section
      id="contact-info"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="contact-container">

        {/* LEFT IMAGE */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="image-border">

            <img
              src={contactImage}
              alt="contact"
            />

          </div>

          <div className="star star-1"></div>
          <div className="star star-2"></div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h1>
            CONTACT INFORMATION
          </h1>

          <div className="contact-details">

            {/* EMAIL */}

            <motion.div
              className="contact-item"
              whileHover={{ x: 8 }}
            >

              <div className="icon-box">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>

                <p>
                  krherath.dev@gmail.com
                </p>
              </div>

            </motion.div>

            {/* WHATSAPP */}

            <motion.div
              className="contact-item"
              whileHover={{ x: 8 }}
            >

              <div className="icon-box whatsapp">
                <FaWhatsapp />
              </div>

              <div>
                <h3>WhatsApp</h3>

                <p>
                  +94 77 82 66 824
                </p>
              </div>

            </motion.div>

            {/* CALL */}

            <motion.div
              className="contact-item"
              whileHover={{ x: 8 }}
            >

              <div className="icon-box">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Call</h3>

                <p>
                  +94 70 366 1394
                </p>
              </div>

            </motion.div>

            {/* LOCATION */}

            <motion.div
              className="contact-item"
              whileHover={{ x: 8 }}
            >

              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>

                <p>
                  No.54, Beramana,
                  Wijayabhahukandha
                </p>
              </div>

            </motion.div>

          </div>

          {/* SOCIALS */}

          <div className="social-section">

            <h2>
              Connect With Me
            </h2>

            <div className="social-icons">

              <a href="https://github.com/RasanjaliHerath">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com">
                <FaLinkedin />
              </a>

               <a href="https://medium.com/@rasanjaliherath">
                <FaMedium />
              </a>

              <a href="https://rasanjaliherath.blogspot.com">
                <FaBlogger />
              </a>

              <a href="https://www.instagram.com/__.l_i_l_y.__?igsh=Mnd1ZWExejJkYzZq&utm_source=qr">
                <FaInstagram />
              </a>

             

              

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default ContactInfo;