import React from 'react';

// ==========================================
// 1. DATA: Causes Content
// ==========================================
const causesData = [
  {
    id: 1,
    title: "1. Plastic Waste and Littering",
    description: "Improper disposal of plastic bottles, bags, and packaging leads to accumulation on beaches and in oceans, where it breaks into microplastics.",
    example: "Single-use plastics discarded by beachgoers often wash up on shores, like the plastic debris at Kamilo Beach."
  },
  {
    id: 2,
    title: "2. Industrial Waste and Chemical Runoff",
    description: "Factories discharge chemicals, heavy metals, and untreated wastewater into rivers that eventually flow to beaches, contaminating water and sand.",
    example: "In Southeast Asia, textile factories release dye chemicals into rivers, polluting beaches downstream and killing aquatic life."
  },
  {
    id: 3,
    title: "3. Oil Spills",
    description: "Accidental or operational oil spills from ships and offshore drilling coat beaches and marine life, creating long-lasting environmental damage.",
    example: "The Deepwater Horizon oil spill in 2010 caused extensive oil pollution along Gulf Coast beaches, harming wildlife and local economies."
  },
  {
    id: 4,
    title: "4. Tourism and Recreational Activities",
    description: "High tourist traffic can lead to trash, food waste, cigarette butts, and other pollutants being left behind, particularly when there are inadequate disposal facilities.",
    example: "During peak season, Bali’s beaches accumulate large amounts of litter from tourists, affecting both marine life and the local fishing industry."
  },
  {
    id: 5,
    title: "5. Marine Debris from Ships and Fishing",
    description: "Nets, ropes, and other fishing gear discarded at sea or lost from ships can drift and accumulate on beaches, entangling animals or polluting sand and water.",
    example: "Ghost nets from fishing operations frequently wash up on Indonesian beaches, trapping turtles and seabirds."
  }
];

// ==========================================
// 2. HELPER COMPONENT: The design for one item
// ==========================================
function CauseItem({ title, description, example }) {
  return (
    <div className="flex gap-6 flex-col md:flex-row border-b border-slate-100 last:border-0 pb-8 last:pb-0">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-teal-800 mb-3">{title}</h2>
        <p className="text-slate-600 mb-4 leading-relaxed">
          {description}
        </p>
        {/* Changed style to Amber (Orange) to distinguish from Red Consequences */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
          <p className="text-sm text-amber-900 font-medium">
            <span className="font-bold">Real World Example:</span> {example}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
export default function CausesPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* ==========================
          SECTION 1: HERO HEADER 
      ========================== */}
      <div className="bg-[#002B49] text-white pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Hero Image */}
          <div className="relative group">
            {/* ▼▼▼ CHANGE HERO IMAGE HERE (Image of pollution/plastic) ▼▼▼ */}
            <img 
              src="https://www.americanoceans.org/wp-content/uploads/2023/06/ocean-pollution-1536x861.jpeg" 
              alt="Plastic Pollution on Beach" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover transform transition duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* RIGHT: Header Text */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
              Awareness
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pollution Causes:<br/>
              Where Does It Come From?
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Human activities and negligence are the root of beach pollution. Understanding these sources is the first step toward a cleaner future.
            </p>

          </div>

        </div>
      </div>

      {/* ==========================
          SECTION 2: BLOG CONTENT
      ========================== */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* === MAIN CONTENT (Left side) === */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro Paragraphs */}
            <div className="prose prose-lg text-slate-600">
              <p className="text-xl leading-relaxed mb-6">
                <span className="font-bold text-slate-900">Beaches are natural treasures</span> that provide recreation, support marine life, and boost local economies. However, human activities and environmental negligence have led to increasing beach pollution.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                This pollution comes from various sources that not only harm marine ecosystems but also affect communities that rely on clean beaches. Below are the primary culprits.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* LOOP THROUGH DATA TO RENDER ITEMS */}
            <div className="flex flex-col gap-10">
              {causesData.map((item) => (
                <CauseItem 
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  example={item.example}
                />
              ))}
            </div>

          </div>

          {/* === SIDEBAR (Right side) === */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* About Widget */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Did You Know?</h3>
                 {/* ▼▼▼ SIDEBAR IMAGE ▼▼▼ */}
                <img 
                  src="https://nationaltoday.com/wp-content/uploads/2021/05/Turtle-1.jpg" 
                  alt="Turtle" 
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Over 80% of marine pollution comes from land-based activities. Small changes in our daily lives can prevent debris from ever reaching the ocean.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}