import React from 'react';
import PrimaryButton from './PrimaryButton';

const Navbar = ({ onGetStarted }) => {
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
    { label: 'Home', href: '#home', icon: '🏠' },
    { label: 'Features', href: '#features', icon: '⭐' },
    { label: 'Cars', href: '#inventory', icon: '🚗' },
    { label: 'Financing', href: '#financing', icon: '💳' },
    { label: 'About', href: '#about', icon: 'ℹ️' }
  ];

  return (
    <>
      
      <nav className={`hidden md:block w-full bg-gray-900/80 backdrop-blur-md border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-white/10 shadow-2xl' 
          : 'bg-gray-900/80 backdrop-blur-md border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-sm">AE</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AutoElite
              </span>
            </div>

            
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-white/5 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/5 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            
            <div>
              <PrimaryButton 
                label="Get Started" 
                onClick={onGetStarted}
                size="medium"
                className="hover:shadow-cyan-500/25"
              />
            </div>
          </div>
        </div>
      </nav>

      
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-white/10 z-50 py-2 px-4">
        <div className="flex justify-between items-center">
          
          {navItems.slice(0, 3).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 flex-1 py-1"
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          ))}
          
          
          <button 
            className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 flex-1 py-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-lg mb-1">⋯</span>
            <span className="text-xs font-medium">More</span>
          </button>

         
          <button 
            className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex-1 py-1"
            onClick={onGetStarted}
          >
            <span className="text-lg mb-1">🚀</span>
            <span className="text-xs font-medium">Get Started</span>
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div className="md:hidden fixed bottom-16 left-4 right-4 bg-gray-800/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl z-40 p-4">
          <div className="grid grid-cols-2 gap-3">
            {navItems.slice(3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/5 p-3 rounded-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
            <div className="flex items-center gap-3 text-gray-500 p-3 rounded-xl">
              <span className="text-lg">👤</span>
              <span className="font-medium">Profile</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 p-3 rounded-xl">
              <span className="text-lg">⚙️</span>
              <span className="font-medium">Settings</span>
            </div>
          </div>
        </div>
      )}

      
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      
      <div className="md:hidden pb-16"></div>
    </>
  );
};

export default Navbar;