import React from "react";

/* ---------- Skill icons (SVG fragments) ---------- */
const FONT = "Space Grotesk, sans-serif";

const ICONS = {
  html: (
    <>
      <path d="M-26-30h52l-4 48L0 30l-22-12z" fill="#e44d26" />
      <path d="M0-26h22l-4 41L0 25z" fill="#f16529" />
      <text y="6" fontSize="26" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily={FONT}>5</text>
    </>
  ),
  css: (
    <>
      <path d="M-26-30h52l-4 48L0 30l-22-12z" fill="#1572b6" />
      <path d="M0-26h22l-4 41L0 25z" fill="#33a9dc" />
      <text y="6" fontSize="26" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily={FONT}>3</text>
    </>
  ),
  js: (
    <>
      <rect x="-28" y="-28" width="56" height="56" rx="6" fill="#f7df1e" />
      <text x="24" y="22" fontSize="24" fontWeight="700" fill="#111" textAnchor="end" fontFamily={FONT}>JS</text>
    </>
  ),
  ts: (
    <>
      <rect x="-28" y="-28" width="56" height="56" rx="6" fill="#3178c6" />
      <text x="24" y="22" fontSize="24" fontWeight="700" fill="#fff" textAnchor="end" fontFamily={FONT}>TS</text>
    </>
  ),
  tw: (
    <path
      transform="translate(-27,-16.2)"
      fill="#38bdf8"
      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
    />
  ),
  next: (
    <>
      <circle r="28" fill="#000" stroke="#fff" strokeOpacity=".5" strokeWidth="1.5" />
      <text y="9" fontSize="28" fontWeight="700" fill="#fff" textAnchor="middle" fontFamily={FONT}>N</text>
    </>
  ),
};

/* ---------- Data ---------- */
const NODES = [
  { x: 160, y: 120, icon: "html", title: "HTML5", sub: "Semantic markup", color: "#e44d26" },
  { x: 160, y: 300, icon: "css", title: "CSS3", sub: "Responsive layouts", color: "#1572b6" },
  { x: 160, y: 480, icon: "js", title: "JavaScript", sub: "ES6+ and the DOM", color: "#f7df1e" },
  { x: 840, y: 120, icon: "ts", title: "TypeScript", sub: "Type-safe code", color: "#3178c6" },
  { x: 840, y: 300, icon: "tw", title: "Tailwind CSS", sub: "Utility-first styling", color: "#38bdf8" },
  { x: 840, y: 480, icon: "next", title: "Next.js", sub: "Routing and SSR", color: "#8b9cb8" },
];

const PATHS = [
  "M500 300 C 360 300, 330 120, 160 120",
  "M500 300 L 160 300",
  "M500 300 C 360 300, 330 480, 160 480",
  "M500 300 C 640 300, 670 120, 840 120",
  "M500 300 L 840 300",
  "M500 300 C 640 300, 670 480, 840 480",
];

/* ---------- Theme colors (CSS variables, light + dark) ---------- */
const THEME_VARS =
  "[--ink:#0f172a] [--muted:#52627a] [--glass:rgba(255,255,255,.85)] [--ring:rgba(15,23,42,.14)] [--line:#0ea5c6] [--react:#0aa3c7] [--hubfill:#ffffff] " +
  "dark:[--ink:#eef4ff] dark:[--muted:#8fa3c0] dark:[--glass:rgba(18,28,48,.78)] dark:[--ring:rgba(180,210,255,.22)] dark:[--line:#4fd1ee] dark:[--react:#61dafb] dark:[--hubfill:#0b1424]";

/* Tailwind can't define keyframes inline, so only these tiny rules live in CSS. */
const KEYFRAMES = `
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&display=swap");
@keyframes ta-dash  { to { stroke-dashoffset: -28; } }
@keyframes ta-bob   { 50% { transform: translateY(-7px); } }
@keyframes ta-spin  { to { transform: rotate(360deg); } }
@keyframes ta-pulse { 50% { transform: scale(1.08); opacity: .55; } }
`;

/**
 * TechAnimation
 * Props:
 *  - title, subtitle : center hub text
 *  - className       : extra classes for the outer wrapper
 *
 * Dark mode follows Tailwind's `dark:` setting (system by default, or your
 * `.dark` class if you configured darkMode: "class").
 */
export default function TechAnimation({
  title = "Frontend Mastery",
  subtitle = "Building fast, accessible interfaces",
  className = "",
}) {
  return (
    <div
      className={`${THEME_VARS} flex w-full items-center justify-center overflow-x-hidden bg-transparent font-['Space_Grotesk',system-ui,sans-serif] text-[color:var(--ink)] ${className}`}
    >
      <style>{KEYFRAMES}</style>

      <div className="box-border w-full max-w-[1100px] p-4">
        <svg
          className="block h-auto w-full overflow-visible"
          viewBox="0 0 1000 640"
          role="img"
          aria-label="React at the center, connected to HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS and Next.js"
        >
          <defs>
            <filter id="ta-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="16" />
            </filter>

            <filter id="ta-sh" x="-30%" y="-30%" width="160%" height="170%">
              <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#000" floodOpacity=".28" />
            </filter>

            {PATHS.map((d, i) => (
              <path key={i} id={`ta-p${i + 1}`} d={d} />
            ))}
          </defs>

          {/* Connecting lines */}
          <g>
            {PATHS.map((_, i) => (
              <React.Fragment key={i}>
                <use
                  href={`#ta-p${i + 1}`}
                  className="fill-none stroke-[color:var(--line)] [stroke-width:2] opacity-[.22]"
                />
                <use
                  href={`#ta-p${i + 1}`}
                  className="fill-none stroke-[color:var(--line)] [stroke-width:2.5] [stroke-linecap:round] [stroke-dasharray:3_11] animate-[ta-dash_1.4s_linear_infinite] motion-reduce:animate-none"
                />
              </React.Fragment>
            ))}
          </g>

          {/* Animated dots */}
          <g className="fill-[color:var(--line)]">
            {NODES.map((_, k) =>
              [0, 1].map((j) => {
                const begin = `-${j * 2 + k * 0.5}s`;
                return (
                  <circle key={`${k}-${j}`} r="4.5">
                    <animateMotion dur="4s" begin={begin} repeatCount="indefinite">
                      <mpath href={`#ta-p${k + 1}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      dur="4s"
                      begin={begin}
                      repeatCount="indefinite"
                    />
                  </circle>
                );
              })
            )}
          </g>

          {/* Central hub */}
          <g transform="translate(500,300)" filter="url(#ta-sh)">
            <circle
              r="120"
              opacity=".28"
              filter="url(#ta-blur)"
              className="fill-[color:var(--react)] origin-[0_0] animate-[ta-pulse_3.6s_ease-in-out_infinite] motion-reduce:animate-none"
            />
            <circle
              r="102"
              strokeWidth="1.5"
              className="fill-[color:var(--hubfill)] stroke-[color:var(--ring)]"
            />
            <circle
              r="116"
              strokeWidth="1.5"
              strokeDasharray="2 9"
              opacity=".7"
              className="fill-none stroke-[color:var(--react)] origin-[0_0] animate-[ta-spin_40s_linear_infinite_reverse] motion-reduce:animate-none"
            />
            <g
              strokeWidth="5"
              className="fill-none stroke-[color:var(--react)] origin-[0_0] animate-[ta-spin_16s_linear_infinite] motion-reduce:animate-none"
            >
              <ellipse rx="64" ry="24" />
              <ellipse rx="64" ry="24" transform="rotate(60)" />
              <ellipse rx="64" ry="24" transform="rotate(120)" />
              <circle r="10" className="fill-[color:var(--react)] stroke-none" />
            </g>
          </g>

          <text
            x="500"
            y="458"
            className="fill-[color:var(--ink)] text-[30px] font-bold tracking-[.5px] [text-anchor:middle]"
          >
            {title}
          </text>
          <text
            x="500"
            y="484"
            className="fill-[color:var(--muted)] text-[17px] font-medium [text-anchor:middle] max-sm:hidden"
          >
            {subtitle}
          </text>

          {/* Skill nodes */}
          <g>
            {NODES.map((n, k) => (
              <g key={n.title} className="group" transform={`translate(${n.x},${n.y})`}>
                <g
                  className="animate-[ta-bob_6s_ease-in-out_infinite] motion-reduce:animate-none"
                  style={{ animationDelay: `-${k * 1.1}s` }}
                >
                  {/* Softer hover glow (was opacity .55 / scale 1.15) */}
                  <circle
                    r="62"
                    fill={n.color}
                    filter="url(#ta-blur)"
                    className="origin-[0_0] opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-20"
                  />

                  <g filter="url(#ta-sh)">
                    <circle
                      r="52"
                      className="fill-[color:var(--glass)] stroke-[color:var(--ring)] [stroke-width:1.5] transition-[stroke] duration-300 group-hover:stroke-[color:var(--line)]"
                    />
                  </g>

                  <g transform="scale(.95)">{ICONS[n.icon]}</g>

                  <text
                    y="86"
                    className="fill-[color:var(--ink)] text-[22px] font-semibold [text-anchor:middle] max-sm:text-[28px]"
                  >
                    {n.title}
                  </text>
                  <text
                    y="108"
                    className="fill-[color:var(--muted)] text-base font-medium [text-anchor:middle] max-sm:hidden"
                  >
                    {n.sub}
                  </text>
                </g>
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}