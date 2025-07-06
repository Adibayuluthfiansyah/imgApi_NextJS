'use client'

import { MagnifyingGlass} from "@phosphor-icons/react"

const InputSearch = () => {
    return (

        <div className='flex md:flex-row flex-col justify-between relative bg-amber-400 m-3 rounded-2xl'>
            <input placeholder='Search Image...' className='p-2 pr-12 w -full border-none rounded-2xl outline-none' />
            <button className="absolute end-2 top-1.5 cursor-pointer">
                <MagnifyingGlass size={25} />
            </button>
        </div>

    )
}

export default InputSearch