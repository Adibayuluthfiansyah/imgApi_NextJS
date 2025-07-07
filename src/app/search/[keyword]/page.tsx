import React from 'react'

interface SearchPageProps {
    params: {
        keyword: string
    }
}

const Page = ({params}: SearchPageProps) => {
    console.log(params.keyword)
    return (
        <div>
            <h1>Search Form</h1>
        </div>
    ) 
}

export default Page