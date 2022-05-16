import React from 'react'
import Appointment from './Appointment'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
    </div>
  )
}

export default Home
