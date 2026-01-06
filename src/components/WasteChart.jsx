import React, { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';

// 1. 这里接收 locationFilter 参数
const WasteChart = ({ locationFilter }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  // 你的 CSV 链接
  const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnVQdBu5iF7AFH1yGso4YamPYgNFAKVSQWZoXqOMJzkI0HnCyfK777L-hZ3umCaTEM3hFMdJgjB4nW/pub?output=csv';

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (results) => {
        let rows = results.data;

        // 2. 这里进行筛选：如果这一行数据的地点包含了传进来的名字，就保留
        if (locationFilter) {
          rows = rows.filter(row => 
            row['Select the cleanup location'] && 
            row['Select the cleanup location'].includes(locationFilter)
          );
        }

        // 3. 统计筛选后的数据
        let plasticCount = 0;
        let styrofoamCount = 0;
        let householdCount = 0;
        let organicCount = 0;

        rows.forEach(row => {
          plasticCount += parseInt(row['Number of Plastic Bottles collected']) || 0;
          styrofoamCount += parseInt(row['Number of Styrofoam pieces collected']) || 0;
          householdCount += parseInt(row['Number of Household Waste items collected']) || 0;
          organicCount += parseInt(row['Number of Organic Matter items collected']) || 0;
        });

        const total = plasticCount + styrofoamCount + householdCount + organicCount;
        setTotalItems(total);

        const formattedData = [
          { label: "Plastic Bottles", count: plasticCount, value: total > 0 ? Math.round((plasticCount / total) * 100) : 0, color: "#FBBF24" },
          { label: "Styrofoam", count: styrofoamCount, value: total > 0 ? Math.round((styrofoamCount / total) * 100) : 0, color: "#F87171" },
          { label: "Household Waste", count: householdCount, value: total > 0 ? Math.round((householdCount / total) * 100) : 0, color: "#818CF8" },
          { label: "Organic Matter", count: organicCount, value: total > 0 ? Math.round((organicCount / total) * 100) : 0, color: "#34D399" }
        ];

        formattedData.sort((a, b) => b.value - a.value);
        setChartData(formattedData);
        setLoading(false);
      }
    });
  }, [locationFilter]); // 当地点变了，重新跑一次

  // ... (SVG图标部分不用变) ...
  const getIconSvg = (label, color) => {
    const l = label.toLowerCase();
    const props = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };
    if (l.includes('styrofoam')) return <svg {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>;
    if (l.includes('bottle') || l.includes('plastic')) return <svg {...props}><path d="M9 2h6v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2z" /><path d="M8 7h8a2 2 0 0 1 2 2v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2z" /><line x1="12" y1="12" x2="12" y2="18" /></svg>;
    if (l.includes('organic')) return <svg {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>;
    if (l.includes('household') || l.includes('waste')) return <svg {...props}><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>;
    return <svg {...props}><path d="M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z"/><path d="M10 8l4 4-4 4"/></svg>;
  };

  const calculatedChartData = useMemo(() => {
    let accumulatedPercent = 0;
    const radius = 86; const circumference = 2 * Math.PI * radius; const gapLength = 4;
    return chartData.map((item, index) => {
      const totalLength = (item.value / 100) * circumference;
      const drawLength = chartData.length > 1 ? Math.max(0, totalLength - gapLength) : totalLength;
      const strokeDasharray = `${drawLength} ${circumference - drawLength}`;
      const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
      accumulatedPercent += item.value;
      return { ...item, strokeDasharray, strokeDashoffset };
    });
  }, [chartData]);

  const activeItem = activeIndex !== null ? chartData[activeIndex] : null;

  if (loading) return <div className="text-center p-10 text-slate-500 animate-pulse">Loading data...</div>;

  if (totalItems === 0) return (
    <div className="text-center p-10 bg-slate-50 rounded-xl border border-dashed border-slate-300">
      <p className="text-slate-500">No data for {locationFilter || 'this location'}.</p>
    </div>
  );

  return (
    <div className="w-full mt-10">
      <style>{`@keyframes slideUpFade { 0% { opacity: 0; transform: translateY(8px) scale(0.98); } 100% { opacity: 1; transform: translateY(0) scale(1); } } .animate-premium-fade { animation: slideUpFade 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }`}</style>
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-teal-100 p-2 rounded-lg text-2xl">📊</div>
        <div>
          <h4 className="text-xl font-bold text-slate-800">Community Cleanup Stats</h4>
          <p className="text-sm text-slate-500">Live data: <span className="font-bold text-teal-600">{totalItems} items</span></p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <div className="relative w-64 h-64 flex-shrink-0 group">
          <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90" style={{ overflow: 'visible' }}>
            <circle cx="100" cy="100" r="86" fill="transparent" stroke="#f1f5f9" strokeWidth="16" />
            {calculatedChartData.map((item, index) => {
              const isActive = activeIndex === index; const hasActive = activeIndex !== null;
              return (<circle key={index} cx="100" cy="100" r="86" fill="transparent" stroke={item.color} strokeWidth={isActive ? 24 : 16} strokeDasharray={item.strokeDasharray} strokeDashoffset={item.strokeDashoffset} strokeLinecap="butt" className={`transition-all duration-300 ease-out cursor-pointer ${hasActive && !isActive ? 'opacity-30' : 'opacity-100'}`} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)} />);
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
             <div key={activeItem ? activeItem.label : 'total'} className="flex flex-col items-center animate-premium-fade">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-1">{activeItem ? activeItem.label : 'Total Items'}</span>
              <span className="text-4xl font-black tracking-tight" style={{ color: activeItem ? activeItem.color : '#1e293b' }}>{activeItem ? `${activeItem.value}%` : totalItems}</span>
              <span className="text-[10px] font-bold mt-2 px-2 py-0.5 rounded-md uppercase tracking-wide bg-slate-100 text-slate-500">{activeItem ? `${activeItem.count} pcs` : 'Collected'}</span>
             </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {chartData.map((item, index) => {
             const isActive = activeIndex === index;
             return (
              <div key={index} className={`flex items-center p-3 rounded-xl border transition-all duration-200 cursor-pointer ${isActive ? 'bg-slate-50 border-transparent shadow-sm translate-x-1' : 'bg-transparent border-transparent hover:bg-slate-50'}`} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(null)}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: isActive ? `${item.color}20` : '#f8fafc' }}>{getIconSvg(item.label, item.color)}</div>
                <div className="flex-1 min-w-0"><div className="flex justify-between items-center"><span className={`text-sm font-medium truncate pr-2 ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>{item.label}</span><span className="font-bold text-slate-700">{item.value}%</span></div><div className="w-full bg-slate-100 h-1 rounded-full mt-1.5 overflow-hidden"><div className="h-full rounded-full transition-all duration-300" style={{ width: isActive ? '100%' : `${item.value}%`, backgroundColor: item.color, opacity: isActive ? 1 : 0.5 }}></div></div></div>
              </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export default WasteChart;