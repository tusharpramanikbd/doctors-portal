import React from 'react'

const ServiceCard = (props) => {
  const { img, title, text } = props.serviceCardInfo
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={img} alt='service-img' />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ServiceCard
