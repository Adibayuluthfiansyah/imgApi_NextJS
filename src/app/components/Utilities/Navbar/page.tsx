import React from 'react'
import Link from 'next/link'
import InputSearch from './InputSearch'


const Navbar = () => {
    return (
        <header className='bg-amber-500'>
            <div className='flex md:flex-row flex-col justify-between '>
               <Link href="/" className='text-white font-bold text-2xl pl-4 mt-2 '>LOGO</Link>
               <InputSearch/>
            </div>
        </header>
    ) 
}

export default Navbar