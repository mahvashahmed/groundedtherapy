import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Between the Sessions, home">
          <img alt="Between the Sessions" src="/logo.png" />
        </a>
        <nav>
          <a href="#why">Why therapy</a>
          <a href="#people">Meet the therapists</a>
          <a href="#how">How we work</a>
          <a className="pill" href="#contact">
            Share your interest
          </a>
        </nav>
      </div>
    </header>
  );
}
