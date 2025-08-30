import React from 'react';
import { Navigation, Header, About, WorkExperience, Education, Skills, Projects, Contact } from './components';

function App() {
  return (
    <div className="min-h-screen bg-[#1C2135] text-white font-['Inter']">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Main Container with responsive padding and top margin for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Header />
        </div>
        
        {/* About Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <About />
        </div>
        
        {/* Work Experience Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <WorkExperience />
        </div>
        
        {/* Skills Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Skills />
        </div>
        
        {/* Projects Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Projects />
        </div>
        
        {/* Education Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Education />
        </div>
        
        {/* Contact Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
