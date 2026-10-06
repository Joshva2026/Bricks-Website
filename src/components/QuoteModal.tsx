import React, { useState } from 'react';
import { X, CheckCircle, Calculator, PhoneCall } from 'lucide-react';
import { PRODUCTS } from '../data/brickData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProductId = 'red-clay-bricks',
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProductId);
  const [quantity, setQuantity] = useState<number>(10000);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Madurai');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];

  // Price estimate calculation
  const getUnitPrice = (id: string) => {
    switch (id) {
      case 'red-clay-bricks':
        return 8.5;
      case 'fly-ash-bricks':
        return 6.2;
      case 'hollow-bricks':
        return 14.0;
      case 'special-bricks':
        return 18.5;
      default:
        return 8.5;
    }
  };

  const unitRate = getUnitPrice(selectedProduct);
  const estimatedSubtotal = Math.round(quantity * unitRate);
  const estimatedTransit = Math.round(quantity * 0.85);
  const estimatedTotal = estimatedSubtotal + estimatedTransit;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-left border border-gray-100">
        {/* Header */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#c84924]/10 text-[#c84924] flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Request Brick Quotation</h3>
              <p className="text-xs text-gray-500">Instant estimate with site delivery options</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h4>
            <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-gray-900">{name || 'Sir/Madam'}</span>.
              Our sales dispatch manager for <span className="font-semibold text-gray-900">{location}</span> will contact you at{' '}
              <span className="font-semibold text-gray-900">{phone || '+91-XXXXXXXXXX'}</span> within 30 minutes with our final dispatched pricing.
            </p>

            <div className="bg-gray-50 rounded-xl p-4 text-left border border-gray-200 mb-6 text-xs text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Selected Brick:</span>
                <span className="font-semibold">{currentProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Order Quantity:</span>
                <span className="font-semibold">{quantity.toLocaleString()} units</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Total (incl. transit):</span>
                <span className="font-bold text-[#c84924]">₹{estimatedTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="bg-[#1a1b1e] hover:bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-lg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Brick Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                Select Brick Category
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {PRODUCTS.map((p) => {
                  const isSelected = selectedProduct === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedProduct(p.id)}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#c84924] bg-[#c84924]/5 ring-1 ring-[#c84924]'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 object-cover rounded-md flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-gray-900 truncate">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-gray-500">{p.pricePerUnit}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Slider / Input */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Quantity Required
                </label>
                <span className="text-sm font-bold text-[#c84924]">
                  {quantity.toLocaleString()} units
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c84924]"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>2,000 (Min batch)</span>
                <span>15,000</span>
                <span>30,000</span>
                <span>50,000+ (Bulk load)</span>
              </div>
            </div>

            {/* Estimate Summary Box */}
            <div className="bg-[#faf8f6] border border-[#e8dfd8] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider block">
                  Approximate Yard Rate
                </span>
                <span className="text-xl font-extrabold text-[#1a1b1e]">
                  ₹{estimatedSubtotal.toLocaleString()}{' '}
                  <span className="text-xs font-normal text-gray-500">(@ ₹{unitRate}/unit)</span>
                </span>
              </div>
              <div className="text-right sm:border-l sm:border-gray-200 sm:pl-4">
                <span className="text-[11px] text-gray-500 block">Est. with Logistics</span>
                <span className="text-sm font-bold text-[#c84924]">
                  ~ ₹{estimatedTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Customer Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Joshva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c84924]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 95975 86099"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c84924]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Delivery District</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c84924] bg-white"
                >
                  <option value="Madurai">Madurai</option>
                  <option value="Dindigul">Dindigul</option>
                  <option value="Virudhunagar">Virudhunagar</option>
                  <option value="Theni">Theni</option>
                  <option value="Sivaganga">Sivaganga</option>
                  <option value="Tiruchirappalli">Tiruchirappalli (Trichy)</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Site Delivery Remarks</label>
                <input
                  type="text"
                  placeholder="e.g. Tipper truck access available"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c84924]"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#c84924] hover:bg-[#b23e1c] text-white font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Submit Quote & Receive Final Pricing</span>
              </button>
              <p className="text-[11px] text-gray-400 text-center mt-2">
                No advance obligations. Direct factory price guarantee from Sri Venkateswara Bricks.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
