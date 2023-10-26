import React from 'react'
import { faculty } from '../faculty'

const Faculty = () => {
  return (
    <div className='container'>
      <h1 className='font-bold text-3xl my-12 text-center'>Meet Our Faculties</h1>
      <div className='grid md:grid-cols-2 gap-y-20 mb-20'>
      {faculty.map((items) => {
        return (
        <div className='flex gap-4 flex-col md:flex-row'>
          <img src={items.url} alt="" width={200} height={200} />
          <div className='font-medium text-[16px]  flex flex-col gap-5'>
          <h2>Name: {items.name}</h2>
          <h3>Designation: {items.designation}</h3>
          <h3>Qualification: {items.qualification}</h3>
          <h3>Date of Joining:{items.doj}</h3>
          </div>
        </div> 
        );
      })}
      </div>
    </div>
  )
}

export default Faculty