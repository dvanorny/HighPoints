import { StateDetail } from '../types';

// This is a mock data store - in a real app this would be fetched from a C# backend API
const stateDetailsData: Record<string, StateDetail> = {
  'CA': {
    code: 'CA',
    name: 'California',
    capital: 'Sacramento',
    visitDate: 'June 2023',
    duration: '2 weeks',
    heroImage: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mapImage: 'https://images.pexels.com/photos/7291911/pexels-photo-7291911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    highlights: [
      'San Francisco',
      'Yosemite National Park',
      'Highway 1 Coastal Drive',
      'Napa Valley'
    ],
    story: {
      intro: 'My California adventure was a perfect blend of urban exploration, natural wonders, and coastal beauty, spanning two unforgettable weeks in June 2023.',
      paragraphs: [
        {
          heading: 'San Francisco Dreams',
          text: 'I started my journey in San Francisco, where the iconic Golden Gate Bridge emerged from the morning fog as I approached by ferry. The city\'s hills provided breathtaking views at every turn, and I spent days exploring neighborhoods from colorful Castro to bustling Chinatown. The sourdough bread at Fisherman\'s Wharf became a daily ritual, and watching sea lions bask at Pier 39 never got old.'
        },
        {
          heading: 'Yosemite\'s Majesty',
          text: 'The journey continued eastward to Yosemite National Park, where El Capitan\'s imposing granite face left me speechless. Hiking to Nevada Falls tested my endurance but rewarded me with views that no photograph could truly capture. I woke before dawn one morning to watch the sunrise paint Half Dome in golden light - a moment of perfect solitude amidst the grandeur of nature.'
        },
        {
          heading: 'Pacific Coast Highway',
          text: 'Driving down Highway 1 was perhaps the highlight of my trip. With windows down and music up, I hugged the coastline, stopping at McWay Falls and Big Sur to soak in views that seemed almost surreal in their beauty. In Monterey, I spent hours at the aquarium, mesmerized by the jellyfish exhibit that seemed to pulse with otherworldly grace.'
        },
        {
          text: 'My California adventure concluded in Napa Valley, where vineyard tours and wine tastings provided the perfect conclusion to a journey that balanced adventure with relaxation, nature with culture, and solitude with connection. As I flew home, I knew California had captured a piece of my heart forever.'
        }
      ]
    },
    photos: [
      {
        url: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Golden Gate Bridge emerging from the fog',
        location: 'San Francisco'
      },
      {
        url: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'El Capitan standing tall in the morning light',
        location: 'Yosemite National Park'
      },
      {
        url: 'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Stunning sunset along Highway 1',
        location: 'Big Sur'
      },
      {
        url: 'https://images.pexels.com/photos/2261911/pexels-photo-2261911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/2261911/pexels-photo-2261911.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Row of vineyards stretching to the horizon',
        location: 'Napa Valley'
      },
      {
        url: 'https://images.pexels.com/photos/2880502/pexels-photo-2880502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/2880502/pexels-photo-2880502.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Pier 39 with sea lions sunbathing',
        location: 'San Francisco'
      },
      {
        url: 'https://images.pexels.com/photos/5295540/pexels-photo-5295540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/5295540/pexels-photo-5295540.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Half Dome at sunset',
        location: 'Yosemite National Park'
      }
    ],
    relatedStates: [
      {
        code: 'OR',
        name: 'Oregon',
        thumbnail: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'Neighboring state to the north'
      },
      {
        code: 'NY',
        name: 'New York',
        thumbnail: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'Cross-country comparison'
      },
      {
        code: 'FL',
        name: 'Florida',
        thumbnail: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'Coastal comparison'
      }
    ],
    prevState: {
      code: 'OR',
      name: 'Oregon'
    },
    nextState: {
      code: 'NY',
      name: 'New York'
    }
  },
  'FL': {
    code: 'FL',
    name: 'Florida',
    capital: 'Tallahassee',
    visitDate: 'August 2023',
    duration: '10 days',
    heroImage: 'https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mapImage: 'https://images.pexels.com/photos/7034079/pexels-photo-7034079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    highlights: [
      'Miami Beach',
      'Everglades National Park',
      'Kennedy Space Center',
      'Key West'
    ],
    story: {
      intro: 'Florida delivered a perfect mix of beach relaxation, wildlife encounters, and unique cultural experiences during my 10-day adventure in August 2023.',
      paragraphs: [
        {
          heading: 'Miami Vibes',
          text: 'My Florida journey began in Miami, where the Art Deco architecture of South Beach provided a colorful backdrop to days spent alternating between the turquoise waters and vibrant cafes of Ocean Drive. The Cuban influence in Little Havana transported me to another world, with domino players in Maximo Gomez Park and the aroma of Cuban coffee filling the air. Nights came alive with music spilling from clubs and restaurants, the city\'s energy matching the tropical heat.'
        },
        {
          heading: 'Everglades Adventure',
          text: 'Venturing into the Everglades was like entering a prehistoric world. An airboat tour through sawgrass marshes revealed alligators sunning themselves on muddy banks and great blue herons stalking through shallow waters. The vastness of this ecosystem was humbling, and a sunset hike along the Anhinga Trail showed me how the landscape transforms as day turns to night, with different creatures emerging from hiding.'
        },
        {
          heading: 'Space Coast Wonders',
          text: 'The Kennedy Space Center offered a different kind of awe, with the massive Vehicle Assembly Building visible for miles as I approached. Standing beneath the Saturn V rocket, I gained a new appreciation for the scale of humanity\'s space ambitions. I was fortunate to witness a SpaceX launch, the ground rumbling beneath my feet as the rocket pierced the sky, leaving a trail of white against perfect blue.'
        },
        {
          heading: 'Key West Sunsets',
          text: 'My journey concluded in Key West, where I drove across the Seven Mile Bridge with endless ocean on both sides. The laid-back atmosphere of this island paradise was infectious, and I quickly adopted the local pace. Each evening ended at Mallory Square for the sunset celebration, where street performers entertained crowds gathered to watch the sun sink into the Gulf of Mexico in a spectacular display of orange and pink.'
        }
      ]
    },
    photos: [
      {
        url: 'https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Ocean Drive lit up at night',
        location: 'Miami Beach'
      },
      {
        url: 'https://images.pexels.com/photos/1694370/pexels-photo-1694370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1694370/pexels-photo-1694370.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Alligator resting on a log',
        location: 'Everglades National Park'
      },
      {
        url: 'https://images.pexels.com/photos/586043/pexels-photo-586043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/586043/pexels-photo-586043.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Rocket launch over the Atlantic',
        location: 'Kennedy Space Center'
      },
      {
        url: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Sunset at Mallory Square',
        location: 'Key West'
      },
      {
        url: 'https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/3640993/pexels-photo-3640993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Seven Mile Bridge stretching into the distance',
        location: 'Florida Keys'
      },
      {
        url: 'https://images.pexels.com/photos/2118483/pexels-photo-2118483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/2118483/pexels-photo-2118483.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Colorful buildings in Little Havana',
        location: 'Miami'
      }
    ],
    relatedStates: [
      {
        code: 'NY',
        name: 'New York',
        thumbnail: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'East coast comparison'
      },
      {
        code: 'CA',
        name: 'California',
        thumbnail: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'Beach lifestyle comparison'
      }
    ],
    prevState: {
      code: 'NY',
      name: 'New York'
    },
    nextState: {
      code: 'CA',
      name: 'California'
    }
  },
  'NY': {
    code: 'NY',
    name: 'New York',
    capital: 'Albany',
    visitDate: 'July 2023',
    duration: '8 days',
    heroImage: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mapImage: 'https://images.pexels.com/photos/13220873/pexels-photo-13220873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    highlights: [
      'New York City',
      'Niagara Falls',
      'The Adirondacks',
      'Hudson Valley'
    ],
    story: {
      intro: 'New York state offered an incredible contrast between the urban energy of NYC and the serene beauty of its natural landscapes during my 8-day adventure in July 2023.',
      paragraphs: [
        {
          heading: 'Manhattan Magic',
          text: 'My New York adventure began in Manhattan, where the city\'s iconic skyline took my breath away from the Top of the Rock observation deck. Walking the High Line at sunset provided a unique perspective on the city, with the elevated park offering glimpses into neighborhoods from Chelsea to the Meatpacking District. Central Park was a revelation - a vast green oasis in the heart of the concrete jungle where I spent hours watching street performers and enjoying the serenity of the Bethesda Fountain.'
        },
        {
          heading: 'Brooklyn Exploration',
          text: 'Crossing the Brooklyn Bridge on foot was a highlight, with the Manhattan skyline creating a perfect backdrop for photos. DUMBO\'s cobblestone streets and converted warehouses offered a different pace from Manhattan, and the pizza at Grimaldi\'s lived up to its legendary status. I timed my visit to Brooklyn Heights Promenade for sunset, watching the city lights come alive as dusk settled over the East River.'
        },
        {
          heading: 'Niagara\'s Majesty',
          text: 'The journey upstate to Niagara Falls provided a dramatic shift from urban exploration to natural wonder. The sheer power of the falls was humbling, especially from the Hurricane Deck where the roar of water and constant spray created an immersive experience. The Maid of the Mist boat tour brought me remarkably close to the base of the falls, the rainbow-streaked mist creating an almost mystical atmosphere.'
        },
        {
          heading: 'Adirondack Serenity',
          text: 'My final days were spent in the peaceful Adirondack Mountains, where hiking trails led to pristine lakes and panoramic vistas. Lake Placid\'s Olympic history added an interesting cultural dimension to the natural beauty. Kayaking at dawn on Mirror Lake, with perfect reflections of the surrounding mountains on the still water, provided a moment of perfect tranquility before returning to the rhythm of everyday life.'
        }
      ]
    },
    photos: [
      {
        url: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Manhattan skyline at dusk',
        location: 'New York City'
      },
      {
        url: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Niagara Falls from Hurricane Deck',
        location: 'Niagara Falls'
      },
      {
        url: 'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Sunrise at Mirror Lake',
        location: 'Lake Placid, Adirondacks'
      },
      {
        url: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Brooklyn Bridge with Manhattan skyline',
        location: 'New York City'
      },
      {
        url: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Central Park in summer',
        location: 'New York City'
      },
      {
        url: 'https://images.pexels.com/photos/4529007/pexels-photo-4529007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/4529007/pexels-photo-4529007.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Hudson Valley vineyards',
        location: 'Hudson Valley'
      }
    ],
    relatedStates: [
      {
        code: 'FL',
        name: 'Florida',
        thumbnail: 'https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'East coast contrast'
      },
      {
        code: 'CA',
        name: 'California',
        thumbnail: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'Coast-to-coast comparison'
      }
    ],
    prevState: {
      code: 'CA',
      name: 'California'
    },
    nextState: {
      code: 'FL',
      name: 'Florida'
    }
  },
  'OR': {
    code: 'OR',
    name: 'Oregon',
    capital: 'Salem',
    visitDate: 'April 2023',
    duration: '9 days',
    heroImage: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    mapImage: 'https://images.pexels.com/photos/8251133/pexels-photo-8251133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    highlights: [
      'Portland',
      'Crater Lake National Park',
      'Columbia River Gorge',
      'Cannon Beach'
    ],
    story: {
      intro: 'Oregon captivated me with its incredible diversity of landscapes - from misty coastlines to volcanic lakes, lush forests to hip urban centers - during my 9-day exploration in April 2023.',
      paragraphs: [
        {
          heading: 'Portland Peculiarities',
          text: 'My Oregon adventure began in Portland, where the city\'s motto "Keep Portland Weird" proved immediately accurate. Powell\'s City of Books consumed my entire first afternoon, its endless aisles of new and used books creating a literary labyrinth I was happy to get lost in. The food cart scene exceeded all expectations, with global cuisines available in clusters throughout the city. Exploring neighborhoods from Pearl District to Hawthorne revealed a city that embraces creativity and sustainability with equal passion.'
        },
        {
          heading: 'Columbia River Wonders',
          text: 'Driving east along the Columbia River Gorge provided a dramatic introduction to Oregon\'s natural beauty. Multnomah Falls cascaded 620 feet in two spectacular drops, while numerous other waterfalls punctuated the verdant landscape. Hiking Eagle Creek Trail led me through moss-covered forests and behind Tunnel Falls, where the path actually cuts through the rock behind the waterfall - an exhilarating experience that left me soaked but smiling.'
        },
        {
          heading: 'Crater Lake\'s Blue Depths',
          text: 'The journey to Crater Lake National Park took me through changing landscapes, from forests to more sparse, volcanic terrain. Nothing prepared me for my first glimpse of the lake - a perfect circle of the most intense blue I\'ve ever seen, surrounded by steep caldera walls. Learning that it\'s the deepest lake in the United States added to the sense of wonder. A snowfall the night before my visit created a stunning contrast of white against the deep blue water.'
        },
        {
          heading: 'Coastal Magic',
          text: 'My final days were spent along Oregon\'s rugged coastline. Cannon Beach\'s iconic Haystack Rock emerged from the morning mist like something from a fairy tale. Tide pools revealed starfish, anemones, and hermit crabs in miniature underwater worlds. The seafood was impossibly fresh, especially at a small shack in Astoria where I had the best clam chowder of my life while watching fishing boats return with their daily catch.'
        }
      ]
    },
    photos: [
      {
        url: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Haystack Rock at sunset',
        location: 'Cannon Beach'
      },
      {
        url: 'https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1756086/pexels-photo-1756086.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'The deep blue waters of Crater Lake',
        location: 'Crater Lake National Park'
      },
      {
        url: 'https://images.pexels.com/photos/395857/pexels-photo-395857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/395857/pexels-photo-395857.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Multnomah Falls in spring',
        location: 'Columbia River Gorge'
      },
      {
        url: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Portland skyline with Mt. Hood',
        location: 'Portland'
      },
      {
        url: 'https://images.pexels.com/photos/2162011/pexels-photo-2162011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/2162011/pexels-photo-2162011.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Tide pools teeming with marine life',
        location: 'Oregon Coast'
      },
      {
        url: 'https://images.pexels.com/photos/5858696/pexels-photo-5858696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnail: 'https://images.pexels.com/photos/5858696/pexels-photo-5858696.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        caption: 'Food carts in downtown Portland',
        location: 'Portland'
      }
    ],
    relatedStates: [
      {
        code: 'CA',
        name: 'California',
        thumbnail: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
        relation: 'Neighboring state to the south'
      }
    ],
    prevState: undefined,
    nextState: {
      code: 'CA',
      name: 'California'
    }
  }
};

// Function to get state data - simulates an API call
export async function getStateData(stateCode: string): Promise<StateDetail> {
  return new Promise((resolve, reject) => {
    // Simulate API latency
    setTimeout(() => {
      const stateData = stateDetailsData[stateCode];
      if (stateData) {
        resolve(stateData);
      } else {
        reject(new Error(`No data available for state code: ${stateCode}`));
      }
    }, 800);
  });
}