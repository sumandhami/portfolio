import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactFooter({ contact, github, linkedin }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>📧 {contact.email}</div>
      <div className={styles.icons}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={`mailto:${contact.email}`}>
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

