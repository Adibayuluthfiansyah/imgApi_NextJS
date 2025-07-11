import React from 'react'

const Pagination = () => {
  return (
        <div className="text-center flex mt-12 justify-center items-center ">
        <div className='flex p-3'>
        <button className="px-5 py-3 bg-black text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ">
          Prev
        </button>
        </div>
        <div className='gap-3'>
            1
        </div>
        <div className='flex p-3 '>
          <button className="px-5 py-3 bg-black text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Next
        </button>

        </div>
      </div>
  )
}

export default Pagination