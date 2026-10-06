import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, IMAGES } from '../data/brickData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 lg:py-24 w-full overflow-hidden">
      {/* Brick Wall Background Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.brickWallBackdrop}
          alt="Warm red brick wall texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none"
        />
        {/* Dark warm overlay scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#18120e]/85 to-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Title Area */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
                WHAT CLIENTS SAY
              </span>
              <div className="w-8 h-[1.5px] bg-gray-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Trusted by Builders<br />
              and Homeowners
            </h2>
          </div>

          {/* Center: Testimonial Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#1c1613]/90 backdrop-blur-sm border border-[#4a3a30] rounded-2xl p-6 sm:p-8 shadow-2xl text-left relative transition-all duration-300">
              {/* Quote mark icon */}
              <div className="text-[#d85630] font-serif text-5xl leading-none -mb-3 select-none">
                “
              </div>

              {/* Quote text */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                "{current.quote}"
              </p>

              {/* Author profile */}
              <div className="flex items-center gap-3.5 pt-2 border-t border-white/10">
                <img
                  src={current.avatar}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-amber-600/30 flex-shrink-0"
                />
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">
                    {current.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-normal">
                    {current.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Prev & Next Carousel Buttons */}
          <div className="lg:col-span-2 flex items-center justify-start lg:justify-end gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/40 hover:border-white text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
