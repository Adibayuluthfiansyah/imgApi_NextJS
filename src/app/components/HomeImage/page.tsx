import Link from 'next/link'
import React from 'react'

interface ImageData {
id: string;
urls: {
    regular: string;
    full: string;
};
alt_description?: string;
description?: string;
user: {
    username: string;
};
}

interface HomeImageProps {
api: {
    results: ImageData[];
};
}


const HomeImage = ({api}: HomeImageProps) => {
    if (!api || !api.results || !Array.isArray(api.results)) {
        return (
            <div className='text-center p-4'>
                <p>No Image data available</p>
            </div>
        );
    }
    return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
    {api?.results?.map((image: ImageData) => (
        <div key={image.id}>
        <Link 
            href={image.urls.regular || image.urls.full} 
            className="cursor-pointer shadow-xl block" 
            target="_blank"
        >
            <div>
            {image.urls && (
                <img
                src={image.urls.regular}
                alt={image.alt_description || image.description || "Image"}
                className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                />
            )}
            </div>
            <p className="p-2 text-center text-sm">
            {image.user.username}
            </p>
        </Link>
        </div>
    ))}
    </div>
);
};
export default HomeImage