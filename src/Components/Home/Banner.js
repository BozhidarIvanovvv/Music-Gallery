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
                  <i className="fa fa-music"></i> Melodi For You!
                </h2>
                {/* <!-- paragraph --> */}
                <h3 className="animated fadeInRightBig">
                  Find More Innovative &amp; Creative Music Albums.
                </h3>
                {/* <!-- button --> */}
                <a href="#" className="animated fadeIn btn btn-theme">
                  Download Here
                </a>
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

        {/* <!-- Controls --> */}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="fa fa-arrow-left" aria-hidden="true"></span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="fa fa-arrow-right" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
