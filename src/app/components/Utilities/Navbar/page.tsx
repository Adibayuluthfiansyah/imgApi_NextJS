import React from 'react'
import Link from 'next/link'


const Navbar = () => {
    return (
        <header className='relative bg-gray/20 shadow-xl'>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className='relative z-10 container mx-auto px-4'>
                <div className='flex md:flex-row flex-col justify-between items-center py-4'>
                    <Link href="/" className='group flex items-center space-x-2 mb-4 md:mb-0'>
                        <div className='text-black font-bold text-2xl group-hover:text-gray-500 transition-all'>
                            LOGO
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar