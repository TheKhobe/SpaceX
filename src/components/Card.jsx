import React from 'react'

export default function Card() {

  return (
   <div className='flex flex-col space-y-4'>
  
       <div className='flex flex-col bg-blue p-6 space-y-4 pt-40'>
       
          <p className='text-white uppercase'>RECEnt Launch</p>
<h1 className='text-white text-4xl uppercase'>STARlink mission</h1>
<button className='w-40 py-4 text-white uppercase border-2 hover:bg-white hover:text-black'>learn more</button>
    </div>
    <div className='flex flex-col bg-blue p-6 space-y-4 pt-40'>
    <p className='text-white uppercase'>completed mission</p>
<h1 className='text-white text-4xl uppercase'>DRAGON AND CREW-6 RETURN TO EARTH</h1>
<button className='w-40 py-4 text-white uppercase border-2 hover:bg-white hover:text-black'>learn more</button>
    </div>
    <div className='flex flex-col bg-blue p-6 space-y-4 pt-40'>
 
<h1 className='text-white text-4xl  uppercase'>STARSHIP FlighT test</h1>
<button className='w-40 py-4 text-white uppercase border-2 hover:bg-white hover:text-black'>learn more</button>
    </div>
</div>
  )
}
