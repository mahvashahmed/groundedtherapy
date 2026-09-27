import { whyTherapy, helpTopics } from '../content';
import { LotusIcon } from './Icons';
import './WhyTherapy.css';

export default function WhyTherapy() {
  return (
    <section className="why-therapy" id="why-therapy">
      <div className="section">
        <div className="why-heading">
          <p className="eyebrow">Why Therapy</p>
          <h2>Therapy isn't only for crisis moments.</h2>
          <p className="why-intro">
            It's for anyone who wants to understand themselves a little better, carry what's heavy
            a little more lightly, and build a life that feels more meaningful.
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

        <div className="help-block">
          <p className="eyebrow">What We Help With</p>
          <h3>A broad range of concerns.</h3>
          <p className="help-intro">We work across a broad range of concerns:</p>
          <div className="help-grid">
            {helpTopics.map((topic) => (
              <span className="help-tag" key={topic}>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
