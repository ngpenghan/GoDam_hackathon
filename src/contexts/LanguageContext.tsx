import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ms" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    appTitle: "MyID+",
    appSubtitle: "Malaysia Digital Identity",
    quickActions: "Quick Actions",
    fuelSubsidy: "Fuel Subsidy",
    bankingServices: "Banking Services",
    emergencyMode: "Emergency Mode",
    tapToVerify: "Tap to verify",
    settings: "Settings",
    changePin: "Change PIN",
    biometricSettings: "Biometric Settings",
    privacyControls: "Privacy Controls",
    pushNotifications: "Push Notifications",
    nfcSettings: "NFC Settings",
    helpSupport: "Help & Support",
    language: "Language",
    selectLanguage: "Select Language",
    home: "Home",
    subsidy: "Subsidy",
    health: "Health",
    transparency: "Transparency",
    activity: "Activity",
    tap: "Tap",
    // Add more as needed
    fuelSubsidyDesc: "Tap to redeem fuel subsidy",
    bankingServicesDesc: "Verify identity for banking",
    emergencyModeDesc: "Medical access without PIN",
  },
  ms: {
    appTitle: "MyID+",
    appSubtitle: "Identiti Digital Malaysia",
    quickActions: "Tindakan Pantas",
    fuelSubsidy: "Subsidi Bahan Api",
    bankingServices: "Perkhidmatan Perbankan",
    emergencyMode: "Mod Kecemasan",
    tapToVerify: "Sentuh untuk pengesahan",
    settings: "Tetapan",
    changePin: "Tukar PIN",
    biometricSettings: "Tetapan Biometrik",
    privacyControls: "Kawalan Privasi",
    pushNotifications: "Pemberitahuan",
    nfcSettings: "Tetapan NFC",
    helpSupport: "Bantuan & Sokongan",
    language: "Bahasa",
    selectLanguage: "Pilih Bahasa",
    home: "Utama",
    subsidy: "Subsidi",
    health: "Kesihatan",
    transparency: "Ketelusan",
    activity: "Aktiviti",
    tap: "Sentuh",
    fuelSubsidyDesc: "Sentuh untuk tebus subsidi",
    bankingServicesDesc: "Sahkan identiti untuk bank",
    emergencyModeDesc: "Akses perubatan tanpa PIN",
  },
  zh: {
    appTitle: "MyID+",
    appSubtitle: "马来西亚数字身份",
    quickActions: "快速操作",
    fuelSubsidy: "燃油补贴",
    bankingServices: "银行服务",
    emergencyMode: "紧急模式",
    tapToVerify: "点击验证",
    settings: "设置",
    changePin: "更改 PIN",
    biometricSettings: "生物识别设置",
    privacyControls: "隐私控制",
    pushNotifications: "推送通知",
    nfcSettings: "NFC 设置",
    helpSupport: "帮助与支持",
    language: "语言",
    selectLanguage: "选择语言",
    home: "主页",
    subsidy: "补贴",
    health: "健康",
    transparency: "透明度",
    activity: "活动",
    tap: "点击",
    fuelSubsidyDesc: "点击兑换燃油补贴",
    bankingServicesDesc: "银行身份验证",
    emergencyModeDesc: "无需 PIN 的医疗访问",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    const translation =
      translations[language][key as keyof (typeof translations)["en"]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
