import { useState } from 'react';
import './Header.css';

const links = [
  { href: '#/therapists', label: 'Meet the Therapists' },
  { href: '#why-therapy', label: 'Why Therapy' },
  { href: '#approach', label: 'How We Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img className="logo-image" src="/logo.png" alt="Between the Sessions" />
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
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
