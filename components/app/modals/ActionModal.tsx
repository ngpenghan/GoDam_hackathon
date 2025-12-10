import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ActionModalProps {
  type: 'success' | 'emergency' | 'confirm' | 'info';
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}

export function ActionModal({ type, title, message, onConfirm, onClose }: ActionModalProps) {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-12 h-12 text-green-600" />;
      case 'emergency':
        return <AlertCircle className="w-12 h-12 text-red-600" />;
      case 'info':
        return <Info className="w-12 h-12 text-blue-600" />;
      default:
        return <AlertCircle className="w-12 h-12 text-orange-600" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'from-green-500 to-green-600';
      case 'emergency':
        return 'from-red-500 to-red-600';
      case 'info':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-orange-500 to-orange-600';
    }
  };

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${getColor()} text-white p-6 rounded-t-3xl relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center text-center pt-4">
            {getIcon()}
            <h3 className="text-xl mt-4">{title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 text-center mb-6">{message}</p>

          <div className="flex gap-3">
            {type === 'confirm' ? (
              <>
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#ff0094] to-[#38b6ff] text-white hover:opacity-90 transition-opacity"
                >
                  Confirm
                </button>
              </>
            ) : (
              <button
                onClick={onConfirm}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff0094] to-[#38b6ff] text-white hover:opacity-90 transition-opacity"
              >
                OK
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionModal;
