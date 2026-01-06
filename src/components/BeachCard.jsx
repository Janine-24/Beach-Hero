import React from 'react';
import { Link } from 'react-router-dom';
// 注意：这里不再引入 WasteChart

const BeachCard = ({ beach }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
      
      {/* 1. 图片区域 */}
      <div className="h-56 overflow-hidden relative group">
        <img
          src={beach.img}
          alt={beach.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <span className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">
          {beach.country}
        </span>
      </div>

      {/* 2. 内容区域 */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{beach.name}</h3>
          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <p className="text-slate-500 text-sm leading-relaxed mb-8 text-center line-clamp-3">
          {beach.desc}
        </p>

        {/* 这里删掉了 <WasteChart /> */}

        {/* 3. 按钮区域 */}
        <Link 
          to={`/beach/${beach.id}`} // 这一行会带用户去详情页
          className="mt-auto w-full py-3 rounded-xl border-2 border-teal-50 text-teal-600 font-bold text-sm hover:bg-teal-50 hover:border-teal-100 transition-all flex items-center justify-center gap-2 group"
        >
          Read Full Report
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
};

export default BeachCard;