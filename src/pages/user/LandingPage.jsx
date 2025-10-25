import React from 'react';
import Navbar from '../../components/ui/Navbar';
import Card from '../../components/ui/Card';
import PrimaryButton from '../../components/ui/PrimaryButton';

const LandingPage = ({ onExplore, onOrder }) => {
  const features = [
    {
      icon: "📅",
      title: "Online Scheduling",
      description: "Clients can book appointments 24/7 with our easy-to-use online scheduling system."
    },
    {
      icon: "📄",
      title: "Document Management",
      description: "Secure digital storage and organization for all notarized documents and client records."
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description: "Bank-level security and full compliance with state notary laws and regulations."
    },
    {
      icon: "⚡",
      title: "Efficient Workflow",
      description: "Streamlined processes that reduce administrative work and increase productivity."
    },
    {
      icon: "💻",
      title: "Remote Notarization",
      description: "Secure online notarization services for clients who can't visit in person."
    },
    {
      icon: "📱",
      title: "Client Portal",
      description: "Dedicated portal for clients to track documents and communicate securely."
    }
  ];

  const services = [
    { name: "Document Notarization", icon: "✍️", count: "Most Common" },
    { name: "Loan Signings", icon: "🏠", count: "Mobile Available" },
    { name: "Remote Online", icon: "💻", count: "24/7 Available" },
    { name: "Apostilles", icon: "🌍", count: "International" },
    { name: "Business Docs", icon: "💼", count: "Corporate" },
    { name: "Estate Planning", icon: "📑", count: "Legal Docs" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50/40 to-gray-100/40 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Navbar onGetStarted={onExplore} />
      
      {/* Hero Section */}
      <section className="relative w-full py-20">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 mb-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-800">Trusted by 500+ Legal Professionals</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Professional Notary Ofiice
            <span className="block text-blue-800 mt-2 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Document & Transactions
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Streamline your notary practice with our comprehensive appointment scheduling, 
            client management, and document tracking system designed for legal professionals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <PrimaryButton 
              label="View Features" 
              onClick={onExplore}
              size="large"
              className="bg-blue-800 hover:bg-blue-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <PrimaryButton 
              label="Schedule Demo" 
              onClick={onOrder}
              type="outline"
              size="large"
              className="border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in-up">
            {[
              { number: "500+", label: "Notaries" },
              { number: "50K+", label: "Documents" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-16 bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm border-y border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Our Services
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="text-center group p-4 rounded-lg bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 cursor-pointer border border-gray-200/50 shadow-sm hover:shadow-lg hover:scale-105 hover:border-blue-200/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-gray-900 font-semibold text-sm">{service.name}</div>
                <div className="text-xs text-gray-500 mt-1">{service.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full py-20 bg-gradient-to-br from-blue-50/30 to-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">NotaryPro</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional tools designed specifically for notary publics to manage their practice efficiently.
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                onClick={onExplore}
                className="hover:shadow-xl border-gray-200/70 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Streamline Your Practice?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of notaries who have transformed their practice with our professional management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton 
              label="Start Free Trial" 
              onClick={onExplore}
              type="secondary"
              size="large"
              className="bg-white text-blue-800 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            />
            <PrimaryButton 
              label="Schedule Demo" 
              onClick={onOrder}
              type="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-blue-800 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4">NotaryPro</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                Professional notary management solutions for the modern legal practice.
              </p>
              <div className="flex space-x-3">
                {['📘', '🐦', '💼'].map((icon, index) => (
                  <div 
                    key={index} 
                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gray-700/50 transition-all duration-300 cursor-pointer hover:scale-110"
                  >
                    <span className="text-white">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Services",
                items: ['Document Notarization', 'Remote Online', 'Mobile Services', 'Apostilles']
              },
              {
                title: "Support",
                items: ['Help Center', 'Documentation', 'Compliance Guide', 'Training']
              },
              {
                title: "Contact",
                items: ['(555) 123-LEGAL', 'support@notarypro.com', '24/7 Support', 'Demo Request']
              }
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 NotaryPro. Professional legal management solutions.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;