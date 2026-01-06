/** * MAIN APP ASSEMBLY
 * Manages navigation routes and combines modular components.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ UPDATED IMPORTS: Pointing to the 'components' folder
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeachCard from './components/BeachCard';
import Transition from './components/Transition';
import CausesPage from './components/CausesPage';
import ConsequencesPage from './components/ConsequencesPage';
import BeachDetail from './components/BeachDetail';
import ProtectionPage from './components/ProtectionPage';
import TakeAction from './components/Action'; // Matches Action.jsx
import ScrollToTop from './components/ScrollToTop';

// ✅ DATA IMPORT: Remains in the root src folder
import { SITE_DATA } from './data';

export default function App() {
  return (
    <Router> 
      <ScrollToTop />
      <div className="bg-slate-50 min-h-screen font-sans selection:bg-teal-100">
        {/* Global Navigation - Always Visible */}
        <Navbar />
        
        <Routes>
          {/* HOME PAGE ROUTE */}
          <Route path="/" element={
            <>
              <Hero />
              <section id="real-cases" className="max-w-7xl mx-auto py-24 px-6 text-center">
                <h2 className="text-3xl font-bold mb-16 text-slate-800 tracking-tight">
                  GLOBAL POLLUTION CASES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {SITE_DATA.beaches.map(beach => (
                    <BeachCard key={beach.id} beach={beach} />
                  ))}
                </div>
              </section>
              <Transition />
            </>
          } />

          {/* DYNAMIC SUB-PAGE ROUTES */}
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/consequences" element={<ConsequencesPage />} />
          <Route path="/beach/:id" element={<BeachDetail />} />
          <Route path="/protection" element={<ProtectionPage />} />
          <Route path="/take-action" element={<TakeAction />} />
        </Routes>

        {/* Global Footer */}
        <footer className="bg-slate-900 text-white py-12 text-center text-sm">
          <p>© 2026 BeachHero</p>
        </footer>
      </div>
    </Router>
  );
}