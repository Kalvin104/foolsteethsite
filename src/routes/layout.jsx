import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/header'
import Nav from '../components/nav'
import Homepage from '../components/homepage'
import Footer from '../components/footer'
import Socials from '../components/socials'

export default function Layout() {
  return (
    <>
        <Header />
        <div id='socials'>
          <Socials />  
        </div>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}
