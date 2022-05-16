import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard'

const Info = () => {
  const cardInfo = [
    {
      _id: 1,
      img: clock,
      cardTitle: 'Opening Hours',
      cardText: 'Lorem ipsum dolor, amet consectetur adipisicing elit.',
      cardStyle: 'bg-gradient-to-r from-secondary to-primary',
    },
    {
      _id: 2,
      img: marker,
      cardTitle: 'Visit Our Location',
      cardText: 'Brooklyn, NY 10036, United States.',
      cardStyle: 'bg-accent',
    },
    {
      _id: 3,
      img: phone,
      cardTitle: 'Contact Us Now',
      cardText: '+000 123 456789',
      cardStyle: 'bg-gradient-to-r from-secondary to-primary',
    },
  ]
  return (
    <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-y-0 lg:gap-x-4'>
      {cardInfo.map((cardInfoItem) => (
        <InfoCard key={cardInfoItem._id} cardInfo={cardInfoItem} />
      ))}
    </div>
  )
}

export default Info
