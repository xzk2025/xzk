import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sky-text mb-4">My Journey & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-accent to-sky-accent-secondary mx-auto rounded-full"></div>
            <p className="text-sky-text-secondary mt-4 max-w-2xl mx-auto">
              A deeper look into my professional journey, technical expertise, and the methodologies I bring to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-sky-text mb-4">
                Professional Evolution
              </h3>
              <p className="text-sky-text-secondary leading-relaxed">
                Over the past 2+ years, I've had the privilege of working with diverse teams and technologies, 
                from traditional Excel-based reporting to modern cloud-based analytics platforms. Each project 
                has taught me something new about the intersection of data, technology, and business strategy.
              </p>
              <p className="text-sky-text-secondary leading-relaxed">
                I believe in continuous learning and staying current with industry trends. Whether it's exploring 
                new data visualization techniques, learning emerging technologies, or contributing to open-source 
                projects, I'm always looking for ways to grow and improve my skills.
              </p>
              <p className="text-sky-text-secondary leading-relaxed">
                My experience spans across multiple industries, from healthcare analytics to financial modeling, 
                giving me a broad perspective on how data can drive different types of business decisions.
              </p>
              
              <h3 className="text-2xl font-semibold text-sky-text mb-4">
                Technical Philosophy
              </h3>
              <p className="text-sky-text-secondary leading-relaxed">
                I value collaboration and believe that the best solutions come from working closely with 
                stakeholders, understanding their needs, and iterating based on feedback. My goal is always 
                to deliver insights that are not just accurate, but actionable and impactful.
              </p>
              <p className="text-sky-text-secondary leading-relaxed">
                I approach every project with a combination of analytical rigor and creative problem-solving. 
                My methodology involves understanding the business context, identifying key questions, and 
                designing solutions that are both technically sound and practically implementable.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="modern-card p-8">
                <h4 className="text-xl font-semibold text-sky-text mb-6">Core Competencies</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-sky-text-secondary font-medium">Data Analysis & Visualization</span>
                      <p className="text-sky-text-muted text-sm mt-1">Creating compelling visual stories from complex datasets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-sky-text-secondary font-medium">Process Automation</span>
                      <p className="text-sky-text-muted text-sm mt-1">Streamlining workflows with intelligent automation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-sky-text-secondary font-medium">Statistical Modeling</span>
                      <p className="text-sky-text-muted text-sm mt-1">Building predictive models for business insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3 mt-2"></div>
                    <div>
                      <span className="text-sky-text-secondary font-medium">Full-Stack Development</span>
                      <p className="text-sky-text-muted text-sm mt-1">Building end-to-end data solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modern-card p-6">
                <h4 className="text-lg font-semibold text-sky-text mb-4">When I'm Not Working</h4>
                <div className="grid grid-cols-2 gap-3">
                  <span className="skill-badge text-center">Open Source</span>
                  <span className="skill-badge text-center">Tech Blogging</span>
                  <span className="skill-badge text-center">Mentoring</span>
                  <span className="skill-badge text-center">Hiking</span>
                </div>
              </div>
              
              <div className="modern-card p-6">
                <h4 className="text-lg font-semibold text-sky-text mb-4">Industry Experience</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">Healthcare Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">Financial Modeling</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">E-commerce Analytics</span>
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
