const Meet = () => {
  return (
    <div className="meet parallax-four pad" id="meet">
      <div className="container">
        {/* <!-- default heading --> */}
        <div className="default-heading-shadow">
          <h2>Upcoming Meets</h2>
        </div>
        {/* <!-- meet location image --> */}
        <div className="meet-map">
          <img
            className="img-responsive img-map"
            src="img/flat/map.png"
            alt=""
          />
          {/* <!-- map marker for India  --> */}
          <a
            href="#"
            className="map-marker india "
            data-toggle="tooltip"
            data-placement="top"
            title="India"
          >
            <img
              className="img-responsive"
              src="img/flat/map-marker.png"
              alt=""
            />
          </a>
          {/* <!-- map marker for United States  --> */}
          <a
            href="#"
            className="map-marker usa "
            data-toggle="tooltip"
            data-placement="top"
            title="United States"
          >
            <img
              className="img-responsive"
              src="img/flat/map-marker.png"
              alt=""
            />
          </a>
          {/* <!-- map marker for South Africa  --> */}
          <a
            href="#"
            className="map-marker sa "
            data-toggle="tooltip"
            data-placement="top"
            title="South Africa"
          >
            <img
              className="img-responsive"
              src="img/flat/map-marker.png"
              alt=""
            />
          </a>
          {/* <!-- map marker for Russia  --> */}
          <a
            href="#"
            className="map-marker russia "
            data-toggle="tooltip"
            data-placement="top"
            title="Russia"
          >
            <img
              className="img-responsive"
              src="img/flat/map-marker.png"
              alt=""
            />
          </a>
          {/* <!-- map marker for Brazil  --> */}
          <a
            href="#"
            className="map-marker brazil "
            data-toggle="tooltip"
            data-placement="top"
            title="Brazil"
          >
            <img
              className="img-responsive"
              src="img/flat/map-marker.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Meet;
