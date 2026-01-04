//the sticky top bar with menu links and a blurred background
import { SITE_DATA } from './data'; //import data
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Website Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-teal-600 text-xl tracking-tight">
          <span role="img" aria-label="wave emoji">🌊</span>
          <span>Beach Hero</span>
        </Link>
        
        {/* Navigation menu */}
        <div className="space-x-8 hidden md:flex">
          {SITE_DATA.navLinks.map((link) => {
            const linkId = link.toLowerCase().replace(/\s+/g, '-');
            let path;

            switch (link) {
              case 'Home':
                path = '/';
                break;
              case 'Action':
                path = '/take-action';
                break;
              case 'Protection':
                path = '/protection';
                break;
              default:
                // For "Real Cases", "Causes and Consequences", and "Protection"
                path = `/#${linkId}`;
            }

            return (
              <Link
                key={link} 
                to={path} 
                className="text-gray-600 hover:text-teal-600 font-medium transition-colors"
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}