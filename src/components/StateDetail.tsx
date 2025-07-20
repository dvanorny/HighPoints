import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Calendar } from 'lucide-react';
import { getStateData } from '../data/stateDetails';
import { StateDetail as StateDetailType } from '../types';
import PhotoGallery from './PhotoGallery';
import AdventureStory from './AdventureStory';
import RelatedStates from './RelatedStates';

const StateDetail = () => {
  const { stateCode } = useParams<{ stateCode: string }>();
  const [stateData, setStateData] = useState<StateDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!stateCode) {
      setError('No state specified');
      setLoading(false);
      return;
    }
    
    // Simulate API call to get state data
    const fetchData = async () => {
      setLoading(true);
      try {
        // This would be a real API call in a production app
        const data = await getStateData(stateCode);
        setStateData(data);
        setError(null);
      } catch (err) {
        setError('State not found or no adventures recorded');
        setStateData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [stateCode]);
  
  // const handlePrevState = () => {
  //   if (!stateData?.prevState) return;
  //   navigate(`/state/${stateData.prevState.code}`);
  // };
  
  // const handleNextState = () => {
  //   if (!stateData?.nextState) return;
  //   navigate(`/state/${stateData.nextState.code}`);
  // };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900"></div>
        <p className="mt-4 text-gray-600">Loading adventure details...</p>
      </div>
    );
  }
  
  if (error || !stateData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <MapPin size={48} className="mx-auto text-red-500 mb-4" />
        <h2 className="text-2xl font-serif font-bold mb-2">Adventure Not Found</h2>
        <p className="text-gray-600 mb-6">{error || 'No adventure details available for this state.'}</p>
        <Link 
          to="/"
          className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Map
        </Link>
      </div>
    );
  }
  
  document.title = `${stateData.name} Adventure | US High Points`;
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center text-sm">
        <Link to="/" className="text-blue-800 hover:text-blue-600 transition">Map</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 font-medium">{stateData.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section */}
            <div 
              className="h-64 bg-cover bg-center relative" 
              style={{ backgroundImage: `url(${stateData.heroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                  {stateData.name}
                </h1>
                <div className="flex items-center text-amber-300">
                  <Calendar size={16} className="mr-1" />
                  <span className="text-sm">{stateData.visitDate}</span>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              <AdventureStory story={stateData.story} />
              
              {/* Photo Gallery */}
              <div className="mt-8">
                <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">Photo Gallery</h3>
                <PhotoGallery photos={stateData.photos} />
              </div>
            </div>
          </div>
          
          {/* Navigation between states */}
            {/* 
            <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrevState}
              disabled={!stateData.prevState}
              className={`flex items-center px-4 py-2 rounded-md ${
              stateData.prevState 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition`}
            >
              <ArrowLeft size={16} className="mr-1" />
              {stateData.prevState ? stateData.prevState.name : 'No Previous State'}
            </button>
            
            <button
              onClick={handleNextState}
              disabled={!stateData.nextState}
              className={`flex items-center px-4 py-2 rounded-md ${
              stateData.nextState 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition`}
            >
              {stateData.nextState ? stateData.nextState.name : 'No Next State'}
              <ArrowRight size={16} className="ml-1" />
            </button>
            </div>
            */}
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Hike Details Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">Hike Details</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="font-medium w-32">Name:</span>
                <span>{stateData.tallPoint}</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-32">Visited:</span>
                <span>{stateData.visitDate}</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-32">Weather:</span>
                <span>{stateData.weather}</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-32">Elevation Gain:</span>
                <span>{stateData.elevationGain} ft</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-32">Distance:</span>
                <span>{stateData.hikeLength} mi</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-32">Hike Time:</span>
                <span>{stateData.hikeTime} min</span>
              </div>
            </div>
          </div>
          
          {/* High Point Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">High Point Information</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <span className="font-medium w-36">Elevation:</span>
                <span>{stateData.information.elevation} ft</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-36">Elevation Rank:</span>
                <span>{stateData.information.elevationRank} of 50</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-36">Location:</span>
                <span>{stateData.information.location}</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">Additional Links</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href={stateData.links.highpointGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline hover:text-blue-900 transition"
                    >
                      Highpoint Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href={stateData.links.summitPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline hover:text-blue-900 transition"
                    >
                      Summit Post
                    </a>
                  </li>
                  <li>
                    <a
                      href={stateData.links.wikipedia}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline hover:text-blue-900 transition"
                    >
                      Wikipedia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map location */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">Location</h3>
            <div className="aspect-video bg-gray-200 rounded-md overflow-hidden">
              <img 
                src={stateData.mapImage} 
                alt={`Map of ${stateData.name}`} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Related States */}
          <RelatedStates 
            currentState={stateData.code} 
            relatedStates={stateData.relatedStates ?? []} 
          />
        </div>
      </div>
    </div>
  );
};

export default StateDetail;