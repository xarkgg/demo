import React from 'react';

export const LumarMockup: React.FC = () => {
  return (
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden relative shadow-inner shrink-0 bg-[#163628] border border-[#EEEEEE]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Lumar vintage botanical packaging pattern"
      >
        {/* Deep forest green background */}
        <rect width="100" height="100" fill="#143325" />

        {/* Vintage botanical filigree / ornamental pattern */}
        <g stroke="#64A07B" strokeWidth="0.8" fill="none" opacity="0.65">
          {/* Top arch badge */}
          <ellipse cx="50" cy="28" rx="35" ry="18" />
          <ellipse cx="50" cy="28" rx="30" ry="14" strokeDasharray="2,2" />

          {/* Lower badge pattern */}
          <ellipse cx="50" cy="74" rx="35" ry="18" />
          <ellipse cx="50" cy="74" rx="30" ry="14" strokeDasharray="2,2" />

          {/* Center ornamental diamond */}
          <polygon points="50,42 62,50 50,58 38,50" />
        </g>

        {/* Main "Lumar" vintage script logo */}
        <text
          x="50"
          y="32"
          textAnchor="middle"
          fontFamily="serif, 'Times New Roman'"
          fontSize="11"
          fontWeight="bold"
          fontStyle="italic"
          fill="#D6EEDB"
          letterSpacing="0.8"
        >
          Lumar
        </text>

        {/* Botanical leaf flourishes */}
        <path
          d="M32 25 Q40 22 44 26"
          stroke="#A8D5B5"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M68 25 Q60 22 56 26"
          stroke="#A8D5B5"
          strokeWidth="1"
          fill="none"
        />

        {/* Secondary text banner */}
        <text
          x="50"
          y="78"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="5.5"
          fontWeight="bold"
          letterSpacing="1.5"
          fill="#A8D5B5"
        >
          EST. 2021
        </text>

        <text
          x="50"
          y="85"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="4.5"
          fontStyle="italic"
          fill="#78B08A"
        >
          Botanical Reserve
        </text>
      </svg>
    </div>
  );
};
