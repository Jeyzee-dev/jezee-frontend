import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Order = ({ service, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    serviceType: service?.title || '',
    serviceLocation: 'office',
    documentType: 'general',
    urgency: 'standard',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      nextStep();
      return;
    }
    
    // Final submission
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`✅ Appointment scheduled successfully for ${formData.serviceType}!\n\nWe will contact you within 2 hours at ${formData.phone} to confirm your appointment details.`);
      setIsSubmitting(false);
      onBack();
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const serviceTypes = [
    "Document Notarization",
    "Remote Online Notarization", 
    "Loan Document Signing",
    "Apostille Services",
    "Business Document Notarization",
    "Estate Planning Documents"
  ];

  const documentTypes = [
    { value: 'general', name: 'General Documents', description: 'Contracts, agreements, affidavits' },
    { value: 'legal', name: 'Legal Contracts', description: 'Power of attorney, wills, trusts' },
    { value: 'financial', name: 'Financial Documents', description: 'Loan documents, bank forms' },
    { value: 'realestate', name: 'Real Estate', description: 'Deeds, mortgages, title documents' },
    { value: 'business', name: 'Business Documents', description: 'Articles, resolutions, agreements' },
    { value: 'personal', name: 'Personal Documents', description: 'Identification, certificates, letters' }
  ];

  const steps = [
    { number: 1, title: 'Client Information' },
    { number: 2, title: 'Service Details' },
    { number: 3, title: 'Review & Confirm' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50 py-4 px-6 mb-8 relative z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold transition-all duration-300 group hover:translate-x-1"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Services
          </button>
          <h1 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Schedule Appointment
          </h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Progress Steps */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50 p-6 mb-8 hover:shadow-md transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 font-semibold transition-all duration-300 transform hover:scale-110 ${
                  currentStep >= step.number
                    ? 'bg-blue-800 text-white border-transparent shadow-md'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-3 font-medium transition-colors duration-300 ${
                  currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-1 mx-4 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-blue-800' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {service && (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-xl p-6 mb-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
              <div className="mb-3 sm:mb-0">
                <h3 className="text-lg font-semibold text-blue-900 mb-1">Selected Service</h3>
                <p className="text-blue-800">{service.title}</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-xl font-bold text-blue-900">{service.price}</div>
                <div className="text-blue-700 text-sm">Starting Price</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200/50 p-8 hover:shadow-md transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            Notary Service Request
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Client Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500 hover:border-gray-400"
                      placeholder="Enter your full legal name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500 hover:border-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500 hover:border-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Location *
                    </label>
                    <select
                      name="serviceLocation"
                      value={formData.serviceLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 hover:border-gray-400"
                    >
                      <option value="office">Office Appointment</option>
                      <option value="mobile">Mobile Service (Our Location)</option>
                      <option value="remote">Remote Online Notarization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500 hover:border-gray-400 resize-none"
                    placeholder="Enter your complete address for service"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Service Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 hover:border-gray-400"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Urgency *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 hover:border-gray-400"
                    >
                      <option value="standard">Standard (2-3 business days)</option>
                      <option value="rush">Rush (24 hours)</option>
                      <option value="emergency">Emergency (Same day)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 hover:border-gray-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 hover:border-gray-400"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Document Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documentTypes.map(docType => (
                      <label 
                        key={docType.value} 
                        className="flex flex-col cursor-pointer group p-4 rounded-lg border border-gray-300 bg-white/50 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300 transform hover:scale-105"
                      >
                        <input
                          type="radio"
                          name="documentType"
                          value={docType.value}
                          checked={formData.documentType === docType.value}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`font-medium transition-colors duration-300 ${
                          formData.documentType === docType.value 
                            ? 'text-blue-800' 
                            : 'text-gray-900 group-hover:text-gray-700'
                        }`}>
                          {docType.name}
                        </div>
                        <div className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                          {docType.description}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 text-gray-900 placeholder-gray-500 hover:border-gray-400 resize-none"
                    placeholder="Any special requirements or document details..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Your Request</h3>
                
                <div className="bg-gradient-to-br from-gray-50 to-white/80 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-gray-200/50 shadow-inner">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Client Information</h4>
                      <p className="text-gray-600 text-sm">{formData.fullName}</p>
                      <p className="text-gray-600 text-sm">{formData.email}</p>
                      <p className="text-gray-600 text-sm">{formData.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Service Details</h4>
                      <p className="text-gray-600 text-sm">{formData.serviceType}</p>
                      <p className="text-gray-600 text-sm capitalize">
                        {formData.serviceLocation} • {formData.urgency} Service
                      </p>
                      <p className="text-gray-600 text-sm">
                        {formData.preferredDate} at {formData.preferredTime}
                      </p>
                    </div>
                  </div>
                  
                  {formData.additionalNotes && (
                    <div className="border-t border-gray-300 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Additional Notes</h4>
                      <p className="text-gray-600 text-sm">{formData.additionalNotes}</p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100/80 backdrop-blur-sm border border-blue-200/50 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <span className="text-lg">📞</span> Next Steps
                  </h4>
                  <p className="text-blue-800 text-sm">
                    After submitting, our notary team will contact you within 2 hours to confirm your appointment time and provide any additional instructions.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between pt-6 border-t border-gray-200 gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white/80 hover:shadow-md transition-all duration-300 font-semibold backdrop-blur-sm order-2 sm:order-1 transform hover:scale-105"
                >
                  ← Previous
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-white/80 hover:shadow-md transition-all duration-300 font-semibold backdrop-blur-sm order-2 sm:order-1 transform hover:scale-105"
                >
                  Cancel
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 hover:shadow-lg transition-all duration-300 font-semibold order-1 sm:order-2 mb-4 sm:mb-0 transform hover:scale-105"
                >
                  Continue →
                </button>
              ) : (
                <div className="order-1 sm:order-2 mb-4 sm:mb-0">
                  <PrimaryButton 
                    label={isSubmitting ? "Scheduling..." : "Confirm Appointment"} 
                    disabled={isSubmitting}
                    size="large"
                    className="bg-blue-800 hover:bg-blue-900 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Order;