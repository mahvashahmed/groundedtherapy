// Hand-drawn style line illustrations in the spirit of the reference site.

export function TwoHeadsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 30c-16 0-30 14-30 32 0 12 6 22 15 28l-3 18c14 4 30 2 40-8 12 2 24-4 28-16 8-2 14-10 14-19 0-16-14-30-32-30-8 0-15 3-20 8-3-8-7-13-12-13z"
        fill="var(--sage)"
      />
      <path
        d="M160 30c16 0 30 14 30 32 0 12-6 22-15 28l3 18c-14 4-30 2-40-8-12 2-24-4-28-16-8-2-14-10-14-19 0-16 14-30 32-30 8 0 15 3 20 8 3-8 7-13 12-13z"
        fill="var(--peach)"
        opacity="0.9"
      />
    </svg>
  );
}

export function HandLeafIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 120c0 30 20 54 50 60 34 6 66-14 74-46 4-16 0-32-10-44-6 20-22 34-42 38-24 4-46-8-56-30-10 6-16 14-16 22z"
        fill="var(--sage)"
      />
      <path d="M100 30c4 26 4 52-6 76" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      <circle cx="100" cy="26" r="10" fill="var(--ember)" />
    </svg>
  );
}

export function WaveDivider({ flip, fill = 'var(--cream)' }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '60px', display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}
    >
      <path
        d="M0 40C240 80 480 0 720 20C960 40 1200 80 1440 30V80H0V40Z"
        fill={fill}
      />
    </svg>
  );
}

export function SunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="22" fill="var(--ember)" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LotusIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 90C30 90 10 70 10 50c14 6 24 18 28 32 2-16-2-32-14-44 16 2 28 14 32 30 4-16 16-28 32-30-12 12-16 28-14 44 4-14 14-26 28-32 0 20-20 40-42 40z" fill="var(--sage)" />
      <circle cx="60" cy="86" r="6" fill="var(--ember)" />
    </svg>
  );
}
