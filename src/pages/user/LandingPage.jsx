import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Card from '../../components/ui/Card';
import PrimaryButton from '../../components/ui/PrimaryButton';

const LandingPage = ({ onExplore, onOrder }) => {
  const features = [
    {
      icon: "⚡",
      title: "Instant Delivery",
      description: "Get your dream car delivered to your doorstep within 48 hours with our express service."
    },
    {
      icon: "🛡️",
      title: "5-Year Warranty",
      description: "Comprehensive coverage with 24/7 roadside assistance and maintenance included."
    },
    {
      icon: "💳",
      title: "Flexible Financing",
      description: "0% APR available for qualified buyers with customizable payment plans."
    },
    {
      icon: "🚀",
      title: "Tech Ready",
      description: "All vehicles come with latest connectivity and smart features pre-installed."
    },
    {
      icon: "🌱",
      title: "Eco Friendly",
      description: "Hybrid and electric options available with carbon offset programs."
    },
    {
      icon: "⭐",
      title: "Elite Service",
      description: "Dedicated concierge service and priority maintenance scheduling."
    }
  ];

  const brands = [
    { name: "Tesla", logo: "⚡", count: "12 models" },
    { name: "BMW", logo: "🔷", count: "8 models" },
    { name: "Mercedes", logo: "⭐", count: "10 models" },
    { name: "Audi", logo: "🔶", count: "6 models" },
    { name: "Ford", logo: "🔵", count: "15 models" },
    { name: "Toyota", logo: "🔴", count: "9 models" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar onGetStarted={onExplore} />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6 sm:mb-8 hover:bg-white/15 transition-colors duration-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Trusted by 10K+ Customers</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Drive The
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1 sm:mt-2">
              Future
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Discover the next generation of automotive excellence. 
            <span className="text-cyan-400 font-semibold"> Electric</span>, 
            <span className="text-blue-400 font-semibold"> Autonomous</span>, and 
            <span className="text-purple-400 font-semibold"> Connected</span> vehicles await.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4">
            <PrimaryButton 
              label="Explore Vehicles" 
              onClick={onExplore}
              size="large"
              className="w-full sm:w-auto"
            />
            <PrimaryButton 
              label="Book Test Drive" 
              onClick={onOrder}
              type="outline"
              size="large"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
            {[
              { number: "50+", label: "Vehicle Models" },
              { number: "24h", label: "Delivery" },
              { number: "4.9★", label: "Rating" },
              { number: "10K+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors cursor-pointer">
              <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-10 sm:py-12 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Trusted by Leading Brands
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="text-center group p-3 sm:p-4 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <div className="text-white font-semibold text-sm sm:text-base">{brand.name}</div>
                <div className="text-xs sm:text-sm text-gray-400">{brand.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AutoElite</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Experience the future of automotive retail with our cutting-edge platform and premium services.
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 sm:mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={onExplore}
                className="hover:transform hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Revolutionize Your Drive?
          </h2>
          <p className="text-base sm:text-lg text-cyan-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Join the electric revolution and experience automotive innovation like never before. 
            Your future vehicle is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <PrimaryButton 
              label="Browse Inventory" 
              onClick={onExplore}
              type="secondary"
              size="large"
              className="w-full sm:w-auto"
            />
            <PrimaryButton 
              label="Get Quote" 
              onClick={onOrder}
              type="outline"
              size="large"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">AutoElite</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                Redefining automotive excellence with innovation and sustainability at our core.
              </p>
              <div className="flex space-x-2 sm:space-x-3">
                {['📘', '🐦', '📷', '💼'].map((icon, index) => (
                  <div key={index} className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105">
                    <span className="text-white text-sm sm:text-base">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Explore",
                items: ['Electric Vehicles', 'Hybrid Models', 'Luxury Cars', 'SUVs']
              },
              {
                title: "Support",
                items: ['Contact Us', 'FAQ', 'Financing', 'Delivery']
              },
              {
                title: "Contact",
                items: ['+1 (555) 123-ELITE', 'hello@autoelite.com', 'Silicon Valley, CA', '24/7 Support']
              }
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="text-lg font-semibold text-white mb-3 sm:mb-4">{column.title}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 AutoElite. Crafted with ❤️ for the future of mobility.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;