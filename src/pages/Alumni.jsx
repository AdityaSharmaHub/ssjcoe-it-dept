import React from 'react'
import img1 from '../assets/gallery/img1.jpg';
import img20 from '../assets/gallery/img20.jpg';
import img21 from '../assets/gallery/img21.jpg';
import img22 from '../assets/gallery/img22.jpg';
import img23 from '../assets/gallery/img23.jpg';
import img24 from '../assets/gallery/img24.jpg';

const Alumni = () => {
  return (
    <div className='container'>
      <h1 className='font-bold text-2xl text-center mt-10 mb-10'>Alumni Meet 2023</h1>
      <div className='grid md:grid-cols-3 gap-10 mb-20'> 
      <img className='object-cover border-gray-200 border-2 shadow-md h-[250px] w-[350px] hover:scale-110 transition ease-in-out duration-300' src={img1} alt="img" width={350} height={250} />
      <img className='object-cover border-gray-200 border-2 shadow-md h-[250px] w-[350px] hover:scale-110 transition ease-in-out duration-300' src={img20} alt="img" width={350} height={250} />
      <img className='object-cover border-gray-200 border-2 shadow-md h-[250px] w-[350px] hover:scale-110 transition ease-in-out duration-300' src={img21} alt="img" width={350} height={250} />
      <img className='object-cover border-gray-200 border-2 shadow-md h-[250px] w-[350px] hover:scale-110 transition ease-in-out duration-300' src={img22} alt="img" width={350} height={250} />
      <img className='object-cover border-gray-200 border-2 shadow-md h-[250px] w-[350px] hover:scale-110 transition ease-in-out duration-300' src={img23} alt="img" width={350} height={250} />
      <img className='object-cover border-gray-200 border-2 shadow-md h-[250px] w-[350px] hover:scale-110 transition ease-in-out duration-300' src={img24} alt="img" width={350} height={250} />
      </div>
    </div>
  )
}

export default Alumni