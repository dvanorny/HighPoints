import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-serif font-bold mb-4">About</h2>
      <p className="text-gray-600 mb-8 text-center">
        This site is a collection of pictures and brief descriptions of the highest points in each state of the United States that we have visited.
      </p>
      <h2 className="text-3xl font-serif font-bold mb-4">Who Are We?</h2>
      <p className="text-gray-600 mb-8 text-center">
        <span className="font-bold">Dan</span> - works for a software company called{' '}
        <a
          href="https://www.imagetrend.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900 font-bold"
        >
          ImageTrend
        </a>
        {' '}and his son <span className="font-bold">Ben</span> - currently a student at{' '}
        <a
          href="https://www.wisc.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline hover:text-blue-900 font-bold"
        >
          UW-Madison
        </a>
        .
      </p>
      <h3 className="text-2xl font-serif font-bold mb-4">What is the definition of a High Point?</h3>
      <p className="text-gray-600 mb-8 text-center">
        <ul className="list-disc list-inside text-left mx-auto max-w-xl">
          <li>It must be a natural feature (not a building or man-made structure)</li>
          <li>It can be a mountain peak, hilltop, or even a gentle rise (like FL or DE)</li>
          <li>Each of the 50 states has one unique high point</li>
          <li>Elevation is typically measured in feet or meters above mean sea level</li>
        </ul>
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