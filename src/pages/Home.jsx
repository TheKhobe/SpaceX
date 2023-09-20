import React, { useState } from 'react'
import logo from './spacex.svg'
import '../App.css'
import close from './icon-close.svg'
import menu from './icon-hamburger.svg'
import { Link } from 'react-router-dom' 
import './Navbar.css'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default function() {
 const [click, setClick] = useState(false);
 const handleClick = () => setClick(!click);
 const closeMobileMenu =() => setClick(false)
  return (
   <>
    <div className='contain flex flex-col'>
     <header className='flex flex-row items-center md:space-x-4 sm:space-y-2 p-6'>
     <Link to='/' >
<img src={logo} alt='img' className='flex sm:ml-36 md:ml-14 md:w-64 sm:w-40 md:p-4 sm:-mt-20 md:mt-0' />
</Link> 
<ul className='space-x-4 flex md:flex-row md:visible sm:invisible flex-col'>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Falcon9</Link>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Falcon Heavy</Link>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Dragon</Link>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Starship</Link>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Human SpaceFlight</Link>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Rideshare</Link>
 <Link to='/' className='text-white uppercase hover:border-b-2'>Starshield</Link>
 </ul>
 <div className='flex flex-row items-center space-x-4'>
   <Link to='/' className='text-white uppercase md:visible sm:invisible hover:border-b-2'> Shop</Link>
 
  <Link to='/' className='text-white uppercase sm:visible md:visible w-12 sm:-mt-36 md:mt-0' onClick={handleClick}>
   {
   click ?<img src={close} className='close'/> :  <img src={menu} />
   }
  </Link>
  <div className='flex flex-col md:invisible sm:visible'>
 <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
 <div className='flex flex-col md:invisible sm:visible'>
 <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Falcon9</Link>
 </li>
 <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Falcon Heavy</Link>
 </li>
  <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Dragon</Link>
 </li>
  <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Starship</Link>
 </li>
  <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Human SpaceFlight</Link>
 </li> 
  <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Rideshare</Link>
 </li>
  <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Starshield</Link>
 </li>
  <li className='nav-item'>
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Starlink</Link>
 </li>
 </div>
 <div className='links'>
 <li className='nav-item'> 
  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Missions</Link>
 </li>
 <li className='nav-item'>  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Launches</Link>
 </li>
 <li className='nav-item'>  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Careers</Link>
 </li>
 <li className='nav-item'>  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Updates</Link>
 </li>
 <li className='nav-item'>  <Link to='/' className='nav-links text-white' onClick={closeMobileMenu}>Shop</Link>
 </li>
 </div>

 </ul>
 </div>
 
  </div>

     </header>
 <input type='text' placeholder='What do you want to search?' className='bg-transparent w-72 p-4 mx-12 my-12 border-1 text-white' />
    </div>
       <Card />
         <Footer />
         </>
  )
}
