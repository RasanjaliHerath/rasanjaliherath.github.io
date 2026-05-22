import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { portfolioData } from './portfolioData';
import './FAQ.css';

function FAQ() {
  const { isDark } = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className={`faq ${isDark ? 'dark' : 'light'}`}>
      <div className="faq-container">
        <h2>Services</h2>
        <p className="faq-subtitle">Explore my services and answers to commonly asked questions</p>

        <div className="faq-list">
          {portfolioData.faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${expandedId === faq.id ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {expandedId === faq.id ? '−' : '+'}
                </span>
              </button>

              {expandedId === faq.id && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
