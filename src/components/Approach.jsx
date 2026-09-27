import { approachSteps, therapyStyle } from '../content';
import { HandLeafIcon, TwoHeadsIcon } from './Icons';
import './Approach.css';

export default function Approach() {
  return (
    <section className="approach section" id="approach">
      <div className="approach-panel approach-panel-sage">
        <HandLeafIcon className="approach-icon" />
        <p className="eyebrow">How We Work</p>
        <h3>Our therapy style</h3>
        <p>{therapyStyle.shared}</p>

        <div className="therapist-style">
          <h4>Khushhal</h4>
          <p>{therapyStyle.khushhal}</p>
        </div>

        {therapyStyle.mahvash && (
          <div className="therapist-style">
            <h4>Mahvash</h4>
            <p>{therapyStyle.mahvash}</p>
          </div>
        )}
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

      <div className="approach-panel approach-panel-ember">
        <TwoHeadsIcon className="approach-icon approach-icon-wide" />
        <h3>Individual &amp; Couples</h3>
        <p>PLACEHOLDER — mention if you see individuals, couples, or both, and any specialties.</p>
      </div>
    </section>
  );
}
