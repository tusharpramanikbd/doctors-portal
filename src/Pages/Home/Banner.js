import React from 'react'
import chair from '../../assets/images/chair.png'

const Banner = () => {
  return (
    <div className='container mx-auto bg-hero-banner bg-no-repeat bg-cover'>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={chair}
            className='block w-full lg:max-w-lg rounded-lg shadow-2xl'
            alt='hero-img'
          />
          <div className='mt-4 lg:mt-0'>
            <h1 className='text-4xl md:text-5xl font-bold'>
              Your New Smile Starts Here
            </h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary text-white'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
