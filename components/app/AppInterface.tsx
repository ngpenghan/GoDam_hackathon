import { useState } from "react";
import { HomeScreen } from "./HomeScreen";
import { SubsidyScreen } from "./SubsidyScreen";
import { HealthScreen } from "./HealthScreen";
import { TransparencyScreen } from "./TransparencyScreen";
import { SettingsScreen } from "./SettingsScreen";
import { TapScreen } from "./TapScreen";
import { PINModal } from "./modals/PINModal";
import { ActionModal } from "./modals/ActionModal";
import { Home, CreditCard, Heart, Eye, Settings } from "lucide-react";

type Screen =
  | "home"
  | "subsidy"
  | "health"
  | "transparency"
  | "settings"
  | "tap";
type ModalType = "pin" | "emergency" | "success" | "confirm" | "info" | null;

export function AppInterface() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [showTap, setShowTap] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalConfig, setModalConfig] = useState<any>({});

  const handleTap = () => {
    setShowTap(true);
    setTimeout(() => setShowTap(false), 3000);
  };

  const showModal = (type: ModalType, config: any = {}) => {
    setModalType(type);
    setModalConfig(config);
  };

  const closeModal = () => {
    setModalType(null);
    setModalConfig({});
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {/* Phone Frame */}
      <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col relative">
          {/* Status Bar */}
          <div className="bg-gradient-to-r from-[#ff0094] to-[#38b6ff] text-white px-6 py-3 flex justify-between items-center">
            <span className="text-sm">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-4">📶</div>
              <div className="w-4 h-4">📡</div>
              <div className="w-4 h-4">🔋</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {showTap && <TapScreen />}
            {!showTap && currentScreen === "home" && (
              <HomeScreen onTap={handleTap} showModal={showModal} />
            )}
            {!showTap && currentScreen === "subsidy" && (
              <SubsidyScreen showModal={showModal} />
            )}
            {!showTap && currentScreen === "health" && (
              <HealthScreen showModal={showModal} />
            )}
            {!showTap && currentScreen === "transparency" && (
              <TransparencyScreen showModal={showModal} />
            )}
            {!showTap && currentScreen === "settings" && (
              <SettingsScreen showModal={showModal} />
            )}
          </div>

          {/* Modals */}
          {modalType === "pin" && (
            <PINModal
              title={modalConfig.title}
              description={modalConfig.description}
              onSubmit={(pin: string) => {
                modalConfig.onSuccess?.();
                closeModal();
              }}
              onClose={closeModal}
            />
          )}

          {modalType && modalType !== "pin" && (
            <ActionModal
              type={modalType}
              title={modalConfig.title}
              message={modalConfig.message}
              onConfirm={() => {
                modalConfig.onConfirm?.();
                closeModal();
              }}
              onClose={closeModal}
            />
          )}

          {/* Bottom Navigation */}
          <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center">
            <button
              onClick={() => setCurrentScreen("home")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentScreen === "home" ? "text-[#ff0094]" : "text-gray-400"
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
            <button
              onClick={() => setCurrentScreen("subsidy")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentScreen === "subsidy" ? "text-[#ff0094]" : "text-gray-400"
              }`}
            >
              <CreditCard className="w-6 h-6" />
              <span className="text-xs">Subsidy</span>
            </button>
            <button
              onClick={() => setCurrentScreen("health")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentScreen === "health" ? "text-[#ff0094]" : "text-gray-400"
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="text-xs">Health</span>
            </button>
            <button
              onClick={() => setCurrentScreen("transparency")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentScreen === "transparency"
                  ? "text-[#ff0094]"
                  : "text-gray-400"
              }`}
            >
              <Eye className="w-6 h-6" />
              <span className="text-xs">Activity</span>
            </button>
            <button
              onClick={() => setCurrentScreen("settings")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentScreen === "settings"
                  ? "text-[#ff0094]"
                  : "text-gray-400"
              }`}
            >
              <Settings className="w-6 h-6" />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
