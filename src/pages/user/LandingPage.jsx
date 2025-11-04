import React from 'react';

const LawJusticeLandingPage = ({ onExplore, onOrder }) => {
  const practiceAreas = [
    {
      icon: "⚖️",
      title: "Civil Litigation",
      description: "Comprehensive representation in civil disputes and courtroom proceedings."
    },
    {
      icon: "🏠",
      title: "Real Estate Law",
      description: "Property transactions, disputes, and real estate development legal services."
    },
    {
      icon: "💼",
      title: "Business Law",
      description: "Corporate formation, contracts, and business transaction legal guidance."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Law",
      description: "Divorce, child custody, and family dispute resolution with compassion."
    },
    {
      icon: "📝",
      title: "Estate Planning",
      description: "Wills, trusts, and estate administration to protect your legacy."
    },
    {
      icon: "⚡",
      title: "Criminal Defense",
      description: "Aggressive defense representation for criminal charges at all levels."
    }
  ];

  const attorneys = [
    {
      name: "Sarah Johnson",
      role: "Senior Partner",
      specialty: "Civil Litigation",
      experience: "15+ years",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Partner",
      specialty: "Corporate Law",
      experience: "12+ years",
      image: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      role: "Associate",
      specialty: "Family Law",
      experience: "8+ years",
      image: "👩‍⚖️"
    },
    {
      name: "James Wilson",
      role: "Partner",
      specialty: "Criminal Defense",
      experience: "20+ years",
      image: "🧑‍⚖️"
    }
  ];

  const testimonials = [
    {
      quote: "Their expertise in corporate law saved my business during a critical merger. Professional and relentless.",
      author: "Robert K., CEO Tech Innovations",
      case: "Corporate Merger"
    },
    {
      quote: "I was facing serious charges, but James Wilson fought tirelessly and secured my acquittal. Forever grateful.",
      author: "Michael T., Client",
      case: "Criminal Defense"
    },
    {
      quote: "The family law team handled my divorce with incredible sensitivity and legal precision. Outstanding service.",
      author: "Jennifer L., Client",
      case: "Family Law"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Free case evaluation with one of our experienced attorneys"
    },
    {
      step: "02",
      title: "Case Analysis",
      description: "Comprehensive review of your legal situation and options"
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Custom legal strategy tailored to your specific needs"
    },
    {
      step: "04",
      title: "Representation",
      description: "Aggressive advocacy and legal representation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full py-4 px-6 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚖️</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              Justice<span className="text-blue-900">Law</span> Partners
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Practice Areas', 'Our Attorneys', 'Success Stories', 'About', 'Contact'].map((item) => (
              <button key={item} className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200">
                {item}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2 text-blue-900 hover:text-blue-700 font-medium transition-colors duration-200">
              Contact
            </button>
            <button 
              onClick={onOrder}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-800/30 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-700/50 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium">Trusted by Clients for Over 25 Years</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Legal <span className="text-blue-200">Advocates</span> in Complex Times
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Premier legal representation with a track record of success in civil litigation, 
              corporate law, and criminal defense. Your justice is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onExplore}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={onOrder}
                className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg"
              >
                View Practice Areas
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: "25+", label: "Years Experience" },
                { number: "5000+", label: "Cases Handled" },
                { number: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-300 rounded-xl h-96 lg:h-[500px] flex items-center justify-center shadow-2xl">
            <span className="text-gray-600 text-lg">Law Office Image</span>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-900">Practice Areas</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas, delivered with expertise and dedication.
            </p>
            <div className="w-24 h-1 bg-blue-900 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.description}
                </p>
                <button className="text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center">
                  Learn More 
                  <span className="ml-2">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-blue-900">JusticeLaw</span> Partners Stands Apart
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                For over two decades, we've built our reputation on successful case outcomes, 
                client-focused service, and unwavering commitment to justice.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Proven Track Record",
                    description: "Thousands of successful cases across multiple practice areas"
                  },
                  {
                    title: "Experienced Attorneys",
                    description: "Our legal team brings decades of combined courtroom experience"
                  },
                  {
                    title: "Personalized Attention",
                    description: "Every client receives dedicated, personalized legal strategy"
                  },
                  {
                    title: "Aggressive Advocacy",
                    description: "We fight tirelessly to protect your rights and interests"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <span className="text-gray-600 text-lg">Success Metrics Infographic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Attorneys Section */}
      <section className="w-full py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-blue-200">Legal Team</span>
            </h2>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto">
              Seasoned attorneys with expertise across multiple legal disciplines, ready to fight for your rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attorneys.map((attorney, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="text-6xl mb-4">{attorney.image}</div>
                <h3 className="text-xl font-bold mb-2">{attorney.name}</h3>
                <div className="text-blue-200 font-semibold mb-2">{attorney.role}</div>
                <div className="text-white/80 mb-3">{attorney.specialty}</div>
                <div className="text-sm text-blue-200 bg-blue-800/30 px-3 py-1 rounded-full inline-block">
                  {attorney.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Process Section */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-900">Legal Process</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Transparent, structured approach to ensure your case receives the attention and strategy it deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client <span className="text-blue-900">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl text-blue-900 mb-4">❝</div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-blue-900 text-sm">{testimonial.case}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section className="w-full py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Recent <span className="text-blue-200">Case Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                case: "Corporate Merger",
                result: "$50M Success",
                description: "Successfully navigated complex merger negotiations"
              },
              {
                case: "Criminal Defense",
                result: "Acquittal",
                description: "Not guilty verdict in high-profile criminal case"
              },
              {
                case: "Civil Litigation",
                result: "$2.5M Award",
                description: "Substantial settlement for client in civil dispute"
              }
            ].map((result, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-blue-200 mb-2">{result.result}</div>
                <div className="text-xl font-semibold mb-3">{result.case}</div>
                <p className="text-blue-100">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-900">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much do your legal services cost?",
                answer: "We offer various fee structures including hourly rates, flat fees, and contingency arrangements depending on your case type. During your free consultation, we'll discuss the best option for your situation."
              },
              {
                question: "How long will my case take to resolve?",
                answer: "Case duration varies based on complexity, jurisdiction, and specific circumstances. Simple matters may resolve in weeks, while complex litigation can take months or years. We'll provide a realistic timeline during our initial assessment."
              },
              {
                question: "What should I bring to my first consultation?",
                answer: "Bring any relevant documents, correspondence, court papers, and a list of questions. The more information you provide, the better we can assess your case and provide accurate guidance."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we understand legal services can be a significant investment. We work with clients to create manageable payment plans that fit their financial situation while ensuring quality representation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Protect Your Rights?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward justice. Schedule your free, no-obligation consultation with one of our experienced attorneys today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onExplore}
              className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Schedule Free Consultation
            </button>
            <button 
              onClick={onOrder}
              className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg"
            >
              Call Now: (555) 123-JUSTICE
            </button>
          </div>
          <p className="text-blue-200 mt-6 text-sm">
            All consultations are confidential and protected by attorney-client privilege
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⚖️</span>
                </div>
                <div className="text-xl font-bold">JusticeLaw Partners</div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Premier legal representation with over 25 years of excellence in courtroom advocacy and client service.
              </p>
              <div className="flex space-x-3">
                {['📘', '🐦', '💼', '📸'].map((icon, index) => (
                  <div 
                    key={index} 
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-white">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Practice Areas",
                items: ['Civil Litigation', 'Criminal Defense', 'Family Law', 'Business Law', 'Real Estate', 'Estate Planning']
              },
              {
                title: "Our Firm",
                items: ['About Us', 'Our Attorneys', 'Case Results', 'Testimonials', 'Blog', 'Careers']
              },
              {
                title: "Contact Info",
                items: [
                  '123 Justice Avenue',
                  'Suite 500',
                  'Legal District, NY 10001',
                  '(555) 123-JUSTICE',
                  'contact@justicelaw.com'
                ]
              }
            ].map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
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
              © {new Date().getFullYear()} JusticeLaw Partners. All rights reserved. | 
              <span className="text-gray-500"> Attorney Advertising. Prior results do not guarantee a similar outcome.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawJusticeLandingPage;