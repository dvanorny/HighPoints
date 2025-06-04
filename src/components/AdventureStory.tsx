import { useState } from 'react';

interface AdventureStoryProps {
  story: {
    intro: string;
    paragraphs: Array<{
      text: string;
      heading?: string;
    }>;
  };
}

const AdventureStory = ({ story }: AdventureStoryProps) => {
  const [expanded, setExpanded] = useState(false);
  
  // Show only intro and first paragraph when collapsed
  const visibleParagraphs = expanded 
    ? story.paragraphs 
    : story.paragraphs.slice(0, 1);
  
  return (
    <div className="prose prose-slate max-w-none">
      <p className="text-lg font-medium leading-relaxed">{story.intro}</p>
      
      {visibleParagraphs.map((paragraph, index) => (
        <div key={index} className="mt-4">
          {paragraph.heading && (
            <h3 className="text-xl font-serif font-bold text-blue-900 mb-2">
              {paragraph.heading}
            </h3>
          )}
          <p>{paragraph.text}</p>
        </div>
      ))}
      
      {story.paragraphs.length > 1 && (
        <button
          className="mt-4 text-blue-700 hover:text-blue-900 font-medium flex items-center"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read less' : 'Read more'}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`ml-1 h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AdventureStory;