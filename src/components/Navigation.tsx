import { useState } from 'react';
import { AppInterface } from '../../components/app/AppInterface';
import { RegistrationForm } from './RegistrationForm';
import { DatabaseTest } from './DatabaseTest';
import { Home, UserPlus, Database, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState<'app' | 'register' | 'database'>('app');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'app', label: 'MyID+ App', icon: Home },
    { id: 'register', label: 'Register User', icon: UserPlus },
    { id: 'database', label: 'View Database', icon: Database },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'app':
        return <AppInterface />;
      case 'register':
        return <RegistrationForm />;
      case 'database':
        return <DatabaseTest />;
      default:
        return <AppInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-white font-bold text-xl">MyID+</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as 'app' | 'register' | 'database');
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-white text-blue-600 font-semibold'
                        : 'text-white hover:bg-blue-500'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as 'app' | 'register' | 'database');
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors text-left ${
                      currentPage === item.id
                        ? 'bg-white text-blue-600 font-semibold'
                        : 'text-white hover:bg-blue-500'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="py-8 px-4">
        {renderPage()}
      </main>
    </div>
  );
}
