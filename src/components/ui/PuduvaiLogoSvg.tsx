interface PuduvaiLogoSvgProps {
  className?: string;
  size?: number | string;
}

export default function PuduvaiLogoSvg({ className = '', size = 48 }: PuduvaiLogoSvgProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      className={`rounded-full flex-shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Puduvai Bouncers Official Emblem"
    >
      <defs>
        {/* Outer border gradient */}
        <linearGradient id="puduvaiGoldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Inner black radial spotlight */}
        <radialGradient id="puduvaiBgGlow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#22252a" />
          <stop offset="45%" stopColor="#0d0f11" />
          <stop offset="100%" stopColor="#050607" />
        </radialGradient>

        {/* Orange bicep gradient */}
        <linearGradient id="puduvaiMuscleOrange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="40%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        <filter id="puduvaiGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#f59e0b" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Main black circle background */}
      <circle cx="250" cy="250" r="240" fill="url(#puduvaiBgGlow)" />

      {/* Thick Golden Orange Ring Border */}
      <circle
        cx="250"
        cy="250"
        r="230"
        stroke="url(#puduvaiGoldBorder)"
        strokeWidth="20"
        fill="none"
      />

      {/* Thin inner gold accent ring */}
      <circle
        cx="250"
        cy="250"
        r="218"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeOpacity="0.4"
        fill="none"
      />

      {/* White Halo Ring behind Traps / Neck */}
      <circle
        cx="250"
        cy="210"
        r="88"
        stroke="#ffffff"
        strokeWidth="11"
        strokeDasharray="42 22 75 22 42 22"
        fill="none"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* White Wing Badges / Diagonal Bars - LEFT SIDE */}
      <g fill="#ffffff" opacity="0.95">
        {/* Top left bar */}
        <polygon points="175,215 125,215 65,235 115,235" />
        {/* Middle left bar */}
        <polygon points="180,243 140,243 85,263 125,263" />
        {/* Bottom left bar */}
        <polygon points="190,271 160,271 115,291 145,291" />

        {/* White Wing Badges / Diagonal Bars - RIGHT SIDE */}
        {/* Top right bar */}
        <polygon points="325,215 375,215 435,235 385,235" />
        {/* Middle right bar */}
        <polygon points="320,243 360,243 415,263 375,263" />
        {/* Bottom right bar */}
        <polygon points="310,271 340,271 385,291 355,291" />
      </g>

      {/* MUSCULAR ATHLETIC ARMS (ORANGE DOUBLE BICEP FLEX) */}
      {/* Left Arm: Deltoid, Bicep, Forearm, Fist */}
      <g fill="url(#puduvaiMuscleOrange)" stroke="#0a0a0a" strokeWidth="2.5" strokeLinejoin="round">
        {/* Left Bicep and Shoulder */}
        <path d="M 175,215 
                 C 160,210 145,195 140,175 
                 C 135,150 145,130 165,125 
                 C 180,120 200,135 205,150 
                 C 210,165 205,185 195,195
                 C 185,205 178,212 175,215 Z" />
        {/* Left Forearm and Fist */}
        <path d="M 148,155 
                 C 135,145 125,140 120,150 
                 C 115,160 125,175 140,182 
                 C 152,190 165,185 168,175
                 C 170,165 160,160 148,155 Z" />
        {/* Left Fist knuckles */}
        <path d="M 165,125 
                 C 160,118 152,118 145,124 
                 C 138,130 140,140 148,145 
                 C 155,142 165,135 165,125 Z" />
        {/* Muscular definition lines on left arm */}
        <path d="M 148,165 C 158,155 175,148 185,152" fill="none" stroke="#0a0a0a" strokeWidth="3" />
        <path d="M 135,160 C 142,150 152,142 160,135" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
      </g>

      {/* Right Arm: Deltoid, Bicep, Forearm, Fist */}
      <g fill="url(#puduvaiMuscleOrange)" stroke="#0a0a0a" strokeWidth="2.5" strokeLinejoin="round">
        {/* Right Bicep and Shoulder */}
        <path d="M 325,215 
                 C 340,210 355,195 360,175 
                 C 365,150 355,130 335,125 
                 C 320,120 300,135 295,150 
                 C 290,165 295,185 305,195
                 C 315,205 322,212 325,215 Z" />
        {/* Right Forearm and Fist */}
        <path d="M 352,155 
                 C 365,145 375,140 380,150 
                 C 385,160 375,175 360,182 
                 C 348,190 335,185 332,175
                 C 330,165 340,160 352,155 Z" />
        {/* Right Fist knuckles */}
        <path d="M 335,125 
                 C 340,118 348,118 355,124 
                 C 362,130 360,140 352,145 
                 C 345,142 335,135 335,125 Z" />
        {/* Muscular definition lines on right arm */}
        <path d="M 352,165 C 342,155 325,148 315,152" fill="none" stroke="#0a0a0a" strokeWidth="3" />
        <path d="M 365,160 C 358,150 348,142 340,135" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
      </g>

      {/* BOUNCER BODYBUILDER SILHOUETTE (TORSO, TRAPS, HEAD) */}
      <g fill="#0a0a0a">
        {/* Trapezius, Neck & Athletic Head Silhouette */}
        <path d="M 215,215 
                 C 215,195 220,165 235,160 
                 C 230,152 230,138 234,130 
                 C 238,122 245,120 250,120 
                 C 255,120 262,122 266,130 
                 C 270,138 270,152 265,160 
                 C 280,165 285,195 285,215 Z" />
        
        {/* Main Torso & Waist */}
        <path d="M 175,215 
                 C 195,205 225,205 250,210 
                 C 275,205 305,205 325,215 
                 C 330,240 315,270 295,300 
                 C 290,320 285,340 280,345 
                 L 220,345 
                 C 215,340 210,320 205,300 
                 C 185,270 170,240 175,215 Z" />
      </g>

      {/* MUSCULAR CHEST & SIX-PACK CONTOUR LINES */}
      <g stroke="#ffffff" strokeWidth="1.8" opacity="0.35" fill="none" strokeLinecap="round">
        {/* Pectoral division / Sternum */}
        <path d="M 250,210 L 250,270" strokeWidth="2.5" />
        {/* Left Pec lower arch */}
        <path d="M 205,220 C 220,245 245,245 250,240" strokeWidth="2" />
        {/* Right Pec lower arch */}
        <path d="M 295,220 C 280,245 255,245 250,240" strokeWidth="2" />
        
        {/* Six Pack Abs */}
        {/* Linea alba */}
        <path d="M 250,270 L 250,335" strokeWidth="2" />
        {/* Top abs row */}
        <path d="M 230,275 C 240,273 248,274 250,275 C 252,274 260,273 270,275" />
        {/* Middle abs row */}
        <path d="M 232,295 C 242,293 248,294 250,295 C 252,294 258,293 268,295" />
        {/* Bottom abs row */}
        <path d="M 235,315 C 243,313 248,314 250,315 C 252,314 257,313 265,315" />
        
        {/* Outer abdominal oblique cuts */}
        <path d="M 226,275 C 224,295 222,315 220,335" />
        <path d="M 274,275 C 276,295 278,315 280,335" />
      </g>

      {/* TYPOGRAPHY: PUDUVAI BOUNCERS */}
      {/* Top Line: PUDUVAI */}
      <text
        x="250"
        y="384"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="'Oswald', 'Montserrat', 'Inter', -apple-system, sans-serif"
        fontWeight="900"
        fontSize="34"
        letterSpacing="4"
        style={{ textTransform: 'uppercase' }}
      >
        PUDUVAI
      </text>

      {/* Bottom Line: BOUNCERS */}
      <text
        x="250"
        y="412"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="'Oswald', 'Montserrat', 'Inter', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="7"
        style={{ textTransform: 'uppercase' }}
      >
        BOUNCERS
      </text>
    </svg>
  );
}
