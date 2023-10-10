import React from 'react'
import SS from "/src/assets/studentslist.pdf"
import rtt from "/src/assets/TTSem5.jpg"
import TS from "/src/assets/students/TEIT_Syllabus_MU.pdf"

const TE = () => {
  return (

    <div className='container flex flex-cols-2 gap-4 mt-10 mb-[13rem] '>
      <div className='flex flex-col gap-4 mx-10'>
        <div className='flex font-semibold'>Student List</div>
        <a href={SS} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          2023-24
        </a>
      </div>
      <div className='flex flex-col gap-4 mx-10'>
        <div className='flex font-semibold'>Time Table</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 5 Regular 2023-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 5 Winter Exam 2023-24
        </a>
      </div>
      <div className='flex flex-col gap-4 mx-10'>
        <div className='flex font-semibold'>Syllabus</div>
        <a href={TS} target='_blank' className=' font-[400] text-blue-500 hover:underline'>
          SEM 5 & SEM 6
        </a>
      </div>

      <div className='flex flex-col gap-4 mx-10'>
        <div className='flex font-semibold'>Result</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 3 Result 2022-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 4 Result 2022-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 3 KT Result 2022-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Semester 4 KT Result 2022-23
        </a>
      </div>
    </div>

  )
}

export default TE