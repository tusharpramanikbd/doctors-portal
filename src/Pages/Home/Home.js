import React from 'react'
import MakeAppointment from './MakeAppointment'
import Banner from './Banner'
import ContactUS from './ContactUS'
import Footer from '../Shared/Footer'
import Info from './Info'
import Services from './Services'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonial />
      <ContactUS />
      <Footer />
    </div>
  )
}

export default Home
