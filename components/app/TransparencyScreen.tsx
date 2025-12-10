import { Eye, MapPin, Clock, CheckCircle, Lock } from 'lucide-react';

export function TransparencyScreen({ showModal }: { showModal: (type: any, config: any) => void }) {
  const activities = [
    {
      service: 'PETRONAS Seri Kembangan',
      action: 'Subsidy Token Read',
      time: '2 hours ago',
      date: 'Dec 8, 2025 7:30 AM',
      location: 'Seri Kembangan, Selangor',
      dataAccessed: 'Fuel Subsidy Eligibility',
      securityLevel: 'Public',
      icon: '⛽',
      color: 'orange'
    },
    {
      service: 'Klinik Kesihatan Cheras',
      action: 'Health Data Access',
      time: '1 day ago',
      date: 'Dec 7, 2025 2:15 PM',
      location: 'Cheras, Kuala Lumpur',
      dataAccessed: 'Active Medications, Allergies',
      securityLevel: 'Sensitive (PIN)',
      icon: '🏥',
      color: 'blue'
    },
    {
      service: 'Maybank Ampang',
      action: 'Identity Verification',
      time: '3 days ago',
      date: 'Dec 5, 2025 10:20 AM',
      location: 'Ampang, Selangor',
      dataAccessed: 'Full Personal Data',
      securityLevel: 'Sensitive (PIN)',
      icon: '🏦',
      color: 'green'
    },
    {
      service: 'MyDin Supermarket',
      action: 'Age Verification',
      time: '5 days ago',
      date: 'Dec 3, 2025 6:45 PM',
      location: 'Subang Jaya, Selangor',
      dataAccessed: 'Age Confirmation Only',
      securityLevel: 'Public',
      icon: '🛒',
      color: 'purple'
    },
  ];

  const stats = [
    { label: 'Total Access Events', value: '47', icon: Eye },
    { label: 'This Month', value: '12', icon: Clock },
    { label: 'Protected Events', value: '8', icon: Lock },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-1">Transparency Ledger</h2>
        <p className="text-gray-500 text-sm">Track who accessed your data</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-3 text-center">
            <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#38b6ff]" />
            <p className="text-xl text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Trust Score */}
      <div className="bg-gradient-to-br from-[#ff0094] to-[#38b6ff] rounded-2xl p-5 text-white shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-white/80 text-sm mb-1">Privacy Trust Score</p>
            <p className="text-3xl">98%</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <CheckCircle className="w-8 h-8" />
          </div>
        </div>
        <p className="text-white/90 text-sm">All access events are logged and secure. You have full control over your data.</p>
      </div>

      {/* Activity Log */}
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Recent Access Events</p>
        {activities.map((activity, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="text-3xl">{activity.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium">{activity.service}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-3 h-3" />
                    <span>Data accessed: {activity.dataAccessed}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <span className={`inline-block text-xs px-3 py-1 rounded-full ${
                    activity.securityLevel === 'Public' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {activity.securityLevel === 'Public' ? '🔓' : '🔒'} {activity.securityLevel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data Control */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Lock className="w-5 h-5 text-[#38b6ff]" />
          <h3 className="font-medium text-gray-900">You&apos;re in Control</h3>
        </div>
        <p className="text-sm text-gray-700 mb-3">Every time someone accesses your MyID+ data, it&apos;s logged here. You can revoke access permissions anytime.</p>
        <button 
          onClick={() => {
            showModal('info', {
              title: 'Data Permissions',
              message: 'You have full control over your data. You can view all 47 access events, set permissions for different service types, and revoke access at any time. All changes take effect immediately.',
              onConfirm: () => {}
            });
          }}
          className="text-sm text-[#ff0094] font-medium hover:underline"
        >
          Manage Data Permissions →
        </button>
      </div>
    </div>
  );
}

export default TransparencyScreen;