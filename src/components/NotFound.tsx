import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <MapPin size={64} className="text-red-500 mb-4" />
      <h2 className="text-3xl font-serif font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center">
        Looks like you've wandered off the map! This destination doesn't exist.
      </p>
      <button 
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition shadow-md"
      >
        Back to the Map
      </button>
    </div>
  );
};

export default NotFound;