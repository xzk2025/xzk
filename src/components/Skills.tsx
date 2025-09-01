

interface Skill {
  name: string;
  icon: string;
  category: string;
  level: number; // 0-100
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Technical Skills
    { name: "Advanced Excel", icon: "📊", category: "Technical Skills", level: 95 },
    { name: "Macro VBA", icon: "⚙️", category: "Technical Skills", level: 90 },
    { name: "Power BI", icon: "📈", category: "Technical Skills", level: 85 },
    { name: "Power Query", icon: "🔍", category: "Technical Skills", level: 88 },
    { name: "Outlook", icon: "📧", category: "Technical Skills", level: 90 },
    { name: "Dynamics 365 Business Central", icon: "🏢", category: "Technical Skills", level: 85 },
    { name: "Python", icon: "🐍", category: "Technical Skills", level: 80 },
    { name: "SQL", icon: "🗄️", category: "Technical Skills", level: 85 }
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-sky-accent to-sky-accent-secondary";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const technicalSkills = skills.filter(skill => skill.category === "Technical Skills");

  return (
    <section id="skills" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sky-text mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-accent to-sky-accent-secondary mx-auto rounded-full"></div>
            <p className="text-sky-text-secondary mt-4 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise across data analysis, 
              programming, and development technologies.
            </p>
          </div>
          
          {/* Technical Skills Layout */}
          <div className="mb-12">
            <div className="modern-card p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-accent to-sky-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-sky-text mb-2">Technical Skills</h3>
                <p className="text-sky-text-muted">Core technical competencies and tools</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-4 bg-sky-lighter rounded-lg border border-sky-border-light hover:border-sky-border transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-accent/20 to-sky-accent-secondary/20 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{skill.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sky-text font-medium">{skill.name}</h4>
                        <p className="text-sky-text-muted text-sm">{getSkillLevelText(skill.level)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-sky-border rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${getSkillLevelColor(skill.level)} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sky-text-muted text-sm font-medium w-8 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Overview Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="modern-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-accent to-sky-accent-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-sky-text mb-2">Data Analysis</h4>
              <p className="text-sky-text-muted text-sm">Business intelligence and reporting</p>
            </div>
            
            <div className="modern-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-sky-text mb-2">Technical Skills</h4>
              <p className="text-sky-text-muted text-sm">Core competencies and tools</p>
            </div>
            
            <div className="modern-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-accent-secondary to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-sky-text mb-2">Career Development</h4>
              <p className="text-sky-text-muted text-sm">Continuous learning and growth</p>
            </div>
          </div>
          
          {/* Career Development Section */}
          <div className="modern-card p-8">
            <h3 className="text-2xl font-bold text-sky-text text-center mb-8">Career Development Focus</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-sky-text mb-4">Currently Enhancing Skills In:</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">Python</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">Advanced Power BI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">SQL</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-sky-accent to-sky-accent-secondary rounded-full mr-3"></div>
                    <span className="text-sky-text-secondary">Statistics</span>
                  </div>
                </div>
                <p className="text-sky-text-muted text-sm mt-4">
                  Preparing for a career in Data Engineering with focus on data manipulation, ETL workflows, and building scalable data solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-sky-text mb-4">Soft Skills & Attributes:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <span className="skill-badge text-center text-sm">Teamwork</span>
                  <span className="skill-badge text-center text-sm">Problem Solving</span>
                  <span className="skill-badge text-center text-sm">Time Management</span>
                  <span className="skill-badge text-center text-sm">Can Work Under Pressure</span>
                  <span className="skill-badge text-center text-sm">Good Presentation</span>
                  <span className="skill-badge text-center text-sm">Independent, Flexible</span>
                  <span className="skill-badge text-center text-sm">Positive Attitude</span>
                  <span className="skill-badge text-center text-sm">Strong Desire to Learn</span>
                </div>
                <p className="text-sky-text-muted text-sm mt-4">
                  Actively engaged in hands-on projects and structured learning to strengthen real-world problem-solving and technical proficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
