import { Fuel, ShoppingBag, GraduationCap, ArrowRight, TrendingDown } from 'lucide-react';

export function SubsidyScreen({ showModal }: { showModal: (type: any, config: any) => void }) {
  const subsidies = [
    { icon: Fuel, name: 'Fuel Subsidy', balance: 'RM 45.50', color: 'from-orange-400 to-orange-600', usage: '68%' },
    { icon: ShoppingBag, name: 'Food Voucher', balance: 'RM 28.00', color: 'from-green-400 to-green-600', usage: '45%' },
    { icon: GraduationCap, name: 'Education Grant', balance: 'RM 11.00', color: 'from-blue-400 to-blue-600', usage: '22%' },
  ];

  const recentTransactions = [
    { date: '2025-12-08', merchant: 'PETRONAS Seri Kembangan', amount: '- RM 4.50', type: 'Fuel' },
    { date: '2025-12-07', merchant: 'MyDin Supermarket', amount: '- RM 12.00', type: 'Food' },
    { date: '2025-12-06', merchant: 'Shell Petaling Jaya', amount: '- RM 5.00', type: 'Fuel' },
    { date: '2025-12-05', merchant: 'Monthly Credit', amount: '+ RM 50.00', type: 'Refill' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl mb-1">Subsidy Tokens</h2>
        <p className="text-gray-500 text-sm">Offline-ready benefits</p>
      </div>

      {/* Total Balance */}
      <div className="bg-gradient-to-br from-[#ff0094] to-[#38b6ff] rounded-2xl p-6 text-white shadow-lg">
        <p className="text-white/80 text-sm mb-2">Total Available Balance</p>
        <p className="text-4xl mb-4">RM 84.50</p>
        <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-flex">
          <TrendingDown className="w-4 h-4" />
          <span>RM 21.50 spent this month</span>
        </div>
      </div>

      {/* Subsidy Categories */}
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Active Subsidies</p>
        {subsidies.map((subsidy, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${subsidy.color} rounded-xl flex items-center justify-center`}>
                  <subsidy.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">{subsidy.name}</p>
                  <p className="text-sm text-gray-500">{subsidy.usage} used</p>
                </div>
              </div>
              <p className="text-lg">{subsidy.balance}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`bg-gradient-to-r ${subsidy.color} h-2 rounded-full transition-all`} style={{ width: subsidy.usage }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Recent Transactions</p>
          <button 
            onClick={() => {
              showModal('info', {
                title: 'Transaction History',
                message: 'Your complete transaction history is stored offline on your MyID+ and syncs automatically when online. All 47 transactions are logged securely.',
                onConfirm: () => {}
              });
            }}
            className="text-sm text-[#38b6ff] flex items-center gap-1 hover:underline"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {recentTransactions.map((transaction, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
            <div>
              <p className="text-sm font-medium">{transaction.merchant}</p>
              <p className="text-xs text-gray-500">{transaction.date} · {transaction.type}</p>
            </div>
            <p className={`text-sm font-medium ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-gray-900'}`}>
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>

      {/* Offline Mode Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
        <div className="text-xl">📡</div>
        <div>
          <p className="text-sm font-medium text-blue-900 mb-1">Offline Mode Active</p>
          <p className="text-xs text-blue-700">Your subsidy tokens work without internet. Transactions will sync when online.</p>
        </div>
      </div>
    </div>
  );
}

export default SubsidyScreen;