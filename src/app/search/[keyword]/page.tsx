import React from 'react'
import HomeImage from '@/app/components/HomeImage/page'
interface SearchPageProps {
    params: {
        keyword: string
    }
}

const Page = async ({params}:SearchPageProps)  => {

    const {keyword} = await params
    const decodeKeyword = decodeURIComponent(keyword)  
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/results?q=${keyword}&per_page=12`)
    const homeImageHero = await response.json()


    return (
    <div className='justify-center items-center p-4'>
        <h1 className='p-4 justify-center text-center text-2xl font-bold'>Your Image Change The World</h1>
        <p>Searhing Image {decodeKeyword}</p>
        <HomeImage api={homeImageHero.results} />
    </div>

    )
}

export default Page
