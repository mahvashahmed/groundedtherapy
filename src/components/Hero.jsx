import { FlowerFaceIcon, WaveDivider } from './Icons';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <FlowerFaceIcon className="hero-icon" />
        <h1>
          A grounded space to help you get <em>out of your head</em> and back into your life.
        </h1>
        <p className="hero-subtitle">
          Khushhal Ahmed &amp; Mahvash Ahmed — two therapists, one warm and collaborative practice.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Book a Consultation
          </a>
          <a href="#about" className="btn btn-outline">
            Meet the Therapists
          </a>
        </div>
      </div>
      <WaveDivider fill="var(--sage-pale)" />
    </section>
  );
}
