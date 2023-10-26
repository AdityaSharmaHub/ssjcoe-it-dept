import React from 'react'
import hodPhoto from '../assets/ithod.jpg'
import principalPhoto from '../assets/principal.jpg'
import images from "../images";
import ImageSlider from "../ImageSlider";

const Home = () => {
  return (
    <div className="bg-white">
      <div className="mb-10">
        <ImageSlider images={images}/>
      </div>
      <div className="container my-10">
        <h1 className="font-bold text-2xl mb-3">About</h1>
        <p>Considering the need, demand and place around the city the Samarth Samaj started Shivajirao S. Jondhale College of Engineering at Dombivli (E), from the academic year 1994-95. The Engineering College is one of the esteemed institutions of S. H. Jondhale Educational complex and it is named as Shivajirao S. Jondhale College of Engineering. It is situated 3km from Dombivli Railway station on the eastern side, Kalyan Sheel road behind Venkatesh petrol pump, Sonarpada, Dombivli (E) Dist. Thane M.S. India. The Campus is spread over 17 acres of prime land with beautiful landscape and buildings and all facilities. The college has its own Administrative Office, Classrooms, Library, Well-furnished Reading room, Well Equipped Laboratories, Drawing Halls, Students Common Room, Engineering Workshop etc.</p>

        <h2 className="font-semibold text-xl mt-10 mb-3">Vision</h2>
        <p>To impart quality technical education in the department of Information Technology for creating competent and ethically strong professionals with capabilities of accepting new challenges.</p>

        <h2 className="font-semibold text-xl mt-10 mb-3">Mission</h2>
        <p>To provide learners with the technical knowledge to build a lifelong career in Information Technology Domain. To develop ability among the learners to analyze, design, implement engineering problems and real world applications by providing novel Information Technology solution. To promote close interaction among industry, faculty, and learners to enrich the learning process and enhance career opportunities for learners.</p>

        <h2 className="font-semibold text-xl mt-10 mb-3">PEO</h2>
        <p>A graduate of the department of information technology will be able to Prepare learners with a sound foundation in the basic of engineering fundamentals. Encourage learner to use the best practices and implement technologies to analyze, design and implement information system. Illustrate the leadership, business communication skills, teamwork, and adaptability to achieve goals.</p>

        <div className="flex md:flex-row flex-col justify-between items-center my-5">

        
        <div>
          <h2 className="font-bold text-2xl mt-10 mb-5">HOD</h2>
          <div className="">
          <img src={hodPhoto} alt="HOD Of IT" width={300} height={300} />
          <h3 className="text-center font-semibold text-lg mt-4">Prof. Dr. Savita Sangam</h3>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl mt-10 mb-5">Principal</h2>
          <div className="">
          <img src={principalPhoto} alt="Principal" width={300} height={300}/>
          <h3 className="text-center font-semibold text-lg mt-4">Prof. Dr. P.R. Rodge</h3>
          </div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default Home