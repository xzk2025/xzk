import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Data Analytics Dashboard",
      description: "A comprehensive business intelligence dashboard built with Power BI and Python. Features real-time data visualization, automated reporting, and interactive filtering capabilities.",
      technologies: ["Power BI", "Python", "SQL", "Power Query", "VBA"],
      category: "Data Analysis",
      githubUrl: "https://github.com/khinmyohsak/data-dashboard",
      liveUrl: "https://dashboard.example.com"
    },
    {
      id: 2,
      title: "E-commerce Analytics Platform",
      description: "Full-stack web application for e-commerce data analysis. Includes customer segmentation, sales forecasting, and inventory optimization features.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "Chart.js"],
      category: "Web Development",
      githubUrl: "https://github.com/khinmyohsak/ecommerce-analytics",
      liveUrl: "https://analytics.example.com"
    },
    {
      id: 3,
      title: "Automated Reporting System",
      description: "VBA-powered Excel automation system that generates 27+ monthly reports automatically. Reduces manual work by 60% and improves accuracy.",
      technologies: ["VBA", "Excel", "Power Query", "Power BI"],
      category: "Automation",
      githubUrl: "https://github.com/khinmyohsak/auto-reports"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features sky-inspired theme, smooth animations, and professional design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "Web Development",
      githubUrl: "https://github.com/khinmyohsak/portfolio",
      liveUrl: "https://khinmyohsak.dev"
    },
    {
      id: 5,
      title: "Customer Segmentation Analysis",
      description: "Machine learning project for customer segmentation using clustering algorithms. Provides actionable insights for marketing strategies.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "SQL"],
      category: "Data Analysis",
      githubUrl: "https://github.com/khinmyohsak/customer-segmentation"
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "Web-based inventory management solution with real-time tracking, automated alerts, and integration with Dynamics 365 Business Central.",
      technologies: ["React", "Node.js", "Dynamics 365", "SQL Server", "Azure"],
      category: "Business Solutions",
      githubUrl: "https://github.com/khinmyohsak/inventory-system",
      liveUrl: "https://inventory.example.com"
    }
  ];

  const categories = ["All", "Data Analysis", "Web Development", "Automation", "Business Solutions"];

  return (
    <section id="projects" className="section-container py-16 mb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sky-text mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-accent to-sky-accent-secondary mx-auto rounded-full"></div>
            <p className="text-sky-text-secondary mt-4 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in data analysis, web development, 
              and business automation solutions.
            </p>
          </div>
          
          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="modern-card group overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-sky-accent/10 to-sky-accent-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-accent to-sky-accent-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">
                        {project.category === "Data Analysis" && "📊"}
                        {project.category === "Web Development" && "💻"}
                        {project.category === "Automation" && "⚙️"}
                        {project.category === "Business Solutions" && "💼"}
                      </span>
                    </div>
                    <span className="text-sm text-sky-text-muted font-medium">{project.category}</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sky-text mb-3 group-hover:text-sky-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-sky-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-sky-text mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="skill-badge text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-sky-lighter hover:bg-sky-soft text-sky-text text-center py-2 px-4 rounded-lg transition-colors duration-300 font-medium text-sm"
                      >
                        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-sky-accent to-sky-accent-secondary hover:from-sky-accent/90 hover:to-sky-accent-secondary/90 text-white text-center py-2 px-4 rounded-lg transition-all duration-300 font-medium text-sm"
                      >
                        <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="modern-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-sky-text mb-4">Interested in Working Together?</h3>
              <p className="text-sky-text-secondary mb-6">
                I'm always open to discussing new projects and opportunities. 
                Let's create something amazing together!
              </p>
              <a 
                href="#contact" 
                className="modern-button bg-gradient-to-r from-sky-accent to-sky-accent-secondary text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 transform inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
