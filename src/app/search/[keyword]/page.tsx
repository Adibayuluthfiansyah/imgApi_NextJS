import React from 'react'

interface SearchPageProps {
    params: {
        keyword: any
    }
}

const Page = async ({params}: SearchPageProps) => {
    const {keyword} = await params
    const decodeKeyword = decodeURIComponent(keyword)
    console.log("Keyword : " , decodeKeyword )
    return (
        <div>
            <h1>Searching for{decodeKeyword}</h1>
            <p>This is search page</p>
        </div>
    ) 
}

export default Page