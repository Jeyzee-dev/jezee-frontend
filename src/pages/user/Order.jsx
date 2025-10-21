import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Order = ({ car, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    carModel: car?.model || '',
    color: 'white',
    paymentMethod: 'credit',
    testDrive: 'yes',
    tradeIn: 'no',
    financing: 'yes'
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
      alert(`🎉 Order submitted successfully for ${formData.carModel}!\n\nWe will contact you within 24 hours at ${formData.email} to confirm your order and schedule delivery.`);
      setIsSubmitting(false);
      onBack();
    }, 2000);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const colors = [
    { value: 'white', name: 'Pearl White', class: 'bg-white border-2 border-gray-300' },
    { value: 'black', name: 'Midnight Black', class: 'bg-gray-900' },
    { value: 'red', name: 'Racing Red', class: 'bg-red-600' },
    { value: 'blue', name: 'Deep Blue', class: 'bg-blue-600' },
    { value: 'silver', name: 'Metallic Silver', class: 'bg-gray-400' },
    { value: 'gray', name: 'Graphite Gray', class: 'bg-gray-600' }
  ];

  const carModels = [
    "Honda Civic Turbo",
    "Toyota Camry Hybrid", 
    "Ford Mustang GT",
    "BMW 3 Series",
    "Audi A4 Quattro",
    "Mercedes C-Class",
    "Tesla Model 3",
    "Hyundai Tucson Hybrid",
    "Chevrolet Tahoe RST"
  ];

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Vehicle Details' },
    { number: 3, title: 'Review & Submit' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-4 sm:py-8">
      {/* Header */}
      <nav className="bg-gray-800/80 backdrop-blur-md shadow-2xl py-4 sm:py-6 px-4 sm:px-6 mb-6 sm:mb-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group text-sm sm:text-base"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Cars
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Place Your Order
          </h1>
          <div className="w-20 sm:w-24"></div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Progress Steps */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 font-semibold transition-all duration-300 ${
                  currentStep >= step.number
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent'
                    : 'bg-gray-700 text-gray-400 border-gray-600'
                }`}>
                  {step.number}
                </div>
                <span className={`ml-2 font-medium text-sm sm:text-base ${
                  currentStep >= step.number ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-12 sm:w-16 h-1 mx-4 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : 'bg-gray-600'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {car && (
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
              <div className="mb-3 sm:mb-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">Selected Vehicle</h3>
                <p className="text-cyan-100 text-sm sm:text-base">{car.model}</p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-xl sm:text-2xl font-bold">{car.price}</div>
                <div className="text-cyan-100 text-xs sm:text-sm">Starting Price</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Car Order Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white placeholder-gray-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Schedule Test Drive *
                    </label>
                    <select
                      name="testDrive"
                      value={formData.testDrive}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white"
                    >
                      <option value="yes">Yes, I'd like a test drive</option>
                      <option value="no">No, purchase only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white placeholder-gray-400"
                    placeholder="Enter your complete address"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Vehicle Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Vehicle Configuration</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Car Model *
                    </label>
                    <select
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white"
                    >
                      <option value="">Select a car model</option>
                      {carModels.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Trade-In Vehicle
                    </label>
                    <select
                      name="tradeIn"
                      value={formData.tradeIn}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white"
                    >
                      <option value="no">No trade-in</option>
                      <option value="yes">Yes, I have a trade-in</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Select Color *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                    {colors.map(color => (
                      <label key={color.value} className="flex flex-col items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="color"
                          value={color.value}
                          checked={formData.color === color.value}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all ${
                          color.class
                        } ${
                          formData.color === color.value 
                            ? 'border-cyan-400 ring-2 ring-cyan-500/30' 
                            : 'border-gray-500 group-hover:border-gray-400'
                        } group-hover:scale-110`}></div>
                        <span className="mt-2 text-xs text-gray-300 text-center group-hover:text-white transition-colors">{color.name.split(' ')[0]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Financing Options *
                  </label>
                  <select
                    name="financing"
                    value={formData.financing}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white"
                  >
                    <option value="yes">Yes, I need financing</option>
                    <option value="no">No, I'll pay cash</option>
                    <option value="lease">I'm interested in leasing</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Review Your Order</h3>
                
                <div className="bg-gray-700/50 rounded-xl p-4 sm:p-6 space-y-4 border border-gray-600">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Personal Info</h4>
                      <p className="text-gray-400 text-sm">{formData.fullName}</p>
                      <p className="text-gray-400 text-sm">{formData.email}</p>
                      <p className="text-gray-400 text-sm">{formData.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">Vehicle</h4>
                      <p className="text-gray-400 text-sm">{formData.carModel}</p>
                      <p className="text-gray-400 text-sm capitalize">{formData.color} • {formData.testDrive === 'yes' ? 'Test Drive' : 'No Test Drive'}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <h4 className="font-semibold text-gray-300 mb-2">Additional Options</h4>
                    <p className="text-gray-400 text-sm">Trade-in: {formData.tradeIn === 'yes' ? 'Yes' : 'No'}</p>
                    <p className="text-gray-400 text-sm">Financing: {formData.financing}</p>
                    <p className="text-gray-400 text-sm">Payment Method: {formData.paymentMethod}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Payment Method *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-gray-700/50 text-white"
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3 sm:p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                    <span>📞</span> Next Steps
                  </h4>
                  <p className="text-cyan-300 text-xs sm:text-sm">
                    After submitting, our sales team will contact you within 24 hours to confirm your order details and schedule delivery.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between pt-4 sm:pt-6 border-t border-gray-700 gap-3 sm:gap-0">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700 transition-all font-semibold text-sm sm:text-base order-2 sm:order-1"
                >
                  ← Previous
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onBack}
                  className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-700 transition-all font-semibold text-sm sm:text-base order-2 sm:order-1"
                >
                  Cancel
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base order-1 sm:order-2 mb-3 sm:mb-0"
                >
                  Continue →
                </button>
              ) : (
                <div className="order-1 sm:order-2 mb-3 sm:mb-0">
                  <PrimaryButton 
                    label={isSubmitting ? "Submitting..." : "Submit Order"} 
                    type="primary"
                    disabled={isSubmitting}
                    size="large"
                    className="w-full sm:w-auto"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;