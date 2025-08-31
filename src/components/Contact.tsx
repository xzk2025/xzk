import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-custom-text mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-custom-accent to-custom-accent-secondary mx-auto rounded-full"></div>
            <p className="text-custom-text-secondary mt-4 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          
          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information - Left Column */}
            <div className="modern-card p-8">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-custom-text mb-4">Contact Information</h3>
                <p className="text-custom-text-secondary">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-custom-accent to-custom-accent-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.018L12 12.174l10.346-8.353h.018c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-custom-text font-semibold">Email</h4>
                    <a 
                      href="mailto:khinmyohsak@example.com" 
                      className="text-custom-accent hover:text-custom-accent/80 transition-colors duration-300"
                    >
                      khinmyohsak@example.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-custom-text font-semibold">Phone</h4>
                    <a 
                      href="tel:+1234567890" 
                      className="text-custom-accent hover:text-custom-accent/80 transition-colors duration-300"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-custom-accent-secondary to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-custom-text font-semibold">Location</h4>
                    <p className="text-custom-text-secondary">San Francisco, CA</p>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-custom-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-custom-text font-semibold">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/khinmyohsak" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-custom-accent hover:text-custom-accent/80 transition-colors duration-300"
                    >
                      linkedin.com/in/khinmyohsak
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Availability */}
              <div className="mt-8 p-6 bg-gradient-to-r from-custom-accent/10 to-custom-accent-secondary/10 rounded-lg border border-custom-accent/20">
                <h4 className="text-custom-text font-semibold mb-2">Availability</h4>
                <p className="text-custom-text-secondary text-sm">
                  Currently available for new opportunities and freelance projects. 
                  Open to both remote and hybrid work arrangements.
                </p>
              </div>
            </div>
            
            {/* Contact Form - Right Column */}
            <div className="modern-card p-8">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-custom-text mb-4">Send a Message</h3>
                <p className="text-custom-text-secondary">
                  Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-custom-text font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-custom-text placeholder-custom-text-muted focus:outline-none focus:border-custom-accent focus:ring-1 focus:ring-custom-accent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-custom-text font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-custom-text placeholder-custom-text-muted focus:outline-none focus:border-custom-accent focus:ring-1 focus:ring-custom-accent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-custom-text font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-custom-text placeholder-custom-text-muted focus:outline-none focus:border-custom-accent focus:ring-1 focus:ring-custom-accent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full modern-button bg-gradient-to-r from-custom-accent to-custom-accent-secondary text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 transform inline-block disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-600 text-center">
                      ✅ Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-center">
                      ❌ Sorry, there was an error sending your message. Please try again or contact me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="modern-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-custom-text mb-4">Ready to Start a Project?</h3>
              <p className="text-custom-text-secondary mb-6">
                Whether you need data analysis, automation solutions, or web development, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:khinmyohsak@example.com" 
                  className="modern-button bg-gradient-to-r from-custom-accent to-custom-accent-secondary text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 transform inline-block"
                >
                  Let's Work Together
                </a>
                <a 
                  href="#projects" 
                  className="modern-button bg-gray-100 hover:bg-gray-200 text-custom-text px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 transform inline-block border border-gray-200"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
