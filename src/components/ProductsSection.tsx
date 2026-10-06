import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/brickData';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onViewAllProducts: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onViewAllProducts,
}) => {
  return (
    <section id="products" className="py-20 lg:py-24 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Section Header & Introduction */}
          <div className="lg:col-span-4 xl:col-span-3 lg:pr-4">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                OUR PRODUCTS
              </span>
              <div className="w-8 h-[1.5px] bg-gray-400" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121316] tracking-tight leading-tight mb-4">
              Quality Bricks<br />
              for Every Need
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-7 max-w-md">
              We manufacture a wide range of bricks suitable for residential,
              commercial and industrial construction. Each brick is made with
              precision and care to ensure long-lasting strength and durability.
            </p>

            {/* Button */}
            <button
              onClick={onViewAllProducts}
              className="bg-[#18191c] hover:bg-[#2b2d33] text-white text-[14px] font-medium px-5 py-2.5 rounded-lg inline-flex items-center gap-2 shadow-sm transition-colors duration-200 cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          {/* Right Column: 4 Product Cards */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.07)] transition-all duration-200 flex flex-col cursor-pointer"
                >
                  {/* Product Image */}
                  <div className="w-full aspect-[4/3] bg-[#f4f2ee] overflow-hidden p-3 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between text-left">
                    <div>
                      <h3 className="font-bold text-[#141518] text-base leading-snug group-hover:text-[#c84924] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 mb-4 font-normal">
                        {product.tagline}
                      </p>
                    </div>

                    <div className="pt-1">
                      <span className="text-[#c84924] font-semibold text-xs inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
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
