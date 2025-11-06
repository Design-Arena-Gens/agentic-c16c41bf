"use client";

import React from "react";

export default function StageScene() {
  return (
    <div className="scene-wrapper" aria-label="Cinematic performance scene">
      <svg viewBox="0 0 1440 810" width="100%" height="100%" role="img" aria-labelledby="title desc">
        <title id="title">Energetic stage performance</title>
        <desc id="desc">
          Young Indian man with green head scarf and dark sweater, holding a vintage microphone, performing on stage with blue lighting and cheering audience bokeh.
        </desc>

        {/* Definitions: gradients, blurs, lights */}
        <defs>
          <radialGradient id="spot1" cx="50%" cy="0%" r="70%">
            <stop offset="0%" stopColor="#9ad1ff" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#3a7bd5" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0a1b3e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spot2" cx="80%" cy="-10%" r="80%">
            <stop offset="0%" stopColor="#7dc8ff" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#2b6cb0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0a1b3e" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="spot3" cx="20%" cy="-10%" r="80%">
            <stop offset="0%" stopColor="#9ee7ff" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#1b5faa" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0a1b3e" stopOpacity="0" />
          </radialGradient>

          <filter id="blur1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <filter id="blur2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
          </filter>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="12" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="sweaterGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#232323" />
            <stop offset="100%" stopColor="#0c0c0c" />
          </linearGradient>
          <linearGradient id="micMetal" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#cfd8e3" />
            <stop offset="50%" stopColor="#a9b4c4" />
            <stop offset="100%" stopColor="#e6eef8" />
          </linearGradient>
          <linearGradient id="scarfGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1dbf73" />
            <stop offset="100%" stopColor="#35e28f" />
          </linearGradient>
        </defs>

        {/* Stage lighting washes */}
        <rect x="0" y="0" width="1440" height="810" fill="#071a3a" />
        <ellipse cx="720" cy="-40" rx="700" ry="420" fill="url(#spot1)" />
        <ellipse cx="1150" cy="-60" rx="520" ry="360" fill="url(#spot2)" />
        <ellipse cx="290" cy="-60" rx="520" ry="360" fill="url(#spot3)" />

        {/* Bokeh audience lights */}
        {Array.from({ length: 40 }).map((_, i) => {
          const cx = 60 + (i * 34) % 1320;
          const cy = 420 + ((i * 97) % 280);
          const r = 6 + ((i * 13) % 18);
          const op = 0.15 + ((i * 7) % 10) / 40;
          return (
            <circle key={`bokeh-${i}`} cx={cx} cy={cy} r={r} fill="#a7d2ff" opacity={op} filter="url(#blur2)" />
          );
        })}

        {/* Audience silhouettes */}
        <g opacity="0.9">
          <rect x="0" y="700" width="1440" height="110" fill="#08142c" />
          {Array.from({ length: 28 }).map((_, i) => {
            const x = i * 52 + (i % 2 === 0 ? 10 : 0);
            const h = 24 + ((i * 17) % 28);
            return (
              <g key={`crowd-${i}`} transform={`translate(${x}, ${760 - h})`}>
                <ellipse cx="16" cy="12" rx="14" ry="12" fill="#0b1f45" />
                <rect x="4" y="20" width="24" height={h} fill="#0b1f45" />
              </g>
            );
          })}
        </g>

        {/* Performer shadow/ground glow */}
        <ellipse cx="720" cy="690" rx="160" ry="26" fill="#051230" opacity="0.9" filter="url(#blur1)" />
        <ellipse cx="720" cy="690" rx="200" ry="60" fill="#5ab4ff" opacity="0.12" filter="url(#blur2)" />

        {/* Performer group */}
        <g transform="translate(580, 300)">
          {/* Back rim light */}
          <path d="M140 60 C120 30, 100 20, 70 18 C50 16, 40 18, 28 28" stroke="#98ddff" strokeWidth="6" fill="none" opacity="0.35" />

          {/* Torso (dark sweater) */}
          <path d="M60 150 C40 120, 36 90, 46 72 C56 54, 82 46, 108 50 C128 54, 142 62, 152 82 C164 108, 162 140, 154 162 C144 190, 104 210, 84 202 C70 196, 64 180, 60 150 Z" fill="url(#sweaterGrad)" />

          {/* Neck and face (warm skin tone) */}
          <path d="M106 78 C112 76, 118 78, 120 86 C122 96, 116 108, 110 114 C102 122, 98 128, 96 138 C94 148, 90 150, 84 150 C80 150, 78 144, 80 136 C84 118, 94 96, 102 86 C104 82, 102 80, 106 78 Z" fill="#b87a5a" />
          <ellipse cx="126" cy="66" rx="34" ry="40" fill="#c78967" />

          {/* Hair silhouette */}
          <path d="M94 48 C100 30, 120 18, 146 26 C160 30, 166 40, 170 54 C172 68, 160 76, 146 74 C134 72, 122 70, 114 76 C110 80, 98 76, 94 66 C92 60, 92 54, 94 48 Z" fill="#241a16" />

          {/* Stylish green scarf tied around head */}
          <path d="M86 62 C116 46, 164 42, 184 50 C192 54, 192 62, 186 68 C164 90, 122 90, 94 86 C80 84, 74 70, 86 62 Z" fill="url(#scarfGrad)" />
          <path d="M178 68 C188 70, 198 76, 206 86 C210 92, 208 100, 198 100 C184 98, 170 90, 162 84" fill="url(#scarfGrad)" />

          {/* Right arm holding microphone */}
          <path d="M154 126 C170 124, 186 124, 200 130 C212 136, 212 154, 200 160 C188 166, 170 162, 156 156" fill="#232323" />
          <path d="M150 116 C158 112, 166 112, 174 118 C180 124, 180 132, 172 138 C162 146, 150 144, 144 136 C140 130, 142 120, 150 116 Z" fill="#c78967" />

          {/* Left arm across chest for performance posture */}
          <path d="M56 136 C44 134, 30 138, 26 150 C22 164, 34 178, 52 180 C72 182, 90 172, 94 158 C96 150, 86 144, 76 142 C68 140, 62 138, 56 136 Z" fill="#232323" />

          {/* Vintage microphone on stand */}
          <g transform="translate(210, 40)">
            {/* Stand */}
            <rect x="-6" y="0" width="6" height="300" fill="#6e7a8a" opacity="0.8" />
            {/* Mic body */}
            <g filter="url(#softGlow)">
              <rect x="-46" y="-22" rx="10" ry="10" width="64" height="56" fill="url(#micMetal)" stroke="#d9e2ef" strokeWidth="2" />
              {/* Grille slats */}
              {Array.from({ length: 6 }).map((_, i) => (
                <rect key={`slat-${i}`} x="-40" y={-14 + i * 8} width="52" height="3" fill="#8ea0b6" opacity="0.9" />
              ))}
              {/* Side vents */}
              <rect x="14" y="-14" width="6" height="32" rx="2" fill="#9aaac0" />
              <rect x="-46" y="-14" width="6" height="32" rx="2" fill="#9aaac0" />
            </g>
            {/* Mic clip and cable hint */}
            <rect x="-8" y="30" width="32" height="10" rx="4" fill="#232323" />
            <path d="M20 36 C34 44, 52 64, 60 90" stroke="#101622" strokeWidth="4" fill="none" opacity="0.6" />
          </g>
        </g>

        {/* Light beams */}
        <g opacity="0.3">
          <polygon points="420,0 520,0 620,740 540,740" fill="#8dc6ff" filter="url(#blur1)" />
          <polygon points="920,0 1000,0 880,740 800,740" fill="#6bb6ff" filter="url(#blur1)" />
        </g>
      </svg>
    </div>
  );
}
