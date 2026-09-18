import { useState } from 'react';
import './Header.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#why-therapy', label: 'Why Therapy' },
  { href: '#approach', label: 'How We Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">
            Grounded <em>Therapy</em>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Book a Consultation
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
