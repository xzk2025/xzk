import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-custom-text mb-4">More About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-custom-accent to-custom-accent-secondary mx-auto rounded-full"></div>
            <p className="text-custom-text-secondary mt-4 max-w-2xl mx-auto">
              Delve deeper into my background, values, and what drives me in the world of data and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-custom-text mb-4">
                My Journey
              </h3>
              <p className="text-custom-text-secondary leading-relaxed">
                My passion for data analysis began during my studies at UC Berkeley, where I discovered the power 
                of transforming raw data into meaningful insights. What started as academic curiosity has evolved 
                into a professional career focused on helping businesses make data-driven decisions.
              </p>
              <p className="text-custom-text-secondary leading-relaxed">
                Over the past 2+ years, I've had the privilege of working with diverse teams and technologies, 
                from traditional Excel-based reporting to modern cloud-based analytics platforms. Each project 
                has taught me something new about the intersection of data, technology, and business strategy.
              </p>
              <p className="text-custom-text-secondary leading-relaxed">
                I believe in continuous learning and staying current with industry trends. Whether it's exploring 
                new data visualization techniques, learning emerging technologies, or contributing to open-source 
                projects, I'm always looking for ways to grow and improve my skills.
              </p>
              
              <h3 className="text-2xl font-semibold text-custom-text mb-4">
                My Approach
              </h3>
              <p className="text-custom-text-secondary leading-relaxed">
                I approach every project with a combination of analytical rigor and creative problem-solving. 
                My methodology involves understanding the business context, identifying key questions, and 
                designing solutions that are both technically sound and practically implementable.
              </p>
              <p className="text-custom-text-secondary leading-relaxed">
                I value collaboration and believe that the best solutions come from working closely with 
                stakeholders, understanding their needs, and iterating based on feedback. My goal is always 
                to deliver insights that are not just accurate, but actionable and impactful.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="modern-card p-8">
                <h4 className="text-xl font-semibold text-custom-text mb-6">What I Value</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-custom-accent to-custom-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-custom-text-secondary font-medium">Data-Driven Decision Making</span>
                      <p className="text-custom-text-muted text-sm mt-1">Using evidence and analytics to guide strategic choices</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-custom-accent to-custom-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-custom-text-secondary font-medium">Continuous Learning</span>
                      <p className="text-custom-text-muted text-sm mt-1">Staying current with technology and industry trends</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-custom-accent to-custom-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-custom-text-secondary font-medium">Collaboration</span>
                      <p className="text-custom-text-muted text-sm mt-1">Working with teams to achieve shared goals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-custom-accent to-custom-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-custom-text-secondary font-medium">Innovation</span>
                      <p className="text-custom-text-muted text-sm mt-1">Finding creative solutions to complex problems</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modern-card p-6">
                <h4 className="text-lg font-semibold text-custom-text mb-4">When I'm Not Working</h4>
                <div className="grid grid-cols-2 gap-3">
                  <span className="skill-badge text-center">Open Source</span>
                  <span className="skill-badge text-center">Tech Blogging</span>
                  <span className="skill-badge text-center">Mentoring</span>
                  <span className="skill-badge text-center">Hiking</span>
                </div>
              </div>
              
              <div className="modern-card p-6">
                <h4 className="text-lg font-semibold text-custom-text mb-4">Current Focus</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                    <span className="text-custom-text-secondary">Machine Learning & AI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                    <span className="text-custom-text-secondary">Advanced Data Visualization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3"></div>
                    <span className="text-custom-text-secondary">Cloud Computing (AWS/Azure)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
