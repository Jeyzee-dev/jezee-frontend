import React from 'react';
import PrimaryButton from './PrimaryButton';

const Navbar = ({ onGetStarted, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home', icon: '🏠' },
    { label: 'Services', view: 'services', icon: '📋' },
    { label: 'Appointments', view: 'appointments', icon: '📅' },
    { label: 'Documents', view: 'documents', icon: '📄' },
    { label: 'About', view: 'about', icon: 'ℹ️' }
  ];

  const handleNavClick = (view) => {
    if (onNavigate) {
      onNavigate(view);
    }
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden md:block w-full bg-white/80 backdrop-blur-md border-b transition-all duration-500 sticky top-0 z-50 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-gray-200/50 shadow-lg' 
          : 'bg-white/80 backdrop-blur-md border-gray-200/30'
      }`}>
        <div className="max-w-7xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300">
                <span className="text-white font-bold text-sm">NP</span>
              </div>
              <span className="text-xl font-bold text-gray-900 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                NotaryPro
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`transition-all duration-300 font-medium px-4 py-2 rounded-lg relative transform hover:scale-105 ${
                    currentView === item.view
                      ? 'text-blue-800 bg-blue-50/80 shadow-inner'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 transition-all duration-300 ${
                    currentView === item.view ? 'w-3/5' : 'w-0 group-hover:w-3/5'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <PrimaryButton 
                label="Book Appointment" 
                onClick={handleGetStarted}
                className="bg-blue-800 hover:bg-blue-900 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 z-50 py-3 px-4">
        <div className="flex justify-between items-center">
          
          {/* Main Navigation Items */}
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view)}
              className={`flex flex-col items-center transition-all duration-300 flex-1 py-1 transform hover:scale-110 ${
                currentView === item.view
                  ? 'text-blue-800'
                  : 'text-gray-600 hover:text-blue-800'
              }`}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
          
          {/* More Menu Button */}
          <button 
            className={`flex flex-col items-center transition-all duration-300 flex-1 py-1 transform hover:scale-110 ${
              isMenuOpen ? 'text-blue-800' : 'text-gray-600 hover:text-blue-800'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg mb-1">⋯</span>
            <span className="text-xs font-medium">More</span>
          </button>

          {/* Get Started Button */}
          <button 
            className="flex flex-col items-center text-blue-800 hover:text-blue-900 transition-all duration-300 flex-1 py-1 transform hover:scale-110"
            onClick={handleGetStarted}
          >
            <span className="text-lg mb-1">📅</span>
            <span className="text-xs font-medium">Book Now</span>
          </button>
        </div>
      </nav>

      {/* Mobile More Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed bottom-16 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-xl border border-gray-200/50 shadow-xl z-40 p-4 animate-fade-in-up">
          <div className="grid grid-cols-2 gap-3">
            {navItems.slice(3).map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  currentView === item.view
                    ? 'text-blue-800 bg-blue-50/80'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-gray-50/80'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <button className="flex items-center gap-3 text-gray-700 hover:text-blue-800 hover:bg-gray-50/80 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="text-lg">👤</span>
              <span className="font-medium">Client Portal</span>
            </button>
            <button className="flex items-center gap-3 text-gray-700 hover:text-blue-800 hover:bg-gray-50/80 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="text-lg">⚙️</span>
              <span className="font-medium">Settings</span>
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Spacer */}
      <div className="md:hidden pb-16"></div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;