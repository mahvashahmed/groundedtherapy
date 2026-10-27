import { therapists } from '../content';
import './About.css';

export default function About() {
  return (
    <section id="people">
      <div className="wrap">
        <h2>Meet the therapists</h2>
        <p className="lead">
          Two people, one shared way of working: listen well, be honest, stay kind.
        </p>
        <div className="people">
          {therapists.map((therapist) => (
            <article className="person" key={therapist.id}>
              <div className="avatar">{therapist.initial}</div>
              <h3>{therapist.name}</h3>
              <p>{therapist.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
