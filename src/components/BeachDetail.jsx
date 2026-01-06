import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SITE_DATA } from '../data'; 
import WasteChart from './WasteChart'; // ✅ 确保引入了图表组件

export default function BeachDetail() {
  const { id } = useParams();
  
  const beach = SITE_DATA.beaches.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!beach) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Beach not found</h2>
        <Link to="/" className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* HERO SECTION */}
      <div className="h-[70vh] relative w-full">
        <img 
          src={beach.img} 
          className="w-full h-full object-cover" 
          alt={beach.name} 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute top-24 left-6 z-20">
          <Link to="/" className="text-white border border-white/50 px-6 py-2 rounded-full font-bold hover:bg-white hover:text-teal-900 transition backdrop-blur-sm">
            ← Back to Home
          </Link>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
          <p className="tracking-[0.2em] font-bold text-teal-200 uppercase mb-4 text-lg">
            {beach.country}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            {beach.name}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl font-light opacity-90">
            {beach.desc}
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10">
        
        {/* Intro Card containing the Chart */}
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-10">
           <h3 className="text-2xl font-bold text-teal-800 mb-6 border-b border-teal-100 pb-4">
            The Environmental Impact
          </h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
             {beach.content.intro} 
          </p>

          {/* ✅ 关键修改在这里： */}
          {/* 我去掉了 beach.stats 判断，改为直接调用图表并传入地点名字 */}
          {/* 这样它就会去 Google Sheet 找对应的数据，而不是读死的数据 */}
          <div className="border-t border-slate-100 pt-8">
            <WasteChart locationFilter={beach.name} />
          </div>

        </div>
        
        {/* Impact Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition">
            <span className="text-4xl">🐠</span>
            <h4 className="font-bold text-xl mt-4 mb-2 text-blue-900">Marine Life</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {beach.content.marineText}
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 hover:shadow-lg transition">
            <span className="text-4xl">📉</span>
            <h4 className="font-bold text-xl mt-4 mb-2 text-amber-900">Economic Loss</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {beach.content.economicText}
            </p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 hover:shadow-lg transition">
            <span className="text-4xl">🏞️</span>
            <h4 className="font-bold text-xl mt-4 mb-2 text-emerald-900">Habitat Destruction</h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {beach.content.habitatText}
            </p>
          </div>
        </div>
        
        {/* Outro */}
        <div className="bg-slate-900 text-slate-300 p-8 rounded-xl shadow-lg">
           <h4 className="text-white font-bold text-lg mb-4">Long Term Consequences</h4>
           <p className="leading-relaxed">
            {beach.content.outro}
           </p>
           
           <div className="mt-8">
             <Link to="/take-action" className="inline-block bg-teal-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-teal-400 transition">
               Take Action Now
             </Link>
           </div>
        </div>

      </div>
    </div>
  );
}