import React from 'react'

export default function () {
  return (
    <footer className='flex items-center bg-black md:flex-row sm:flex-col sm:space-y-12 md:space-y-0 md:space-x-12 justify-center mt-20 bottom'>
     <p className='text-white sm:text-center uppercase text-lighter'>spacex &copy; 2023</p>
     <div className='flex flex-row space-x-12 justify-center'>
     <h4 className='text-white sm:text-center uppercase'>Privacy policy</h4>
     <h4 className='text-white text-center uppercase'>Suppliers</h4>
     </div>
    </footer>
  )
}
