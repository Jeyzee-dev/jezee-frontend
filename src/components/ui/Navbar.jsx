import React from 'react';
import PrimaryButton from './PrimaryButton';

const Navbar = ({ onGetStarted, currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'Appointments', view: 'appointments' },
    { label: 'About', view: 'about' }
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
      <nav className="hidden md:block w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">NP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                LegalEase
              </span>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view)}
                  className={`font-medium px-4 py-2 rounded-lg transition-colors duration-200 ${
                    currentView === item.view
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <PrimaryButton 
                label="Book Appointment" 
                onClick={handleGetStarted}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex justify-between items-center py-3 px-4">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">NP</span>
            </div>
            <span className="text-lg font-bold text-gray-900">
              LegalEase
            </span>
          </div>

          {/* Menu Button */}
          <button 
            className="p-2 text-gray-600 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                  currentView === item.view
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3">
              <PrimaryButton 
                label="Book Appointment" 
                onClick={handleGetStarted}
                fullWidth
              />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;