import { StateDetail } from '../types';

const stateDetailsData: Record<string, StateDetail> = {
  'WI': {
    code: 'WI',
    name: 'Wisconsin (Timms Hill)',
    tallPoint: 'Timms Hill',
    visitDate: 'July 5, 2025',
    weather: '79°F, cloudy',
    elevationGain: 114,
    hikeLength: 0.4,
    hikeTime: 7,
    heroImage: '/photos/wi-title.jpg',
    mapImage: '/photos/wi-map.png',
    
    information: {
      elevation: 1951,
      elevationRank: 39, 
      location: 'Timms Hill County Park in Price County'
    },
    links: {
      summitPost: 'https://www.summitpost.org/timms-hill/154441',
      highpointGuide: 'https://highpoint.guide/wi/',
      wikipedia: 'https://en.wikipedia.org/wiki/Timms_Hill'
    },
    story: {
      intro: 'Timms Hill, the highest point in Wisconsin at 1951 feet, offers forested trails and scenic views from a historic observation tower.',
      paragraphs: [
        {
          heading: 'Overview',
          text: 'We made this visit on the way to Madison to visit Claire as she was attending a microbiology camp at UW-Madison. The county park we ended up at is a nice, paved parking lot with a short, well-maintained trail leading to the summit. When we arrived we were the only ones there but as we left, two other cars were also parked. The summit itself is a small clearing with a wooden observation tower. The tower is about 30 feet tall and provides a nice view of the surrounding forest.'
        },
        {
          heading: 'Drive',
          text: 'The location is a bit remote, with the drive going through small towns and forest areas. On the way, we stopped at a local diner in Thorpe called the Thorpedo. The town is known for a collection of cows placed around the town (see picture below). We also stopped at the small, local Irvine Park Zoo in Chippewa Falls. We were excited to see a tiger, but apparently it had died a few months prior. And finally we found the Chainsaw Forest tourist attraction outside Medford.'
        },
        {
          heading: 'History',
          text: 'The area surrounding Timms Hill has a rich history tied to early pioneers who settled in the region. These settlers faced numerous challenges as they transformed the wilderness into a community. The hill is believed to be named after a local pioneer, reflecting the heritage of those who sought to establish a new life in the Northwoods of Wisconsin. The observation tower at the summit was built in 1937 by the Civilian Conservation Corps (CCC), a New Deal program that provided jobs and infrastructure development during the Great Depression. The tower has been maintained over the years and remains a popular spot for visitors to enjoy panoramic views of the surrounding landscape.'
        }
      ]
    },
    photos: [
      
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_1726.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_1726.jpg',
        caption: 'The wooded drive to the county park parking lot'
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_1729.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_1729.jpg',
        caption: 'View from the top of the tower'
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_1738.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_1738.jpg',
        caption: 'The observation tower at the summit of Mt. Davis'
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3025.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3025.jpg',
        caption: 'Looking east from the observation tower showing the cloudy skies',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3027.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3027.jpg',
        caption: 'The observation tower at the summit of Timms Hill',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3028.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3028.jpg',
        caption: 'The highpointers bench at the summit of Timms Hill',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3020.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3020.jpg',
        caption: 'Parking lot at the county park for Timms Hill',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3021.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3021.jpg',
        caption: 'Historical marker at the beginning of the short hike to summit of Timms Hill',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3019.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3019.jpg',
        caption: 'Informational sign at the entrance to Timms Hill County Park',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3014.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3014.jpg',
        caption: 'One of the many cows placed around the town of Thorpe, WI',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3009.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3009.jpg',
        caption: 'In front of the buffaloes at the Irvine Park Zoo in Chippewa Falls, WI',
      },
      {
        url: 'https://ik.imagekit.io/rbkdvjmbzh/wi/IMG_3017.jpg',
        thumbnail: 'https://ik.imagekit.io/rbkdvjmbzh/wi/tr:w-400,h-400,fa-auto/IMG_3017.jpg',
        caption: 'The chainsaw forest tourist attraction outside Medford, WI',
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