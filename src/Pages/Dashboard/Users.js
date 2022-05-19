import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Loading from '../Shared/Loading'

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('user', () =>
    fetch('https://morning-tundra-52405.herokuapp.com/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  )

  const makeAdmin = (email) => {
    fetch(`https://morning-tundra-52405.herokuapp.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error('failed to make an admin')
        }
        return res.json()
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast('Made an admin')
          refetch()
        }
      })
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h2 className='text-2xl'>All Users</h2>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((a, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>
                  {a.role !== 'admin' && (
                    <button onClick={() => makeAdmin(a.email)} className='btn'>
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
