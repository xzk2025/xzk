import React from 'react';

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
      degree: "Master of Science in Data Analytics",
      institution: "University of California, Berkeley",
      duration: "2018 - 2020",
      location: "Berkeley, CA",
      description: "Specialized in data analytics, business intelligence, and statistical analysis with focus on practical applications in business environments.",
      achievements: [
        "Graduated with Distinction",
        "Research Assistant in Data Analytics Lab",
        "Published research on business intelligence automation",
        "Teaching Assistant for Data Analysis Methods"
      ],
      gpa: "3.9/4.0"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Business Analytics",
      institution: "San Francisco State University",
      duration: "2014 - 2018",
      location: "San Francisco, CA",
      description: "Comprehensive study of business analytics, statistics, and information systems with emphasis on data-driven decision making.",
      achievements: [
        "Dean's List (All Semesters)",
        "Business Analytics Honor Society",
        "Capstone Project: Automated Reporting System",
        "Internship at Data Analytics Firm"
      ],
      gpa: "3.8/4.0"
    }
  ];

  return (
    <section id="education" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Academic background focused on data analytics, business intelligence, and statistical analysis 
              to support data-driven decision making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="modern-card p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg gradient-text-secondary font-medium">{edu.institution}</p>
                  </div>
                  {edu.gpa && (
                    <div className="text-right">
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center text-gray-300 mb-4">
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
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="modern-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">Microsoft Power BI</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">Excel Expert</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🐍</span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">Python Data Analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">💼</span>
                  </div>
                  <p className="text-sm font-medium text-gray-300">Business Analytics</p>
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
