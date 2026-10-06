import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/brickData';

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
  onViewAllGallery: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectImage,
  onViewAllGallery,
}) => {
  return (
    <section id="gallery" className="py-20 lg:py-24 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 xl:col-span-3 text-left lg:pr-4">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                OUR GALLERY
              </span>
              <div className="w-8 h-[1.5px] bg-gray-400" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight leading-tight mb-4">
              Our Work<br />
              Speaks Quality
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-7 max-w-sm">
              Take a look at some of our recent projects and see the difference
              our bricks make.
            </p>

            {/* Button */}
            <button
              onClick={onViewAllGallery}
              className="bg-[#c84924] hover:bg-[#b53f1c] text-white text-[15px] font-medium px-6 py-2.5 rounded-lg inline-flex items-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Right Column: 4 Image Grid */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectImage(item)}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#eae8e4] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  {/* Subtle dark gradient on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-white text-xs font-medium truncate drop-shadow-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
