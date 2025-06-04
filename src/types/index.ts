export interface State {
  code: string;
  name: string;
  path: string;
  visited: boolean;
  visitDate?: string;
}

export interface Photo {
  url: string;
  thumbnail?: string;
  caption: string;
  location?: string;
}

export interface RelatedState {
  code: string;
  name: string;
  thumbnail: string;
  relation: string;
}

export interface StateDetail {
  code: string;
  name: string;
  capital: string;
  visitDate: string;
  duration: string;
  heroImage: string;
  mapImage: string;
  highlights: string[];
  story: {
    intro: string;
    paragraphs: Array<{
      text: string;
      heading?: string;
    }>;
  };
  photos: Photo[];
  relatedStates: RelatedState[];
  prevState?: {
    code: string;
    name: string;
  };
  nextState?: {
    code: string;
    name: string;
  };
}