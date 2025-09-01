

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
      company: "MPT Myanmar Co., Ltd",
      position: "Billing IT Analyst",
      duration: "Aug 2025 - Current",
      location: "Myanmar",
      description: [
        "Support sim operation",
        "Handle operation requirements, functional issues, system issue, customer complaint",
        "Provide the data, information, reports",
        "Support testing process for issues or need"
      ],
      technologies: ["IT Support", "System Operations", "Customer Support", "Testing", "Reporting"]
    },
    {
      id: 2,
      company: "ZTE Myanmar Co., Ltd",
      position: "Data Analysis & Reporting Engineer",
      duration: "April 2024 - May 2025",
      location: "Myanmar",
      description: [
        "Managed 27 IP reports in the TX domain, ensuring timely and accurate data delivery across multiple cycles",
        "Developed ETL pipelines to extract, clean, and transform data from diverse telecom sources",
        "Automated reporting processes with VBA, Python, Power Query, and Power BI, cutting manual effort by 60%",
        "Created and maintained Power BI dashboards to support business KPIs and decision-making",
        "Collaborated with technical teams to track network upgrades and ensure data accuracy",
        "Adapted data solutions based on customer requirements, enhancing flexibility and responsiveness"
      ],
      technologies: ["VBA", "Python", "Power Query", "Power BI", "ETL Pipelines", "Data Analysis"]
    },
    {
      id: 3,
      company: "Telecom International Myanmar Head of Office Co.Ltd",
      position: "M&E Reporting Engineer",
      duration: "Nov 2022 - April 2024",
      location: "Myanmar",
      description: [
        "Analyzed and maintained key data sets using Excel, Python, and other tools to support strategic decisions",
        "Created and presented accurate reports to senior leadership using Excel and data analysis tools",
        "Collaborated with teams and 18 branches to align goals, conduct planning, and improve performance",
        "Delivered insights and proposals to C-level executives based on nationwide site surveys"
      ],
      technologies: ["Excel", "Python", "Data Analysis", "Reporting", "Strategic Planning"]
    },
    {
      id: 4,
      company: "CFSI (INGO)",
      position: "Data Assistant",
      duration: "Aug 2022 - Oct 2022",
      location: "Myanmar",
      description: [
        "Supported child protection case management and field coordination, using Excel and data tools for tracking and reporting",
        "Delivered trainings on PSEA, MHPSS, and EORE; collected and analyzed field data to support community outreach",
        "Managed expense reporting and compiled activity reports to support timely decisions and program effectiveness"
      ],
      technologies: ["Excel", "Data Tools", "Case Management", "Training", "Reporting"]
    }
  ];

  return (
    <section id="experience" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sky-text mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-accent to-sky-accent-secondary mx-auto rounded-full"></div>
            <p className="text-sky-text-secondary mt-4 max-w-2xl mx-auto">
              Professional experience in data analysis, reporting, and IT support across telecom, 
              international organizations, and various technologies.
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
                      <h3 className="text-2xl font-bold text-sky-text mb-2 group-hover:text-sky-accent transition-colors duration-300">
                        {experience.position}
                      </h3>
                      <p className="text-xl gradient-text-secondary font-semibold mb-1">
                        {experience.company}
                      </p>
                      <div className="flex items-center text-sky-text-muted text-sm">
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
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-sky-accent to-sky-accent-secondary text-white">
                        {index === 0 ? 'Current' : 'Previous'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Responsibilities and Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-sky-text mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-sky-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mt-2 mr-3"></div>
                          <span className="text-sky-text-secondary leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-lg font-semibold text-sky-text mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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
              <h3 className="text-2xl font-bold text-sky-text text-center mb-6">Career Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-accent to-sky-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">27+</div>
                  <p className="text-sky-text-secondary">IP Reports Managed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">60%</div>
                  <p className="text-sky-text-secondary">Process Automation Improvement</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-accent-secondary to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <p className="text-sky-text-secondary">Years of Experience</p>
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
