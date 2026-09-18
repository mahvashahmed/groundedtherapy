import { contact } from '../content';
import { SunIcon, WaveDivider } from './Icons';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <WaveDivider fill="var(--sage)" />
      <div className="section contact-inner">
        <SunIcon className="contact-icon" />
        <p className="eyebrow contact-eyebrow">Let's Connect</p>
        <h2>Ready to feel a little more grounded?</h2>
        <p className="contact-body">
          Reach out and tell us a bit about what's bringing you to therapy. We'll get back to you
          to schedule a free intro call.
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

        <a href={`mailto:${contact.email}`} className="btn btn-primary">
          Book a Consultation
        </a>
        <p className="placeholder-note contact-note">Contact details shown are placeholders.</p>
      </div>
    </section>
  );
}
