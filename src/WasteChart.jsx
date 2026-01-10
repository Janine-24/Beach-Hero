import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Plastic', amount: 45, color: '#06b6d4' },
  { name: 'Glass', amount: 30, color: '#0ea5e9' },
  { name: 'Cigarettes', amount: 15, color: '#f59e0b' },
  { name: 'Metal', amount: 10, color: '#64748b' },
];


const allPhotos = [
  '/images/cleanup1.jpeg',
  '/images/cleanup2.jpeg',
  '/images/cleanup3.jpeg',
  '/images/cleanup4.jpeg',
  '/images/cleanup5.jpeg',
  '/images/cleanup6.jpeg',
  '/images/cleanup7.jpeg',
  '/images/cleanup8.jpeg',
  '/images/cleanup9.jpeg',
  '/images/cleanup10.jpeg',
  '/images/cleanup11.jpeg',
  '/images/cleanup12.jpeg',
];

export default function WasteChart() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className="w-full py-20 bg-neutral-50/50 border-y border-neutral-200 text-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4 uppercase italic">Cleanup Impact Metrics</h2>
          <p className="text-neutral-600 max-w-2xl text-lg">
            Our team analyzed the waste collected during the Port Dickson beach drive. 
            This data helps us understand pollutants and plan better protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 左侧：图表卡片 */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 h-[530px] flex flex-col">
            <h3 className="text-xl font-semibold mb-8">Waste Distribution (kg)</h3>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="amount" radius={[6, 6, 6, 6]} barSize={50}>
                    {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

      
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
   
                <div className="bg-neutral-200 rounded-2xl h-44 overflow-hidden shadow-inner cursor-pointer group relative" onClick={() => setShowGallery(true)}>
                  <img src={allPhotos[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Cleanup 1" />
                </div>
     
                <div className="bg-cyan-900 rounded-2xl p-6 text-white shadow-lg cursor-pointer hover:bg-cyan-850 transition-colors" onClick={() => setShowGallery(true)}>
                  <p className="text-4xl font-bold">50+</p>
                  <p className="text-cyan-200 text-sm mt-1">Kilograms Collected</p>
                  <p className="text-xs text-cyan-300/60 mt-4 underline underline-offset-4 font-medium">View More Photos →</p>
                </div>
              </div>
      
              <div className="bg-neutral-200 rounded-2xl h-full overflow-hidden shadow-inner min-h-[300px] cursor-pointer group relative" onClick={() => setShowGallery(true)}>
                <img src={allPhotos[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Cleanup 2" />
              </div>
            </div>
            

            <div className="bg-white p-7 rounded-2xl border border-neutral-100 shadow-sm leading-relaxed">
              <h4 className="font-bold text-neutral-800 mb-2 text-lg">Volunteer Effort</h4>
              <p className="text-sm text-neutral-500">
                Over 10 volunteers spent 4 hours across 2km of coastline. 
                The most significant find was microplastics near the tide line.
              </p>
            </div>
          </div>

        </div>
      </div>

  
      {showGallery && (
        <div className="fixed inset-0 z-[999] bg-black/95 flex flex-col items-center p-8 overflow-y-auto">
          <div className="w-full max-w-6xl">
            <div className="flex justify-between items-center mb-10 sticky top-0 bg-black/0 py-4 z-10">
              <h3 className="text-white text-3xl font-bold tracking-tight">Full Cleanup Gallery</h3>
              <button 
                onClick={() => setShowGallery(false)}
                className="text-white bg-white/10 hover:bg-white/20 w-12 h-12 flex items-center justify-center rounded-full transition-all text-xl backdrop-blur-md"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPhotos.map((src, i) => (
                <div key={i} className="group aspect-square bg-neutral-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                  <img src={src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={`Collection ${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}