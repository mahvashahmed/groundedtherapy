import { whySwaps } from '../content';
import './WhyTherapy.css';

export default function WhyTherapy() {
  return (
    <section className="mist" id="why">
      <div className="wrap">
        <h2>Why talk to someone?</h2>
        <p className="lead">
          Most of therapy happens in the days between sessions. That is where you try new things,
          notice old habits and change them.
        </p>
        <div className="swap">
          {whySwaps.map((row) => (
            <div className="row" key={row.in}>
              <div className="in">{row.in}</div>
              <div className="out">{row.out}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
