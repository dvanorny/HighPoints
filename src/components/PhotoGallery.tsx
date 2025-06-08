import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Photo } from '../types';

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };
  
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, index) => (
          <div 
            key={index}
            className="aspect-square overflow-hidden rounded-md cursor-pointer transition-transform hover:scale-[1.02] shadow-sm hover:shadow-md"
            onClick={() => openModal(index)}
          >
            <img 
              src={photo.thumbnail || photo.url} 
              alt={photo.caption} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition"
            onClick={closeModal}
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
          
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={photos[currentIndex].url} 
              alt={photos[currentIndex].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {photos[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
                <p>{photos[currentIndex].caption}</p>
              </div>
            )}
          </div>
          
          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-[90%] px-4 py-2 bg-black/30 rounded-full">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className={`w-8 h-8 rounded-full overflow-hidden border-2 transition ${
                  currentIndex === index ? 'border-amber-400 scale-110' : 'border-transparent opacity-70'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              >
                <img 
                  src={photo.thumbnail || photo.url} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;