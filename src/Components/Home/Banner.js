import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* <!-- Wrapper for slides --> */}
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="img/banner/b1.jpg" alt="..." />
            <div className="container">
              {/* <!-- banner caption --> */}
              <div className="carousel-caption slide-one">
                {/* <!-- heading --> */}
                <h2 className="animated fadeInLeftBig">
                  <i className="fa fa-music"></i> Music Gallery
                </h2>
                {/* <!-- paragraph --> */}
                <h3 className="animated fadeInRightBig">
                  Find More Innovative &amp; Creative Music Albums.
                </h3>
                {/* <!-- button --> */}
                <Link
                  to="/featuredAlbums"
                  className="animated fadeIn btn btn-theme"
                >
                  Featured Albums
                </Link>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="img/banner/b2.jpg" alt="..." />
            <div className="container">
              {/* <!-- banner caption --> */}
              <div className="carousel-caption slide-two">
                {/* <!-- heading --> */}
                <h2 className="animated fadeInLeftBig">
                  <i className="fa fa-headphones"></i> Listen It...
                </h2>
                {/* <!-- paragraph --> */}
                <h3 className="animated fadeInRightBig">
                  Lorem ipsum dolor sit amet, consectetur elit.
                </h3>
                {/* <!-- button --> */}
                <a href="#" className="animated fadeIn btn btn-theme">
                  Listen Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
