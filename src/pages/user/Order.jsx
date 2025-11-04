import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Order = ({ service, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: service?.title || '',
    serviceLocation: 'office',
    documentType: 'general',
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
      alert(`Appointment scheduled successfully for ${formData.serviceType}!\n\nWe will contact you at ${formData.phone} to confirm your appointment.`);
      setIsSubmitting(false);
      onBack();
    }, 1500);
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

  const steps = [
    { number: 1, title: 'Your Information' },
    { number: 2, title: 'Service Details' },
    { number: 3, title: 'Confirmation' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 mb-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            ← Back to Services
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            Schedule Appointment
          </h1>
          <div className="w-20"></div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Steps */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 font-semibold text-sm ${
                  currentStep >= step.number
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-2 font-medium ${
                  currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Service */}
        {service && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">Selected Service</h3>
                <p className="text-blue-800">{service.title}</p>
              </div>
              <div className="text-center sm:text-right mt-2 sm:mt-0">
                <div className="text-xl font-bold text-blue-900">{service.price}</div>
                <div className="text-blue-700 text-sm">Starting Price</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Notary Service Request
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Client Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service type</option>
                      {serviceTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Location *
                    </label>
                    <select
                      name="serviceLocation"
                      value={formData.serviceLocation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="office">Office Appointment</option>
                      <option value="mobile">Mobile Service</option>
                      <option value="remote">Remote Online</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Document Type *
                    </label>
                    <select
                      name="documentType"
                      value={formData.documentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="general">General Documents</option>
                      <option value="legal">Legal Contracts</option>
                      <option value="financial">Financial Documents</option>
                      <option value="realestate">Real Estate</option>
                      <option value="business">Business Documents</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Any special requirements or document details..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Review Your Request</h3>
                
                <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Your Information</h4>
                      <p className="text-gray-600">{formData.fullName}</p>
                      <p className="text-gray-600">{formData.email}</p>
                      <p className="text-gray-600">{formData.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Service Details</h4>
                      <p className="text-gray-600">{formData.serviceType}</p>
                      <p className="text-gray-600 capitalize">
                        {formData.serviceLocation} Service
                      </p>
                      <p className="text-gray-600">
                        {formData.preferredDate} at {formData.preferredTime}
                      </p>
                    </div>
                  </div>
                  
                  {formData.additionalNotes && (
                    <div className="border-t border-gray-300 pt-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Additional Notes</h4>
                      <p className="text-gray-600">{formData.additionalNotes}</p>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
                  <p className="text-blue-800 text-sm">
                    After submitting, our team will contact you within 2 hours to confirm your appointment.
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
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold"
                >
                  ← Previous
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold"
                >
                  Cancel
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Continue →
                </button>
              ) : (
                <PrimaryButton 
                  label={isSubmitting ? "Scheduling..." : "Confirm Appointment"} 
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;