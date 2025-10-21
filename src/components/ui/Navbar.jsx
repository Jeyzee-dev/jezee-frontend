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
    { label: 'Features', href: '#features' },
    { label: 'Inventory', href: '#inventory' },
    { label: 'Financing', href: '#financing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className={`w-full bg-gray-900/80 backdrop-blur-md border-b transition-all duration-300 sticky top-0 z-50 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg border-white/10 shadow-2xl' 
          : 'bg-gray-900/80 backdrop-blur-md border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-sm">AE</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AutoElite
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
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

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <PrimaryButton 
                label="Get Started" 
                onClick={onGetStarted}
                size="medium"
                className="hover:shadow-cyan-500/25"
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/5 hover:translate-x-2 flex items-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10">
                <PrimaryButton 
                  label="Get Started" 
                  onClick={() => {
                    onGetStarted();
                    setIsMenuOpen(false);
                  }}
                  size="small"
                  fullWidth
                  className="hover:shadow-cyan-500/25"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;