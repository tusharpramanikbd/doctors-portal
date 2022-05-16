import React from 'react'
import doctor from '../../assets/images/doctor-small.png'

const Appointment = () => {
  return (
    <div className='container mx-auto bg-appointment p-8 lg:p-16 mt-24 lg:relative'>
      <img
        src={doctor}
        alt='doctor'
        className='hidden lg:block lg:absolute lg:bottom-0 lg:w-[32rem] lg:left-4'
      />
      <div className='lg:w-1/2 lg:ml-auto'>
        <h1 className='text-primary'>Appointment</h1>
        <h1 className='text-3xl mt-4 text-white'>Make an appointment Today</h1>
        <p className='mt-4 text-gray-200'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className='btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary mt-4'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Appointment
