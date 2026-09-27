import { contact } from '../content';
import { InstagramIcon } from './Icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section footer-inner">
        <div className="footer-brand">
          <img className="logo-image" src="/logo.png" alt="Between the Sessions" />
        </div>
        <p className="footer-names">Khushhal Ahmed &amp; Mahvash Ahmed</p>
        <p className="footer-contact">
          {contact.email} · {contact.phone}
        </p>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow us on Instagram"
          className="footer-social"
        >
          <InstagramIcon className="footer-social-icon" />
        </a>
        <p className="footer-copy">© {new Date().getFullYear()} Between the Sessions. All rights reserved.</p>
      </div>
    </footer>
  );
}
