import React from 'react'
import hodPhoto from '/src/assets/ithod.jpg'
import autoprefixer from 'autoprefixer'

const Hod = () => {
  return (
    <div className='container'>
      <h2 className="font-bold text-center text-2xl mt-10 mb-10">HOD's Message</h2>
      <div className="flex md:flex-row flex-col gap-5 text-center mb-10">
        <div className="min-w-[25%]">
          <img src={hodPhoto} alt="HOD" width={250} height={300} className="mx-auto" />
          <div className='font-semibold text-lg mt-5'>
            <p>Prof. Dr. Savita Sangam (PhD)</p>
          </div>
        </div>
        <div className="text-left flex flex-col gap-5">
          <p>
            On behalf of the faculty, staff, and students of the Department of Information Technology SSJCOE, Dombivli (E), I, Dr. Savita Sangam Head of Department, welcome you all. I am happy to lead the department established in 1999 having a glorious history of 24 years. The department conducts under-graduate and Honours certification programmes.
          </p>
          <p>
            Information Technology and Computer Engineering fields have revolutionized the way we communicate, work, and live our daily lives. With the rapid advancements in technology, the demand for skilled professionals in these fields continues to grow exponentially. Over the years, the department has established the infrastructure and capabilities necessary to meet the demands of business, academia, and students. The Department's highly skilled and experienced faculty members are dedicated to providing the quality education through the implementation of minor/major projects, well-planned theory lessons, and practical sessions. We have cutting-edge buildings with fully functional laboratories and other equipment to support our students' educational needs. We promote student participation in technical conferences, project competitions, and other events at the college and university levels and offer support.Students are also given ample opportunities of internships and research activities like technical report writing, publishing research papers and are motivated for filing copyrights and patents throughout their bachelor program.The department is dedicated to delivering quality education and achieving excellence through systematic efforts of faculty and students.
          </p>
          <p>
          We want all of our students to succeed in their careers and wish them happiness and success as they take on new responsibilities in their lives.
          </p>
          <div>

          <p className="font-semibold">Best wishes,</p>
          <p>Dr. Savita Sangam</p>
          <p>Associate Professor and HOD, IT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hod