import React from 'react'
import { Link } from 'react-router-dom'
// import images from "../images";
import DD from "/src/assets/studentslist.pdf"
const TE = () => {
  return (
    <div className='container flex flex-col gap-4 my-10'>
    <a href={DD} target='_blank' className='font-semibold text-blue-500 hover:underline'>
      Student List 2023-24
    </a>
    <a href={DD} target='_blank' className='font-semibold text-blue-500 hover:underline'>
      Time Table
    </a>
    <a href={DD} target='_blank' className='font-semibold text-blue-500 hover:underline'>
      Syllabus
    </a>
    <a href={DD} target='_blank' className='font-semibold text-blue-500 hover:underline'>
      Results
    </a>
    </div>

  )
}

export default TE