import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_DATA } from './data';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to determine the path for a given link
  const getPath = (link) => {
    const linkId = link.toLowerCase().replace(/\s+/g, '-');
    switch (link) {
      case 'Home': return '/';
      case 'Action': return '/#action';
      case 'Protection': return '/protection';
      default: return `/#${linkId}`;
    }
  };

  // Helper function to determine if a link is active
  const isLinkActive = (path) => {
    const currentPath = location.pathname + location.hash;
    if (path === '/') return currentPath === '/';
    return currentPath === path;
  };

  return (
    <>
      <header className="w-full flex justify-center p-4 fixed top-0 z-50">
        {/* Mobile-only Hamburger Menu on the left */}
        <div className="sm:hidden flex justify-start w-full px-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-full bg-white text-white shadow-sm" style={{ backgroundColor: 'white !important' }} // Force white background for debugging
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Desktop Navbar (hidden on mobile) */}
        <nav className="hidden sm:inline-flex items-center p-2 rounded-full bg-white/50 backdrop-blur-xl border border-white/20 shadow-lg">
          
          {/* Center: Desktop Navigation Links */}
          <div className="flex items-center gap-x-1 whitespace-nowrap px-4">
            {SITE_DATA.navLinks.map((link) => {
              const path = getPath(link);
              return (
                <Link
                  key={link}
                  to={path}
                  className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
                    isLinkActive(path)
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-900 hover:bg-gray-200/50'
                  }`}
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Full-Screen Popup */}
            <div
              className={`fixed inset-0 z-40 bg-cyan-50/70 backdrop-blur-lg transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}        onClick={() => setIsMenuOpen(false)} // Close menu when clicking on the overlay
      >
        <div className="flex flex-col items-center justify-center h-full gap-y-4">
            {SITE_DATA.navLinks.map((link) => {
              const path = getPath(link);
              return (
                <Link
                  key={link}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-3 rounded-full text-2xl font-semibold whitespace-nowrap transition-colors duration-300 ${
                    isLinkActive(path)
                      ? 'bg-white text-gray-900 shadow-md'
                      : 'text-gray-900'
                  }`}
                >
                  {link}
                </Link>
              );
            })}
        </div>

      </div>
    </>
  );
}