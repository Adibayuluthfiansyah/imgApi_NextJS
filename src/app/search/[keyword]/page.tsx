import React from 'react'
import HomeImage from '@/app/components/HomeImage/page'
interface SearchPageProps {
    params: {
        keyword: string
    }
}

const Page = async ({params}:SearchPageProps)  => {

    const {keyword} = await params  
    const response = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=${process.env.CLIENT_ID}&per_page=12`)
    const searchImage = await response.json()
    console.log(keyword)


    return (
    <div className='justify-center items-center p-4'>
        <h1 className='p-4 justify-center text-center text-2xl font-bold'>Searching for {keyword} ... </h1>
        
        <HomeImage api={searchImage} />
    </div>

    )
}

export default Page
