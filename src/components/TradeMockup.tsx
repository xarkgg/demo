import React from 'react';

export const TradeMockup: React.FC = () => {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden relative shadow-inner shrink-0 bg-neutral-200">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Trade architectural facade"
      >
        {/* Sky background */}
        <rect width="100" height="100" fill="#2E7E78" />
        <path d="M0 0 L100 0 L100 60 L0 30 Z" fill="#3D9B94" />

        {/* Concrete building perspective */}
        <polygon points="0,40 100,20 100,100 0,100" fill="#E8ECEF" />
        {/* Right side shadow facet */}
        <polygon points="65,27 100,20 100,100 65,100" fill="#D3D8DD" />

        {/* Architectural lines / concrete seams */}
        <line x1="0" y1="65" x2="65" y2="58" stroke="#CCD2D8" strokeWidth="1" />
        <line x1="0" y1="85" x2="65" y2="78" stroke="#CCD2D8" strokeWidth="1" />
        <line x1="65" y1="27" x2="65" y2="100" stroke="#BAC1C8" strokeWidth="1.5" />

        {/* Signage board on the wall */}
        <g transform="translate(18, 48) rotate(-4) scale(0.9)">
          {/* Sign board background */}
          <rect width="45" height="28" rx="2" fill="#E0E4E8" stroke="#C8CFD6" strokeWidth="0.8" />
          
          {/* B2B text tag */}
          <text x="4" y="16" fontFamily="sans-serif" fontSize="6.5" fontWeight="bold" fill="#75828D">
            B2B
          </text>

          {/* Red/Orange Logo Square */}
          <rect x="20" y="4" width="20" height="20" rx="3" fill="#D84A28" />
          
          {/* Logo Glyph inside */}
          <path
            d="M25 8 L29 8 L29 16 L27 18 L25 18 Z"
            fill="#1E2328"
          />
          <path
            d="M35 8 L31 8 L31 16 L33 18 L35 18 Z"
            fill="#1E2328"
          />
          <path
            d="M27 9 L33 9"
            stroke="#1E2328"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
