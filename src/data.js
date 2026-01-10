//for changing website pic and word
//store all editable text ,image urls and button labels
export const SITE_DATA = {
  navLinks: ["Home", "Real Cases", "Causes and Consequences", "Protection", "Action"],
  hero: {
    vision: {
      title: "OUR VISION",
      subtitle: "Pure Coastlines: A Pristine Future",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    
    },
    reality: {
      title: "THE REALITY",
      subtitle: "A Tidal Wave of Trash: A Global Crisis",
      img: "https://static.vecteezy.com/system/resources/previews/028/713/655/large_2x/coastal-area-strewn-with-plastic-bottles-and-waste-portraying-consequences-of-beach-pollution-ai-generated-photo.jpg",
      
    }
  },
  beaches: [
    
    // 1. INDONESIA 
    {
      id: "indonesia",
      name: "Loji Beach",
      country: "Indonesia",
      img: "https://edition.cnn.com/interactive/2024/04/climate/plastic-pollution-ocean-cnnphotos/media/images/s_1661759A465400A370CE21C09E263F9573D114AD1403466884CE6DA04965E836_1713384656177_PlasticShore02.jpg", 
      desc: "Indonesia's coastline is drowning in plastic waste...",
      
      content: {
        intro:"The environmental crisis unfolding at Loji Beach has reached a critical tipping point. As underscored by the CNN report, this local devastation is a symptom of a much larger global failure: of the staggering 400 million metric tons of plastic produced annually worldwide, a mere 9% is actually recycled. This massive gap in waste management means that the overwhelming majority of plastic persists in the environment, leaving vulnerable coastlines like Loji Beach to bear the disproportionate and catastrophic burden of the world’s unchecked consumption.",
        marineText: "Marine ecosystems around Loji Beach are severely affected by plastic pollution. Marine animals such as fish, turtles, and seabirds often mistake plastic debris for food, leading to choking, internal injuries, or death.",
        economicText: "Plastic pollution at Loji Beach also causes significant economic losses for local communities. Fishermen report reduced fish catches as marine habitats are damaged and nets become clogged with plastic waste.",
        habitatText:"Pollution at Loji Beach has caused serious habitat destruction, with plastic waste and untreated sewage covering the sand and coastal waters and destroying nesting areas for seabirds and sea turtles, while also damaging nearby seagrass beds and coral habitats. This leads to the loss of breeding and feeding grounds, reduced biodiversity, and a weakened coastal ecosystem.",
        outro: "As a result, the coastline of Freedom Island is perpetually covered in a colorful but toxic carpet of single-use sachets, bottles, and styrofoam. This artificial barrier suffocates the mangroves and destroys the natural wetland habitat that is vital for flood protection in the city. Over time, the plastic disintegrates into microplastics, which are consumed by shellfish and fish, eventually ending up on the plates of the human population and posing long-term health risks."
    }
    },

    // 2. BRAZIL
    {
      id: "Philippines",
      name: "Freedom Island(LPPCHEA)",
      country: "Philippines",
      img:"https://www.philippinebeaches.org/wp-content/uploads/2013/06/freedom-island-manila1.jpg",
      desc:"Freedom Island in Manila Bay is suffocating under massive layers of single-use plastics that choke critical mangroves and destroy vital wildlife habitats",

      content: {
        intro:"The condition of Freedom Island, part of the Las Piñas-Parañaque Critical Habitat, is a stark example of the sachet economy crisis. Located in Manila Bay, this critical wetland is frequently blanketed in non-recyclable single-use plastics, with audits revealing that nearly 54% of the waste found consists of plastic packaging from multinational brands. The island acts as a trap for garbage flowing from the metropolis's waterways, accumulating so much waste that in some areas, the ground is composed primarily of compacted plastic layers rather than soil.",
        marineText:"This pollution catastrophe poses an immediate danger to the 41 species of migratory birds that use the island as a resting stop, including the threatened Chinese egret. These birds often mistake colorful plastic fragments for food, leading to starvation and death, while the thick layer of trash chokes the mangrove roots, preventing them from functioning as a nursery for fish and a barrier against typhoons.",
        economicText:"The degradation of Freedom Island has devastated local fishermen, whose catches have dwindled as fish avoid polluted waters. They now spend more time untangling trash from nets than fishing, while the government bears the high cost of cleanup operations.",
        habitatText:"Pollution from plastic waste, sewage, and industrial dumping has severely damaged mangroves and coastal habitats at Freedom Island. This destruction eliminates breeding and feeding grounds for marine life, leading to reduced biodiversity and an unstable coastal ecosystem.",
        outro:"As a result, the coastline of Freedom Island is perpetually covered in a colorful but toxic carpet of single-use sachets, bottles, and styrofoam. This artificial barrier suffocates the mangroves and destroys the natural wetland habitat that is vital for flood protection in the city. Over time, the plastic disintegrates into microplastics, which are consumed by shellfish and fish, eventually ending up on the plates of the human population and posing long-term health risks."
    }
    },

    // 3. Dominican Republic
    {
      id: "Dominican Republic",
      name: "Montesinos Beach",
      country: "Dominican Republic",
      img: "https://i.pinimg.com/736x/c6/5c/a9/c65ca9b402b4513a917ec26a629a6cf0.jpg",
      desc:"Montesinos Beach is frequently buried under waves of trash flushing from the Ozama River, creating a suffocating blanket of plastic that destroys the coastline.",

      content: {
        intro:"The coastline of Montesinos Beach in Santo Domingo became a global symbol of the plastic crisis when viral footage showed waves of garbage crashing ashore. Following heavy rains, the Ozama River flushes vast quantities of urban waste directly into the Caribbean Sea, creating a suffocating carpet of styrofoam, plastic bottles, and household refuse. The debris is often so thick that the ocean water is completely invisible beneath the floating landfill, requiring military intervention and heavy machinery to clear tons of waste that continually reappear with the tides.",
        marineText:"The dense layer of plastic on the surface blocks sunlight and oxygen exchange, creating localized dead zones where marine life struggles to survive. Fish and crustaceans are frequently found dead, suffocated by the pollution or poisoned by the toxic leachates released from degrading plastics. The accumulation creates a physical barrier that prevents sea turtles and other marine animals from surfacing for air or navigating the coastline, leading to significant loss of biodiversity in the area.",
        economicText:"The pollution has crippled the local fishing industry, as nets catch more plastic than fish. This has also tarnished the country's image as a tourist destination, threatening the national economy and forcing costly government cleanups. Many local fishermen and small business owners face reduced income and job insecurity, worsening the economic impact on coastal communities.",
        habitatText:"Pollution at Montesinos Beach has caused severe habitat destruction, as large amounts of solid waste, sewage, and runoff contaminate the shoreline and nearby coastal waters, damaging natural habitats. This pollution degrades sand ecosystems and coastal waters, destroying breeding and feeding grounds for marine organisms and leading to reduced biodiversity and an overall weakened coastal ecosystem.",
        outro:"As a result, the beach is periodically transformed into a solid landmass of waste, forcing authorities to use industrial excavators just to find the water's edge. This recurring disaster serves as a stark reminder of how upstream waste mismanagement can have devastating downstream consequences, turning a potential tourist haven into a biological hazard."
    }
    }
  ]
  
};