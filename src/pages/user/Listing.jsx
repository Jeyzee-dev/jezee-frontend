import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Listing = ({ onOrder, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: "Document Notarization",
      description: "Professional notarization of legal documents, contracts, and agreements with full compliance.",
      price: "$15",
      category: "basic",
      features: ["Digital Copies", "Email Confirmation", "24/7 Access"],
      rating: 4.9,
      duration: "15 min"
    },
    {
      id: 2,
      title: "Remote Online Notarization",
      description: "Secure online notarization from anywhere with video verification and digital signatures.",
      price: "$25",
      category: "remote",
      features: ["Video Verification", "Digital Signatures", "Secure Platform"],
      rating: 4.8,
      duration: "20 min"
    },
    {
      id: 3,
      title: "Loan Document Signing",
      description: "Specialized notarization for mortgage and loan documents with mobile service option.",
      price: "$75",
      category: "specialized",
      features: ["Mobile Service", "After Hours", "Document Review"],
      rating: 4.9,
      duration: "30 min"
    },
    {
      id: 4,
      title: "Apostille Services",
      description: "Authentication of documents for international use with expedited processing options.",
      price: "$95",
      category: "international",
      features: ["Expedited Processing", "Tracking Included", "Embassy Liaison"],
      rating: 4.7,
      duration: "2-5 days"
    },
    {
      id: 5,
      title: "Business Document Notarization",
      description: "Notarization for corporate documents, agreements, and business filings.",
      price: "$35",
      category: "business",
      features: ["Bulk Discounts", "Corporate Accounts", "Priority Service"],
      rating: 4.8,
      duration: "25 min"
    },
    {
      id: 6,
      title: "Estate Planning Documents",
      description: "Notarization of wills, trusts, power of attorney, and other estate planning documents.",
      price: "$45",
      category: "legal",
      features: ["Confidential Service", "Witness Services", "Legal Consultation"],
      rating: 4.9,
      duration: "30 min"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '📋' },
    { id: 'basic', name: 'Basic', icon: '✍️' },
    { id: 'remote', name: 'Remote', icon: '💻' },
    { id: 'specialized', name: 'Specialized', icon: '⭐' },
    { id: 'business', name: 'Business', icon: '💼' }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Notary Services
          </h1>
          <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
            {filteredServices.length} Services
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="w-full lg:w-80 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search notary services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold">{service.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              {/* Service Details */}
              <div className="p-6">
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <span key={index} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Pricing and Duration */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{service.duration}</div>
                    <div className="text-sm text-gray-500">Estimated time</div>
                  </div>
                </div>
                
                {/* Action Button */}
                <PrimaryButton 
                  label="Schedule Service" 
                  onClick={() => onOrder(service)}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                />
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;