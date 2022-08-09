/* eslint-disable */

import Header from "./Components/Home/Header";
import Nav from "./Components/Home/Nav";
import Banner from "./Components/Home/Banner";
import LatestAlbum from "./Components/Hero/LatestAlbum";
import Promo from "./Components/Hero/Promo";
import FeaturedAlbum from "./Components/Other/FeaturedAlbum";
import CallToAction from "./Components/Other/CallToAction";
import WorkWithUs from "./Components/Other/WorkWithUs";
import NewsLetter from "./Components/Other/NewsLetter";
import Portfolio from "./Components/Other/Portfolio";
import Events from "./Components/Other/Events";
import About from "./Components/Other/About";
import Meet from "./Components/Other/Meet";
import Contact from "./Components/Other/Contact";
import Footer from "./Components/Home/Footer";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import Modal from "./Components/Other/Modal";
import Register from "./Components/Authentication/Register/Register";
import Login from "./Components/Authentication/Login/Login";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper" id="home">
        <Header />
        <Nav />
        {/* <Banner />
        <LatestAlbum />
        <Promo />
        <FeaturedAlbum />
        <CallToAction />
        <WorkWithUs />
        <NewsLetter />
        <Portfolio />
        <Events />
        <About />
        <Meet />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Modal /> */}

        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      {/* <!-- Javascript files --> */}
      {/* <!-- jQuery --> */}
      <script src="js/jquery.js"></script>
      {/* <!-- Bootstrap JS --> */}
      <script src="js/bootstrap.min.js"></script>
      {/* <!-- WayPoints JS --> */}
      <script src="js/waypoints.min.js"></script>
      {/* <!-- Include js plugin --> */}
      <script src="js/owl.carousel.min.js"></script>
      {/* <!-- One Page Nav --> */}
      <script src="js/jquery.nav.js"></script>
      {/* <!-- Respond JS for IE8 --> */}
      <script src="js/respond.min.js"></script>
      {/* <!-- HTML5 Support for IE --> */}
      <script src="js/html5shiv.js"></script>
      {/* <!-- Custom JS --> */}
      <script src="js/custom.js"></script>
    </>
  );
}

export default App;
