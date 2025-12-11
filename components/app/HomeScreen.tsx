import { User, MapPin, Calendar, Smartphone } from "lucide-react";
import { useLanguage } from "../../src/contexts/LanguageContext";

interface HomeScreenProps {
  onTap: () => void;
  showModal: (type: any, config: any) => void;
}

export function HomeScreen({ onTap, showModal }: HomeScreenProps) {
  const { t } = useLanguage();

  const handleQuickAction = (action: string) => {
    if (action === "fuel") {
      showModal("info", {
        title: t("fuelSubsidy"),
        message: t("fuelSubsidyDesc"),
        onConfirm: () => {},
      });
    } else if (action === "banking") {
      showModal("pin", {
        title: t("bankingServices"),
        description: t("bankingServicesDesc"),
        onSuccess: () => {
          showModal("success", {
            title: "Access Granted",
            message:
              "You can now use MyID+ for instant bank account verification and digital signatures.",
            onConfirm: () => {},
          });
        },
      });
    } else if (action === "emergency") {
      showModal("emergency", {
        title: t("emergencyMode"),
        message: t("emergencyModeDesc"),
        onConfirm: () => {},
      });
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#ff0094] to-[#38b6ff] rounded-full mb-3">
          <span className="text-3xl">🪪</span>
        </div>
        <h1 className="text-2xl mb-1">{t("appTitle")}</h1>
        <p className="text-gray-500 text-sm">{t("appSubtitle")}</p>
      </div>

      {/* Digital ID Card */}
      <div className="bg-gradient-to-br from-[#ff0094] to-[#38b6ff] rounded-2xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-white/80 text-sm mb-1">Full Name</p>
            <p className="text-xl">Ahmad bin Abdullah</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <User className="w-8 h-8" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-white/80 text-sm mb-1">MyKad Number</p>
            <p>901234-56-7890</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Age</p>
            <p>34 years</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/90">
          <MapPin className="w-4 h-4" />
          <span>Kuala Lumpur, Malaysia</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
          <div className="text-2xl mb-2">💳</div>
          <p className="text-sm text-gray-600 mb-1">Subsidy Balance</p>
          <p className="text-xl text-[#38b6ff]">RM 84.50</p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4">
          <div className="text-2xl mb-2">🏥</div>
          <p className="text-sm text-gray-600 mb-1">Health Status</p>
          <p className="text-xl text-[#ff0094]">Active</p>
        </div>
      </div>

      {/* Tap to Verify Button */}
      <button
        onClick={onTap}
        className="w-full bg-gradient-to-r from-[#ff0094] to-[#38b6ff] text-white py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
      >
        <Smartphone className="w-6 h-6 animate-pulse" />
        <span className="text-lg">{t("tapToVerify")}</span>
      </button>

      {/* Quick Actions */}
      <div className="space-y-2">
        <p className="text-sm text-gray-500">{t("quickActions")}</p>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleQuickAction("fuel")}
            className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-gray-100 transition-colors active:scale-95"
          >
            <div className="text-2xl">⛽</div>
            <span className="text-xs text-gray-700">{t("fuelSubsidy")}</span>
          </button>
          <button
            onClick={() => handleQuickAction("banking")}
            className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-gray-100 transition-colors active:scale-95"
          >
            <div className="text-2xl">🏦</div>
            <span className="text-xs text-gray-700">
              {t("bankingServices")}
            </span>
          </button>
          <button
            onClick={() => handleQuickAction("emergency")}
            className="bg-gray-50 rounded-xl p-3 flex flex-col items-center gap-2 hover:bg-gray-100 transition-colors active:scale-95"
          >
            <div className="text-2xl">🚨</div>
            <span className="text-xs text-gray-700">{t("emergencyMode")}</span>
          </button>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex gap-3 text-xs">
        <div className="flex items-center gap-1 text-green-600">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          <span>NFC Ready</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span>Offline Mode</span>
        </div>
        <div className="flex items-center gap-1 text-purple-600">
          <Calendar className="w-3 h-3" />
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
}
