import React from 'react';

export const OmnitypeMockup: React.FC = () => {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden relative shadow-inner shrink-0 bg-neutral-900 border border-[#EEEEEE]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Omnitype packaging mockup"
      >
        {/* Dark minimalist studio surface */}
        <rect width="100" height="100" fill="#121316" />

        {/* Angled white packaging box (3D isometric perspective) */}
        <g transform="translate(14, 20) rotate(-12)">
          {/* Box top lid */}
          <polygon points="10,15 55,2 75,18 30,31" fill="#FFFFFF" />
          
          {/* Box front side */}
          <polygon points="10,15 30,31 30,65 10,48" fill="#E6E8EC" />
          
          {/* Box right side */}
          <polygon points="30,31 75,18 75,52 30,65" fill="#D2D6DC" />

          {/* OMNITYPE bold typography on top lid */}
          <text
            x="20"
            y="23"
            transform="rotate(14, 20, 23)"
            fontFamily="monospace, sans-serif"
            fontSize="7.5"
            fontWeight="900"
            letterSpacing="1.2"
            fill="#090A0C"
          >
            OMNITYPE
          </text>

          {/* Red/Blue precision brand stripe on box front */}
          <polygon points="10,25 30,41 30,44 10,28" fill="#E11D48" />
          <polygon points="10,28 30,44 30,47 10,31" fill="#003FC0" />

          {/* Minimalist barcode / technical spec mark */}
          <rect x="13" y="38" width="12" height="4" fill="#090A0C" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};
