import React from 'react';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const WorkExperience: React.FC = () => {
  const experiences: WorkExperience[] = [
    {
      id: 1,
      company: "Data Analytics Solutions Inc.",
      position: "Senior Data Analyst",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Managed 27 IP reports and 15+ monthly reports, ensuring timely delivery and accuracy",
        "Automated reporting processes with VBA, Python, Power Query, and Power BI, reducing manual work by 60%",
        "Led data analysis projects using Advanced Excel, Power BI, and SQL to generate actionable insights",
        "Collaborated with cross-functional teams to deliver data-driven recommendations for business decisions",
        "Mentored junior analysts and conducted training sessions on data analysis best practices"
      ],
      technologies: ["Advanced Excel", "Power BI", "SQL", "Macro VBA", "Power Query", "Python"]
    },
    {
      id: 2,
      company: "Business Intelligence Corp",
      position: "Data Analyst",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: [
        "Analyzed large datasets using Excel and Power BI to create comprehensive business reports",
        "Built interactive dashboards and visualizations for executive presentations",
        "Automated data processing workflows using VBA macros and Power Query",
        "Worked with Dynamics 365 Business Central for ERP data analysis and reporting",
        "Developed standardized reporting templates that improved team efficiency by 40%"
      ],
      technologies: ["Excel", "Power BI", "VBA", "Power Query", "Dynamics 365", "SQL"]
    },
    {
      id: 3,
      company: "Tech Startup Analytics",
      position: "Junior Data Analyst",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: [
        "Assisted in data collection, cleaning, and analysis using Excel and SQL",
        "Created basic reports and visualizations for stakeholders",
        "Learned advanced Excel functions and Power BI dashboard creation",
        "Participated in data analysis projects and team meetings",
        "Supported senior analysts in report generation and data validation"
      ],
      technologies: ["Excel", "SQL", "Power BI", "Python", "Basic VBA"]
    }
  ];

  return (
    <section id="experience" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Professional experience in data analysis, business intelligence, and process automation 
              across various industries and technologies.
            </p>
          </div>
          
          {/* Work Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="modern-card group">
                <div className="p-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {experience.position}
                      </h3>
                      <p className="text-xl gradient-text-secondary font-semibold mb-1">
                        {experience.company}
                      </p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="mr-4">{experience.duration}</span>
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {index === 0 ? 'Current' : 'Previous'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Responsibilities and Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="skill-badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Section */}
          <div className="mt-12">
            <div className="modern-card p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-6">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">27+</div>
                  <p className="text-gray-300">IP Reports Managed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">60%</div>
                  <p className="text-gray-300">Process Automation Improvement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
