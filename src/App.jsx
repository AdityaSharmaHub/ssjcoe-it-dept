import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hod from "./pages/about/Hod";
import Contact from "./pages/about/Contact";
import Developers from "./pages/about/Developers";
import Gallery from "./pages/Gallery";
import Faculty from "./pages/Faculty";
import SE from "./pages/students/SE";
import TE from "./pages/students/TE";
import BE from "./pages/students/BE";
import Alumni from "./pages/Alumni";
import Notices from "./pages/Notices";
import Login from "./pages/Login"


export default function App() {
  return(
    <>
      <BrowserRouter>
      <Header />
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hod" element={<Hod />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/se" element={<SE />} />
          <Route path="/te" element={<TE />} />
          <Route path="/be" element={<BE />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}