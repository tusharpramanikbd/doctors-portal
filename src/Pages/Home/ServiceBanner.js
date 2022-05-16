import React from 'react'
import treatment from '../../assets/images/treatment.png'

const ServiceBanner = () => {
  return (
    <div className='card lg:card-side mt-8 p-8'>
      <figure>
        <img src={treatment} alt='Album' className='rounded-lg lg:w-1/2' />
      </figure>
      <div className='card-body p-0 mt-8 lg:mt-0 lg:mr-16 lg:w-3/4'>
        <h2 className='card-title text-4xl'>
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className='mt-4'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className='card-actions justify-start mt-2'>
          <button className='btn btn-primary text-white font-bold'>
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceBanner
