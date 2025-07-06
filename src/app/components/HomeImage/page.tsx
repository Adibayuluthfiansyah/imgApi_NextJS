import React from 'react'

const HomeImage = ({api}:any) => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
            {api.results.map((image:any) => {
                return(

            <div key={image.id}>
            {image.urls && (
             <img
              src={image.urls.regular}/>
            )}
          <p>{image.user.username}</p>
          </div>

                )
            })}
        </div>
    ) 
} 

export default HomeImage