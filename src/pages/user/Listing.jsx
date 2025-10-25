import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Listing = ({ onOrder, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const servicesPerPage = 6;

  const services = [
    {
      id: 1,
      title: "Document Notarization",
      image: "https://images.pexels.com/photos/7369/startup-photos.jpg",
      description: "Professional notarization of legal documents, contracts, and agreements with full compliance.",
      price: "$15",
      category: "basic",
      features: ["Digital Copies", "Email Confirmation", "24/7 Access", "Secure Storage"],
      rating: 4.9,
      duration: "15 min",
      type: "In-Person/Remote"
    },
    {
      id: 2,
      title: "Remote Online Notarization",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      description: "Secure online notarization from anywhere with video verification and digital signatures.",
      price: "$25",
      category: "remote",
      features: ["Video Verification", "Digital Signatures", "Secure Platform", "Instant Delivery"],
      rating: 4.8,
      duration: "20 min",
      type: "Online Only"
    },
    {
      id: 3,
      title: "Loan Document Signing",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
      description: "Specialized notarization for mortgage and loan documents with mobile service option.",
      price: "$75",
      category: "specialized",
      features: ["Mobile Service", "After Hours", "Rush Service", "Document Review"],
      rating: 4.9,
      duration: "30 min",
      type: "Mobile Available"
    },
    {
      id: 4,
      title: "Apostille Services",
      image: "https://images.pexels.com/photos/4597937/pexels-photo-4597937.jpeg",
      description: "Authentication of documents for international use with expedited processing options.",
      price: "$95",
      category: "international",
      features: ["Expedited Processing", "Tracking Included", "Embassy Liaison", "Translation Services"],
      rating: 4.7,
      duration: "2-5 days",
      type: "International"
    },
    {
      id: 5,
      title: "Business Document Notarization",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
      description: "Notarization for corporate documents, agreements, and business filings.",
      price: "$35",
      category: "business",
      features: ["Bulk Discounts", "Corporate Accounts", "Priority Service", "Document Storage"],
      rating: 4.8,
      duration: "25 min",
      type: "Business"
    },
    {
      id: 6,
      title: "Estate Planning Documents",
      image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg",
      description: "Notarization of wills, trusts, power of attorney, and other estate planning documents.",
      price: "$45",
      category: "legal",
      features: ["Confidential Service", "Witness Services", "Document Safekeeping", "Legal Consultation"],
      rating: 4.9,
      duration: "30 min",
      type: "Legal Documents"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '📋' },
    { id: 'basic', name: 'Basic', icon: '✍️' },
    { id: 'remote', name: 'Remote', icon: '💻' },
    { id: 'mobile', name: 'Mobile', icon: '🚗' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'legal', name: 'Legal', icon: '⚖️' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 py-4 px-6 sticky top-0 z-40 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold transition-all duration-300 group hover:translate-x-1"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Notary Services
          </h1>
          <div className="text-base text-gray-600 font-medium bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
            {filteredServices.length} Services Available
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50 p-6 mb-8 hover:shadow-md transition-all duration-300">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="w-full lg:w-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search notary services..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full lg:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 text-gray-900 placeholder-gray-500 transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-blue-800 text-white shadow-md'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-sm border border-gray-300/50'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {currentServices.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500 group hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {service.category.toUpperCase()}
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {service.duration}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-xs font-semibold">{service.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Additional Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50">
                    <div className="text-xs text-gray-500">Service Type</div>
                    <div className="text-sm font-semibold text-blue-800">{service.type}</div>
                  </div>
                  <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg p-2 border border-gray-200/50">
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-sm font-semibold text-blue-800">{service.duration}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-blue-50/80 text-blue-800 px-3 py-1 rounded-full text-xs border border-blue-200/50 backdrop-blur-sm">
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="bg-gray-100/80 text-gray-600 px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <div className="text-xl font-bold text-blue-800">{service.price}</div>
                    <div className="text-xs text-gray-500">Starting Price</div>
                  </div>
                  <PrimaryButton 
                    label="Schedule Service" 
                    onClick={() => onOrder(service)}
                    className="bg-blue-800 hover:bg-blue-900 shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {currentServices.length === 0 && (
          <div className="text-center py-16 bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50">
            <div className="text-5xl mb-4 animate-bounce">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-800 hover:text-blue-900 font-semibold transition-colors duration-300 hover:scale-105 transform"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-white/80 transition-all duration-300 font-medium flex items-center gap-2 text-gray-700 hover:shadow-md backdrop-blur-sm"
            >
              ← Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm ${
                  currentPage === index + 1
                    ? 'bg-blue-800 text-white shadow-md transform scale-105'
                    : 'border border-gray-300 hover:bg-white/80 text-gray-700 hover:shadow-md'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-white/80 transition-all duration-300 font-medium flex items-center gap-2 text-gray-700 hover:shadow-md backdrop-blur-sm"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Listing;