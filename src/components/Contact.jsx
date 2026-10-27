import { contact } from '../content';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div>
          <h2>Ready when you are.</h2>
          <p className="lead">
            Fill in a short form. We will read it and send you our fee details and a consent form.
          </p>
          <a className="btn" href={contact.shareFormUrl}>
            Share your interest
          </a>
        </div>
        <div className="say" aria-hidden="true">
          {contact.say}
        </div>
      </div>
    </section>
  );
}
