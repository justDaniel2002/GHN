import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Mainlayour() {

  window.onscroll = function() {fixedNav()};

  const fixedNav = () => {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    console.log("window off set ", window.pageYOffset)
    console.log("nav off set ", sticky)
    if (window.pageYOffset > sticky&&!navbar.classList.contains("fixed")) {
      navbar.classList.add("fixed");
    } else if(window.pageYOffset == sticky&&navbar.classList.contains("fixed")) {
      navbar.classList.remove("fixed");
    }
  };
  return (
    <div >
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
