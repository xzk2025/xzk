

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
                <div className="absolute -inset-6 bg-gradient-to-r from-sky-accent via-purple-500 to-indigo-500 rounded-lg opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 animate-spin" style={{animationDuration: '20s'}}></div>
                
                {/* Profile container */}
                <div className="relative w-64 h-80 lg:w-80 lg:h-96 mx-auto lg:mx-0 rounded-lg">
                  <img 
                    src="/xzk.png" 
                    alt="Khin Myo Hsak" 
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-sky-accent via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-4xl lg:text-6xl font-black text-white">
                    KM
                  </div>
                  

                </div>
              </div>
              
              {/* Name and Title - REDUCED FONT SIZE */}
              <div className="mb-8">
                <h1 className="text-2xl lg:text-4xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-sky-accent via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Khin Myo Hsak
                  </span>
                </h1>
                <h2 className="text-base lg:text-lg text-sky-text-secondary font-light tracking-wide mb-2">
                  <span className="text-sky-text-secondary">Billing IT Analyst</span>
                  <br />
                  <span className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-sky-accent to-sky-accent-secondary bg-clip-text text-transparent">
                    Deputy Manager
                  </span>
                  <br />
                  {/* <span className="text-sky-text-secondary">Billing IT Department</span> */}
                </h2>
                {/* Subtle Status Line (Option A) */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sky-text-muted text-sm mb-4">
                  <span className="flex items-center gap-1"><span className="text-green-500 text-base">●</span>Available for hire</span>
                  <span className="mx-1">·</span>
                  <span className="flex items-center gap-1"><span className="text-sky-accent text-base">🌍</span>Remote/Hybrid Available</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                <a href="https://www.linkedin.com/in/khinmyo-hsak-630ba2285/" target="_blank" rel="noopener noreferrer" 
                   className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 text-sky-text-secondary group-hover:text-sky-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <button 
                   onClick={() => {
                     const element = document.querySelector('#contact');
                     if (element) {
                       element.scrollIntoView({ behavior: 'smooth' });
                     }
                   }}
                   className="group p-3 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 text-sky-text-secondary group-hover:text-sky-accent transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.018L12 12.174l10.346-8.353h.018c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </button>
              </div>
            </div>

                         {/* Right Column - About Me Section */}
             <div className="text-left">
               <h3 className="text-3xl lg:text-4xl font-bold text-sky-text mb-6">
                 About Me
               </h3>
               <div className="space-y-4 mb-8">
                 <p className="text-lg lg:text-xl text-sky-text-secondary leading-relaxed opacity-90 text-justify">
                   As a detail-oriented Data Analyst with over 2 years of experience, I excel at transforming raw data into actionable insights. My expertise lies in building data pipelines, automating ETL processes, and creating impactful reports.
                 </p>
                 <p className="text-lg lg:text-xl text-sky-text-secondary leading-relaxed opacity-90 text-justify">
                   I'm proficient in Python, <span className="font-semibold bg-gradient-to-r from-sky-accent via-purple-600 to-indigo-600 bg-clip-text text-transparent">SQL</span>, and relational <span className="font-semibold bg-gradient-to-r from-sky-accent via-purple-600 to-indigo-600 bg-clip-text text-transparent">databases</span>, with hands-on skills in <span className="font-semibold bg-gradient-to-r from-sky-accent via-purple-600 to-indigo-600 bg-clip-text text-transparent">Power BI</span>, <span className="font-semibold bg-gradient-to-r from-sky-accent via-purple-600 to-indigo-600 bg-clip-text text-transparent">Power Query</span>, and Git. I'm a fast learner with a passion for problem-solving and a strong desire to master new technologies. My collaborative mindset and ability to work under pressure ensure I can deliver results in any dynamic environment.
                 </p>
                 <p className="text-lg lg:text-xl text-sky-text-secondary leading-relaxed opacity-90 text-justify">
                   I'm currently open to new opportunities where I can apply my skills and continue to grow as a professional.
                 </p>
               </div>
              
              {/* Action Buttons - MOVED TO RIGHT COLUMN */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-accent to-sky-accent-secondary text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-accent/40 active:scale-[0.99]"
                  aria-label="Download Resume"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span>Download Resume</span>
                </button>
                
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-sky-accent/40 text-sky-accent bg-white/70 backdrop-blur-sm font-semibold shadow-sm hover:bg-sky-accent/10 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-accent/30 active:scale-[0.99]"
                  aria-label="Get in Touch"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <span>Get in Touch</span>
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
