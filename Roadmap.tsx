import { Cpu, Heart, CreditCard, MapPin, FileSignature } from 'lucide-react';

export function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      icon: Cpu,
      title: 'NFC Smart ID Upgrade',
      items: [
        'Upgrade MyKad chip to store encrypted tokens & health data',
        'Implement PIN + optional biometric authentication'
      ],
      color: 'from-[#ff0094] to-pink-600'
    },
    {
      phase: 'Phase 2',
      icon: Heart,
      title: 'MediKad Health Integration',
      items: [
        'Embed critical health info into card EEPROM (80–160KB)',
        'Develop offline-capable paramedic & pharmacy apps'
      ],
      color: 'from-[#38b6ff] to-blue-600'
    },
    {
      phase: 'Phase 3',
      icon: CreditCard,
      title: 'Subsidy & Token System',
      items: [
        'Government backend pushes encrypted subsidy credits to MyID+',
        'Offline spending via NFC; audit logs sync later'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      phase: 'Phase 4',
      icon: MapPin,
      title: 'Kiosk & Rural Deployment',
      items: [
        'Portable solar-powered NFC kiosks for low-connectivity regions'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      phase: 'Phase 5',
      icon: FileSignature,
      title: 'Digital Signature & Legal Functions',
      items: [
        'Secure offline signing via card',
        'Government and legal portal integration'
      ],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#38b6ff] uppercase tracking-wider">Implementation</span>
          <h2 className="text-5xl mt-4 mb-6">Technical Roadmap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A phased approach to rolling out MyID+ across Malaysia
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff0094] via-[#38b6ff] to-[#ff0094] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{phase.phase}</div>
                      <h3 className="text-xl">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <span className="text-[#38b6ff] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline dot */}
                <div className={`hidden md:block w-8 h-8 bg-gradient-to-br ${phase.color} rounded-full border-4 border-white shadow-lg z-10`}></div>

                {/* Spacer */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Viability */}
        <div className="mt-16 bg-gradient-to-r from-[#ff0094]/10 to-[#38b6ff]/10 rounded-2xl p-8 border-2 border-[#38b6ff]/20">
          <h3 className="text-2xl mb-6 text-center">Technical Viability ✅</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💳</div>
              <p className="text-gray-700">NFC-enabled MyKad exists; EEPROM storage supports encrypted data blocks</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <p className="text-gray-700">PIN & encryption standards are well-established and proven</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-gray-700">Offline-first apps & kiosks feasible with current Malaysian infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
