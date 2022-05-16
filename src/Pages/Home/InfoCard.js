import React from 'react'

const InfoCard = (props) => {
  const { img, cardTitle, cardText, cardStyle } = props.cardInfo
  return (
    <div
      className={`${cardStyle} px-4 py-6 lg:px-2 text-white rounded-lg lg:grid lg:grid-cols-auto lg:items-center lg:gap-x-2 drop-shadow-lg`}
    >
      <img src={img} alt='card-img' className='mx-auto lg:w-9/12' />
      <div>
        <p className='text-xl mt-4 lg:mt-0'>{cardTitle}</p>
        <p className='text-sm mt-2'>{cardText}</p>
      </div>
    </div>
  )
}

export default InfoCard
