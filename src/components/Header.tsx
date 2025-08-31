import React from 'react';

const Header: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Khin_Myo_Hsak_Resume.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Simple Hero Layout */}
          <div className="text-center mb-16">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-custom-accent to-custom-accent-secondary p-1">
              <img 
                src="/xzk.png" 
                alt="Khin Myo Hsak" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-custom-accent to-custom-accent-secondary rounded-full flex items-center justify-center text-3xl font-bold text-white">
                KM
              </div>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Khin Myo Hsak
            </h1>
            <h2 className="text-xl lg:text-2xl text-custom-text-secondary mb-6 font-light">
              Data Analyst & Full Stack Developer
            </h2>
            
            {/* Simple Description */}
            <p className="text-lg text-custom-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              Transforming raw data into actionable insights with 2+ years of experience in 
              data analysis, automation, and visualization. Passionate about turning complex 
              data into clear, compelling stories.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/khinmyohsak" target="_blank" rel="noopener noreferrer" 
                 className="text-custom-text-secondary hover:text-custom-text transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/khinmyohsak" target="_blank" rel="noopener noreferrer" 
                 className="text-custom-text-secondary hover:text-custom-text transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:khinmyohsak@example.com" 
                 className="text-custom-text-secondary hover:text-custom-text transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.018L12 12.174l10.346-8.353h.018c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-gradient-to-r from-custom-accent to-custom-accent-secondary text-white rounded-lg font-semibold hover:from-custom-accent/90 hover:to-custom-accent-secondary/90 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gray-100 border border-gray-200 text-custom-text rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                Get in Touch
              </button>
            </div>
          </div>

          {/* Simple Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-custom-text-secondary">Data Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-custom-text-secondary">Automation Scripts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">200+</div>
              <div className="text-custom-text-secondary">Reports Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-custom-text-secondary">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
