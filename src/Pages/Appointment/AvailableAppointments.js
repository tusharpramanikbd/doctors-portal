import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Service from './Service'

const AvailableAppointments = ({ selected }) => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-center text-secondary'>
        Available Appointments on {format(selected, 'PP')}.
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default AvailableAppointments
