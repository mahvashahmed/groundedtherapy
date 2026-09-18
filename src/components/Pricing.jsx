import { pricing } from '../content';
import './Pricing.css';

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section">
        <div className="pricing-heading">
          <p className="eyebrow">Pricing</p>
          <h2>Investing in yourself</h2>
          <p className="placeholder-note">All prices below are placeholders — update with your real rates.</p>
        </div>

        <div className="pricing-grid">
          {pricing.map((plan) => (
            <div className="pricing-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <p className="pricing-price">{plan.price}</p>
              <p className="pricing-duration">{plan.duration}</p>
              <p className="pricing-desc">{plan.description}</p>
              <a href="#contact" className="btn btn-outline">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
