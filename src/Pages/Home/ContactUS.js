import React from 'react'

const ContactUS = () => {
  return (
    <div className='container mx-auto bg-appointment px-8 py-16 mt-8 text-center'>
      <h1 className='text-primary'>Contact Us</h1>
      <h1 className='text-white text-2xl font-semibold'>
        Stay Connected With Us
      </h1>
      <input
        type='text'
        placeholder='Email Address'
        className='input input-bordered w-full md:w-3/4 lg:w-1/2 md:mx-auto block mt-4'
      />
      <input
        type='text'
        placeholder='Subject'
        className='input input-bordered w-full md:w-3/4 lg:w-1/2 md:mx-auto block mt-4'
      />
      <textarea
        className='textarea textarea-bordered w-full md:w-3/4 lg:w-1/2 md:mx-auto block mt-4'
        placeholder='Your Message'
      ></textarea>
      <button className='btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary mt-4'>
        Submit
      </button>
    </div>
  )
}

export default ContactUS
