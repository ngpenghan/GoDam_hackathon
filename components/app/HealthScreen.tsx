import { Droplet, AlertCircle, Pill, Phone, FileText } from 'lucide-react';

export function HealthScreen({ showModal }: { showModal: (type: any, config: any) => void }) {
  const medications = [
    { name: 'Metformin 500mg', dosage: '2x daily', prescribedBy: 'Dr. Siti Rahman', active: true },
    { name: 'Atorvastatin 20mg', dosage: '1x daily', prescribedBy: 'Dr. Siti Rahman', active: true },
  ];

  const handleEmergencyInfo = () => {
    showModal('emergency', {
      title: 'Emergency Access',
      message: 'In emergencies, paramedics can tap your MyID+ to instantly see your blood type, allergies, chronic conditions, and emergency contact - all without requiring a PIN.',
      onConfirm: () => {}
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-1">MediKad</h2>
        <p className="text-gray-500 text-sm">Your portable health ledger</p>
      </div>

      {/* Emergency Access Banner */}
      <button 
        onClick={handleEmergencyInfo}
        className="w-full bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:opacity-95 transition-opacity"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="font-semibold">Emergency Access</p>
            <p className="text-white/80 text-sm">No PIN required for paramedics</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-sm text-left">
          <p className="text-white/90">In case of emergency, tap your MyID+ to share critical health info instantly.</p>
        </div>
      </button>

      {/* Critical Health Info */}
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Critical Information</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Droplet className="w-5 h-5 text-red-600" />
              <p className="text-sm text-gray-600">Blood Type</p>
            </div>
            <p className="text-2xl text-red-600">O+</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <p className="text-sm text-gray-600">Allergies</p>
            </div>
            <p className="text-sm text-orange-800 mt-2">Penicillin</p>
          </div>
        </div>
      </div>

      {/* Chronic Conditions */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium">Chronic Conditions</h3>
          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">2 Active</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Type 2 Diabetes</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Mild Hypertension</span>
          </div>
        </div>
      </div>

      {/* Active Medications */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Pill className="w-5 h-5 text-[#38b6ff]" />
          <p className="text-sm text-gray-600">Active Medications</p>
        </div>
        {medications.map((med, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-medium text-blue-900">{med.name}</p>
                <p className="text-sm text-blue-700">{med.dosage}</p>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
            </div>
            <p className="text-xs text-blue-600">Prescribed by {med.prescribedBy}</p>
          </div>
        ))}
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Phone className="w-5 h-5 text-purple-600" />
          <h3 className="font-medium text-purple-900">Emergency Contact</h3>
        </div>
        <div className="space-y-1 text-sm">
          <p className="text-purple-900">Fatimah binti Abdullah (Wife)</p>
          <p className="text-purple-700">+60 12-345 6789</p>
        </div>
      </div>

      {/* Polypharmacy Prevention Notice */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
        <div className="text-xl">✅</div>
        <div>
          <p className="text-sm font-medium text-green-900 mb-1">Drug Interaction Protection</p>
          <p className="text-xs text-green-700">Pharmacists can check your medication history to prevent harmful drug interactions.</p>
        </div>
      </div>
    </div>
  );
}

export default HealthScreen;