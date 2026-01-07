import React, { useState } from 'react';

import beforeWeArriveImg from './assets/before_we_arrive.jpeg';
import handsThatMadeADifferenceImg from './assets/hands_that_made_a_difference.jpeg';
import whatWeFoundImg from './assets/what_we_found.jpeg';
import whyThisMattersImg from './assets/why_this_matters.jpg';
import ourImpactInOneDayImg from './assets/our_impact_in_one_day.jpeg';
import notJustACleanupImg from './assets/not_just_a_cleanup.jpeg';
import everyPieceCountsImg from './assets/every_piece_counts.jpeg';

export const cardData = [
  {
    title: 'Before We Arrived',
    description: 'The shoreline was a heartbreaking sight, covered in a blanket of plastic waste.',
    imageAlt: 'A beach littered with plastic bottles and debris before cleanup',
    titleColor: 'text-cyan-800',
    imageSrc: beforeWeArriveImg,
    buttonText: 'Learn More',
    detailedDescription: 'The scene was grim. A thick line of tangled fishing nets, plastic bottles of every shape and size, and faded, brittle bags formed a second tide line above the gentle lapping of the waves. The air, which should have smelled of salt and sea, carried a faint, chemical odor. It was a stark and silent testament to the impact of human carelessness on a once-pristine coastline.',

  },
  {
    title: 'Hands That Made a Difference',
    description: 'A dedicated team of volunteers gathered with a shared mission to restore the beach.',
    imageAlt: 'Volunteers working together to clean up the beach',
    titleColor: 'text-cyan-800',
    imageSrc: handsThatMadeADifferenceImg,
    buttonText: 'Learn More',
    detailedDescription: 'A sense of purpose buzzed in the air as volunteers, young and old, spread out across the sand. Armed with gloves and bags, they worked tirelessly under the morning sun. Laughter and conversation mingled with the sounds of the ocean as they methodically combed the beach, their collective effort a powerful symbol of hope and community action.',

  },
  {
    title: 'What We Found',
    description: 'The sheer volume of single-use plastics we collected was a stark reminder of our habits.',
    imageAlt: 'Piles of collected trash bags filled with plastic waste',
    titleColor: 'text-cyan-800',
    imageSrc: whatWeFoundImg,
    buttonText: 'Learn More',
    detailedDescription: 'The inventory of our collection was both fascinating and horrifying. Beyond the expected bottles and cans, we discovered a surprising number of everyday items: toothbrushes, lighters, and thousands of tiny, colorful bottle caps. The most challenging were the microplastics, confetti-sized fragments that had to be sifted from the sand, a stark visualization of how deeply our waste has integrated with the natural environment.',

  },
  {
    title: 'Why This Matters',
    description: 'Protecting our oceans is crucial for marine biodiversity and the health of our planet.',
    imageAlt: 'A sea turtle swimming in clear blue water',
    titleColor: 'text-cyan-800',
    imageSrc: whyThisMattersImg,
    buttonText: 'Learn More',
    detailedDescription: "Our oceans are the lungs of our planet, generating more than half of the oxygen we breathe. They regulate our climate, absorb carbon dioxide, and are home to a breathtaking array of life. Protecting these vital ecosystems isn't just about saving turtles and dolphins; it's about ensuring the stability of our planet's climate and the health of all its inhabitants, including ourselves.",

  },
  {
    title: 'Our Impact in One Day',
    description: 'Together, we removed a few bags of rubbish, making a small but meaningful difference.',
    imageAlt: 'An infographic showing a few bags of rubbish collected',
    titleColor: 'text-cyan-800',
    imageSrc: ourImpactInOneDayImg,
    buttonText: 'Learn More',
    detailedDescription: "As the sun began to set, a few bags of rubbish stood in contrast to the beach. We had removed a few bags of rubbish, preventing it from entering the ocean. It's a small amount of plastic that won't be ingested by a sea turtle, a small amount of waste that won't break down into microplastics, and a clear message that even a small effort can make a difference.",

  },
  {
    title: 'Every Piece Counts',
    description: 'From large bottles to tiny microplastics, every item removed makes a tangible difference.',
    imageAlt: "A close-up of a child's hand picking up a small piece of plastic from the sand",
    titleColor: 'text-cyan-800',
    imageSrc: everyPieceCountsImg,
    buttonText: 'Learn More',
    detailedDescription: "It's easy to feel overwhelmed by the scale of the problem, but the truth is that every single action matters. That one plastic bottle cap, picked up by a child, is one less piece that a shorebird might mistake for food. That tangled fishing line, carefully unwound and removed, is one less trap for a curious seal. The ecosystem is a complex web, and removing even the smallest stressor contributes to its overall resilience.",

  },
  {
    title: 'Not Just a Cleanup',
    description: "It's a movement of education, community building, and a shared commitment to our planet.",
    imageAlt: 'A group of smiling volunteers posing for a photo after the cleanup',
    titleColor: 'text-cyan-800',
    imageSrc: notJustACleanupImg,
    buttonText: 'Learn More',
    detailedDescription: "What happens on the beach is more than just trash collection. It's a chance for neighbors to meet, for children to learn about their environment, and for a community to build a shared sense of stewardship. We leave with more than just bags of trash; we leave with new connections, a deeper understanding of the issue, and a renewed commitment to protecting the places we love.",

  },
  {
    title: 'Why This Matters',
    description: 'Every cleanup is a step toward a healthier planet and a more conscious community.',
    imageAlt: 'Child looking hopefully at a clean ocean',
    titleColor: 'text-cyan-800',
    imageSrc: whyThisMattersImg,
    buttonText: 'Join the Movement',
    detailedDescription: "The hope in a child's eyes as they look out at a clean ocean is a powerful reminder of what we are working for. We are not just cleaning a beach; we are preserving the wonder of nature for the next generation. It is our responsibility to ensure that they can experience the same joy and awe of a healthy coastline that we have, and that they inherit a planet that is cared for and respected.",

  },
  
];

const Action = () => {
  const [selectedCardTitle, setSelectedCardTitle] = useState(null);

  const handleCardClick = (title) => {
    if (selectedCardTitle === title) {
      setSelectedCardTitle(null); // Collapse if the same card is clicked
    } else {
      setSelectedCardTitle(title); // Expand the new card
    }
  };

  return (
    <section id="action">
      <style>
        {`
          .action-scroll-container::-webkit-scrollbar {
            display: none;
          }
          .action-scroll-container {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
      <div className="bg-neutral-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Take Action for Our Oceans
          </h1>
          <p className="mt-4 text-xl text-neutral-600">
            Learn about the impact of pollution and how you can contribute to a healthier marine environment.
          </p>
        </div>

        {/* Wrapper for horizontal padding */}
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Horizontal Scrolling Container */}
          <div className="flex overflow-x-auto gap-8 py-4 scroll-smooth action-scroll-container">
            {cardData.map((card, index) => {
              const isExpanded = selectedCardTitle === card.title;
              return (
                <article 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer w-[320px] flex-shrink-0 flex flex-col ${isExpanded ? 'border-2 border-cyan-500' : ''}`}
                  onClick={() => handleCardClick(card.title)}
                >
                  {/* Image and Location Overlay */}
                  <div className="relative">
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      className="w-full h-48 object-cover"
                    />

                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className={`text-xl font-bold ${card.titleColor} mb-3 tracking-tight text-center`}>
                      {card.title}
                    </h2>
                    <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                      {card.description}
                    </p>

                    {/* Button visible only when card is NOT expanded */}
                    {!isExpanded && (
                      <div className="mt-4 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(card.title);
                          }}
                          className="inline-block bg-cyan-600 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:bg-cyan-700 hover:shadow-lg transition-all duration-300"
                        >
                          {card.buttonText}
                        </button>
                      </div>
                    )}
                    
                    {/* Expanded content */}
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                                          <p className="text-neutral-700 text-sm leading-relaxed">
                                            {card.detailedDescription}
                                          </p>
                                          <div className="mt-4 text-center">
                                             <button
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleCardClick(card.title);
                                                }}
                                                className="inline-block bg-orange-600 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg transition-all duration-300"
                                              >
                                                Close
                                              </button>
                                          </div>
                                        </div>                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
