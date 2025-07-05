import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className='bg-fuchsia-500'>
            <div className='flex md:flex-row flex-col justify-between p-4'>
               <Link href="/" className=' font-bold text-2xl '>Home</Link>
               <input placeholder='Search Image...' className='' />
            </div>
        </header>
    ) 
}

export default Navbar