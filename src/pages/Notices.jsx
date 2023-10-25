import React from 'react'
import DD from "/src/assets/DD.jpg"
import UT from "/src/assets/tt.jpg";
import newsGif from '../assets/header/news.gif';

const Notices = () => {
  return (
    <div className='container '>
      <div className='items-center my-10  flex flex-col gap-4 mb-80'>
        <div className="flex items-center font-semibold text-blue-500 hover:underline gap-4">
          <img src={newsGif} alt="news gif animation" width="40" />
          <a href="" target='blank'>
            <p>Viva/Oral is starting from 27th October 2023</p>
          </a>
        </div>
        <div className="flex items-center font-semibold text-blue-500 hover:underline gap-4">
          <img src={newsGif} alt="news gif animation" width="40" />
          <a href="" target='blank'>
            <p>Semester V Exams starts from 22nd November 2023</p>
          </a>
        </div>
        <div className="flex items-center font-semibold text-blue-500 hover:underline gap-4">
          <img src={newsGif} alt="news gif animation" width="40" />
          <a href={UT} target='blank'>
            <p>UT 2 Papers will start from 17th October to 19th October</p>
          </a>
        </div>
        <div className="flex items-center font-semibold text-blue-500 hover:underline gap-4">
          <img src={newsGif} alt="news gif animation" width="40" />
          <a href={DD} target='blank'>
            <p>Submit your Exam form with DD before 11th November</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Notices