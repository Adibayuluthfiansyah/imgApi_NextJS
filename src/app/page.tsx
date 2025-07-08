import React from 'react';
import HomeImage from './components/HomeImage/page';

const Page = async () => {
  try {
    // Tambahkan count parameter untuk mendapatkan multiple images
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}?client_id=${process.env.CLIENT_ID}&count=12`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const homeImageHero = await response.json();
    
    console.log('API Response:', homeImageHero);
    
    return (
      <div className="justify-center items-center p-4">
        <h1 className="p-4 justify-center text-center text-2xl font-bold">
          Your Image Change The World
        </h1>
        {homeImageHero && Array.isArray(homeImageHero) && homeImageHero.length > 0 ? (
          <HomeImage api={{ results: homeImageHero }} />
        ) : homeImageHero && homeImageHero.urls ? (
          <HomeImage api={{ results: [homeImageHero] }} />
        ) : (
          <p className="text-center text-red-500">
            No image data available
          </p>
        )}
      </div>
    );
    
  } catch (error) {
    console.error('Error fetching images:', error);
    
    // Type casting untuk error handling yang proper
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return (
      <div className="justify-center items-center p-4">
        <h1 className="p-4 justify-center text-center text-2xl font-bold text-red-600">
          Error Loading Images
        </h1>
        <div className="text-center">
          <p className="text-red-500 mb-2">
            Failed to load images: {errorMessage}
          </p>
          <p className="text-gray-600">
            Please check your API configuration and try again.
          </p>
        </div>
      </div>
    );
  }
};

export default Page;