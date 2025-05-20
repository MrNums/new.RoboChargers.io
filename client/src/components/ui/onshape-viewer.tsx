import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface OnShapeViewerProps {
  documentId: string;
  elementId: string;
  workspaceId?: string;
  width?: string;
  height?: string;
}

const OnShapeViewer: React.FC<OnShapeViewerProps> = ({
  documentId,
  elementId,
  workspaceId = 'w',
  width = '100%',
  height = '400px',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Build the OnShape embed URL
  const embedUrl = `https://cad.onshape.com/documents/${documentId}/w/${workspaceId}/e/${elementId}?renderMode=0&configuration=default&explodeStep=0&autoRotate=0&viewOnly=1`;
  
  // Handle iframe loading state
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  const handleError = () => {
    setError('Failed to load OnShape model');
    setIsLoading(false);
  };
  
  // Set a timeout for loading - if it takes too long, show an error
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setError('Loading timed out. Check your connection.');
        setIsLoading(false);
      }
    }, 20000); // 20 seconds timeout
    
    return () => clearTimeout(timer);
  }, [isLoading]);
  
  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-900 bg-opacity-90 dark:bg-opacity-90 z-10">
          <div className="text-center">
            <img 
              src="/images/logos/ChargerBolt.png" 
              alt="Charging" 
              className="h-12 w-auto mx-auto mb-2 animate-pulse" 
            />
            <p className="text-[#0a1a70] dark:text-blue-300 font-medium">Loading 3D model...</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">This may take a moment</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 dark:bg-red-950/30 z-10">
          <div className="text-center p-4">
            <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Try refreshing the page or check if the OnShape document is public
            </p>
          </div>
        </div>
      )}
      
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        onLoad={handleLoad}
        onError={handleError}
        allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; payment; picture-in-picture"
        allowFullScreen
        className="border-0"
      />
      
      {!isLoading && !error && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#1a36e8] bg-opacity-80 text-white text-xs px-3 py-1 rounded-full shadow-md">
          Click and drag to rotate • Scroll to zoom
        </div>
      )}
    </div>
  );
};

export default OnShapeViewer;