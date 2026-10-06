import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/brickData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreProducts }) => {
  return (
    <section id="home" className="relative min-h-[660px] md:min-h-[720px] lg:min-h-[780px] w-full flex items-center overflow-hidden">
      {/* Background photographic image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroStockyard}
          alt="Sri Venkateswara Bricks manufacturing stockyard at sunset with stacks of red clay bricks"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-right md:object-center select-none"
        />
        {/* Cinematic contrast scrim overlay matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl text-left">
          {/* Section Kicker */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-200 uppercase">
              PREMIUM QUALITY BRICKS
            </span>
            <div className="w-10 h-[1.5px] bg-gray-400/80" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            Building<br />
            Stronger<br />
            <span className="text-[#d85630]">Tomorrows</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl text-balance">
            We provide high-quality, durable and eco-friendly bricks for all your
            construction needs. Trusted by builders, contractors and homeowners
            across the region.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="bg-[#d2542e] hover:bg-[#bd4824] text-white text-[15px] font-medium px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button
              onClick={onOpenQuote}
              className="bg-black/35 hover:bg-black/55 text-white border border-white/40 hover:border-white text-[15px] font-medium px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-xs cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
