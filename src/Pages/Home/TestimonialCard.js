import React from 'react'
import people1 from '../../assets/images/people1.png'

const TestimonialCard = () => {
  return (
    <div className='p-4 rounded-lg shadow-lg mb-4 lg:mb-0'>
      <p>
        It is a long established fact that by the readable content of a lot
        layout. The point of using Lorem a more-or-less normal distribu to using
        Content here, content
      </p>
      <div className='flex mt-4 gap-x-4 items-center'>
        <div className='avatar'>
          <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={people1} alt='avater' />
          </div>
        </div>
        <div>
          <h1 className='text-2xl'>Winson Herry</h1>
          <h1>California</h1>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
