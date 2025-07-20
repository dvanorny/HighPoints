import { StateDetail } from '../types';

const stateDetailsData: Record<string, StateDetail> = {
  'PA': {
    code: 'PA',
    name: 'Pennsylvania (Mount Davis)',
    tallPoint: 'Mount Davis',
    visitDate: 'May 17, 2025',
    weather: '62°F, cloudy',
    elevationGain: 50,
    hikeLength: 0.1,
    hikeTime: 5,
    heroImage: '/photos/pa-title.png',
    mapImage: '/photos/pa-map.png',
    
    information: {
      elevation: 3213,
      elevationRank: 33, 
      location: 'Forbes State Forest in Somerset County'
    },
    links: {
      summitPost: 'http://www.summitpost.org/mountain/rock/151425/mount-davis.html',
      highpointGuide: 'https://highpoint.guide/pa/',
      wikipedia: 'https://en.wikipedia.org/wiki/Mount_Davis_(Pennsylvania)'
    },
    story: {
      intro: 'Mount Davis, the highest point in Pennsylvania at 3,213 feet, offers forested trails and scenic views from a historic observation tower.',
      paragraphs: [
        {
          heading: 'Overview',
          text: 'This was the first high point that we officially visited.'
        },
        {
          heading: 'History',
          text: 'The high point was named for John Nelson Davis, an early settler, American Civil War veteran, surveyor, and naturalist known for his studies of the mountain flora and fauna. During the Civil War, Davis served in Company E, 102nd Pennsylvania Infantry. The point is part of the Negro Mountain range. In addition to plaques near the observation tower describing the mountain range, there is also a metal sign saying the wording is outdated and changes are coming.'
        }
      ]
    },
    photos: [
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_1407.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_1407.jpg',
        caption: 'Dan standing in front of Mt. Davis stand'
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_2676.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_2676.jpg',
        caption: 'Ben standing in front of Mt. Davis stand'
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_2680.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_2680.jpg',
        caption: 'On the short hike from the parking lot to the summit of Mt. Davis'
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_2684.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_2684.jpg',
        caption: 'Standing on top of the observation tower at Mt. Davis',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_2678.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_2678.jpg',
        caption: 'The observation tower at the summit of Mt. Davis',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_1398.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_1398.jpg',
        caption: 'Stopping for a caravan of buggies on the way to Mt. Davis',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/pa/IMG_2683.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/pa/tr:w-400,h-400,fa-auto/IMG_2683.jpg',
        caption: 'View from the top of the observation tower at Mt. Davis',
      },
    ],
    relatedStates: [
      {
        code: 'WV',
        name: 'West Virginia',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/flags/wv.jpg',
        relation: 'Hiked same day'
      },
      {
        code: 'MD',
        name: 'Maryland',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/flags/md.jpg',
        relation: 'Hiked same day'
      }
    ]
  },
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