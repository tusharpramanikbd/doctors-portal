import React, { useState } from 'react'
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'

const AppointmentBanner = () => {
  const [selected, setSelected] = useState(new Date())
  let footer = <p>Please pick a day.</p>
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>
  }
  return (
    <div className='container mx-auto bg-hero-banner bg-no-repeat bg-cover'>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse gap-y-16 lg:gap-x-32'>
          <img
            src={chair}
            alt='chair'
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div>
            <DayPicker
              mode='single'
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentBanner
