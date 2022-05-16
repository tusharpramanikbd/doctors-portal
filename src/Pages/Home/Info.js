import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4'>
      <div className='bg-gradient-to-r from-secondary to-primary px-4 py-6 lg:px-2 text-white rounded-lg lg:grid lg:grid-cols-auto lg:items-center lg:gap-x-2'>
        <img src={clock} alt='clock' className='mx-auto lg:w-9/12' />
        <div>
          <p className='text-xl mt-4 lg:mt-0'>Opening Hours</p>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className='bg-accent px-4 py-6 lg:px-2 text-white rounded-lg lg:grid lg:grid-cols-auto lg:items-center lg:gap-x-2'>
        <img src={marker} alt='marker' className='mx-auto lg:w-9/12' />
        <div>
          <p className='text-xl mt-4 lg:mt-0'>Visit Our Location</p>
          <p className='text-sm mt-2'>Brooklyn, NY 10036, United States.</p>
        </div>
      </div>
      <div className='bg-gradient-to-r from-secondary to-primary px-4 py-6 lg:px-2 text-white rounded-lg lg:grid lg:grid-cols-auto lg:items-center lg:gap-x-2'>
        <img src={phone} alt='phone' className='mx-auto lg:w-9/12' />
        <div>
          <p className='text-xl mt-4 lg:mt-0'>Contact Us Now</p>
          <p className='text-sm mt-2'>+000 123 456789</p>
        </div>
      </div>
    </div>
  )
}

export default Info
