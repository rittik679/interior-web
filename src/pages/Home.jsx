import React from 'react'
import Hhero from '../components/Hhero'
import What from '../components/What'
import Feature from '../components/Feature'
import Reviews from '../components/Reviews'
import Appointment from '../components/Appointment'
import { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
    document.title = "Home - ABC Interior";  // Set the title
  }, []);


  return (
    <>
      <Hhero/>
      <What/>
      <Feature/>
      <Reviews/>
      <Appointment/>
      
    </>
  )
}

export default Home
