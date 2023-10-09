import React from 'react'
import { faculty } from '../faculty'

const Faculty = () => {
  return (
    <div className='container'>
      <h1 className='font-bold text-3xl my-16 text-center'>Meet Our Faculties</h1>
      <div className='grid grid-cols-2 gap-y-20 mb-20'>
      {faculty.map((items) => {
        return (
        <div className='flex gap-4'>
          <img src={items.url} alt="" width={200} height={200} />
          <div className='font-medium flex flex-col gap-4'>
          <h2>Name: {items.name}</h2>
          <h3>Designation: {items.designation}</h3>
          <h3>Qualification: {items.qualification}</h3>
          </div>
        </div> 
        );
      })}
      </div>
    </div>
  )
}

export default Faculty