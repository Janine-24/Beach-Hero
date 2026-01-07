import React from 'react';

// ==========================================
// 1. DATA: Put all your text content here
// ==========================================
const consequencesData = [
  {
    id: 1,
    title: "1. Health Hazards for Humans",
    description: "Polluted beaches can carry harmful bacteria, sharp debris, and toxic chemicals that cause infections, skin irritations, or respiratory problems.",
    example: "Swimmers at Kamilo Beach in Hawaii risk cuts from broken glass and infections from bacteria."
  },
  {
    id: 2,
    title: "2. Economic Loss",
    description: "Polluted beaches can drive tourists away, affecting local businesses, hotels, and fisheries. Cleaning costs also strain local governments.",
    example: "Loji Beach in Indonesia has seen a decline in tourist visits due to excessive plastic pollution."
  },
  {
    id: 3,
    title: "3. Harm to Marine Life",
    description: "Pollutants like plastics, chemicals, and oil spills can be ingested by marine animals or entangle them, leading to injury, suffocation, or death.",
    example: "Sea turtles often mistake plastic bags for jellyfish, causing starvation."
  },
  {
    id: 4,
    title: "4. Damage to Marine Ecosystems",
    description: "Pollution disrupts the balance of marine ecosystems, killing coral reefs, seagrass beds, and other habitats that support biodiversity.",
    example: "Oil spills along the Gulf Coast have killed large numbers of fish and damaged wetlands."
  },
  {
    id: 5,
    title: "5. Aesthetic Degradation",
    description: "Littered beaches look unsightly and unattractive. This discourages conservation efforts if people feel the beach is “already ruined.”",
    example: "Kamilo Beach is nicknamed “Plastic Beach” due to tons of debris."
  }
];

// ==========================================
// 2. HELPER COMPONENT: The design for one item
// ==========================================
function ConsequenceItem({ title, description, example }) {
  return (
    <div className="flex gap-6 flex-col md:flex-row border-b border-neutral-200 last:border-0 pb-8 last:pb-0">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-cyan-900 mb-3">{title}</h2>
        <p className="text-neutral-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
          <p className="text-sm text-orange-900 font-medium">
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
export default function ConsequencesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-800">
      
      {/* HERO HEADER SECTION */}
      <div className="bg-cyan-950 text-white pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Image */}
          <div className="relative group">
            <img 
              src="https://wallpaperaccess.com/full/212200.jpg" 
              alt="Beach Cleanup" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover transform transition duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Header Text */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-white/30 rounded-full text-sm font-semibold tracking-wide backdrop-blur-sm">
              Conservation
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Consequences of Pollution:<br/>
              Why We Must Act Now
            </h1>
            
            <p className="text-lg text-neutral-300 leading-relaxed">
              Beaches are a key part of the ocean ecosystem. Here are the critical problems faced by our coastlines and why it matters to you.
            </p>

          </div>
        </div>
      </div>

      {/* BLOG CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* === MAIN CONTENT (LEFT) === */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro */}
            <div className="prose prose-lg text-neutral-600">
              <p className="text-xl leading-relaxed mb-6">
                <span className="font-bold text-neutral-900">Beaches are essential natural features</span>, comprising distinct zones such as the backshore, foreshore, and shoreface. They serve vital roles in coastal disaster defense, habitat provision, and tourism.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Despite their significance, many coastal nations prioritize beach preservation. However, pollution not only spoils the natural beauty but creates specific, dangerous consequences.
              </p>
            </div>

            <hr className="border-neutral-200" />

            {/* LOOP THROUGH DATA TO RENDER ITEMS */}
            <div className="flex flex-col gap-10">
              {consequencesData.map((item) => (
                <ConsequenceItem 
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  example={item.example}
                />
              ))}
            </div>

          </div>

          {/* === SIDEBAR (RIGHT) === */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* About Widget */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-800 mb-4 border-b pb-2">About Ocean Info</h3>
                <img 
                  src="https://wallpaperaccess.com/full/218482.jpg" 
                  alt="Coral Reef" 
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  At Ocean Info, we dive deep into ocean-related topics such as sealife, exploration of the sea, rivers, and geographical importance.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}