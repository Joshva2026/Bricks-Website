import React from 'react';
import { X, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { ProductItem } from '../data/brickData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left border border-gray-100">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
          <div>
            <h3 className="font-bold text-gray-900 text-lg sm:text-xl">{product.name}</h3>
            <p className="text-xs text-gray-500">{product.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Main Photo & Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#c84924] text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>BIS & PWD Quality Certified</span>
              </div>
              <div className="text-2xl font-extrabold text-gray-900">
                {product.pricePerUnit}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote(product.id);
                  }}
                  className="bg-[#c84924] hover:bg-[#b23e1c] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Request Instant Quote for this Brick</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Technical Specifications & Lab Test Data
            </h4>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-2.5 font-medium text-gray-600 w-1/3">
                      Compressive Strength
                    </td>
                    <td className="px-4 py-2.5 text-gray-900 font-semibold">
                      {product.compressiveStrength}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-600">Standard Dimensions</td>
                    <td className="px-4 py-2.5 text-gray-900 font-semibold">
                      {product.dimensions}
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-2.5 font-medium text-gray-600">Unit Dry Weight</td>
                    <td className="px-4 py-2.5 text-gray-900 font-semibold">{product.weight}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-gray-600">Water Absorption</td>
                    <td className="px-4 py-2.5 text-gray-900 font-semibold">
                      {product.waterAbsorption}
                    </td>
                  </tr>
                  <tr className="bg-gray-50/50">
                    <td className="px-4 py-2.5 font-medium text-gray-600">Recommended For</td>
                    <td className="px-4 py-2.5 text-gray-900">{product.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Advantages Checklist */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Why Choose SVB Standard
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero transit breakage guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Uniform size reduces plaster mortar by 25%</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Lab tested for efflorescence & salt resistance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Direct dispatch from Madurai factory yard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
