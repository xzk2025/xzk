import { Navigation, Header, WorkExperience, Skills, Education, Contact } from './components';

function App() {
  return (
    <div className="min-h-screen bg-sky-light text-sky-text font-['Inter']">
      {/* Navigation Bar */}
      <Navigation />
      
      {/* Main Container with responsive padding and top margin for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Header />
        </div>
        
        {/* Work Experience Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <WorkExperience />
        </div>
        
        {/* Skills Section */}
        <div className="py-4 sm:py-6 lg:py-8">
          <Skills />
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
