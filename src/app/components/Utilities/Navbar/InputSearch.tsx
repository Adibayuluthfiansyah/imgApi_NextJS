'use client'

import { MagnifyingGlass} from "@phosphor-icons/react"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSearch = (event:React.FormEvent) => {
        event.preventDefault();
        const keyword = searchRef.current?.value

        if(keyword&&keyword.trim()!== '') {
            router.push(`/search/${encodeURIComponent(keyword.trim())}`)
        }
    }
    return (
        <div className='flex md:flex-row flex-col justify-between relative bg-amber-400 m-3 rounded-2xl'>
            <input placeholder='Search Image...' className='p-2 pr-12 w-full border-none rounded-2xl outline-none'
            ref={searchRef} />
            
            <button className="absolute end-2 top-1.5 cursor-pointer" onClick={handleSearch}>
                <MagnifyingGlass size={25} />
            </button>
        </div>

    )
}

export default InputSearch