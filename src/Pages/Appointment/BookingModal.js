import React from 'react'
import { format } from 'date-fns'

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment
  const handleBooking = (event) => {
    event.preventDefault()
    const slot = event.target.slot.value
    console.log(slot)
    setTreatment(null)
  }
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='font-bold text-lg text-secondary'>
            Booking for : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className='grid grid-cols-1 gap-5 justify-center mt-4'
          >
            <input
              type='text'
              disabled
              value={format(date, 'PP')}
              className='input input-bordered w-full max-w-xl'
            />
            <select
              name='slot'
              className='select select-bordered w-full max-w-xl'
            >
              {slots.map((slot) => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Your name'
              className='input input-bordered w-full max-w-xl'
            />
            <input
              type='email'
              name='email'
              placeholder='Email address'
              className='input input-bordered w-full max-w-xl'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone number'
              className='input input-bordered w-full max-w-xl'
            />
            <input
              type='submit'
              value='Submit'
              className='btn btn-secondary text-white w-full max-w-xl'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
