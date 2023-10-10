import React from 'react'
// import adityaphoto from '/src/assets/Vishnuyelde.jpg'
import vishnuphoto from '/src/assets/Vishnuyelde.jpeg'
// import prachitiphoto from '/src/assets/ithod.jpg'


const Developers = () => {
  return (
    <div className='container'>
        <h2 className="font-bold text-center text-3xl mt-10 mb-10">MEET OUR DEVELOPERS</h2>
          <div className='flex justify-around mb-20'>

            <div className='text-center font-semibold flex flex-col justify-center items-center'>
              <img src={vishnuphoto} className='mb-5' alt="Developer" width={300} />
              <p className='text-lg'>Name : Mr. Aditya Sharma</p>
              <p className='text-lg'>Specialization : Full Stack Web Developer</p>
            </div>
          
            <div className='text-center font-semibold flex flex-col justify-center items-center'>
              <img src={vishnuphoto} className='mb-5' alt="Developer" width={300} />
              <p className='text-lg'>Name : Mr. Vishnu Yelde</p>
              <p className='text-lg'>Specialization : Frontend Developer</p>
            </div>
          
            <div className='text-center font-semibold flex flex-col justify-center items-center'>
              <img src={vishnuphoto} className='mb-5' alt="Developer" width={300} />
              <p className='text-lg'>Name : Miss Prachiti Yadav</p>
              <p className='text-lg'>Specialization : Assistant Engineer</p>
            </div>
          
            </div>
          </div>
        
        
      
  )
}

export default Developers