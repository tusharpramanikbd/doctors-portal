import { format } from 'date-fns'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import BookingModal from './BookingModal'
import Service from './Service'

const AvailableAppointments = ({ selected }) => {
  const [treatment, setTreatment] = useState(null)

  const formattedDate = format(selected, 'PP')

  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery(['available', formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  )

  if (isLoading) return <Loading />

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-center text-secondary'>
        Available Appointments on {format(selected, 'PP')}.
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={selected}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  )
}

export default AvailableAppointments
