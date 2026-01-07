//section lead to causes and consequences pages
import { Link } from 'react-router-dom';

export default function Transition() { // export default
  return (
    <section id="causes-and-consequences" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 h-[500px]">
        {/* left side path: Causes */}
        <Link to="/causes" className="flex-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce" 
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110" 
            alt="Causes"
          />
          <div className="absolute inset-0 bg-cyan-800/70 transition-colors duration-300 group-hover:bg-cyan-900/80 flex flex-col justify-center items-center text-white p-4">
            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
              <h2 className="text-4xl font-bold tracking-widest">CAUSES</h2>
              <p className="mt-2 opacity-80 text-center">What is driving the crisis?</p>
            </div>
            <div className="mt-6 px-8 py-2 bg-white text-cyan-900 rounded-full font-bold group-hover:bg-cyan-50 transition-all duration-300 transform group-hover:scale-105">
              Learn More
            </div>
          </div>
        </Link>

        {/* right side path: Consequences */}
        <Link to="/consequences" className="flex-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f" 
            className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110" 
            alt="Consequences"
          />
          <div className="absolute inset-0 bg-orange-800/70 transition-colors duration-300 group-hover:bg-orange-900/80 flex flex-col justify-center items-center text-white p-4">
            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
              <h2 className="text-4xl font-bold tracking-widest">CONSEQUENCES</h2>
              <p className="mt-2 opacity-80 text-center">The impact on our world.</p>
            </div>
            <div className="mt-6 px-8 py-2 bg-white text-orange-900 rounded-full font-bold group-hover:bg-orange-50 transition-all duration-300 transform group-hover:scale-105">
              Learn More
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}