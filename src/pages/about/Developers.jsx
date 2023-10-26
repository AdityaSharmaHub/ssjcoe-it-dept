import React from 'react'
import adityaphoto from '/src/assets/aditya.jpg'
import vishnuphoto from '/src/assets/Vishnuyelde.jpeg'
import prachitiphoto from '/src/assets/prachiti.jpg'


const Developers = () => {
  return (
    <div className='container'>
        <h2 className="font-bold text-center text-3xl mt-10 mb-10">MEET OUR DEVELOPERS</h2>
          <div className='flex flex-col gap-10 md:flex-row justify-around mb-20'>

            <div className='text-center font-semibold flex flex-col justify-center items-center'>
              <img src={adityaphoto} className='mb-3 shadow-md' alt="Developer" width={250} />
              <p className='text-lg'>Mr. Aditya Sharma</p>
              {/* <p className='text-lg'>Full Stack Web Developer</p> */}
            </div>
          
            <div className='text-center font-semibold flex flex-col justify-center items-center'>
              <img src={vishnuphoto} className='mb-3 shadow-md' alt="Developer" width={250} />
              <p className='text-lg'>Mr. Vishnu Yelde</p>
              {/* <p className='text-lg'>Frontend Developer</p> */}
            </div>
          
            <div className='text-center font-semibold flex flex-col justify-center items-center'>
              <img src={prachitiphoto} className='mb-3 shadow-md' alt="Developer" width={250} />
              <p className='text-lg'>Miss Prachiti Yadav</p>
              {/* <p className='text-lg'>Assistant Engineer</p> */}
            </div>
          
            </div>
          </div>
        
        
      
  )
}

export default Developers