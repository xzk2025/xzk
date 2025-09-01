import { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll event listener for dynamic navigation behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50; // 50px threshold
      
      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check in case page is loaded scrolled down
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    setActiveHref(href);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64; // Height of the fixed navigation bar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight - 20; // Additional 20px spacing
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };



  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'glass-effect-nav' : 'nav-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-sky-accent to-sky-accent-secondary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Khin Myo Hsak
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                aria-current={activeHref === item.href ? 'page' : undefined}
                className={`transition-colors duration-300 font-medium relative group nav-link focus:outline-none ${
                  isScrolled 
                    ? 'text-sky-text hover:text-sky-accent' 
                    : 'text-sky-text hover:text-sky-accent'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  activeHref === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                } ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-sky-accent to-sky-accent-secondary' 
                    : 'bg-gradient-to-r from-sky-accent to-sky-accent-secondary'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 nav-button ${
                isScrolled 
                  ? 'text-sky-text hover:text-sky-accent hover:bg-sky-accent/10' 
                  : 'text-sky-text hover:text-sky-accent hover:bg-sky-accent/10'
              }`}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="glass-effect-mobile-menu mt-2 rounded-xl border border-white/20 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-4 py-3 text-sky-text-secondary hover:text-sky-text hover:bg-white/10 transition-colors duration-300 font-medium nav-link"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}


      </div>
    </nav>
  );
};

export default Navigation;
