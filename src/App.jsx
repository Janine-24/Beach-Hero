import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import BeachCard from './BeachCard';
import Transition from './Transition';
import CausesPage from './CausesPage';
import ConsequencesPage from './ConsequencesPage';
import BeachDetail from './BeachDetail.jsx';
import ProtectionPage from './ProtectionPage.jsx';
import { SITE_DATA } from './data';
import TakeAction from './Action.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import WasteChart from './WasteChart';

export default function App() {
  return (
    <Router> 
      <ScrollToTop />
      <div className="bg-neutral-100 min-h-screen font-sans selection:bg-cyan-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              
              <section id="real-cases" className="max-w-7xl mx-auto py-24 px-6 text-center">
                <h2 className="text-3xl font-bold mb-16 text-neutral-800 tracking-tight">
                  GLOBAL POLLUTION CASES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {SITE_DATA.beaches.map(beach => (
                    <BeachCard key={beach.id} beach={beach} />
                  ))}
                </div>
              </section>

              <Transition />
              <TakeAction />

              {/* 图表现在放在了 TakeAction 之后，也就是首页的最底部 */}
              <div className="pb-20"> 
                <WasteChart />
              </div>
            </>
          } />

          <Route path="/causes" element={<CausesPage />} />
          <Route path="/consequences" element={<ConsequencesPage />} />
          <Route path="/beach/:id" element={<BeachDetail />} />
          <Route path="/protection" element={<ProtectionPage />} />
        </Routes>

        <footer className="bg-cyan-950 text-white py-12 text-center text-sm">
          <p>© 2026 BeachHero</p>
        </footer>
      </div>
    </Router>
  );
}