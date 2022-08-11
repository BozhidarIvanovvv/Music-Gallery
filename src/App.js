/* eslint-disable */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import * as albumService from "./Services/albumService";
import { AuthContext } from "./Contexts/AuthContext";
import { AlbumContext } from "./Contexts/AlbumContext";

import Header from "./Components/Home/Header";
import Nav from "./Components/Home/Nav/Nav";
import Banner from "./Components/Home/Banner";
import LatestAlbum from "./Components/Hero/LatestAlbum";
import Promo from "./Components/Hero/Promo";
import FeaturedAlbums from "./Components/Home/FeaturedAlbums/FeaturedAlbums";
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
import Logout from "./Components/Authentication/Logout/Logout";
import Error from "./Components/Error/Error";

function App() {
  const [albums, setAlbums] = useState([]);
  const [auth, setAuth] = useState({});

  const userLoginHandler = (authData) => {
    setAuth(authData);
  };

  const userLogoutHandler = () => {
    setAuth({});
  };

  useEffect(() => {
    albumService.getAll().then((result) => {
      setAlbums(result);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: auth, userLoginHandler, userLogoutHandler }}
    >
      <>
        <div className="wrapper" id="home">
          <Header />
          <Nav />

          <AlbumContext.Provider value={albums}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <FeaturedAlbums albums={albums} />
                    <LatestAlbum />
                    <Promo />
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
                    <Modal />
                  </>
                }
              ></Route>

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/error" element={<Error />} />
            </Routes>
          </AlbumContext.Provider>
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
    </AuthContext.Provider>
  );
}

export default App;
