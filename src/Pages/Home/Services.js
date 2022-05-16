import React from 'react'
import ServiceBanner from './ServiceBanner'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-primary text-center font-semibold mt-8'>
        OUR SERVICES
      </h1>
      <h1 className='text-center text-2xl font-bold'>Services We Provide</h1>
      <ServiceCards />
      <ServiceBanner />
    </div>
  )
}

export default Services
