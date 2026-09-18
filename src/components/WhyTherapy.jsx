import { whyTherapy } from '../content';
import { LotusIcon } from './Icons';
import './WhyTherapy.css';

export default function WhyTherapy() {
  return (
    <section className="why-therapy" id="why-therapy">
      <div className="section">
        <div className="why-heading">
          <p className="eyebrow">Why Therapy</p>
          <h2>Therapy isn't just for crisis moments.</h2>
          <p className="why-intro">
            It's for anyone who wants to understand themselves a little better, carry their
            struggles a little lighter, and build a life that feels more like their own.
          </p>
        </div>

        <div className="why-grid">
          {whyTherapy.map((item) => (
            <div className="why-card" key={item.title}>
              <LotusIcon className="why-icon" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
