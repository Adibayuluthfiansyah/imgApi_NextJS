
import React from 'react'
import HomeImage from './components/HomeImage/page'

const Page = async () => {


  const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
  const imageLaunch = await response.json()

  console.log(imageLaunch)


  return (
    <div>
      {imageLaunch?.results?.map((data:any, id: any) => {
        return (
          <div key={id} className='p-4 '>
            {data.urls && (
              <img
              src={data.urls.small}/>
            )}
          <p>{data.user.username}</p>
          </div>
        )
      })}
    </div>
    
  )
}

export default Page
