import React from 'react';
import { IMAGES } from '../data/brickData';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="why-us" className="w-full bg-[#1b1c1f] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[180px] lg:min-h-[220px]">
        {/* Left Side: 4 Features Columns */}
        <div className="lg:col-span-8 xl:col-span-8 px-6 sm:px-10 lg:px-14 py-12 flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-6 w-full">
            {/* Feature 1: High Strength */}
            <div className="flex flex-col text-left">
              <div className="w-10 h-10 mb-4 text-[#e07a3c] flex items-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Hexagon with strength lightning */}
                  <polygon points="18 3 31 10.5 31 25.5 18 33 5 25.5 5 10.5 18 3" />
                  <path d="M19 11L14 19H19L17 25L23 17H18L19 11Z" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base tracking-tight mb-1">
                High Strength
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[190px]">
                Built to last, even in harsh conditions.
              </p>
            </div>

            {/* Feature 2: Eco Friendly */}
            <div className="flex flex-col text-left">
              <div className="w-10 h-10 mb-4 text-[#e07a3c] flex items-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Two leaf sprout */}
                  <path d="M7 29C15 28 20 22 21 13C12 14 6 19 7 29Z" />
                  <path d="M21 13C23 7 29 6 30 6C30 11 27 18 21 19" />
                  <path d="M8 29C13 25 18 20 21 13" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base tracking-tight mb-1">
                Eco Friendly
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[190px]">
                Made with sustainable materials.
              </p>
            </div>

            {/* Feature 3: Cost Effective */}
            <div className="flex flex-col text-left">
              <div className="w-10 h-10 mb-4 text-[#e07a3c] flex items-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Stack of coins */}
                  <ellipse cx="18" cy="10" rx="11" ry="4" />
                  <path d="M7 10V16C7 18.2 11.9 20 18 20C24.1 20 29 18.2 29 16V10" />
                  <path d="M7 16V22C7 24.2 11.9 26 18 26C24.1 26 29 24.2 29 22V16" />
                  <path d="M7 22V26C7 28.2 11.9 30 18 30C24.1 30 29 28.2 29 26V22" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base tracking-tight mb-1">
                Cost Effective
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[190px]">
                Best value for your construction.
              </p>
            </div>

            {/* Feature 4: On-Time Delivery */}
            <div className="flex flex-col text-left">
              <div className="w-10 h-10 mb-4 text-[#e07a3c] flex items-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Delivery truck */}
                  <path d="M4 8H23V23H4V8Z" />
                  <path d="M23 13H28L32 17V23H23V13Z" />
                  <circle cx="10" cy="25" r="3" />
                  <circle cx="27" cy="25" r="3" />
                  <path d="M13 25H24" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-base tracking-tight mb-1">
                On-Time Delivery
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[190px]">
                We deliver as promised, always.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Photo of Mason laying bricks */}
        <div className="lg:col-span-4 xl:col-span-4 relative min-h-[220px] lg:min-h-full">
          <img
            src={IMAGES.masonLaying}
            alt="Skilled mason laying red clay bricks with mortar"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center select-none"
          />
          {/* Subtle blend on the left edge for seamless integration */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1b1c1f] to-transparent" />
        </div>
      </div>
    </section>
  );
};
