import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import { usStates } from '../data/states';
import StateTooltip from './StateTooltip';

const USMap = () => {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
  const handleStateClick = (stateCode: string) => {
    navigate(`/state/${stateCode}`);
  };
  
  const handleStateHover = (
    stateCode: string | null, 
    event?: React.MouseEvent<SVGPathElement>
  ) => {
    setHoveredState(stateCode);
    
    if (stateCode && event) {
      // Calculate position relative to the viewport
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
         US High Point Adventures
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Click on any state to read more details about the highest point within that state. 
          States in <span className="text-green-700 font-medium">green</span> are the ones we have climbed or visited the highest point.
        </p>
      </div>
      
      <div className="relative mx-auto max-w-4xl bg-white p-4 md:p-8 rounded-lg shadow-md">
        <div className="border-4 border-amber-900/20 rounded-lg p-2 md:p-4 bg-beige shadow-inner">
          <svg
            viewBox="0 0 959 593"
            className="w-full h-auto"
            role="img"
            aria-label="Map of the United States"
          >
            <title>US High Points Map</title>
            <desc>Interactive map of the United States showing states visited during adventures</desc>
            
            {/* State paths will be rendered here from the data */}
            {usStates.map((state) => (
              <path
                key={state.code}
                d={state.path}
                className={`${
                  state.visited 
                    ? 'fill-green-700 hover:fill-green-600' 
                    : 'fill-gray-300 hover:fill-gray-400'
                } stroke-white stroke-[0.5] cursor-pointer transition duration-200`}
                onClick={() => handleStateClick(state.code)}
                onMouseEnter={(e) => handleStateHover(state.code, e)}
                onMouseLeave={() => handleStateHover(null)}
                aria-label={state.name}
              />
            ))}
          </svg>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-md border border-gray-200 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-700"></div>
            <span className="text-xs text-gray-700">Accomplished</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-4 h-4 bg-gray-300"></div>
            <span className="text-xs text-gray-700">Yet to Visit</span>
          </div>
        </div>
        
        {/* Compass Rose */}
        {/* <div className="absolute top-8 right-8 opacity-70">
          <div className="w-16 h-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-lg font-serif">N</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 text-lg font-serif">S</div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 text-lg font-serif">W</div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-lg font-serif">E</div>
            <div className="w-0.5 h-16 bg-gray-700/50 absolute left-1/2 -translate-x-1/2"></div>
            <div className="w-16 h-0.5 bg-gray-700/50 absolute top-1/2 -translate-y-1/2"></div>
          </div>
        </div> */}
        
        {/* Tooltip */}
        {hoveredState && (
          <StateTooltip 
            state={usStates.find(s => s.code === hoveredState)!} 
            position={tooltipPosition} 
          />
        )}
        
        {/* Count of visited states */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-blue-900 text-white rounded-full text-sm">
            <MapPinned size={16} className="mr-1" />
            <span>{usStates.filter(s => s.visited).length} state high points climbed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USMap;