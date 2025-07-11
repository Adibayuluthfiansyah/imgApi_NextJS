import React from 'react'
import HomeImage from '@/app/components/HomeImage/page'
interface SearchPageProps {
    params: {
        keyword: string
    }
}

const Page = async ({params}:SearchPageProps)  => {
    const {keyword} = await params  
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_SEARCH_URL}?page=1&query=${decodedKeyword}&client_id=${process.env.CLIENT_ID}&per_page=12`)
    const searchImage = await response.json()



    return (
    <div className='justify-center items-center p-4'>
        <h1 className='p-4 justify-center text-center text-2xl font-bold'>Searching for {decodedKeyword}</h1>
        <HomeImage api={searchImage} />
    </div>

    )
}

export default Page
