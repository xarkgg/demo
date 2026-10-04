import React from 'react';

interface PortraitProps {
  className?: string;
  isKusko?: boolean;
}

export const PortraitKane: React.FC<PortraitProps> = ({ className = '', isKusko = false }) => {
  if (isKusko) {
    // Zuko stealth avatar from user's earlier upload
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#003FC0] ${className}`}>
        <svg viewBox="0 0 500 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="500" height="500" fill="#003FC0" />
          <path d="M-20 520 L60 380 L140 330 L220 320 L280 320 L370 335 L450 380 L520 520 Z" fill="#141720" />
          <path d="M130 335 C170 350, 220 365, 275 362 C330 360, 375 342, 395 330 Z" fill="#0B0D12" />
          <path d="M205 280 L205 340 C225 350, 265 350, 295 335 L295 280 Z" fill="#D4A37D" />
          <path d="M185 190 C175 240, 180 270, 220 310 C240 328, 255 332, 270 325 C295 310, 325 265, 335 210 C340 180, 330 160, 310 150 Z" fill="#EAC29E" />
          {/* Scar */}
          <path d="M272 175 C285 160, 322 170, 332 205 C338 230, 330 255, 310 270 C290 260, 278 240, 272 225 Z" fill="#991B1B" />
          {/* Eyes */}
          <ellipse cx="228" cy="225" rx="6" ry="6" fill="#D97706" />
          <ellipse cx="300" cy="226" rx="5.5" ry="5.5" fill="#D97706" />
          {/* Hair */}
          <path d="M135 210 C125 150, 160 100, 210 75 C250 55, 305 60, 345 85 C390 115, 410 165, 395 220 C380 180, 360 150, 330 130 C300 110, 260 110, 220 120 C180 135, 150 170, 135 210 Z" fill="#12151D" />
          <path d="M150 190 L130 240 L160 225 L145 270 L175 245 L170 280 L195 240 Z" fill="#171A24" />
          <path d="M275 160 L315 235 L300 205 L335 230 L320 185 L350 215 L345 165 Z" fill="#1A1E29" />
        </svg>
      </div>
    );
  }

  // Exact portrait from the screenshot:
  // Bearded creative director with round metal glasses and black crewneck on neutral light-grey backdrop
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#D8D8D8] ${className}`}>
      <svg
        viewBox="0 0 300 360"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Creative director portrait"
      >
        <defs>
          <linearGradient id="bg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DFDFDF" />
            <stop offset="100%" stopColor="#CCCCCC" />
          </linearGradient>
          <linearGradient id="hair-tone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A4540" />
            <stop offset="100%" stopColor="#312D29" />
          </linearGradient>
          <linearGradient id="beard-tone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5C534B" />
            <stop offset="100%" stopColor="#3C3631" />
          </linearGradient>
        </defs>

        {/* Studio Background */}
        <rect width="300" height="360" fill="url(#bg-grad)" />

        {/* Black crewneck t-shirt and shoulders */}
        <path
          d="M30 380 L65 295 C85 270, 115 260, 140 260 C165 260, 195 270, 215 295 L270 380 Z"
          fill="#1A1A1A"
        />
        {/* Collar neckline */}
        <path
          d="M120 260 C125 275, 175 275, 180 260"
          stroke="#2A2A2A"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Neck */}
        <path
          d="M125 210 L125 265 C135 270, 165 270, 175 265 L175 210 Z"
          fill="#D4B69E"
        />
        <path
          d="M125 210 C140 235, 160 235, 175 210 L175 240 C160 250, 140 250, 125 240 Z"
          fill="#BF9D84"
        />

        {/* Head and Face Base */}
        <path
          d="M110 135 C110 95, 130 75, 150 75 C170 75, 190 95, 190 135 C190 185, 175 225, 150 225 C125 225, 110 185, 110 135 Z"
          fill="#E5C8B2"
        />

        {/* Ears */}
        <path d="M102 145 C98 140, 102 165, 110 165 Z" fill="#DBBBA3" />
        <path d="M198 145 C202 140, 198 165, 190 165 Z" fill="#DBBBA3" />

        {/* Neatly Styled Hair */}
        <path
          d="M106 125 C104 90, 120 65, 150 62 C178 60, 195 85, 194 125 C186 110, 175 105, 150 105 C128 105, 115 112, 106 125 Z"
          fill="url(#hair-tone)"
        />
        {/* Hair side fade */}
        <path
          d="M104 125 L112 145 L112 125 Z"
          fill="#312D29"
        />
        <path
          d="M196 125 L188 145 L188 125 Z"
          fill="#312D29"
        />

        {/* Eyebrows */}
        <path d="M122 135 Q135 130 142 134" stroke="#423932" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M158 134 Q165 130 178 135" stroke="#423932" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        <ellipse cx="132" cy="142" rx="4.5" ry="3" fill="#24201D" />
        <circle cx="133" cy="141" r="1" fill="#FFFFFF" />
        <ellipse cx="168" cy="142" rx="4.5" ry="3" fill="#24201D" />
        <circle cx="169" cy="141" r="1" fill="#FFFFFF" />

        {/* Nose */}
        <path d="M150 135 L148 162 L154 163" stroke="#B8947A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Groomed Full Beard and Mustache */}
        <path
          d="M112 165 C112 215, 130 250, 150 250 C170 250, 188 215, 188 165 C180 180, 168 185, 150 185 C132 185, 120 180, 112 165 Z"
          fill="url(#beard-tone)"
        />
        {/* Mustache */}
        <path
          d="M136 172 C142 170, 148 174, 150 176 C152 174, 158 170, 164 172 C168 178, 158 184, 150 183 C142 184, 132 178, 136 172 Z"
          fill="#38302A"
        />

        {/* Distinctive Round Metal-Rimmed Glasses (Exact match to screenshot!) */}
        <g id="glasses">
          {/* Left Lens */}
          <circle cx="132" cy="142" r="14" stroke="#444444" strokeWidth="2" fill="rgba(255,255,255,0.25)" />
          {/* Right Lens */}
          <circle cx="168" cy="142" r="14" stroke="#444444" strokeWidth="2" fill="rgba(255,255,255,0.25)" />
          {/* Bridge */}
          <path d="M146 140 Q150 137 154 140" stroke="#444444" strokeWidth="2" fill="none" />
          {/* Temples */}
          <line x1="118" y1="141" x2="102" y2="140" stroke="#444444" strokeWidth="2" />
          <line x1="182" y1="141" x2="198" y2="140" stroke="#444444" strokeWidth="2" />
          {/* Lens reflections */}
          <path d="M124 134 Q132 131 138 136" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
          <path d="M160 134 Q168 131 174 136" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" fill="none" />
        </g>
      </svg>
    </div>
  );
};
