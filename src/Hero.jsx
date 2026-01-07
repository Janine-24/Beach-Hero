//vision and reality split-screen section
import { SITE_DATA } from './data';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation once the component is mounted
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-screen">
      {/* left side: OUR VISION */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden group">
        <img
          src={SITE_DATA.hero.vision.img}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          alt="Vision"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent flex flex-col justify-center items-center text-white p-6 text-center">
          <div className={`transform transition-all ease-in-out duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">{SITE_DATA.hero.vision.title}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-md">{SITE_DATA.hero.vision.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Right side: THE REALITY */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden group">
        <img
          src={SITE_DATA.hero.reality.img}
          className="w-full h-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105"
          alt="Reality"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent flex flex-col justify-center items-center text-white p-6 text-center">
          <div className={`transform transition-all ease-in-out duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">{SITE_DATA.hero.reality.title}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-md">{SITE_DATA.hero.reality.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}