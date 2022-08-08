const Promo = () => {
  return (
    <div className="promo parallax-one pad">
      <div className="container">
        {/* <!-- promo element --> */}
        <div className="promo-element ">
          {/* <!-- heading --> */}
          <h3>Music An Art...</h3>
          {/* <!-- paragraph --> */}
          <p>
            Music is an art form and cultural activity whose medium is sound
            organized in time. The common elements of music are{" "}
            <strong>pitch</strong>, <strong>rhythm</strong>,{" "}
            <strong>dynamics</strong> and the sonic qualities of{" "}
            <strong>timbre</strong> and <strong>texture</strong>.
          </p>
          {/* <!-- link --> */}
          <a className="promo-link" href="#">
            <i className="fa fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promo;
