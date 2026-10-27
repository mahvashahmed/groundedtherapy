import { useState } from 'react';
import { therapists } from '../content';
import './About.css';

export default function About() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="people">
      <div className="wrap">
        <h2>Meet the therapists</h2>
        <p className="lead">
          Two people, one shared way of working: listen well, be honest, stay kind.
        </p>
        <div className="people">
          {therapists.map((therapist) => {
            const open = openId === therapist.id;
            return (
              <article
                className={`person${open ? ' open' : ''}`}
                key={therapist.id}
                onClick={() => setOpenId(open ? null : therapist.id)}
                role="button"
                tabIndex={0}
                aria-expanded={open}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenId(open ? null : therapist.id);
                  }
                }}
              >
                <div className="person-top">
                  <div className="person-photo">
                    {therapist.photo ? (
                      <img src={therapist.photo} alt={therapist.name} />
                    ) : (
                      <span className="person-photo-fallback">{therapist.initial}</span>
                    )}
                  </div>
                  <div className="person-info">
                    <h3>{therapist.name}</h3>
                    <p>{therapist.bio}</p>
                    <span className="person-toggle">{open ? 'Show less −' : 'Read more +'}</span>
                  </div>
                </div>

                {open && (
                  <div className="person-more">
                    <p className="person-title">{therapist.title}</p>

                    <div className="person-block">
                      <h4>Qualifications</h4>
                      <ul>
                        {therapist.qualifications.map((q) => (
                          <li key={q}>{q}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="person-block">
                      <h4>Works with</h4>
                      <div className="person-tags">
                        {therapist.expertise.map((tag) => (
                          <span className="person-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="person-block">
                      <h4>Approaches</h4>
                      <div className="person-tags">
                        {therapist.approaches.map((tag) => (
                          <span className="person-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="person-block">
                      <h4>Languages</h4>
                      <div className="person-tags">
                        {therapist.languages.map((tag) => (
                          <span className="person-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
