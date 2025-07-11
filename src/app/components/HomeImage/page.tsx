'use client'

import Link from 'next/link'
import React from 'react'
import Pagination from '../Pagination/page';


interface ImageData {
  id: string;
  urls: {
    regular: string;
    full: string;
    small: string;
  };
  alt_description?: string;
  description?: string;
  user: {
    username: string;
    name?: string;
    profile_image?: {
      medium: string;
    };
  };
  likes?: number;
  width?: number;
  height?: number;
}

interface HomeImageProps {
  api: {
    results: ImageData[];
  };
}

interface Pagination {
  api : {
    total_pages?:number; 
  }
}


const HomeImage = ({ api }: HomeImageProps) => {
  if (!api || !api.results || !Array.isArray(api.results)) {
    return (
      <div className='text-center py-20'>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-500/20 rounded-full mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">No Images Found</h3>
        <p className="text-gray-400">No image data available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Free Stock Photos
        </h2>
        <p className="text-black text-lg">
          High-quality images from talented photographers
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {api.results.map((image: ImageData) => (
          <div key={image.id} className="break-inside-avoid">
            <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <Link 
                href={image.urls.regular || image.urls.full} 
                className="block relative" 
                target="_blank"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  {image.urls && (
                    <img
                      src={image.urls.regular || image.urls.small}
                      alt={image.alt_description || image.description || "Free stock photo"}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-2 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-colors">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Stats */}
                  {image.likes && (
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-1 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>{image.likes}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {image.user.profile_image?.medium && (
                        <img 
                          src={image.user.profile_image.medium}
                          alt={image.user.name || image.user.username}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {image.user.name || image.user.username}
                        </p>
                        <p className="text-xs text-gray-500">
                          @{image.user.username}
                        </p>
                      </div>
                    </div>
                    
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <Pagination/>
    </div>
  );
};

export default HomeImage;