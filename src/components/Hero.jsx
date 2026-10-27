import { useState } from 'react';
import { heroBubbles } from '../content';
import './Hero.css';

export default function Hero() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="hero">
      <div className="wrap">
        <div>
          <h1>
            Your head is loud. <em>We can help.</em>
          </h1>
          <p className="sub">
            Two therapists, one warm practice. Khushhal and Mahvash Ahmed help you slow the
            thoughts down and get back to your life.
          </p>
          <a className="btn" href="#contact">
            Share your interest
          </a>
          <p className="hint">Tap a bubble to see what we'd say back.</p>
        </div>
        <div className="stage">
          {heroBubbles.map((bubble) => {
            const open = openId === bubble.id;
            return (
              <button
                key={bubble.id}
                className={`bubble ${bubble.id}${open ? ' open' : ''}`}
                onClick={() => setOpenId(open ? null : bubble.id)}
              >
                {open ? bubble.answer : bubble.question}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
