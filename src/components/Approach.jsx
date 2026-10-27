import { howSteps } from '../content';
import './Approach.css';

export default function Approach() {
  return (
    <section className="mist" id="how">
      <div className="wrap">
        <h2>How we work</h2>
        <div className="path">
          {howSteps.map((step) => (
            <div className={`step${step.gap ? ' gap' : ''}`} key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
