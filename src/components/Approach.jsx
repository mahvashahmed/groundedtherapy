import { approachSteps } from '../content';
import { HandLeafIcon, TwoHeadsIcon } from './Icons';
import './Approach.css';

export default function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="approach-panel approach-panel-sage">
        <HandLeafIcon className="approach-icon" />
        <h3>How We Work</h3>
        <p>
          PLACEHOLDER — describe your shared therapeutic lens here (e.g. trauma-informed,
          attachment-focused, integrative) and what a session with either of you typically looks
          like.
        </p>
        <a href="#contact" className="btn btn-outline">
          Our Therapy Style
        </a>
      </div>

      <div className="approach-steps">
        <p className="eyebrow">Getting Started</p>
        <h2>What to expect</h2>
        <ol>
          {approachSteps.map((step, i) => (
            <li key={step.title}>
              <span className="step-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="approach-panel approach-panel-mustard">
        <TwoHeadsIcon className="approach-icon approach-icon-wide" />
        <h3>Individual &amp; Couples</h3>
        <p>PLACEHOLDER — mention if you see individuals, couples, or both, and any specialties.</p>
        <a href="#pricing" className="btn btn-light">
          See Pricing
        </a>
      </div>
    </section>
  );
}
