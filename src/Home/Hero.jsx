import { motion } from 'framer-motion';

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMedium,
  FaBlogger,
  FaDownload,
} from 'react-icons/fa';

import { useTheme } from '../ThemeContext';
import { portfolioData } from '../portfolioData';

import heroImage from '../assets/h-r.png';
import myCV from '../assets/cv.pdf';

import './Hero.css';

const { email, phone, links } = portfolioData;

const phoneTel = `tel:${phone.replace(/\s+/g, '')}`;

function Hero() {

  const { isDark } = useTheme();

  const social = [
    { href: links.github, label: 'GitHub', Icon: FaGithub },
    { href: links.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
    { href: links.blog, label: 'Blog', Icon: FaBlogger },
    { href: links.medium, label: 'Medium', Icon: FaMedium },
    { href: links.instagram, label: 'Instagram', Icon: FaInstagram },
  ];

  return (

    <section
      id="hero"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="hero-wrapper">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <h1 className="hero-name">
            {portfolioData.name}
          </h1>

          <p className="hero-role">
            SOFTWARE ENGINEER
          </p>

          <div className="hero-line"></div>

          {/* CONTACT */}

          <div className="hero-meta">

            <div className="hero-contact-links">

              {/* EMAIL */}

              <a
                className="hero-contact-col"
                href={`mailto:${email}`}
              >

                <span className="hero-contact-head">

                  <FaEnvelope className="hero-contact-ico" />

                  <span className="hero-contact-label">
                    Email
                  </span>

                </span>

                <span className="hero-contact-value">
                  {email}
                </span>

              </a>

              {/* CALL */}

              <a
                className="hero-contact-col"
                href={phoneTel}
              >

                <span className="hero-contact-head">

                  <FaPhoneAlt className="hero-contact-ico" />

                  <span className="hero-contact-label">
                    Call
                  </span>

                </span>

                <span className="hero-contact-value">
                  {phone}
                </span>

              </a>

              {/* WHATSAPP */}

              <a
                className="hero-contact-col"
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >

                <span className="hero-contact-head">

                  <FaWhatsapp className="hero-contact-ico" />

                  <span className="hero-contact-label">
                    WhatsApp
                  </span>

                </span>

                <span className="hero-contact-value">
                  {phone}
                </span>

              </a>

            </div>

            {/* SOCIAL + CV */}

            <div className="hero-social-wrapper">

              <ul
                className="hero-social"
                aria-label="Social profiles"
              >

                {social.map(({ href, label, Icon }) => (

                  <li key={label}>

                    <a
                      className="hero-social-link"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >

                      <Icon />

                    </a>

                  </li>

                ))}

              </ul>

              {/* SPACE */}

              <div className="cv-space"></div>

              {/* CV BUTTON */}

              <motion.a
                href={myCV}
                download="Kaushalya_Rasanjali_Herath_CV.pdf"
                className="download-cv-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                <FaDownload />

                Dawnload CV

              </motion.a>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="circle-bg"></div>

          <div className="image-shape">

            <img
              src={heroImage}
              alt="hero"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;