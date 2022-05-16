import React from 'react'
import ServiceCard from './ServiceCard'
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const ServiceCards = () => {
  const serviceCardInfo = [
    {
      img: floride,
      title: 'Floride Treatment',
      text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.',
    },
    {
      img: cavity,
      title: 'Cavity Filling',
      text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.',
    },
    {
      img: whitening,
      title: 'Teeth Whitening',
      text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the.',
    },
  ]
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4 mt-4'>
      <ServiceCard serviceCardInfo={serviceCardInfo[0]} />
      <ServiceCard serviceCardInfo={serviceCardInfo[1]} />
      <ServiceCard serviceCardInfo={serviceCardInfo[2]} />
    </div>
  )
}

export default ServiceCards
