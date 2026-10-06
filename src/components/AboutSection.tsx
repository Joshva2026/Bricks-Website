import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import { IMAGES } from '../data/brickData';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Column 1: Traditional Brick Kiln Image with Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src={IMAGES.kilnFactory}
                alt="Traditional Sri Venkateswara Bricks manufacturing kiln and chimney since 1995"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[380px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Inset Badge in bottom-left */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-[#141518]/95 backdrop-blur-md text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/10 shadow-xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-white leading-tight">
                    Since 1995
                  </div>
                  <div className="text-xs text-gray-300 font-normal leading-tight mt-0.5">
                    Trusted by Generations
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: About Story & Mission */}
          <div className="lg:col-span-4 text-left">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                ABOUT US
              </span>
              <div className="w-8 h-[1.5px] bg-gray-400" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight leading-tight mb-5">
              Crafting Quality Bricks<br />
              Since 1995
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8 font-normal">
              Sri Venkateswara Bricks is a trusted name in the brick manufacturing
              industry, delivering high-quality bricks for over 25 years. With a
              commitment to quality, sustainability and customer satisfaction, we
              have built a strong reputation in the construction sector.
            </p>

            {/* CTA Button */}
            <button
              onClick={onLearnMore}
              className="bg-[#c84924] hover:bg-[#b53f1c] text-white text-[15px] font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Column 3: 4 Key Metrics Stack */}
          <div className="lg:col-span-3 space-y-6 lg:pl-4">
            {/* Metric 1 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#c84924] flex-shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="16" cy="16" r="12" />
                  <polyline points="16 8 16 16 21 16" />
                  <circle cx="16" cy="4" r="1.5" />
                </svg>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121316] tracking-tight leading-none">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
                  Years of Experience
                </div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#c84924] flex-shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 14C18.7614 14 21 11.7614 21 9C21 6.23858 18.7614 4 16 4C13.2386 4 11 6.23858 11 9C11 11.7614 13.2386 14 16 14Z" />
                  <path d="M7 26C7 22.134 11.0294 19 16 19C20.9706 19 25 22.134 25 26" />
                  <path d="M26 9C27.6569 9 29 7.65685 29 6C29 4.34315 27.6569 3 26 3" />
                  <path d="M6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3" />
                </svg>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121316] tracking-tight leading-none">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#c84924] flex-shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Factory / bricks stack */}
                  <path d="M4 27H28" />
                  <path d="M6 27V12L13 17V12L20 17V7L26 12V27" />
                  <rect x="9" y="21" width="3" height="3" fill="currentColor" fillOpacity="0.2" />
                  <rect x="15" y="21" width="3" height="3" fill="currentColor" fillOpacity="0.2" />
                  <rect x="21" y="21" width="3" height="3" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121316] tracking-tight leading-none">
                  10M+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
                  Bricks Produced
                </div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#c84924] flex-shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4L6 8V15C6 21.6 10.3 27.8 16 29C21.7 27.8 26 21.6 26 15V8L16 4Z" />
                  <path d="M12 16L15 19L21 13" />
                </svg>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#121316] tracking-tight leading-none">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
                  Customer Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
