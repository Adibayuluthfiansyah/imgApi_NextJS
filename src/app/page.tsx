import React from 'react';
import HomeImage from './components/HomeImage/page';
import InputSearch from './components/Utilities/Navbar/InputSearch';

const Page = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}?client_id=${process.env.CLIENT_ID}&count=12`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const homeImageHero = await response.json();
    
    console.log('API Response:', homeImageHero);
    
    return (
      <div className="min-h-screen bg-gray">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gray-900 mb-5" ></div>
          <div className="absolute inset-0 bg-gray"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Your Image
                <span className="text-white block">
                  Change The World
                </span>
              </h1>
              <div className='mb-5'>
                <InputSearch/>
              </div>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
                Discover millions of free high-quality photos & images shared by talented creators
              </p>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative z-10 container mx-auto px-4 pb-20">
          {homeImageHero && Array.isArray(homeImageHero) && homeImageHero.length > 0 ? (
            <HomeImage api={{ results: homeImageHero }} />
          ) : homeImageHero && homeImageHero.urls ? (
            <HomeImage api={{ results: [homeImageHero] }} />
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">No Images Available</h3>
              <p className="text-gray-400">
                We couldn't load any images at the moment. Please try again later.
              </p>
            </div>
          )}
        </div>
      </div>
    );
    
  } catch (error) {
    console.error('Error fetching images:', error);
    
    // Type casting untuk error handling yang proper
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-pink-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Error Loading Images
          </h1>
          <p className="text-red-300 mb-2 text-lg">
            {errorMessage}
          </p>
          <p className="text-gray-400">
            Please check your API configuration and try again.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
};

export default Page;