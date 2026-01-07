/*
  A template for showing different polluted beach cases.
 */
import { Link } from 'react-router-dom'; 

export default function BeachCard({ beach }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-neutral-200 overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
      <div className="overflow-hidden">
        <img src={beach.img} alt={beach.name} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-800">{beach.name}</h3>
        <p className="text-cyan-700 font-medium mb-3 italic">{beach.country}</p>
        <p className="text-neutral-600 mb-6 line-clamp-2 h-12">{beach.desc}</p>
        
        <Link 
          to={`/beach/${beach.id}`} 
          className="font-bold text-cyan-700 group-hover:text-cyan-600 transition-colors"
        >
          Read More <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200">→</span>
        </Link>
      </div>
    </div>
  );
}