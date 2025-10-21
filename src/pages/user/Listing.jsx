import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';

const Listing = ({ onOrder, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const carsPerPage = 6;

  const cars = [
    {
      id: 1,
      model: "Honda Civic Turbo",
      image: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg",
      description: "Sporty compact sedan with turbocharged engine and advanced safety features.",
      price: "$25,500",
      category: "sedan",
      features: ["Turbo Engine", "LED Headlights", "Apple CarPlay", "Safety Sense"],
      rating: 4.8,
      year: 2024,
      mileage: "32 MPG",
      transmission: "CVT"
    },
    {
      id: 2,
      model: "Toyota Camry Hybrid",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      description: "Fuel-efficient midsize sedan with premium interior and smooth hybrid drive.",
      price: "$31,200",
      category: "sedan",
      features: ["Hybrid", "Leather Seats", "Sunroof", "JBL Audio"],
      rating: 4.7,
      year: 2024,
      mileage: "52 MPG",
      transmission: "eCVT"
    },
    {
      id: 3,
      model: "Ford Mustang GT",
      image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg",
      description: "Iconic American muscle car with 5.0L V8 engine and aggressive styling.",
      price: "$42,800",
      category: "sports",
      features: ["5.0L V8", "Sport Suspension", "Premium Sound", "Track Apps"],
      rating: 4.9,
      year: 2024,
      mileage: "18 MPG",
      transmission: "10-Speed Auto"
    },
    {
      id: 4,
      model: "BMW 3 Series",
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
      description: "Luxury sports sedan with precision handling and premium technology.",
      price: "$45,500",
      category: "luxury",
      features: ["M Sport Package", "Heated Seats", "Head-Up Display", "Parking Assist"],
      rating: 4.8,
      year: 2024,
      mileage: "30 MPG",
      transmission: "8-Speed Auto"
    },
    {
      id: 5,
      model: "Audi A4 Quattro",
      image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      description: "Sophisticated luxury compact with legendary quattro all-wheel drive.",
      price: "$43,900",
      category: "luxury",
      features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen", "Driver Assistance"],
      rating: 4.7,
      year: 2024,
      mileage: "29 MPG",
      transmission: "7-Speed Auto"
    },
    {
      id: 6,
      model: "Mercedes C-Class",
      image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg",
      description: "Elegant luxury sedan with cutting-edge technology and premium comfort.",
      price: "$48,200",
      category: "luxury",
      features: ["MBUX System", "Ambient Lighting", "Burmester Audio", "Active Safety"],
      rating: 4.9,
      year: 2024,
      mileage: "28 MPG",
      transmission: "9-Speed Auto"
    },
    {
      id: 7,
      model: "Tesla Model 3",
      image: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg",
      description: "All-electric sedan with autopilot and instant acceleration.",
      price: "$44,000",
      category: "electric",
      features: ["Autopilot", "Supercharging", "Glass Roof", "Premium Interior"],
      rating: 4.8,
      year: 2024,
      mileage: "134 MPGe",
      transmission: "Single-Speed"
    },
    {
      id: 8,
      model: "Hyundai Tucson Hybrid",
      image: "https://images.pexels.com/photos/6474477/pexels-photo-6474477.jpeg",
      description: "Modern SUV with hybrid efficiency and spacious, tech-filled interior.",
      price: "$34,800",
      category: "suv",
      features: ["Hybrid AWD", "Panoramic Sunroof", "Smart Sense", "Wireless Charging"],
      rating: 4.6,
      year: 2024,
      mileage: "38 MPG",
      transmission: "6-Speed Auto"
    },
    {
      id: 9,
      model: "Chevrolet Tahoe RST",
      image: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg",
      description: "Full-size SUV with powerful V8 and premium towing capabilities.",
      price: "$68,500",
      category: "suv",
      features: ["6.2L V8", "Magnetic Ride", "Premium Package", "Towing Package"],
      rating: 4.7,
      year: 2024,
      mileage: "17 MPG",
      transmission: "10-Speed Auto"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Vehicles', icon: '🚗' },
    { id: 'sedan', name: 'Sedans', icon: '🚙' },
    { id: 'suv', name: 'SUVs', icon: '🚘' },
    { id: 'sports', name: 'Sports', icon: '🏎️' },
    { id: 'luxury', name: 'Luxury', icon: '💎' },
    { id: 'electric', name: 'Electric', icon: '⚡' }
  ];

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || car.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <nav className="bg-gray-800/80 backdrop-blur-md shadow-2xl py-4 sm:py-6 px-4 sm:px-6 sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group w-full sm:w-auto justify-center sm:justify-start"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent order-first sm:order-none">
            Premium Vehicle Collection
          </h1>
          <div className="text-base sm:text-lg text-gray-300 font-medium bg-gray-700/50 px-3 sm:px-4 py-2 rounded-full w-full sm:w-auto text-center">
            {filteredCars.length} Vehicles Available
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Search and Filter Section */}
        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            <div className="w-full lg:w-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search vehicles by model..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full lg:w-80 pl-10 pr-4 py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-gray-700/50 text-white placeholder-gray-400"
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
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {currentCars.map(car => (
            <div key={car.id} className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-700 hover:border-cyan-500/30">
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  {car.category.toUpperCase()}
                </div>
                <div className="absolute top-3 left-3 bg-gray-900/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {car.year}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-xs sm:text-sm font-semibold">{car.rating}</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {car.model}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{car.description}</p>
                
                {/* Additional Specs */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center bg-gray-700/50 rounded-lg p-2">
                    <div className="text-xs text-gray-400">Fuel Economy</div>
                    <div className="text-sm font-semibold text-cyan-400">{car.mileage}</div>
                  </div>
                  <div className="text-center bg-gray-700/50 rounded-lg p-2">
                    <div className="text-xs text-gray-400">Transmission</div>
                    <div className="text-sm font-semibold text-cyan-400">{car.transmission}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-cyan-500/20 text-cyan-300 px-2 sm:px-3 py-1 rounded-full text-xs border border-cyan-500/30">
                      {feature}
                    </span>
                  ))}
                  {car.features.length > 3 && (
                    <span className="bg-gray-700/50 text-gray-400 px-2 sm:px-3 py-1 rounded-full text-xs">
                      +{car.features.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400">{car.price}</div>
                    <div className="text-xs sm:text-sm text-gray-400">Starting Price</div>
                  </div>
                  <PrimaryButton 
                    label="Order Now" 
                    onClick={() => onOrder(car)}
                    type="primary"
                    size="medium"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {currentCars.length === 0 && (
          <div className="text-center py-12 sm:py-16 bg-gray-800/60 rounded-2xl shadow-xl border border-gray-700">
            <div className="text-5xl sm:text-6xl mb-4">🚗</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">No vehicles found</h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm sm:text-base"
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
              className="px-3 sm:px-4 py-2 border border-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base text-gray-300"
            >
              ← Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'border border-gray-600 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 sm:px-4 py-2 border border-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-700 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base text-gray-300"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;