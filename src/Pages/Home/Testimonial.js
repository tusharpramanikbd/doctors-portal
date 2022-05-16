import React from 'react'
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  const count = [1, 2, 3]
  return (
    <section className='container mx-auto mt-4 p-8'>
      <h1 className='text-primary'>Testimonial</h1>
      <div className='grid grid-cols-autoright'>
        <h1 className='text-3xl font-semibold'>What Our Patients Says</h1>
        <img src={quote} alt='quote' className='w-20' />
      </div>
      <div className='mt-4 lg:grid lg:grid-cols-3 lg:gap-x-3'>
        {count.map((val) => (
          <TestimonialCard key={val} />
        ))}
      </div>
    </section>
  )
}

export default Testimonial
