import { useState, useEffect, useRef } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsSettingsOpen(false);
  };

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`transition-colors duration-300 font-medium relative group nav-link ${
                  isScrolled 
                    ? 'text-sky-text hover:text-sky-accent' 
                    : 'text-sky-text hover:text-sky-accent'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-sky-accent to-sky-accent-secondary' 
                    : 'bg-gradient-to-r from-sky-accent to-sky-accent-secondary'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Settings Icon */}
          <div className="flex items-center space-x-4" ref={settingsRef}>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`p-2 rounded-lg transition-all duration-300 group nav-button ${
                isScrolled 
                  ? 'text-sky-text hover:text-sky-accent hover:bg-sky-accent/10' 
                  : 'text-sky-text hover:text-sky-accent hover:bg-sky-accent/10'
              }`}
              aria-label="Settings"
            >
              <svg 
                className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
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

        {/* Settings Dropdown */}
        {isSettingsOpen && (
          <div className="absolute top-full right-4 mt-2 w-48 glass-effect-dropdown rounded-xl shadow-2xl border border-white/20">
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-sky-text-muted border-b border-white/10">
                Settings
              </div>
              <button className="w-full text-left px-4 py-2 text-sm text-sky-text-secondary hover:text-sky-text hover:bg-white/10 transition-colors duration-300 nav-link">
                Theme
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-sky-text-secondary hover:text-sky-text hover:bg-white/10 transition-colors duration-300 nav-link">
                Language
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-sky-text-secondary hover:text-sky-text hover:bg-white/10 transition-colors duration-300 nav-link">
                Accessibility
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
