import React from 'react'
import collegeLogo from '../assets/clg_logo.png';
import itsaLogo from '../assets/ITSA_logo.png';
import newsGif from '../assets/header/news.gif';
import DD from "/src/assets/DD.jpg"


const Header = () => {
  return (
    <div className="pt-3">
      <div className="w-[1200px] mx-auto flex justify-between items-center mb-4">

        {/*----------------- College LOGO ---------------- */}
        <div className="college_logo">
          <a href="https://shivajiraojondhalecoe.org.in/" target="_blank">
            <img src={collegeLogo} alt="College Logo" width="120" />
          </a>
        </div>

        {/*----------------- DEPT AND COLLEGE NAME ----------------*/}
        <div className="header_text text-center">
          <a href="/">
            <h1 className="font-bold text-[1.55rem] text-[#17375D] tracking-wide">Department Of Information Technology (IT)</h1>
            <h2 className="text-[1.05rem] font-semibold">Shivajirao S. Jondhale College Of Engineering, Dombivli (SSJCOE)</h2>
            <h2 className="text-[0.9rem] font-medium tracking-wide text-gray-600">Developed By: Aditya Sharma, Vishnu Yelde and Prachiti Yadav</h2>
          </a>
        </div>

        {/*--------------------- ITSA LOGO -----------------------*/}
        <div className="itsa_logo">
          <a href="https://www.google.com" target="_blank">
            <img src={itsaLogo} alt="ITSA Logo" width="120" />
          </a>
        </div>
      </div>


      {/* -------------------------- Announcement Section ------------------------------ */}
      <div className="border-gray-300 border-[1px] p-[4px]">
        <marquee behavior="" direction="">
          <section className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={newsGif} alt="news gif animation" width="40" />
              <p>UT 2 Papers will start from 17th October to 19th October</p>
            </div>
            <div className="flex items-center gap-2">
            <img src={newsGif} alt="news gif animation" width="40" />
              <a href={DD} target='blank'>
                <p>Submit your Exam form with DD before 11th November</p>
              </a>
            </div>
          </section>
        </marquee>
      </div>


    </div>
  )
}

export default Header