import React from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me for any inquiries or opportunities.
      </p>
      <a href="mailto:cpasencoredeployer@gmail.com" className="contact-link">
        Send an Email
      </a>
    </section>
  );
};

export default Contact;
