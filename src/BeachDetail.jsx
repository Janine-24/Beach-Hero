import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from './data';

export default function BeachDetail() {
  const { id } = useParams();
  const beach = SITE_DATA.beaches.find(b => b.id === id);

  if (!beach) return <div className="text-center py-20">Beach not found.</div>;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* 1. FULL SCREEN HERO SECTION  */}
      <div className="h-screen relative w-full">
        <img 
          src={beach.img} 
          className="w-full h-full object-cover" 
          alt={beach.name} 
        />
        <div className="absolute inset-0 bg-cyan-950/60"></div>
        <div className="absolute top-24 left-6 z-20">
          <Link to="/" className="text-white border border-white/50 px-6 py-2 rounded-full font-bold hover:bg-white hover:text-cyan-900 transition backdrop-blur-sm">
            ← Back to Home
          </Link>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <p className="tracking-[0.2em] font-bold text-cyan-200 uppercase mb-4 text-lg">
            {beach.country}
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
            {beach.name}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light opacity-90">
            {beach.desc}
          </p>
        </div>
        <a href="#real-cases" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-cyan-200 transition">
          ↓ Scroll for Details
        </a>
      </div>

      {/* 2. DETAILED CONTENT SECTION */}
      <div id="real-cases" className="max-w-4xl mx-auto px-6 py-24">
        <div className="prose prose-lg text-neutral-600 leading-relaxed mx-auto">
          
          <h3 className="text-3xl font-bold text-cyan-900 mb-8 border-b border-cyan-100 pb-4">
            The Environmental Impact
          </h3>

          {/* Intro Paragraph */}
          <p className="text-xl mb-8">
             <span className="font-bold text-cyan-800 mr-2">{beach.name}:</span>
             {beach.content.intro} 
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 my-12">
            
            {/* Marine Life Card */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200">
              <span className="text-4xl">🐠</span>
              <h4 className="font-bold text-xl mt-4 mb-2 text-neutral-800">Marine Life</h4>
              
              {/* Marine Text */}
              <p className="text-sm">
                {beach.content.marineText}
              </p>
            </div>

            {/* Economic Loss Card */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200">
              <span className="text-4xl">📉</span>
              <h4 className="font-bold text-xl mt-4 mb-2 text-neutral-800">Economic Loss</h4>
              
              {/* Economic Text */}
              <p className="text-sm">
                {beach.content.economicText}
              </p>
            </div>

            {/* Habitat Destruction Card */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200">
              <span className="text-4xl">🏞️</span>
              <h4 className="font-bold text-xl mt-4 mb-2 text-neutral-800">Habitat Destruction</h4>
              
              {/* This content is now dynamic */}
              <p className="text-sm">
                {beach.content.habitatText}
              </p>
            </div>

          </div>
          
          {/* Outro Paragraph */}
          <p>
            {beach.content.outro}
          </p>

        </div>
      </div>
    </div>
  );
}