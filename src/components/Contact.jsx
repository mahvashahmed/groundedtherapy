import { contact } from '../content';
import { SunIcon, WaveDivider } from './Icons';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <WaveDivider fill="var(--sage-dark)" />
      <div className="section contact-inner">
        <SunIcon className="contact-icon" />
        <p className="eyebrow contact-eyebrow">Let's Connect</p>
        <h2>Ready to feel a little more grounded?</h2>
        <p className="contact-body">
          Tell us what's bringing you here, and we'll be in touch to arrange your free intro call.
        </p>

        <div className="contact-details">
          <div>
            <h4>Email</h4>
            <p>{contact.email}</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>{contact.phone}</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>{contact.location}</p>
          </div>
        </div>

        <p className="placeholder-note contact-note">Contact details shown are placeholders.</p>
      </div>
    </section>
  );
}
