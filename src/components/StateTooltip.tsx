import { useEffect, useState } from 'react';
import { State } from '../types';

interface StateTooltipProps {
  state: State;
  position: { x: number; y: number };
}

const StateTooltip = ({ state, position }: StateTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay for smooth appearance
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [state.code]);
  
  return (
    <div 
      className={`fixed z-10 transform -translate-x-1/2 -translate-y-full pb-2 pointer-events-none transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <div className="bg-blue-900 text-white px-3 py-1.5 rounded-md shadow-lg">
        <div className="font-serif font-bold">{state.name}</div>
        {state.visited && (
          <div className="text-xs text-amber-300">
            {state.visitDate ? `Visited: ${state.visitDate}` : 'Visited'}
          </div>
        )}
        <div className="absolute left-1/2 bottom-0 w-0 h-0 -translate-x-1/2 border-8 border-transparent border-t-blue-900"></div>
      </div>
    </div>
  );
};

export default StateTooltip;