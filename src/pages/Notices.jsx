import React from 'react'
import DD from "/src/assets/DD.jpg"
import UT from "/src/assets/tt.jpg";
import newsGif from '../assets/header/news.gif';
import vivaDatesImg from "/src/assets/viva_dates_sem5.jpg"
import sem5 from "/src/assets/sem_5_exam.pdf";

const Notices = () => {
  return (
    <div className='container '>
      <div className='items-center my-10  flex flex-col gap-4 mb-80'>
        <h2 className="font-semibold text-xl mb-5">Notices</h2>
        <div className="flex items-center font-semibold text-blue-500 hover:underline gap-4">
          <img src={newsGif} alt="news gif animation" width="40" />
          <a href={vivaDatesImg} target='blank'>
            <p>Viva/Oral is starting from 27th October 2023</p>
          </a>
        </div>
        <div className="flex items-center font-semibold text-blue-500 hover:underline gap-4">
          <img src={newsGif} alt="news gif animation" width="40" />
          <a href={sem5} target='blank'>
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