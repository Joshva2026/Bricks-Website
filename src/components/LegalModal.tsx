import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl text-left border border-gray-100 p-6">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
          <h3 className="font-bold text-gray-900 text-lg">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Sri Venkateswara Bricks, we respect the privacy of our website visitors and valued clients.
              </p>
              <h5 className="font-semibold text-gray-900 text-sm">Information We Collect</h5>
              <p>
                We only collect contact information (such as your name, phone number, and delivery district) when voluntarily submitted through our quotation request forms to calculate logistical delivery estimates.
              </p>
              <h5 className="font-semibold text-gray-900 text-sm">Use of Information</h5>
              <p>
                Your details are exclusively used by our sales dispatch desk to provide accurate freight quotes and order fulfillment. We never sell, lease, or distribute your phone numbers to third-party telemarketers.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Sri Venkateswara Bricks. By placing orders or requesting pricing through this website, you agree to the following terms:
              </p>
              <h5 className="font-semibold text-gray-900 text-sm">Product Specifications</h5>
              <p>
                All clay and cement bricks meet or exceed Bureau of Indian Standards (BIS) specifications for load-bearing and non-load-bearing masonry. Natural color variations may occur between kiln batches due to traditional clay firing methods.
              </p>
              <h5 className="font-semibold text-gray-900 text-sm">Transit & Offloading</h5>
              <p>
                Dispatches are scheduled via verified tipper trucks and flatbed carriers. Safe unloading clearance at the client site is required upon arrival.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 text-right">
          <button
            onClick={onClose}
            className="bg-[#121316] text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
