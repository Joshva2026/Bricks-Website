import React from 'react';

interface SVBLogoProps {
  className?: string;
  size?: number;
}

export const SVBLogoMark: React.FC<SVBLogoProps> = ({ className = 'text-white', size = 38 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top central brick */}
      <path
        d="M24 6L35 12V18L24 12L13 18V12L24 6Z"
        fill="currentColor"
        fillOpacity="0.95"
      />
      <path
        d="M24 12V24L13 18V12L24 12Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      <path
        d="M24 12L35 18V24L24 24V12Z"
        fill="currentColor"
        fillOpacity="0.65"
      />

      {/* Bottom left brick */}
      <path
        d="M13 20L22 25V31L13 26L4 31V25L13 20Z"
        fill="currentColor"
        fillOpacity="0.95"
      />
      <path
        d="M13 26V38L4 32V25L13 26Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      <path
        d="M13 26L22 31V37L13 38V26Z"
        fill="currentColor"
        fillOpacity="0.65"
      />

      {/* Bottom right brick */}
      <path
        d="M35 20L44 25V31L35 26L26 31V25L35 20Z"
        fill="currentColor"
        fillOpacity="0.95"
      />
      <path
        d="M35 26V38L26 31V25L35 26Z"
        fill="currentColor"
        fillOpacity="0.8"
      />
      <path
        d="M35 26L44 31V37L35 38V26Z"
        fill="currentColor"
        fillOpacity="0.65"
      />
    </svg>
  );
};

export const SVBBrand: React.FC<{
  onQuoteClick?: () => void;
  size?: 'normal' | 'large';
}> = ({ size = 'normal' }) => {
  return (
    <a href="#home" className="flex items-center gap-3.5 group text-left select-none">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <SVBLogoMark size={36} className="text-white drop-shadow-sm group-hover:scale-105 transition-transform" />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold tracking-tight text-white leading-tight ${size === 'large' ? 'text-lg md:text-xl' : 'text-[17px]'}`}>
          Sri Venkateswara Bricks
        </span>
        <span className="text-[12px] text-gray-300 font-normal tracking-normal leading-tight">
          Strong Bricks. Stronger Future.
        </span>
      </div>
    </a>
  );
};
