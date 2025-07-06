import Link from 'next/link'
import React from 'react'

const HomeImage = ({api}:any) => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {api?.results?.map((image:any) => {
                return(
        <Link href={image.urls.regular || image.urls.full} key={image.id} className='cursor-pointer' target='blank'>
            <div>
            {image.urls && (
            <img
            src={image.urls.regular}
            alt={image.alt_description || image.description || "Image"}
            />
            )}
        <p>{image.user.username}</p>
        </div>
        </Link>
            )
            })}
        </div>
    ) 
} 
export default HomeImage