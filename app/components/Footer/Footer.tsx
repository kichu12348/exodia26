"use client";
import { useState } from "react";
import styles from "./Footer.module.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Modal from "../Modal/Modal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={styles.footer} id="contact">
      {/* Top accent line */}
      <div className={styles.topLine}></div>

      <div className={styles.container}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Brand + Social */}
          <div className={styles.brandSection}>
            <h2 className={styles.logo}>EXODIA</h2>
            <p className={styles.tagline}>Where innovation meets creativity.</p>
            <div className={styles.socialIcons}>
              <a
                href="https://www.instagram.com/exodia.cec"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@EXODIACEC"
                className={styles.socialIcon}
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com/EXODIACEC"
                className={styles.socialIcon}
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact</h3>
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>+91-9526928521</span>
                  <span>+91-9037195527</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                <div className={styles.contactDetails}>
                  <span>+91-7902622108</span>
                  <span>+91-7902425838</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <a
                  href="mailto:exodiacec@gmail.com"
                  className={styles.emailLink}
                >
                  exodiacec@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapSection}>
            <h3 className={styles.sectionTitle}>Location</h3>
            <div className={styles.mapFrame}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.179869160877!2d76.61490531046704!3d9.31732529071739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sin!4v1706448825074!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.iframe}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} EXODIA
          </span>
          <button
            className={styles.termsButton}
            onClick={() => setIsModalOpen(true)}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Terms and Conditions</h2>
          <div className={styles.modalBody}>
            <p>
              <strong>1. Registration:</strong> Confirmed upon full payment and
              form completion.
            </p>
            <p>
              <strong>2. Cancellation:</strong> No refunds after registration.
            </p>
            <p>
              <strong>3. Event Changes:</strong> Organizers may modify content,
              timing, or location.
            </p>
            <p>
              <strong>4. Liability:</strong> Organizers are not liable for any
              loss or injury.
            </p>
            <p>
              <strong>5. Photography:</strong> Recording may occur during the
              event.
            </p>
            <p>
              <strong>6. Conduct:</strong> Professional behavior expected from
              all participants.
            </p>
            <p className={styles.modalNote}>
              By registering, you agree to these terms.
            </p>
          </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
