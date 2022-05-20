import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading'
import DeleteConfirmModal from './DeleteConfirmModal'

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null)
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery('doctors', () =>
    fetch('http://localhost:5000/doctor', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  )

  const showDoctorDeleteModal = (doctor) => {
    setDeletingDoctor(doctor)
  }

  if (isLoading) return <Loading />

  return (
    <div>
      <h2 className='text-2xl'>Manage Doctors</h2>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <th>
                  <div className='avatar'>
                    <div className='w-16 rounded'>
                      <img src={a.img} alt='Tailwind-CSS-Avatar-component' />
                    </div>
                  </div>
                </th>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.specialty}</td>
                <td>
                  <label
                    onClick={() => showDoctorDeleteModal(a)}
                    htmlFor='delete-confirm-modal'
                    className='btn btn-xs btn-error text-white'
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <DeleteConfirmModal
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        />
      )}
    </div>
  )
}

export default ManageDoctors
