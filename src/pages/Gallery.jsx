import React from 'react'
import vishnu from '../assets/Vishnuyelde.jpeg'

const Gallery = () => {
  return (
    <div className='container'>
      <h1 className='text-center font-bold text-3xl my-10'>Gallery</h1>
      <div className='grid grid-cols-3 gap-4 mb-20'> 
        <img className='object-contain border-gray-500 border-2 shadow-md h-[250px] w-[350px]' src={vishnu} alt="img" width={350} height={250} />
        <img className='object-contain border-gray-500 border-2 shadow-md h-[250px] w-[350px]' src={vishnu} alt="img" width={350} height={250} />
        <img className='object-contain border-gray-500 border-2 shadow-md h-[250px] w-[350px]' src={vishnu} alt="img" width={350} height={250} />
      </div>
    </div>
  )
}

export default Gallery