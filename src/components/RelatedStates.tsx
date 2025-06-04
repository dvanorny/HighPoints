import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { RelatedState } from '../types';

interface RelatedStatesProps {
  currentState: string;
  relatedStates: RelatedState[];
}

const RelatedStates = ({ currentState, relatedStates }: RelatedStatesProps) => {
  if (!relatedStates.length) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">Related Adventures</h3>
      <div className="space-y-3">
        {relatedStates.map((state) => (
          <Link 
            key={state.code}
            to={`/state/${state.code}`}
            className="flex items-start p-3 rounded-md hover:bg-blue-50 transition group"
          >
            <div className="flex-shrink-0 mr-3">
              <div className="w-12 h-12 rounded-md overflow-hidden">
                <img 
                  src={state.thumbnail} 
                  alt={state.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="font-medium text-blue-900 group-hover:text-blue-700 transition">
                {state.name}
              </h4>
              <p className="text-sm text-gray-600 flex items-center">
                <MapPin size={12} className="mr-1" />
                {state.relation}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedStates;