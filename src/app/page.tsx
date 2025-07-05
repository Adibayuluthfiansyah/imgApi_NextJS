
import React from 'react'
import HomeImage from './components/HomeImage/page'

const Page = async () => {


  const response = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
  const imageLaunch = await response.json()

  console.log(imageLaunch)


  return (
    <div>
      <h1>Home page</h1>
      {imageLaunch?.results?.map((data:any, id: any) => {
        return (
          <div key={id} className='p-4 '>
            <h3>{data.description}</h3>
            {data.urls && (
              <img
              src={data.urls.regular}/>
            )}
          <p>{data.user.username}</p>
          </div>
        )
      })}
      <HomeImage/>
    </div>
    
  )
}

export default Page
