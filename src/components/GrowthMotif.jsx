import './GrowthMotif.css';

export default function GrowthMotif() {
  return (
    <div className="growth-motif" aria-hidden="true">
      <svg className="growth-branch growth-branch-left" viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="vine-line"
          style={{ '--len': 520 }}
          d="M12 318C-8 275 32 248 14 208C-4 170 38 148 26 108C14 72 52 60 44 24C40 8 54 -2 66 10C74 18 68 28 60 20"
          stroke="var(--sage)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <ellipse className="vine-leaf leaf-early" cx="10" cy="205" rx="6" ry="3.5" fill="var(--peach)" transform="rotate(-30 10 205)" />
        <ellipse className="vine-leaf leaf-mid" cx="22" cy="106" rx="6" ry="3.5" fill="var(--ember)" transform="rotate(40 22 106)" />
        <ellipse className="vine-leaf leaf-late" cx="42" cy="26" rx="5.5" ry="3.2" fill="var(--sage)" transform="rotate(-15 42 26)" />
      </svg>

      <svg className="growth-branch growth-branch-right" viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="vine-line"
          style={{ '--len': 520 }}
          d="M208 2C228 45 188 72 206 112C224 150 182 172 194 212C206 248 168 260 176 296C180 312 166 322 154 310C146 302 152 292 160 300"
          stroke="var(--sage)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <ellipse className="vine-leaf leaf-early" cx="210" cy="115" rx="6" ry="3.5" fill="var(--peach)" transform="rotate(30 210 115)" />
        <ellipse className="vine-leaf leaf-mid" cx="196" cy="214" rx="6" ry="3.5" fill="var(--ember)" transform="rotate(-40 196 214)" />
        <ellipse className="vine-leaf leaf-late" cx="176" cy="294" rx="5.5" ry="3.2" fill="var(--sage)" transform="rotate(15 176 294)" />
      </svg>
    </div>
  );
}
