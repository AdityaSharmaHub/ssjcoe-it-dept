import React from 'react'
import hodPhoto from '/src/assets/ithod.jpg'
import autoprefixer from 'autoprefixer'

const Hod = () => {
  return (
    <div className='container'>
        <h2 className="font-bold text-center text-2xl mt-10 mb-10">HEAD OF DEPARTMENT Of INFORMATION TECHNOLOGY</h2>
          <div className="flex gap-5 text-center mb-10">
            <img src={hodPhoto} alt="HOD"  width={250} height={300}/>
              
            <div className='text-left font-semibold flex flex-col gap-3'>
              <p>Name : Prof. Dr. Savita Sangam</p>
              <p>Designation : HEAD OF DEPARTMENT</p>
              <p>Qualification : Ph.D.</p>
              <p>Date of Joining : 06-01-1997</p>
            </div>
          </div>
      </div>
  )
}

export default Hod