import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(
        `https://morning-tundra-52405.herokuapp.com/booking?patient=${user.email}`,
        {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/')
          }
          return res.json()
        })
        .then((data) => setAppointments(data))
    }
  }, [user, navigate])
  return (
    <div>
      <h1 className='mt-4'>My appointments : {appointments.length}</h1>
      <div className='overflow-x-auto mt-4'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className='btn btn-xs btn-success text-white'>
                        Pay
                      </button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p>
                        <span className='text-success'>Paid</span>
                      </p>
                      <p>
                        Transaction Id :{' '}
                        <span className='text-success'>{a.transactionId}</span>
                      </p>
                    </div>
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

export default MyAppointments
