export function TapScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-[#ff0094] to-[#38b6ff] flex flex-col items-center justify-center p-6 text-white">
      {/* NFC Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
          <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-4xl">📡</span>
            </div>
          </div>
        </div>
        {/* Ripple effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-white/30 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Status Text */}
      <h2 className="text-3xl mb-4 text-center">Verifying...</h2>
      <p className="text-white/90 text-center mb-8">
        Tap detected • Processing request
      </p>

      {/* Verification Steps */}
      <div className="w-full max-w-sm space-y-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm">NFC Connection Established</span>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-sm">Reading MyID+ Data</span>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 animate-pulse">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 bg-white rounded-full animate-spin"></div>
          </div>
          <span className="text-sm">Verifying Identity...</span>
        </div>
      </div>

      {/* Success Message */}
      <div className="mt-8 bg-green-500/20 border-2 border-green-300 backdrop-blur-sm rounded-2xl p-6 w-full max-w-sm">
        <div className="text-center">
          <div className="text-5xl mb-3">✅</div>
          <p className="text-xl mb-2">Verified!</p>
          <p className="text-white/90 text-sm">
            Identity confirmed • Malaysian citizen
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <p className="text-white/70 text-xs mt-8 text-center">
        No PIN required for public verification
      </p>
    </div>
  );
}

export default TapScreen;
