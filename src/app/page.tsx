import React from 'react'
import HomeImage from './components/HomeImage/page'

const Page = async () => {


  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
  const homeImageHero = await response.json()

  console.log(homeImageHero)


  return (
    <div className='justify-center items-center p-4'>
      <h1 className='p-4 justify-center text-center text-2xl font-bold'>Your Image Change The World</h1>
      <HomeImage api={homeImageHero} />
    </div>

  )
}

export default Page
