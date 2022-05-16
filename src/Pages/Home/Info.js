import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard'

const Info = () => {
  const cardInfo = [
    {
      img: clock,
      cardTitle: 'Opening Hours',
      cardText: 'Lorem ipsum dolor, amet consectetur adipisicing elit.',
      cardStyle: 'bg-gradient-to-r from-secondary to-primary',
    },
    {
      img: marker,
      cardTitle: 'Visit Our Location',
      cardText: 'Brooklyn, NY 10036, United States.',
      cardStyle: 'bg-accent',
    },
    {
      img: phone,
      cardTitle: 'Contact Us Now',
      cardText: '+000 123 456789',
      cardStyle: 'bg-gradient-to-r from-secondary to-primary',
    },
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4'>
      <InfoCard cardInfo={cardInfo[0]} />
      <InfoCard cardInfo={cardInfo[1]} />
      <InfoCard cardInfo={cardInfo[2]} />
    </div>
  )
}

export default Info
