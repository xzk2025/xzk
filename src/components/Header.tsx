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
    <section id="home" className="relative py-20 font-inter overflow-hidden">
      {/* Background with unified styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-light via-blue-50 to-indigo-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-sky-accent/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-indigo-500/20 to-sky-accent/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Profile Section */}
            <div className="text-center lg:text-left">
              {/* Profile Image */}
              <div className="relative group mb-8">
                {/* Outer ring animation */}
                <div className="absolute -inset-6 bg-gradient-to-r from-sky-accent via-purple-500 to-indigo-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-spin" style={{animationDuration: '20s'}}></div>
                
                {/* Profile container */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-sky-accent via-purple-500 to-indigo-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white p-2">
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
                    <div className="hidden w-full h-full bg-gradient-to-br from-sky-accent via-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-4xl lg:text-6xl font-black text-white">
                      KM
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Name and Title - REDUCED FONT SIZE */}
              <div className="mb-8">
                <h1 className="text-3xl lg:text-5xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-sky-accent via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Khin Myo Hsak
                  </span>
                </h1>
                <h2 className="text-lg lg:text-xl text-sky-text-secondary font-light tracking-wide">
                  Data Analyst & Full Stack Developer
                </h2>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a href="https://github.com/khinmyohsak" target="_blank" rel="noopener noreferrer" 
                   className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 text-sky-text-secondary group-hover:text-sky-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a href="https://linkedin.com/in/khinmyohsak" target="_blank" rel="noopener noreferrer" 
                   className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 text-sky-text-secondary group-hover:text-sky-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a href="mailto:khinmyohsak@example.com" 
                   className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 text-sky-text-secondary group-hover:text-sky-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.018L12 12.174l10.346-8.353h.018c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </a>
              </div>
            </div>

                         {/* Right Column - About Me Section */}
             <div className="text-left">
               <h3 className="text-3xl lg:text-4xl font-bold text-sky-text mb-6">
                 About Me
               </h3>
               <div className="space-y-4 mb-8">
                 <p className="text-lg lg:text-xl text-sky-text-secondary leading-relaxed opacity-90 text-justify">
                   Enthusiastic and detail-oriented Data Analyst with ~2 years of experience in building data pipelines, automating ETL processes, and developing insightful reports.
                 </p>
                 <p className="text-lg lg:text-xl text-sky-text-secondary leading-relaxed opacity-90 text-justify">
                   Proficient in Python, SQL, and relational databases, with hands-on expertise in Power BI, Power Query, and Git. Familiar with AWS and well-versed in data structures, algorithms, and database design. Fast learner with strong analytical skills and a collaborative mindset, passionate about transforming raw data into actionable insights.
                 </p>
               </div>
              
              {/* Action Buttons - MOVED TO RIGHT COLUMN */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="group relative px-8 py-4 bg-sky-accent text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-sky-accent/90"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Download Resume
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-accent to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 border-2 border-sky-accent text-sky-accent rounded-lg font-semibold hover:bg-sky-accent hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
