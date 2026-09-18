import { contact } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section footer-inner">
        <div className="footer-brand">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">
            Grounded <em>Therapy</em>
          </span>
        </div>
        <p className="footer-names">Khushhal Ahmed &amp; Mahvash Ahmed</p>
        <p className="footer-contact">
          {contact.email} · {contact.phone}
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Grounded Therapy. All rights reserved.</p>
      </div>
    </footer>
  );
}
