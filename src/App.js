/* eslint-disable */
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as albumService from "./Services/albumService";
import { AuthContext } from "./Contexts/AuthContext";
import { AlbumContext } from "./Contexts/AlbumContext";
import { useLocalStorage } from "./Hooks/useLocalStorage";

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
import Register from "./Components/Authentication/Register/Register";
import Login from "./Components/Authentication/Login/Login";
import Logout from "./Components/Authentication/Logout/Logout";
import Error from "./Components/Error/Error";
import Create from "./Components/Create/Create";
import Details from "./Components/Details/Details";
import EditAlbum from "./Components/EditAlbum/EditAlbum";
import Cart from "./Components/Cart/Cart";
import Funds from "./Components/Funds/Funds";

function App() {
  const [albums, setAlbums] = useState([]);
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [cart, setCart] = useState([]);
  const [funds, setFunds] = useState({ fundsState: 0 });
  const [boughtAlbums, setboughtAlbums] = useState([]);

  const navigate = useNavigate();

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

  const albumAdd = (album) => {
    setAlbums((state) => [...state, album]);

    navigate("/#FeaturedAlbums");
  };

  const albumRemove = (albumId) => {
    setAlbums((state) => [...state.filter((a) => a._id !== albumId)]);

    albumService.delOne(albumId).then(() => {
      navigate("/#FeaturedAlbums");
    });
  };

  const albumEdit = (albumId, albumData) => {
    setAlbums((state) => state.map((a) => (a._id === albumId ? albumData : a)));
  };

  const addToCartHandler = (album) => {
    if (cart.indexOf(album) !== -1) return;
    setCart([...cart, album]);
  };

  const buyAlbumHandler = (products) => {
    let totalPrice = 0;

    if (products.length === 1) {
      totalPrice = Number(products[0].price);
    } else {
      totalPrice = products
        .reduce(function (acc, obj) {
          return acc + Number(obj.price);
        }, 0)
        .toFixed(2);
    }

    if (funds.fundsState - totalPrice < 0) {
      console.log("Not enough funds!");
      return;
    }

    products.forEach((p) => {
      p.buyerId = auth._id;
    });

    setboughtAlbums(products);
    setFunds({
      fundsState: Number(funds.fundsState) - Number(totalPrice),
    });
    setCart([]);
  };

  return (
    <AuthContext.Provider
      value={{ user: auth, userLoginHandler, userLogoutHandler }}
    >
      <>
        <div className="wrapper" id="home">
          <Header />
          <Nav cartItemsCount={cart.length} funds={funds} />

          <AlbumContext.Provider
            value={{ albums, albumAdd, albumRemove, albumEdit }}
          >
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
                    {/* <Modal /> */}
                  </>
                }
              ></Route>

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/error" element={<Error />} />
              <Route path="/create" element={<Create />} />
              <Route
                path="/addFunds"
                element={<Funds funds={funds} setFunds={setFunds} />}
              />
              <Route
                path="/details/:albumId"
                element={
                  <Details
                    addToCartHandler={addToCartHandler}
                    boughtAlbums={boughtAlbums}
                  />
                }
              />
              <Route path="/edit/:albumId" element={<EditAlbum />} />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    setCart={setCart}
                    handleBuy={buyAlbumHandler}
                  />
                }
              />
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
