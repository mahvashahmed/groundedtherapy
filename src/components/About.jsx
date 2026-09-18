import { therapists } from '../content';
import './About.css';

function TherapistCard({ therapist, reverse }) {
  return (
    <div className={`therapist-card ${reverse ? 'reverse' : ''}`}>
      <div className="therapist-photo">
        <span>{therapist.photoInitial}</span>
      </div>
      <div className="therapist-details">
        <h3>{therapist.name}</h3>
        <p className="therapist-title">{therapist.title}</p>
        <p className="therapist-tagline">{therapist.tagline}</p>
        <p className="therapist-bio">{therapist.bio}</p>

        <div className="therapist-block">
          <h4>Qualifications</h4>
          <ul>
            {therapist.qualifications.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="therapist-block">
          <h4>Areas of Expertise</h4>
          <div className="tag-row">
            {therapist.expertise.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="placeholder-note">Bio, qualifications and expertise shown are placeholders.</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-heading">
        <p className="eyebrow">About Us</p>
        <h2>Meet your therapists</h2>
        <p className="about-intro">
          We are not the therapists who just smile and nod. We'll sit with you in the hard
          moments and celebrate the breakthroughs alongside you.
        </p>
      </div>

      <div className="therapist-list">
        <TherapistCard therapist={therapists[0]} />
        <TherapistCard therapist={therapists[1]} reverse />
      </div>
    </section>
  );
}
