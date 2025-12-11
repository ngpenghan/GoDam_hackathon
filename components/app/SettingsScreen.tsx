import {
  Lock,
  Bell,
  Shield,
  Smartphone,
  HelpCircle,
  LogOut,
  ChevronRight,
  Fingerprint,
  Globe,
} from "lucide-react";
import { useLanguage } from "../../src/contexts/LanguageContext";

export function SettingsScreen({
  showModal,
}: {
  showModal: (type: any, config?: any) => void;
}) {
  const { t, setLanguage, language } = useLanguage();

  const handleSettingClick = (setting: string) => {
    switch (setting) {
      case "language":
        showModal("info", {
          title: t("selectLanguage"),
          message: (
            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  setLanguage("en");
                  showModal(null);
                }}
                className={`p-3 rounded-lg border ${
                  language === "en"
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "border-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage("ms");
                  showModal(null);
                }}
                className={`p-3 rounded-lg border ${
                  language === "ms"
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "border-gray-200"
                }`}
              >
                Bahasa Melayu
              </button>
              <button
                onClick={() => {
                  setLanguage("zh");
                  showModal(null);
                }}
                className={`p-3 rounded-lg border ${
                  language === "zh"
                    ? "bg-blue-50 border-blue-200 text-blue-700"
                    : "border-gray-200"
                }`}
              >
                中文
              </button>
            </div>
          ),
          onConfirm: () => {},
        });
        break;
      case "pin":
        showModal("pin", {
          title: "Change PIN",
          description: "Enter your current PIN to continue",
          onSuccess: () => {
            showModal("success", {
              title: "PIN Changed",
              message:
                "Your MyID+ PIN has been successfully updated. Use your new PIN for all future transactions.",
              onConfirm: () => {},
            });
          },
        });
        break;
      case "biometric":
        showModal("info", {
          title: "Biometric Settings",
          message:
            "Enable fingerprint or Face ID for high-security actions. This provides two-factor authentication for sensitive operations like digital signatures and updating card information.",
          onConfirm: () => {},
        });
        break;
      case "privacy":
        showModal("info", {
          title: "Privacy Controls",
          message:
            "Manage which services can access your data. Set default permission levels and review all access requests. Your privacy settings sync across all devices.",
          onConfirm: () => {},
        });
        break;
      case "notifications":
        showModal("info", {
          title: "Push Notifications",
          message:
            "Get instant alerts when your MyID+ is used, when subsidies are added, or when critical health alerts are updated. Customize notification preferences for different event types.",
          onConfirm: () => {},
        });
        break;
      case "nfc":
        showModal("info", {
          title: "NFC Settings",
          message:
            "Your NFC is currently active and ready. You can customize tap-to-verify preferences, set offline mode options, and manage which data is accessible in different scenarios.",
          onConfirm: () => {},
        });
        break;
      case "help":
        showModal("info", {
          title: "Help & Support",
          message:
            "Access FAQs, tutorials, and customer support. Visit your nearest JPN office for in-person assistance or call our 24/7 helpline at 1-800-MYID-PLUS.",
          onConfirm: () => {},
        });
        break;
      case "lock":
        showModal("confirm", {
          title: "Lock MyID+",
          message:
            "Are you sure you want to lock your MyID+? You will need to re-authenticate to access your digital identity.",
          onConfirm: () => {
            showModal("success", {
              title: "MyID+ Locked",
              message:
                "Your MyID+ has been locked. Physical card functions remain active for emergency use.",
              onConfirm: () => {},
            });
          },
        });
        break;
      case "report":
        showModal("emergency", {
          title: "Report Lost Card",
          message:
            "Your card will be immediately disabled to prevent unauthorized access. Visit JPN with proper identification to request a replacement. Emergency health data will remain accessible to paramedics.",
          onConfirm: () => {
            showModal("success", {
              title: "Card Reported",
              message:
                "Your MyID+ has been disabled. A replacement request has been submitted. You will receive an SMS with further instructions.",
              onConfirm: () => {},
            });
          },
        });
        break;
      case "privacy-policy":
        showModal("info", {
          title: "Privacy Policy",
          message:
            "MyID+ is designed with privacy-first principles. All data is encrypted end-to-end. We never share your personal information without explicit consent. You maintain full ownership of your data.",
          onConfirm: () => {},
        });
        break;
      case "terms":
        showModal("info", {
          title: "Terms of Service",
          message:
            "By using MyID+, you agree to Malaysia's Digital Identity Act 2025. Your rights include data portability, right to deletion, and transparent access logging. Review full terms at myidplus.gov.my",
          onConfirm: () => {},
        });
        break;
    }
  };

  const settingsGroups = [
    {
      title: t("settings"),
      items: [
        {
          icon: Globe,
          label: t("language"),
          action:
            language === "en"
              ? "English"
              : language === "ms"
              ? "Bahasa Melayu"
              : "中文",
          key: "language",
        },
      ],
    },
    {
      title: "Security",
      items: [
        {
          icon: Lock,
          label: t("changePin"),
          action: "Manage your 6-digit PIN",
          key: "pin",
        },
        {
          icon: Fingerprint,
          label: t("biometricSettings"),
          action: "Fingerprint & Face ID",
          key: "biometric",
        },
        {
          icon: Shield,
          label: t("privacyControls"),
          action: "Manage data permissions",
          key: "privacy",
        },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          icon: Bell,
          label: t("pushNotifications"),
          action: "Access alerts & updates",
          key: "notifications",
        },
        {
          icon: Smartphone,
          label: t("nfcSettings"),
          action: "Tap-to-verify preferences",
          key: "nfc",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          label: t("helpSupport"),
          action: "Get support",
          key: "help",
        },
      ],
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-1">Settings</h2>
        <p className="text-gray-500 text-sm">Manage your MyID+ preferences</p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-[#ff0094] to-[#38b6ff] rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <p className="text-xl mb-1">Ahmad bin Abdullah</p>
            <p className="text-white/80 text-sm">901234-56-7890</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-flex">
          <CheckCircle className="w-4 h-4" />
          <span>Verified Citizen</span>
        </div>
      </div>

      {/* Security Status */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600">Card Status</p>
          </div>
          <p className="text-lg text-green-700">Active</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Security</p>
          </div>
          <p className="text-lg text-blue-700">PIN Set</p>
        </div>
      </div>

      {/* Settings Groups */}
      {settingsGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="space-y-2">
          <p className="text-sm text-gray-500 px-2">{group.title}</p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            {group.items.map((item, itemIndex) => (
              <button
                key={itemIndex}
                onClick={() => handleSettingClick(item.key)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#ff0094]/10 to-[#38b6ff]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#38b6ff]" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{item.label}</p>
                    <p className="text-xs text-gray-500">{item.action}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* App Info */}
      <div className="bg-gray-50 rounded-xl p-4 text-center space-y-2">
        <p className="text-sm text-gray-600">MyID+ Version 1.0.0</p>
        <p className="text-xs text-gray-500">
          Malaysia Digital Identity System
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <button
            onClick={() => handleSettingClick("privacy-policy")}
            className="text-xs text-[#38b6ff] hover:underline"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleSettingClick("terms")}
            className="text-xs text-[#38b6ff] hover:underline"
          >
            Terms of Service
          </button>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={() => handleSettingClick("lock")}
        className="w-full bg-red-50 border border-red-200 text-red-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-100 active:bg-red-200 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span>Lock MyID+</span>
      </button>

      {/* Emergency Lock */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-xl">⚠️</div>
          <div>
            <p className="text-sm font-medium text-orange-900 mb-1">
              Lost Your Card?
            </p>
            <p className="text-xs text-orange-700 mb-3">
              Report immediately to prevent unauthorized access.
            </p>
            <button
              onClick={() => handleSettingClick("report")}
              className="text-sm text-orange-600 font-medium hover:underline"
            >
              Report Lost Card →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsScreen;

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
