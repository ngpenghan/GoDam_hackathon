import { useState } from 'react';
import { X, Lock } from 'lucide-react';

interface PINModalProps {
  title: string;
  description: string;
  onSubmit: (pin: string) => void;
  onClose: () => void;
}

export function PINModal({ title, description, onSubmit, onClose }: PINModalProps) {
  const [pin, setPin] = useState('');

  const handleNumberClick = (num: string) => {
    if (pin.length < 6) {
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 6) {
        setTimeout(() => {
          onSubmit(newPin);
        }, 200);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#ff0094] to-[#38b6ff] text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl">{title}</h3>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-white/90 text-sm">{description}</p>
        </div>

        {/* PIN Display */}
        <div className="p-6">
          <div className="flex justify-center gap-3 mb-8">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                  pin.length > index
                    ? 'bg-gradient-to-br from-[#ff0094] to-[#38b6ff] border-[#ff0094]'
                    : 'border-gray-300'
                }`}
              >
                {pin.length > index && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="h-16 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors flex items-center justify-center text-xl font-medium"
              >
                {num}
              </button>
            ))}
            <div></div>
            <button
              onClick={() => handleNumberClick('0')}
              className="h-16 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors flex items-center justify-center text-xl font-medium"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              className="h-16 rounded-xl bg-red-100 hover:bg-red-200 active:bg-red-300 transition-colors flex items-center justify-center text-red-600"
            >
              ←
            </button>
          </div>

          <p className="text-center text-gray-500 text-xs mt-4">
            Enter your 6-digit PIN
          </p>
        </div>
      </div>
    </div>
  );
}

export default PINModal;
