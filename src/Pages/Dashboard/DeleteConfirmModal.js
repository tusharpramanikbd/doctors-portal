import React from 'react'
import { toast } from 'react-toastify'

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor

  const handleDoctorDelete = (email) => {
    fetch(`https://morning-tundra-52405.herokuapp.com/doctor/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success('Doctor is deleted')
          setDeletingDoctor(null)
          refetch()
        }
      })
  }

  return (
    <div>
      <input
        type='checkbox'
        id='delete-confirm-modal'
        className='modal-toggle'
      />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-500'>
            Are you sure to delete doctor {name}?
          </h3>
          <p className='py-4'>
            You can not get back the doctor once you delete
          </p>
          <div className='modal-action'>
            <label
              onClick={() => handleDoctorDelete(email)}
              htmlFor='delete-confirm-modal'
              className='btn'
            >
              Delete
            </label>
            <label htmlFor='delete-confirm-modal' className='btn'>
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
