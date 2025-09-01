

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  gpa?: string;
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      degree: "BE- Bachelor of Engineering (Electronics)",
      institution: "Technological University (Sittwe)",
      duration: "2014 - 2018",
      location: "Sittwe, Myanmar",
      description: "Comprehensive study of electronics engineering with focus on electronic systems, circuits, and engineering principles.",
      achievements: [
        "Core electronics engineering curriculum",
        "Practical laboratory experience",
        "Engineering project work",
        "Technical problem-solving skills"
      ]
    },
    {
      id: 2,
      degree: "Diploma of Business Intelligence and Data Analysis",
      institution: "Matrix Institute",
      duration: "2022 - 2023",
      location: "Myanmar",
      description: "Specialized training in business intelligence, data analysis techniques, and data-driven decision making methodologies.",
      achievements: [
        "Business intelligence fundamentals",
        "Data analysis methodologies",
        "Reporting and visualization skills",
        "Practical data analysis projects"
      ]
    },
    {
      id: 3,
      degree: "Certificate of Completion Data Analyst Course",
      institution: "Techland",
      duration: "2023",
      location: "Myanmar",
      description: "Comprehensive data analyst training covering data manipulation, analysis tools, and practical applications.",
      achievements: [
        "Data analysis tools and techniques",
        "Statistical analysis methods",
        "Data visualization skills",
        "Real-world project experience"
      ]
    },
    {
      id: 4,
      degree: "Certificate of MEAL",
      institution: "The Kap",
      duration: "2023",
      location: "Myanmar",
      description: "Monitoring, Evaluation, Accountability, and Learning (MEAL) certification for development and humanitarian work.",
      achievements: [
        "MEAL framework and methodologies",
        "Data collection and analysis",
        "Monitoring and evaluation techniques",
        "Learning and accountability practices"
      ]
    }
  ];

  return (
    <section id="education" className="section-container py-12 sm:py-16 mb-8 font-inter">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sky-text mb-4">Education</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sky-accent to-sky-accent-secondary mx-auto rounded-full"></div>
            <p className="text-sky-text-secondary mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Educational background combining electronics engineering with specialized training in business intelligence, 
              data analysis, and MEAL methodologies for comprehensive technical and analytical expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="modern-card p-4 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-sky-text mb-2">{edu.degree}</h3>
                    <p className="text-lg gradient-text-secondary font-medium">{edu.institution}</p>
                  </div>
                  {edu.gpa && (
                    <div className="text-right">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center text-sky-text-muted mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{edu.duration}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{edu.location}</span>
                </div>
                
                <p className="text-sky-text-secondary mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-sky-text mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sky-text-secondary">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="modern-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-sky-text mb-4">Professional Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-accent to-sky-accent-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-sm font-medium text-sky-text-secondary">Business Intelligence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-sm font-medium text-sky-text-secondary">Data Analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-accent-secondary to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <p className="text-sm font-medium text-sky-text-secondary">MEAL</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-sky-text-secondary">Electronics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
