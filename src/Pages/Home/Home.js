import React from 'react'
import Appointment from './Appointment'
import Banner from './Banner'
import ContactUS from './ContactUS'
import Footer from './Footer'
import Info from './Info'
import Services from './Services'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Appointment />
      <Testimonial />
      <ContactUS />
      <Footer />
    </div>
  )
}

export default Home
