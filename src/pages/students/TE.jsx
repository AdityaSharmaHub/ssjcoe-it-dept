import React from 'react'
import SS from "/src/assets/studentslist.pdf"
import rtt from "/src/assets/TTSem5.jpg"
import TS from "/src/assets/students/TEIT_Syllabus_MU.pdf"

const TE = () => {
  return (

    <div className='container flex md:flex-row flex-col gap-10 justify-between mt-10 mb-20' style={{padding: 20}}>
      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Student List</div>
        <a href={SS} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          2023-24
        </a>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Time Table</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Sem 5 Regular 23-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Sem 5 Winter Exam 23-24
        </a>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Syllabus</div>
        <a href={TS} target='_blank' className=' font-[400] text-blue-500 hover:underline'>
          SEM 5 & SEM 6
        </a>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>Result</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Sem 3 Result 22-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Sem 4 Result 22-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Sem 3 KT Result 22-23
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          Sem 4 KT Result 22-23
        </a>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='flex font-semibold'>IA Results</div>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          EEB Result 23-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          IP Result 23-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          CNS Result 23-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          SE Result 23-24
        </a>
        <a href={rtt} target='_blank' className='font-[400] text-blue-500 hover:underline'>
          ADMT Result 23-24
        </a>
      </div>
    </div>

  )
}

export default TE