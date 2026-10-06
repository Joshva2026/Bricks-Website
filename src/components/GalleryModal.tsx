import React from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../data/brickData';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  onClose,
  onRequestQuote,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
      <div className="bg-[#16171a] text-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10 text-left">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white text-base sm:text-lg">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.category} • Sri Venkateswara Bricks</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Large Image */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Footer info & CTA */}
        <div className="p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <p className="text-xs text-gray-400">
            Real photography from active project dispatches and client job sites across Madurai and Tamil Nadu.
          </p>
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="bg-[#c84924] hover:bg-[#b23e1c] text-white text-xs font-semibold px-4 py-2.5 rounded-lg whitespace-nowrap cursor-pointer"
          >
            Get Quote for This Quality
          </button>
        </div>
      </div>
    </div>
  );
};
